

### Look up an SAP Table
1. In the main window of the {{ component }}, click **[:material-plus-thick:Add]** to add a table. The window "Table Lookup" opens.<br>
![table_main-window_add](../../assets/images/documentation/components/table/{{ abbr }}/table_main-window_add.png){:class="img-responsive"}
2. In the field **Table Name**, enter the name of the table to extract :number-1:. Use wildcards (*) if needed.<br>
![Look-Up-Table](../../assets/images/documentation/components/table/table_look-up.png){:class="img-responsive"}
3. Click **[:magnifying-glass:]** :number-2:. Search results are displayed.
4. Select a table :number-3: and click **[OK]**. <br>

All relevant metadata information of the table is retrieved from SAP.
The application returns to the main window of the {{ component }}.

### Define the {{ table }} {{ Component }}

The {{ table }} {{ component }} offers the following options for table extractions:

1. Select the columns you want to extract. By default all columns are selected. Deselect the columns you do not want to extract.<br>
![Table-Form](../../assets/images/documentation/components/table/{{ abbr }}/table_fields_filter.png){:class="img-responsive"}
2. Optional: Define a [WHERE clause](where-clause.md) or a [HAVING clause](having-clause.md) to filter table records. By default all data is extracted.
3. Optional: Join two or more tables and extract the result of the join. For more information, see [Table Joins](table-join.md).
4. Click {{ previewBtn }} to display a live preview of the first 100 records. 
5. Check the [{{ Settings }}](settings.md){% if page.meta.product == "xtract-universal" or page.meta.product == "board-connector"%} and the [General Settings](general-settings.md){% endif %} before running the {{ extraction }}.
6. Click **[OK]** to save the {{ component }}.
{% if page.meta.product == "xtract-for-alteryx" %}7. Optional: Check the column name style and date conversion options in the [tool configuration](tool-configuration.md) of the {{ component }}. {% endif %}

You can now run the {{ extraction }}{% if page.meta.product == "xtract-universal" %}, see [Execute and Automate Extractions](../execute-and-automate/index.md){% elif page.meta.product == "board-connector" %}, see [Run Extractions](../run-extractions.md){% endif %}.
