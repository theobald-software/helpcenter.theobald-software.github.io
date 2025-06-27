The following article shows how to integrate a yunIO services via the Nintex Gateway.\
The Nintex Gateway is an on-premises application that enables Nintex Automation Cloud to access on-premises resources.

### Prerequisites

- Install and configure the [Nintex Gateway](https://help.nintex.com/en-US/nwc/Content/Gateway/InstallAndConfigure.htm).
- Make sure that the Nintex Gateway has a valid API key for authentication.
- Install yunIO version 1.26.3 or higher.
- Set up Basic Authentication in yunIO, see [Documentation: Access Restrictions](../../documentation/access-restrictions/).

### Setup in yunIO

1. [Create a service](../../getting-started/#create-a-service) in yunIO. The depicted example uses the BAPI SD_RFC_CUSTOMER_GET to search and extract customer data from SAP.

1. Click to testrun the service in yunIO . For more information, see [Documentation: Run Services in yunIO](../../documentation/run-services/#run-services-in-yunio).

1. Navigate to **Settings** and select *Nintex Gateway* as the **OpenAPI Target Kind** to add predefined Nintex Gateway properties to the service definition.

1. Navigate to **Services** and click to download the service definition .

1. Open the service definition and check if the following properties are available at the end of the service definition:

   ```json
   "securityDefinitions": {
           "basic": {
               "type": "basic",
               "x-ntx-connection-properties": {
                   "type": "object",
                   "required": [
                       "x-ntx-gateway-id",
                       "x-ntx-gateway-apikey",
                       "x-ntx-gateway-xtension-baseurl",
                       "username",
                       "password"
                   ],
                   "properties": {
                       "x-ntx-gateway-id": {
                           "type": "string",
                           "title": "Select Nintex Gateway"
                       },
                       "x-ntx-gateway-apikey": {
                           "type": "string",
                           "title": "Nintex Gateway API key"
                       },
                       "x-ntx-gateway-xtension-baseurl": {
                           "type": "string",
                           "title": "On-premises service URL",
                           "description": "Base URL of the web service.",
                           "pattern": "^(https?:\/\/[^\/?#]+)(?:[\/]|\/.+|)$"
                       },
                       "username": {
                           "type": "string",
                           "title": "On-premises application username"
                       },
                       "password": {
                           "type": "string",
                           "title": "On-premises application password"
                       }
                   }
               }
           }
       },
       "security": [
           {
               "basic": []
           }
       ],
       "x-ntx-render-version": 2,
       "x-ntx-host": "{x-ntx-gateway-uri}"
   }

   ```

### Configure a yunIO Xtension in Nintex

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

### Configure a yunIO Connection in Nintex

1. Click **Connections** in the dashboard to open the Connections page .

1. Click **[Add Connection]** in the Connector list .

1. Select the yunIO connector from [Configure a yunIO Xtension in Nintex](#configure-a-yunio-xtension-in-nintex).

1. Click **[Next]**.

1. Configure the connection:

   - **Connection name** - enter a name to identify the connection.
   - **Select Nintex Gateway** - select your Nintex Gateway.
   - **Nintex Gateway API key** - enter a valid API key of your Nintex Gateway.
   - **On-premises service URL** - enter the base URL of your yunIO service, including the HTTPS.
   - **On-premises application username** - enter your yunIO username.
   - **On-premises application password** - enter your yunIO password.

1. Click **[Connect]**.

### Use the yunIO Service in a Nintex Workflow

After an Xtension and a Connection is created, the yunIO service can be used in a workflow.

1. Drag and drop the yunIO Xtension from [Configure a yunIO Xtension in Nintex](#configure-a-yunio-xtension-in-nintex) into the workflow .
1. Select the connection from [Configure a yunIO Connection in Nintex](#configure-a-yunio-connection-in-nintex) .
1. Parameterize the input fields .

______________________________________________________________________

#### Related Links

- [Nintex Documentation: Integrate with Theobald yunIO via Nintex Gateway](https://help.nintex.com/en-US/xtensions/04_Reference/Examples/EXM_04SAPTheobaldyunIO.htm)
- [Nintex Gateway](https://help.nintex.com/en-us/nwc/Content/Gateway/InstallAndConfigure.htm)
