---
title: Read SAP Tables Directly
description: Reading SAP Tables Directly
---

<!---
move to: https://help.theobald-software.com/en/erpconnect/special-classes/reading-sap-tables-directly-with-readtable
-->

The following sample shows how to use the *ReadTable* class to select data from the SAP table *MAKT* and how to process the ADO.NET result table object. 

### About

This sample reads the material description texts of the SAP table *MAKT*. 

- Read the columns *MATNR* (material number) and *MAKTX* (material text).
- Add a corresponding WHERE statement `SPRAS='EN'` to make sure only the English language texts are read (SPRAS is the column that contains the language keys).

### Read Table

{% include "erpconnect/read-table.md" %}

