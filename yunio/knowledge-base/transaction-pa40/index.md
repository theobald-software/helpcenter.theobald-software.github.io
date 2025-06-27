The following article shows how to use the integration type *Transaction* with transaction PA40 in yunIO.\
The depicted example application uses the transaction PA40 to define personnel actions in SAP.

### Prerequisites

The SAP connection assigned to a transaction service must use an SAP dialog user with enough access rights to edit customer master data.

Tip

The transaction feature of yunIO offers the same functionalities as the SAP GUI.

### Create a new Employee in SAP

The depicted example application uses a yunIO service to create a new employee in SAP.

Note

The parameters that are needed to create new employees are dependent on your customized SAP settings.

1. Create a new Service with the integration type *Transaction*. For more information on creating a service, see [Create a Service](../../getting-started/#create-a-service).
1. In the transaction service enter the transaction PA40 and press **[Start]**. A replicated SAP GUI of the transaction PA40 is displayed.
1. Enter a start date for the new employee in the format `DD.mm.YYYY`. This input can be replaced with a runtime parameter after the transaction is recorded.
1. Select the action type **Hiring**.
1. Click **Execute** to execute the action and continue to the next screen. All actions are logged in the *GUI Steps* section of the UI.
1. Fill in the data of the new employee.
1. Click **[Submit]** to check if the input is valid.
1. Click **[Save]** to save the employee data in SAP and to continue to the next screen.
1. Optional: If a pop-op window opens in SAP, the message of the pop-up window is displayed in yunIO. Click **[Continue]** to close any pop-up windows and continue to the next screen.
1. Once all necessary data is entered, click **[Infotype] > [Exit]** to stop the input. Example:
1. Click **[Save]** to save your actions.\
   Alternatively, click **[Stop]** to start parameterizing, see [Documentation: Parameterize Transactions](../../documentation/transactions/#parameterize-transactions).
1. Copy the URL of the service definition ( icon) or download the service definition ( icon) to integrate the service in your workflow. For information on how to use yunIO services in Power Automate or Nintex, see [Integrate a yunIO Service with Power Automate](../integrate-a-yunio-service-with-power-automate/) or [Integrate a yunIO Service with Nintex](../integrate-a-yunio-service-with-nintex/).

Note

When using *Transaction*, warnings and error messages from SAP are displayed in yunIO. These messages are not yunIO specific and should be treated accordingly.

______________________________________________________________________

#### Related Links

- [Documentation: Transactions](../../documentation/transactions/)
- [Documentation: Parameterize Transactions](../../documentation/transactions/#parameterize-transactions)
