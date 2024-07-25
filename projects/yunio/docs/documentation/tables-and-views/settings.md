---
title: Settings
description: An overview and description of all table settings
---

This page contains an overview and description of all available {{ table }} settings.

The {{ table }} settings consist of the following subsections:
- [Control Buttons](#control-buttons) to close, save or delete the service :number-1:.
- [Table or View](#table-or-view) displays the name and description of the selected SAP Table or View :number-2:.
- [Advanced Settings](#advanced-settings) define how the data is extract from SAP :number-3:.
- [Output Columns](#output-columns) define what columns to extract :number-4:.
- [WHERE Clause](#where-clause) and [WHERE Clause Editor](#where-clause) define what rows to extract :number-5:.
- [Joins](#joins) joins two or more tables and extracts the result of the join :number-6:.

![yunIO-table](../../assets/images/yunio/documentation/table-settings.png){:class="img-responsive"}


{% include "yunio/control-buttons.md" %}

### Table or View

The **Table or View** section displays the name and description of the selected table or view.<br>

| Icon | Description| 
|--------|--------|
| :where-clause-add: | Adds a table or view to the service. |
| :yunio-delete: | Removes a table or view from the service. |

### Advanced Settings

#### Function Name

{% include "components/settings/function-modules.md" %}

#### Row Limit

{% include "components/settings/row-limit.md" %}

#### Rows per package

{% include "components/settings/package-size.md" %}

#### Run in background

{% include "components/settings/run-in-background.md" %}

#### Refresh metadata
A new lookup is performed on the selected table(s). 
Existing mappings and field selections are kept, which is not the case when the table is added again.
Use this function to resolve data inconsistencies that can occur in the following situations:

- the structure of the source table has been changed in SAP
- another SAP source system has been connected
- the SAP source system has been updated

### Output Columns

You can select either all or only individual columns for extraction. <br>
Per default all columns are selected to be extracted. 
Deselect the columns you don’t want to extract.

### WHERE Clause
You can use a WHERE clause to filter table records, see [SAP ABAP Documentation: SELECT-WHERE](https://help.sap.com/doc/abapdocu_750_index_htm/7.50/en-us/abapwhere.htm).
Enter WHERE clauses manually in *Text mode* or use the [WHERE Clause Editor](where-clause.md/#where-clause-editor) in *Editor Mode*.<br>

### Joins
You can join two or more SAP tables and extract the result of the join, see [SAP Help: Inner Join and Outer Join](https://help.sap.com/doc/saphelp_nwpi71/7.1/en-US/cf/21ec77446011d189700000e8322d00/content.htm?no_cache=true). 
For information on how to join tables in {{ productName }}, see [Table Joins](table-join.md).

