
### Look Up a Hierarchy

1. In the main window of the component, click **[:magnifying-glass:]**. The window “Hierarchy Lookup” opens.<br>
![hierarchy_main-window_add](../../assets/images/{{ abbr }}/documentation/hierarchy/hierarchy_main-window_add.png){:class="img-responsive"}
2. Enter the name of a Hierarchy in the field **Hierarchy Name** or the name of an InfoObject in the field **InfoObject** :number-1:.
Use wildcards (*) if needed. <br>
![Look Up Hierarchy](../../assets/images/documentation/components/hierarchy/hierarchy_look-up.png){:class="img-responsive"}
3. Click **[:magnifying-glass:]**. Search results are displayed.
4. Select a Hierarchy :number-2: and click **[Select]**.

The application returns to the main window of the {{ component }}.

### Define the {{ hierarchy }} {{ Component }}

The {{ hierarchy }} {{ component }} offers the following options for Hierarchy extractions:

1. Define the output format of the Hierarchy in the [{{ settings }}](settings.md/#extraction-settings) :number-3:.
The {{ hierarchy }} {{ component }} supports the following output formats:
	- [ParentChild Format](output-format.md/#parentchild-format)
	- [Natural Format](output-format.md/#natural-format)
	- [ParentChildWithNodeNames Format](output-format.md/#parentchildwithnodenames-format)
	
	![Hierarchy-settings](../../assets/images/{{ abbr }}/documentation/hierarchy/hierarchy-settings.png){:class="img-responsive"} 
2. Click {{ previewBtn }} :number-4: to display a live preview of the first 100 records. 
{% if page.meta.product == "xtract-universal" or page.meta.product == "board-connector" %}3. Check the [General Settings](general-settings.md) before running the {{ extraction }}.. 
4. Optional: The default value for **Date To** is *99991231*. To change the value, override the *dateTo* [extraction parameter](../parameters/extraction-parameters.md) when calling the extraction. {% endif %}
5. Click **[OK]** to save the {{ component }}.

You can now run the {{ extraction }}{% if page.meta.product == "xtract-universal" %}, see [Execute and Automate Extractions](../execute-and-automate/index.md){% elif page.meta.product == "board-connector" %}, see [Run Extractions](../run-extractions.md){% endif %}.
