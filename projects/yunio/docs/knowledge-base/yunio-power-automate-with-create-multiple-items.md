---
title: How to use yunIO with Power Automate to create multiple items in SAP
description: How to use yunIO with Power Automate to create multiple items in SAP
---

The following article shows how to use yunIO with Microsoft Power Automate to create multiple items in SAP with one service call.<br>
Power Automate is a cloud-based process automation service provided by Microsoft. For more Information on Power Automate see [Microsoft Power Automate Documentation](https://docs.microsoft.com/en-us/power-automate/).

### About
The depicted example scenario creates multiple cost centers in the SAP cost center master data. This article guides you through the following process:
- Create a yunIO service that can handle multiple input values.
- Create multiple data sets and that can be used as an input for the yunIO service.<br>
In this example, multiple items are passed to the SAP function via an Excel spreadsheet. 
Other options are SharePoint lists, a Power App with *Gallery Control* for multiple line items, a Nintex Form with a repeating section and others.
- Create a Power Automate workflow that reads and processes data from the input table to run the yunIO service.

### Creating a Service in yunIO

Create a yunIO service that creates cost centers in the SAP cost center master data.

!!! note
    The parameters that are needed to create cost centers are dependent on your customized SAP settings.

1. [Create a service](../getting-started.md/#create-a-service) in yunIO. For this example we use the BAPI_COSTCENTER_CREATEMULTIPLE to create multiple cost centers in SAP.
2. Activate **Commit Transaction** in the *Advanced Settings* of the service.
This option is mandatory when using BAPI_COSTCENTER_CREATEMULTIPLE.<br>
![service-multiple-items](../assets/images/yunio/articles/service-multiple-items.png){:class="img-responsive" width="800px"}
3. Set the Import Parameter CONTROLLINGAREA to *Supplied by Caller*.
4. Select the table *RETURN* for the output. The data in this table can be used for exception handling.
5. Set the following items of the table COSTCENTERLIST to *Supplied by Caller*:<br>
	- COSTCENTER<br>
	- VALID_FROM<br>
	- VALID_TO<br>
	- PERSON_IN_CHARGE<br>
	- COSTCENTER_TYPE<br>
	- COSTCTR_HIER_GRP<br>
	- COMP_CODE<br>
	- CURRENCY<br>
	- CURRENCY_ISO<br>
	- PROFIT_CTR<br>
	- NAME<br>
6. Click :yunio-run: to testrun the service in yunIO :number-1:. For more information, see [Documentation: Running Services in yunIO](../documentation/run-services.md/#run-services-in-yunio).
7. Click :yunio-run-download: to download the service definition :number-2:.<br>
![yunio-Services-Function-Download](../assets/images/yunio/articles/yunio-run-services-function-download.png){:class="img-responsive" }

### Configuring a yunIO Custom Connector in Power Automate

To use the service created in [Creating a Service in yunIO](#creating-a-service-in-yunio) with Power Apps, it must be available as a custom connector in Power Automate. 
For information on how to integrate a yunIO service with Power Automate, see [Integrating a yunIO Service with Power Automate](integrating-a-yunio-service-with-power-automate.md). 

!!! note
    When integrating services from a local yunIO installation with a cloud hosted platform like Power Automate, a gateway to tunnel the connection is recommended, e.g., the [**Microsoft On-premises data gateway**](https://docs.microsoft.com/en-us/data-integration/gateway/).
    For more information about yunIO networking settings, see [yunIO Networking Scenarios](networking.md).

### Creating Input Data 

- Create data sets that include values for all fields in the table COSTCENTERLIST that are set to *Supplied by Caller* in the yunIO service.
If needed, download the sample EXCEL file below.
- Upload the data sets to the SharePoint document library or any other location that is accessible for Power Automate.

[:material-download-circle: Download EXCEL File](../assets/files/yunio/Create_Multiple_Cost_Centers.xlsx){ .md-button }

### Creating a Power Automate Flow for Multiple Items 

The following workflow reads and processes data from a table and to create new cost centers in the SAP cost center master data.
1. Create a new workflow.
2. Add a manual trigger to test the workflow when necessary.
3. Add a List rows present in table action to read the input data for the yunIO service. In this example, the data is hosted on SharePoint, see [Creating Input Data](#creating-input-data).<br>
![Power-Automate-Read-Data](../assets/images/yunio/articles/Power-Automate-Read-Data.png){:class="img-responsive" width="800px"}
4. Add an *Initialize variable* action to create an array that can store multiple items. Leave **Value** empty.<br>
![Power-Automate-Variable](../assets/images/yunio/articles/Power-Automate-Variable.png){:class="img-responsive" width="800px"}
5. Add an *Apply to each* action to incrementally fill the initialized array with input data. 
Select the list of items from the SharePoint table as the input for the *Apply to each* action.
6. Add a *Compose* action to *Apply to each*. 
Use *Compose* to create the body of the yunIO web service that contains the table parameters and to map the input data.<br>
```
{
  "COSTCENTER": "",
  "VALID_FROM": "",
  "VALID_TO": "",
  "PERSON_IN_CHARGE": "",
  "COSTCENTER_TYPE": "",
  "COSTCTR_HIER_GRP": "",
  "COMP_CODE": "",
  "PROFIT_CTR": "",
  "NAME": ""
}
```
![Power-Automate-Array](../assets/images/yunio/articles/Power-Automate-Array.png){:class="img-responsive" width="800px"}
7. Add an *Append to array variable* action to *Apply to each*. 
Select the initialized array and add the output of the *Compose* action to **Value**.
8. Add the yunIO custom connector for creating cost centers after the *Apply to each* action.<br>
Enter a value for the import parameter CONTROLLINGAREA and assign the filled array variable to the table parameter COSTCENTERLIST.<br>
![Power-Automate-yunIO-Service](../assets/images/yunio/articles/Power-Automate-yunIO-Service.png){:class="img-responsive" width="800px"}
9. Optional: Add an email notification action to get notified about the newly created cost centers.
10.	Test the workflow.<br>
Check if the workflow steps are successfully executed one after the other.<br>
Check if the cost centers from the input data sets are created in SAP (table CSKS).<br>
![SAP_cost-centers](../assets/images/yunio/articles/SAP_cost-centers.png){:class="img-responsive" width="800px"}

******

#### Related Links
- [Youtube Tutorial: SAP process automation - Power Automate SAP Connector](https://youtu.be/k_yL8Bphfus)
- [Microsoft Community Post: Example for Item Arrays](https://powerusers.microsoft.com/t5/Building-Flows/Build-JSON-object/m-p/113188#M11041)
- [Getting Started: Run and Integrate Services](../getting-started.md/#run-and-integrate-services)

