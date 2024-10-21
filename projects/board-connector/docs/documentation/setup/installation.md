---
title: Installation
description: Installation
---

This page shows how and where to install {{ productName }}. 

### Prerequisites

Administrator permissions are required to install {{ productName }}.

### Setup

`{{ setup }}Setup.exe` is an industry standard setup. 
Execute the `{{ setup }}Setup.exe` file and follow the instructions of the setup program.

When starting the installation program, optional components can be selected during the setup. 

![Migration1](../../assets/images/documentation/setup/bc/Migration_1.png){:class="img-responsive"}

|Component | Description |
|:----|:---|
|Main Product Files | All required files to use Board Connector. |
|Designer | Installs the Designer application, uncheck this option if you want to use Board Connector without a graphical interface. |
|Server | Installs the Board Connector Server. |
| :material-subdirectory-arrow-right: Convert config files | Converts extractions, sources, destinations, etc. from previous version format to new format. Crucial when installing major releases and upgrading from e.g., version 3.x to 4.x.|
|:material-subdirectory-arrow-right: Install Service| Installs the server component as a windows service that runs under a [virtual service account](https://learn.microsoft.com/en-us/windows-server/identity/ad-ds/manage/understand-service-accounts#virtual-accounts) with the least required privileges, see [Server](../server/index.md). |
|Start Menu Shortcuts |Component that adds shortcuts to the start menu.|

!!! note
    Make sure to mark the option “Server > Install Service” during the installation, as installing a server without the service is only used for development purposes.

For information on how to install a license, see [Licensing](license.md#install-the-board-connector-license).

### Installation Directory Files

The list below shows several most important files that are placed into the default directory ``C:\Program Files\BOARDConnector`` after installation:

|Filename | Description |
|:----|:---|
| ABAP directory | Directory with customer-specific function modules (.txt) corresponding to SAP transport requests (.zip).|
| logs directory| Directory with server and extraction logs. See also [Logs](../logs.md). |
| config directory | Directory created automatically with the first extraction, containing all extractions and the corresponding log files, see [Backup](update.md). |
| private directory | Directory containing keys for encrypted SAP passwords. This directory contains sensitive information and must be to be secured accordingly. |
| result-cache directory | Directory with extraction cache files. |
| BCDesigner.exe | Application that launches Board Connector Designer to create, test and monitor extractions.|
| BCService.exe | Application that launches Board Connector Server as Windows Service.  Usually boots automatically and runs in the background. |
| BCApiServer.exe| Unencrypted WCF service for retrieving metadata to the Designer.  |
| Theobald.Bc.Web.Listener.exe| Theobald.Bc.Web.Listener.exe a listener process that waits for HTTP requests. |
| Theobald.Bc.Web.Worker.exe| For each TCP connection the Theobald.Bc.Web.Listener.exe starts a new instance of Theobald.Bc.Web.Worker.exe, which processes all HTTP requests coming in over the TCP connection. |
| BCCleanup.exe| Application that cleans up the old server logs, as defined in the [server settings](../server/server-settings.md). |
| BCConfigServer.exe| Listener process waits for new connection requests from the Designer. |
| ConfigConverter.exe| Application that converts extractions, sources, etc. from previous version format to new format. Crucial when installing major releases and upgrading from e.g., version 3.x to 4.x. |
| uninstall.exe| Tool for uninstalling and removing Board Connector with all its components from your machine. |
| BOARDConnectorSetup.exe| Setup of the currently installed version. See also [Migration to a Different Machine](migration.md#migration-to-a-different-machine).|
| Eula_Board Connector.rtf | Document containing the license agreement for the use of the software Board Connector.|
| BOARDConnectorLicense.json |  License file with information about the server, the component and runtime. |


!!! note
    The Board Connector Server can be started as a console program for test purposes.
    For more details on starting Board Connector Server as a console program, see [Knowledge Base Article: Target Principal Field](../../knowledge-base/target-principal-TPN.md).

{% include "setup/unattended-installation.md" %}	

{% include "requirements/productversion.md" %}	

