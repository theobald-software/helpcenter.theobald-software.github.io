This page shows how to use the ODP(OData) extraction type.\
The ODP(OData) extraction type can be used to extract ODP-based data via OData services.

Note

As the use of the RFC modules of the ODP Data Replication API is prohibited by SAP ([SAP Note 3255746](https://me.sap.com/notesLatestChanges/0003255746/E/diff)), the ODP(OData) extraction type is the recommended tool for extracting ODP data.

### About ODP via OData

Open Data Protocol (OData) is a web protocol for querying and updating data. OData can be used to access the [Open Data Provisioning (ODP)](../odp/#about-odp) framework and extract ODP data, e.g., Hierarchies, Tables, Views, DataSources, etc.

To extract ODP data via OData, a corresponding OData service is required. The data model of the service specifies, which data sets are accessible and how the data is structured. Once the service is registered in the SAP Gateway system, Board Connector can consume the service.

For more information, see [SAP Help: ODP-Based Data Extraction via OData](https://help.sap.com/doc/saphelp_nw75/7.5.5/en-US/11/853413cf124dde91925284133c007d/frameset.htm).

Tip

For information on how to create OData services that provide ODP based data, refer to the [Knowledge Base Article: Create OData Services using the SAP Gateway Builder](../../knowledge-base/create-odata-services-using-the-sap-gateway-builder/).

### Prerequisites

- OData services for ODP extractions are available in the SAP system, see [SAP Help: Generating a Service for Extracting ODP Data via OData](https://help.sap.com/doc/saphelp_nw75/7.5.5/en-US/69/b481859ef34bab9cc7d449e6fff7b6/frameset.htm).
- To extract a DataSource, the DataSource is activated in SAP, see [SAP Help: Set Up and Activate DataSources](https://help.sap.com/docs/SLH_advanced_compliance_reporting_service/7a60944343e543a1ab99e9b2904dab09/e5d447257a95416190d29638a64a5dfa.html).
- Before creating ODP (OData) extractions, test the ODP source in SAP using the ABAP report RODPS_REPL_TEST to rule out and troubleshoot ODP problems in the ODP source. For more information, see [SAP Wiki: Replication test with RODPS_REPL_TEST](https://help.sap.com/docs/SUPPORT_CONTENT/bwdabc/3361385256.html).

#### Supported Features

- All available [ODP contexts](../odp/provider-context/) of an SAP system are accessible.
- Delta extractions (with initial full load) if the ODP data source supports deltas, see [Subscriptions](subscriptions/).
- Data packaging for large amounts of data, see [Package Size](settings/#package-size).
- Selections to filter the data before extraction, see [Selections](selections/).

#### Limitations

Delta subscriptions are limited to one SAP user per service. The ODP framework has to be exposed in multiple different services for a single user to have multiple delta subscriptions.

### Create a ODP(OData) Extraction

1. In the main window of the Designer, click **[New]** to create a new extraction. The window "Create Extraction" opens.
1. Select an [SAP Connection](../sap-connection/) of type **RFC** from the drop-down menu **Source**.
1. Enter a unique name for your extraction.
1. Select the extraction type **ODP(OData)**. The **ODP(OData)** extraction type is only available if the SAP source connection uses the [OData protocol](../sap-connection/settings/#source-type-odata).
1. Click **[OK]**. The main window of the extraction type opens automatically.

The majority of the functions of the extraction type can be accessed in the main window.

### Look Up OData Services

1. In the main window of the extraction type, click **[]**. The window “Service Selection” opens.

1. In the field **Search pattern** , enter one of the following characteristics:

   - name of an OData service
   - description of an OData service
   - name of the entity inside the OData service

   Use wildcards (\*), if needed.

1. Click **[Search]** . Search results are displayed.

1. Select an OData service and click **[OK]** to confirm.

The application now returns to the main window of the extraction type.

Note

To find DataSources, they have to be activated in SAP.

### Define the ODP(OData) Extraction Type

The ODP(OData) extraction type offers the following options for data extractions:

1. In the section *Fields*, select the items you want to extract.
1. Optional: Edit a selection you want to change or dynamize. For more information, see [Edit Selections](selections/#edit-selections).
1. Optional: Activate the option **Delta / Change tracking** to initialize delta extractions. For more information, see [Subscriptions](subscriptions/).
1. Click **[Load live preview]** to display a live preview of the first 100 records.
1. Check the [Extraction Settings](settings/) and the [General Settings](general-settings/) before running the extraction.
1. Click **[OK]** to save the extraction type.

You can now run the extraction, see [Run Extractions](../run-extractions/).
