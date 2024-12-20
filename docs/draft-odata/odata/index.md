---
title: OData
description: Extract Data via SAP OData Services
icon: component/odata
status: beta
---

This page shows how to use the {{ odata }} {{ component }}.<br>
The {{ odata }} {{ component }} can be used to extract data provided by SAP OData services.

!!! note
	This {{ component }} ist still in **beta** phase.
	This means, the {{ odata }} {{ component }} is subject to change. 
	Extractions that use the {{ odata }} {{ component }} can stop working with future updates and might require manual changes.
	
### About OData Services

The {{ odata }} {{ component }} in {{ productName }} consumes the data provided by SAP OData services.
You can build OData services in SAP using the [SAP Gateway Service Builder](https://help.sap.com/docs/SAP_NETWEAVER_AS_ABAP_751_IP/68bf513362174d54b58cddec28794093/cddd22512c312314e10000000a44176d.html).

The OData (Open Data) protocol defines a set of rules to create, edit and consume resources through RESTful interfaces (HTTP requests).
Furthermore, the OData protocol describes the data and the data model, meaning the data has its respective metadata, with column name, description, length and data type.
<!--- OData can also be used to track changes (deltas), create and run procedures, and send asynchronous/batch requests. -->

The {{ odata }} {{ component }} supports [OData V2](https://www.odata.org/documentation/odata-version-2-0/overview/) and [OData V4](https://www.odata.org/documentation/)

### Prerequisites

**SAP On-Premise Systems**:<br>
Enable OData services in SAP, see [SAP Help: How to Enable OData Services in SAP S/4HANA](https://help.sap.com/docs/advanced-financial-closing/administration/how-to-enable-odata-services-in-sap-s4hana).
For more information on how to build OData services, see [SAP Learning: Building OData Services with SAP Gateway](https://learning.sap.com/learning-journeys/building-odata-services-with-sap-gateway).

**SAP Cloud Systems**:<br>
Expose SAP OData services to 3rd party systems using Communication Arrangements, see [SAP Learning: Setting up Communication Management](https://learning.sap.com/learning-journeys/implement-sap-s-4hana-cloud-public-edition-for-sourcing-and-procurement/setting-up-communication-management_a913171c-c96d-47a9-81ec-dc9ee8754320).
For more information on predefined OData services in the SAPS/4HANA Public Cloud, see [OData V4 List](https://api.sap.com/products/SAPS4HANACloud/apis/ODATAV4) and [OData V2 List](https://api.sap.com/products/SAPS4HANACloud/apis/ODATA).



{% include "components/xu-bc-new.md" %}


### Look up OData Services

1. In the main window of the {{ component }}, click **[:magnifying-glass:]**. The window “Service Selection” opens.<br>
![Open-Look-Up-ODP](../../assets/images/documentation/components/odata/{{ abbr }}/odata_main-window_add.png){:class="img-responsive"}	
2. In the field **Search pattern**, enter the technical service name of an OData V2 service or the service ID of an OData V4 service :number-1:. 
Use wildcards (*), if needed.<br>
3. Click **[Search]**. Search results are displayed.
![Look-Up-ODP](../../assets/images/documentation/components/odata/odata-lookup.png){:class="img-responsive"}	
4. Click **[:material-greater-than:]** to select a service :number-2:. 
The SAP objects that are available via the service are displayed in the right screen of the menu:
5. Select an SAP object :number-3: and click **[OK]** to confirm.

The application now returns to the main window of the {{ component }}.


### Define the {{ odata }} {{ Component }}

The {{ odata }} {{ component }} offers the following options for data extractions:

1. In the section *Service Fields*, select the items you want to extract.<br>
![Datasource Preview](../../assets/images/documentation/components/odata/{{ abbr }}/define-odata.png){:class="img-responsive"}
2. Click **[Load Preview]** to display a live preview of the first 100 records.
{% if page.meta.product == "xtract-universal" or page.meta.product == "board-connector"%}3. Check the [General Settings](general-settings.md) before running the {{ extraction }}.{% endif %}
3. Click **[OK]** to save the {{ component }}.
{% if page.meta.product == "xtract-for-alteryx" %}4. Optional: Check the column name style and date conversion options in the [tool configuration](tool-configuration.md) of the {{ component }}. {% endif %}


You can now run the {{ extraction }}{% if page.meta.product == "xtract-universal" %}, see [Execute and Automate Extractions](../execute-and-automate/index.md){% elif page.meta.product == "board-connector" %}, see [Run Extractions](../run-extractions.md){% elif page.meta.product == "board-connector" %}, see [Run Extractions](../run-extractions.md){% endif %}.


