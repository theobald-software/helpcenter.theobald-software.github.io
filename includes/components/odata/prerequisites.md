
### Prerequisites

=== "SAP On-Premise"
	- Enable OData services in SAP, see [SAP Help: How to Enable OData Services in SAP S/4HANA](https://help.sap.com/docs/advanced-financial-closing/administration/how-to-enable-odata-services-in-sap-s4hana).
	For more information on how to build OData services, see [SAP Learning: Building OData Services with SAP Gateway](https://learning.sap.com/learning-journeys/building-odata-services-with-sap-gateway).
	- Create an SAP connection of [type OData](../sap-connection/settings.md#source-type-odata).
	
=== "SAP Cloud"
	- Enable the fllowing Communication Scenarios:
		- General communication integration:
			- SAP_COM_0A06 (Communication System Read Integration)
			- SAP_COM_0A07 (Communication Arrangement Read Integration)
			- SAP_COM_0A48 (Communication Management Integration)
		- Metadata integration:
			- SAP_COM_0181 (OData Metadata Integration)
		- To extract CDS data: 
			- SAP_COM_0531 (SAP Datasphere - ABAP CDS Extraction - OData Integration)
			- SAP_COM_0532 (SAP Datasphere - ABAP CDS Extraction - WebSocket Integration)
	- Expose SAP OData services to 3rd party systems using Communication Arrangements, see [SAP Learning: Setting up Communication Management](https://learning.sap.com/learning-journeys/implement-sap-s-4hana-cloud-public-edition-for-sourcing-and-procurement/setting-up-communication-management_a913171c-c96d-47a9-81ec-dc9ee8754320).
	For more information on predefined OData services in the SAPS/4HANA Public Cloud, see [OData V4 List](https://api.sap.com/products/SAPS4HANACloud/apis/ODATAV4) and [OData V2 List](https://api.sap.com/products/SAPS4HANACloud/apis/ODATA).
	- Create an SAP connection of [type OData](../sap-connection/settings.md#source-type-odata).
