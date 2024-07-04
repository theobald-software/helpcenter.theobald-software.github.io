
{{ productName }} offers a web API that allows running extractions and querying meta information and extraction logs from {{ productName }} through web calls.
The web API returns the result as an http-json stream.

### Base URL

The basic URL for web calls uses the following format: `[protocol]://[host or IP address]:[port]/`.

#### Examples

| Protocol	  | Syntax	      | Example       |
|:----------- | :------------ | :------------ | 
| HTTP	| `http://[host].[domain]:[port]` | `http://sherri.theobald.local:8065` | 
| HTTP	| `http://[host]:[port]` | 	`http://localhost:8065` | 
| HTTPS | `https://[host].[domain]:[port]` | `https://sherri.theobald.local:8165` <br>Requires a dedicated host name and X.509 certificate, see {% if page.parent == "xtract-universal" or page.parent == "board-connector"%}[web server settings](./server/server-settings#web-server).{% else %}[web server settings](documentation/server/server-settings.md#web-server).{% endif %} | 


!!! note 
	Make sure to use the correct ports, see [Server Ports](documentation/server/index.md#ports).


### Run Extractions

=== "Run Extractions Synchronous"
	```
	[protocol]://[host]:[port]/run/[extraction_name]
	```
	<div class="result" markdown>
	
	Runs the specified extraction.
	
	</div>
=== "Run Extractions Asynchronous"
	```
	[protocol]://[host]:[port]/start/[extraction_name]
	```
	<div class="result" markdown>
	
	Runs the specified extraction asynchronously and returns the run status immediately.
	
	</div>

{% if page.meta.product != "board-connector" %}	
If the extraction is located inside an [extraction group](documentation/execute-and-automate/run-an-extraction.md), the name of the extraction group is part of the extraction name.
<br>Example: The extraction "KNA1" in the extraction group "S4HANA" becomes `S4HANA,KNA1`.
{% endif %}

!!! warning
	**Deprecated Endpoints:**<br>
	- `[protocol]://[host]:[port]/?name=[extraction_name]` becomes `[protocol]://[host]:[port]/run/[extraction_name]`
	- `[protocol]://[host]:[port]/?name=[extraction_name]&wait=false` becomes `[protocol]://[host]:[port]/start/[extraction_name]`

!!! tip
	 You can use the UI in the “Run Extraction” menu to generate an URL for extraction runs, see {% if page.meta.product == "xtract-universal" %}[Run Extractions](documentation/execute-and-automate/run-an-extraction.md/#run-extractions-in-the-designer){% else %}[Run Extractions](documentation/run-extractions.md/#run-extractions-in-the-designer){% endif %}.

 
#### Response
The response of the web service call contains the following information:

|     | Response | Description | 
|:---:|-----------|--------------|
| :number-1: | HTTP status code | The HTTP status code *200* indicates a successful extraction call. It does not indicate a successful execution of the extraction. <br> The HTTP status code *404* indicates that the called extraction does not exist. Detailed information can be found in the log of the web service. | 
| :number-2: | HTTP header | Shows the timestamp of the extraction in the HTTP header e.g., X-{{ Abbr }}-Timestamp: *2021-04-09_19:03:09.971* | 
| :number-3: | HTTP response body | The Response in the HTTP body depends on the destination type of the extraction. Depending on the destination type, the extracted data is returned in either CSV or JSON format. | 

![Webservice Call pull](assets/images/documentation/execute-and-automate/call_webservice_csv.png){:class="img-responsive"}

#### Parameters for `[protocol]://[host]:[port]/start/[extraction_name]`

| Parameter    | Description  | 
|-----------|--------------|
| ```&[parameter1_name]=[value]```  |   Runs the specified extraction and passes values to the specified [extraction parameters](documentation/parameters/extraction-parameters.md). |
{% if page.meta.product != "board-connector" %}| ```&quiet-push=true```  |   Runs the specified extraction and suppresses the output of extraction logs for push destinations. This parameter has no effect on pull destinations and asynchronous extractions.| {% endif %}

!!! tip
	You can use the UI in the "Run Extraction" menu to generate a URL for extraction runs, see {% if page.meta.product == "xtract-universal" %}[Run Extractions](documentation/execute-and-automate/run-an-extraction.md/#run-extractions-in-the-designer){% else %}[Run Extractions](documentation/run-extractions.md/#run-extractions-in-the-designer){% endif %}.

#### Examples 

??? api "http://sherri.theobald.local:{{ port }}/start/KNA1"

	```csv
	MANDT,KUNNR,LAND1,NAME1,ORT01
	800,0000000313,DE,zdemo customer zr,
	800,0000001824,IN,,
	800,0000001832,IN,cus 3,
	800,0000001834,IN,52 CUSTOMER,
	800,0000001837,IN,emax,
	800,0000005002,JP,One time customer,
	800,0000010009,,Einmalkunde,
	800,0000011113,DE,Myers Corp.,
	800,0000011114,DE,Watson & Watson,
	800,0000100016,DE,Einmalkunde,
	800,0000100026,DE,Reference Customer for Internet,
	800,0000100236,US,,
	800,0000100291,IN,RELIANCE FRESH DOMESTIC CUSTOMERS,
	800,0000200000,IN,MA Reddy Customer,
	800,0000200001,IN,SD Customer,
	800,0000200002,IN,SMR Customer,
	800,0000300050,,,
	800,0000300065,GB,ComputerWorld,
	800,0000300320,GB,Customer 1,
	800,0000300430,DE,testcompany crm,
	800,0000300735,US,OTHER MASS,
	800,0000300736,US,OTHER GROCRY,
	800,0000300737,US,OTHER CONVENIENCE,
	800,0000300738,US,OTHER MILITARY,
	800,0000300739,US,OTHER FOOD,
	...
	```
	
??? api "http://sherri.theobald.local:{{ port }}/start/KNA1/?cityParam=Stuttgart&companyParam=Theobald+Software"

	```csv
	MANDT,KUNNR,LAND1,NAME1,ORT01
	800,0000000779,DE,Theobald Software,Stuttgart"
	```

### Abort Extraction

```
[protocol]://[host]:[port]/abort?name=[extraction_name]
```  
<div class="result" markdown>

Aborts the specified extraction. If the abortion is successful, a confirmation message is returned in the HTTP body. 

</div>

{% if page.meta.product != "board-connector" %}

!!! note
	If the extraction is located inside an [extraction group](documentation/organize-extractions.md), the name of the extraction group is part of the extraction name.
	<br>Example: The extraction "KNA1" in the extraction group "S4HANA" becomes `S4HANA,KNA1`.

{% endif %}

#### Example

??? api "http://sherri.theobald.local:{{ port }}/abort?name=KNA1"

	```csv
	All runs of extraction 'KNA1' aborted.
	```

### Get Status of an Extraction

```
[protocol]://[host]:[port]/status/?name=[extraction_name]&timestamp=[yyyy-MM-dd_HH:mm:ss.SSS]
``` 
<div class="result" markdown>

Returns the status of a (running) extraction at the specified timestamp. <br>

</div>

{% if page.meta.product != "board-connector" %}

!!! note
	If the extraction is located inside an [extraction group](documentation/organize-extractions.md), the name of the extraction group is part of the extraction name.
	<br>Example: The extraction "KNA1" in the extraction group "S4HANA" becomes `S4HANA,KNA1`.

{% endif %}

!!! tip
	The timestamp corresponds to the *startedAt* element returned by [`[protocol]://[host]:[port]/config/extractions/`](#get-extraction-details) or [`[protocol]://[host]:[port]/logs/extractions/[extraction-name]`](#get-extraction-logs).

#### Response

| State            | Description                                                  |
|------------------|--------------------------------------------------------------|
| Running          | The extraction is running.                                   |
| FinishedNoErrors | The extraction is finished without errors.             |
| FinishedErrors   | The extraction is finished, but with at least one error. |

#### Example

??? api "http://sherri.theobald.local:{{ port }}/status/?name=KNA1&timestamp=2024-02-05_10:23:08.025"

	```csv
	FinishedNoErrors
	```

### Get Extraction Logs

```
[protocol]://[host]:[port]/logs/extractions
``` 
<div class="result" markdown>

Returns a list of extraction runs. 

</div>

#### Response

The result contains the following elements:

|  Item   | Description    |
|--------------|---------|
| extractionName  | name of the extraction {% if page.meta.product != "board-connector" %}(if the extraction is located inside an [extraction group](documentation/organize-extractions.md), the name of the extraction group is part of the extraction name, e.g., the extraction "KNA1" in the extraction group "S4HANA" becomes `S4HANA,KNA1`) {% endif %}|
| runs  | contains *rowCount*, *duration*, *state*, *webServerLog* and *startedAt* of extraction runs |
| row count| number of extracted data records |
| duration | duration of the execution |
| state| status of the extraction (*Running*, *FinishedNoErrors*, *FinishedErrors*) |
| webServerLog| timestamp of the corresponding [server log](documentation/logs.md#log-levels) |
| startedAt| timestamp of the execution |


#### Parameters & Options for `[protocol]://[host]:[port]/logs/extractions`

| Parameter    | Description  | 
|-----------|--------------|
| ```?min=[yyyy-MM-dd_HH:mm:ss.SSS]```  |   Returns the extraction runs after the specified date and time. |
| ```?max=[yyyy-MM-dd_HH:mm:ss.SSS]```  |   Returns the extraction runs before the specified date and time. |
| ```/[extraction-name]```  |   Returns all extraction runs of the specified extraction. |
| ```/[extraction-name]/[yyyy-MM-dd_HH:mm:ss.SSS]```  |   Returns the extraction run of the specified extraction with the specified timestamp. |
| ```/[extraction-name]/[yyyy-MM-dd_HH:mm:ss.SSS]/log```  |   Returns the extraction log of the specified extraction with the specified timestamp. |

!!! note 
	For information on how to interpret logs, see [Logs](documentation/logs.md).

#### Examples

??? api "http://sherri.theobald.local:{{ port }}/logs/extractions?min=2023-08-17_11:20:44.029"

	```json
	{
    "extractions": 
    [
        {
            "extractionName": [
                "MEBEST"
            ],
            "runs": [
                {
                    "rowCount": 53,
                    "duration": "PT00H00M00.541S",
                    "state": "FinishedNoErrors",
                    "webServerLog": "2024-05-31_07:19:36.156",
                    "startedAt": "2024-05-31_07:19:37.006"
                }
            ]
        },
        {
            "extractionName": [
                "S4HANA",
                "BSEG"
            ],
            "runs": [
                {
                    "rowCount": 12036,
                    "duration": "PT00H00M00.584S",
                    "state": "FinishedNoErrors",
                    "startedAt": "2024-06-12_08:56:28.066"
                }
            ]
        },
		{
            "extractionName": [
                "S4HANA",
                "KNA1"
            ],
            "runs": [
                {
                    "rowCount": 10071,
                    "duration": "PT00H00M03.753S",
                    "state": "FinishedNoErrors",
                    "webServerLog": "2024-04-12_11:10:59.505",
                    "startedAt": "2024-04-12_11:11:57.977"
                },
                {
                    "rowCount": 0,
                    "duration": "PT00H00M03.068S",
                    "state": "FinishedErrors",
                    "webServerLog": "2024-05-31_07:20:06.041",
                    "startedAt": "2024-05-31_07:20:06.840"
                }
            ]
        }
	]
	```

??? api "http://sherri.theobald.local:{{ port }}/logs/extractions/KNA1"

	```json
	{
		"runs": [
			{
				"rowCount": 10071,
				"duration": "PT00H00M03.753S",
				"state": "FinishedNoErrors",
				"webServerLog": "2024-04-12_11:10:59.505",
				"startedAt": "2024-04-12_11:11:57.977"
			},
			{
				"rowCount": 0,
				"duration": "PT00H00M03.068S",
				"state": "FinishedErrors",
				"webServerLog": "2024-05-31_07:20:06.041",
				"startedAt": "2024-05-31_07:20:06.840"
			}
			]
		}
	```

??? api "http://sherri.theobald.local:{{ port }}/logs/extractions/KNA1/2024-04-12_11:11:57.977"

	```json
	{
		"rowCount": 10071,
		"duration": "PT00H00M03.753S",
		"state": "FinishedNoErrors",
		"webServerLog": "2024-04-12_11:10:59.505",
		"startedAt": "2024-04-12_11:11:57.977"
	}
	```

??? api "http://sherri.theobald.local:{{ port }}/logs/extractions/KNA1/2024-04-12_11:11:57.977/log"

	```json
	{
		"rowCount": 10071,
		"duration": "PT00H00M03.753S",
		"state": "FinishedNoErrors",
		"webServerLog": "2024-04-12_11:10:59.505",
		"startedAt": "2024-04-12_11:11:57.977",
		"logEntries": [
			{
				"timestamp": "2024-04-12_11:11:58.080",
				"logLevel": "Info",
				"source": "Table",
				"message": "{{ productName }} server version: 6.4.1.0"
			},
			{
				"timestamp": "2024-04-12_11:11:58.157",
				"logLevel": "Debug",
				"source": "Table",
				"message": "Attempting to load Theobald.Extractors.Table.TableExtractionDefinition information for extraction KNA1"
			},
				
			...
			{
				"timestamp": "2024-04-12_11:12:01.728",
				"logLevel": "Debug",
				"source": "Table",
				"message": "Wrapping up extractor."
			},
			{
				"timestamp": "2024-04-12_11:12:01.730",
				"logLevel": "Info",
				"source": "Table",
				"message": "Extraction finished with status FinishedNoErrors."
			},
			{
				"timestamp": "2024-04-12_11:12:01.730",
				"logLevel": "Debug",
				"source": "Table",
				"message": "Writing run information."
			},
			{
				"timestamp": "2024-04-12_11:12:01.736",
				"logLevel": "Info",
				"source": "Table",
				"message": "Extraction run information was updated."
			}
		]
	}
	```

### Get Server Logs

```
[protocol]://[host]:[port]/logs/web
```  
<div class="result" markdown>

Returns a list of timestamps that correspond to server logs.

</div>

#### Parameters & Options for `[protocol]://[host]:[port]/logs/web`

| Parameter    | Description  | 
|-----------|--------------|
| ```?min=[yyyy-MM-dd_HH:mm:ss.SSS]```  |   Returns the timestamps of server logs after the specified date and time. |
| ```?max=[yyyy-MM-dd_HH:mm:ss.SSS]```  |   Returns the timestamps of server logs before the specified date and time. |
| ```/[yyyy-MM-dd_HH:mm:ss.SSS]```  |   Returns the server log entries with the specified timestamp. |


!!! note 
	For information on how to interpret logs, see [Logs](documentation/logs.md).

#### Examples

??? api "http://sherri.theobald.local:{{ port }}/logs/web?min=2024-02-05_12:39:29.022"

	```json
	{
		"logs": 
		[
			"2024-06-18_10:19:05.500",
			"2024-06-20_12:33:11.346",
			"2024-06-20_12:59:16.603",
			"2024-06-20_13:00:47.833",
			"2024-06-20_13:01:50.974",
			"2024-06-20_13:02:10.364",
			"2024-06-20_13:02:17.521",
			"2024-06-20_13:03:08.071",
			"2024-06-20_13:03:08.819",
			"2024-06-20_13:03:59.725",
			"2024-06-20_13:15:45.630",
			"2024-06-20_13:21:43.620"
		]
	}
	```

??? api "http://sherri.theobald.local:{{ port }}/logs/web/2024-06-20_13:21:43.620"

	```json
	{
		"logEntries": 
		[
			{
				"timestamp": "2024-06-20_13:21:43.707",
				"logLevel": "Info",
				"source": "WebServerHandler",
				"message": "Client [fe80::d3ac:77ba:ce0f:83b1%8]:56863"
			},
			{
				"timestamp": "2024-06-20_13:21:43.817",
				"logLevel": "Debug",
				"source": "HttpServer",
				"message": "Reading..."
			},
			{
				"timestamp": "2024-06-20_13:21:43.852",
				"logLevel": "Info",
				"source": "HttpServer",
				"message": "Processing /logs/extractions/S4HANA,KNA1."
			},
				
			...
				
		]
	}
	```


### Get Software Version

```
[protocol]://[host]:[port]/version
```
<div class="result" markdown>

Returns the software version of the {{ productName }} server installation in JSON format. 

</div>

#### Example 

??? api "http://sherri.theobald.local:{{ port }}/version"
	```json
	{
	  "version": "6.8.1.2"
	}
	```

<!---
/version-history
Returns the version history entries as JSON.

Response:

{
   "versions":
   [
      {
        "version": "1.2.3.4",
        "releaseDate": "",
        "priority": "L",
        "subcomponent": "General",
        "description": "Fixed X which caused Y.",
      }
   ]
}
-->

{% if page.meta.product != "board-connector" %}

### Get Destination Details

```
[protocol]://[host]:[port]/destinations
```  
<div class="result" markdown>
	
Returns a list of all defined destinations. For a list of extractions with a specific destination, see [Get Extraction Details](#get-extraction-details).

</div>

The result contains the following elements:

|  Item   | Description    |
|--------------|---------|
| name | name of the target connection |
| type | connection type |
| host | host name, if applicable |
| port | port name, if applicable |
| database | database name, if applicable | 
| user | user name in the connection, if applicable |  
| schema | schema name, if applicable |
| directory | directory name, if applicable |


#### Example 

??? api "http://sherri.theobald.local:{{ port }}/destinations"

	```csv
	Name,Type,Host,Port,Database,User,Schema,Directory
	csv,FileCSV,,,,,,"C:\Users\alice\Documents\csv\"
	http-csv,CSV,,,,,,
	http-json,HTTPJSON,,,,,,
	json,FileJSON,,,,,,"C:\Users\alice\Documents\json"
	sql-server,SQLServer,dbtest-ws2019.theobald.local,1433,alice,THEOBALD\alice,,
	tableau2022,Tableau,,,,,,"C:\Users\alice\Documents\csv"
	```

{% endif %}

### Get Extraction Details

```
[protocol]://[host]:[port]/config/extractions
```  
<div class="result" markdown>
	
Returns a list of all defined extractions in JSON format. 
	
</div>

#### Response
The result contains the following elements:

|  Item   | Description    |
|--------------|---------|
| name  | name of the extraction {% if page.meta.product != "board-connector" %}(if the extraction is located inside an [extraction group](documentation/organize-extractions.md), the name of the extraction group is part of the extraction name, e.g., the extraction "KNA1" in the extraction group "S4HANA" becomes `S4HANA,KNA1`) {% endif %}|
| type  |extraction type |
| sapObject|  name of the extracted SAP object |
| source|  name of the source connection |
| destination| name of the target environment |
| latestRun| contains *rowCount*, *duration*, *state* and *startedAt* of the latest extraction run |
| rowCount| number of the last extracted data records |
| duration | duration of the last execution |
| state| status of the extraction (*Running*, *FinishedNoErrors*, *FinishedErrors*) |
| startedAt| timestamp of the last execution |
| created| contains *machine*, *timestamp* and *user* of when the extraction was created|
| machine| machine on which the extraction was created |
| timestamp| timestamp of the creation |
| user| user that created the extraction |
| lastChange| contains *machine*, *timestamp* and *user* of when the extraction was last changed|
| machine| machine on which the extraction was last changed|
| timestamp| timestamp of the last change |
| user| user that last changed the extraction |


#### Parameters & Options for `[protocol]://[host]:[port]/config/extractions`

| Parameter    | Description  | 
|-----------|--------------|
| ```/[extraction_name]/parameters```  |   Returns a list of runtime parameters used in the specified extraction. Every extraction has a set of *Extraction*, *Source* and *Custom* [extraction parameters](documentation/parameters/extraction-parameters.md). The parameters are available in the "Run Extraction" window. |
| ```/[extraction_name]/result-columns```  |   Returns the result columns of an extraction. |
{% if page.meta.product != "board-connector" %}| ```?destinationType=[destination]```  |   Returns a list of extractions that write into a specific destination. | {% endif %}

<!---
The result of `[protocol]://[host]:[port]/config/extractions/[extraction_name]/result-columns` contains the following elements:

| Item         | Type    | Description                         |
|--------------|---------|-------------------------------------|
| name         | String  | column name                         |
| description  | String  | column description                  |
| type         | String  | column datatype                     |
| length       | Integer | column length                       |
| isPrimaryKey | boolean | column is primary key of extraction |
| isEncrypted  | boolean | encryption for column is active     |
| decimalsCount| Integer | number of decimal places |
| [referenceField](https://help.sap.com/viewer/6f3c662f6c4b1014b3c1f279a90f707f/7.01.18/en-US/cf21ea5d446011d189700000e8322d00.html) | String  | reference field for currency/quantity |
| [referenceTable](https://help.sap.com/viewer/6f3c662f6c4b1014b3c1f279a90f707f/7.01.18/en-US/cf21ea5d446011d189700000e8322d00.html) | String  | reference table for currency/quantity |
-->

{% if page.meta.product != "board-connector" %}

!!! note 
	Data fields that contain dates have the data type *ConvertedDate* if the option *Date Conversion* in the *Destination Settings* is active. 
	If inactive, the data type is *StringLengthMax* with a length of 8 (*Date*).

#### Examples

??? api "http://sherri.theobald.local:{{ port }}/config/extractions/"

	```json
	{
		"extractions": 
		[
			{
				"name": [
					"0MAT"
				],
				"type": "DeltaQ",
				"technicalName": "0MATERIAL_ATTR",
				"source": "saperp",
				"destination": "GoogleCloudStorage",
				"latestRun": {
					"rowCount": 20275,
					"duration": "PT00H00M13.383S",
					"state": "FinishedNoErrors",
					"startedAt": "2023-08-17_11:24:07.770"
				},
				"created": {
					"machine": "TODD",
					"timestamp": "20221005T080618.544Z",
					"user": "THEOBALD\\steffan"
				},
				"lastChange": {
					"machine": "SHERRI",
					"timestamp": "20240129T131530.701Z",
					"user": "THEOBALD\\alice"
				}
			},
			{
				"name": [
					"0MATERIAL"
				],
				"type": "DeltaQ",
				"technicalName": "0COSTCENTER_0101_HIER",
				"source": "saperp",
				"destination": "csv",
				"latestRun": {
					"rowCount": 200,
					"duration": "PT00H00M00.114S",
					"state": "FinishedNoErrors",
					"startedAt": "2023-08-17_11:31:44.029"
				},
				"created": {
					"machine": "SHERRI",
					"timestamp": "20230815T114651.045Z",
					"user": "THEOBALD\\alice"
				},
				"lastChange": {
					"machine": "SHERRI",
					"timestamp": "20230817T113328.786Z",
					"user": "THEOBALD\\alice"
				}
			}
		]
	}
	```


??? api "http://sherri.theobald.local:{{ port }}/config/extractions/?destinationType=sqlserver"

	```json
	{
		"extractions": 
		[
			{
				"name": "BW,2LIS",
				"type": "ODP",
				"sapObject": "2LIS_11_VAITM",
				"source": "bw2",
				"destination": "sqlserver",
				"latestRun": {
					"rowCount": 59058,
					"duration": "PT00H00M30.593S",
					"state": "FinishedNoErrors",
					"webServerLog": "2024-05-22_06:44:30.412",
					"startedAt": "2024-05-22_06:44:30.855"
				},
				"created": {
					"machine": "SHERRI",
					"timestamp": "20240522T095026.285Z",
					"user": "THEOBALD\\schipka"
				},
				"lastChange": {
					"machine": "SHERRI",
					"timestamp": "20240529T102008.256Z",
					"user": "THEOBALD\\schipka"
				}
			}
		]
	}
	```

{% else %}

#### Examples

??? api "http://sherri.theobald.local:{{ port }}/config/extractions/"

	```json
	{
		"extractions": 
		[
			{
				"name": [
					"0MAT"
				],
				"type": "DeltaQ",
				"technicalName": "0MATERIAL_ATTR",
				"source": "saperp",
				"destination": "http-csv",
				"latestRun": {
					"rowCount": 20275,
					"duration": "PT00H00M13.383S",
					"state": "FinishedNoErrors",
					"startedAt": "2023-08-17_11:24:07.770"
				},
				"created": {
					"machine": "TODD",
					"timestamp": "20221005T080618.544Z",
					"user": "THEOBALD\\steffan"
				},
				"lastChange": {
					"machine": "SHERRI",
					"timestamp": "20240129T131530.701Z",
					"user": "THEOBALD\\alice"
				}
			},
			{
				"name": [
					"0MATERIAL"
				],
				"type": "DeltaQ",
				"technicalName": "0COSTCENTER_0101_HIER",
				"source": "saperp",
				"destination": "http-csv",
				"latestRun": {
					"rowCount": 200,
					"duration": "PT00H00M00.114S",
					"state": "FinishedNoErrors",
					"startedAt": "2023-08-17_11:31:44.029"
				},
				"created": {
					"machine": "SHERRI",
					"timestamp": "20230815T114651.045Z",
					"user": "THEOBALD\\alice"
				},
				"lastChange": {
					"machine": "SHERRI",
					"timestamp": "20230817T113328.786Z",
					"user": "THEOBALD\\alice"
				}
			}
		]
	}
	```

{% endif %}

??? api "http://sherri.theobald.local:{{ port }}/config/extractions/KNA1/parameters"

	```json
	{
		"extraction": 
		[
			{
				"name": "ignoreCache",
				"description": "Ignore the result cache",
				"type": "Flag",
				"default": "False"
			},
			{
				"name": "preview",
				"description": "Enable/disable preview mode",
				"type": "Flag",
				"default": "False"
			},
			{
				"name": "source",
				"description": "Sets the name of the source",
				"type": "Text",
				"default": "ec5"
			},
			{
				"name": "destination",
				"description": "Sets the name of the destination",
				"type": "Text",
				"default": "csv"
			},
			{
				"name": "rows",
				"description": "Maximum number of rows",
				"type": "Number",
				"default": "0"
			},
			{
				"name": "whereClause",
				"description": "Where Clause",
				"type": "Text",
				"default": null
			},
			{
				"name": "packageSize",
				"description": "Package Size",
				"type": "Number",
				"default": "50000"
			}
		],
		"source": 
		[
			{
				"name": "lang",
				"description": "Logon Language",
				"type": "Text",
				"default": "EN"
			}
		]
	}
	```

??? api "http://sherri.theobald.local:{{ port }}/config/extractions/KNA1/result-columns"

	```json
	{
		"columns": 
		[
			{
				"name": "KUNNR",
				"description": "Customer Number",
				"type": "StringLengthMax",
				"length": 10,
				"isPrimaryKey": true,
				"isEncrypted": false,
				"referenceField": "",
				"referenceTable": ""
			},
			{
				"name": "LAND1",
				"description": "Country Key",
				"type": "StringLengthMax",
				"length": 3,
				"isPrimaryKey": false,
				"isEncrypted": false,
				"referenceField": "",
				"referenceTable": ""
			},
			{
				"name": "NAME1",
				"description": "Name 1",
				"type": "StringLengthMax",
				"length": 35,
				"isPrimaryKey": false,
				"isEncrypted": false,
				"referenceField": "",
				"referenceTable": ""
			},
			{
				"name": "ORT01",
				"description": "City",
				"type": "StringLengthMax",
				"length": 35,
				"isPrimaryKey": false,
				"isEncrypted": false,
				"referenceField": "",
				"referenceTable": ""
			},
			{
				"name": "Mean_UMSAT",
				"description": "Annual sales",
				"type": "Double",
				"isPrimaryKey": false,
				"isEncrypted": false,
				"referenceField": "UWAER",
				"referenceTable": "KNA1"
			}
		]
	}
	```

