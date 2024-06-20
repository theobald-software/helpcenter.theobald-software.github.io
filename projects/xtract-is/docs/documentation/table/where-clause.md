---
title: WHERE Clause
description: Defining a WHERE Clause to filter table records
---

A WHERE clause can be used to filter table records, see [SAP ABAP Documentation: SELECT-WHERE](https://help.sap.com/doc/abapdocu_750_index_htm/7.50/en-us/abapwhere.htm).
Enter WHERE clauses manually in *Text mode* or use the [WHERE Clause Editor](#where-clause-editor) in *Editor Mode*.<br>

{% include "components/table/where-clause.md" %}

{% include "components/table/where-clause-syntax.md" %}

{% include "components/table/where-clause-editor.md" %}

### Dynamic WHERE Clause with SSIS Variables

You can use SSIS variables and parameters as placeholders for filter values in the WHERE Clause.
To parameterize the whole WHERE Clause, see [Parameterization using Expression Properties](parameterization.md#parameterization-using-expression-properties).

1. Define an SSIS variable / parameter. Make sure the data type of the variable matches the data type of the table records you want to filter.
2. Open the {{ table }} {{ component }} and navigate to the WHERE Clause tab.
3. Click **[Editor mode]** to open the WHERE Clause Editor.
4. Add a new filter criteria and use the **[Default with Parameter]** template.<br>
![SSIS-variable](../../assets/images/xis/documentation/table/ssis-variable.png)
5. Click inside the *Parameter* component. A drop-down-list that displays all available SSIS variables and parameters opens. Select your SSIS variable / parameter from the list.
6. To test the WHERE clause, assign a default value for the SSIS variable and click {{ previewBtn }}.

![SSIS-variables](../../assets/images/xis/documentation/table/ssis-variable.gif){:class="img-responsive" style="border:1px solid black;"}

**** 
#### Related Links
- [Knowledge Base Article: Delta Table Extraction](../../knowledge-base/delta-table-extraction.md)
- [Knowledge Base Article: Change Data Capture with CDHDR](../../knowledge-base/change-data-capture-with-cdhdr.md)
- [Knowledge Base Article: Working with Lists in the WHERE-Clause Editor](../../knowledge-base/where-clause-editor-lists.md)
- [Knowledge Base Article: LIKE Operand in WHERE Clauses](../../knowledge-base/like-operand-where-clause.md)