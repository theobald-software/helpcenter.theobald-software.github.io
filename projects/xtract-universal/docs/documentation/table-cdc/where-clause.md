---
title: WHERE Clause
description: Defining a WHERE Clause to filter table records
---

A WHERE clause can be used to filter table records, see [SAP ABAP Documentation: SELECT-WHERE](https://help.sap.com/doc/abapdocu_750_index_htm/7.50/en-us/abapwhere.htm).
Enter WHERE clauses manually in *Text mode* or use the [WHERE Clause Editor](#where-clause-editor) in *Editor Mode*.<br>

{% include "components/table/where-clause.md" %}

## WHERE Clause Syntax

The WHERE Clause syntax generally uses the following structure:

``` bash
[Table~Column][Operator][Filter-Value]
```

Filter values in the WHERE clause must use the internal SAP representation:

| Examples | Correct | Wrong |
|--------|--------|--------|
| Date: YYYYMMDD | :white_check_mark: 19990101 | :x: 01.01.1999 |
| Year Period: YYYYPPP | :white_check_mark: 1999001 | :x: 001.1999 |
| Numbers with leading zeroes, e.g., customer numbers| :white_check_mark: 0000001000 | :x: 1000|

--8<-- "components/table/where-clause-syntax.md:syntax"


{% include "components/table/where-clause-editor.md" %}


**** 
#### Related Links
- [Knowledge Base Article: Working with Lists in the WHERE-Clause Editor](../../knowledge-base/where-clause-editor-lists.md)
- [Knowledge Base Article: LIKE Operand in WHERE Clauses](../../knowledge-base/like-operand-where-clause.md)