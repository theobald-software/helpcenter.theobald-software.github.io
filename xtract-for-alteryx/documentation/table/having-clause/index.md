The HAVING clause can be used to filter groups of rows, see [SAP ABAP Documentation: SELECT-HAVING](https://help.sap.com/doc/abapdocu_750_index_htm/7.50/en-US/abaphaving_clause.htm).

### Create a HAVING Clause

The following example shows how many materials are assigned to a material type (MTART). After applying the HAVING Clause, the preview shows only the material types with more than 10 materials assigned.

1. Select an aggregate function for a field you want to use in the HAVING-clause.

   Note

   Aggregate functions are only supported for numeric field types, which is why the field BRGEW (Gross Weight) is used in the example.

1. Navigate to tab *HAVING Clause* .

1. Enter a HAVING Clause using the [syntax](#having-clause-syntax) in accordance to your SAP Release, e.g., `COUNT(BRGEW) > 10`.

1. Click **[Load live preview]** to display the results in the *Preview* section.

Note

When fields with the same name exist in different tables, the field names must be formatted as [Table]~[Column], e.g., MAKT~MATNR. This can be the case with [table joins](../table-join/).

### HAVING Clause Syntax

With regard to syntax and formulas, the same rules apply as for the [WHERE Clause](../where-clause/#where-clause-syntax). Depending on your SAP release the syntax may varry, see [SAP Help - ABAP SQL - SQL Expressions sql_exp](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_strictmode_754.htm) .
