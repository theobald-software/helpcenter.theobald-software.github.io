This page shows how to use the Table extraction type.\
The Table extraction type can be used to extract data from SAP Tables and Views.

### Supported SAP Objects

- Transparent tables
- Views
- ABAP CDS Views (without parameters)
- HANA CDS Views
- Pool tables (joining not possible)
- Cluster tables (joining not possible)

### RFC_READ_TABLE Restrictions

Especially with older SAP releases you may encounter a few restrictions when using the SAP standard function module (RFC_READ_TABLE) for table extraction:

- The overall width of all columns to be extracted must not exceed 512 bytes.
- It is not possible to extract data from tables that contain one or more columns of the data type f (FLTP, floating point), DEC (decimal, e.g. for percentage) or x (RAW, LRAW).
- Poor extraction performance with larger tables. Can cause also duplicates.
- Depending on the SAP version there may be other restrictions.

When facing restrictions, install the Theobald Software custom function module [/THEO/READ_TABLE](../setup-in-sap/custom-function-module-for-table-extraction/#installation-of-theoread_table) on your SAP system.

Warning

**Converting issues**\
Error while converting value '\*.0' of row 1530, column 3.\
The SAP standard module *RFC_READ_TABLE* for table extraction can only extract the ABAP data type DEC to a limited extent. This leads to the mentioned example error during extraction. Use the function module */THEO/READ_TABLE*.

### Prerequisites

- A connection to an SAP system is available, see [SAP Connection](../sap-connection/).
- The SAP user has sufficient user rights, see [SAP Authority Objects](../setup-in-sap/sap-authority-objects/#table).

Warning

**Missing Authorization.**\
To use the Table extraction type, access to the designated authority objects (RFC) in SAP must be available. Adjust [SAP Authority Objects](../setup-in-sap/sap-authority-objects/#table) accordingly.

### Create a Table Extraction

1. In the main window of the Designer, click **[New]** to create a new extraction. The window "Create Extraction" opens.
1. Select an [SAP Connection](../sap-connection/) of type **RFC** from the drop-down menu **Source**.
1. Enter a unique name for your extraction.
1. Select the extraction type **Table**.
1. Click **[OK]**. The main window of the extraction type opens automatically.

The majority of the functions of the extraction type can be accessed in the main window.

### Look up an SAP Table

1. In the main window of the extraction type, click **[Add]** to add a table. The window "Table Lookup" opens.
1. In the field **Table Name**, enter the name of the table to extract . Use wildcards (\*) if needed.
1. Click **[]** . Search results are displayed.
1. Select a table and click **[OK]**.

All relevant metadata information of the table is retrieved from SAP. The application returns to the main window of the extraction type.

### Define the Table Extraction Type

The Table extraction type offers the following options for table extractions:

1. Select the columns you want to extract. By default all columns are selected. Deselect the columns you do not want to extract.
1. Optional: Define a [WHERE clause](where-clause/) or a [HAVING clause](having-clause/) to filter table records. By default all data is extracted.
1. Optional: Join two or more tables and extract the result of the join. For more information, see [Table Joins](table-join/).
1. Click **[Load live preview]** to display a live preview of the first 100 records.
1. Check the [Extraction Settings](settings/) and the [General Settings](general-settings/) before running the extraction.
1. Click **[OK]** to save the extraction type.

You can now run the extraction, see [Run Extractions](../run-extractions/).

______________________________________________________________________

#### Related Links

- [Knowledge Base Article: Delta Table Extraction](../../knowledge-base/delta-table-extraction/)
- [Knowledge Base Article: Read data from Cluster Fields in Tables PCL1 and PCL2 (Payroll)](../../knowledge-base/read-data-from-cluster-fields-in-the-tables-pcl1-and-pcl2-payroll/)
