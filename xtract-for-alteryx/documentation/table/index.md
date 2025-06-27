This page shows how to use the Xtract Table component.\
The Xtract Table component can be used to extract data from SAP Tables and Views.

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
To use the Xtract Table component, access to the designated authority objects (RFC) in SAP must be available. Adjust [SAP Authority Objects](../setup-in-sap/sap-authority-objects/#table) accordingly.

### Add an Xtract Table Component

Follow the steps below to add an Xtract Table component to your workflow:

1. Drag & drop the Xtract component to your Alteryx workflow .
1. Assign an existing SAP connection .
1. Click **[ Edit]** to open the main window of the component.

The majority of the functions of the component can be accessed in the main window.

### Look up an SAP Table

1. In the main window of the component, click **[Add]** to add a table. The window "Table Lookup" opens.
1. In the field **Table Name**, enter the name of the table to extract . Use wildcards (\*) if needed.
1. Click **[]** . Search results are displayed.
1. Select a table and click **[OK]**.

All relevant metadata information of the table is retrieved from SAP. The application returns to the main window of the component.

### Define the Xtract Table Component

The Xtract Table component offers the following options for table extractions:

1. Select the columns you want to extract. By default all columns are selected. Deselect the columns you do not want to extract.
1. Optional: Define a [WHERE clause](where-clause/) or a [HAVING clause](having-clause/) to filter table records. By default all data is extracted.
1. Optional: Join two or more tables and extract the result of the join. For more information, see [Table Joins](table-join/).
1. Click **[Load live preview]** to display a live preview of the first 100 records.
1. Check the [Extraction Settings](settings/) before running the workflow.
1. Click **[OK]** to save the component.
1. Optional: Check the column name style and date conversion options in the [tool configuration](tool-configuration/) of the component.

You can now run the workflow.

______________________________________________________________________

#### Related Links

- [Sample Workflows: Xtract Table](../../sample-workflows/#xtract-table)
- [Knowledge Base Articles: Xtract Table](../../knowledge-base/#xtract-table)
