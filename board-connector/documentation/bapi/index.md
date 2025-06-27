This page shows how to use the BAPI extraction type.\
The BAPI extraction type can be used to parameterize and execute SAP function modules and BAPIs for automation.

### About Function Modules / BAPIs

Function modules are procedures that encapsulate and reuse global functions in the SAP system. SAP systems contain several predefined functions modules that can be called from any ABAP program. A Business Application Programming Interface (BAPI) is a remote function module that can access business data and processes of an SAP system from different systems.

### Custom BAPIs

The use of custom BAPIs (Z function modules) is possible. Issues specific to Z function modules are not included in the scope of support provided by Theobald Software.

### Prerequisites

- A connection to an SAP system is available, see [SAP Connection](../sap-connection/).
- The SAP user has sufficient user rights, see [SAP Authority Objects](../setup-in-sap/sap-authority-objects/#bapi).

Warning

**Missing Authorization.**\
To use the BAPI extraction type, access to the designated authority objects (RFC) in SAP must be available. Adjust [SAP Authority Objects: BAPI](../setup-in-sap/sap-authority-objects/#bapi) accordingly.

### Create a BAPI Extraction

1. In the main window of the Designer, click **[New]** to create a new extraction. The window "Create Extraction" opens.
1. Select an [SAP Connection](../sap-connection/) of type **RFC** from the drop-down menu **Source**.
1. Enter a unique name for your extraction.
1. Select the extraction type **BAPI**.
1. Click **[OK]**. The main window of the extraction type opens automatically.

The majority of the functions of the extraction type can be accessed in the main window.

### Look up a Function Module / BAPI

1. In the main window of the extraction type, click **[]** to look up a Function Module / BAPI. The window "Function Module Lookup" opens.
1. In the window "Function Module Lookup" enter the name of the function module or BAPI . Use wildcards (\*) if needed.
1. Click **[]** . Search results are displayed.
1. Select a Function Module / BAPI and click **[OK]**.

The application returns to the main window of the extraction type.

### Define the BAPI Extraction Type

The BAPI extraction type offers the following options for defining parameters of a Function Module / BAPI:

1. Add input parameters (data you want to send to SAP) in **Imports**, see [Import Parameters](input-and-output/#import-parameters).\
   You can enter scalar values or structures .

1. Add output parameters (data you want to receive from SAP) in **Exports**, see [Export Parameters](input-and-output/#export-parameters).\
   Select output by activating the checkbox next to the items.

1. Optional: If available, define input and output parameters in **Changings**, see [Changings Parameters](input-and-output/#changing-parameters).

1. Add tables to the output of the extraction type or add table parameters to the input of the extraction type in **Tables**, see [Table Parameters](input-and-output/#table-parameters).

   - Click **[]** to check the names and data types of the table fields .
   - Activate the checkbox in the output column to add items to the output .
   - Click **[]** to edit the content of the table .

1. Optional: If available, define which exceptions thrown by the Function Module / BAPI are ignored during runtime, see [Exceptions](input-and-output/#exceptions).

1. Check the [General Settings](general-settings/) before running the extraction.

1. Click **[OK]** to save the extraction type.

You can now run the extraction, see [Run Extractions](../run-extractions/).

______________________________________________________________________

#### Related Links

- [Knowledge Base: Access Data in the SAP Public Cloud](../../knowledge-base/access-data-in-the-sap-public-cloud/)
- [Knowledge Base: Read Data from Cluster Fields in Tables PCL1 and PCL2 (Payroll)](../../knowledge-base/read-data-from-cluster-fields-in-the-tables-pcl1-and-pcl2-payroll/)
