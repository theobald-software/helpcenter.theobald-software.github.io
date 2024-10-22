
This section contains an overview and description of the *Tables and Fields* tab in the main window of the {{ table }} {{ component }}. 


### Tables

The subsection *Tables* lists all SAP Tables and Views that were added to the {{ component }}.

- Click **[:material-plus-thick:Add]** to add an SAP Table or View to the {{ component }}.
- Click **[:material-minus-thick:Remove]** to remove an SAP Table or View  from the {{ component }}. 

!!! tip
	Select an SAP Table to define the corresponding settings, e.g, output columns, WHERE clause, etc. You can switch between the SAP Tables.

![Tables](../../assets/images/documentation/components/table/{{ abbr }}/gui-tables.png){:class="img-responsive"}

### Fields

The subsection *Fields* displays all columns in the selected SAP Table or View.

![Fields](../../assets/images/documentation/components/table/{{ abbr }}/gui-fields.png){:class="img-responsive"}

The {{ table }} {{ component }} imports and highlights the dedicated indexes of an SAP Table, such as primary key and/or sorting options. 

!!! note
	Use the indicated fields for filtering increases performance when applying WHERE-clause.

| Columns | Description |
|-------------|-------------|
| :material-checkbox-blank-outline: / :material-checkbox-intermediate: | Defines whether or not a table column is added to the output of the {{ component }}. By default, all table columns are extracted. |
| **Name** | Name of a column in the SAP Table. The column name can be filtered. |
| **Description** | Description of the column. The column description can be filtered. |
| **Aggregate Function** | Applies [aggregate functions](#aggregate-functions) to numeric fields. |
| **Conv.** | Activates SAP [conversion routines](#conversion-routines).|

#### Aggregate Functions

Aggregate functions are only available for numeric field data types, e.g., INT, FLOAT, DECIMAL. 
The following aggregation functions are available: 
- *None*: No aggregation 
- *MEAN*: Average
- *COUNT*: Number 
- *MAX*: Maximum
- *MIN*: Minimum 
- *SUM*: Total

#### Conversion Routines

Conversion routines are stored in the Data Dictionary that is used for the respective fields. 
Activating the conversion routines in SAP leads to significant performance decrease. 
After the conversion, the value is displayed as it appears in the transaction *SE16N* in the SAP GUI. 

Examples: 
- Language keys, e.g., `D` in the database becomes `DE` after conversion
- Project numbers, e.g., `T000012738GT` becomes `T/12738/GT` after conversion.

![conversion-routines](../../assets/images/documentation/components/table/conversion-routines.png){:class="img-responsive"}

| State | 	Description	| Safety | 
|:--------------:|--------------|---------|
| :number-1: | no conversion routines selected | - |
| :number-2: | conversion routines enabled <br>requires the function module Z_XTRACT_IS_TABLE_COMPRESSION | no data type safety |
| :number-3: | conversion routines enabled <br>requires the function module [/THEO/READ_TABLE](../setup-in-sap/custom-function-module-for-table-extraction.md) | assured data type safety | 

### Preview

The subsection *Preview* displays a real-time preview of the first 100 fields of the SAP table when clicking the button {{ previewBtn }}.

!!! note
	The use non-indexed fields in the WHERE-clause can lead to timeouts during the preview of large tables.

![Preview](../../assets/images/documentation/components/table/{{ abbr }}/gui-preview.png){:class="img-responsive"}


### Buttons

{% if page.meta.product == "xtract-for-alteryx" %}
{{ settingsBtn }}<br>
Opens the [{{ Settings }}](settings.md) menu. 
 
{{ parameterBtn }}<br>
Opens the [{{ variables }}](edit-runtime-parameters.md) menu. 

{% endif %}

{{ previewBtn }} <br>
Allows a real-time preview of the extraction data without executing the extraction. <br>
You can also preview the data with aggregation functions. 
 
**[Count rows]** <br>
Returns the number of rows/data records of an extraction, considering the WHERE and HAVING clauses stored. 

**[Refresh metadata]**<br>
A new lookup is performed on the selected table(s). Existing mappings and field selections are retained, which is not the case when the table is added again. <br>
It can be necessary to refresh the metadata when a table has been adjusted in SAP, when another source system is assigned to the {{ component }}, or when the source system was updated. 
In such cases, data inconsistencies can occur that are resolved by this function.   

