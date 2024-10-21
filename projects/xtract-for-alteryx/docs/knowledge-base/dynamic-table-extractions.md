---
title: Dynamic Table Extractions 
description: Test
author: Simon Rech, Valerie Schipka
---

The following article shows how to use the {{ table }} {{ component }} of {{ productName }} with different types of {{ variables }}.<br>

### About this Workflow

This article leads you through all necessary steps to set up the following workflow:
- Pass a single value as a runtime parameter to an Xtract Table component, see [Scalar Parameters](#scalar-parameters).
- Pass a list of values as a runtime parameter to an Xtract Table component, see [List Parameters](#list-parameters).
- Pass multiple runtime parameters to an Xtract Table component, see [Multiple Parameters](#multiple-parameters).

[:material-download-circle: Download Workflow](../assets/files/xfa/Table-Dynamic-Parameters.yxmd){ .md-button .md-button--primary }


| SAP System | SAP Objects | {{ productName }} Component |
| :------ |:--- | :--- |
| SAP S/4HANA | SAP Table: *ACDOCA* (Universal Journal Entry Line Items) | Xtract Table |

![table-workflow](../assets/images/articles/xfa/workflow.png){:class="img-responsive"}


### Prerequisites

To use the Xtract Table component, access to the designated authority objects (RFC) in SAP must be available, see [SAP User Rights: Table](../documentation/setup-in-sap/sap-authority-objects.md/#table).

### Scalar Parameters

Follow the steps below to pass a single value as a runtime parameter to the Xtract Table component.<br>
The depicted example uses the runtime parameter to dynamically filter SAP journal entries based on the fiscal year of the entry.

1. Drag & drop the Xtract Table component into your Alteryx workflow :number-1:.<br>
![xfa_create_table_extraction_01_extraction_01](../assets/images/articles/xfa/xfa_create_table_extraction_01.png){:class="img-responsive" width="900px"}
2. Select an SAP connection :number-2:. If no SAP connection is available, create a new connection, see [Documentation: SAP Connection](../documentation/sap-connection/index.md).
3. Click **[Edit]** :number-3: to open the main window of the Xtract Table component.
4. [Look up](../documentation/table/index.md/#look-up-an-sap-table) an SAP table, e.g., *ACDOCA* (Universal Journal Entry Line Items).<br>
![single-table](../assets/images/articles/xfa/single-table.png){:class="img-responsive"}
5. Click **[Edit Parameters]**. The window "Edit Runtime Parameters" opens.
6. Click **[Add Scalar]** :number-4: to create a new runtime parameter for passing single values.<br>

	!!! tip
	
		Parameter0..-n is the default naming for added runtime parameters. You can enter a name of your choice, e.g., PARAM.
		
	![single-table-parameter](../assets/images/articles/xfa/single-table-parameter.png){:class="img-responsive"}
7. Click the drop-down menu :number-5: and assign a data type to the parameter. The data types can, but don’t need to correlate to SAP data types.
8. Click **[OK]** to save the runtime parameter. 
9. Define a WHERE clause to filter the SAP data using the runtime parameter created in step 6. <br>
Example: `ACDOCA~GJAHR >= [PARAM]` only extracts SAP journal entries that contain the fiscal year provided by the runtime parameter PARAM.<br>
![single-where](../assets/images/articles/xfa/single-where.png){:class="img-responsive"}
10. Click **[Load live preview]** to display a live preview of the data without running the extraction.<br>
When prompted, provide a value for the runtime parameter, e.g., `2023`.
11. Click **[OK]** to save the extraction.
12. Create/add input values for the runtime parameter in your workflow.
Make sure that the name and data type of the input matches the name and data type of the runtime parameter created in step 6. <br>
![table-scalar](../assets/images/articles/xfa/table-scalar.png){:class="img-responsive"}
13. Connect the input value to the input anchor "P" of the Xtract Table component :number-6:. The input is automatically mapped to the runtime parameter.

The Xtract Table component can now be used to dynamically filter SAP data.

### List Parameters

Follow the steps below to pass a list of values as a runtime parameter to the Xtract Table component.<br>
The depicted example uses the runtime parameter to dynamically filter SAP journal entries based on a list of booking dates.

1. Drag & drop the Xtract Table component into your Alteryx workflow :number-1:.<br>
![xfa_create_table_extraction_01_extraction_01](../assets/images/articles/xfa/xfa_create_table_extraction_01.png){:class="img-responsive" width="900px"}
2. Select an SAP connection :number-2:. If no SAP connection is available, create a new connection, see [Documentation: SAP Connection](../documentation/sap-connection/index.md).
3. Click **[Edit]** :number-3: to open the main window of the Xtract Table component.
4. [Look up](../documentation/table/index.md/#look-up-an-sap-table) an SAP table, e.g., *ACDOCA* (Universal Journal Entry Line Items).<br>
![single-table](../assets/images/articles/xfa/single-table.png){:class="img-responsive"}
5. Click **[Edit Parameters]**. The window "Edit Runtime Parameters" opens.
6. Click **[Add List]** :number-4: to create a new runtime parameter that can pass multiple values.<br>

	!!! tip
	
		Parameter0..-n is the default naming for added runtime parameters. You can enter a name of your choice, e.g., PARAM.
		
	![list-table-parameter](../assets/images/articles/xfa/list-table-parameter.png){:class="img-responsive"}
7. Click **[OK]** to save the runtime parameter. 
8. Define a WHERE clause to filter the SAP data using the runtime parameter created in step 6. <br>
Example: `ACDOCA~BUDAT IN [PARAM]` only extracts SAP journal entries that contain the booking dates provided by the runtime parameter PARAM.<br>
![list-where](../assets/images/articles/xfa/list-where.png){:class="img-responsive"}
9. Click **[Load live preview]** to display a live preview of the data without running the extraction.<br>
When prompted, provide a value for the runtime parameter, e.g., `20171008,20181008`.
10. Click **[OK]** to save the extraction.
11. Create/add input values for the runtime parameter in your workflow.
Make sure that the name and data type of the input matches the name and data type of the runtime parameter created in step 6. <br>
![table-list](../assets/images/articles/xfa/table-list.png){:class="img-responsive"}
12. Connect the input value to the input anchor "P" of the Xtract Table component :number-5:. The input is automatically mapped to the runtime parameter.

The Xtract Table component can now be used to dynamically filter SAP data.

### Multiple Parameters

Follow the steps below to pass a multiple runtime parameters to the Xtract Table component.<br>
The depicted example uses the runtime parameters to dynamically filter SAP journal entries based on lists of customer numbers and fiscal years.

1. Drag & drop the Xtract Table component into your Alteryx workflow :number-1:.<br>
![xfa_create_table_extraction_01_extraction_01](../assets/images/articles/xfa/xfa_create_table_extraction_01.png){:class="img-responsive" width="900px"}
2. Select an SAP connection :number-2:. If no SAP connection is available, create a new connection, see [Documentation: SAP Connection](../documentation/sap-connection/index.md).
3. Click **[Edit]** :number-3: to open the main window of the Xtract Table component.
4. [Look up](../documentation/table/index.md/#look-up-an-sap-table) an SAP table, e.g., *ACDOCA* (Universal Journal Entry Line Items).<br>
![multiple-table](../assets/images/articles/xfa/single-table.png){:class="img-responsive"}
5. Click **[Edit Parameters]**. The window "Edit Runtime Parameters" opens.
6. Click **[Add List]** :number-4: to create new runtime parameters that can pass multiple values.<br>

	!!! tip
	
		Parameter0..-n is the default naming for added runtime parameters. You can enter a name of your choice, e.g., PARAM.
		
	![multiple-lists-table-parameter](../assets/images/articles/xfa/multiple-lists-table-parameter.png){:class="img-responsive"}
7. Click **[OK]** to save the runtime parameter. 
8. Define a WHERE clause to filter the SAP data using the runtime parameters created in step 6. <br>
Example: `(ACDOCA~KUNNR IN [PARAM1]) AND (ACDOCA~GJAHR IN [PARAM2])` only extracts SAP journal entries that contain the customer numbers provided by the runtime parameter PARAM1 and that contain the fiscal years provided by runtime parameter PARAM2.<br>
![multiple-where](../assets/images/articles/xfa/multiple-where.png){:class="img-responsive"}
9. Click **[Load live preview]** to display a live preview of the data without running the extraction.<br>
When prompted, provide a value for the runtime parameter, e.g., `USCU_S13,USCU_L04` for PARAM1 and `2020,2021` for PARAM2.
10. Click **[OK]** to save the extraction.
11. Create/add input values for the runtime parameters in your workflow.
Make sure that the name and data type of the input matches the name and data type of the runtime parameter created in step 6. <br>
![table-multiple](../assets/images/articles/xfa/table-multiple.png){:class="img-responsive"}
12. Connect the input value to the input anchor "P" of the Xtract Table component :number-5:. The input is automatically mapped to the runtime parameters.

The Xtract Table component can now be used to dynamically filter SAP data.

*****
#### Related Links
- [Documentation: Xtract Table](../documentation/table/index.md)
- [Sample Workflows](../sample-workflows.md)
