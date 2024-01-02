---
title: Call BW Queries
description: Call BW Queries
---

The following sample shows how to fetch data from a BW Query using ERPConnect.<br>
To allow external access to a BW Query the checkbox **Allow external access** has to be set to active in the preferences for the query.

### Call BW Queries

1. Connect to the SAP system using `R3Connection`.
2. Create a BWCube object using `CreateCube`. Its name is made up of the cube name and query name.
The cube object offers a collection for all contained dimensions (Dimensions) and key figures (Measures). 
3. Set the attribute `SelectForFlatMDX` of a cube component to *true* to add it to the query output. <br>
4. To pass values, address the variables via the variables collection. There are range tables behind each variable.
5. Execute the BW query using `Execute`. The output is a table of the *DataTable* type. 

!!! note
    The denomination of the key figures via the query generation in the designer does not conform to the original
    technical name. That means key figures are addressed by the ordinal number, not the name.

{% include "erpconnect/code/call-a-bw-query.md" %}


****
#### Related Links
- [Execute BW Queries](../../samples/execute-bw-queries.md)
