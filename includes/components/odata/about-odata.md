
### About OData Services

The {{ odata }} {{ component }} in {{ productName }} consumes the data provided by SAP OData services.
The OData (Open Data) protocol defines a set of rules to create, edit and consume resources through RESTful interfaces (HTTP requests).
Furthermore, the OData protocol describes the data and the data model, meaning the data has its respective metadata, including the following items:
- Column name
- Description
- Length 
- Data type
<!--- OData can also be used to track changes (deltas), create and run procedures, and send asynchronous/batch requests. -->

OData services can be build in SAP on-premise systems using the [SAP Gateway Service Builder](https://help.sap.com/docs/SAP_NETWEAVER_AS_ABAP_751_IP/68bf513362174d54b58cddec28794093/cddd22512c312314e10000000a44176d.html).
On SAP cloud systems, the OData services are accessible via [Communication Arrangements](https://learning.sap.com/learning-journeys/implement-sap-s-4hana-cloud-public-edition-for-sourcing-and-procurement/setting-up-communication-management_a913171c-c96d-47a9-81ec-dc9ee8754320).

The {{ odata }} {{ component }} supports [OData V2](https://www.odata.org/documentation/odata-version-2-0/overview/) and [OData V4](https://www.odata.org/documentation/).

!!! tip
	For information on how to create OData services that provide ODP based data, refer to the [Knowledge Base Article: Create OData Services using the SAP Gateway Builder](../../knowledge-base/create-odata-services-using-the-sap-gateway-builder.md).
