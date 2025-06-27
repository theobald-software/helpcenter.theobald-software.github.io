This section contains an overview and description of the *Tables and Fields* tab in the main window of the Xtract Table component.

### Tables

The subsection *Tables* lists all SAP Tables and Views that were added to the component.

- Click **[Add]** to add an SAP Table or View to the component.
- Click **[Remove]** to remove an SAP Table or View from the component.

Tip

Select an SAP Table to define the corresponding settings, e.g, output columns, WHERE clause, etc. You can switch between the SAP Tables.

### Fields

The subsection *Fields* displays all columns in the selected SAP Table or View.

The Xtract Table component imports and highlights the dedicated indexes of an SAP Table, such as primary key and/or sorting options.

Note

Use the indicated fields for filtering increases performance when applying WHERE-clause.

| Columns | Description | | --- | --- | | / | Defines whether or not a table column is added to the output of the component. By default, all table columns are extracted. | | **Name** | Name of a column in the SAP Table. The column name can be filtered. | | **Description** | Description of the column. The column description can be filtered. | | **Aggregate Function** | Applies [aggregate functions](#aggregate-functions) to numeric fields. | | **Conv.** | Activates SAP [conversion routines](#conversion-routines). |

#### Aggregate Functions

Aggregate functions are only available for numeric field data types, e.g., INT, FLOAT, DECIMAL. The following aggregation functions are available:

- *None*: No aggregation
- *MEAN*: Average
- *COUNT*: Number
- *MAX*: Maximum
- *MIN*: Minimum
- *SUM*: Total

#### Conversion Routines

Conversion routines are stored in the Data Dictionary that is used for the respective fields. Activating the conversion routines in SAP leads to significant performance decrease. After the conversion, the value is displayed as it appears in the transaction *SE16N* in the SAP GUI.

Examples:

- Language keys, e.g., `D` in the database becomes `DE` after conversion
- Project numbers, e.g., `T000012738GT` becomes `T/12738/GT` after conversion.

| State | Description | Safety | | --- | --- | --- | | | no conversion routines selected | - | | | conversion routines enabled requires the function module Z_XTRACT_IS_TABLE_COMPRESSION | no data type safety | | | conversion routines enabled requires the function module [/THEO/READ_TABLE](../../setup-in-sap/custom-function-module-for-table-extraction/) | assured data type safety |

### Preview

The subsection *Preview* displays a real-time preview of the first 100 fields of the SAP table when clicking the button **[Load live preview]**.

Note

The use non-indexed fields in the WHERE-clause can lead to timeouts during the preview of large tables.

### Buttons

**[Load live preview]**\
Allows a real-time preview of the extraction data without executing the extraction.\
You can also preview the data with aggregation functions.

**[Count rows]**\
Returns the number of rows/data records of an extraction, considering the WHERE and HAVING clauses stored.

**[Refresh metadata]**\
A new lookup is performed on the selected table(s). Existing mappings and field selections are retained, which is not the case when the table is added again.\
It can be necessary to refresh the metadata when a table has been adjusted in SAP, when another source system is assigned to the component, or when the source system was updated. In such cases, data inconsistencies can occur that are resolved by this function.
