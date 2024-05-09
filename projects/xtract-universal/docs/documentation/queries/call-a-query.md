---
title: Execute Queries
description: Example for calling a query
---

The following sample shows how to fetch data from an SAP Query using ERPConnect.

!!! tip
    If you don't know the technical name of a Query parameter, you can look it up in your SAP-System.
    Use the transaction **SQ01** or **SQ02** to search a Query. Open the description of the Query and scroll to the section *Selections*.
    All parameter properties including the name are listed.

### Call Queries

1. Connect to the SAP system using `R3Connection`.
2. Create a query object using `CreateQuery`. Each SAP query is defined by three descriptors: 
	- the user workspace (local or global)
	- the user group 
	- the name of the query
3. Define the parameters of the query. Every parameter has a distinctly technical name that can be looked up in the SAP. <br>
Example: To create a selection criteria, access the parameter's range collection via the indexer and add a new range using `Add`.
An individual range is defined by three descriptors:
	- a sign (include or exclude)
	- an operator (e.g. *equals* for parity) 
	- a low or high value (LowValue and HighValue or only LowValue when using parity).  
4. Execute the query using `Execute`. <br>
5. The query returns a table of the *DataTable* type. Access the result table using `Result` attribute.

{% include "erpconnect/code/call-a-query.md" %}

****

#### Related Links
- [Samples: Fetch Data from an SAP Query](../../samples/fetch-data-from-an-sap-query.md)