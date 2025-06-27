This page contains an overview of the settings in the configuration menu of the Xtract Table component. To display the configuration menu, select an Xtract Table component in the workflow.

### About

At the top of the configuration menu, click **About** to display information about the software version and license.

### Connection

The section *Connection* of the configuration menu defines which [SAP Connection](../../sap-connection/) is used for the component.

| Button | Description | | --- | --- | | **New** | Opens the "SAP Connection Details" window to create a new SAP connection. For more information, see [Knowledge Base Article: SAP Connection using the Xtract for Alteryx GUI](../../../knowledge-base/sap-connection-using-xfa-gui/). | | **Edit** | Opens the "SAP Connection Details" window to edit the selected SAP connection. | | **Delete** | Deletes the selected SAP connection. |

### Selected Extraction

The section *Selected Extraction* of the configuration menu displays the description and name of the primary SAP object that is used in the component.

| Button | Description | | --- | --- | | **Edit** | Opens the [main window](../main-window/) of the Xtract Table component. The majority of the functions of the Xtract Table component can be accessed using the main window. |

### Column Name Style

Defines the style of the column name. Following options are available:

| Option | Description | | --- | --- | | *Code* | The SAP technical column name is used as column name in the destination e.g., MAKTX. | | *PrefixedCode* | The SAP technical column name is prefixed by SAP object name and the tilde character e.g., MAKT~MAKTX | | *CodeAndText* | The SAP technical column name and the SAP description separated by an underscore are used as column name in the destination e.g., MAKTX_Material Description (Short Text). | | *TextAndCode* | The SAP description and the SAP technical column name description separated by an underscore are used as column name in the destination e.g., Material Description (Short Text)\_MAKTX. | | *Text* | The SAP description is used as column name in the destination e.g., Material Description (Short Text). |

### SAP Date Conversion

When this option is active, the following date conversions are applied:

- *Replacement for invalid dates*
- *Replacement for 0000XXXX*
- *Replacement for 9999XXXX*

#### Replacement for invalid dates

Replaces an invalid date format, e.g., *20190132* (January 32nd 2019). Enter a replacement value for invalid SAP dates in the format yyyy-mm-dd. The default value is *NULL*.

#### Replacement for 0000XXXX

Replaces SAP dates that contain the year 9999, e.g., *99990101* (January 1st 9999). Enter a replacement value in the format yyyy-mm-dd. The value NULL is supported. The default value is *1970-01-01*.

#### Replacement for 9999XXXX

Replaces SAP dates that contain the year ‘9999’, e.g., ‘99990101’ (January 1st 9999). Enter a replacement value in the format yyyy-mm-dd. The value NULL is supported. The default value is *2099-12-31*.
