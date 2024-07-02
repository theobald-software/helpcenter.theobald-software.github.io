
### Look up an OHS Destination

1. In the main window of the {{ component }}, select an **Extraction type** in the main window of the component.
	- Select **Table** if you use BW4Hana2.0 and make sure that the open hub destination type in SAP is set to *database table*.
	- Select **Third party tool (legacy)** if you use BW4Hana2.0 and make sure that the open hub destination type in SAP is set to *third party tool*.
	
	![ohs-main-window-add](../../assets/images/{{ abbr }}/documentation/ohs/ohs_main-window_add.png){:class="img-responsive"}
2. Click **[:material-book-open-blank-variant-outline: Lookup]**. The window “OHS Lookup” opens.<br>
3. In the field **OHS Destination**, enter the name of an OHS destination :number-1:. Use wildcards (*) if needed.<br>
![Look-Up-Infospoke-Destination](../../assets/images/documentation/components/ohs/ohs_look-up.png){:class="img-responsive"}
4. Click **[:magnifying-glass:]**. Search results are displayed :number-2:.
5. Select an OHS destination and click **[OK]** to confirm.

The application now returns to the main window of the {{ component }}.

### Define the {{ ohs }}  {{ Component }}

The {{ ohs }} {{ component }} offers the following options for OHS extractions:

1. If **Process Chain** is empty, enter an SAP process chain assigned to your OHS destination, see [SAP Documentation: Display/Maintenance of Process Chain Attributes](https://help.sap.com/docs/SAP_NETWEAVER_701/6da591e86c4b1014b43de329b9ffb859/4a2cf30c6ed91c62e10000000a42189c.html?locale=en-US).

	!!! note
		If **Process Chain** is left empty, the extraction fails.
		
	![ohs-main-window](../../assets/images/{{ abbr }}/documentation/ohs/ohs-main-window.png){:class="img-responsive"}
2. Optional: Use the **Timeout** setting to set a maximum time period to wait for a notification from the BW system. 
If the time limit is reached, the extraction fails.
7. Check the [{{ Settings }}](settings.md){% if page.meta.product == "xtract-universal" or page.meta.product == "board-connector"%} and the [General Settings](general-settings.md){% endif %} before running the {{ extraction }}.
8. Click **[OK]** to save the {{ component }}.

You can now run the {{ extraction }}{% if page.meta.product == "xtract-universal" %}, see [Execute and Automate Extractions](../execute-and-automate/index.md){% endif %}.

