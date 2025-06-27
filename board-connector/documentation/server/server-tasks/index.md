This page contains an overview of the Board Connector server tasks and the underlying server architecture to execute the tasks. The server performs two main tasks:

- Run extractions stored in the [Config](../../setup/migration/#configuration-files) directory.
- Make extractions stored in the [Config](../../setup/migration/#configuration-files) directory available to the Designer.

### Run Extractions on the Server

The execution of an extraction is triggered by an HTTP request.

Tip

The process can be traced in the [Extraction Log](../../logs/#access-extraction-logs).

1. The Theobald.bc.Web.Worker.exe checks the authentication and authorization of the request.
1. The target environment is prepared for writing the extracted data (e.g. establish database connection, create file).
1. The license is checked.
1. A connection to the SAP source system is established.
1. The data of the defined extraction type is requested.
1. Each extracted data package is written to the target environment.
1. After all packages are received, the Theobald.bc.Web.Worker.exe terminates the connection to the SAP source system and informs the target environment that the extraction is complete.

Tip

The Theobald.bc.Web.Worker.exe logs its actions in log files. The log files are located in the logs subdirectory of the program directory:`C:\Program Files\BOARDConnector\logs\servers\web\worker` (default) The logs can also be displayed in the Designer under **[Server]>[Logs (Web Worker)]**.

### Access the Settings using the Designer

The steps below show what happens when a Designer connects to the Server and changes settings.

1. The Theobald.bc.Rpc.Worker.exe checks the authentication and authorization of the request.
1. The Designer requests a certain setting, e.g., list of all extractions.
1. The Theobald.bc.Rpc.Worker.exe reads the requested settings from the [config directory](../../setup/migration/#configuration-files) and sends these settings to the Designer.
1. The user changes settings in the Designer, e.g., destination settings.
1. The Designer sends the changed settings back to the Theobald.bc.Rpc.Worker.exe. Theobald.bc.Rpc.Worker.exe saves the changed settings in the [config directory](../../setup/migration/#configuration-files).

Tip

The Theobald.bc.Rpc.Worker.exe logs its actions in log files. The log files are located in the logs subdirectory of the program directory: `C:\Program Files\BOARDConnector\logs\server\rpc\worker` (default).

### Server Architecture

The server runs as a Windows Service and the main process of the service is the BCService.exe. The XtractService.exe starts two listener processes:

- Theobald.bc.Web.Listener.exe
- Theobald.bc.Rpc.Listener.exe

Both listener processes listen on the [Ports](../#ports) defined in the [Server Settings](../server-settings/).

Tip

The XtractService.exe logs its actions in ServiceLog.txt The log file is located in the logs subdirectory of the program directory: `C:\Program Files\BOARDConnector\logs` (default).

#### Theobald.bc.Rpc.Listener.exe

The Theobald.bc.Rpc.Listener.exe waits for new connection requests from the Designer.\
For each TCP connection the Theobald.bc.Rpc.Listener.exe starts a new instance of Theobald.bc.Rpc.Worker.exe, which processes all Designer requests coming in over the particular TCP connection, see [Access the Settings using the Designer](#access-the-settings-using-the-designer).

Tip

The Theobald.bc.Rpc.Listener.exe logs its actions in log files. The log files are located in the logs subdirectory of the program directory: `C:\Program Files\BOARDConnector\logs\server\rpc\listener` (default).

#### Theobald.bc.Web.Listener.exe

The Theobald.bc.Web.Listener.exe waits for HTTP requests.\
For each TCP connection the Theobald.bc.Web.Listener.exe starts a new instance of Theobald.bc.Web.Worker.exe, which processes all HTTP requests coming in over the particular TCP connection, see [Run Extraction on the Server](#run-extractions-on-the-server).

The following HTTP requests are possible:

- running an extraction
- emptying the result cache of an extraction
- canceling all runs of an extraction
- [Web API requests](../../../web-api/)

Tip

The Theobald.bc.Web.Listener.exe logs its actions in log files. The log files are located in the logs subdirectory of the program directory: `C:\Program Files\BOARDConnector\logs\server\web` (default).
