This page contains an overview of the Xtract Universal server tasks and the underlying server architecture to execute the tasks. The server performs two main tasks:

- Run extractions stored in the [Config](../../setup/migration/#configuration-files) directory.
- Make extractions stored in the [Config](../../setup/migration/#configuration-files) directory available to the Designer.

### Run Extractions on the Server

The execution of an extraction is triggered by an HTTP request. The HTTP request can be triggered from the target environment for [pull destinations](../../destinations/) or from the xu command line tool (xu.exe /xu.elf), see [Execute and Automate Extractions](../../execute-and-automate/call-via-commandline/).

Tip

The process can be traced in the [Extraction Log](../../logs/#access-extraction-logs).

1. The Theobald.xu.Web.Worker.exe checks the authentication and authorization of the request.
1. The target environment is prepared for writing the extracted data (e.g. establish database connection, create file).
1. The license is checked.
1. A connection to the SAP source system is established.
1. The data of the defined extraction type is requested.
1. Each extracted data package is written to the target environment.
1. After all packages are received, the Theobald.xu.Web.Worker.exe terminates the connection to the SAP source system and informs the target environment that the extraction is complete.

Tip

The Theobald.xu.Web.Worker.exe logs its actions in log files. The log files are located in the logs subdirectory of the program directory:`C:\Program Files\XtractUniversal\logs\servers\web\worker` (default) The logs can also be displayed in the Designer under **[Server]>[Logs (Web Worker)]**.

### Access the Settings using the Designer

The steps below show what happens when a Designer connects to the Server and changes settings.

1. The Theobald.xu.Rpc.Worker.exe checks the authentication and authorization of the request.
1. The Designer requests a certain setting, e.g., list of all extractions.
1. The Theobald.xu.Rpc.Worker.exe reads the requested settings from the [config directory](../../setup/migration/#configuration-files) and sends these settings to the Designer.
1. The user changes settings in the Designer, e.g., destination settings.
1. The Designer sends the changed settings back to the Theobald.xu.Rpc.Worker.exe. Theobald.xu.Rpc.Worker.exe saves the changed settings in the [config directory](../../setup/migration/#configuration-files).

Tip

The Theobald.xu.Rpc.Worker.exe logs its actions in log files. The log files are located in the logs subdirectory of the program directory: `C:\Program Files\XtractUniversal\logs\server\rpc\worker` (default).

### Server Architecture

The server runs as a Windows Service and the main process of the service is the XtractService.exe. The XtractService.exe starts two listener processes:

- Theobald.xu.Web.Listener.exe
- Theobald.xu.Rpc.Listener.exe

Both listener processes listen on the [Ports](../#ports) defined in the [Server Settings](../server-settings/).

Tip

The XtractService.exe logs its actions in ServiceLog.txt The log file is located in the logs subdirectory of the program directory: `C:\Program Files\XtractUniversal\logs` (default).

#### Theobald.xu.Rpc.Listener.exe

The Theobald.xu.Rpc.Listener.exe waits for new connection requests from the Designer.\
For each TCP connection the Theobald.xu.Rpc.Listener.exe starts a new instance of Theobald.xu.Rpc.Worker.exe, which processes all Designer requests coming in over the particular TCP connection, see [Access the Settings using the Designer](#access-the-settings-using-the-designer).

Tip

The Theobald.xu.Rpc.Listener.exe logs its actions in log files. The log files are located in the logs subdirectory of the program directory: `C:\Program Files\XtractUniversal\logs\server\rpc\listener` (default).

#### Theobald.xu.Web.Listener.exe

The Theobald.xu.Web.Listener.exe waits for HTTP requests.\
For each TCP connection the Theobald.xu.Web.Listener.exe starts a new instance of Theobald.xu.Web.Worker.exe, which processes all HTTP requests coming in over the particular TCP connection, see [Run Extraction on the Server](#run-extractions-on-the-server).

The following HTTP requests are possible:

- running an extraction
- emptying the result cache of an extraction
- canceling all runs of an extraction
- [Web API requests](../../../web-api/)

Tip

The Theobald.xu.Web.Listener.exe logs its actions in log files. The log files are located in the logs subdirectory of the program directory: `C:\Program Files\XtractUniversal\logs\server\web` (default).
