
!!! warning
	**Timeout Error**<br>
	Extractions of large data sets may run into timeouts. 
	This is a known issue that will be fixed in the next update.

### About OData Services

The {{ odata }} {{ component }} in {{ productName }} consumes the data provided by SAP OData services.
You can build OData services in SAP using the [SAP Gateway Service Builder](https://help.sap.com/docs/SAP_NETWEAVER_AS_ABAP_751_IP/68bf513362174d54b58cddec28794093/cddd22512c312314e10000000a44176d.html).

The OData (Open Data) protocol defines a set of rules to create, edit and consume resources through RESTful interfaces (HTTP requests).
Furthermore, the OData protocol describes the data and the data model, meaning the data has its respective metadata, including the following items:
- Column name
- Description
- Length 
- Data type
<!--- OData can also be used to track changes (deltas), create and run procedures, and send asynchronous/batch requests. -->

The {{ odata }} {{ component }} supports [OData V2](https://www.odata.org/documentation/odata-version-2-0/overview/) and [OData V4](https://www.odata.org/documentation/).

