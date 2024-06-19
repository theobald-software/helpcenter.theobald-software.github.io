
This section contains an overview and description of the *Tables and Fields* tab in the main window of the {{ table }} {{ component }}. 
The tab *Tables and Fields* consists of the following subsections:

{% if page.meta.product != "xtract-for-alteryx" %}
### Link Buttons

![Link Buttons](../../assets/images/{{ abbr }}/documentation/table/gui-link-buttons.png){:class="img-responsive"}

{% if page.meta.product != "xtract-is" %}

| Link Button | Description |
|-------------|-------------|
| {{ settingsBtn }} | Opens the [{{ Settings }}](settings.md) menu. {{ Settings }} affect only the respective {{ component }}. |
| {{ parameterBtn }} | Opens the [{{ variables }}](edit-runtime-parameters.md) menu. |
{% if page.meta.product == "xtract-universal" or page.meta.product == "board-connector" %}| **General Settings** | Opens the [General Settings](general-settings.md) menu. General Settings are the same for all {{ components }}. |  {% endif %}

{% else %} 

| Link Button | Description |
|-------------|-------------|
| {{ settingsBtn }} | Opens the [{{ Settings }}](settings.md) menu. {{ Settings }} affect only the respective {{ component }}. |
| **Xtract IS Info** | Opens the About menu that contains license information and links to useful resources. 

{% endif %}
{% endif %}

### Tables

The subsection *Tables* lists all SAP Tables and Views that were added to the {{ component }}.

- Click **[:material-plus-thick:Add]** to add an SAP Table or View to the {{ component }}.
- Click **[:material-minus-thick:Remove]** to remove an SAP Table or View  from the {{ component }}. 

!!! tip
	Select an SAP Table to define the corresponding settings, e.g, output columns, WHERE clause, etc. You can switch between the SAP Tables.

![Tables](../../assets/images/{{ abbr }}/documentation/table/gui-tables.png){:class="img-responsive"}

### Fields

The subsection *Fields* displays all columns in the selected SAP Table or View.

![Fields](../../assets/images/{{ abbr }}/documentation/table/gui-fields.png){:class="img-responsive"}

The {{ table }} {{ component }} imports and highlights the dedicated indexes of an SAP Table, such as primary key and/or sorting options. 

!!! note
	Use the indicated fields for filtering increases performance when applying WHERE-clause.

| Columns | Description |
|-------------|-------------|
| :material-checkbox-blank-outline: / :material-checkbox-intermediate: | Defines whether or not a table column is added to the output of the {{ component }}. By default, all table columns are extracted. |
| **Name** | Name of a column in the SAP Table. The column name can be filtered. |
| **Description** | Description of the column. The column description can be filtered. |
| **Aggregate Function** | Aggregate functions are only available for numeric field data types, e.g., INT, FLOAT, DECIMAL. <br>The following aggregation functions are available: <li> *None*: No aggregation </li><li> *MEAN*: Average</li><li> *COUNT*: Number </li><li> *MAX*: Maximum</li><li> *MIN*: Minimum </li><li> *SUM*: Total</li> |
| **Conv.** | Activate the conversion routines stored in the Data Dictionary that is used for the respective fields. Activating the conversion routines in SAP leads to significant performance decrease. After the conversion, the value is displayed as it appears in the transaction *SE16N* in the SAP GUI. Examples: <br><li>language keys, e.g., `D` in the database becomes `DE` after conversion</li><li>project numbers, e.g., `T000012738GT` becomes `T/12738/GT` after conversion.</li><br>:material-checkbox-blank-outline: no conversion routines selected <br><br>:material-checkbox-outline: conversion routines enabled, no data type safety (requires the function module Z_XTRACT_IS_TABLE_COMPRESSION)<br><br>:material-checkbox-intermediate: conversion routines enabled, assured data type safety (requires the function module [/THEO/READ_TABLE](../setup-in-sap/custom-function-module-for-table-extraction.md)) |

### Preview

The subsection *Preview* displays a real-time preview of the first 100 fields of the SAP table when clicking the button {{ previewBtn }}.

!!! note
	The use non-indexed fields in the WHERE-clause can lead to timeouts during the preview of large tables.

![Preview](../../assets/images/{{ abbr }}/documentation/table/gui-preview.png){:class="img-responsive"}


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

