This page shows how to use the Xtract BAPI component.\
The Xtract BAPI component can be used to parameterize and execute SAP function modules and BAPIs for automation.

### About Function Modules / BAPIs

Function modules are procedures that encapsulate and reuse global functions in the SAP system. SAP systems contain several predefined functions modules that can be called from any ABAP program. A Business Application Programming Interface (BAPI) is a remote function module that can access business data and processes of an SAP system from different systems.

### Custom BAPIs

The use of custom BAPIs (Z function modules) is possible. Issues specific to Z function modules are not included in the scope of support provided by Theobald Software.

### Prerequisites

- A connection to an SAP system is available, see [SAP Connection](../sap-connection/).
- The SAP user has sufficient user rights, see [SAP Authority Objects](../setup-in-sap/sap-authority-objects/#bapi).

Warning

**Missing Authorization.**\
To use the Xtract BAPI component, access to the designated authority objects (RFC) in SAP must be available. Adjust [SAP Authority Objects: BAPI](../setup-in-sap/sap-authority-objects/#bapi) accordingly.

### Add an Xtract BAPI Component

Follow the steps below to add an Xtract Table component to your SSIS package:

1. Drag&drop the Xtract BAPI component from the SSIS toolbox into your data flow task.

1. Double-click the component. A connection manager is automatically assigned to the component and the main window of the component opens.

   Note

   If there are multiple connection managers, the window "Select Connection Manager" opens, see [SAP Connection](../sap-connection/#assign-connection-managers-to-xtract-components). Once a connection manager is selected, the main window of the component opens.

The majority of the functions of the component can be accessed in the main window.

### Look up a Function Module / BAPI

1. In the main window of the component, click **[]** to look up a Function Module / BAPI. The window "Function Module Lookup" opens.
1. In the window "Function Module Lookup" enter the name of the function module or BAPI . Use wildcards (\*) if needed.
1. Click **[]** . Search results are displayed.
1. Select a Function Module / BAPI and click **[OK]**.

The application returns to the main window of the component.

### Define the Xtract BAPI Component

The Xtract BAPI component offers the following options for defining parameters of a Function Module / BAPI:

1. Add input parameters (data you want to send to SAP) in **Imports**, see [Import Parameters](input-and-output/#import-parameters).\
   You can enter scalar values or structures .

1. Add output parameters (data you want to receive from SAP) in **Exports**, see [Export Parameters](input-and-output/#export-parameters).\
   Select output by activating the checkbox next to the items.

1. Optional: If available, define input and output parameters in **Changings**, see [Changings Parameters](input-and-output/#changing-parameters).

1. Add tables to the output of the component or add table parameters to the input of the component in **Tables**, see [Table Parameters](input-and-output/#table-parameters).

   - Click **[]** to check the names and data types of the table fields .
   - Activate the checkbox in the output column to add items to the output .
   - Click **[]** to edit the content of the table .

1. Optional: If available, define which exceptions thrown by the Function Module / BAPI are ignored during runtime, see [Exceptions](input-and-output/#exceptions).

1. Click **[OK]** to save the component.

You can now run the SSIS package.

### Custom Properties of Xtract BAPI

The *Custom Properties* are properties that are unique to the component. When parameterizing the component using SSIS variables, the *Custom Properties* are overwritten.

The *Custom Properties* of the Xtract BAPI component are displayed in the "Properties" window.

#### Commit Transaction

Some SAP Function Modules require calling the function module BAPI_TRANSACTION_COMMIT to successfully update data in the database, e.g., BAI_PO_CREATE. To automatically call BAPI_TRANSACTION_COMMIT after the selected Function Module / BAPI is processed, aset this option to *true*.

______________________________________________________________________

#### Related Links

- [Knowledge Base Article: Write CATS Data to SAP](../../knowledge-base/write-cats-data-to-sap/)
- [Knowledge Base Article: Write Product Data to SAP](../../knowledge-base/write-product-data-to-sap/)
