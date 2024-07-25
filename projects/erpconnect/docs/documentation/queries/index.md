---
title: Queries
description: SAP Queries
---

The following section describes how to control and extract SAP Queries with ERPConnect.

!!! note
    SAP Queries refer to queries that can be created by the SAP transactions **SQ02** and **SQ01**.
    If you want to use a BW Query as a data source, see [BW Cube/Queries](../bw-cubes-and-bw-queries/index.md).

### About SAP Queries
SAP Queries are used to access data sets, see [SAP Help - Working with Queries](https://help.sap.com/viewer/b1c834a22d05483b8a75710743b5ff26/7.51.6/en-US/0e05493bbccf41a79caed7099c82bd48.html) for more information.

The input of a Query is defined by the *SelectParameters* collection. 
Every input parameter can contain an arbitrary number of values. 
The values are represented by ranges.
In addition, a query object contains a *Fields* collection that in turn contains the output fields.

The figure below shows the object hierarchy that is provided by the Queries classes in ERPConnect.<br>
![SAP Query Object Model](site:assets/images/erpconnect/documentation/SAP-Query-Object-Model.png){:class="img-responsive" width="450"}

****
More information on working with the ERPConnect Queries classes is provided in the following sections:

 
