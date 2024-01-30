---
title: Get Purchase Requisition Details
description: Get Requisition Detail by using BAPI_REQUISITION_GETDETAIL
---

This sample shows how to list detailed data of a purchase requisition using the BAPI BAPI_REQUISITION_GETDETAIL.

### About

To get the processing status of a purchase requisition, send the purchase requisition number to the BAPI.
If the call is successful, the item data is returned in the Table REQUISITION_ITEMS.

Possible processing statuses returned by BAPI_REQUISITION_GETDETAIL:

- N - Not edited
- B - PO created
- A - RFQ created
- K - Contract created
- L - Scheduling agreement created
- S - Service entry sheet created

### Call BAPI_REQUISITION_GETDETAIL

{% include "erpconnect/code/purchase-requisition-details.md" %}

