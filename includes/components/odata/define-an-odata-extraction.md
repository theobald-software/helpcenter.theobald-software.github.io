
### Look up OData Services

1. In the main window of the {{ component }}, click **[:magnifying-glass:]**. The window “Operational Data Provider Lookup” opens.<br>
![Open-Look-Up-ODP](../../assets/images/documentation/components/odata/{{ abbr }}/odata_main-window_add.png){:class="img-responsive"}	
2. In the field **Name**, enter the name of an extractor :number-1:. Use wildcards (*), if needed.<br>
![Look-Up-ODP](../../assets/images/documentation/components/odata/odata-lookup.png){:class="img-responsive"}	
3. Select a *Context* :number-2:. Depending on the connected SAP source system there are differences in available [Provider Contexts](provider-context.md).
4. Click **[:magnifying-glass:]**. Search results are displayed.
5. Select an extractor :number-3: and click **[OK]** to confirm.

The application now returns to the main window of the {{ component }}.


### Define the {{ odata }} {{ Component }}

The {{ odp }} {{ component }} offers the following options for data extractions:

1. In the section *Fields*, select the items you want to extract.<br>
![Datasource Preview](../../assets/images/documentation/components/odata/{{ abbr }}/define-odata.png){:class="img-responsive"}

	!!! note
		TS_SEQUENCE_NUMBER is a technical primary key that can be added to the output.
		When working with identical data sets, the data set with the highest sequence number is the most current data set.
	
2. Optional: edit a selection you want to change or dynamize. 
For more information, see [Edit Selections](selections.md/#edit-selections).<br>

	!!! note
		If your data source is a Hierarchy, see [Hierarchy Segments](provider-context.md/#segments-to-extract) for filter options.
		
3. Select an [Update Mode](update-mode.md), e.g., to initialize delta extractions.
5. Click {{ previewBtn }} to display a live preview of the first 100 records.
7. Check the [{{ Settings }}](settings.md){% if page.meta.product == "xtract-universal" or page.meta.product == "board-connector"%} and the [General Settings](general-settings.md){% endif %} before running the {{ extraction }}.
8. Click **[OK]** to save the {{ component }}.
{% if page.meta.product == "xtract-for-alteryx" %}9. Optional: Check the column name style and date conversion options in the [tool configuration](tool-configuration.md) of the {{ component }}. {% endif %}


You can now run the {{ extraction }}{% if page.meta.product == "xtract-universal" %}, see [Execute and Automate Extractions](../execute-and-automate/index.md){% elif page.meta.product == "board-connector" %}, see [Run Extractions](../run-extractions.md){% elif page.meta.product == "board-connector" %}, see [Run Extractions](../run-extractions.md){% endif %}.

