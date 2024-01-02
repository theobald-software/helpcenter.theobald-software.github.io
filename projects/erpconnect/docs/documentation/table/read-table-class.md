---
title: Read Tables
description: Reading SAP Tables Directly with ReadTable
---

The following sample shows how to use the *ReadTable* class to read data from an SAP table and how to process the ADO.NET result table object. 

### Read Data From Tables

Follow the steps below to read tables from SAP:

1. Connect to the SAP system using `R3Connection`.
2. Create a table object using `ReadTable()`.
3. Specify the name of the SAP table using `TableName`.
4. Specify the columns you want to read using `AddField()`.
5. Optional: Specify additional parameters, e.g., WHERE Clause (`WhereClause` or maximum number of rows `RowCount`).
6. Read the SAP table using `Run()`.
7. Access the table using the `Result` attribute.

{% include "erpconnect/read-table.md" %}


****
#### Related Links
- [Samples: Transfer data packets with ReadTable class](../../samples/transfer-data-packets-with-readtable-class.md)
- [Samples: Get meta data of a table](../../samples/get-meta-data-of-a-table.md)
- [Samples: Get CostCenter hierarchies](../../samples/get-costcenter-hierarchies.md)
