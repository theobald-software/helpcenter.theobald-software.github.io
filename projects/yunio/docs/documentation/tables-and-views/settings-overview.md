---
title: Settings Overview
description: An overview and description of all table settings
---

The following section contains an overview and description of all available table settings.

The *SAP Table or View* settings consist of the following subsections:
- [Table or View](#table-or-view) displays the name and description of the selected SAP Table or View.
- [Advanced Settings](#advanced-settings) define how the data is extract from SAP.
- [Output Columns](#output-columns) define what columns to extract.
- [WHERE Clause](#where-clause) and [WHERE Clause Editor](#where-clause-editor) define what rows to extract.
- [Joins](#joins) joins two or more tables and extracts the result of the join.

![yunIO-table](../../assets/images/yunio/table-settings.png){:class="img-responsive"}

### Table or View

The **Table or View** section displays the name and description of the selected table or view.<br>

:where-clause-add: adds a table or view to the service.<br>
:yunio-delete: removes a table or view from the service. 

### Advanced Settings

#### Function Name
Specifies the name of the function module used for data extraction. This field is filled automatically depending on what function modules are installed on your SAP system.
Custom function modules are supported.

The following function modules can be used to extract tables:

- RFC_READ_TABLE (TAB512)
- /BODS/RFC_READ_TABLE (TAB2048)
- /SAPDS/RFC_READ_TABLE (TAB2048)
- /BODS/RFC_READ_TABLE2
- /SAPDS/RFC_READ_TABLE2
- Z_THEO_READ_TABLE
- THEO/READ_TABLE

!!! warning 
	**Duplicates in the target environment!**<br>
    The SAP standard modules for table extraction do not have pointers for table fields.
    In larger tables this may cause low performance and duplicates in the target environment.
    Use the function module [THEO/READ_TABLE](#installation-of-theoread_table) from Theobald Software to ensure smooth extractions.

Note the necessary [SAP Authority Objects](../setup-in-sap/sap-authority-object.md/#table):

```
S_TABU_NAM ACTVT=03; TABLE=ENLFDIR
```

#### Row Limit
Specifies the maximum number of extracted records. 0 extracts the entire table.

#### Rows per Package
The extracted data will be split into packages of the defined size. The default value is 50000 lines.<br>
A package size between 20000 and 50000 is advisable for large amounts of data. 0 means no packaging. 
Not using packaging can lead to an RFC timeout for large data extracts.

!!! warning 
	**RFC_ERROR_SYSTEM_FAILURE - No more storage space available for extending an internal table**<br>
    To avoid a memory overflow on the SAP source system and to avoid huge overheads, choose a package size that suits your memory capacity.

#### Run in background
If this checkbox is checked, the table extraction is executed as a background job in SAP. 
This setting is optional and is supported in combination with function module THEO/READ_TABLE or Z_THEO_READ_TABLE version 2.0. 
Activate the setting **Run in background** for long-running extractions with a large amounts of data that may run into a timeout error (“Time limit exceeded”), when using the foreground mode.

!!! tip
    The extraction jobs can be found in the SAP JobLog (**SM37**) under the JobName *theo_read_table*.

### Output Columns

You can select either all or only individual columns for extraction. <br>
Per default all columns are selected to be extracted. 
Deselect the columns you don’t want to extract.

### WHERE Clause
A WHERE clause can be used to filter table records, see [SAP ABAP Documentation: SELECT-WHERE](https://help.sap.com/doc/abapdocu_750_index_htm/7.50/en-us/abapwhere.htm).
Enter WHERE clauses manually in *Text mode* or use the [WHERE Clause Editor](#where-clause-editor) in *Editor Mode*.<br>

### Joins


*****
#### Related Links
- [Integration Scenarios](./integration)
- [Knowledge Base Article: Integrating a yunIO Service with Power Automate](https://kb.theobald-software.com/yunio/integrating-a-yunio-service-with-power-automate)
