---
title: Creating a Table Service
description: How to create a service to extract data from an SAP Table and View
---

This section shows how to create a service that extracts data from an SAP Table and View.

### Look Up an SAP Table or View

1. [Create a new service](../../getting-started.md/#connect-to-sap) of {{ component }} {{ table }}. 
2. In the *Search SAP Table or View* menu, enter the name or description of the Table or View to be extracted :number-1:. Use wildcards ( * ) if needed.
![SAP-Table-or-Views](../../assets/images/yunio/search-table-view.png){:class="img-responsive" width="750px"}
3. Click **[Search]** to display the search results.
4. Select a table / view from the list of available search results :number-2:. 

The settings of the {{ table }} {{ component }} open.

### Next Steps

The following options are available to filter data, add data from other tables, etc:

- Join two or more tables and extract the result of the join. For more information, see [Table Joins](table-join.md).
- Select the [output columns](settings-overview.md/#output-columns) you want to extract. By default all columns are selected. Deselect the columns you do not want to extract.
- Define a [WHERE clause](where-clause.md) to filter table records. By default all data is extracted.
- Edit the [Advanced Settings](settings-overview.md/#advanced-settings) to define how the data is extracted from SAP.

For more information on {{ table }} settings, see [Settings](settings.md).

!!! tip
	Click **[Run]** to check the results, see [Running Services in yunIO](../run-services.md/#running-services-in-yunio).

