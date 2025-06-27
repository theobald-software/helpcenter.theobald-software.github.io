This page shows how to use the *SAP Table and View* integration type.\
The *SAP Table and View* integration type can be used to extract data from SAP Tables and Views.

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
To use the {{ componentName }} integration type, access to the designated authority objects (RFC) in SAP must be available. Adjust [SAP Authority Objects](../setup-in-sap/sap-authority-objects/#table) accordingly.

### Look Up an SAP Table or View

1. [Create a new service](../../getting-started/#create-a-service) of integration type *SAP Table and View*.
1. In the *Search SAP Table or View* menu, enter the name or description of the Table or View to be extracted . Use wildcards ( * ) if needed.
1. Click **[Search]** to display the search results.
1. Select a table / view from the list of available search results .

The settings of the *SAP Table and View* integration type open.

### Define the *SAP Table and View* Service

The following options are available to filter data, add data from other tables, etc:

1. Select the [output columns](settings/#output-columns) you want to extract. By default all columns are selected. Deselect the columns you do not want to extract.
1. Optional: Join two or more tables and extract the result of the join. For more information, see [Table Joins](table-join/).
1. Optional: Define a [WHERE clause](where-clause/) to filter table records. By default all data is extracted.
1. Optional: Edit the [Advanced Settings](settings/#advanced-settings) to define how the data is extracted from SAP.
1. Click **[Run]** to check the results, see [Running Services in yunIO](../run-services/#run-services-in-yunio).

For more information on *SAP Table and View* settings, see [Settings](settings/).
