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

- [Change Batch Value of an Outbound Delivery (BAPI_OUTB_DELIVERY_CHANGE)](../../samples/change-batch-value-of-an-outbound-delivery.md)<br>
- [Change Production Order (CLOI_CHANGES_UPL_31)](../../samples/change-production-order.md)<br>
- [Create Equipment (BAPI_EQMT_MODIFY)](../../samples/create-equipment.md)<br>
- [Create Functional Location (BAPI_FUNCLOC_CREATE)](../../samples/create-functional-location.md)<br>
- [Create a Purchase Order (BAPI_PO_CREATE)](../../samples/create-a-purchase-order.md)<br>
- [Download Business Object Attachments (SO_DOCUMENT_READ_API1)](../../samples/download-business-object-attachments.md)<br>
- [Get Purchase Requisition Details (BAPI_REQUISITION_GETDETAIL)](../../samples/get-purchase-requisition-details.md)<br>
- [Get a List of all SAP users (BAPI_HELPVALUES_GET)](../../samples/get-a-list-of-all-users.md)<br>
- [Get an Equipment List (BAPI_EQUI_GETLIST)](../../samples/get-an-equipment-list.md)<br>
- [Look up Purchase Orders (BAPI_PO_GETITEMS)](../../samples/look-up-purchase-orders.md)<br>
- [Post Goods Movement (BAPI_GOODSMVT_CREATE)](../../samples/post-goods-movement.md)<br>
- [Read Material BOM (CSAP_MAT_BOM_READ)](../../samples/read-material-bom.md)<br>
- [Read Personnel Data (BAPI_EMPLOYEE_GETDATA)](../../samples/call-a-bapi-bapi_employee_getdata.md)<br>
- [Read/Write Material Master Data (BAPI_MATERIAL_SAVEDATA)](../../samples/readwrite-material-master-data.md)<br>
- [Reset the Password of an SAP User](../../samples/reset-users-password.md)<br>
- [Retrieve Stock Quantity (BAPI_MATERIAL_AVAILABILITY)](../../samples/retrieve-stock-quantity.md)<br>
- [Retrieve Texts from a Sales Order (RFC_READ_TEXT)](../../samples/retrieve-texts-from-a-sales-order.md)<br>
- [Retrieve the Quantity of a Purchase Order that has already been received (BAPI_PO_GETDETAIL)](../../samples/retrieve-the-quantity-of-a-purchase-order-that-has-already-been-received.md)<br>
- [Upload Documents to the BDS (BDS_BUSINESSDOCUMENT_CREA_TAB)](../../samples/upload-documents-to-the-bds.md)<br>
- [Use the ArchiveLink BAPI to send Barcodes to SAP (BAPI_BARCODE_SENDLIST)](../../samples/use-the-archivelink-bapi-to-send-barcodes-to-sap.md)

