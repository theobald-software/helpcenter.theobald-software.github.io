### Generated Log Files

The log files are stored in the installation directory of {{ productName }}, e.g., `{{ installationDir }}\logs`.
The following log files are created:

|Type | File Name | Description | Location path |
|:------ | :------ |:--- | :--- |
|Server| ServiceLog.txt | Contains the activities of XtractService.exe.| `{{ installationDir }}\logs` |
|Server| WebServer-Log: yyyyMMddTHHmmss.fffZ.log, e.g., 20201013T055455.465Z.log  | The name contains the timestamp in UTC. A new file is created when the server is started, additionally a new log file is created every 24 hours. [Theobald.{{ Abbr }}.Web.Listener.exe](server/server-tasks.md/#theobald{{ abbr }}weblistenerexe) is the corresponding process.| `{{ installationDir }}\logs\servers\web\listener` |
|Server| WebWorker-Logs: yyyyMMddTHHmmss.fffZ.log, e.g., 20201013T055455.465Z.log  | The name contains the timestamp in UTC. A new file is created when a TCP connection is accepted.Theobald.{{ Abbr }}.Web.Worker.exe is the corresponding process.| `{{ installationDir }}\logs\servers\web\worker` |  
|Extraction| Extraction logs: yyyyMMddTHHmmss.fffZ.log, e.g., 20201013T055455.465Z.log | The name contains the timestamp in UTC. A new file is created to start an extraction. Theobald.{{ Abbr }}.Web.Worker.exe is the corresponding process.| `{{ installationDir }}\logs\extractions\[Name_der_Extaktion]`|

For more information on the server processes, see [Server Tasks](server/server-tasks.md).

!!! tip
	To redirect logs to another location, symlink the logs folder of the installation directory to a custom directory.<br>
	Example for PowerShell:
	``` shell
	New-Item -ItemType SymbolicLink -Target "E:\log" -Path "{{ installationDir }}\logs"
	```