---
title: Xtract BAPI
icon: component/bapi
description: Information about the extraction type Function Module / BAPI
---

This page shows how to use the {{ bapi }} {{ component }}.<br>
The {{ bapi }} {{ component }} can be used to parameterize and execute SAP function modules and BAPIs for automation.

{% include "/components/bapis-and-function-modules/about-bapis.md" %}

{% include "/components/bapis-and-function-modules/support-disclaimer.md" %}

{% include "components/bapis-and-function-modules/prerequisites.md" %}

{% include "/components/bapis-and-function-modules/auth-warning.md" %}

{% include "components/xis-new.md"  %}

{% include "/components/bapis-and-function-modules/define-a-bapi-extraction.md" %}

### Custom Properties of {{ bapi }}
The *Custom Properties* are properties that are unique to the {{ component }}.
When parameterizing the component using SSIS variables, the *Custom Properties* are overwritten.

The *Custom Properties* of the {{ bapi }} {{ component }} are displayed in the "Properties" window.

![BAPI Properties](../../assets/images/documentation/components/bapi/xis-bapi-properties.png)

#### Commit Transaction 
Some SAP Function Modules require calling the function module BAPI_TRANSACTION_COMMIT to successfully update data in the database, e.g., BAI_PO_CREATE. 
To automatically call BAPI_TRANSACTION_COMMIT after the selected Function Module / BAPI is processed, aset this option to *true*.

****
#### Related Links
- [Knowledge Base Article: Write CATS Data to SAP](../../knowledge-base/write-cats-data-to-sap.md)
- [Knowledge Base Article: Write Product Data to SAP](../../knowledge-base/write-product-data-to-sap.md)
