---
title: Call via Commandline
description: Call via Commandline
---

Extractions can be run via the following command line tools:

| Command Line Tool | Operating System | Directory |
|---|:---|---|
| `xu.exe` | Windows  | The command line tool is available in the default directory `{{ installationDir }}\xu.exe`. |
| `xu.elf` | Unix-, Linux environment | [Download-Link](https://cdn-files.theobald-software.com/download/XtractUniversal/xu.elf.tar.gz) for the Linux version of the commandline tool. |

!!! note
	Both command line tools do not differ in functionality and can be copied and run on any computer. <br> Make sure that the host of the {{ productName }} server is accessible in the network. 

### Call Extractions
The command line tool connects to an {{ productName }} server (service) and starts an extraction with the following runtime parameters:

| Runtime Parameters   | Description | Syntax  |
|:---:|:---|:---|
| -h   |  A short documentation of the command line tool  |   `C:\Program Files\XtractUniversal>xu.exe -h` |
| -n   |  Name of the extraction  | `C:\Program Files\XtractUniversal\xu.exe -n <name>` |
| -s   |  The name or IP address of the machine on which the {{ productName }} service runs. The default is localhost. You can find the current value in the "Run" window of the Designer.|  `xu.exe -n <name> -s <host>`|
| -p   | The port on which the {{ productName }} service runs. The default is 8065. <br> You can find the current value in the "Run" window of the Designer.  | `xu.exe -n <name> -s <host> -p <port>` |
| -o   | Parameters to be set when running the extraction. <br> Multiple parameters can be set. | `xu.exe -n <name> -s <host> -p <port> -o "param1=<wert1>" -o "param2=<wert2>"`|
| -e   | Use [Transport Layer Security (TLS)](https://docs.microsoft.com/en-us/windows/win32/secauthn/transport-layer-security-protocol) (1.2 or higher). |   `xu.exe  -n <name> -s <host> -p <port> -e`|
| -a   | Cancel all running instances of the extraction. | `xu.exe -a` |
| -c   | Clear the result cache and options of the extraction. <br> This only works with [Pull Destinations](../destinations/index.md). | `xu.exe -c` |  

#### Examples
To run an extraction on the {{ productName }} server, call the command line tool as follows:
```console
    xu.exe -n MaterialText
    xu.exe -n MaterialText -s 10.0.0.42 -p 80 -o "rows=1000"
    xu.exe -n MaterialText -s xusrv.corp.local -p 443 -o "rows=1000" -o "SPRAS=D" -e
    xu.exe -n MaterialText -a
    xu.exe "http://localhost:8065/start/MaterialText/&rows=1000"
```

### Return Codes
When an operation is completed successfully, the program returns *0*. In case of an error, the program returns one of the following status codes:

|Return Code	|Description|
|---|---|
|404 |	Extraction does not exist|
|1001|	An undefined error occurred|
|1002|	File could not be found|
|1013|	Invalid input data|
|1014|	Invalid number of arguments|
|1015|	Name of the parameter is unknown|
|1016|	Invalid argument|
|1040|	Timeout error: Waiting period for HTTP-answer of the command line tool is exceeded |
|1053|	The URL of the extraction is incorrect |
|1087|	Invalid parameter |

### Standard Output and Standard Error Output
The output depends on the destination type of the extraction. If the extraction call was successful, the output is *0*.

#### Standard Output of Pull Destinations
When using [Pull Destinations](../destinations/index.md) like HTTP-CSV, HTTP-JSON, etc., extracted data is written into the standard output (sdtout).

#### Standard Output of Push Destinations
When using [Push Destinations](../destinations/index.md) an [Extraction Log](../logs.md) in CSV format is written into the standard output (stdout).

#### Standard Error Output
Logs and error notifications are written into the standard error output (stderr).

<!---
### Options for Calling Extractions

#### Synchronous vs. Asynchronous Call
Calling an synchronous extraction blocks further processes, meaning that the application waits until the extraction is completed and a return code is received.

Calling an asynchronous extraction does not block further processes, meaning that an extraction returns an explicit timestamp so that the application does not have to wait for the extraction to complete.
The timestamp can be used to check the status of the extraction.

|Description	|Syntax|
|:---|:---|
|Suppress the Log output of an extraction (only for synchronous extractions with push destinations) |`xu.exe -o quiet-push=true`|
|Call a synchronous extraction (default)|	`xu.exe -o wait=false`|
|Return the timestamp of an extraction |`xu.exe -n <name> -o wait=false 1>>false_output1.txt 2>>false_output2.txt`|

{: .box-tip }
**Tip:** The XU server offers further functionalities e.g., checking the status of an (asynchronous) extraction, receiving logs or metadara of an extraction, etc. These functionalities are only available via [Webservices](./call-via-webservice#weitere-webservices).
--->

### Basic Authentication via Commandline

The command line tool supports extractions with basic authentication.<br>

When scheduling extractions by executing the command line tool, you can pass credentials for basic authentication as arguments.
While the name of the {{ productName }} Custom User can be passed directly, the Custom User Password needs to be stored in a Base 64 encoded file that is accessible by the command line tool.
The file format can be chosen freely, e.g. .txt, .json, .xml.

1. Create a password file with the following command: 
```
xu.exe -f <path to the location and name of the file>
```
Example: `xu.exe -f "C:\temp\[name of the password file]"`.<br>
The Windows user needs access rights to the file location. You don't have to create this documents in advance.<br>
![Windows Security Settings](../../assets/images/documentation/automation/xu/security_settings_windows_folder.png){:class="img-responsive"}
2. Enter a valid password as requested by the cmd screen. It must consist of at least 8 characters.
3. Pass a user name and the path to the password file as arguments in the command line tool. 
Example: 
```
xu.exe -s todd.theobald.local -p 8165 -e -n MSEG -u Alice -b "C:\temp\password_custom_user"
```
4. Optional: When scheduling an extraction, make sure that the user of the task has access rights to the password file.<br>
![Windows Security Settings](../../assets/images/documentation/automation/xu/security_settings_windows_task_scheduler.png){:class="img-responsive"}

For more information use the command `xu.exe -h`.

****
#### Related Links
- [Knowledge Base Article: Call via Script](../../knowledge-base/call-extraction-via-script.md)
- [Knowledge Base Article: Create Extractions via Commandline](../../knowledge-base/config-command-line-tool.md)
- [Knowledge Base Article: Execute & Schedule all Extractions using an SSIS Package](../../knowledge-base/execute_all_defined_xu_extractions.md)
