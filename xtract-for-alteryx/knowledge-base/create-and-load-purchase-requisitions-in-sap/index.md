The following article shows how to use the Xtract BAPI component of Xtract for Alteryx to create a new purchase requisition in SAP and how to load the data of the purchase requisition into Alteryx.

### About this Workflow

This article leads you through all necessary steps to set up the following workflow:

- Create a new purchase requisition in an SAP ERP system.\
  This process uses a simple input table that contains the data for the purchase requisition.
- Use the new purchase requisition number to load the details of the purchase requisition into Alteryx.\
  This process uses an input parameter and a batch macro to pass the input parameter to the Xtract BAPI component.

Note

When using Xtract for Alteryx version 1.18 and below tables can be passed to the Xtract BAPI component directly via an input anchor, while single values require the use of batch macros. As of Xtract for Alteryx version 1.19 all input parameters can be passed to the Xtract BAPI component without batch macros.

[Download Workflow](../../assets/files/xfa/BAPI-ERP-ReadAndWriteWithMacro.yxzp)

| SAP System | SAP Objects | Xtract for Alteryx Component | | --- | --- | --- | | SAP ERP | *BAPI_REQUISITION_CREATE* (Create Purchase Requisition) *BAPI_REQUISITION_GETDETAIL* (Display Purchase Requisition Details) | Xtract BAPI |

### Prerequisites

To use the Xtract BAPI component, access to the designated authority objects (RFC) in SAP must be available, see [SAP User Rights: BAPI](../../documentation/setup-in-sap/sap-authority-objects/#bapi).

### Create a new Purchase Requisition in SAP

Follow the steps below to create a new purchase requisition in SAP:

1. Drag & drop the Xtract BAPI component into your Alteryx workflow .
1. Select an SAP connection . If no SAP connection is available, create a new connection, see [Documentation: SAP Connection](../../documentation/sap-connection/).
1. Click **[Edit]** to open the main window of the Xtract BAPI component.
1. In the main window of the component click . The window “Function Module Lookup” opens.
1. In the field **Function Name** enter the name of the BAPI *BAPI_REQUISITION_CREATE*. Use wildcards (\*), if needed.
1. Click and select the BAPI *BAPI_REQUISITION_CREATE* from the displayed list .
1. Click **[OK]**. The window "Function Module Lookup" closes.
1. In the tab *Tables* of the Xtract BAPI component click to look up the names and data types of the table REQUISITION_ITEMS. Use this information to prepare the input data of the purchase requisition:
1. Connect the input data to the Xtract BAPI component .
1. Open the Xtract BAPI component.
1. In the tab *Tables* assign the input data to the table REQUISITION_ITEMS.
1. Add the tables REQUISITION_ITEMS and RETURN to the output of the Xtract BAPI component.
1. In the tab *Exports* add the export parameter NUMBER for the output.
1. Click **[OK]** to save the settings.
1. Select the Xtract BAPI component and activate the option **Commit work in SAP after execution**.

The Xtract BAPI component can now be used to create purchase requisitions in SAP.

### Load Purchase Requisition Data from SAP

Follow the steps below to create a [batch macro](http://downloads.alteryx.com/betawh_xnext/BatchMacro.htm) that loads the SAP purchase requisition data of any given purchase requisition number:

1. Create a new workflow.
1. Drag & drop the Xtract BAPI component into your Alteryx workflow .
1. Select an SAP connection . If no SAP connection is available, create a new connection, see [Documentation: SAP Connection](../../documentation/sap-connection/).
1. Click **[Edit]** to open the main window of the Xtract BAPI component.
1. In the main window of the component click . The window “Function Module Lookup” opens.
1. In the field **Function Name** enter the name of the BAPI *BAPI_REQUISITION_GETDETAILS*. Use wildcards (\*), if needed.
1. Click and select the BAPI *BAPI_REQUISITION_GETDETAILS* from the displayed list.
1. Click **[OK]**. The window "Function Module Lookup" closes.
1. In the main window of the component click **[Edit Parameters]**. The window "Edit Runtime Parameters" opens.
1. Click **[Add Scalar]** to define a new input parameter for the Xtract BAPI component. The depicted example uses a string parameter *Req_Number* to represent the purchase requisition number.
1. Click **[OK]**. The window "Edit Runtime Parameters" closes.
1. In the *Imports* tab assign the parameter *Req_Number* to the import parameter NUMBER.
1. In the *Tables* tab add the tables REQUISITION_ITEMS and RETURN to the output of the Xtract BAPI component.
1. Click **[OK]** to save the settings of the Xtract BAPI component.
1. Navigate to the Alteryx workflow configuration and set the workflow type to \**Batch Macro*.
1. Save the workflow.
1. Add a **Control Parameter** tool from the *Interface* toolbox. Label the parameter *Req Number Input*.
1. Connect the **Control Parameter** tool to the Xtract BAPI component. This creates the *Action* tool **Update Value**.
1. Select the **Update Value** tool and mark the Xtract BAPI parameter *Req_Number* in the tree menu *Value or Attribute to Update* to map the parameters.
1. Add two **Macro Output** tools from the *Interface* toolbox to create outputs for the batch macro.
1. Connect the output of the Xtract BAPI component to the **Macro Output** tools.
1. Save the macro.

The batch macro can now be used to load SAP purchase requisition data of any given purchase requisition number.

______________________________________________________________________

#### Related Links

- [Documentation: Xtract BAPI](../../documentation/bapi/)
- [Sample Workflows](../../sample-workflows/)
