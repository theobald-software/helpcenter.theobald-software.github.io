

### Look up an SAP Table
1. In the main window of the component click **[Add]** to add a table. The window "Table Lookup" opens.<br>
![table_main-window_add](../../assets/images/{{ abbr }}/documentation/table/table_main-window_add.png){:class="img-responsive"}
2. In the window "Table Lookup" enter the name of the table to extract :number-1:. Use wildcards (*) if needed.<br>
![Look-Up-Table](../../assets/images/documentation/components/table/table_look-up.png){:class="img-responsive"}
3. Click **[:magnifying-glass:]** :number-2:. Search results are displayed.
4. Select a table :number-3: and click **[OK]**. <br>

All relevant metadata information of the table is retrieved from SAP.
The application now returns to the main window of the component.

### Define the {{ table }} {{ Component }}

The Table {{ component }} offers the following options for table extractions:

1. Select the columns you want to extract. By default all columns are selected. Deselect the columns you do not want to extract.<br>
![Table-Form](../../assets/images/documentation/components/table/table_fields_filter2.png){:class="img-responsive"}
2. Define a [WHERE clause](where-clause.md) or a [HAVING clause](having-clause.md) to filter table records. By default all data is extracted.
3. Optional: Join multiple SAP tables, see [Table Joins](table-join.md).
4. Click **[Load live preview]** to display a live preview of the first 100 records. 
5. Check the [{{ Settings }}](settings.md){% if page.meta.product == "xtract-universal" or page.meta.product == "board-connector"%} and the [General Settings](general-settings.md){% endif %} before running the extraction.
6. Click **[OK]** to save the extraction.

You can now run the {{ extraction }}{% if page.meta.product == "xtract-universal" %}, see [Execute and Automate Extractions](../execute-and-automate-extractions/index.md){% endif %}.
