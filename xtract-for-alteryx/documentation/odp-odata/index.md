This page shows how to use the Xtract ODP (OData) component.\
The Xtract ODP (OData) component can be used to extract ODP-based data via OData services.

Note

As the use of the RFC modules of the ODP Data Replication API is prohibited by SAP ([SAP Note 3255746](https://me.sap.com/notesLatestChanges/0003255746/E/diff)), the Xtract ODP (OData) component is the recommended tool for extracting ODP data.

### About ODP via OData

Open Data Protocol (OData) is a web protocol for querying and updating data. OData can be used to access the [Open Data Provisioning (ODP)](../odp/#about-odp) framework and extract ODP data, e.g., Hierarchies, Tables, Views, DataSources, etc.

To extract ODP data via OData, a corresponding OData service is required. The data model of the service specifies, which data sets are accessible and how the data is structured. Once the service is registered in the SAP Gateway system, Xtract for Alteryx can consume the service.

For more information, see [SAP Help: ODP-Based Data Extraction via OData](https://help.sap.com/doc/saphelp_nw75/7.5.5/en-US/11/853413cf124dde91925284133c007d/frameset.htm).

Tip

For information on how to create OData services that provide ODP based data, refer to the [Knowledge Base Article: Create OData Services using the SAP Gateway Builder](../../knowledge-base/create-odata-services-using-the-sap-gateway-builder/).

### Prerequisites

- Alteryx Designer version 2022.3 or higher. To use of Xtract ODP (OData) access to the Alteryx **Data Connection Manager (DCM)**, introduced in Alteryx Designer version 2022.3.
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

### SAP Connection for OData Access

Xtract ODP (OData) requires a generic **Download** data source to access the OData protocol of an SAP system. Follow the steps below to create the data source:

1. In the main menu of the Alteryx Designer navigate to **File > Manage Connections**. The window "Connection Manager" opens.
1. In the tab *Data Sources* click **[New]** to create a new data source.
1. Select the **Download** technology to create a URL data source.
1. Enter the Base URL of your SAP system, e.g., `http://sap-erp-as05.example.com:50000`. The URL can be requested from the SAP Basis team.
1. Click **[Save]** to save the SAP connection. The subsection *Connection* opens.
1. In the subsection *Connection* select the authentication method *Username and password*.
1. Select an existing credential that contains the name and password of an SAP dialog user. If no credentials exist, select *Create new Credential* to create a new credential.
1. Click **[Link] / [Create and link]** to link the credential to the connection.

The SAP connection is now available for selection in the Xtract ODP (OData) component.

### Add an Xtract ODP (OData) Component

Follow the steps below to add an Xtract ODP (OData) component to your workflow:

1. Drag & drop the Xtract component to your Alteryx workflow .
1. Assign an existing SAP connection .
1. Click **[ Edit]** to open the main window of the component.

The majority of the functions of the component can be accessed in the main window.

### Look Up OData Services

1. In the main window of the component, click **[]**. The window “Service Selection” opens.

1. In the field **Search pattern** , enter one of the following characteristics:

   - name of an OData service
   - description of an OData service
   - name of the entity inside the OData service

   Use wildcards (\*), if needed.

1. Click **[Search]** . Search results are displayed.

1. Select an OData service and click **[OK]** to confirm.

The application now returns to the main window of the component.

Note

To find DataSources, they have to be activated in SAP.

### Define the Xtract ODP (OData) Component

The Xtract ODP (OData) component offers the following options for data extractions:

1. In the section *Fields*, select the items you want to extract.
1. Optional: Edit a selection you want to change or dynamize. For more information, see [Edit Selections](selections/#edit-selections).
1. Optional: Activate the option **Delta / Change tracking** to initialize delta extractions. For more information, see [Subscriptions](subscriptions/).
1. Click **[Load live preview]** to display a live preview of the first 100 records.
1. Check the [Extraction Settings](settings/) before running the workflow.
1. Click **[OK]** to save the component.

You can now run the workflow.
