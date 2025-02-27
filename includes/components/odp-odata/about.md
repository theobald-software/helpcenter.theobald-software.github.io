
### About ODP via OData


Open Data Protocol (OData) is a web protocol for querying and updating data.
OData can be used to access the [Open Data Provisioning (ODP)](../odp/index.md/#about-odp) framework and extract ODP data, e.g., Hierarchies, Tables, Views, DataSources, etc.


To extract ODP data via OData, a corresponding OData service is required.
The data model of the service specifies, which data sets are accessible and how the data is structured. 
Once the service is registered in the SAP Gateway system, {{ productName }} can consume the service. 


![odp-odata](../../assets/images/documentation/components/odp-odata/odp-odata.png){:width="400px" class="img-responsive"}


For more information, see [SAP Help: ODP-Based Data Extraction via OData](https://help.sap.com/doc/saphelp_nw75/7.5.5/en-US/11/853413cf124dde91925284133c007d/frameset.htm).

!!! tip
	For information on how to create OData services that provide ODP based data, refer to the [Knowledge Base Article: Create OData Services using the SAP Gateway Builder](../../knowledge-base/create-odata-services-using-the-sap-gateway-builder.md).


### Prerequisites

- Alteryx Designer version 2022.3 or higher. To use of {{ odpOdata }} access to the Alteryx **Data Connection Manager (DCM)**, introduced in Alteryx Designer version 2022.3.
- OData services for ODP extractions is available in the SAP system, see [SAP Help: Generating a Service for Extracting ODP Data via OData](https://help.sap.com/doc/saphelp_nw75/7.5.5/en-US/69/b481859ef34bab9cc7d449e6fff7b6/frameset.htm). 
- To extract a DataSource, the DataSource is activated in SAP, see [SAP Help: Set Up and Activate DataSources](https://help.sap.com/docs/SLH_advanced_compliance_reporting_service/7a60944343e543a1ab99e9b2904dab09/e5d447257a95416190d29638a64a5dfa.html).
- Before creating ODP (OData) extractions, test the ODP source in SAP using the ABAP report RODPS_REPL_TEST to rule out and troubleshoot ODP problems in the ODP source. 
For more information, see [SAP Wiki: Replication test with RODPS_REPL_TEST](https://help.sap.com/docs/SUPPORT_CONTENT/bwdabc/3361385256.html).


#### Supported Features
- All available [ODP contexts](../odp/provider-context.md) of an SAP system are accessible.
- Delta extractions (with initial full load) if the ODP data source supports deltas, see [Subscriptions](subscriptions.md).
- Data packaging for large amounts of data, see [Package Size](settings.md/#package-size).
- Selections to filter the data before extraction, see [Selections](selections.md).


#### Limitations

Delta subscriptions are limited to one SAP user per service. 
The ODP framework has to be exposed in multiple different services for a single user to have multiple delta subscriptions.


