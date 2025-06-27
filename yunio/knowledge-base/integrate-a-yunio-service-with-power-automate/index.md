The following article shows how to integrate a yunIO service with Microsoft Power Automate.

Power Automate is a cloud-based process automation service provided by Microsoft. The platform can be used to create automated workflows between different cloud apps and services that synchronize and collect data, get notifications, start approvals, and more. For more Information on Power Automate see [Microsoft Power Automate Documentation](https://docs.microsoft.com/en-us/power-automate/).

### Setup in yunIO

1. [Create a service](../../getting-started/#create-a-service) in yunIO. For this example we use the BAPI SD_RFC_CUSTOMER_GET to search and extract customer data from SAP. The service has the following settings:
1. Set the Import Parameter NAME1 to *Supplied by Caller*.
1. Select all fields in the Table *CUSTOMER_T* for the output.
1. Click to testrun the service in yunIO . For more information, see [Documentation: Run Services in yunIO](../../documentation/run-services/#run-services-in-yunio).
1. Click to download the service definition .

### Configure a yunIO Custom Connector in Power Automate

Note

When integrating services from a local yunIO installation with a cloud hosted platform like Power Automate, a gateway to tunnel the connection is recommended, e.g., the [**Microsoft On-premises data gateway**](https://docs.microsoft.com/en-us/data-integration/gateway/). For more information about yunIO networking settings, see [yunIO Networking Scenarios](../networking/).

1. Open the section **Data > Custom Connectors** in Power Automate and click on **+ New custom connector**.
1. Click **Import an OpenAPI file** and give the connector a name of your choice. Select the service definition from [Setup in yunIO](#setup-in-yunio) from your hard drive and click **Continue**.
1. In the **General** tab you can define general information for the custom connector.
1. With **Upload** you can upload a connector icon of your choice. Defining an alternative icon background color or a service description is optional.
1. If you use an on-premises data gateway, activate the checkbox **Connect via on-premises gateway**.
1. **Scheme**: With [TLS enabled](../../documentation/server-settings/#transport-layer-security) in the yunIO server settings, the HTTPS scheme is pre-selected. In this example TLS is disabled, so the HTTP scheme is set.
1. Under **Host** the host address for the yunIO service consumption with its respective port is preset. For local installations the host address is `localhost:[port]`.
1. The **Base URL** represents extensions of the REST service URL that is triggered by the custom connector.
1. In the **Security** tab you can select the authentication type for service consumption.
1. *No authentication* is pre-set. This means that there is no authentication required by users calling the connector.
1. If [*Request credentials from callers when running services*](../../documentation/sap-connection/settings/#authentication) is enabled in the yunIO connection settings, you can also select *Basic authentication*. This means that the SAP user name and password used for the SAP connection, must be stored in the Connection Settings defined in the [**Test** tab](#test-the-service).
1. The depicted example uses *Basic authentication* and labels the parameters *SAP User* and *Password*.
1. The **Definition** tab gives an overview about the yunIO service definition. No changes necessary. This also applies to the **Code (Preview)** tab.

Note

Before the service can be tested in the **Test** tab, the custom connector must be published with **Create connector**.

### Test the Service

1. Navigate to the **Test** tab of the custom connector.
1. Create a connection with **+ New connection**.
1. Enter the credentials of the SAP user you have defined in the yunIO connection settings. If you select to connect via an on-premises gateway in the *General* tab, select your gateway instance.
1. Confirm the settings with **Create connection**.
1. Enter valid import values for the parameters you defined as *Supplied by caller* in the yunIO service settings .
1. Click **Test operation** .
1. Check the SAP response displayed in the request body of the custom connector .

Tip

For services calling Function Modules or BAPIs that use tables or structured input information, switch **Raw Body** off to get a better structured input screen.

### Use the Service in a Power Automate Flow

After a connector is successfully tested, it can be used in a Flow.

1. Add a new action to the Flow and search for the name of the custom connector.
1. Enter values in the input fields of the custom connector.

______________________________________________________________________

#### Related Links

- [Youtube Tutorial: SAP process automation - Power Automate SAP Connector](https://www.youtube.com/watch?v=k_yL8Bphfus)
- [yunIO Documentation: Run Services](../../documentation/run-services/)
