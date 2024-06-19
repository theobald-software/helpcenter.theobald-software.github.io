---
title: Parameters
description: An overview and description of all BAPI settings
---

This section contains an overview and description of all available {{ bapi }} settings.

Each Import, Export, Changings and Tables parameter can have one of the following representations:

- A scalar field (e.g., characters, date, time, number, amount etc.).
- A structure consisting of several components.
- A table (tabular array of data) consisting of columns (data values of the same type) and rows (data records).

#### Commits Transaction

If this option is active, the function module "BAPI_TRANSACTION_COMMIT" is called after processing the selected Function Module / BAPI. 
Some SAP Function Modules (e.g., BAPI_PO_CREATE) require this commit function to successfully update data in the database.

### Function Module Interface Parameters

In the *Function Module Interface Parameters* section all parameters of the selected Function Module / BAPI are displayed.
Function Modules / BAPIs can have up to four parameter types: 
- [Import](#import-parameters)
- [Export](#export-parameters)
- [Changing](#changing-parameters)
- [Table](#table-parameters)

### Import Parameters
Import parameters represent the input values sent from the client to SAP. In the tab **Import** you can define import parameters.

Select import parameters using the drop-down list next to the parameter:

|  Input  |  Description   |  
|----------|-------------|
| *Supplied by Caller* | The item becomes available as a parameter in the request body of the service and can be set at runtime. |
| *Default <br>(defined in SAP)* | The item uses the default values from SAP. This is the default setting. |
| *Constant* | The item uses the value that is entered in the **Value** field.|
 
![BAPI export parameters](../../assets/images/yunio/documentation/BAPI-input.png){:class="img-responsive"}

!!! tip
	To use tables as input parameters, see [Table Parameters](#table-parameters).

### Export Parameters
Export parameters represent the output values sent from SAP back to the client after the execution of a Function Module.
In the tab **Export** you can select the items you want to add to the output of the Function Module / BAPI and change their name: 

![BAPI export parameters](../../assets/images/yunio/documentation/BAPI-output.png){:class="img-responsive"}

!!! tip
	To use tables as output parameters, see [Table Parameters](#table-parameters).
	
### Changing Parameters

Changing parameters represent parameters that can be used for input and output. In the tab **Changing** you can define the changing parameters.

### Table Parameters

Table parameters are parameters presented in a table structure consisting of multiple rows. Tables can be used for input and output.
In the tab **Tables** you can define table parameters for importing and exporting data into and from an SAP Function Module or BAPI.

#### Tables as Input Parameters

Select tables fields as input parameters for the service using the drop-down list next to the table field:

|  Input  |  Description   |  
|----------|-------------|
| *Supplied by Caller* | The item becomes available as a parameter in the request body of the service and can be set at runtime. |
| *Default <br>(defined in SAP)* | The item uses the default values from SAP. This is the default setting. |
| *Constant* | The item uses the value that is entered in the **Value** field.|

#### Tables as Output Parameters

- Select the table fields you want to add to the output of the service.
- Optional: change the name of the output parameter. Table parameters use the following naming format: `[Table name].[column name]`.


![BAPI table](../../assets/images/yunio/documentation/BAPI-table.png){:class="img-responsive"}
