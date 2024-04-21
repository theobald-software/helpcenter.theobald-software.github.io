---
title: Sync Salesforce with SAP using Power Automate and yunIO
description: Sync Salesforce with SAP in near-real-time using power automate and yunIO
---

This article shows how to synchronize a Salesforce account in near-real time with SAP.<br>
In the following scenario, data from Salesforce is used to automatically create a customer account in SAP. 
The newly created SAP customer number is then written back to Salesforce.

### About

This article leads you through all necessary steps to set up the following process:

- When an account in the *Sales Console* of Salesforce is modified, a Power Automate workflow is triggered.
- The workflow checks if the type of the account is set to *Customer - Direct* and if the customer exists in SAP.
- If both conditions are true, a yunIO service that writes customer data from Salesforce to SAP is executed.
- When the customer is created in SAP, the new SAP customer number is written back to the Salesforce sales account.

### Setup in yunIO

yunIO is the connector that reads and writes data from and to SAP.
For more information on yunIO, see [Theobald Software: yunIO](https://theobald-software.com/en/yunio/).

1. [Create an SAP connection](../getting-started.md/#create-a-service) in yunIO. 
2. [Create a service](../getting-started.md/#create-a-service) in yunIO. 
The depicted example uses the integration type *Function Module* for the service.
3. [Look up](../documentation/function-modules-and-bapis/bapis-and-function-modules.md/#look-up-a-function-module-bapi) the standard BAPI BAPI_CUSTOMER_CREATEFROMDATA1 that creates customers in SAP. 
4. Set all import parameters you want to transfer from Salesforce to SAP to *Supplied by Caller* e.g., NAME, CITY, POSTL_COD1, STREET, etc.
5. Select CUSTOMERNO for export. This Export parameter contains the newly created SAP customer number that is written back to Salesforce.<br>
![yunio-Services-Function-Download](../assets/images/yunio/articles/yunio-bapi-createcustomer.png){:class="img-responsive"}
6. Click :yunio-run: to testrun the service in yunIO :number-1:. For more information, see [Documentation: Running Services in yunIO](../documentation/run-services.md/#running-services-in-yunio).
7. Click :yunio-run-download: to download the service definition :number-2:.<br>
![yunio-Services-Function-Download](../assets/images/yunio/articles/yunio-run-services-function-download.png){:class="img-responsive" }

### Setup in Salesforce

Customize your Salesforce account to provide SAP-related fields:
- Create a field *SAP ID*. Once a customer is created in SAP, the customer number is written back into *SAP ID*.
- *Company Code*, *Sales Org*, *Distribution Channel* and *Division* are organization details required to create the SAP customer.
- Create a checkbox that indicates if the customer exists in SAP.

For more information on how to customize fields in Salesforce, see [Salesforce Documentation: Create Custom Fields](https://help.salesforce.com/s/articleView?id=sf.adding_fields.htm&type=5).

!!! note
    Creating *Company Code*, *Sales Org*, *Distribution Channel* and *Division* in Salesforce is optional as they can also be set as static values in Power Automate.

![salesforce_before_sap](../assets/images/yunio/articles/salesforce_before_sap.png){:class="img-responsive" width="900px"}


### Setup in Power Automate

1. Integrate the yunIO service created in [Setup in yunIO](#setup-in-yunio) as a Custom Connector in Power Automate, see [Integrating a yunIO Service with Power Automate](integrating-a-yunio-service-with-power-automate.md#configuring-a-yunio-custom-connector-in-power-automate).
2. Create a new workflow that is triggered when a Salesforce account is modified :number-1:.
3. Check if the account type in Salesforce is set to *Customer - Direct* and if the customer does not yet exist in SAP :number-2:.<br>
If one or both conditions are false, end the workflow :number-3:.
If both conditions are true, execute the yunIO service to write the customer data to SAP :number-4:.<br>
![power-automate-salesforce-conditions](../assets/images/yunio/articles/power-automate-salesforce-conditions.png){:class="img-responsive"}
4. Add the yunIO connector created in step 1 to the workflow and map the customer data from Salesforce to the input parameters of yunIO.<br>
![power-automate-yunio-parameters](../assets/images/yunio/articles/power-automate-yunio-parameters.png){:class="img-responsive"}
5. Check if the SAP customer was created using the yunIO return field TYPE :number-5:. <br>
If TYPE does not equal 'E' (error), the SAP customer number is written back to Salesforce.
6. When updating the Salesforce account, assign the CUSTOMERNO from yunIO to *SAP ID* and set the checkbox *In SAP* to 'Yes' :number-6:.<br>
![power-automate-write-to-salesforce](../assets/images/yunio/articles/power-automate-write-to-salesforce.png){:class="img-responsive"}
7. Optional: Send notifications when a customer is created or log all synchronized Salesforce accounts e.g., in a SharePoint Online list. 
8. Turn on the workflow.


### Triggering the Process

1. Open Salesforce and change the account type from *Prospect* to *Customer - Direct*.
Make sure that the checkbox *In SAP* is deactivated.
2. The Power Automate workflow runs and creates the customer in SAP. <br>
![power-automate-finished](../assets/images/yunio/articles/power-automate-finished.png){:class="img-responsive"}
3. Check if the SAP customer number is set in Salesforce and if the checkbox *In SAP* is active.<br>
![salesforce_after_sap](../assets/images/yunio/articles/salesforce_after_sap.png){:class="img-responsive" width="900px"}
4. Open SAP and look up the customer using the transaction **xd03**. Enter the customer number from Salesforce to look up the customer.<br>
![sap-customer-search](../assets/images/yunio/articles/sap-customer-search.png){:class="img-responsive"}
