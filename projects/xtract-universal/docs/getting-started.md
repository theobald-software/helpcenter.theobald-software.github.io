---
title: Getting Started
description: Getting Started
hide:
  - navigation
  - tags
tags:
  - quickstart
  - quick start  
---

<div class="grid cards" markdown>

-   ![img](site:assets/images/logos/theo-thumbs.png){ .lg .middle width="30px"} This section shows how to install and set up {{ productName }} for the first time.

</div>


### Installation

1. [Download](https://theobald-software.com/en/download-trial/) a 30 days trial version of yunIO.
2. Run the yunIO executable (yunIOSetup.exe) to install yunIO.
For information on system requirements, see [Requirements](documentation/setup/requirements.md).
3. Make sure that the YunIO Service is running on your windows system and that the default port 8077 is not blocked by your firewall.<br>
4. Open the yunIO Designer at `http://localhost:8077/` in a [web browser](documentation/setup/requirements.md#supported-web-browsers) of your choice.<br>
If the yunIO service does not run on the same machine as the browser, replace `localhost` with the name or IP address of the host on which the service runs.

For more information, see [Documentation: Installation](documentation/setup/installation-and-update.md).

### Connect to SAP

Before connecting to SAP for the first time, set up an SAP dialog user with the necessary [SAP Authorization Objects](documentation/setup-in-sap/sap-authority-objects.md/#general-authorization-objects).

1. Navigate to the  :yunio-nav-connections: *Connections* menu at the left side navigation area of the Designer.
2. Click **[Add Connection]** to create a new SAP connection.<br>
3. Enter the system details of your SAP system in the subsection *System*.<br>
4. Enter the SAP credentials of the SAP dialog user in the subsection *Authentication*.
5. Click **[Test Connection]** to validate the connection parameters. A window with a status message opens.
6. Click **[Save]** to save the connection settings. <br>

![yunIO-connection](./assets/images/yunio/getting-started/yunio-connections.gif){:class="img-responsive" style="border:1px solid black" }

For more information, see [Documentation: SAP Connection](documentation/sap-connection/index.md).

