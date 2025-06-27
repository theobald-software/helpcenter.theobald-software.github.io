This page shows how to use the Table CDC extraction type.\
The Table CDC extraction type can be used to map data from SAP Tables to various target environments. Unlike a full data load, where all records in a table are transferred from the source to the target environment, Table CDC captures only the data changes since the last load.

Note

Table CDC is an Add-On that requires a separate license. For more information, contact Theobald Software's sales team at [sales@theobald-software.com](mailto:sales@theobald-software.com).

### About Table CDC

Change Data Capture (CDC) is a method to keep track of data changes such as insert, update and delete in SAP tables. The Table CDC component creates a log table in SAP that records any changes made to a selected table. The content of the log table is cleared after every successful run of the extraction. Data that was not extracted is not cleared from the log table.

For a detailed overview of this process, refer to the Knowledge Base article [Delta Mechanism of TableCDC](../../knowledge-base/table-cdc-mechanism/).

Note

Clusters, pool tables and views are not supported by the Table CDC extraction type.

### System Requirements

- The Table CDC extraction type is compatible with SAP ECC 5.0 and higher
- Supported databases:
  - HANA
  - SQL Server
  - Oracle
  - IBM Db2
  - IBM for i (Db4)
  - IBM for z/os (Db6)
  - MaxDB

### Prerequisites

- SAP custom function module [/THEO/CDC_ECC or /THEO/CDC_S4](../setup-in-sap/custom-function-module-for-tablecdc/) is installed in SAP.
- SAP custom function module [/THEO/READ_TABLE](../setup-in-sap/custom-function-module-for-table-extraction/) is installed in SAP.
- A connection to an SAP system is available, see [SAP Connection](../sap-connection/).
- The SAP user has sufficient user rights, see [SAP Authority Objects](../setup-in-sap/sap-authority-objects/#table-cdc).

The SAP transport requests for the function modules are provided in the installation directory: `C:\Program Files\BOARDConnector\ABAP\`, see [Custom function module for TableCDC](../setup-in-sap/custom-function-module-for-tablecdc/).

Warning

**Missing Authorization.**\
To use the Table CDC extraction type, access to the designated authority objects (RFC) in SAP must be available. Adjust [SAP Authority Objects](../setup-in-sap/sap-authority-objects/#table) accordingly.

### Create a Table CDC Extraction

1. In the main window of the Designer, click **[New]** to create a new extraction. The window "Create Extraction" opens.
1. Select an [SAP Connection](../sap-connection/) of type **RFC** from the drop-down menu **Source**.
1. Enter a unique name for your extraction.
1. Select the extraction type **Table CDC**.
1. Click **[OK]**. The main window of the extraction type opens automatically.

The majority of the functions of the extraction type can be accessed in the main window.

### Look Up a Table

1. In the main window of the extraction type, click **[]**. The window “Table Lookup” opens.
1. In the field **Table Name**, enter the name of the table to track and extract . Use wildcards (\*) if needed.
1. Click **[]** . Search results are displayed.
1. Select a table and click **[OK]**.

All relevant metadata information of the table is retrieved from SAP. The application returns to the main window of the extraction type.

### Define the Table CDC Extraction Type

The Table CDC extraction type offers the following options for tracking SAP tables:

1. Select the table columns you want to track and extract. By default all columns are selected. Deselect the columns you do not want to extract.

1. If you want to extract the table when first running the extraction, activate **[Extract table on first run]**.

1. Optional: You can set a maximum number of rows that the log table can contain. The default is disabled (Value 0). If the row limit is reached, the extraction fails with an exception. The maximum row limit of a log table is 500.000.

   Note

   Once a log table is initialized, you cannot change the size limit anymore.

1. Optional: Define a [WHERE Clause](where-clause/) to filter table records. By default all data is extracted.

1. Click **[Load live preview]** to display a live preview of the first 1000 records.

   - The column *TS_TIMESTAMP* contains a timestamp of when the data was last changed.
   - The column *TS_OPERATION* indicates if a row was inserted (I), updated (U) or deleted (D).

1. Check the [Extraction Settings](settings/) and the [General Settings](general-settings/) before running the extraction.

1. Click **[OK]** to confirm your settings.

To initialize the tracking of the selected SAP table, run the extraction once.

### Run the Extraction for the First Time

Run the extraction for the first time to create a log table in SAP that records any changes made to a selected table or view.

1. Select the extraction in the main window of the Designer.
1. Click **[Run]**. The window “Run Extraction” opens.
1. Click **[Run in Browser]** to run the extraction.

The log table in SAP is now available for the Table CDC component. The extracted SAP table is now available in your destination.

Note

When running the extraction regularly the content of the log table in SAP is extracted and written to the destination. The content of the log table in SAP is cleared after every successful run of the extraction. Data that was not extracted is not cleared.

### Delete Log Table and Triggers

When a Table CDC extraction is no longer in use or if you need to change the structure of the source table, simply deleting the extraction is not enough. To delete the log table and all associated triggers from your SAP system, open the Table CDC extraction and click **[Delete CDC resources]**.

To delete the SAP resources of multiple extractions or extractions that are already deleted, see [Active CDC Watches](active-cdc-watches/).

Warning

**Table change not possible**\
The source table cannot be changed, if any CDC-related resources connected to the source table in SAP exist.\
Clear the CDC-related resources connected to the source table in SAP, see [SAP Note 2284776](https://launchpad.support.sap.com/#/notes/2284776).
