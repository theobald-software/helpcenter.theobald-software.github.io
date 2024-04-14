---
title: Create a BAPI Service
description: How to create a web service that executes function modules / BAPIs
---

The following section shows how to use the {{ bapi }} {{ component }}.


### Create a new Service

## Look up a Function Module / BAPI

1. Create a new *Service* of type *Function Module / BAPI*.
2. Click **[Save and edit]**. The *Search Function Module* menu opens.
3. Enter the name of a Function Module or BAPI in the fields **Search by name** (1) or search for function groups. You can use wildcards (*) if needed.<br>
![Look-Up-Function-Module](../../assets/images/yunio/search-bapi.png){:class="img-responsive" width="750px"}
4. Click **[Search]** (2) to display the search results.
5. Select a source file from the list of available search results (3). The settings of *Function Module / BAPI* open automatically.<br>

## Settings
The settings for *Function Module* consist of the following subsections:

- [Function Module](#function-module) (4) displays the name and description of the selected Function Module / BAPI.
- [Advanced Settings](#advanced-settings) (5) define how data is committed to and from SAP.
- [Function Module Interface Parameters](#function-module-interface-parameters) (6) define what data is committed to and from SAP.

![yunIO-function-module](../../assets/images/yunio/bapi-settings.png){:class="img-responsive"}


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
