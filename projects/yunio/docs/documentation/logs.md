---
title: Logs
description: Logs
---
 
The following section contains information on the server and transaction logs created by yunIO.
The logs are accessible in the  :yunio-nav-logs: *Logs* menu in the Designer.

### Display Logs in Designer
The logs are located in the *Logs* section of the yunIO Designer. <br>
There are three types of logs:

| Type of log | Description| 
|--------|--------|
| *Service Runs* | Displays a list of the latest service runs, including the status of the service run.  | 
| *Service Workers* | Displays logs of service worker processes. For each TCP connection, a service worker process is started. It receives the HTTP request, executes the service, and sends the response to the caller.   | 
| *Transaction Workers* | Displays logs of [Transaction](./transactions) services. When running Transactions services, a transaction worker process is started. It executes the service and produces the response, which is then forwarded to the caller by the service worker. | 


### Service Runs

The list of service runs consists of the following columns:
- Name of the service
- Date of the log
- Duration of the service run
- State of the service run (*Running*, *FinishedErrors*, *FinishedNoErrors*)

Click a service run to display the corresponding extraction log, see :number-1:.

![yunIO-Logs](../assets/images/yunio/yunIO-Run-Logs.png){:class="img-responsive"}

### Service Workers and Transaction Workers

The logs of the service worker and transaction worker consist of two sections:
- Timestamps of the logs, see :number-1:
- Content of the logs, see :number-2:

Click a timestamp to open the corresponding logs.

![yunIO-Logs](../assets/images/yunio/yunIO-Logs.png){:class="img-responsive"}

#### How to Read Worker Logs

A single log has the following format: `Time | Type | Source | Message`. 
<br> Example:

| Time | Type | Source | Message | 
|--------|--------|--------|---|
| PT00H00M43.777S | D | ExecutionCore: | Extraction finished, firing callback  | 

#### Time

Each log has a timestamp that uses pacific time (PT) in hours (H), minutes (M) and seconds (S), e.g., `PT00H00M43.777S`.

#### Type
Each log entry is assigned one of the following message types:

| Type of log entry | Description| 
|--------|--------|
| *E - Errors*| Error messages issued during the extraction process.  | 
| *I - Information*| Status messages, about processes that do not lead to an error. | 
| *W - Warnings*| Information about problems that do not lead to an extraction error, e.g., authentication errors.  | 
| *D - Debug Details*| Detailed information that helps finding error cause.  | 


### Logs Directory

The following list shows all logs that are created in the `logs` folder of yunIO's installation directory, e.g., in `C:\Program Files\Theobald Software\yunIO\logs`:

|Folder | Subfolder| Description |
|:----|:---|:---|
|diagnostic_runs |- | Contains debug information about transaction services. This folder is only created when diagnostics mode is enabled in the settings of a transaction service. |
|extractions |- | Contains logs (.json and .log files) for every service run. The .json file contains the duration and result status of the run and the .log file contains the details of the run. |
|servers| | Contains server logs. The subfolders `azurerelay`, `designer`, `services` and `websockets` each represent a web server used by yunIO. Each server has a listener and a worker. The listener listens on the configured port of the server for connections (listener logs). Each connection starts a worker that processes requests (worker logs).|
| | azurerelay| Contains listener logs for Azure Relay connections. This folder is only created when the [server settings](./server-settings) are set to use an *Azure Hybrid Connection*.|
| | designer| Contains listener and transaction logs. The transaction logs are created when recording a transaction in the Designer.|
| | services| Contains listener, worker and transaction logs. The transaction logs are created when a transaction service is run.|
| | websockets| Contains listener and worker logs of the websocket server that provides the yunIO Designer with data. |
|ServiceLog.txt |- | Logs of the yunIO Windows service.|


!!! tip
    To redirect logs to another location, symlink the logs folder of yunIO's installation directory to a custom directory.
    Example for PowerShell:<br>
    `New-Item -ItemType SymbolicLink -Target "E:\yuniolog" -Path "C:\Program Files\Theobald Software\yunIO\logs"`
