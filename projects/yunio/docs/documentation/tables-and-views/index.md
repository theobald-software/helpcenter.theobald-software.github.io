---
title: Integrating Tables / Views
description: Defining a Table/View Extraction
---

This section shows how to use the {{ table }} {{ component }}.

!!! warning 
	**Missing Authorization**<br>
    To use the Table component, access to the designated authority objects (RFC) in SAP must be available.
    For more information, see [SAP Authority Objects](../setup-in-sap/sap-authority-object.md/#table).


## Look Up an SAP Table or View

1. Create a new *Service* of type *SAP Table or View*. 
2. Click **[Save and edit]**. The *Search SAP Table or View* menu opens.
3. Enter the name of the Table or View to be extracted in the field **Search by name** (1) or search for a Table description. Use wildcards ( * ) if needed.
![SAP-Table-or-Views](../../assets/images/yunio/Search-table-view.png){:class="img-responsive" width="750px"}
4. Click **[Search]** (2) to display the search results.
5. Select a source file from the list of available search results (3). 
The extraction settings of *SAP Table and Views* open automatically.<br>


*****
#### Related Links
- [Integration Scenarios](./integration)
- [Knowledge Base Article: Integrating a yunIO Service with Power Automate](https://kb.theobald-software.com/yunio/integrating-a-yunio-service-with-power-automate)
