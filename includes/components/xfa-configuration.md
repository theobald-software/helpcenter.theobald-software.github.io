
This page contains an overview of the settings in the configuration menu of the {{ page.meta.componentName }} {{ component }}.
To display the configuration menu, select an {{ page.meta.componentName }} {{ component }} in the workflow.


![configuration](../../assets/images/xfa/documentation/{{ page.meta.componentFolder }}/configuration.png){:class="img-responsive" style="border:1px solid black"} 

### About

At the top of the configuration menu, click *About* to display information about the software version and license.

### Connection

The section *Connection* of the configuration menu defines which [SAP Connection](../sap-connection/index.md) is used for the {{ component }}.


|Button | Description |
|--------|-------------|
| :heavy_plus_sign: **New** | Opens the "SAP Connection Details" window to create a new SAP connection. <br> For more information, see [Knowledge Base Article: SAP Connection using the Xtract for Alteryx GUI](../../knowledge-base/sap-connection-using-xfa-gui.md). |
| :pen-button: **Edit** | Opens the "SAP Connection Details" window to edit the selected SAP connection. |
| :heavy_minus_sign: **Delete** | Deletes the selected SAP connection. |

### Selected Extraction

The section *Selected Extraction* of the configuration menu displays the description and name of the primary SAP object that is used in the {{ component }}.

| Button| Description |
|--------|-------------|
| :pen-button: **Edit** | Opens the {% if page.meta.componentFolder == "table" %}[main window](main-window.md){% else %}main window{% endif %} of the {{ page.meta.componentName }} {{ component }}. The majority of the functions of the {{ page.meta.componentName }} {{ component }} can be accessed using the main window. |