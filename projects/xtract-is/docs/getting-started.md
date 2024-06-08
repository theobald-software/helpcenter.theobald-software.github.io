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

1. [Download](https://theobald-software.com/en/download-trial/) a 30 days trial version of Xtract IS.
2. Make sure to meet all [prerequisites](documentation/setup/installation.md#prerequisites), before installing Xtract IS.
3. Run the Xtract IS executable (XtractISSetup.exe) to install Xtract IS.
For information on system requirements, see [Requirements](documentation/setup/requirements.md).
4. Open Visual Studio and create a Visual Studio Integration Services project.
The Xtract IS {{ components }} are available in the SSIS toolbox of a Data Flow Task.

!!! note
	If the Xtract IS {{ components }} are not displayed in the SSIS toolbox, 
	check if the deployment target version of the SSIS project matches the version of the installed SQL Server Data Tools (SSDT), see [Xtract IS Components in Visual Studio](documentation/setup/installation.md#xtract-is-components-in-visual-studio).

For more information, see [Documentation: Installation](documentation/setup/installation.md).

### Connect to SAP

Before connecting to SAP for the first time, set up an SAP dialog user with the necessary [SAP Authorization Objects](documentation/setup-in-sap/sap-authority-objects.md/#general-authorization-objects).

Create a new connection manager. 

1. Right-click in the connection managers within “Solution Explorer” area and choose New connection Manager. The window “Add SSIS Connection Manager” opens.
Connection-Manager-01
2. Select the XTRACT Connection Manager from the list and click [Add]. Xtract IS Connection manager appears under the tab Connection Managers.
3. To configure the SAP connection, double-click the Xtract IS Connection Manager icon. The window “Xtract IS Connection Manager” opens
3. Enter the system details of your SAP system and the SAP credentials of the SAP dialog user.
5. Click **[Test Connection]** to validate the connection parameters. A window with a status message opens.
6. Click **[OK]** to save the connection settings. <br>

![yunIO-connection](./assets/images/yunio/getting-started/yunio-connections.gif){:class="img-responsive" style="border:1px solid black" }

For more information, see [Documentation: SAP Connection](documentation/sap-connection/index.md).


### Create an {{ extraction }} with Xtract {{ Components }}

1. Set up a **Data Flow Task** by dragging the dataflow component into the "Control Flow" canvas. 
2. Double-click the dataflow component to open the dataflow canvas.
3. Add an [*Xtract Connection Manager*](./sap-connection/the-connection-manager) to the dataflow.
3. Drag & drop an Xtract {{ component }} from the SSIS toolbox into the data flow task. <br>
![xis_component](assets/images/xis/getting-started/xis_component.png){:class="img-responsive"}
4. Assign a *Connection Manager* by double-clicking on the Xtract {{ component }}. 
5. Double-click on the Xtract {{ component }}. The main window of the {{ component }} opens. 
The majority of the functions of the component can be accessed using the main window.
The following Xtract {{ components }} are available:

	|  {{ Component }}  |  Description   |  
	|----------|-------------|
	| [:component-bapi:  {{ bapi }}](documentation/bapi/index.md) | Execute BAPIs and Function Modules. |
	| [:component-bwcube:  {{ bwcube }}](documentation//bw-cube/index.md) | Extract data from SAP BW InfoCubes and BEx Queries. |
	| [:component-bwloader:  {{ bwloader }}](documentation/bwloader/index.md) | Load data into SAP BW systems. |
	| [:component-hierarchy:  {{ hierarchy }}](documentation/hierarchy/index.md) | Extract Hierarchies from an SAP BW / BI system. |
	| [:component-deltaq:  {{ deltaq }}](documentation/deltaq/index.md) | Extract data from DataSources (OLTP) and extractors from ERP and ECC systems. | 
	| [:component-odp:  {{ odp }}](documentation/odp/index.md) | Extract data via the SAP Operational Data Provisioning (ODP) framework. | 
	| [:component-ohs:  {{ ohs }}](documentation/ohs/index.md) | Extract data from InfoSpokes and OHS destinations. | 
	| [:component-query:  {{ query }}](documentation/query/index.md) | Extract data from ERP queries. **Note: BEx queries are covered by the {{ bwcube }} {{ component }}**. | 
	| [:component-report: {{ report }}](documentation/reports/index.md) | Extract data from SAP ABAP reports. | 
	| [:component-table:  {{ table }}](documentation/table/index.md) | Extract data from SAP tables and views. |
	| [:component-table-cdc:  {{ tableCDC }}](documentation/table-cdc/index.md) | Extract delta data from SAP tables and views. |


::cards:: cols=4

- title: {{ bapi }}
  image: ./assets/images/logos/components/Function-BAPI.svg
  content: Execute BAPIs and Function Modules.
  url: ./documentation/bapi/
  
- title: {{ bwcube }}
  image: ./assets/images/logos/components/Cube-BEx.svg
  content: Extract data from SAP BW InfoCubes and BEx Queries.
  url: ./documentation/bw-cube/
  
- title: {{ bwloader }}
  image: ./assets/images/logos/components/BWLoader.svg
  content: Load data into SAP BW systems.
  url: ./documentation/bwloader/

- title: {{ hierarchy }}
  image: ./assets/images/logos/components/Hierarchy.svg
  content: Extract Hierarchies from an SAP BW / BI system.
  url: ./documentation/hierarchy/
  
- title: {{ deltaq }}
  image: ./assets/images/logos/components/DeltaQ.svg
  content: Extract data from DataSources (OLTP) and extractors from ERP and ECC systems.
  url: ./documentation/deltaq/

- title: {{ odp }}
  image: ./assets/images/logos/components/ODP.svg
  content: Extract data via the SAP Operational Data Provisioning (ODP) framework.
  url: ./documentation/odp/
  
- title: {{ ohs }}
  image: ./assets/images/logos/components/Open-Hub.svg
  content: Extract data from InfoSpokes and OHS destinations.
  url: ./documentation/ohs/
  
- title: {{ query }}
  image: ./assets/images/logos/components/Query.svg
  content: Extract data from ERP queries. <br>**BEx queries are covered by {{ bwcube }}**.
  url: ./documentation/query/

- title: {{ report }}
  image: ./assets/images/logos/components/Report.svg
  content: Extract data from SAP ABAP reports.
  url: ./documentation/report/
  
- title: {{ table }}
  image: ./assets/images/logos/components/Table.svg
  content: Extract data from SAP tables and views. 
  url: ./documentation/table/

- title: {{ tableCDC }}
  image: ./assets/images/logos/components/Table-CDC.svg
  content:  Extract delta data from SAP tables and views.
  url: ./documentation/table-cdc/

::/cards::