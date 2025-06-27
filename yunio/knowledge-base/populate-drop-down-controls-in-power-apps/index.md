The following article shows how to integrate yunIO services with Microsoft Power Apps.\
Power Apps is a cloud-based platform to build custom business applications based on different data sources. For more Information on Power Apps, see [Microsoft Power Apps Documentation](https://docs.microsoft.com/en-us/powerapps/).

### About

The following 3 examples for SAP interaction with drop down controls in Power Apps are documented in this article:

- Populating a drop down control with SAP table data without a search filter.
- Populating a drop down control with SAP table data using a search filter.
- Populating a drop down control with SAP data returned from a function module call.

### Setup in yunIO

1. The example applications in this article use multiple yunIO services. Create the following 3 services in yunIO:
   1. Create a Table service to query data from the SAP table MAKT with the following settings:\
      Select the table fields MATNR (Material Number), SPRAS (Language Key) and MAKTX (Material Description) for output. Set the row limit to 100 rows.
   1. Create a Table service to query data from the SAP table CSKT with the following settings:\
      Select the table fields KOSTL (Cost Center), KTEXT (General Name) and LTEXT (Description) for output. Set the row limit to 100 rows.
   1. Create a Function Module service that calls the function SD_RFC_CUSTOMER_GET with the following settings:\
      Set the input parameter NAME1 (Customer's Name) to *Supplied by caller*. Select all fields in the table *CUSTOMER_T* for the output.
1. Click to testrun the service in yunIO . For more information, see [Documentation: Run Services in yunIO](../../documentation/run-services/#run-services-in-yunio).
1. Click to download the service definition .

For more information on how to create services, see [Create a Service](../../getting-started/#create-a-service).

Note

In Power Apps every data source is limited to 500 items. Therefore, it is recommended to pre-filter requests to a manageable amount of data e.g., by using a row limit in the yunIO service.

### Configure a yunIO Custom Connector in Power Automate

To use the service created in [Setup in yunIO](#setup-in-yunio) with Power Apps, it must be available as a custom connector in Power Automate. For information on how to integrate a yunIO service with Power Automate, see [Integrate a yunIO Service with Power Automate](../integrate-a-yunio-service-with-power-automate/).

Note

When integrating services from a local yunIO installation with a cloud hosted platform like Power Automate, a gateway to tunnel the connection is recommended, e.g., the [**Microsoft On-premises data gateway**](https://docs.microsoft.com/en-us/data-integration/gateway/). For more information about yunIO networking settings, see [yunIO Networking Scenarios](../networking/).

### Integrate yunIO Services in Power Apps

After a connector is successfully tested, it can be used as a data source in Power Apps.

Note

The Power Apps coding syntax is dependent on the configured language settings, e.g., the English `ClearCollect(SAPData,yunIO_1.ReadCSKT());` becomes `ClearCollect(SAPData;yunIO_1.ReadCSKT())` for German language users. For more information, see [Microsoft: Formula separators and chaining operator](https://docs.microsoft.com/en-us/power-platform/power-fx/global#formula-separators-and-chaining-operator).

1. Create a new model-driven Power App containing one screen using the Power Apps studio designer.
1. Add three drop down controls and three labels to describe the fields.
1. For the first and the last drop down control add additional text input controls (here *input_sap_material_number* and *input_customers*) for search/filter values.
1. Add the previously created yunIO custom connectors containing the MAKT service, the CSKT service and the CustomerGet service.
1. Customize the fields for populating the drop down controls with SAP values, see the examples below.

### Examples

The depicted examples show how to populate drop down lists with different kinds of data.

The first example queries SAP table data for table CSKT (Cost Center Texts). The drop down control is populated without any search filtering.

1. Use the following code in the *OnSelect* box of the dropdown control in the advanced settings:

   ```text
   ClearCollect(SAPData,yunIO_1.ReadCSKT());

   ```

   With *ClearCollect* a collection with a name of your choice (here *SAPData*) is filled with data from the external data source. The results are displayed when unfolding the drop down control.

1. Use the *Concatenate* function in the field *Items* to concatenate and display more than one table column in the drop down control. The result of the SAP table query, stored in the collection variable *SAPData*, is displayed in the *Value* box as *Result*. In this example the fields KOSTL (cost center) and LTEXT (cost center description) are concatenated and displayed, separated by a space. Other column separators are possible.

   ```text
   Concatenate(SAPData.KOSTL," ",SAPData.LTEXT)

   ```

Tip

You can display a quick preview in the Power Apps studio by clicking **[Alt] + the drop down control**.

The second example queries SAP table data for table MAKT (Material Descriptions). The search field uses a Where Clause to filter the SAP table.

1. Use the following code in the *OnSelect* box of the drop down control in the advanced settings:

   ```text
   ClearCollect(SAPResult,yunIO.MAKTService({whereClause:Concatenate("SPRAS = 'EN' AND MATNR LIKE '",input_sap_material_number.Text,"'")}));

   ```

   With *ClearCollect* a collection with a name of your choice (here *SAPResult*) is filled with data from the external data source. The Where Clause points to the input field *input_sap_material_number* (configured as Text).

1. Use the *Concatenate* function in the field *Items* to concatenate and display more than one table column in the drop down control. The result of the SAP table query, stored in the collection variable *SAPResult*, is displayed in the *Value* box as *Result*. In this example the fields MATNR (material number) and MAKTX (material description are concatenated and displayed, separated by a space. Other column separators are possible.

   ```text
   Concatenate(SAPResult.MATNR," ",SAPResult.MAKTX)  

   ```

Tip

You can also use the *OnChange* field of the text input control for the *ClearCollect* statement. This has the advantage that the drop down control is populated while the search text is entered.

**Ignoring Leading Zeroes:**\
To ignore leading zeroes when using the search filter for MAKT, use the following code for the *ClearCollect* statement:

```text
ClearCollect(SAPResult;yunIO.MAKTService({whereClause:Concatenate("SPRAS = 'DE' AND ( MATNR LIKE '";Substitute(input_sap_material_number.Text;"*";"%");"' OR MAKTX LIKE '";Substitute(input_sap_material_number.Text;"*";"%");"' )")}));;
If(CountRows(SAPResult)=1;Set(varinput_sap_material_number;false)

```

The third example calls the SAP function module SD_RFC_CUSTOMER_GET using an input parameter to display the table output (table CUSTOMER_T) in the drop down control. The input parameter is passed to the function by a separate text input control. In this example the text input control enables searching for customer names (field NAME1).

1. Use the following code in the *OnSelect* box of the drop down control in the advanced settings:

   ```text
   ClearCollect(CustomerGetResult,yunIO_2.postCustomerGet({NAME1:input_customer_name.Text}).CUSTOMER_T);

   ```

   With *ClearCollect* a collection with a name of your choice (her *CustomerGetResult*) is filled with data from the external data source. The input parameter NAME1 points to the text input control *input_customer_name*. There is a reference to the output table CUSTOMER_T at the end of the statement, which allows to select the output fields of that table later on.

1. Use the *Concatenate* function in the field *Items* to concatenate and display more then one table column in the drop down control. The result of the SAP table query, stored in the collection variable *CustomerGetResult*, is displayed in the *Value* box as *Result*. In this example fields NAME1 (customer name) and KUNNR (customer number) are concatenated and displayed, separated by a space. Other column separators are possible.

   ```text
   Concatenate(CustomerGetResult.NAME1," ",CustomerGetResult.KUNNR)

   ```

______________________________________________________________________

#### Related Links

- [Youtube Tutorial: SAP process automation - Power Automate SAP Connector](https://www.youtube.com/watch?v=k_yL8Bphfus&t=2s)
- [Microsoft Documentation: Drop down control](https://docs.microsoft.com/en-us/powerapps/maker/canvas-apps/controls/control-drop-down)
- [Microsoft Documentation: Text input control](https://docs.microsoft.com/en-us/powerapps/maker/canvas-apps/controls/control-text-input)
- [Getting Started: Run and Integrate Services](../../getting-started/#run-services)
