---
title: Getting Started
description: Learn how to install and extract data from SAP with Xtract Core.
hide:
  - navigation
  - tags
tags:
  - quickstart
  - quick start  
---

![img](./assets/images/logos/theo-thumbs.png){ .lg .middle width="30px"} This section shows how to install and set up Xtract Core for the first time.

## Prerequisites

- Install the .NET8.0 Desktop Runtime, see [Download .NET8.0 Desktop Runtime from Microsoft](https://dotnet.microsoft.com/en-us/download/dotnet/thank-you/runtime-desktop-8.0.11-windows-x64-installer).
- The SAP NetWeaver library must be available in the `C:\Windows\System32` folder of the machine that runs Xtract Core. 
You can download the Netweaver library from the [SAP Software Download Center](https://me.sap.com/swdcnav/products/_APP=00200682500000001943&_EVENT=DISPHIER&HEADER=Y&FUNCTIONBAR=N&EVENT=TREE&NE=NAVIGATE&ENR=01200314690100002214&V=MAINT). 
- Optional: Install 

For more information on software and hardware requirements, see [Knowledge Base: Requirements](knowledge-base/requirements.md).

<div class="grid cards" markdown>

-   :simple-sap: __Supported SAP Objects__

    ---

    - SAP Tables (includes Cluster tables and Pool tables?)
	- CDS Views?
	- Delta Tables (CDC) planned for Q2 2025?

-	:material-bullseye: __Supported Target Environments__

    ---

    - Azure Blob
	- CSV?
	
</div>


## Installation

1. [Download](https://theobald-software.com/en/download-trial/) a 2 month trial version of Xtract Core or download the latest version from the [customer portal](https://my.theobald-software.com/).
2. Run the Xtract Core executable (XtractCoreSetup.exe) to install Xtract Core.
3. Make sure that the Xtract Core Service is running on your windows system and that the default port 8077 is not blocked by your firewall.<br>
4. Open the Xtract Core Designer at `http://localhost:8077/` in a [web browser](documentation/setup/requirements.md#supported-web-browsers) of your choice.<br>
If the Xtract Core service does not run on the same machine as the browser, replace `localhost` with the name or IP address of the host on which the service runs.

The installation directory contains the following files:

| Filename	| Description |
|------------|--------------|
|  logs directory |	Directory that contains service logs. | 
|  Transport directory |	Directory that contains SAP function modules. Read the readme.pdf within the directory for more information.  | 
|  Cleaner.exe |	Application that deletes all cached results and log files.  | 
|  listener.exe |	Application that starts one worker per incomming connection.  | 
|  listener.json | Contains the default settings of the web server. |
|  service.exe |	Application that installs Xtract Core.  | 
|  theobald.service.definition.json | Contains the configuration of the service. |
|  worker.exe |	Application that handles HTTP requests.  | 
|  XtractUniversalLicense.json |	License file with information about the server, the component and runtime. |

## Configuration

Xtract Core offers the following configration options:
- Change the service name, display name and description of the service in the `theobald.service.definition.json` file.

	```json title="theobald.service.definition.json"
	{
	  "serviceName": "SAP Connector Service",
	  "displayName": "SAP Connector",
	  "description": "SAP Connector windows service for configuration and execution of SAP extractions.",
	  "servers": [
		{
		  "displayName": "listener",
		  "path": "listener.exe"}
	  ]
	}

	```
- Create multiple servers in the `theobald.service.definition.json` file? The Windows service starts one instance per entry in the **server** property.
	- Do users have to copy the listerner.exe and listener.json and rename both to get multiple servers?
- Change the network settings (e.g., port number) of the web server in the `listener.json` file. 
	
	```json title="listener.json"
	{
		"insecurePort": 1337,
		"securePort": 1338,
		"workerName": "worker.exe",
		"mode": "Localhost(1)" 
	}
	```
		
	1.  The property **mode** supports *Any* and *Localhost*. 
		- *Any* listens on the default network interface and the loopback interface. 
		- *Localhost* only listens on the loopback interface. 
		


### TLS Configuration

Enable Transport Layer Security (TLS) to use secured https communication when making API calls:

If the certificate is not listed in the Windows certificate store, install the X.509 certificate.
1. Make sure to have a valid X.509 certificate. If the certificate is not listed in Windows certificate store, [install an X.509 certificate](knowledge-base/install-x.509-certificate.md).
2. Open the following file in the Xtract Core installation directory: `config/servers/tls.json`. If the directory and file do not exist, create them.
3. Enable TLS in the `tls.json` file and add the details of the certificate. Example:
	```json title="tls.json"
	{
		"tlsEnabled": true,
		"certificate": {
		"subjectAltName": "HUNT.theobald.local",
		"issuer": "CN=Theobald CA, DC=theobald, DC=local",
		"notAfter": "20250717T152041.000Z",
		"thumbprint": "0C32EEE1053DA57E88E6AE22832DFB13775250F9"
		}
	}
	```
4. Restart the listener by restarting the Xtract Core service.
The listener then listens on the port configured in its config securePort.


## Create Connections

To extract data from SAP at least 2 connections are required:
- A connection to an SAP source system.
- A connection to a target environment in which the data is written.

A connection consists of the following elements:
- A name. Allowed characters are [a-zA-Z0-9]. The name must not start with a number.
Because the names of extractions and connections map to a directory on the file system, names are unique and not case sensitive.
- folder


!!! note

	`$NAME` represents the name/identifier of an extraction or connection.
	Allowed characters are [a-zA-Z0-9]. The name must not start with a number.
	Because the names of extractions and connections map to a directory on the file system, names are unique and not case sensitive.

### Connect to SAP

Before connecting to SAP for the first time, set up an SAP dialog user with the necessary [SAP user rights](knowledge-base/sap-authority-objects.md/#general-authorization-objects).

Create a new SAP connection targeting an application server. 
The server tries to establish a connection to the system with the given credentials before saving the connection.


```http
POST /v0/connections/sap/$NAME HTTP/1.1
Host: localhost:1337
Content-Type: application/json
Content-Length: $LENGTH
{
"Host": "mysap.company.com",
"User": "$USER",
"Password": "$PASSWORD",
"Client": "800",
"Language": "en",
"InstanceNo": 0
}
```

Test Connection:
Attempts to open a connection to the specified SAP system with the information stored in the connection configuration.

```http
GET /v0/connections/sap/$NAME/test HTTP/1.1
Host: localhost:1337
```


### Connect to Azure Blob

To connect to a Microsoft Azure Blob Storage...
For more information, see [Microsoft Documentation: Create SAS tokens for storage containers](https://learn.microsoft.com/en-us/azure/ai-services/document-intelligence/authentication/create-sas-tokens?view=doc-intel-4.0.0&tabs=azure-portal#use-the-azure-portal).


!!! note
	The following permissions are required for authentication via Shared Access Signature (SAS):
	- Add
	- Create
	- Write
	- Delete
	- List


Create a new Azure blob connection. The server tries to establish a connection to Azure with the given
credentials before saving the connection.

```http
POST /v0/connections/azureblob/$NAME HTTP/1.1
Host: localhost:1337
Content-Type: application/json
Content-Length: $LENGTH
{
"Account": "$ACCOUNT",
"Token": "$TOKEN(1)",
"Container": "container"
}
```

1.  You can copy the SAS token from the Azure portal in: <br>
	**Storage accounts > [account_name] > Data storage > Containers > [account_name] > Generate SAS**.
	

## Create an Extraction

Create an extraction of the selected SAP object from the source connection to the destination connection.
The example above would create a CSV file with the name resultset.csv in the selected container.
The property Columns is optional. If omitted, all columns will be selected.

```http
POST /v0/extractions/table/$NAME HTTP/1.1
Host: localhost:1337
Content-Type: application/json
Content-Length: 171
{
"Table": "MARA",
"Where": "MATNR = 000000000001",
"Source": "$SOURCE_NAME",
"Destination": "$DESTINATION_NAME",
"Columns": ["MATNR", "MANDT"],
"ResultName": "resultset",
"FunctionModule": "/THEO/READ_TABLE"
}
```

## Run Services

Runs the extraction of name `$NAME` and waits for it. `rows` is an optional parameter used to specify how
many rows should be extracted at most. The HTTP response head will be returned as soon as the server
receives the first package. Any issues before that will result in a 4XX or 5XX status code.
Header X-XU-Timestamp contains the starting timestamp of the extraction. It is guaranteed to be unique
and can be used to query status information and logs of the extraction.
The response body of the extraction will contain the extraction log.

```http
GET /run/$NAME?rows=10 HTTP/1.1
Host: localhost:1337
```

Starts the extraction of name $NAME. The request completes immediately after initializing the extraction.
Header X-XU-Timestamp contains the starting timestamp of the extraction. It is guaranteed to be unique
and can be used to query status information and logs of the extraction.
Status code 200 may be returned even if the extraction runs into an error early. Due to immediate availability
of the timestamp, status information can be query through dedicated requests.

```http
GET /start/$NAME?rows=10 HTTP/1.1
Host: localhost:1337
```

### Pass Parameters