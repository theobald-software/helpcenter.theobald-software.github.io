A WHERE clause can be used to filter table records, see [SAP ABAP Documentation: SELECT-WHERE](https://help.sap.com/doc/abapdocu_750_index_htm/7.50/en-us/abapwhere.htm).

### WHERE Clause Syntax

The WHERE Clause syntax generally uses the following structure:

```bash
[Table]~[Column][Space][Operator][Space][Filter-Value]

```

**Example:**

```text
KNA1~LAND1 = 'US'

```

The following rules apply to filter values:

| Rule | Correct | Wrong | | --- | --- | --- | | Enter a space before and after the equal sign | *YEAR = '1999'* | *YEAR= '1999 '*, *YEAR ='1999'* or *YEAR='1999'* | | Set floating point numbers in single quotation mark | *KMENG > '10.3'* | *KMENG > 10.3* | | Values must use the internal SAP representation: Date: YYYYMMDD Year Period: YYYYPPP Numbers with leading zeroes, e.g., customer numbers | 19990101 1999001 0000001000 | 01.01.1999 001.1999 1000 |

The following operations are supported in the WHERE clause:

| Operator | Description | | --- | --- | | =, EQ | True if the content of operand1 is equal to the content of operand2. | | \<>, NE | True if the content of operand1 is not equal to the content of operand2. | | \<, LT | True if the content of operand1 is less than the content of operand2. | | >, GT | True if the content of operand1 is greater than the content of operand2. | | \<=, LE | True if the content of operand1 is less than or equal to the content of operand2. | | >=, GE | True if the content of operand1 is greater than or equal to the content of operand2. | | (NOT) LIKE | True if the value of operand1 matches (does not match) the pattern in operand2. | | (NOT) IN | True if the content of operand1 is (not) part of the content of operand2. Operand2 must be of type LIST or SQL. |

For more details on the OpenSQL syntax, see [SAP Help: Select WHERE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwhere.htm?file=abapwhere.htm)

Tip

To increase extracting performance, make sure to place the indexed fields as the first selection filter operation in the WHERE clause.

Note

When fields with the same name exist in different tables, the field names must be formatted as [table name]~[field name], e.g., MARC~MATNR. This can be the case when extracting multiple tables.

### Subqueries

Note

The usage of subqueries is only possible as of SAP Release 7.40, SP05.

A subquery is an SQL query nested inside a larger query. Subqueries are nested queries that provide data to the enclosing query. Subqueries need be enclosed with parenthesis and can return individual values or a list of records. Get more details about subqueries on the [SAP Help: Conditions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenwhere_logexp_in_subquery.htm).

**Example:**

In the following example a subquery is used with the *IN* operator. The following statement returns all the *active* customers (rows in the table KNA1) that have i.e. a sales document in the table VBAK for sales document header data.

```text
KUNNR IN ( SELECT KUNNR FROM VBAK )

```
