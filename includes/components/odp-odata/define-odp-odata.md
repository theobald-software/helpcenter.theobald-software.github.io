
### Look Up OData Services


1. In the main window of the {{ component }}, click **[:magnifying-glass:]**. The window “Service Selection” opens.<br>
![Open-Look-Up-ODP](../../assets/images/documentation/components/odp-odata/{{ abbr }}/main-window_add.png){:class="img-responsive"}	
2. In the field **Search pattern** :number-1:, enter one of the following characteristics:
	- name of an OData service
	- description of an OData service
	- name of the entity inside the OData service
	
	Use wildcards (*), if needed.<br>
	![Look-Up-ODP](../../assets/images/documentation/components/odp-odata/look-up.png){:class="img-responsive"}	
3. Click **[Search]** :number-2:. Search results are displayed.
4. Select an OData service :number-3: and click **[OK]** to confirm.

The application now returns to the main window of the {{ component }}.

!!! note 
	To find DataSources, they have to be activated in SAP.


### Define the {{ odpOdata }} {{ Component }}

The {{ odpOdata }} {{ component }} offers the following options for data extractions:

1. In the section *Fields*, select the items you want to extract.<br>
![Datasource Preview](../../assets/images/documentation/components/odp-odata/{{ abbr }}/define-odp-odata.png){:class="img-responsive"}
2. Optional: Edit a selection you want to change or dynamize. 
For more information, see [Edit Selections](selections.md/#edit-selections).<br>
3. Optional: Activate the option **Delta / Change tracking** to initialize delta extractions. For more information, see [Subscriptions](subscriptions.md).
4. Click {{ previewBtn }} to display a live preview of the first 100 records.
5. Check the [{{ Settings }}](settings.md){% if page.meta.product == "xtract-universal" or page.meta.product == "board-connector"%} and the [General Settings](general-settings.md){% endif %} before running the {{ extraction }}.
6. Click **[OK]** to save the {{ component }}.

You can now run the {{ extraction }}{% if page.meta.product == "xtract-universal" %}, see [Execute and Automate Extractions](../execute-and-automate/index.md){% elif page.meta.product == "board-connector" %}, see [Run Extractions](../run-extractions.md){% endif %}.

