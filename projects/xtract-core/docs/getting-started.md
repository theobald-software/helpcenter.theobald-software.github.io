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

- Contact the Theobald Software [sales team](mailto:sales@theobald-software.com?subject=Requesting%20Xtract%20Core%20Trial&body=I'd%20like%20to%20receive%20a%202-month%20demo%20version%20of%20Xtract%20Core.) to get a 2 month trial version of Xtract Core. <!-- or download the latest version from the [customer portal](https://my.theobald-software.com/).-->
- Install the .NET8.0 Desktop Runtime, see [Download .NET8.0 Desktop Runtime from Microsoft](https://dotnet.microsoft.com/en-us/download/dotnet/thank-you/runtime-desktop-8.0.11-windows-x64-installer).
- Download the SAP Netweaver library from the [SAP Software Download Center](https://me.sap.com/swdcnav/products/_APP=00200682500000001943&_EVENT=DISPHIER&HEADER=Y&FUNCTIONBAR=N&EVENT=TREE&NE=NAVIGATE&ENR=01200314690100002214&V=MAINT) and place it in the `C:\Windows\System32` folder of the machine that runs Xtract Core. 
- Optional: Install the THEO/READ_TABLE function module in your SAP system to boost the capabilities of SAP table extractions. 
For more information, see [Knowledge Base: Function Module for Tables](knowledge-base/custom-function-module-for-table-extraction.md).

For more information on system requirements and supported SAP systems, see [Knowledge Base: Requirements](knowledge-base/requirements.md).

<div class="grid cards" markdown>

-   :simple-sap: __Supported SAP Objects__

    ---

    - SAP Tables
	- Delta Table (CDC) extractions are planned for Q3 2025

-	:material-bullseye: __Supported Target Environments__

    ---

    - Azure Blob Storage
	- CSV flat-files
	
</div>



## Installation

1. Extract all files from the `XtractCore_native.zip` archive into the directory where you want to install Xtract Core.
2. Open a command line tool with administrator rights and navigate to the installation directory.
3. Run the following command to install the Xtract Core Windows service and to create a dedicated user for the service:
	```terminal
	service.exe -i --virtual-service-user 
	```
4. Make sure that the Xtract Core Service "SAP Connector" is running on your Windows system and that the default port {{ port }} is not blocked by your firewall.

### Installation Directory Files

The installation directory contains the following files:

| Filename	| Description |
|------------|--------------|
|  logs directory |	Directory that contains service logs. | 
|  Transport directory |	Directory that contains SAP function modules. Read the README.pdf within the directory for more information.  | 
|  private directory | Directory that contains keys to encrypt passwords. This directory is first created when running an extraction. |
|  Cleaner.exe |	Application that deletes all cached results and log files.  | 
|  listener.exe |	Application that starts one worker per incomming connection. listener.exe can be renamed (make sure to rename the listener.json as well and update the content of theobald.service.definition.json). | 
|  listener.json | Contains the default settings of the web server. listener.json can be renamed (make sure that the listener.json has the same name as the listener.exe). |
|  service.exe |	Application that installs Xtract Core.  | 
|  theobald.service.definition.json | Contains the configuration of the Xtract Core Windows service. theobald.service.definition.json cannot be renamed. |
|  worker.exe |	Application that handles HTTP requests. worker.exe can be renamed (make sure to update the content of listener.json). | 
<!--|  XtractUniversalLicense.json |	License file with information about the server, the component and runtime. | -->

## Configuration

### Service Settings

Change the name, display name and description of the service in the `theobald.service.definition.json` file.

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
	
### Network Settings

Change the network settings (e.g., port number) of the web server in the `listener.json` file. 
	
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

1. Make sure to have a valid X.509 certificate. If the certificate is not listed in the Windows certificate store, [install an X.509 certificate](knowledge-base/install-x.509-certificate.md).
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

API calls now use the https protocol. The default port for the secured communication is {{ port_https }}.

## Create Connections

To extract data from SAP at least 2 connections are required:
- A connection to an SAP source system.
- A connection to a target environment in which the data is written.


!!! note

	`$NAME` represents the name/identifier of an extraction or connection.
	Allowed characters are [a-zA-Z0-9]. The name must not start with a number.
	Because the names of extractions and connections map to a directory on the file system, names are unique and not case sensitive.

### Connect to SAP

Before connecting to SAP for the first time, set up an SAP dialog user with the necessary [SAP user rights](knowledge-base/sap-authority-objects.md/#general-authorization-objects).

Use the following resource to create a new connection to an SAP application server:

```
{
"Host": "s4h2021.theobald-software.com",
"User": "schipka",
"Password": "Ganbare4",
"Client": "100",
"Language": "en",
"InstanceNo": 0
}
```



!!! api ""
	
	<span class="keyword">POST</span> /v0/connections/sap/{name}

	Creates a new connection to an SAP application server.
	
	Parameters:
	
	| Parameter | In | Type | Description |
	|-----------|-------|------------|-----|
	| name*       | path | string | Name for the new connection. Allowed characters are [a-zA-Z0-9]. The name must not start with a number. Because the names of extractions and connections map to a directory on the file system, names are unique and not case sensitive. |
	| Host*       | body |  string | Host name or IP address of the application server (Property Host). |
	| User*       | body |  string | SAP username. |
	| Password*       | body |  string | Password of the SAP user. |
	| Client*       | body |  string | A three-digit number of the SAP client between 000 and 999, e.g., 800. |
	| Language*       | body |  string | The logon language for the SAP system, e.g., EN for English or DE for German. |
	| InstanceNo*       | body |  string | A two-digit number between 00 and 99 (Property SystemNumber). |
	
	*required
	
	---
	
	Example:
	```http 
	POST /v0/connections/sap/s4hana HTTP/1.1
	Host: localhost:1337
	Content-Type: application/json
	Content-Length: $LENGTH 
	{
	"Host": "sap-erp-as05.example.com",
	"User": "$USER",
	"Password": "$PASSWORD",
	"Client": "800",
	"Language": "en",
	"InstanceNo": 0
	}
	```
	
	---
	
	Response:
	
	| Code | Description |
	|--------|-----------|
	| 200    | OK         |
	
	=== "Example Value"
		```http 
		POST /v0/connections/sap/s4hana HTTP/1.1
		Host: localhost:1337
		Content-Type: application/json
		Content-Length: $LENGTH 
		{
		"Host": "sap-erp-as05.example.com",
		"User": "$USER",
		"Password": "$PASSWORD",
		"Client": "800",
		"Language": "en",
		"InstanceNo": 0
		}
		```
	=== "Model"
		```http 
		POST /v0/connections/sap/s4hana HTTP/1.1
		Host: localhost:1337
		Content-Type: application/json
		Content-Length: $LENGTH 
		{
		"Host": "sap-erp-as05.example.com",
		"User": "$USER",
		"Password": "$PASSWORD",
		"Client": "800",
		"Language": "en",
		"InstanceNo": 0
		}
		```
	
	

	

Replace `$NAME` with a name for the source connection.
Allowed characters are [a-zA-Z0-9]. The name must not start with a number.
Because the names of extractions and connections map to a directory on the file system, names are unique and not case sensitive.


The server tries to establish a connection to the system with the given credentials before saving the connection.

Replace all variables starting with `$` with actual values:

```http 
POST /v0/connections/sap/{name} HTTP/1.1
Host: localhost:1337
Content-Type: application/json
Content-Length: $LENGTH 
{
"Host": "sap-erp-as05.example.com",
"User": "$USER",
"Password": "$PASSWORD",
"Client": "800",
"Language": "en",
"InstanceNo": 0
}
```

!!! tip
	Input values for the SAP connection can be found in the *Properties* of the SAP Logon Pad or they can be requested from the SAP Basis team.

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

An extraction is a combination of the following components:

- A connection to a source system, e.g., SAP S/4HANA, SAP BW, etc.
- A definition of the data that is to be extracted from the source system.
- A connection to a target environment / destination in which the data is written.

Follow the steps below to create an extraction that extracts an SAP table:

1. 
Create an extraction of the selected SAP object from the source connection to the destination connection.
The example above would create a CSV file with the name resultset.csv in the selected container.


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
"Columns": ["MATNR", "MANDT(1)"],
"ResultName": "resultset",
"FunctionModule": "/THEO/READ_TABLE"
}
```

1.  The property Columns is optional. If omitted, all columns will be selected.

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