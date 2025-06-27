The following article shows how to integrate a yunIO service with Nintex Automation Cloud.

The Nintex Automation Cloud is a cloud-based process automation service provided by Nintex. The platform can be used to create automated workflows between different cloud apps and services that synchronize and collect data, generates documents and more. For more Information on Nintex, see [Nintex Official Website](https://www.nintex.com/).

### Setup in yunIO

1. [Create a service](../../getting-started/#create-a-service) in yunIO. For this example we use the BAPI SD_RFC_CUSTOMER_GET to search and extract customer data from SAP. The service has the following settings:
1. Set the Import Parameter NAME1 to *Supplied by Caller*.
1. Select all fields in the Table *CUSTOMER_T* for the output.
1. Click to testrun the service in yunIO . For more information, see [Documentation: Run Services in yunIO](../../documentation/run-services/#run-services-in-yunio).
1. Click to download the service definition .

### Configure a yunIO Xtension in Nintex

Note

When integrating services from a local yunIO installation with Nintex Automation Cloud, we recommend using the [Nintex Gateway](https://help.nintex.com/en-us/nwc/Content/Gateway/InstallAndConfigure.htm) to tunnel the connection. For more information on how to set up the Nintex Gateway with yunIO, see [Nintex Documentation: Integrate with Theobald yunIO via Nintex Gateway](https://help.nintex.com/en-US/xtensions/04_Reference/Examples/EXM_04SAPTheobaldyunIO.htm).

1. Open your Nintex Automation Cloud tenancy.
1. Click **Xtensions** in the dashboard to open the Xtensions page .
1. Click in the Private connector list .
1. Click **[Choose a file]** . Navigate to the yunIO service definition from [Setup in yunIO](#setup-in-yunio).
1. Wait for the Nintex Automation Cloud to validate the file.
1. Click **[Next]**. Nintex Workflow Cloud detects the basic authentication security template.
1. Click **[Next]**.
1. Edit the **Name** of the Xtension. The entered name becomes the name of the action group in the workflow.
1. Edit the **Description** of the Xtension. This appears in the Private connector list in the Xtensions page.
1. Optional: select or upload an icon for the Xtension.
1. Click **[Publish]** .

### Use the yunIO Xtension in a Nintex Workflow

After an Xtension is created, it can be used in a workflow.

- Drag and drop the yunIO Xtension from [Configure a yunIO Xtension in Nintex](#configure-a-yunio-xtension-in-nintex) into the workflow .
- Parameterize the input fields .

______________________________________________________________________

#### Related Links

- [yunIO Documentation: Run Services](../../getting-started/#run-services)
- [Nintex Documentation: Integrate with Theobald yunIO via Nintex Gateway](https://help.nintex.com/en-US/xtensions/04_Reference/Examples/EXM_04SAPTheobaldyunIO.htm)
- [Nintex Gateway](https://help.nintex.com/en-us/nwc/Content/Gateway/InstallAndConfigure.htm)
