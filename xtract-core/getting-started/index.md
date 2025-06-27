This section shows how to install and set up Xtract Core for the first time.

## About Xtract Core

Xtract Core is a whitelabel Web API server for developing your own SAP interfaces. The Xtract Core API enables you to extract data from SAP Tables and write them to target environments.

As Xtract Core is still in its initial release, only certain SAP objects and target environments are supported. Contact the Theobald Software [sales team](mailto:sales@theobald-software.com) for feature requests or feedback.

- **Supported SAP Objects:**

  ______________________________________________________________________

  - SAP Tables
  - Planned for Q3 2025: Delta Table extractions (CDC)

- **Supported Target Environments:**

  ______________________________________________________________________

  - Azure Blob Storage

For information on which SAP systems are supported, refer to the [Xtract Core Requirements](../knowledge-base/requirements/#supported-sap-systems-and-releases).

### Get Xtract Core

Contact the Theobald Software [sales team](mailto:sales@theobald-software.com?subject=Requesting%20Xtract%20Core%20Trial&body=I'd%20like%20to%20receive%20a%202-month%20demo%20version%20of%20Xtract%20Core.) to get access to a 2 month trial version of Xtract Core.

You are guaranteed to get unrestricted support by the Theobald Software support team during the evaluation phase. In case of questions or doubts, feel free to contact Theobald Software at any time:

- [Contact Forms](https://theobald-software.com/en/contact/)
- [Support Portal](https://support.theobald-software.com)

## Setup

Xtract Core provides a configurable Windows service that acts as a web server to serve incoming API calls. The service and network settings of Xtract Core can be configured using the files in the installaltion directory of Xtract Core.

### Prerequisites

- Contact the Theobald Software [sales team](mailto:sales@theobald-software.com?subject=Requesting%20Xtract%20Core%20Trial&body=I'd%20like%20to%20receive%20a%202-month%20demo%20version%20of%20Xtract%20Core.) to get a 2 month trial version of Xtract Core.
- Download and install the [.NET8.0 Desktop Runtime from Microsoft](https://dotnet.microsoft.com/en-us/download/dotnet/thank-you/runtime-desktop-8.0.11-windows-x64-installer) and install it.
- Optional: Install the THEO/READ_TABLE function module in SAP to boost the capabilities of SAP table extractions. For more information, see [Knowledge Base: Function Module for Tables](../knowledge-base/custom-function-module-for-table-extraction/).

For more information on system requirements and supported SAP systems, see [Knowledge Base: Requirements](../knowledge-base/requirements/).

### Installation

Follow the steps below to install the Xtract Core Windows service:

1. Extract all files from the `XtractCore.zip` archive into the directory where you want to install Xtract Core.

1. Open a command line tool with administrator rights and navigate to the installation directory.

1. Run the following command to install the Xtract Core Windows service and to create a dedicated virtual user that runs the service:

   ```text
   service.exe -i --virtual-service-user 

   ```

1. Make sure that the Xtract Core service "SAP Connector" is running on your Windows system and that the default port 1337 is not blocked by the firewall.

The Xtract Core Windows service can now receive HTTP requests. For information on how to change the default settings of the Xtract Core service, refer to the [service settings](#service-settings) and [network-settings](#network-settings).

Note

To update Xtract Core replace the files in the installation directory with the new Xtract Core installation files.

Warning

**Access is denied.**\
The virtual user that is created during the installation of Xtract Core has minimal access rights. If Xtract Core is installed in a user-specific directory (e.g., `C:\Users\<username>\Documents`), the virtual user cannot access the files. To successfully run the Windows service, grant the virtual user access rights to the directory or install Xtract Core in a system-level directory, e.g., `C:\XtractCore`.

### Files in the Installation Directory

The installation directory contains the following files:

| Filename | Description | | --- | --- | | config directory | Directory that contains all SAP and destination connections, extractions, and web server settings. This directory is created when executing a POST request for the first time. | | logs directory | Directory that contains service logs. | | private directory | Directory that contains keys to encrypt passwords. This directory is created when running an extraction for the first time. | | Transport directory | Directory that contains SAP function modules. Read the README.pdf within the directory for more information. | | Cleaner.exe | Application that deletes all cached results and log files. | | ConfigConverter.exe | Application that converts extractions, connections, etc. from previous a version format to the new format. | | listener.exe | Application that starts one worker per incomming connection. listener.exe can be renamed (make sure to rename the listener.json as well and update the content of theobald.service.definition.json). | | listener.json | Contains the default settings of the web server. listener.json can be renamed (make sure that the listener.json has the same name as the listener.exe). | | service.exe | Application that installs Xtract Core. | | theobald.service.definition.json | Contains the configuration of the Xtract Core Windows service. theobald.service.definition.json cannot be renamed. | | worker.exe | Application that handles HTTP requests. worker.exe can be renamed (make sure to update the content of listener.json). | | XtractCoreLicense.json | License file. |

### Service Settings

The name (`serviceName`), displayed name (`displayName`) and description (`description`) of the Windows service can be changed in the `theobald.service.definition.json` file.

theobald.service.definition.json

```json
{
    "description": "A web API for extracting data from SAP systems",
    "displayName": "SAPConnector",
    "serviceName": "SAP Connector Service",
    "servers": [
        {
            "displayName": "listener",
            "path": "listener.exe"
        }
    ]
}

```

Note

Do not change any values for `convertConfig`, `minCfgVersion` and `currentVersion`.

### Network Settings

The network settings of the web server can be changed in the `listener.json` file.

listener.json

```json
{
    "insecurePort": 1337,
    "securePort": 1338,
    "workerName": "worker.exe",
    "mode": "Localhost(1)" 
}

```

1. The property **mode** supports *Any* and *Localhost*.
   - *Any* listens on the default network interface and the loopback interface.
   - *Localhost* only listens on the loopback interface.

### TLS Configuration

You can enable Transport Layer Security (TLS) to use secured HTTPS communication for the web server. For information on how to set up TLS with Xtract Core, refer to the [Knowledge Base Article: Install an X.509 Certificate](../knowledge-base/install-x.509-certificate/).

## How to use the API

The [API Reference](../api-reference/) lists all available Xtract Core endpoints. It includes descriptions of all endpoints and their parameters. The Xtract Core API uses the following parameter types:

| Parameters | Description | Example | | --- | --- | --- | | Path | Path parameters are part of the request URL and are used to address specific resources. They are referenced by placeholders in curved brackets. | */connections/sap/{name}/tables?pattern=ma*\* | | Query | Query parameters are added to the end of a request URL, following '?'. They are listed in key-value pairs, separated by '&'. Query parameters can be used for filtering or sorting. | */connections/sap/{name}/tables?pattern=ma*\* | | Body | Body parameters are passed in the request body of POST methods to add or update structured data. A list of mandatory and optional body parameters is provided in the data model of an API call. In the API reference, expand the data model to display the descriptions of the parameters. | - |

### General Workflow

The general workflow for first-time Xtract Core users includes the following steps:

1. Create a [connection to an SAP source system](#create-sap-connections) to extract data from.
1. Create a [connection to a target environment / destination](#create-azure-blob-storage-connections) to write data to.
1. Optional: Fetch information about the tables in your SAP source system. For example:
   - [names and descriptions of tables](../api-reference/#/connections/metaconnection)
   - [names and descriptions of table columns](../api-reference/#/connections/metatable)
1. Create a reusable [extraction](#create-table-extractions) that defines which SAP table data to extract.
1. [Run](#run-extractions) the extraction.

### Create SAP Connections

Before connecting to SAP for the first time, set up an SAP dialog user with the necessary [SAP user rights](../knowledge-base/sap-authority-objects/#general-authorization-objects).\
Use the following endpoint to create a new connection to an SAP application server:

```http
POST /v1/connections/sap/{name}

```

```http
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

1. Input values for the SAP connection can be found in the *Properties* of the SAP Logon Pad or they can be requested from the SAP Basis team.

```shell
curl -X POST \
     -H '[Content-Type: application/json]' \
     -H '[Content-Length: 142]' \
     -d '"Host": "sap-erp-as05.example.com", "User": "alice", "Password": "myPassword", "Client": "800", "Language": "en", "InstanceNo": 0' \
     'http://localhost:1337/v1/connections/sap/{name}'

```

```js
fetch('http://localhost:1337/v1/connections/sap/{name}', {
  "method": "POST",
  "headers": {
    "[Content-Type": "application/json]",
    "[Content-Length": "142]"
  },
  "body": JSON.stringify("Host": "sap-erp-as05.example.com", "User": "alice", "Password": "myPassword", "Client": "800", "Language": "en", "InstanceNo": 0)"
});

```

When this endpoint is called, the Xtract Core web server tries to establish a connection to the SAP system with the given credentials before saving the connection.

Tip

The `Content-Length` property in the header represents the byte size of the JSON string in the request body. When using curl, the `Content-Length` can be determined automatically. The `-v` (verbose) option returns the request details, including `Content-Length`.

### Create Azure Blob Storage Connections

To connect to a Microsoft Azure Blob Storage, generate a Shared Access Signature (SAS) token for authentication, see [Microsoft Documentation: Create SAS tokens for storage containers](https://learn.microsoft.com/en-us/azure/ai-services/document-intelligence/authentication/create-sas-tokens?view=doc-intel-4.0.0&tabs=azure-portal#use-the-azure-portal). The following SAS permissions are required to write data to the Azure container:

- Add
- Create
- Write
- Delete
- List

Use the following endpoint to create a new connection to an Azure blob storage container:

```HTTP
POST /v1/connections/azureblob/{name}

```

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

1. You can copy the SAS token from the Azure portal in:\
   **Storage accounts > [account_name] > Data storage > Containers > [container_name] > Generate SAS**.

```shell
curl -X POST \
     -H '[Content-Type: application/json]' \
     -H '[Content-Length: 223]' \
     -d '"Account": "my-account", "Token": "sv=YYYY-MM-DD&ss=...%3D", "Container": "container"' \
     'http://localhost:1337/v1/connections/azureblob/{name}'

```

```js
fetch('http://localhost:1337/v1/connections/azureblob/{name}', {
  "method": "POST",
  "headers": {
    "[Content-Type": "application/json]",
    "[Content-Length": "223]"
  },
  "body": JSON.stringify("Account": "my-account", "Token": "sv=YYYY-MM-DD&ss=...%3D", "Container": "container")"
});

```

When this endpoint is called, the Xtract Core web server tries to establish a connection to Azure with the given credentials before saving the connection.

Tip

The `Content-Length` property in the header represents the byte size of the JSON string in the request body. When using curl, the `Content-Length` can be determined automatically. The `-v` (verbose) option returns the request details, including `Content-Length`.

### Create Table Extractions

Before creating extractions, make sure to meet the following requirements:

- A valid [connection to an SAP system](#create-sap-connections) is available.
- The SAP user of the SAP connection has sufficient user rights, see [Knowledge Base Article: SAP Authorization Objects](../knowledge-base/sap-authority-objects/#table)
- A valid [connection to a destination](#create-azure-blob-storage-connections) is available.
- You know the technical name of the SAP table you want to extract. You can fetch the names and descriptions of the tables in your SAP source system [using the Xtract Core API](../api-reference/#/connections/metaconnection).

Use the following endpoint to create a new table extraction:

```HTTP
POST /v1/extractions/table/{name}

```

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

```shell
curl -X POST \
     -H '[Content-Type: application/json]' \
     -H '[Content-Length: 190]' \
     -d '"Table": "MARA", "Where": "MATNR = 000000000001", "Source": "s4hana", "Destination": "azure", "Columns": ["MATNR", "MANDT(1)"], "ResultName": "materials", "FunctionModule": "/THEO/READ_TABLE"' \
     'http://localhost:1337/v1/extractions/table/{name}'

```

```js
fetch('http://localhost:1337/v1/extractions/table/{name}', {
  "method": "POST",
  "headers": {
    "[Content-Type": "application/json]",
    "[Content-Length": "190]"
  },
  "body": JSON.stringify("Table": "MARA", "Where": "MATNR = 000000000001", "Source": "s4hana", "Destination": "azure", "Columns": ["MATNR", "MANDT(1)"], "ResultName": "materials", "FunctionModule": "/THEO/READ_TABLE")"
});

```

Tip

The `Content-Length` property in the header represents the byte size of the JSON string in the request body. When using curl, the `Content-Length` can be determined automatically. The `-v` (verbose) option returns the request details, including `Content-Length`.

### Run Extractions

Extractions are executed on the web server. An extraction can be executed synchronously (`run`) or asynchronously (`start`). The response of an extraction run contains the following information:

| Response | Description | | --- | --- | | HTTP status code | The HTTP status code 200 indicates a successful extraction call. It does not indicate a successful execution of the extraction. The HTTP status code 404 indicates that the called extraction does not exist. Detailed information can be found in the log of the web service. | | HTTP header | Shows the timestamp of the extraction, e.g., X-XU-Timestamp: 2025-01-24_19:03:09.971. The timestamp is unique and can be used to query status information and logs of the extraction. | | HTTP response body | The response body of the extraction contains the extraction log. |

#### Synchronous Extractions

When running extractions synchronously, the HTTP response head is returned as soon as the server receives the first data package. Use the following endpoint to run an extraction and wait for the result:

```http
GET /run/{name} HTTP/1.1
Host: localhost:1337

```

```shell
curl -X GET 'http://localhost:1337/run/{name}/'

```

```js
fetch('http://localhost:1337/run/{name}/', {"method": "GET"});

```

Note

Any issue that occure before the first data package is received, result in a 4XX or 5XX status code.

#### Asynchronous Extractions

When running extractions asynchronously, the request immediately returns the HTTP response head. Status information can be queried using the timestamp in the header. Use the following endpoint to run an extraction without waiting for the results:

```http
GET /start/{name} HTTP/1.1
Host: localhost:1337

```

```shell
curl -X GET 'http://localhost:1337/start/{name}/'

```

```js
fetch('http://localhost:1337/start/{name}/', {"method": "GET"});

```

### Access Logs

Xtract Core logs all steps performed on a system in log files. The log files are located in the installation directory of Xtract Core. It is also possible to fetch logs using the Xtract Core API. For more information, refer to the [API Reference](../api-reference/#/logs).
