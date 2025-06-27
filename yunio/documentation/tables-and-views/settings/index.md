This page contains an overview and description of all available *SAP Table and View* settings.

The *SAP Table and View* settings consist of the following subsections:

- [Control Buttons](#control-buttons) to close, save or delete the service .
- [Table or View](#table-or-view) displays the name and description of the selected SAP Table or View .
- [Advanced Settings](#advanced-settings) define how the data is extract from SAP .
- [Output Columns](#output-columns) define what columns to extract .
- [WHERE Clause](#where-clause) and [WHERE Clause Editor](#where-clause) define what rows to extract .
- [Joins](#joins) joins two or more tables and extracts the result of the join .

### Control Buttons

**[Delete]**\
Deletes the service.

**[Cancel]**\
Closes the service and dismisses any changes.

**[Run]**\
Opens the *Run Menu* to testrun the service directly in yunIO.

**[Save]**\
Saves changes in the service.

### Table or View

The **Table or View** section displays the name and description of the selected table or view.

| Icon | Description | | --- | --- | | | Adds a table or view to the service. | | | Removes a table or view from the service. |

### Advanced Settings

#### Function Name

Specifies the name of the function module used for data extraction. This field is filled automatically depending on what function modules are installed on your SAP system. Custom function modules are supported.

The following function modules can be used to extract tables:

- RFC_READ_TABLE (TAB512)
- /BODS/RFC_READ_TABLE (TAB2048)
- /SAPDS/RFC_READ_TABLE (TAB2048)
- /BODS/RFC_READ_TABLE2
- /SAPDS/RFC_READ_TABLE2
- Z_THEO_READ_TABLE
- [/THEO/READ_TABLE](/yunio/documentation/setup-in-sap/custom-function-module-for-table-extraction) (recommended)

Warning

**Duplicates in the target environment.**\
The SAP standard modules for table extraction do not have pointers for table fields. In larger tables this may cause low performance and duplicates in the target environment. Use the function module [THEO/READ_TABLE](../../setup-in-sap/custom-function-module-for-table-extraction/#installation-of-theoread_table) from Theobald Software to ensure smooth extractions.

Note the necessary [SAP Authority Objects](../../setup-in-sap/sap-authority-objects/#table):

```text
S_TABU_NAM ACTVT=03; TABLE=ENLFDIR

```

#### Row Limit

Specifies the maximum number of extracted records. 0 extracts all data. You can use this option to perform tests with a small amount of data by entering a row limit of e.g., 1000.

#### Rows per package

The extracted data is split into packages of the defined size. The default value is 50000 lines.\
A package size between 20000 and 50000 is advisable for large amounts of data. 0 means no packaging. Not using packaging can lead to an RFC timeout for large data extractions.

Warning

**RFC_ERROR_SYSTEM_FAILURE - No more storage space available for extending an internal table**\
To avoid a memory overflow on the SAP source system and to avoid huge overheads, choose a package size that suits your memory capacity.

#### Run in background

If *Background job timeout (seconds)* checkbox is activated, the table extraction is executed as a background job in SAP. This setting is optional and is supported in combination with function module THEO/READ_TABLE or Z_THEO_READ_TABLE version 2.0. Activate the setting *Background job timeout (seconds)* for long-running extractions with a large amounts of data that may run into a timeout error (“Time limit exceeded”), when using the foreground mode.

Tip

The extraction jobs can be found in the SAP JobLog (**SM37**) under the JobName *theo_read_table*.

Warning

**Shared Memory ran out of memory!**\
If this error message pops up when running an extraction in the background, adjust the size of the Shared Memory. SAP recommends a Shared Memory size of 800MB~1.5GB for a production/test system or 2GB~4GB for S/4 systems, see [SAP Support: How to solve SYSTEM_NO_SHM_MEMORY runtime error](https://ga.support.sap.com/dtp/viewer/#/tree/1080/actions/12107).

#### Refresh metadata

A new lookup is performed on the selected table(s). Existing mappings and field selections are kept, which is not the case when the table is added again. Use this function to resolve data inconsistencies that can occur in the following situations:

- the structure of the source table has been changed in SAP
- another SAP source system has been connected
- the SAP source system has been updated

### Output Columns

You can select either all or only individual columns for extraction.\
Per default all columns are selected to be extracted. Deselect the columns you don’t want to extract.

### WHERE Clause

You can use a WHERE clause to filter table records, see [SAP ABAP Documentation: SELECT-WHERE](https://help.sap.com/doc/abapdocu_750_index_htm/7.50/en-us/abapwhere.htm). Enter WHERE clauses manually in *Text mode* or use the [WHERE Clause Editor](../where-clause/#where-clause-editor) in *Editor Mode*.

### Joins

You can join two or more SAP tables and extract the result of the join, see [SAP Help: Inner Join and Outer Join](https://help.sap.com/doc/saphelp_nwpi71/7.1/en-US/cf/21ec77446011d189700000e8322d00/content.htm?no_cache=true). For information on how to join tables in yunIO, see [Table Joins](../table-join/).
