Board Connector logs all steps performed on a system in log files.\
This page shows how to access server and extraction logs in the Designer. Logs can also be queried using the Board Connector [Web API](../../web-api/).

### Log Levels

Each log entry is assigned one of the following message types:

| Type of log entry | Description | | --- | --- | | *E - Errors* | Error messages issued during the extraction process. | | *I - Information* | Status messages, about processes that do not lead to an error. | | *W - Warnings* | Information about problems that do not lead to an extraction error, e.g., authentication errors. | | *D - Debug Details* | Detailed information that helps finding error cause. |

### Access Server Logs

To open the server logs, navigate to **Server > Log (Web Worker)** in the main window of the Designer.

The logs are created per TCP connection. To switch between logs, use the list of timestamps on the left. Server logs are automatically deleted after a defined period of time, see [server settings](../server/server-settings/).

For information on how to query server logs using the web API, see [Web API - Get Server Logs](../../web-api/#get-server-logs).

### Access Extraction Logs

To open the extraction logs, select an extraction from the list of extractions and click **[ Logs]** in the main window of the Designer.

The timestamp for each extraction process is displayed in the left part of the "View Extraction Log" window. Extraction logs are automatically deleted after a defined period of time, see [server settings](../server/server-settings/).

For information on how to query extraction logs using the web API, see [Web API - Get Extraction Logs](../../web-api/#get-extraction-logs).

- To filter the execution date of the logs, enter a time period in .
- To filter log levels, use the checkboxes underneath the log display .
- To copy the current log to the clipboard, click **[]** .

### Activate Tracing

The RFC communication with SAP can be recorded by tracing for troubleshooting purposes.\
Standard logging is always active and is independent of the tracing setting.

1. Open the [SAP connection settings](../sap-connection/settings/) of the source that is assigned to the failing extraction.
1. In the tab *RFC Options*, enter the path to an existing directory in the field **Trace directory** or create a new directory for the trace files.
1. Reproduce the error. XML files with the tracing information are created in the specified directory.
1. Compress the folder to a zip file ("Trace.zip") and send the zip file to the Theobald [support team](https://support.theobald-software.com/helpdesk/).
1. Reopen the SAP connection settings and delete the path in the field **Trace directory**.

Warning

**Increase of used hard drive memory.**\
A big amount of information is collected when debug logging is activated. This can decrease the capacity of your hard drives dramatically. Activate the debug logging only when necessary e.g., upon request of the support team.

### Generated Log Files

The log files are stored in the installation directory of Board Connector, e.g., `C:\Program Files\BOARDConnector\logs`. The following log files are created:

| Type | File Name | Description | Location path | | --- | --- | --- | --- | | Server | ServiceLog.txt | Contains the activities of XtractService.exe. | `C:\Program Files\BOARDConnector\logs` | | Server | WebServer-Log: yyyyMMddTHHmmss.fffZ.log, e.g., 20201013T055455.465Z.log | The name contains the timestamp in UTC. A new file is created when the server is started, additionally a new log file is created every 24 hours. [Theobald.BC.Web.Listener.exe](../server/server-tasks/#theobaldbcweblistenerexe) is the corresponding process. | `C:\Program Files\BOARDConnector\logs\servers\web\listener` | | Server | WebWorker-Logs: yyyyMMddTHHmmss.fffZ.log, e.g., 20201013T055455.465Z.log | The name contains the timestamp in UTC. A new file is created when a TCP connection is accepted.Theobald.BC.Web.Worker.exe is the corresponding process. | `C:\Program Files\BOARDConnector\logs\servers\web\worker` | | Extraction | Extraction logs: yyyyMMddTHHmmss.fffZ.log, e.g., 20201013T055455.465Z.log | The name contains the timestamp in UTC. A new file is created to start an extraction. Theobald.BC.Web.Worker.exe is the corresponding process. | `C:\Program Files\BOARDConnector\logs\extractions\[Name_der_Extaktion]` |

For more information on the server processes, see [Server Tasks](../server/server-tasks/).

Tip

To redirect logs to another location, symlink the logs folder of the installation directory to a custom directory.\
Example for PowerShell:

```shell
New-Item -ItemType SymbolicLink -Target "E:\log" -Path "C:\Program Files\BOARDConnector\logs"

```
