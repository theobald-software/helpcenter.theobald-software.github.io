This page contains an overview of the settings in the configuration menu of the Xtract Cube component. To display the configuration menu, select an Xtract Cube component in the workflow.

### About

At the top of the configuration menu, click **About** to display information about the software version and license.

### Connection

The section *Connection* of the configuration menu defines which [SAP Connection](../../sap-connection/) is used for the component.

| Button | Description | | --- | --- | | **New** | Opens the "SAP Connection Details" window to create a new SAP connection. For more information, see [Knowledge Base Article: SAP Connection using the Xtract for Alteryx GUI](../../../knowledge-base/sap-connection-using-xfa-gui/). | | **Edit** | Opens the "SAP Connection Details" window to edit the selected SAP connection. | | **Delete** | Deletes the selected SAP connection. |

### Selected Extraction

The section *Selected Extraction* of the configuration menu displays the description and name of the primary SAP object that is used in the component.

| Button | Description | | --- | --- | | **Edit** | Opens the main window of the Xtract Cube component. The majority of the functions of the Xtract Cube component can be accessed using the main window. |

### Column Name Style

Defines the style of the column name. Following options are available:

| Option | Description | | --- | --- | | *Code* | The SAP technical column name is used as column name in the destination e.g., MAKTX. | | *PrefixedCode* | The SAP technical column name is prefixed by SAP object name and the tilde character e.g., MAKT~MAKTX | | *CodeAndText* | The SAP technical column name and the SAP description separated by an underscore are used as column name in the destination e.g., MAKTX_Material Description (Short Text). | | *TextAndCode* | The SAP description and the SAP technical column name description separated by an underscore are used as column name in the destination e.g., Material Description (Short Text)\_MAKTX. | | *Text* | The SAP description is used as column name in the destination e.g., Material Description (Short Text). |
