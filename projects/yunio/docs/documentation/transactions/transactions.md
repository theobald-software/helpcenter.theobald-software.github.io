---
title: Create a Transaction Services
description: How to create a web service that executes SAP Transaction
---

This page shows how to use the {{ transaction }} {{ component }}.

### Prerequisites

- A connection to an SAP system is available, see [SAP Connection](../sap-connection/index.md).
- The SAP connection assigned to a transaction service must use an SAP dialog user. 

!!! tip
    The transaction feature offers the same functionality as the SAP GUI.
    Therefore knowing how to navigate the SAP GUI makes it easier to use the transaction feature.

### Record Transactions

1. [Create a new service](../../getting-started.md/#create-a-service) of {{ component }} {{ transaction }}. 
2. Enter a transaction code :number-1:. <br>
![transaction](../../assets/images/yunio/documentation/transaction.png){:class="img-responsive"}
3. Click **[Start]** to run the transaction. Content from the SAP GUI is displayed. 
4. Fill out the input fields as you would in the SAP GUI. Input fields can be parameterized once the transaction is recorded, see [Parameterize Transactions](#parameterize-transactions).
5. Click **[Submit]** to enter your input :number-2:.
All executed actions are logged in the section *GUI Steps* :number-3:. <br>
![transaction-va02](../../assets/images/yunio/documentation/transaction-va02.png){:class="img-responsive"}
6. Click **[Save]** once you finished recording.<br>
Alternatively, click **[Stop]** to start parameterizing, see [Parameterize Transactions](#parameterize-transactions).

### Parameterize Transactions

!!! note
    All fields that need to be parameterized must be available in the transaction service as *GUI Steps*. To parameterize a field in a specific tap or menu, the tab or menu must be accessed when recording the transaction.

Follow the steps below to assign input and output parameters to a transaction service. <br>

1. Open the transaction service. 
2. In the *GUI Steps* section click the action you want to parameterize. The corresponding input screen opens.<br>
3. Click on the fields you want to parameterize. The window "Parameterize Element" opens.
All fields that can be parameterized are highlighted in green when hovering over them. <br>
![transaction-actions](../../assets/images/yunio/documentation/va02param.gif)
4. Select **Input** to override the value when running the service. Fields that are set to **Input** become available as input parameters in the request body of the service.
5. Select **Output** to return the value of this field when running the service. Fields that are set to **Output** become available in the response body of the service.
6. Optional: Under **Parameter name** you can edit the name of the parameter.<br>
![transaction-parameterize](../../assets/images/yunio/documentation/transaction-parameterize.png){:class="img-responsive"}
7. Click **[OK]** to confirm your input.
8. Click **[Save]** to save your changes.

Input parameters are now accessible in the request body of the service :number-1:.<br>
Ouput parameters are now accessible in the response body of the service :number-2:.<br>
![transaction-copy-download](../../assets/images/yunio/documentation/postman-input-transaction.png){:class="img-responsive"}


****
#### Related Links
- [Working with Transactions - Table Parameters](../../knowledge-base/transaction-table-parameters.md)
- [Transaction IE01 - Create Equipment](../../knowledge-base/transaction-ie01.md)
- [Transaction PA40 - Personnel Actions](../../knowledge-base/transaction-pa40.md)
- [Transaction VA02 - Change Sales Order](../../knowledge-base/transaction-va02.md)
- [Transaction XD02 - Change Customer Master Data ](../../knowledge-base/transaction-xd02.md)
