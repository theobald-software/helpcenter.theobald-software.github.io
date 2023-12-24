---
title: Call BAPIs/Function Modules
description: Samples
---

This section contains a list of available resources for the BAPI/Function Module classes.

### Call BAPIs/Function Modules

Follow the steps below to call BAPIs/Function Modules:

1. Connect to the SAP system using `R3Connection`.
2. Create an RFCFunction object using `CreateFunction`.
3. Provide values to export parameters, table parameters or import parameters for the RFCFunction objects. 
	- Export parameters: `Exports["parameter_name"].ParamValue` or `Exports["structure_name"].ToStructure()["parameter:name"]`.
	- Table parameters: `Tables["table_name"]["parameter_name"].ParamValue`
	- Import parameters: `Imports["parameter_name"].ToStructure()`
4. Execute the BAPIs/function modules using `Execute`.

### Samples

- [Change Batch Value of an Outbound Delivery (BAPI_OUTB_DELIVERY_CHANGE)](../../samples/bapis-and-function-modules/change-batch-value-of-an-outbound-delivery.md)<br>
- [Change Production Order (CLOI_CHANGES_UPL_31)](../../samples/bapis-and-function-modules/change-production-order.md)<br>
- [Create Equipment (BAPI_EQMT_MODIFY)](../../samples/bapis-and-function-modules/create-equipment.md)<br>
- [Create Functional Location (BAPI_FUNCLOC_CREATE)](../../samples/bapis-and-function-modules/create-functional-location.md)<br>
- [Create a Purchase Order (BAPI_PO_CREATE)](../../samples/bapis-and-function-modules/create-a-purchase-order.md)<br>
- [Download Business Object Attachments (SO_DOCUMENT_READ_API1)](../../samples/bapis-and-function-modules/download-business-object-attachments.md)<br>
- [Get Purchase Requisition Details (BAPI_REQUISITION_GETDETAIL)](../../samples/bapis-and-function-modules/get-purchase-requisition-details.md)<br>
- [Get a List of all SAP users (BAPI_HELPVALUES_GET)](../../samples/bapis-and-function-modules/get-a-list-of-all-users.md)<br>
- [Get an Equipment List (BAPI_EQUI_GETLIST)](../../samples/bapis-and-function-modules/get-an-equipment-list.md)<br>
- [Look up Purchase Orders (BAPI_PO_GETITEMS)](../../samples/bapis-and-function-modules/look-up-purchase-orders.md)<br>
- [Post Goods Movement (BAPI_GOODSMVT_CREATE)](../../samples/bapis-and-function-modules/post-goods-movement.md)<br>
- [Read Material BOM (CSAP_MAT_BOM_READ)](../../samples/bapis-and-function-modules/read-material-bom.md)<br>
- [Read Personnel Data (BAPI_EMPLOYEE_GETDATA)](../../samples/bapis-and-function-modules/call-a-bapi-bapi_employee_getdata.md)<br>
- [Read/Write Material Master Data (BAPI_MATERIAL_SAVEDATA)](../../samples/bapis-and-function-modules/readwrite-material-master-data.md)<br>
- [Reset the Password of an SAP User](../../samples/bapis-and-function-modules/reset-users-password.md)<br>
- [Retrieve Stock Quantity (BAPI_MATERIAL_AVAILABILITY)](../../samples/bapis-and-function-modules/retrieve-stock-quantity.md)<br>
- [Retrieve Texts from a Sales Order (RFC_READ_TEXT)](../../samples/bapis-and-function-modules/retrieve-texts-from-a-sales-order.md)<br>
- [Retrieve the Quantity of a Purchase Order that has already been received (BAPI_PO_GETDETAIL)](../../samples/bapis-and-function-modules/retrieve-the-quantity-of-a-purchase-order-that-has-already-been-received.md)<br>
- [Upload Documents to the BDS (BDS_BUSINESSDOCUMENT_CREA_TAB)](../../samples/bapis-and-function-modules/upload-documents-to-the-bds.md)<br>
- [Use the ArchiveLink BAPI to send Barcodes to SAP (BAPI_BARCODE_SENDLIST)](../../samples/bapis-and-function-modules/use-the-archivelink-bapi-to-send-barcodes-to-sap.md)

