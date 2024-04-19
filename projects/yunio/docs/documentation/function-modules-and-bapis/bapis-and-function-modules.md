---
title: Create a BAPI Service
description: How to create a web service that executes function modules / BAPIs
---

The following section shows how to use the {{ bapi }} {{ component }}.

### Look up a Function Module / BAPI

1. [Create a new service](../../getting-started.md/#connect-to-sap) of {{ component }} {{ bapi }}. 
2. In the *Search SAP function modules* menu, enter the name of a Function Module / BAPI or a function groups :number-1:. Use wildcards (*) if needed.<br>
![Look-Up-Function-Module](../../assets/images/yunio/search-bapi.png){:class="img-responsive" width="750px"}
3. Click **[Search]** to display the search results.
4. Select a source file from the list of available search results :number-2:. 

The settings of the {{ bapi }} {{ component }} open.

### Next Steps

The settings for *Function Module* consist of the following subsections:

- [Function Module](#function-module) (4) displays the name and description of the selected Function Module / BAPI.
- [Advanced Settings](#advanced-settings) (5) define how data is committed to and from SAP.
- [Function Module Interface Parameters](#function-module-interface-parameters) (6) define what data is committed to and from SAP.

![yunIO-function-module](../../assets/images/yunio/bapi-settings.png){:class="img-responsive"}


- To add an item to the output of the Function Module / BAPI, mark the checkbox in the *Output* column.<br>
Optional: you can change the name of the output parameter. Tables must use the following format: `[Table name].[column name]`.

#### How to use Import Parameters in SwaggerHub

Example: The Import Parameter MAXROWS of BAPI_CUSTOMER_GETLIST is set to *Supplied by Caller* and can be parameterized in the request body of the service:<br>
![BAPI export parameters](../../assets/images/yunio/swagger-inspector-parameter.png){:class="img-responsive"}

For more information on parameterizing services, refer to the following knowledge base articles: 
- [Running a yunIO Service in SwaggerHub](https://kb.theobald-software.com/yunio/running-a-yunio-service-in-swagger-hub) 
- [Running a yunIO Service in Postman](https://kb.theobald-software.com/yunio/running-a-yunio-service-in-postman).

*****
#### Related Links
- [Integration Scenarios](./integration)
- [Knowledge Base Article: Integrating a yunIO Service with Power Automate](https://kb.theobald-software.com/yunio/integrating-a-yunio-service-with-power-automate)
