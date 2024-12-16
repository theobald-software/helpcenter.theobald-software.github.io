

### Create a{% if page.meta.componentFolder == "odp" or page.meta.componentFolder == "ohs" or page.meta.componentFolder == "odata" %}n{% endif %} {{ page.meta.componentName }} Extraction

1. In the main window of the Designer, click **[:material-plus-thick:New]** to create a new extraction. The window "Create Extraction" opens.<br>
![New](../../assets/images/documentation/introduction/{{ abbr }}/new.png){:class="img-responsive"}
2. Select an [SAP Connection](../sap-connection/index.md) of type {% if page.meta.componentFolder == "odata" %}**Odata**{% else %}**RFC**{% endif %} from the drop-down menu in **Source**
3. Enter a unique name for your extraction.
4. Select the extraction type **{{ page.meta.componentName }}** and click **[OK]**. The main window of the {{ component }} opens automatically.

The majority of the functions of the {{ component }} can be accessed in the main window.
