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

## About Xtract Core

Xtract Core is a whitelabel Web API server for developing your own SAP interfaces.
The Xtract Core API enables you to extract data from SAP Tables and write them to target environments.

As Xtract Core is still in its initial release, only certain SAP objects and target environments are supported. 
Contact the Theobald Software [sales team](mailto:sales@theobald-software.com) for feature requests or feedback.

<div class="grid cards" markdown>

- :simple-sap: __Supported SAP Objects:__
	
	---

	- SAP Tables
	- Planned for Q3 2025: Delta Table extractions (CDC)

- :material-bullseye: __Supported Target Environments:__
 
	---

	- Azure Blob Storage

</div>
	
For information on which SAP systems are supported, refer to the [Xtract Core Requirements](knowledge-base/requirements.md/#supported-sap-systems-and-releases).


### Get Xtract Core

Contact the Theobald Software [sales team](mailto:sales@theobald-software.com?subject=Requesting%20Xtract%20Core%20Trial&body=I'd%20like%20to%20receive%20a%202-month%20demo%20version%20of%20Xtract%20Core.) to get access to a 2 month trial version of Xtract Core. 

You are guaranteed to get unrestricted support by the Theobald Software support team during the evaluation phase.
In case of questions or doubts, feel free to contact Theobald Software at any time: 

<div class="grid cards" markdown>

- [:material-form-select:  Contact Forms](https://theobald-software.com/en/contact/)
- [:material-comment-account:  Support Portal](https://support.theobald-software.com)

</div>

## Setup

Xtract Core provides a configurable Windows service that acts as a web server to serve incoming API calls.
The service and network settings of Xtract Core can be configured using the files in the installaltion directory of Xtract Core.

### Prerequisites

- Contact the Theobald Software [sales team](mailto:sales@theobald-software.com?subject=Requesting%20Xtract%20Core%20Trial&body=I'd%20like%20to%20receive%20a%202-month%20demo%20version%20of%20Xtract%20Core.) to get a 2 month trial version of Xtract Core. <!-- or download the latest version from the [customer portal](https://my.theobald-software.com/).-->
- Download and install the [.NET8.0 Desktop Runtime from Microsoft](https://dotnet.microsoft.com/en-us/download/dotnet/thank-you/runtime-desktop-8.0.11-windows-x64-installer) and install it.
- Optional: Install the THEO/READ_TABLE function module in SAP to boost the capabilities of SAP table extractions. 
For more information, see [Knowledge Base: Function Module for Tables](knowledge-base/custom-function-module-for-table-extraction.md).

For more information on system requirements and supported SAP systems, see [Knowledge Base: Requirements](knowledge-base/requirements.md).


### Installation

Follow the steps below to install the Xtract Core Windows service:

1. Extract all files from the `XtractCore.zip` archive into the directory where you want to install Xtract Core.
2. Open a command line tool with administrator rights and navigate to the installation directory.
3. Run the following command to install the Xtract Core Windows service and to create a dedicated user for the service:
	```terminal
	service.exe -i --virtual-service-user 
	```
4. Make sure that the Xtract Core service "SAP Connector" is running on your Windows system and that the default port {{ port }} is not blocked by the firewall.<br>
![xtract-core-service](assets/images/documentation/introduction/xc/xtract-core-service.png)

The Xtract Core Windows service can now receive HTTP requests.
For information on how to change the default settings of the Xtract Core service, refer to the [service settings](#service-settings) and [network-settings](#network-settings).

!!! note
	To update Xtract Core replace the files in the installation directory with the new Xtract Core installation files.

### Files in the Installation Directory

The installation directory contains the following files:

| Filename	| Description |
|------------|--------------|
|  config directory |	Directory that contains all SAP and destination connections, extractions, and web server settings. This directory is created when executing a POST request for the first time.|
|  logs directory |	Directory that contains service logs. | 
|  private directory | Directory that contains keys to encrypt passwords. This directory is created when running an extraction for the first time. |
|  Transport directory |	Directory that contains SAP function modules. Read the README.pdf within the directory for more information.  | 
|  Cleaner.exe |	Application that deletes all cached results and log files.  | 
|  ConfigConverter.exe | Application that converts extractions, connections, etc. from previous a version format to the new format.|
|  listener.exe |	Application that starts one worker per incomming connection. listener.exe can be renamed (make sure to rename the listener.json as well and update the content of theobald.service.definition.json). | 
|  listener.json | Contains the default settings of the web server. listener.json can be renamed (make sure that the listener.json has the same name as the listener.exe). |
|  service.exe |	Application that installs Xtract Core.  | 
|  theobald.service.definition.json | Contains the configuration of the Xtract Core Windows service. theobald.service.definition.json cannot be renamed. |
|  worker.exe |	Application that handles HTTP requests. worker.exe can be renamed (make sure to update the content of listener.json). | 
|  XtractCoreLicense.json |	License file. | 


### Service Settings

The name (`serviceName`), displayed name (`displayName`) and description (`description`) of the Windows service can be changed in the `theobald.service.definition.json` file.

```json title="theobald.service.definition.json"
{
    "servers": [
        {
            "path": "listener.exe",
            "displayName": "listener"
        }
    ],
    "displayName": "SAPConnector",
    "description": "A web API for extracting data from SAP systems",
    "convertConfig": false,
    "minCfgVersion": "2024.10.30.35",
    "currentVersion": "9925.3.12.51",
    "serviceName": "SAP Connector Service"
}
```

!!! note
	Do not change any values for `convertConfig`, `minCfgVersion` and `currentVersion`.

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

You can enable Transport Layer Security (TLS) to use secured HTTPS communication for the web server.
For information on how to set up TLS with Xtract Core, refer to the [Knowledge Base Article: Install an X.509 Certificate](./knowledge-base/install-x.509-certificate.md).

## How to use the API

The general workflow for Xtract Core includes the following steps:

<div class="workflow" markdown>

1. Create a [connection to an SAP source system](#create-sap-connections) to extract data from.
2. Create a [connection to a target environment / destination](#create-azure-blob-storage-connections) to write data to.
3. Optional: Fetch information about the tables in your SAP source system. For Example:
	- [names and descriptions of tables](api-reference.md/#/connections/metaconnection) 
	- [names and descriptions of table columns](api-reference.md/#/connections/metatable)
4. Create a reusable [extraction](#create-table-extractions) that defines which SAP table data to extract.
5. [Run](#run-extractions) the extraction.

</div>

The [API Reference](api-reference.md) lists all available Xtract Core endpoints.
It includes descriptions of all endpoints and their parameters. 
The Xtract Core API uses the following parameter types:

| Parameters | Description | Example |
| :------ |:--- | :--- |
| Path | Path parameters are part of the request URL and are used to address specific resources. They are referenced by placeholders in curved brackets.| */connections/sap/<span style="color:red">{name}</span>/tables?pattern=ma** |
| Query | Query parameters are added to the end of a request URL, following '?'. They are listed in key-value pairs, separated by '&'. Query parameters can be used for filtering or sorting. | */connections/sap/{name}/tables<span style="color:red">?pattern=ma*</span>* |
| Body | Body parameters are passed in the request body of POST methods to add or update structured data. A list of mandatory and optional body parameters is provided in the data model of an API call. In the API reference, expand the data model to display the descriptions of the parameters. | - |


### Create SAP Connections

Before connecting to SAP for the first time, set up an SAP dialog user with the necessary [SAP user rights](knowledge-base/sap-authority-objects.md/#general-authorization-objects).<br>
Use the following endpoint to create a new connection to an SAP application server: 

```http
POST /v1/connections/sap/{name}
```

=== ":material-file-document-outline: example"
	``` http
	POST /v1/connections/sap/{name} HTTP/1.1
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
	
	1.	Input values for the SAP connection can be found in the *Properties* of the SAP Logon Pad or they can be requested from the SAP Basis team.

@@@ POST http://localhost:1337/v1/connections/sap/{name} "Host": "sap-erp-as05.example.com", "User": "alice", "Password": "myPassword", "Client": "800", "Language": "en", "InstanceNo": 0
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
	GET /v1/connections/sap/{name}/test HTTP/1.1
	Host: localhost:1337
	```

@@@ GET http://localhost:1337/v1/connections/sap/{name}/test 

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
POST /v1/connections/azureblob/{name}
```

=== ":material-file-document-outline: example"
	```http
	POST /v1/connections/azureblob/{name} HTTP/1.1
	Host: localhost:1337
	Content-Type: application/json
	Content-Length: 223
	
	{
	"Account": "my-account",
	"Token": "sv=YYYY-MM-DD&ss=...%3D(1)",
	"Container": "container"
	}
	```

	1.  You can copy the SAS token from the Azure portal in: <br>
		**Storage accounts > [account_name] > Data storage > Containers > [container_name] > Generate SAS**. <br>
		![container-sas](assets/images/documentation/destinations/azure-storage/container-sas.png)

@@@ POST http://localhost:1337/v1/connections/azureblob/{name} "Account": "my-account", "Token": "sv=YYYY-MM-DD&ss=...%3D", "Container": "container"
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

	
### Create Table Extractions


Before creating extractions, make sure to meet the following requirements: 
- A valid [connection to an SAP system](#create-sap-connections) is available. 
- The SAP user of the SAP connection has sufficient user rights, see [Knowledge Base Article: SAP Authorization Objects](knowledge-base/sap-authority-objects.md/#table)
- A valid [connection to a destination](#create-azure-blob-storage-connections) is available.
- You know the technical name of the SAP table you want to extract. You can fetch the names and descriptions of the tables in your SAP source system [using the Xtract Core API](api-reference.md/#/connections/metaconnection).

Use the following endpoint to create a new table extraction: 

``` HTTP
POST /v1/extractions/table/{name}
```

=== ":material-file-document-outline: example"
	```http
	POST /v1/extractions/table/{name} HTTP/1.1
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

@@@ POST http://localhost:1337/v1/extractions/table/{name} "Table": "MARA", "Where": "MATNR = 000000000001", "Source": "s4hana", "Destination": "azure", "Columns": ["MATNR", "MANDT(1)"], "ResultName": "materials", "FunctionModule": "/THEO/READ_TABLE"
    [Content-Type: application/json]
    [Content-Length: 190]

!!! tip
	The `Content-Length` property in the header represents the byte size of the JSON string in the request body.
	When using curl, the `Content-Length` can be determined automatically. The `-v` (verbose) option returns the request details, including `Content-Length`. 
	

### Run Extractions

Extractions are executed on the web server.
An extraction can be executed synchronously (`run`) or asynchronously (`start`). 
The response of an extraction run contains the following information:

| Response | Description |
|----------|-------------|
| HTTP status code | The HTTP status code 200 indicates a successful extraction call. It does not indicate a successful execution of the extraction. The HTTP status code 404 indicates that the called extraction does not exist. Detailed information can be found in the log of the web service. |
| HTTP header | Shows the timestamp of the extraction, e.g., X-XU-Timestamp: 2025-01-24_19:03:09.971. The timestamp is unique and can be used to query status information and logs of the extraction. |
| HTTP response body | The response body of the extraction contains the extraction log. |


#### :material-arrow-right-thin: Synchronous Extractions

When running extractions synchronously, the HTTP response head is returned as soon as the server receives the first data package. 
Use the following endpoint to run an extraction and wait for the result: 

=== ":material-file-document-outline: example"
	```http
	GET /run/{name} HTTP/1.1
	Host: localhost:1337
	 
	```

@@@ GET http://localhost:1337/run/{name}/

!!! note
	Any issue that occure before the first data package is received, result in a 4XX or 5XX status code.

#### :material-shuffle-disabled: Asynchronous Extractions

When running extractions asynchronously, the request immediately returns the HTTP response head.
Status information can be queried using the timestamp in the header.
Use the following endpoint to run an extraction without waiting for the results: 

=== ":material-file-document-outline: example"
	```http
	GET /start/{name} HTTP/1.1
	Host: localhost:1337
	 
	```

@@@ GET http://localhost:1337/start/{name}/

### Access Logs

Xtract Core logs all steps performed on a system in log files.
The log files are located in the installation directory of Xtract Core.
It is also possible to fetch logs using the Xtract Core API. For more information, refer to the [API Reference](api-reference.md/#/logs).
