

### Create a{% if page.meta.componentFolder == "odp" or page.meta.componentFolder == "ohs" or page.meta.componentFolder == "odata" %}n{% endif %} {{ page.meta.componentName }} Extraction

1. In the main window of the Designer, click **[:material-plus-thick:New]** to create a new extraction. The window "Create Extraction" opens.<br>
![New](../../assets/images/documentation/introduction/{{ abbr }}/new.png){:class="img-responsive"}
2. Select an [SAP Connection](../sap-connection/index.md) of type {% if page.meta.componentFolder == "odata" %}**Odata**{% else %}**RFC**{% endif %} from the drop-down menu **Source**.
3. Enter a unique name for your extraction.
4. Select the extraction type **{{ page.meta.componentName }}**. {% if page.meta.protocol == "odata" %} The **{{ page.meta.componentName }}** extraction type is only available if the SAP source connection uses the [OData protocol](../sap-connection/settings.md/#source-type-odata). {% endif %}
5. Click **[OK]**. The main window of the {{ component }} opens automatically.

The majority of the functions of the {{ component }} can be accessed in the main window.
