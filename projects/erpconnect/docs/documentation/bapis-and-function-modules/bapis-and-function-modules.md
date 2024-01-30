---
title: Execute BAPIs/Function Modules
description: Samples
---

This section contains a list of available resources for the BAPI/Function Module classes.

### Call BAPIs/Function Modules

Follow the steps below to call BAPIs/Function Modules:

1. Connect to the SAP system using `R3Connection`.
2. Create an RFCFunction object using `CreateFunction`.
3. Provide values to export parameters, table parameters or import parameters for the RFCFunction objects. 
	- Export parameters: <br>
	`Exports["parameter_name"].ParamValue` or<br>
	`Exports["structure_name"].ToStructure()["parameter:name"]`.
	- Table parameters: `Tables["table_name"]["parameter_name"].ParamValue`
	- Import parameters: <br>
	`Imports["parameter_name"].ParamValue` or<br>
	`Imports["structure_name"].ToStructure()["parameter:name"]`.
4. Execute the BAPIs/function modules using `Execute`.


{% include "erpconnect/code/purchase-requisition-details.md" %}

### Samples

For a list of sample applications and sample codes refer to [Samples: BAPIs and Function Modules](../../samples/index.md/#bapis-and-function-modules).