This page contains an overview of the settings in the configuration menu of the Xtract BAPI component. To display the configuration menu, select an Xtract BAPI component in the workflow.

### About

At the top of the configuration menu, click **About** to display information about the software version and license.

### Connection

The section *Connection* of the configuration menu defines which [SAP Connection](../../sap-connection/) is used for the component.

| Button | Description | | --- | --- | | **New** | Opens the "SAP Connection Details" window to create a new SAP connection. For more information, see [Knowledge Base Article: SAP Connection using the Xtract for Alteryx GUI](../../../knowledge-base/sap-connection-using-xfa-gui/). | | **Edit** | Opens the "SAP Connection Details" window to edit the selected SAP connection. | | **Delete** | Deletes the selected SAP connection. |

### Selected Extraction

The section *Selected Extraction* of the configuration menu displays the description and name of the primary SAP object that is used in the component.

| Button | Description | | --- | --- | | **Edit** | Opens the main window of the Xtract BAPI component. The majority of the functions of the Xtract BAPI component can be accessed using the main window. |

### Output Mappings

The section *Output Mappings* of the configuration menu displays which [output tables](../input-and-output/#add-tables-to-output) correspond to which [output anchor](../#input-and-output-anchors) of the component. The Xtract BAPI component has five output anchors for tables that are numbered from 1 to 5. The number of tables that can be added to the output is therefore limited to five tables.

Tip

When an output anchor is connected to an Alteryx tool, you can switch output anchors by right-clicking the connecting line between the tools and selecting **Switch Origin to...**.

### Transaction Commit

Some SAP Function Modules require calling the function module BAPI_TRANSACTION_COMMIT to successfully update data in the database, e.g., BAI_PO_CREATE. To automatically call BAPI_TRANSACTION_COMMIT after the selected Function Module / BAPI is processed, activate the option **Commit work in SAP after execution** in the configuration menu of the Xtract BAPI component.
