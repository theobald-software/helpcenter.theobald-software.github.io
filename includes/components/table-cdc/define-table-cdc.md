
### Look Up a Table

1. In the main window of the {{ component }}, click **[:magnifying-glass:]**. The window “Table Lookup” opens.<br>
![Table-CDC](../../assets/images/documentation/components/table-cdc/{{ abbr }}/table-cdc.png){:class="img-responsive"}
2. In the field **Table Name**, enter the name of the table to track and extract :number-1:. Use wildcards (*) if needed.<br>
![Look-Up-Table](../../assets/images/documentation/components/table/table_look-up.png){:class="img-responsive"}
3. Click **[:magnifying-glass:]** :number-2:. Search results are displayed.
4. Select a table :number-3: and click **[OK]**. <br>

All relevant metadata information of the table is retrieved from SAP.
The application returns to the main window of the {{ component }}.


### Define the {{ tableCDC }} {{ Component }}

The {{ tableCDC }} {{ component }} offers the following options for tracking SAP tables:

1. Select the table columns you want to track and extract. By default all columns are selected. 
Deselect the columns you do not want to extract.<br> 
![Table-CDC-Setup](../../assets/images/documentation/components/table-cdc/table-cdc-kna1.png){:class="img-responsive"}
2. If you want to extract the table when first running the extraction, activate **[Extract table on first run]**.
3. Optional: You can set a maximum number of rows that the log table can contain. The default is disabled (Value 0).
If the row limit is reached, the extraction fails with an exception. The maximum row limit of a log table is 500.000.

	!!! note
		Once a log table is initialized, you cannot change the size limit anymore.
		
4. Optional: Define a [WHERE Clause](where-clause.md) to filter table records. By default all data is extracted.
5. Click {{ previewBtn }} to display a live preview of the first 1000 records.<br>
	- The column *TS_TIMESTAMP* contains a timestamp of when the data was last changed. 
	- The column *TS_OPERATION* indicates if a row was inserted (I), updated (U) or deleted (D).<br>
6. Check the [{{ Settings }}](settings.md){% if page.meta.product == "xtract-universal" or page.meta.product == "board-connector"%} and the [General Settings](general-settings.md){% endif %} before running the {{ extraction }}.
7. Click **[OK]** to confirm your settings.

To initialize the tracking of the selected SAP table, run the {{ extraction }} once. 
