---
title: Integrate Tables / Views
icon: component/table
description: Information about the integration type SAP tables or views
---

This page shows how to use the {{ table }} {{ component }}.<br>
The {{ table }} {{ component }} can be used to extract contents from SAP tables and views.

!!! warning  
	**Missing Authorization.**<br>
    To use the Table component, access to the designated authority objects (RFC) in SAP must be available.
    Adjust [SAP Authority Objects](../setup-in-sap/sap-authority-objects.md/#table) accordingly.

### Supported SAP Objects 
- Transparent tables
- Views
- ABAP CDS views
- Pool tables (joining not possible)
- Cluster tables (joining not possible)

### Restrictions 

When extracting tables from older SAP releases you may encounter restrictions when using the SAP standard function module (RFC_READ_TABLE). 
Possible restrictions include poor performance with large tables, limited width of columns, etc.

To avoid restrictions, install the Theobald Software custom function module /THEO/READ_TABLE on your SAP system, see [Custom Function Modules for Tables](../setup-in-sap/custom-function-module-for-table-extraction.md).
