---
title: Access Stock Overview using Batch Input
description: Managing and Executing Batch Input Transactions
---

This sample shows how to execute the SAP transaction MMBE (stock overview) using the *Transaction* class.

### About

In this application the user can enter a material number and the name of a plant. <br>
By clicking a button, the SAP GUI is launched and the transaction MMBE (stock overview) is executed to list the entered materials and plants. 

![Call-Transaction-002]( site:assets/images/erpconnect/samples/Call-Transaction-002.png){:class="img-responsive" width="300px" }

!!! tip
    The installation package of ERPConnect includes the *Transaction-Recorder* tool.
    This tool records transactions and implements them to code, see [Transaction-Recorder](../documentation/transactions/transaction-recorder.md).


### Call Transaction MMBE

{% include "erpconnect/code/transaction-mmbe.md" %}

Output:

![MMBE1_kl]( site:assets/images/erpconnect/samples/Call-Transaction-003.png){:class="img-responsive"}
