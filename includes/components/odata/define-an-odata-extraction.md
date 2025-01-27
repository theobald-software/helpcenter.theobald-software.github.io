
### Look up OData Services

1. In the main window of the {{ component }}, click **[:magnifying-glass:]**. The window “Service Selection” opens.<br>
![Open-Look-Up-ODP](../../assets/images/documentation/components/odata/{{ abbr }}/odata_main-window_add.png){:class="img-responsive"}	
2. In the field **Search pattern**, enter the technical service name of an OData V2 service or the service ID of an OData V4 service :number-1:. 
Use wildcards (*), if needed.<br>
3. Click **[Search]**. Search results are displayed.
![Look-Up-ODP](../../assets/images/documentation/components/odata/odata-lookup.png){:class="img-responsive"}	
4. Click **[:material-greater-than:]** to select a service :number-2:. 
The SAP objects that are available via the service are displayed in the right screen of the menu:
5. Select a service entity :number-3: and click **[OK]** to confirm.

The application now returns to the main window of the {{ component }}.


### Define the {{ odata }} {{ Component }}

The {{ odata }} {{ component }} offers the following options for data extractions:

1. In the section *Service Fields*, select the items to extract.<br>
![Datasource Preview](../../assets/images/documentation/components/odata/{{ abbr }}/define-odata.png){:class="img-responsive"}
2. Click **[Load Preview]** to display a live preview of the first 100 records.
{% if page.meta.product == "xtract-universal" or page.meta.product == "board-connector"%}3. Check the [General Settings](general-settings.md) before running the {{ extraction }}.{% endif %}
3. Click **[OK]** to save the {{ component }}.
{% if page.meta.product == "xtract-for-alteryx" %}4. Optional: Check the column name style and date conversion options in the [tool configuration](tool-configuration.md) of the {{ component }}. {% endif %}


You can now run the {{ extraction }}{% if page.meta.product == "xtract-universal" %}, see [Execute and Automate Extractions](../execute-and-automate/index.md){% elif page.meta.product == "board-connector" %}, see [Run Extractions](../run-extractions.md){% elif page.meta.product == "board-connector" %}, see [Run Extractions](../run-extractions.md){% endif %}.

!!! note
	The OData data types **DateTime** and **DateTimeOffset** (original format: *yyyy-mm-ddThh:mm[:ss[.fffffff]]*) are truncated to the following format: *yyyyMMdd*.