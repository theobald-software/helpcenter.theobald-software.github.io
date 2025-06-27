This page shows how to use the Xtract ODP component.\
The Xtract ODP component can be used to extract data via the SAP Operational Data Provisioning (ODP) framework.

### About ODP

Operational data provisioning (ODP) is a framework in SAP ABAP applications for transferring data between systems. ODP provides a technical infrastructure for data extraction and replication from different SAP (ABAP) Systems, e.g.:

- ECC
- S/4 HANA
- BW
- BW/4 HANA

The Xtract ODP component acts as a subscriber (consumer) and [subscribes](subscriptions/) to a data provider. ODP supports mechanisms to load data incrementally from data providers. For SAP BW/4HANA, ODP is the central infrastructure for data extraction and replication from SAP (ABAP) applications to an SAP BW/4HANA Data Warehouse.

The Xtract ODP component provides data transfer from the following providers (also called [Provider Context](provider-context/)):

| Provider Context | SAP Source Objects | | --- | --- | | ABAP Core Data Services \[[ABAP_CDS](provider-context/#abap-cds-views)\] | - CDS Views | | SAP NetWeaver Business Warehouse or BW4/HANA \[[BW](provider-context/#bw-infoproviders)\] | **BW/4HANA:** - DSO / aDSO - CompositeProvider - InfoObjects - Query as InfoProvider **BW systems:** - CompositeProvider - InfoCubes - Semantically partitioned objects - HybridProviders - MultiProviders - InfoSets | | SAP HANA Information Views \[[HANA](provider-context/#hana-views)\] | - Analysis Views - Calculation Views - Associated Attribute Views | | DataSources/Extractors \[[SAPI](provider-context/#extractors)\] | - DataSources and Extractors | | SAP LT Queue Alias \[[SLT~your_queue_alias](provider-context/#slt-server)\] | - SAP Tables - Cluster tables - Pool tables |

Depending on the connected SAP source system there are differences in available provider contexts.\
For more information on SAP ODP, see [SAP Wiki: Operational Data Provisioning (ODP) and Delta Queue (ODQ)](https://wiki.scn.sap.com/wiki/pages/viewpage.action?pageId=449284646).

### Prerequisites

- A connection to an SAP system is available, see [SAP Connection](../sap-connection/).
- The SAP user has sufficient user rights, see [SAP Authority Objects](../setup-in-sap/sap-authority-objects/#odp).
- Implement the following SAP notes to use ODP:
  - [1931427 - ODP Data Replication API 2.0](https://launchpad.support.sap.com/#/notes/1931427)
  - [2232584 - Release of SAP extractors for ODP replication (ODP SAPI)](https://launchpad.support.sap.com/#/notes/2232584)
  - [1560241 - Release of DataSources for ODP data replication API](https://launchpad.support.sap.com/#/notes/1560241)
  - [2196500 - ODP Package size cannot be reduced below 50 MB](https://launchpad.support.sap.com/#/notes/2196500/D)
  - [2191995 - ODQ Package Size cannot be reduced below 50 MByte](https://launchpad.support.sap.com/#/notes/2191995/D)
- DataSources have to be activated in SAP, see [SAP Help: Activating DataSources in the SAP OLTP System](https://help.sap.com/docs/SLH_advanced_compliance_reporting_service/7a60944343e543a1ab99e9b2904dab09/e5d447257a95416190d29638a64a5dfa.html).
- Before creating ODP extractions, test the ODP source in SAP using the ABAP report RODPS_REPL_TEST to rule out and troubleshoot ODP problems in the ODP source. For more information, see [SAP Wiki: Replication test with RODPS_REPL_TEST](https://wiki.scn.sap.com/wiki/display/BI/Replication+test+with+RODPS_REPL_TEST).

Note

The ODP API 1.0 has limitations compared to ODP API 2.0, e.g., ODP API 1.0 does not support the extraction of Hierarchy DataSources. For more information, see [SAP Wiki: Limitation of ODP API 1.0](https://wiki.scn.sap.com/wiki/display/BI/Limitation+of+ODP+API+1.0).

Warning

**Missing Authorization.**\
To use the Xtract ODP component, access to the designated authority objects (RFC) in SAP must be available. Adjust [SAP Authority Objects](../setup-in-sap/sap-authority-objects/#odp) accordingly.

### Add an Xtract ODP Component

Follow the steps below to add an Xtract ODP component to your workflow:

1. Drag & drop the Xtract component to your Alteryx workflow .
1. Assign an existing SAP connection .
1. Click **[ Edit]** to open the main window of the component.

The majority of the functions of the component can be accessed in the main window.

### Look up Data Objects

1. In the main window of the component, click **[]**. The window “Operational Data Provider Lookup” opens.
1. In the field **Name**, enter the name of an extractor . Use wildcards (\*), if needed.
1. Select a *Context* . Depending on the connected SAP source system there are differences in available [Provider Contexts](provider-context/).
1. Click **[]**. Search results are displayed.
1. Select an extractor and click **[OK]** to confirm.

The application now returns to the main window of the component.

Note

To find DataSources, they have to be activated in SAP.

### Define the Xtract ODP Component

The Xtract ODP component offers the following options for data extractions:

1. In the section *Fields*, select the items you want to extract.

   Note

   TS_SEQUENCE_NUMBER is a technical primary key that can be added to the output. When working with identical data sets, the data set with the highest sequence number is the most current data set.

1. Optional: edit selections to apply (dynamic) filters. For more information, see [Edit Selections](selections/#edit-selections).

   Note

   If your data source is a Hierarchy, see [Hierarchy Segments](provider-context/#segments-to-extract) for filter options.

1. Select an [Update Mode](update-mode/), e.g., to initialize delta extractions.

1. Click **[Load live preview]** to display a live preview of the first 100 records.

1. Check the [Extraction Settings](settings/) before running the workflow.

1. Click **[OK]** to save the component.

1. Optional: Check the column name style and date conversion options in the [tool configuration](tool-configuration/) of the component.

You can now run the workflow.
