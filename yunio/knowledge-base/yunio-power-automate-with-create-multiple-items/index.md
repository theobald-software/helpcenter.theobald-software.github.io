The following article shows how to use yunIO with Microsoft Power Automate to create multiple items in SAP with one service call. Power Automate is a cloud-based process automation service provided by Microsoft. For more Information on Power Automate see [Microsoft Power Automate Documentation](https://docs.microsoft.com/en-us/power-automate/).

### About

The depicted example scenario creates multiple cost centers in the SAP cost center master data. This article guides you through the following process:

- Create a yunIO service that can handle multiple input values.
- Create multiple data sets and that can be used as an input for the yunIO service.\
  In this example, multiple items are passed to the SAP function via an Excel spreadsheet. Other options are SharePoint lists, a Power App with *Gallery Control* for multiple line items, a Nintex Form with a repeating section and others.
- Create a Power Automate workflow that reads and processes data from the input table to run the yunIO service.

### Setup in yunIO

Create a yunIO service that creates cost centers in the SAP cost center master data.

Note

The parameters that are needed to create cost centers are dependent on your customized SAP settings.

1. [Create a service](../../getting-started/#create-a-service) in yunIO. For this example we use the BAPI_COSTCENTER_CREATEMULTIPLE to create multiple cost centers in SAP.
1. Activate **Commit Transaction** in the *Advanced Settings* of the service. This option is mandatory when using BAPI_COSTCENTER_CREATEMULTIPLE.
1. Set the Import Parameter CONTROLLINGAREA to *Supplied by Caller*.
1. Select the table *RETURN* for the output. The data in this table can be used for exception handling.
1. Set the following items of the table COSTCENTERLIST to *Supplied by Caller*:
   - COSTCENTER
   - VALID_FROM
   - VALID_TO
   - PERSON_IN_CHARGE
   - COSTCENTER_TYPE
   - COSTCTR_HIER_GRP
   - COMP_CODE
   - CURRENCY
   - CURRENCY_ISO
   - PROFIT_CTR
   - NAME
1. Click to testrun the service in yunIO . For more information, see [Documentation: Run Services in yunIO](../../documentation/run-services/#run-services-in-yunio).
1. Click to download the service definition .

### Configure a yunIO Custom Connector in Power Automate

To use the service created in [Setup in yunIO](#setup-in-yunio) with Power Apps, it must be available as a custom connector in Power Automate. For information on how to integrate a yunIO service with Power Automate, see [Integrate a yunIO Service with Power Automate](../integrate-a-yunio-service-with-power-automate/).

Note

When integrating services from a local yunIO installation with a cloud hosted platform like Power Automate, a gateway to tunnel the connection is recommended, e.g., the [**Microsoft On-premises data gateway**](https://docs.microsoft.com/en-us/data-integration/gateway/). For more information about yunIO networking settings, see [yunIO Networking Scenarios](../networking/).

### Create Input Data

- Create data sets that include values for all fields in the table COSTCENTERLIST that are set to *Supplied by Caller* in the yunIO service. If needed, download the sample EXCEL file below.
- Upload the data sets to the SharePoint document library or any other location that is accessible for Power Automate.

[Download EXCEL File](../../assets/files/yunio/Create_Multiple_Cost_Centers.xlsx)

### Create a Power Automate Flow for Multiple Items

The following workflow reads and processes data from a table and to create new cost centers in the SAP cost center master data.

1. Create a new workflow.

1. Add a manual trigger to test the workflow when necessary.

1. Add a List rows present in table action to read the input data for the yunIO service. In this example, the data is hosted on SharePoint, see [Create Input Data](#create-input-data).

1. Add an *Initialize variable* action to create an array that can store multiple items. Leave **Value** empty.

1. Add an *Apply to each* action to incrementally fill the initialized array with input data. Select the list of items from the SharePoint table as the input for the *Apply to each* action.

1. Add a *Compose* action to *Apply to each*. Use *Compose* to create the body of the yunIO web service that contains the table parameters and to map the input data.

   ```text
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

1. Add an *Append to array variable* action to *Apply to each*. Select the initialized array and add the output of the *Compose* action to **Value**.

1. Add the yunIO custom connector for creating cost centers after the *Apply to each* action.\
   Enter a value for the import parameter CONTROLLINGAREA and assign the filled array variable to the table parameter COSTCENTERLIST.

1. Optional: Add an email notification action to get notified about the newly created cost centers.

1. Test the workflow.\
   Check if the workflow steps are successfully executed one after the other.\
   Check if the cost centers from the input data sets are created in SAP (table CSKS).

______________________________________________________________________

#### Related Links

- [Youtube Tutorial: SAP process automation - Power Automate SAP Connector](https://youtu.be/k_yL8Bphfus)
- [Microsoft Community Post: Example for Item Arrays](https://powerusers.microsoft.com/t5/Building-Flows/Build-JSON-object/m-p/113188#M11041)
- [Getting Started: Run and Integrate Services](../../getting-started/#run-services)
