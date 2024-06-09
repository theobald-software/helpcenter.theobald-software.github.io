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


{% include "components/tables/restrictions.md"  %}