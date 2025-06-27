This section shows how to install and set up Xtract IS for the first time.

### Installation

1. [Download](https://theobald-software.com/en/download-trial/) a 30 day trial version of Xtract IS or download the latest version from the [customer portal](https://my.theobald-software.com/).
1. Make sure you meet all [prerequisites](../documentation/setup/installation/#prerequisites), before installing Xtract IS.
1. Run the Xtract IS executable (XtractISSetup.exe) to install Xtract IS. For information on system requirements, see [Requirements](../documentation/setup/requirements/).
1. Open Visual Studio and create a Visual Studio Integration Services project. The Xtract IS components are available in the SSIS toolbox of a Data Flow Task.

Note

If the Xtract IS components are not displayed in the SSIS toolbox, check if the deployment target version of the SSIS project matches the version of the installed SQL Server Data Tools (SSDT), see [Xtract IS Components in Visual Studio](../documentation/setup/installation/#xtract-is-components-in-visual-studio).

For more information, see [Setup](../documentation/setup/).

### Connect to SAP

Before connecting to SAP for the first time, set up an SAP dialog user with the necessary [SAP user rights](../documentation/setup-in-sap/sap-authority-objects/#general-authorization-objects).

1. Create a new connection manager by right-clicking within the “Solution Explorer” area and selecting **New Connection Manager** in the context menu. The window “Add SSIS Connection Manager” opens.
1. Select the XTRACT Connection Manager from the list of available connection managers and click **[Add...]**. The XTRACT Connection Manager is now available in the connection managers area.
1. Double-click the XTRACT Connection Manager. The window "XTRACT Connection Manager" opens.
1. Enter the system details of your SAP system and enter the SAP username and password of an SAP system or dialogue user.
1. Click **[Test connection]** to validate the connection parameters.
1. Click **[OK]** to save the XTRACT Connection Manager.

For more information, see [SAP Connection](../documentation/sap-connection/).

### Use Xtract Components in Data Flow Tasks

Follow the steps below to add an Xtract component to your data flow task:

1. Set up a **Data Flow Task** by dragging the dataflow component into the "Control Flow" canvas. Double-click the dataflow component to open the dataflow canvas.
1. Make sure that at least one XTRACT Connection Manager is available in the data flow task.
1. Drag & drop an Xtract component from the SSIS toolbox into the data flow task:
1. Double-click the Xtract component. An XTRACT Connection Manager is automatically assigned and the main window of the component opens. The majority of the functions of the component can be accessed in the main window.

Xtract IS offers the following components:

| Component | Type | Description | | --- | --- | --- | | [Xtract BAPI](../documentation/bapi/) | Transformation | Execute BAPIs and Function Modules. | | [Xtract BWCube](../documentation/bwcube/) | Source | Extract data from SAP BW InfoCubes and BEx Queries. | | [Xtract BWLoader](../documentation/bwloader/) | Destination | Load data into SAP BW systems. | | [Xtract Hierarchy](../documentation/hierarchy/) | Source | Extract Hierarchies from an SAP BW / BI system. | | [Xtract DeltaQ](../documentation/deltaq/) | Source | Extract data from DataSources (OLTP) and extractors from ERP and ECC systems. | | [Xtract ODP](../documentation/odp/) | Source | Extract data via the SAP Operational Data Provisioning (ODP) framework. | | [Xtract OHS](../documentation/ohs/) | Source | Extract data from InfoSpokes and OHS destinations. | | [Xtract Query](../documentation/query/) | Source | Extract data from ERP queries. **Note: BEx queries are covered by the Xtract BWCube component**. | | [Xtract Report](../documentation/report/) | Source | Extract data from SAP ABAP reports. | | [Xtract Table](../documentation/table/) | Source | Extract data from SAP tables and views. | | [Xtract TableCDC](../documentation/table-cdc/) | Source | Extract delta data from SAP tables and views. |

#### A Simple SAP Data Extraction for Beginners

Follow the steps below to extract customer master data from the SAP table KNA1:

1. Drag & drop an Xtract Table component from the SSIS toolbox into the data flow task.
1. Double-click the Xtract Table component. An XTRACT Connection Manager is automatically assigned and the main window of the component opens.
1. Click **[Add]** to look up an SAP table. The window “Table Lookup” opens.
1. In the field **Table Name**, enter the name of the table to extract (KNA1) . Use wildcards (\*) if needed.
1. Click **[]** . Search results are displayed.
1. Select the table KNA1 and click **[OK]**. The application returns to the main window of the component.
1. Optional: Select the table columns you want to extract. By default all columns are extracted. For more information on filter options and advanced settings, see, [Define the Xtract Table Component](../documentation/table/#define-the-xtract-table-component)
1. Click **[Load live preview]** to display a live preview of the first 100 records.
1. Click **[OK]** to save the component.

You can now add tools to process the data returned by Xtract Table and run the SSIS package.
