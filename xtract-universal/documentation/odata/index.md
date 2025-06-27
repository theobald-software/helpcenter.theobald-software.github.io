This page shows how to use the OData extraction type.\
The OData extraction type can be used to extract data provided by SAP OData services.

Note

OData extraction type ist still in **beta** phase. This means, the OData extraction type is subject to change. Extractions that use the OData extraction type can stop working with future updates and might require manual changes.

### About OData Services

The OData extraction type in Xtract Universal consumes the data provided by SAP OData services. The OData (Open Data) protocol defines a set of rules to create, edit and consume resources through RESTful interfaces (HTTP requests). Furthermore, the OData protocol describes the data and the data model, meaning the data has its respective metadata, including the following items:

- Column name
- Description
- Length
- Data type

OData services can be build in SAP on-premise systems using the [SAP Gateway Service Builder](https://help.sap.com/docs/SAP_NETWEAVER_AS_ABAP_751_IP/68bf513362174d54b58cddec28794093/cddd22512c312314e10000000a44176d.html). On SAP cloud systems, the OData services are accessible via [Communication Arrangements](https://learning.sap.com/learning-journeys/implement-sap-s-4hana-cloud-public-edition-for-sourcing-and-procurement/setting-up-communication-management_a913171c-c96d-47a9-81ec-dc9ee8754320).

The OData extraction type supports [OData V2](https://www.odata.org/documentation/odata-version-2-0/overview/) and [OData V4](https://www.odata.org/documentation/).

Tip

For information on how to create OData services that provide ODP based data, refer to the [Knowledge Base Article: Create OData Services using the SAP Gateway Builder](../../knowledge-base/create-odata-services-using-the-sap-gateway-builder/).

### Prerequisites

- Enable OData services in SAP, see [SAP Help: How to Enable OData Services in SAP S/4HANA](https://help.sap.com/docs/advanced-financial-closing/administration/how-to-enable-odata-services-in-sap-s4hana). For more information on how to build OData services, see [SAP Learning: Building OData Services with SAP Gateway](https://learning.sap.com/learning-journeys/building-odata-services-with-sap-gateway).

- Create an SAP connection of [type OData](../sap-connection/settings/#source-type-odata).

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

- Expose SAP OData services to 3rd party systems using Communication Arrangements, see [SAP Learning: Setting up Communication Management](https://learning.sap.com/learning-journeys/implement-sap-s-4hana-cloud-public-edition-for-sourcing-and-procurement/setting-up-communication-management_a913171c-c96d-47a9-81ec-dc9ee8754320). For more information on predefined OData services in the SAPS/4HANA Public Cloud, see [OData V4 List](https://api.sap.com/products/SAPS4HANACloud/apis/ODATAV4) and [OData V2 List](https://api.sap.com/products/SAPS4HANACloud/apis/ODATA).

- Create an SAP connection of [type OData](../sap-connection/settings/#source-type-odata).

### Create an OData Extraction

1. In the main window of the Designer, click **[New]** to create a new extraction. The window "Create Extraction" opens.
1. Select an [SAP Connection](../sap-connection/) of type **Odata** from the drop-down menu **Source**.
1. Enter a unique name for your extraction.
1. Select the extraction type **OData**. The **OData** extraction type is only available if the SAP source connection uses the [OData protocol](../sap-connection/settings/#source-type-odata).
1. Click **[OK]**. The main window of the extraction type opens automatically.

The majority of the functions of the extraction type can be accessed in the main window.

### Look up OData Services

1. In the main window of the extraction type, click **[]**. The window “Service Selection” opens.
1. In the field **Search pattern**, enter the technical service name of an OData V2 service or the service ID of an OData V4 service . Use wildcards (\*), if needed.
1. Click **[Search]**. Search results are displayed.
1. Click **[]** to select a service . The SAP objects that are available via the service are displayed in the right screen of the menu.
1. Select a service entity and click **[OK]** to confirm.

The application now returns to the main window of the extraction type.

### Define the OData Extraction Type

The OData extraction type offers the following options for data extractions:

1. In the section *Service Fields*, select the items to extract.
1. Click **[Load Preview]** to display a live preview of the first 100 records.
1. Optional: edit selections to apply (dynamic) filters. For more information, see [Edit Selections](selections/#edit-selections).
1. Check the [Extraction Settings](settings/) and the [General Settings](general-settings/) before running the extraction.
1. Click **[OK]** to save the extraction type.

You can now run the extraction, see [Execute and Automate Extractions](../execute-and-automate/).

Note

The OData data types **DateTime** and **DateTimeOffset** (original format: *yyyy-mm-ddThh:mm\[:ss[.fffffff]\]*) are truncated to the following format: *yyyyMMdd*.
