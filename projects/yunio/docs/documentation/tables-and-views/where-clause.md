---
title: WHERE Clause
description: Defining a WHERE Clause to filter table records
---

T### WHERE Clause
A WHERE clause can be used to filter table records, see [SAP ABAP Documentation: SELECT-WHERE](https://help.sap.com/doc/abapdocu_750_index_htm/7.50/en-us/abapwhere.htm).
Enter WHERE clauses manually in *Text mode* or use the [WHERE Clause Editor](#where-clause-editor) in *Editor Mode*.<br>

{% include _content/en/tables/where-clause-syntax.md%}


#### How to use the WHERE Clause in SwaggerHub

The WHERE-Clause can be parameterized in the request body of the service. Example:<br>
![WHERE-Clause in SwaggerHub](../../assets/images/yunio/swagger-inspector.png){:class="img-responsive"}

For more information on parameterizing services, refer to the following knowledge base articles: 
- [Running a yunIO Service in SwaggerHub](https://kb.theobald-software.com/yunio/running-a-yunio-service-in-swagger-hub) 
- [Running a yunIO Service in Postman](https://kb.theobald-software.com/yunio/running-a-yunio-service-in-postman).

{% include _content/en/tables/where-clause-editor.md%}

!!! note
    The WHERE clause is overridden when a WHERE clause is entered in the designated text field or if a WHERE clause is entered in the body of the service definition when running a service.


*****
#### Related Links
- [Integration Scenarios](./integration)
- [Knowledge Base Article: Integrating a yunIO Service with Power Automate](https://kb.theobald-software.com/yunio/integrating-a-yunio-service-with-power-automate)
