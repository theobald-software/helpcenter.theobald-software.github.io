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

![img](site:assets/images/logos/theo-thumbs.png){ .lg .middle width="30px"} This section shows how to install and set up {{ productName }} for the first time.


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
2. Select the XTRACT Connection Manager from the list and click [Add]. XTRACT Connection Manager appears under the tab Connection Managers.
3. To configure the SAP connection, double-click the XTRACT Connection Manager icon. The window “XTRACT Connection Manager” opens
3. Enter the system details of your SAP system and the SAP credentials of the SAP dialog user.
5. Click **[Test Connection]** to validate the connection parameters. A window with a status message opens.
6. Click **[OK]** to save the connection settings. <br>

![yunIO-connection](./assets/images/yunio/getting-started/yunio-connections.gif){:class="img-responsive" style="border:1px solid black" }

For more information, see [Documentation: SAP Connection](documentation/sap-connection/index.md).


### Create an {{ Extraction }} with Xtract {{ Components }}


1. Set up a **Data Flow Task** by dragging the dataflow component into the "Control Flow" canvas. 
2. Double-click the dataflow component to open the dataflow canvas.
3. Add a [*Connection Manager*](./sap-connection/the-connection-manager) to the dataflow that connect to an SAP system.
3. Drag & drop an Xtract {{ component }} from the SSIS toolbox into the data flow task. <br>
![xis_component](assets/images/xis/getting-started/xis_component.png){:class="img-responsive"}
4. Assign an *Connection Manager* by double-clicking on the Xtract {{ component }}. 
5. Double-click on the Xtract {{ component }}. The main window of the {{ component }} opens. 
The majority of the functions of the {{ component }} can be accessed in the main window.
Xtract IS offers the following {{ components }}:

	|  {{ Component }}  |   Data Flow Component Type | Description   |  
	|----------|-------------|-------------|
	| [:component-bapi:  {{ bapi }}](site:documentation/bapi/) |  Transformation | Execute BAPIs and Function Modules. |
	| [:component-bwcube:  {{ bwcube }}](site:documentation//bw-cube/) | Source   | Extract data from SAP BW InfoCubes and BEx Queries. |
	| [:component-bwloader:  {{ bwloader }}](site:documentation/bwloader/) | Destination | Load data into SAP BW systems. |
	| [:component-hierarchy:  {{ hierarchy }}](site:documentation/hierarchy/) | Source   | Extract Hierarchies from an SAP BW / BI system. |
	| [:component-deltaq:  {{ deltaq }}](site:documentation/deltaq/) | Source   | Extract data from DataSources (OLTP) and extractors from ERP and ECC systems. | 
	| [:component-odp:  {{ odp }}](site:documentation/odp/) | Source   | Extract data via the SAP Operational Data Provisioning (ODP) framework. | 
	| [:component-ohs:  {{ ohs }}](site:documentation/ohs/) | Source   | Extract data from InfoSpokes and OHS destinations. | 
	| [:component-query:  {{ query }}](site:documentation/query/) | Source   | Extract data from ERP queries. **Note: BEx queries are covered by the {{ bwcube }} {{ component }}**. | 
	| [:component-report: {{ report }}](site:documentation/reports/) | Source   | Extract data from SAP ABAP reports. | 
	| [:component-table:  {{ table }}](site:documentation/table/) | Source   | Extract data from SAP tables and views. |
	| [:component-table-cdc:  {{ tableCDC }}](site:documentation/table-cdc/) | Source   | Extract delta data from SAP tables and views. |
7. After the Xtract {{ component }} is set up,execute the SSIS package.

#### How to Create a Simple SAP Data Extraction for Beginners

Follow the steps below to create a simple SSIS package that extracts customer master data from an SAP table:

1. Drag & drop an {{ table }} {{ component }} from the SSIS toolbox into the data flow task.
2. Double-click on the {{ table }} {{ component }} to assign a *Connection Manager* and to open the main window of the {{ component }}. 
3. Click **[:material-plus-thick:Add]** to look up an SAP table. The window “Table Lookup” opens.
4. In the "Table Lookup" window, enter the name of the SAP standard table KNA1. Use wildcards ( * ) if needed.
5. Click :magnifying-glass: to display the tables found in the SAP system.
6. Select KNA1 from the search results and click **[OK]**. The window “Table Lookup” closes.
7. Optional: Select the table columns you want to extract. By default all columns are extracted. 
For more information on filter options and advanced settings, see [Documentation: Xtract Table](documentation/table/index.md).
8. Click **[Load live preview]** to display a live preview of the first 100 records.
9. Click **[OK]** to save the setup.
10. Add ... to process the extracted SAP data, e.g., .
11. Execute the SSIS package.<br>
<video style="border: 1px solid black;"  controls><source src="../assets/images/xis/yunIO-connection.mp4" type="video/mp4"></video>

