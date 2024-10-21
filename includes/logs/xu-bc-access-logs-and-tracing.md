
### Access Server Logs

To open the server logs, navigate to **Server > Log (Web Worker)** in the main window of the Designer.<br>
![open-logs](../assets/images/documentation/logs/open-logs.png){:class="img-responsive"}


The logs are created per TCP connection. 
To switch between logs, use the list of timestamps on the left.
Server logs are automatically deleted after a defined period of time, see [server settings](server/server-settings.md).

For information on how to query server logs using the web API, see [Web API - Get Server Logs](../web-api.md#get-server-logs).

![View-Server-Log](../assets/images/documentation/logs/View-Server-Log.png){:class="img-responsive"}


### Access Extraction Logs

To open the extraction logs, select an extraction from the list of extractions and click **[:designer-log1: Logs]** in the main window of the Designer.<br>
![open-logs](../assets/images/documentation/logs/{{ abbr }}/open-logs.png){:class="img-responsive"}

The timestamp for each extraction process is displayed in the left part of the "View Extraction Log" window.
Extraction logs are automatically deleted after a defined period of time, see [server settings](server/server-settings.md).

For information on how to query extraction logs using the web API, see [Web API - Get Extraction Logs](../web-api.md#get-extraction-logs).

- To filter the execution date of the logs, enter a time period in :number-1:.
- To filter log levels, use the checkboxes underneath the log display :number-2:.
- To copy the current log to the clipboard, click **[:designer-clone:]** :number-3:. 

![View-Extraction-Log](../assets/images/documentation/logs/View-Extraction-Log.png){:class="img-responsive"} 

### Activate Tracing

The RFC communication with SAP can be recorded by tracing for troubleshooting purposes.<br>
Standard logging is always active and is independent of the tracing setting. 

1. Open the [SAP connection settings](sap-connection/settings.md) of the source that is assigned to the failing extraction.
2. In the tab *RFC Options*, enter the path to an existing directory in the field **Trace directory** or create a new directory for the trace files.<br>
![tracing-path](../assets/images/documentation/logs/tracing_path.png){:class="img-responsive"}
3. Reproduce the error. XML files with the tracing information are created in the specified directory.
4. Compress the folder to a zip file ("Trace.zip") and send the zip file to the Theobald [support team](https://support.theobald-software.com/helpdesk/).
5. Reopen the SAP connection settings and delete the path in the field **Trace directory**.


!!! warning
	**Increase of used hard drive memory.** <br>
	A big amount of information is collected when debug logging is activated. This can decrease the capacity of your hard drives dramatically.
	Activate the debug logging only when necessary e.g., upon request of the support team.
