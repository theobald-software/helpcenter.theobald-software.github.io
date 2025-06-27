The following article shows how to use the Xtract Table component of Xtract for Alteryx with different types of runtime parameters.

### About this Workflow

This article leads you through all necessary steps to set up the following workflow:

- Pass a single value as a runtime parameter to an Xtract Table component, see [Scalar Parameters](#scalar-parameters).
- Pass a list of values as a runtime parameter to an Xtract Table component, see [List Parameters](#list-parameters).
- Pass multiple runtime parameters to an Xtract Table component, see [Multiple Parameters](#multiple-parameters).

[Download Workflow](../../assets/files/xfa/Table-Dynamic-Parameters.yxmd)

| SAP System | SAP Objects | Xtract for Alteryx Component | | --- | --- | --- | | SAP S/4HANA | SAP Table: *ACDOCA* (Universal Journal Entry Line Items) | Xtract Table |

### Prerequisites

To use the Xtract Table component, access to the designated authority objects (RFC) in SAP must be available, see [SAP User Rights: Table](../../documentation/setup-in-sap/sap-authority-objects/#table).

### Scalar Parameters

Follow the steps below to pass a single value as a runtime parameter to the Xtract Table component.\
The depicted example uses the runtime parameter to dynamically filter SAP journal entries based on the fiscal year of the entry.

1. Drag & drop the Xtract Table component into your Alteryx workflow .

1. Select an SAP connection . If no SAP connection is available, create a new connection, see [Documentation: SAP Connection](../../documentation/sap-connection/).

1. Click **[Edit]** to open the main window of the Xtract Table component.

1. [Look up](../../documentation/table/#look-up-an-sap-table) an SAP table, e.g., *ACDOCA* (Universal Journal Entry Line Items).

1. Click **[Edit Parameters]**. The window "Edit Runtime Parameters" opens.

1. Click **[Add Scalar]** to create a new runtime parameter for passing single values.

   Tip

   Parameter0..-n is the default naming for added runtime parameters. You can enter a name of your choice, e.g., PARAM.

1. Click the drop-down menu and assign a data type to the parameter. The data types can, but don’t need to correlate to SAP data types.

1. Click **[OK]** to save the runtime parameter.

1. Define a WHERE clause to filter the SAP data using the runtime parameter created in step 6.\
   Example: `ACDOCA~GJAHR >= [PARAM]` only extracts SAP journal entries that contain the fiscal year provided by the runtime parameter PARAM.

1. Click **[Load live preview]** to display a live preview of the data without running the extraction.\
   When prompted, provide a value for the runtime parameter, e.g., `2023`.

1. Click **[OK]** to save the extraction.

1. Create/add input values for the runtime parameter in your workflow. Make sure that the name and data type of the input matches the name and data type of the runtime parameter created in step 6.

1. Connect the input value to the input anchor "P" of the Xtract Table component . The input is automatically mapped to the runtime parameter.

The Xtract Table component can now be used to dynamically filter SAP data.

### List Parameters

Follow the steps below to pass a list of values as a runtime parameter to the Xtract Table component.\
The depicted example uses the runtime parameter to dynamically filter SAP journal entries based on a list of booking dates.

1. Drag & drop the Xtract Table component into your Alteryx workflow .

1. Select an SAP connection . If no SAP connection is available, create a new connection, see [Documentation: SAP Connection](../../documentation/sap-connection/).

1. Click **[Edit]** to open the main window of the Xtract Table component.

1. [Look up](../../documentation/table/#look-up-an-sap-table) an SAP table, e.g., *ACDOCA* (Universal Journal Entry Line Items).

1. Click **[Edit Parameters]**. The window "Edit Runtime Parameters" opens.

1. Click **[Add List]** to create a new runtime parameter that can pass multiple values.

   Tip

   Parameter0..-n is the default naming for added runtime parameters. You can enter a name of your choice, e.g., PARAM.

1. Click **[OK]** to save the runtime parameter.

1. Define a WHERE clause to filter the SAP data using the runtime parameter created in step 6.\
   Example: `ACDOCA~BUDAT IN [PARAM]` only extracts SAP journal entries that contain the booking dates provided by the runtime parameter PARAM.

1. Click **[Load live preview]** to display a live preview of the data without running the extraction.\
   When prompted, provide a value for the runtime parameter, e.g., `20171008,20181008`.

1. Click **[OK]** to save the extraction.

1. Create/add input values for the runtime parameter in your workflow. Make sure that the name and data type of the input matches the name and data type of the runtime parameter created in step 6.

1. Connect the input value to the input anchor "P" of the Xtract Table component . The input is automatically mapped to the runtime parameter.

The Xtract Table component can now be used to dynamically filter SAP data.

### Multiple Parameters

Follow the steps below to pass a multiple runtime parameters to the Xtract Table component.\
The depicted example uses the runtime parameters to dynamically filter SAP journal entries based on lists of customer numbers and fiscal years.

1. Drag & drop the Xtract Table component into your Alteryx workflow .

1. Select an SAP connection . If no SAP connection is available, create a new connection, see [Documentation: SAP Connection](../../documentation/sap-connection/).

1. Click **[Edit]** to open the main window of the Xtract Table component.

1. [Look up](../../documentation/table/#look-up-an-sap-table) an SAP table, e.g., *ACDOCA* (Universal Journal Entry Line Items).

1. Click **[Edit Parameters]**. The window "Edit Runtime Parameters" opens.

1. Click **[Add List]** to create new runtime parameters that can pass multiple values.

   Tip

   Parameter0..-n is the default naming for added runtime parameters. You can enter a name of your choice, e.g., PARAM.

1. Click **[OK]** to save the runtime parameter.

1. Define a WHERE clause to filter the SAP data using the runtime parameters created in step 6.\
   Example: `(ACDOCA~KUNNR IN [PARAM1]) AND (ACDOCA~GJAHR IN [PARAM2])` only extracts SAP journal entries that contain the customer numbers provided by the runtime parameter PARAM1 and that contain the fiscal years provided by runtime parameter PARAM2.

1. Click **[Load live preview]** to display a live preview of the data without running the extraction.\
   When prompted, provide a value for the runtime parameter, e.g., `USCU_S13,USCU_L04` for PARAM1 and `2020,2021` for PARAM2.

1. Click **[OK]** to save the extraction.

1. Create/add input values for the runtime parameters in your workflow. Make sure that the name and data type of the input matches the name and data type of the runtime parameter created in step 6.

1. Connect the input value to the input anchor "P" of the Xtract Table component . The input is automatically mapped to the runtime parameters.

The Xtract Table component can now be used to dynamically filter SAP data.

______________________________________________________________________

#### Related Links

- [Documentation: Xtract Table](../../documentation/table/)
- [Sample Workflows](../../sample-workflows/)
