This section shows how to install and set up Board Connector for the first time.

### Installation

Follow the steps below to install Board Connector for the first time:

1. [Download](https://theobald-software.com/en/download-trial/) a 30 day trial version of Board Connector.
1. Run the Board Connector executable (BOARDConnectorSetup.exe) to install the [Board Connector Designer and the Board Connector Server](../documentation/introduction/#software-architecture). For information on system requirements, see [Requirements](../documentation/setup/requirements/).
1. Make sure that the Board Connector Service is running on your windows system and that the default port 8097 is not blocked by your firewall.
1. Open the Board Connector Designer application and click **[ Connect]** to [connect to the Board Connector Server](../documentation/designer/#connect-the-designer-to-a-server) using the default settings.

For more information, see [Setup](../documentation/setup/).

### Connect to SAP

There are two types of SAP connections:

- connect via [RFC protocol](../documentation/sap-connection/settings/#source-type-rfc) (default)
- connect via [OData protocol](../documentation/sap-connection/settings/#source-type-odata)

Follow the steps below to connect to SAP using the standard RFC protocol.

1. Before connecting to SAP via RFC for the first time, set up an SAP dialog user with the necessary [SAP user rights](../documentation/setup-in-sap/sap-authority-objects/#general-authorization-objects).
1. In the main window of the Designer, click **[New]**. The window "Change Source" opens.
1. Enter a name for the SAP connection in the field **Name**, e.g., *s4hana*, *bw*, etc.
1. In the *General* tab, enter the system details of your SAP system. Input values for the SAP connection can be found in the *Properties* of the SAP Logon Pad or they can be requested from the SAP Basis team.
1. In the *Authentication* tab, enter the SAP credentials of the SAP dialog user.
1. Click **[Test designer connection]** to validate the connection between the Board Connector Designer and the SAP system.
1. Click **[Test server connection]** to validate the connection between the Board Connector Server and the SAP system.
1. Click **[OK]** to save the SAP source.

For more information, see [SAP Connection](../documentation/sap-connection/).

Tip

To edit a source or to create new sources, navigate to **Server > Manage Sources** in the menu bar.

### Create an Extraction

Extractions are the main entities of Board Connector. They define what data to extract from SAP and where to write the data. Follow the steps below to create a new extraction:

1. In the main window of the Designer, click **[New]**. The window "Create Extraction" opens.

1. Select an SAP Connection from the drop-down menu in **Source** .

1. Enter a name for the extraction .

1. Select one of the following extraction types :

   | Extraction Type | Connection Type | Description | | --- | --- | --- | | [BAPI](../documentation/bapi/) | RFC | Execute BAPIs and Function Modules. | | [BWCube](../documentation/bwcube/) | RFC | Extract data from SAP BW InfoCubes and BEx Queries. | | [BW Hierarchy](../documentation/hierarchy/) | RFC | Extract Hierarchies from an SAP BW / BI system. | | [DeltaQ](../documentation/deltaq/) | RFC | Extract data from DataSources (OLTP) and extractors from ERP and ECC systems. | | [OData](../documentation/odata/) | OData | Extract data via SAP OData services. | | [ODP(OData)](../documentation/odp-odata/) | OData | Extract ODP-based data using OData services. | | [ODP](../documentation/odp/) | RFC | Extract data via the SAP Operational Data Provisioning (ODP) framework. | | [OHS](../documentation/ohs/) | RFC | Extract data from InfoSpokes and OHS destinations. | | [Query](../documentation/query/) | RFC | Extract data from ERP queries. **Note: BEx queries are covered by BWCube**. | | [Report](../documentation/report/) | RFC | Extract data from SAP ABAP reports. | | [Table](../documentation/table/) | RFC | Extract data from SAP tables and views. | | [Table CDC](../documentation/table-cdc/) | RFC | Extract delta data from SAP tables and views. |

1. Click **[OK]**. The main window of the extraction type opens automatically.\
   Follow the instructions in the documentation of the selected extraction type to set up the extraction.

#### A Simple Extraction for Beginners

Follow the steps below to extract customer master data from the SAP table KNA1:

1. [Create an extraction](#create-an-extraction) that uses the Table extraction type.
1. In the main window of the extraction type, click **[Add]** to look up an SAP table. The window "Table Lookup" opens.
1. In the field **Table Name**, enter the name of the table to extract (KNA1) . Use wildcards (\*) if needed.
1. Click **[]** . Search results are displayed.
1. Select the table KNA1 and click **[OK]**. The application returns to the main window of the extraction type.
1. Optional: Select the table columns to extract. By default all columns are extracted. For more information on filter options and advanced settings, see [Define the Table Extraction Type](../documentation/table/#define-the-table-extraction-type)
1. Click **[Load live preview]** to display a live preview of the first 100 records.
1. Click **[OK]** to save the extraction type.

The extraction is now listed in the main window of the Designer. To edit an extraction, double-click the extraction.

### Run an Extraction

Extractions can be run directly in the Board Connector Designer or from Board, see [Run Extractions in Board](../documentation/run-extractions/#run-extractions-in-the-designer). Follow the steps below to testrun your extraction in the Designer:

1. In the main window of the Designer, select an extraction and click **[Run]** . The window "Run Extraction" opens.
1. Click **[Run in Browser]** to execute the extraction. If the extraction runs successfully, the extracted data is displayed in your browser.

For more information, see [Run Extractions](../documentation/run-extractions/).
