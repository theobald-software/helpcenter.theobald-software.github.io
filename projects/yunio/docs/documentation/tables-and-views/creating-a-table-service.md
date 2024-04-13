---
title: Creating a Table Service
description: How to create a service to extract data from an SAP Table and View
---

This section shows how to create a service that extracts data from an SAP Table and View.

!!! warning 
	**Missing Authorization**<br>
    To use the Table component, access to the designated authority objects (RFC) in SAP must be available.
    For more information, see [SAP Authority Objects](../setup-in-sap/sap-authority-object.md/#table).


### Look Up an SAP Table or View

1. Create a new *Service* of type *SAP Table or View*. 
2. Click **[Save and edit]**. The *Search SAP Table or View* menu opens.
3. Enter the name of the Table or View to be extracted in the field **Search by name** (1) or search for a Table description. Use wildcards ( * ) if needed.
![SAP-Table-or-Views](../../assets/images/yunio/Search-table-view.png){:class="img-responsive" width="750px"}
4. Click **[Search]** (2) to display the search results.
5. Select a table / view from the list of available search results (3). 
The settings of the {{ table }} {{ component }} open automatically.<br>

### Settings

The following option are available to filter, ...

- Join two or more tables and extracts the result of the join. For more information, see [Joins](table-join.md).
- Select the [output columns](settings-overview.md/#output-columns) you want to extract. By default all columns are selected. Deselect the columns you do not want to extract.
- Define a [WHERE clause](where-clause.md) to filter table records. By default all data is extracted.
- Edit the [Advanced Settings](settings-overview.md/#advanced-settings) to define how the data is extract from SAP.

For more information on {{ table }} settings, see [Settings Overview](settings-overview.md).

*****
#### Related Links
- [Integration Scenarios](./integration)
- [Knowledge Base Article: Integrating a yunIO Service with Power Automate](https://kb.theobald-software.com/yunio/integrating-a-yunio-service-with-power-automate)
