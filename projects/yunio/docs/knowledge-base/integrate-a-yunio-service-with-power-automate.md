---
title: Integrate a yunIO Service with Power Automate
description: Running a yunIO Service with Power Automate
---

The following article shows how to integrate a yunIO service with Microsoft Power Automate.

Power Automate is a cloud-based process automation service provided by Microsoft. 
The platform can be used to create automated workflows between different cloud apps and services that synchronize and collect data, get notifications, start approvals, and more. 
For more Information on Power Automate see [Microsoft Power Automate Documentation](https://docs.microsoft.com/en-us/power-automate/).


### Setup in yunIO

1. [Create a service](../getting-started.md/#create-a-service) in yunIO. For this example we use the BAPI SD_RFC_CUSTOMER_GET to search and extract customer data from SAP. 
The service has the following settings:<br>
- Set the Import Parameter NAME1 to *Supplied by Caller*.
- Select all fields in the Table *CUSTOMER_T* for the output.
2. Click :yunio-run: to testrun the service in yunIO :number-1:. For more information, see [Documentation: Run Services in yunIO](../documentation/run-services.md/#run-services-in-yunio).
3. Click :yunio-run-download: to download the service definition :number-2:.<br>
![yunio-Services-Function-Download](../assets/images/yunio/articles/yunio-run-services-function-download.png){:class="img-responsive" }


### Configure a yunIO Custom Connector in Power Automate

!!! note
    When integrating services from a local yunIO installation with a cloud hosted platform like Power Automate, a gateway to tunnel the connection is recommended, e.g., the [**Microsoft On-premises data gateway**](https://docs.microsoft.com/en-us/data-integration/gateway/).
    For more information about yunIO networking settings, see [yunIO Networking Scenarios](networking.md).

1. Open the section **Data > Custom Connectors** in Power Automate and click on **+ New custom connector**.
2. Click **Import an OpenAPI file** and give the connector a name of your choice. Select the service definition from [Setup in yunIO](#setup-in-yunio) from your hard drive and click **Continue**. 
3. In the **General** tab you can define general information for the custom connector. <br> 
- With **Upload** you can upload a connector icon of your choice. Defining an alternative icon background color or a service description is optional.  
- If you use an on-premises data gateway, activate the checkbox **Connect via on-premises gateway**.<br>
- **Scheme**: With [TLS enabled](../documentation/server-settings.md/#transport-layer-security) in the yunIO server settings, the HTTPS scheme is pre-selected. In this example TLS is disabled, so the HTTP scheme is set.<br> 
- Under **Host** the host address for the yunIO service consumption with its respective port is preset. For local installations the host address is `localhost:[port]`.<br> 
- The **Base URL** represents extensions of the REST service URL that is triggered by the custom connector. <br>
![Power-Automate-Custom-Connector-Ceneral.png](../assets/images/yunio/articles/power-automate-custom-connector-general.png){:class="img-responsive"}
4. In the **Security** tab you can select the authentication type for service consumption. <br> 
- *No authentication* is pre-set. This means that there is no authentication required by users calling the connector. <br>
- If [*Request credentials from callers when running services*](../documentation/sap-connection/settings.md/#authentication) is enabled in the yunIO connection settings, you can also select *Basic authentication*. 
This means that the SAP user name and password used for the SAP connection, must be stored in the Connection Settings defined in the [**Test** tab](#test-the-service).
- The depicted example uses *Basic authentication* and labels the parameters *SAP User* and *Password*.<br>
![Power-Automate-Custom-Connector-Security-Basic.png](../assets/images/yunio/articles/power-automate-custom-connector-security-basic.png){:class="img-responsive"} 
5. The **Definition** tab gives an overview about the yunIO service definition. No changes necessary. This also applies to the **Code (Preview)** tab.

!!! note
    Before the service can be tested in the **Test** tab, the custom connector must be published with **Create connector**.


### Test the Service

1. Navigate to the **Test** tab of the custom connector. <br>
2. Create a connection with **+ New connection**. 
3. Enter the credentials of the SAP user you have defined in the yunIO connection settings. If you select to connect via an on-premises gateway in the *General* tab, select your gateway instance.
4. Confirm the settings with **Create connection**.<br>
![Power-Automate-Custom-Connector-Test-Connection.png](../assets/images/yunio/articles/power-automate-custom-connector-test-connection.png){:class="img-responsive"} 
5. Enter valid import values for the parameters you defined as *Supplied by caller* in the yunIO service settings :number-1:. 
6. Click **Test operation** :number-2:. 
7. Check the SAP response displayed in the request body of the custom connector :number-3:. <bR>
![Power-Automate-Custom-Connector-Test-Operation.png](../assets/images/yunio/articles/power-automate-custom-connector-test-operation.png){:class="img-responsive"} 

!!! tip
    For services calling Function Modules or BAPIs that use tables or structured input information, switch **Raw Body** off to get a better structured input screen.


### Use the Service in a Power Automate Flow
After a connector is successfully tested, it can be used in a Flow. 
1. Add a new action to the Flow and search for the name of the custom connector. <br>
![Power-Automate-Custom-Connector-Flow-Action.png](../assets/images/yunio/articles/power-automate-custom-connector-flow-action.png){:class="img-responsive"} 
2. Enter values in the input fields of the custom connector. <br>
![Power-Automate-Custom-Connector-Flow.png](../assets/images/yunio/articles/power-automate-custom-connector-flow.png){:class="img-responsive"} 

******

#### Related Links
- [Youtube Tutorial: SAP process automation - Power Automate SAP Connector](https://www.youtube.com/watch?v=k_yL8Bphfus)
- [yunIO Documentation: Run Services](../documentation/run-services.md)
