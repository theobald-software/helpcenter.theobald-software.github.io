---
title: Transactions
description: Transactions
---

This section shows how to use the integration type *Transaction*.<br>
Use *Transaction* to access, configure and parameterize SAP transactions for automation.

### Prerequisites
The SAP connection assigned to a transaction service must use an SAP dialog user. 

!!! tip
    The transaction feature offers the same functionality as the SAP GUI.
    Therefore knowing how to navigate the SAP GUI makes it easier to use the transaction feature.

### Record Transactions

1. Create a new service of type *Transaction*.  
2. Enter a transaction code (1). <br>
![transaction](../assets/images/yunio/transaction.png){:class="img-responsive"}
3. Click **[Start]** to run the transaction. Content from the SAP GUI is displayed. 
4. Fill out the input fields as you would in the SAP GUI. Input fields can be parameterized once the transaction is recorded, see [Parameterize Transactions](#parameterize-transactions).
5. Click **[Submit]** (2) to enter your input.
All executed actions are logged in the section *GUI Steps* (3). <br>
![transaction-va02](../assets/images/yunio/transaction-va02.png){:class="img-responsive"}
6. Click **[Save]** once you finished recording.<br>
Alternatively, click **[Stop]** to start parameterizing, see [Parameterize Transactions](#parameterize-transactions).

### Parameterize Transactions

!!! note
    All fields that need to be parameterized must be available in the transaction service as *GUI Steps*. To parameterize a field in a specific tap or menu, the tab or menu must be accessed when recording the transaction.

Follow the steps below to assign input and output parameters to a transaction service. <br>

1. Open the transaction service. 
2. In the *SAP GUI* section click the action you want to parameterize. The corresponding input screen opens.<br>
3. Click on the fields you want to parameterize. The window "Parameterize Element" opens.
All fields that can be parameterized are highlighted in green when hovering over them. <br>
![transaction-actions](../assets/images/yunio/va02param.gif)
4. Select **Input** to override the value when running the service. Fields that are set to **Input** become available as input parameters in the request body of the service.
5. Select **Output** to return the value of this field when running the service. Fields that are set to **Output** become available in the response body of the service.
6. Optional: Under **Parameter name** you can edit the name of the parameter.<br>
![transaction-parameterize](../assets/images/yunio/transaction-parameterize.png){:class="img-responsive"}
7. Click **[OK]** to confirm your input.
8. Click **[Save]** to save your changes.

Input parameters are now accessible in the request body of the service.<br>
Ouput parameters are now accessible in the response body of the service.<br>
![transaction-copy-download](../assets/images/yunio/transaction-swagger-inspector.png){:class="img-responsive"}

#### Skip Popups
When recording a transaction workflow, SAP can display dynamic popup screens. The popup screens can vary depending on input values.<br>
The input parameter `skipPopups` defines how to handle unexpected popup messages that show up at runtime.<br>


When `skipPopups` is set to *true*, the following actions apply:

| Popup in Recording | Popup during a service run | Action |
| :------: |:---: | :--- |
| x | x | The popup is handled like a regular screen. |
| x |  | The service ignores the recorded screen and continues to the next screen. |
|  | x | The popup is confirmed (Return/Enter key). |

### Sample Services

::cards:: cols=4

- title: Transaction IE01
  image: ../assets/images/logos/business-content/material.png
  content: How to create new equipment in SAP.
  url: /../knowledge-base/transaction-ie01
  
- title: Transaction PA40
  image: ../assets/images/logos/business-content/human.png
  content: How to define personnel actions in SAP.
  url: /../knowledge-base/transaction-pa40
  
- title: Transaction VA02
  image: ../assets/images/logos/business-content/finance.svg
  content: How to change sales orders in SAP.
  url: /../knowledge-base/transaction-va02

- title: Transaction XD02
  image: ../assets/images/logos/business-content/human.png
  content: How to change customer data in SAP.
  url: /../knowledge-base/transaction-xd02


::/cards::


****
#### Related Links
- [Knowledge Base Article: Working with Transactions - Table Parameters](https://kb.theobald-software.com/yunio/transaction-table-parameters)