---
title: Execute Transactions 
description: Managing and Executing Transactions- The Class Transaction
---

The following sample application shows how to use the *Transaction* class to execute an SAP transaction.<br>

### Execute SAP Transactions 

Follow the steps below to run SAP transactions from ERPConnect:

1. Connect to the SAP system using `R3Connection`. Set the `UseGui` property to *true*. 
2. Create a transaction object using `Transaction()`.
3. Specify the SAP transaction code using `TCode`.
4. Optional: add batch steps using `AddStep`.
5. Launch the SAP GUI and execute the SAP transaction using `Execute`.

!!! tip
    The installation package of ERPConnect includes the *Transaction-Recorder* tool.
    This tool records transactions and implements them to code, see [Transaction-Recorder](./transaction-recorder.md).

{% include "erpconnect/code/transaction-mmbe.md" %}

Output:

![Call-Transaction-003]( site:assets/images/erpconnect/Call-Transaction-003.png){:class="img-responsive"  }


****

#### Related Links
- [Samples: Access Stock Overview using Batch Input](../../samples/access-stock-overview-using-batch-input.md)
- [Samples: Create New Customers using Batch Input](../../samples/create-new-customers-using-batch-input.md)
- [Samples: Create Purchase Orders using Batch Input and Background Processing](../../samples/create-purchase-orders-using-batch-input.md)
