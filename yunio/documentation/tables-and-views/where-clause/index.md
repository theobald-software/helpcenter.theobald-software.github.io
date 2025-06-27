A WHERE clause can be used to filter table records, see [SAP ABAP Documentation: SELECT-WHERE](https://help.sap.com/doc/abapdocu_750_index_htm/7.50/en-us/abapwhere.htm). Enter WHERE clauses manually in *Text mode* or use the [WHERE Clause Editor](#where-clause-editor) in *Editor Mode*.

## WHERE Clause Text Mode

The WHERE clause text mode allows you to directly enter a WHERE clauses. Use the toggle to switch between *Text mode* and *Editor mode*.

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

## WHERE Clause Editor

The WHERE clause editor offers a toolkit for those who are not familiar with the syntax of the WHERE clause. Use the toggle to switch between *Text mode* and *Editor mode*.

There are 2 options for adding criteria to the WHERE clause:

- **[Add Criteria]** adds single criteria.

  - The default structure for a single criteria with static values is `[Table~Column][Operator][Filer-Value]` e.g., *MARC~WERKS = 1000*.

- **[Add Criteria Group]** adds a group of criteria.

  - The default structure for a criteria group is `([Table~Column1][Operator1][Filter-Value1][Boolean][Table~Column2][Operator2][Filter-Value2])` e.g., *(MARC~PSTAT = 'L' OR MARC~PSTAT = 'LB')*.

Tip

Combine multiple criteria and criteria groups to create complex filters e.g., *MARC~WERKS = 1000 AND (MARC~PSTAT = 'L' OR MARC~PSTAT = 'LB')* extracts only data where the column WERKS equals 1000 and the column PSTAT equals either 'L' or 'LB'.

### Components of the WHERE Clause Editor

The following buttons and options are available in the WHERE Clause Editor:

| Icon | Component | Function | | --- | --- | --- | | | Delete row | deletes a criteria. | | | Move row up | changes the sequence of the criteria. The selected criteria moves up. The sequence of criteria can also be changed with Drag and drop. | | | Move row down | changes the sequence of the criteria. The selected criteria moves down. The sequence of criteria can also be changed with Drag and drop. | | | Column | adds a column. Click on the component to select a column from the available tables. | | | SQL | adds an Open SQL statement, see [SAP Help: Open SQL](https://help.sap.com/doc/abapdocu_750_index_htm/7.50/en-us/abenopensql.htm). | | | Operator | adds an operator e.g., =, \<, >, etc. | | | Value | adds a static value of type *String*, *Number*, *Flag* or *List*. *List* offers a separate editor to create lists of type *String*, *Number* or *Select*. *Select* enables usage of SELECT statements. | | | Criteria | adds a new criteria after the selected criteria. | | | Group | adds a new group of criteria the selected criteria. |

Note

When adding or editing a criteria only the relevant components are displayed e.g., **Add Operator** is only available if there is a column or SQL statement to use an operator on.

#### Edit and Delete Components

- Click on a component to edit it. All areas that are marked green can be edited.
- To delete a component, click the icon that appears when hovering over the component.

### SAP System Fields

You can use [SAP system fields for date and time](https://help.sap.com/doc/abapdocu_751_index_htm/7.51/en-US/abentime_system_fields.htm) in a WHERE clause. The usage of SAP system fields requires SAP NW 7.4 SP5 or higher and the custom function module [/THEO/READ_TABLE](../../setup-in-sap/custom-function-module-for-table-extraction/#installation-of-theoread_table).

Example:

1. Navigate to [WHERE Clause Editor](#where-clause-editor) and select a column of the type Date *here: BUDAT* .
1. Delete the criterion "Value" and use the criterion "SQL" .
1. Within the "SQL" criterion, use the supported system fields for date and time with a preceding "@" character, *here: @sy-datum* .
1. Click **[Run]** to check the result.

## Parameterize the WHERE Clause

The WHERE clause can be parameterized directly in the [service URL](../../parameters/#add-parameters-in-the-service-url) or in the request body of the service.

For more information on parameterizing services, see [Passing Parameters](../../run-services/#pass-parameters).

Note

An existing WHERE clause is overridden when a WHERE clause is entered in the designated text field or if a WHERE clause is entered in the body of the service definition when running a service.
