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

![img](assets/images/logos/theo-thumbs.png){ .lg .middle width="30px"} This section shows how to install and set up {{ productName }} for the first time. 

### About Xtract Core

Xtract Core is a whitelabel Web API server for developing your own SAP interfaces.
You can use the Xtract Core API to extract data from SAP Tables and write them to various supported target environments.

The API allows you to:

- create connections to SAP systems and target environments / destinations
- create reusable data extractions 
- run data extractions


<div class="grid cards" markdown>

-   :simple-sap: __Supported SAP Objects__

    ---

    - SAP Tables
	- Planned for Q3 2025: Delta Table (CDC) extractions

-	:material-bullseye: __Supported Target Environments__

    ---

    - Azure Blob Storage
	- In development: CSV flat-file
	
</div>


## Prerequisites

- Contact the Theobald Software [sales team](mailto:sales@theobald-software.com?subject=Requesting%20Xtract%20Core%20Trial&body=I'd%20like%20to%20receive%20a%202-month%20demo%20version%20of%20Xtract%20Core.) to get a 2 month trial version of Xtract Core. <!-- or download the latest version from the [customer portal](https://my.theobald-software.com/).-->
- [Download the .NET8.0 Desktop Runtime from Microsoft](https://dotnet.microsoft.com/en-us/download/dotnet/thank-you/runtime-desktop-8.0.11-windows-x64-installer) and install it.
- [Download the SAP Netweaver library from the SAP Software Download Center](https://me.sap.com/swdcnav/products/_APP=00200682500000001943&_EVENT=DISPHIER&HEADER=Y&FUNCTIONBAR=N&EVENT=TREE&NE=NAVIGATE&ENR=01200314690100002214&V=MAINT) and place it in the `C:\Windows\System32` folder of the machine that runs Xtract Core. 
- Optional: Install the THEO/READ_TABLE function module in SAP to boost the capabilities of SAP table extractions. 
For more information, see [Knowledge Base: Function Module for Tables](knowledge-base/custom-function-module-for-table-extraction.md).

For more information on system requirements and supported SAP systems, see [Knowledge Base: Requirements](knowledge-base/requirements.md).


## Installation

Follow the steps below to install the Xtract Core Windows service:

1. Extract all files from the `XtractCore_native.zip` archive into the directory where you want to install Xtract Core.
2. Open a command line tool with administrator rights and navigate to the installation directory.
3. Run the following command to install the Xtract Core Windows service and to create a dedicated user for the service:
	```terminal
	service.exe -i --virtual-service-user 
	```
4. Make sure that the Xtract Core service "SAP Connector" is running on your Windows system and that the default port {{ port }} is not blocked by the firewall.

The Xtract Core Windows service can now receive HTTP requests.



## Configuration

The service and network settings of Xtract Core can be configured using the files in the installaltion directory of Xtract Core.
The installation directory contains the following files:

| Filename	| Description |
|------------|--------------|
|  config directory |	Directory that contains all SAP and destination connections, extractions, and web server settings. This directory is created when executing a POST request for the first time.|
|  logs directory |	Directory that contains service logs. | 
|  private directory | Directory that contains keys to encrypt passwords. This directory is created when running an extraction for the first time. |
|  Transport directory |	Directory that contains SAP function modules. Read the README.pdf within the directory for more information.  | 
|  Cleaner.exe |	Application that deletes all cached results and log files.  | 
|  ConfigConverter.exe | Application that converts extractions, connections, etc. from previous a version format to the new format. Use the ConfigConverter.exe when installing major releases and upgrading, e.g., from version 1.x to 2.x.|
|  listener.exe |	Application that starts one worker per incomming connection. listener.exe can be renamed (make sure to rename the listener.json as well and update the content of theobald.service.definition.json). | 
|  listener.json | Contains the default settings of the web server. listener.json can be renamed (make sure that the listener.json has the same name as the listener.exe). |
|  service.exe |	Application that installs Xtract Core.  | 
|  theobald.service.definition.json | Contains the configuration of the Xtract Core Windows service. theobald.service.definition.json cannot be renamed. |
|  worker.exe |	Application that handles HTTP requests. worker.exe can be renamed (make sure to update the content of listener.json). | 
<!--|  XtractUniversalLicense.json |	License file with information about the server, the component and runtime. | -->


### Service Settings

The name (`serviceName`), display name (`displayName`) and description (`description`) of the Windows service can be changed in the `theobald.service.definition.json` file.

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

The network settings of the web server can be changed in the `listener.json` file. 
	
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

Enable Transport Layer Security (TLS) to use secured HTTPS communication for the web server:

1. Make sure to have a valid X.509 certificate. If the certificate is not listed in the Windows certificate store, [install an X.509 certificate](knowledge-base/install-x.509-certificate.md).
2. Open the following file in the Xtract Core installation directory: `config/servers/tls.json`. If the directory and file do not exist, create them.
3. Enable TLS in the `tls.json` file and add the details of the certificate. Example:
	```json title="tls.json"
	{
		"tlsEnabled": true,
		"certificate": {
		"subjectAltName": "BOB.theobald.local",
		"issuer": "CN=Theobald CA, DC=theobald, DC=local",
		"notAfter": "20250717T152041.000Z",
		"thumbprint": "0C32EEE1053DA57E88E6AE22832DFB13775250F9"
		}
	}
	```
4. Restart the Xtract Core service to restart the listener.

The web server now uses the HTTPS protocol for communication. 
The default port for secured communication is {{ port_https }}.
You can change the port in the `listener.json` file using the property *securePort*, see [Network Settings](#network-settings).

## Connections

At least 2 connections are required to extract data from SAP:
- A connection to an SAP source system.
- A connection to a destination in which the data is written.

For information on connection endpoints, refer to the [API Reference](api-reference.md).

### Create SAP Connections

Before connecting to SAP for the first time, set up an SAP dialog user with the necessary [SAP user rights](knowledge-base/sap-authority-objects.md/#general-authorization-objects).<br>
Use the following endpoint to create a new connection to an SAP application server: 

```http
POST /v0/connections/sap/{name}
```

=== ":material-file-document-outline: example"
	``` http
	POST /v0/connections/sap/{name} HTTP/1.1
	Host: localhost:1337
	Content-Type: application/json
	Content-Length: 109
	
	{
	"Host": "sap-erp-as05.example.com(1)",
	"User": "alice",
	"Password": "myPassword",
	"Client": "800",
	"Language": "en",
	"InstanceNo": 0
	}
	```
	
	1.	!!! tip 
	
			Input values for the SAP connection can be found in the *Properties* of the SAP Logon Pad or they can be requested from the SAP Basis team.

@@@ POST http://localhost:1337/v0/connections/sap/{name} "Host": "sap-erp-as05.example.com", "User": "alice", "Password": "myPassword", "Client": "800", "Language": "en", "InstanceNo": 0
    [Content-Type: application/json]
    [Content-Length: 142]


When this endpoint is called, the Xtract Core web server tries to establish a connection to the SAP system with the given credentials before saving the connection.

!!! tip
	The `Content-Length` property in the header represents the byte size of the JSON string in the request body.
	When using curl, the `Content-Length` can be determined automatically. The `-v` (verbose) option returns the request details, including `Content-Length`. 
	<!--
	Example:
	```curl
	curl -X POST -H "Content-Type: application/json" -d "{"Host": "sap-erp-as05.example.com", "User": "alice", "Password": "myPassword", "Client": "800", "Language": "en", "InstanceNo": 0}" -v localhost:1337
	```
	-->

	
<!--
Replace `{name}` with a name for the source connection.
Allowed characters are [a-zA-Z0-9]. The name must not start with a number.Because the names of extractions and connections map to a directory on the file system, names are unique and not case sensitive.

The `Content-Length` property in the header represents the size of the request body in bytes.



#### Test the SAP Connection

Use the following endpoint to check if an existing SAP connection can succesfully connect to the specified SAP system:

=== ":material-file-document-outline: example"
	```http
	GET /v0/connections/sap/{name}/test HTTP/1.1
	Host: localhost:1337
	```

@@@ GET http://localhost:1337/v0/connections/sap/{name}/test 

When this endpoint is called, the Xtract Core web server opens a connection to SAP using the information that is stored in the configuration of the connection.

-->

### Create Azure Blob Storage Connections

To connect to a Microsoft Azure Blob Storage, generate a Shared Access Signature (SAS) token for authentication, see [Microsoft Documentation: Create SAS tokens for storage containers](https://learn.microsoft.com/en-us/azure/ai-services/document-intelligence/authentication/create-sas-tokens?view=doc-intel-4.0.0&tabs=azure-portal#use-the-azure-portal).
The following SAS permissions are required to write data to the Azure container:
- Add
- Create
- Write
- Delete
- List


Use the following endpoint to create a new connection to an Azure blob storage container: 

``` HTTP
POST /v0/connections/azureblob/{name}
```

=== ":material-file-document-outline: example"
	```http
	POST /v0/connections/azureblob/{name} HTTP/1.1
	Host: localhost:1337
	Content-Type: application/json
	Content-Length: 223
	
	{
	"Account": "my-account",
	"Token": "sv=YYYY-MM-DD&ss=...%3D(1)",
	"Container": "container"
	}
	```

	1.  !!! tip

			You can copy the SAS token from the Azure portal in: <br>
			**Storage accounts > [account_name] > Data storage > Containers > [container_name] > Generate SAS**. <br>
			![container-sas](assets/images/documentation/destinations/azure-storage/container-sas.png)

@@@ POST http://localhost:1337/v0/connections/sap/{name} "Account": "my-account", "Token": "sv=YYYY-MM-DD&ss=...%3D", "Container": "container"
    [Content-Type: application/json]
    [Content-Length: 223]


When this endpoint is called, the Xtract Core web server tries to establish a connection to Azure with the given credentials before saving the connection.

!!! tip
	The `Content-Length` property in the header represents the byte size of the JSON string in the request body.
	When using curl, the `Content-Length` can be determined automatically. The `-v` (verbose) option returns the request details, including `Content-Length`. 
	
<!--
### Create CSV Flat File Connections

not yet available?
-->

## Extractions

An extraction is a combination of the following components:

- A connection to a source system, e.g., SAP S/4HANA, SAP BW, etc.
- A definition of the data you want to extract from the source system.
- A connection to a target environment / destination in which the data is written.

For information on extraction endpoints, refer to the [API Reference](api-reference.md).

!!! note
	When creating an extraction no data is extracted. Once the extraction is created, it needs to be run to extract data.
	
### Create Table Extractions

<!--
Before creating extractions, make sure to meet the following requirements: 
- A [connection to an SAP system](#create-sap-connections) is available. 
- The SAP user of the SAP connection has sufficient user rights, see [Knowledge Base Article: SAP Authorization Objects](knowledge-base/sap-authority-objects.md/#table)
- A [connection to a destination](#create-azure-blob-storage-connections) is available.
-->

Before creating an extraction, make sure the SAP user used in the SAP connection has sufficient user rights to access tables, see [Knowledge Base Article: SAP Authorization Objects](knowledge-base/sap-authority-objects.md/#table).

Use the following endpoint to create a new table extraction: 

``` HTTP
POST /v0/extractions/table/{name}
```

=== ":material-file-document-outline: example"
	```http
	POST /v0/extractions/table/{name} HTTP/1.1
	Host: localhost:1337
	Content-Type: application/json
	Content-Length: 190
	
	{
	"Table": "MARA",
	"Where": "MATNR = 000000000001",
	"Source": "s4hana",
	"Destination": "azure",
	"Columns": ["MATNR", "MANDT"],
	"ResultName": "materials",
	"FunctionModule": "/THEO/READ_TABLE"
	}
	```

@@@ POST http://localhost:1337/v0/extractions/table/{name} "Table": "MARA", "Where": "MATNR = 000000000001", "Source": "s4hana", "Destination": "azure", "Columns": ["MATNR", "MANDT(1)"], "ResultName": "materials", "FunctionModule": "/THEO/READ_TABLE"
    [Content-Type: application/json]
    [Content-Length: 190]

!!! tip
	The `Content-Length` property in the header represents the byte size of the JSON string in the request body.
	When using curl, the `Content-Length` can be determined automatically. The `-v` (verbose) option returns the request details, including `Content-Length`. 
	
#### Properties of Table Extractions

The HTTP request body for creating table extractions supports the following settings:
	
| Property | Description | Required |
|-----------|------------|----------|
| **Table**     | Name of the SAP table you want to extract data from. | Yes |
| **Where**    | WHERE clause to filter table records. | Yes |
| **Source**    | Name of an existing SAP connection. | Yes |
| **Destination**| Name of a destination connection, e.g., to an Azure Blob Storage container. | Yes |
| **Columns** | Define which SAP table columns to extract. If omitted, all columns are extracted. | No |
| **ResultName** | Name of the new table in the target environment. If omitted, the name of the extration is also the name of the new table. | No |
| **FunctionModule** | Name of the function module that is used to extract SAP tables. If omitted, the SAP standard function module *RFC_READ_TABLE* is used. The installation of */THEO/READ_TABLE* is recommended. For more information, see [Function Module for Tables](knowledge-base/custom-function-module-for-table-extraction.md). | No |


## Run Extractions

Extractions are triggered by an HTTP request and executed on the web server.
Extractions can be started either synchronous or asynchronous. 
The response of an extraction run contains the following information:

| Response | Description |
|----------|-------------|
| HTTP status code | The HTTP status code 200 indicates a successful extraction call. It does not indicate a successful execution of the extraction. The HTTP status code 404 indicates that the called extraction does not exist. Detailed information can be found in the log of the web service. |
| HTTP header | Shows the timestamp of the extraction, e.g., X-XU-Timestamp: 2025-01-24_19:03:09.971. The timestamp is unique and can be used to query status information and logs of the extraction. |
| HTTP response body | The response body of the extraction contains the extraction log. |

For information, refer to the [API Reference](api-reference.md).

!!! note 
	The status code 200 indicates a successful extraction call. It does not indicate a successful execution of the extraction.


### :material-arrow-right-thin: Synchronous Extractions

When running extractions synchronously, the HTTP response head is returned as soon as the server receives the first data package. 
Use the following endpoint to run an extraction and wait for the result: 

=== ":material-file-document-outline: example"
	```http
	GET /run/{name} HTTP/1.1
	Host: localhost:1337
	
	```

@@@ GET http://localhost:1337/run{name}/

!!! note
	Any issue that occure before the first data package is received, result in a 4XX or 5XX status code.


### :material-shuffle-disabled: Asynchronous Extractions

When running extractions asynchronously, the request immediately returns the HTTP response head.
Status information can be queried using the timestamp in the header.
Use the following endpoint to run an extraction without waiting for the results: 

=== ":material-file-document-outline: example"
	```http
	GET /start/{name} HTTP/1.1
	Host: localhost:1337
	
	```

@@@ GET http://localhost:1337/start{name}/


### Extraction Parameters

When running extractions, the following query parameters are supported:

| Parameter	| Description | Required |
|-----------|-------------|----------|
| rows      | Set a maximum number of rows to be extracted. 0 extracts all data. You can use this option to perform tests with a small amount of data by entering a row limit of e.g., 100. | No |
| whereClause | WHERE clause to filter table records. For more information, see [WHERE Clause Syntax](knowledge-base/where-clause.md). | No |
| packageSize | The extracted data is split into packages of the defined size. The default value is 50000 lines. A package size between 20000 and 50000 is advisable for large amounts of data. 0 means no packaging. Not using packaging can lead to an RFC timeout for large data extractions. | No |
