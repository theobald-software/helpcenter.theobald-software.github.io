This section contains a list of all API endpoints that are available for Board Connector.

Board Connector offers a web API that allows running extractions and querying meta information and extraction logs from Board Connector through web calls. The web API returns the result as an http-json stream.

### Base URL

The basic URL for web calls uses the following format: `[protocol]://[host or IP address]:[port]/`.

#### Examples

| Protocol | Syntax | Example | | --- | --- | --- | | HTTP | `http://[host].[domain]:[port]` | `http://sherri.theobald.local:8097` | | HTTP | `http://[host]:[port]` | `http://localhost:8097` | | HTTPS | `https://[host].[domain]:[port]` | `https://sherri.theobald.local:8197` Requires a dedicated host name and X.509 certificate, see [web server settings](../documentation/server/server-settings/#web-server). |

Note

Make sure to use the correct ports, see [Server Ports](../documentation/server/#ports).

### Run Extractions

```text
[protocol]://[host]:[port]/run/[extraction_name]

```

Runs the specified extraction.

```text
[protocol]://[host]:[port]/start/[extraction_name]

```

Runs the specified extraction asynchronously and returns the run status immediately.

Warning

**Deprecated Endpoints:**

- `[protocol]://[host]:[port]/?name=[extraction_name]` becomes `[protocol]://[host]:[port]/run/[extraction_name]`
- `[protocol]://[host]:[port]/?name=[extraction_name]&wait=false` becomes `[protocol]://[host]:[port]/start/[extraction_name]`

#### Response

The response of the web service call contains the following information:

| | Response | Description | | --- | --- | --- | | | HTTP status code | The HTTP status code *200* indicates a successful extraction call. It does not indicate a successful execution of the extraction. The HTTP status code *404* indicates that the called extraction does not exist. Detailed information can be found in the log of the web service. | | | HTTP header | Shows the timestamp of the extraction in the HTTP header e.g., X-BC-Timestamp: *2021-04-09_19:03:09.971* | | | HTTP response body | The Response in the HTTP body depends on the destination type of the extraction. Depending on the destination type, the extracted data is returned in either CSV or JSON format. |

#### Parameters for `/start/[extraction_name]`

| Parameter | Description | | --- | --- | | `&[parameter1_name]=[value]` | Runs the specified extraction and passes values to the specified [extraction parameters](../documentation/parameters/extraction-parameters/). |

Tip

You can use the UI in the "Run Extraction" menu to generate a URL for extraction runs, see [Run Extractions](../documentation/run-extractions/#run-extractions-in-the-designer).

#### Examples

http://sherri.theobald.local:8097/start/KNA1

```text
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

http://sherri.theobald.local:8097/start/KNA1/?cityParam=Stuttgart&companyParam=Theobald+Software

```text
MANDT,KUNNR,LAND1,NAME1,ORT01
800,0000000779,DE,Theobald Software,Stuttgart"

```

### Abort Extractions

```text
[protocol]://[host]:[port]/stop/[extraction_name]

```

Aborts all running extractions that use the specified extraction name. If the abortion is successful, a confirmation message is returned in the HTTP body.

#### Parameters and Options for `/stop/[extraction_name]`

| Parameter | Description | | --- | --- | | `/[yyyy-MM-dd_HH:mm:ss.SSS]` | Only aborts the extraction with the specified extraction name and the specified timestamp. |

Note

The following endpoint is still supported, but can be replaced by `/stop/[extraction_name]/[yyyy-MM-dd_HH:mm:ss.SSS]`:

```text
[protocol]://[host]:[port]/abort?name=[extraction_name]

```

Aborts the latest run of the specified extraction. If the abortion is successful, a confirmation message is returned in the HTTP body.

#### Example

http://sherri.theobald.local:8097/stop/KNA1

```text
Extraction cancellation succeeded.

```

### Get Status of an Extraction

```text
[protocol]://[host]:[port]/status/?name=[extraction_name]&timestamp=[yyyy-MM-dd_HH:mm:ss.SSS]

```

Returns the status of a (running) extraction at the specified timestamp.

Tip

The timestamp corresponds to the *startedAt* element returned by [`[protocol]://[host]:[port]/config/extractions/`](#get-extraction-details) or [`[protocol]://[host]:[port]/logs/extractions/[extraction-name]`](#get-extraction-logs). If an extraction is triggered by an [http request](#run-extractions), the extraction's timestamp is returned in the field `X-XU-Timestamp` of the http request's response header.

#### Response

| State | Description | | --- | --- | | Running | The extraction is running. | | FinishedNoErrors | The extraction is finished without errors. | | FinishedErrors | The extraction is finished, but with at least one error. | | Cancelled | The extraction is finished and was cancelled by the user. |

#### Example

http://sherri.theobald.local:8097/status/?name=KNA1&timestamp=2024-02-05_10:23:08.025

```text
FinishedNoErrors

```

### Get Extraction Logs

```text
[protocol]://[host]:[port]/logs/extractions

```

Returns a list of extraction runs.

#### Response

The result contains the following elements:

| Item | Description | | --- | --- | | extractionName | name of the extraction | | runs | contains *rowCount*, *duration*, *state*, *webServerLog* and *startedAt* of extraction runs | | row count | number of extracted data records | | duration | duration of the execution | | state | status of the extraction (*Running*, *FinishedNoErrors*, *FinishedErrors*, *Cancelled*) | | webServerLog | timestamp of the corresponding [server log](../documentation/logs/#log-levels) | | startedAt | timestamp of the execution |

#### Parameters & Options for `/logs/extractions`

| Parameter | Description | | --- | --- | | `?min=[yyyy-MM-dd_HH:mm:ss.SSS]` | Returns the extraction runs after the specified date and time. | | `?max=[yyyy-MM-dd_HH:mm:ss.SSS]` | Returns the extraction runs before the specified date and time. | | `/[extraction-name]` | Returns all extraction runs of the specified extraction. | | `/[extraction-name]/[yyyy-MM-dd_HH:mm:ss.SSS]` | Returns the extraction run of the specified extraction with the specified timestamp. | | `/[extraction-name]/[yyyy-MM-dd_HH:mm:ss.SSS]/log` | Returns the extraction log of the specified extraction with the specified timestamp. |

Note

For information on how to interpret logs, see [Logs](../documentation/logs/).

#### Examples

http://sherri.theobald.local:8097/logs/extractions?min=2023-08-17_11:20:44.029

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

http://sherri.theobald.local:8097/logs/extractions/KNA1

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

http://sherri.theobald.local:8097/logs/extractions/KNA1/2024-04-12_11:11:57.977

```json
{
    "rowCount": 10071,
    "duration": "PT00H00M03.753S",
    "state": "FinishedNoErrors",
    "webServerLog": "2024-04-12_11:10:59.505",
    "startedAt": "2024-04-12_11:11:57.977"
}

```

http://sherri.theobald.local:8097/logs/extractions/KNA1/2024-04-12_11:11:57.977/log

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
            "message": "Board Connector server version: 6.4.1.0"
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

```text
[protocol]://[host]:[port]/logs/web

```

Returns a list of timestamps that correspond to server logs.

#### Parameters & Options for `/logs/web`

| Parameter | Description | | --- | --- | | `?min=[yyyy-MM-dd_HH:mm:ss.SSS]` | Returns the timestamps of server logs after the specified date and time. | | `?max=[yyyy-MM-dd_HH:mm:ss.SSS]` | Returns the timestamps of server logs before the specified date and time. | | `/[yyyy-MM-dd_HH:mm:ss.SSS]` | Returns the server log entries with the specified timestamp. |

Note

For information on how to interpret logs, see [Logs](../documentation/logs/).

#### Examples

http://sherri.theobald.local:8097/logs/web?min=2024-02-05_12:39:29.022

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

http://sherri.theobald.local:8097/logs/web/2024-06-20_13:21:43.620

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

```text
[protocol]://[host]:[port]/version

```

Returns the software version of the Board Connector server installation in JSON format.

#### Example

http://sherri.theobald.local:8097/version

```json
{
  "version": "6.8.1.2"
}

```

### Get Extraction Details

```text
[protocol]://[host]:[port]/config/extractions

```

Returns a list of all defined extractions in JSON format.

#### Response

The result contains the following elements:

| Item | Description | | --- | --- | | name | name of the extraction | | type | extraction type | | sapObject | name of the extracted SAP object | | source | name of the source connection | | destination | name of the target environment | | latestRun | contains *rowCount*, *duration*, *state* and *startedAt* of the latest extraction run | | rowCount | number of the last extracted data records | | duration | duration of the last execution | | state | status of the extraction (*Running*, *FinishedNoErrors*, *FinishedErrors*, *Cancelled*) | | startedAt | timestamp of the last execution | | created | contains *machine*, *timestamp* and *user* of when the extraction was created | | machine | machine on which the extraction was created | | timestamp | timestamp of the creation | | user | user that created the extraction | | lastChange | contains *machine*, *timestamp* and *user* of when the extraction was last changed | | machine | machine on which the extraction was last changed | | timestamp | timestamp of the last change | | user | user that last changed the extraction |

#### Parameters & Options for `/config/extractions`

| Parameter | Description | | --- | --- | | `/[extraction_name]/parameters` | Returns a list of runtime parameters used in the specified extraction. Every extraction has a set of *Extraction*, *Source* and *Custom* [extraction parameters](../documentation/parameters/extraction-parameters/). The parameters are available in the "Run Extraction" window. | | `/[extraction_name]/result-columns` | Returns the result columns of an extraction. |

#### Examples

http://sherri.theobald.local:8097/config/extractions/

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

http://sherri.theobald.local:8097/config/extractions/KNA1/parameters

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

http://sherri.theobald.local:8097/config/extractions/KNA1/result-columns

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
