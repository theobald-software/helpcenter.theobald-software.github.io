
This page contains an overview of the {{ productName }} server tasks and the underlying server architecture to execute the tasks.
The server performs two main tasks:

- Run extractions stored in the [Config](../migration.md/#configuration-files) directory. 
- Make extractions stored in the [Config](../migration.md/#configuration-files) directory available to the Designer.

### Run Extractions on the Server

The execution of an extraction is triggered by an HTTP request. 
{% if page.meta.product == "xtract-universal" %} The HTTP request can be triggered from the target environment for [pull destinations](../destinations/index.md) or from the {{ abbr }} command line tool (xu.exe /xu.elf), see [Execute and Automate Extractions](../execute-and-automate/call-via-commandline.md). {% endif %}

!!! tip
	The process can be traced in the [Extraction Log](../logs/index.md).

1. The Theobald.{{ abbr }}.Web.Worker.exe checks the authentication and authorization of the request.
2. The target environment is prepared for writing the extracted data (e.g. establish database connection, create file).
3. The license is checked.
4. A connection to the SAP source system is established.
5. The data of the defined {{ component }} is requested.
6. Each extracted data package is written to the target environment.
7. After all packages are received, the Theobald.{{ abbr }}.Web.Worker.exe terminates the connection to the SAP source system and informs the target environment that the extraction is complete.

!!! tip
	The Theobald.{{ abbr }}.Web.Worker.exe logs its actions in log files. 
	The log files are located in the logs subdirectory of the program directory:`{{ installationDir }}\logs\servers\web\worker` (default) 
	The logs can also be displayed in the Designer under **[Server]>[Logs (Web Worker)]**.

### Access the Settings using the Designer

The steps below show what happens when a Designer connects to the Server and changes settings.

1. The Theobald.{{ abbr }}.Rpc.Worker.exe checks the authentication and authorization of the request.
2. The Designer requests a certain setting, e.g., list of all extractions. 
3. The Theobald.{{ abbr }}.Rpc.Worker.exe reads the requested settings from the [config directory](../setup/migration.md/#configuration-files) and sends these settings to the Designer.
4. The user changes settings in the Designer, e.g., destination settings.
5. The Designer sends the changed settings back to the Theobald.{{ abbr }}.Rpc.Worker.exe. 
Theobald.{{ abbr }}.Rpc.Worker.exe saves the changed settings in the [Config directory](../setup/migration.md/#configuration-files).

!!! tip
	The Theobald.{{ abbr }}.Rpc.Worker.exe logs its actions in log files.
	The log files are located in the logs subdirectory of the program directory: `{{ installationDir }}\logs\server\rpc\worker` (default).

### Server Architecture

The server runs as a Windows Service and the main process of the service is the {{ service }}.exe. 
The XtractService.exe starts two listener processes:

- Theobald.{{ abbr }}.Web.Listener.exe
- Theobald.{{ abbr }}.Rpc.Listener.exe

Both listener processes listen on the [Ports](index.md/#ports) defined in the [Server Settings](server-settings.md).

!!! tip
	The XtractService.exe logs its actions in ServiceLog.txt 
	The log file is located in the logs subdirectory of the program directory: `{{ installationDir }}\logs` (default).

#### Theobald.{{ abbr }}.Rpc.Listener.exe
The Theobald.{{ abbr }}.Rpc.Listener.exe waits for new connection requests from the Designer. <br>
For each TCP connection the Theobald.{{ abbr }}.Rpc.Listener.exe starts a new instance of Theobald.{{ abbr }}.Rpc.Worker.exe, which processes all Designer requests coming in over the particular TCP connection, see [Access the Settings using the Designer](#access-the-settings-using-the-designer).

!!! tip
	The Theobald.{{ abbr }}.Rpc.Listener.exe logs its actions in log files. 
	The log files are located in the logs subdirectory of the program directory: `{{ installationDir }}\logs\server\rpc\listener` (default).

#### Theobald.{{ abbr }}.Web.Listener.exe
The Theobald.{{ abbr }}.Web.Listener.exe waits for HTTP requests. <br>
For each TCP connection the Theobald.{{ abbr }}.Web.Listener.exe starts a new instance of Theobald.{{ abbr }}.Web.Worker.exe, which processes all HTTP requests coming in over the particular TCP connection, see [Run Extraction on the Server](#run-extraction-on-the-server).

The following HTTP requests are possible:
- running an extraction
- emptying the result cache of an extraction
- canceling all runs of an extraction
- [Web API requests](../../web-api.md)

!!! tip
	The Theobald.{{ abbr }}.Web.Listener.exe logs its actions in log files. 
	The log files are located in the logs subdirectory of the program directory: `{{ installationDir }}\logs\server\web` (default).

