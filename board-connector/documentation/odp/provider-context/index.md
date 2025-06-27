This page shows how to use the Provider Contexts of the ODP extraction type. The ODP extraction type supports the following Provider Contexts:

| Provider Context | SAP Source Objects | | --- | --- | | ABAP Core Data Services \[[ABAP_CDS](#abap-cds-views)\] | - CDS Views | | SAP NetWeaver Business Warehouse or BW4/HANA \[[BW](#bw-infoproviders)\] | **BW/4HANA:** - DSO / aDSO - CompositeProvider - InfoObjects - Query as InfoProvider **BW systems:** - CompositeProvider - InfoCubes - Semantically partitioned objects - HybridProviders - MultiProviders - InfoSets | | SAP HANA Information Views \[[HANA](#hana-views)\] | - Analysis Views - Calculation Views - Associated Attribute Views | | DataSources/Extractors \[[SAPI](#extractors)\] | - DataSources and Extractors | | SAP LT Queue Alias \[[SLT~your_queue_alias](#slt-server)\] | - SAP Tables - Cluster tables - Pool tables |

## ABAP CDS Views

According to the Core Data Service (CDS) concept, data models based on CDS serve as central definitions that can be used in many different domains, such as transactional and analytical applications.

CDS is defined using an SQL-based data definition language (DDL). DLL leverages the standard SQL with several additional concepts, such as associations, which define the relationships between CDS views, and annotations that direct the domain-specific use of CDS artifacts.

### Available CDS

There are two types of CDS available:

- HANA CDS (defined in XS engine)
- ABAP CDS

For each ABAP CDS entity defined in the DDL source code, an SQL view is generated in the ABAP Dictionary. The same way as the views created with Dictionary tools (transaction SE11), ABAP CDS entities can be accessed in ABAP using Open SQL statements.

CDS is important for SAP application development. For example, S/4HANA uses CDS to provide both core transactional functionality as well as analytical content for reporting. In BW/4 HANA, ABAP based CDS views can be used for data extraction.

Two possible use cases for CDS:

- Direct access to a CDS view from BW/4 HANA
- Delta extraction from a CDS view in S/4 HANA to BW

CDS Views support Full and Delta Extraction.

### Replace BW Extractors with CDS Views in S/4HANA

In majority of cases traditional BW extractors can be used to extract data from an S/4HANA systems. Due to simplifications in the S/4HANA system, several extractors are now deprecated or can no longer be used in a usual manner. To use the deprecated or altered extractors, SAP may deliver extraction relevant (via the analytical annotations) CDS Views.

### Use ABAP CDS Views

Note

To find an ABAP CDS view it must have the following Annotation: `@Analytics.dataExtraction.Enabled: true`. If the source SAP system is not on a HANA DB, an additional Annotation is needed: `@Analytics.dataCategory: #CUBE/#FACT/#DIMENSION`.

Things that need to be considered when using BW InfoProviders:

1. When looking up ABAP CDS Views in the ODP extraction type, make sure to select the correct context.
1. When the delta load is available for the source object in the SAP source system, the **Delta Update** option is available in the ODP extraction type.
1. Click **[Load live preview]** to preview the data without running an extraction.

## BW InfoProviders

The Operational Data Provisioning (ODP) framework allows you to extract data from the InfoProviders in your source BW and BW/4 HANA systems. Available InfoProvider types are dependent on your source BW and BW/4 HANA system.

### Available InfoProviders

- **Available InfoProviders in SAP BW∕4HANA**

  ______________________________________________________________________

  - CompositeProvider - object type HCPR (full extraction)
  - DataStore objects (with delta extraction)
    - InfoObjects
    - Master data
    - Texts
    - Hierarchies
  - Query as InfoProvider

- **Additional InfoProviders in BW Systems**

  ______________________________________________________________________

  - CompositeProvider - object type HCPR (full extraction)
  - InfoCubes (with delta extraction)
  - Semantically partitioned objects
  - HybridProviders
  - MultiProviders
  - InfoSets

### Use BW InfoProviders

Things that need to be considered when using BW InfoProviders:

1. When looking up BW InfoProviders in the ODP extraction type, make sure to select the correct context.
1. When the delta load is available for the source object in the SAP source system, the **Delta Update** option is available in the ODP extraction type.
1. Click **[Load live preview]** to preview the data without running an extraction.

## Extractors

The ODP extraction type can be used to extract data from Business Content DataSource (Extractors). The majority of DataSources, including generic (custom) DataSources, can be released for Operational Data Provisioning.

The ODP extraction type does not change the implementation of application extractors. All features and capabilities remain unchanged.

An extractor (in ERP or S/4 HANA) is an encapsulated business object, representing multiple source tables already in the source system

### Available Extractors

- Transactional data
- Master data
- Text data
- Hierarchy data

There are standard delta extraction methods available for master data and transaction data.

### Use Extractors

Things that need to be considered when using Extractors:

- DataSources have to be activated in SAP, see [SAP Help: Set Up and Activate DataSources](https://help.sap.com/viewer/7a60944343e543a1ab99e9b2904dab09/CLOUD/en-US/e5d447257a95416190d29638a64a5dfa.html).
- When looking up DataSources or Extractors, make sure to select the correct context.
- If delta load is available for the source object in the SAP source system, the **Delta Update** option is available in the ODP extraction type.
- If the DataSource is a Hierarchy, there are additional settings, see [Hierarchies](#hierarchies).

### Hierarchies

If the selected source object is of type Hierarchy, the window "Select Hierarchy" opens.

1. Select a Hierarchy from the list of Hierarchies in the "Select Hierarchy" window.
1. Confirm your selection with **[OK]**.\
   The name of the selected Hierarchy is displayed under *Selected Hierarchy* .
1. Select which segments to extract .

#### Segment(s) to extract

Hierarchies are divided into segments by the API. Choose which segments of the Hierarchy to extract . The selected data is displayed in the *Fields* section.

| Option | Description | | --- | --- | | **Merges** | All segments contain the field Node ID. Using the Node ID *Merges* automatically combines all 3 segments. | | **Elements** | The segment *Elements* contains information about the elements of the Hierarchy e.g., name, parent, child, etc. | | **Texts** | The segment *Texts* contains the description texts of the *Elements*. The language of the descriptions depends on the language settings of the SAP connection. | | **Intervals** | The segment *Intervals* contains additional information if an element is an interval. In ODP no TO and FROM columns are displayed, see [SAP Note 3090500](https://launchpad.support.sap.com/#/notes/3090500). |

Note

Hierarchies can be passed as runtime parameters at runtime.

## HANA Views

Operational Data Provisioning (ODP) can be used to connect SAP HANA database of an SAP ABAP source system. The connection is provided via RFC.

### Available HANA Views:

- Analysis Views
- Calculation Views
- Associated Attribute Views

### Use HANA Views

Things that need to be considered when using HANA Views:

1. When looking up HANA Views in the ODP extraction type, make sure to select the correct context.
1. When the delta load is available for the source object in the SAP source system, the **Delta Update** option is available in the ODP extraction type.
1. Click **[Load live preview]** to preview the data without running an extraction.

## SLT Server

The Operational Data Provisioning (ODP) framework allows you to extract tables and simple views from SAP HANA systems via an SAP Landscape Transformation Replication Server (SLT). The SLT server is a trigger-based CDC solution that can replicate SAP tables and views and make them available as delta extracts.

### Available Tables

- Regular SAP tables
- Cluster tables
- Pool tables

### Requirements

The SLT server context requires an SAP Landscape Transformation Replication Server (SLT) that is set up for ODP, see [SAP Help: Transferring Data from SLT Using Operational Data Provisioning](https://help.sap.com/docs/SAP_NETWEAVER_750/ccc9cdbdc6cd4eceaf1e5485b1bf8f4b/6ca2eb9870c049159de25831d3269f3f.html?locale=en-US).

The following requirements apply to the SLT server:

- Minimum release version of the SLT server:
  - Add-On DMIS 2011 SP05
  - SAP NetWeaver 7.3 SPS10, 7.31 SPS09 or 7.4 SPS04 (ODP infrastructure)
- Add-On DMIS_2011 SP03/SP04 or higher or 2010 SP08/SP09 is installed in the SAP source system.
- The following SAP Notes are published in the SAP source system:
  - SAP Note 1863476
  - SAP Note 1817467 when using Add-On DMIS 2011 SP05

### Use SLT Server

Consider the following when using an SLT server:

1. When looking up data via an SLT server, make sure to select the correct context.
1. A live preview of the data is not available in the SLT server context.

For more information on SLT servers, see [SAP Help: Transferring Data from SLT Using Operational Data Provisioning](https://help.sap.com/docs/SAP_NETWEAVER_750/ccc9cdbdc6cd4eceaf1e5485b1bf8f4b/6ca2eb9870c049159de25831d3269f3f.html?locale=en-US) or download the [SLT-Performance-Guide (Nov 2022)](../../../assets/files/SLT-Performance-Guide_Nov_2022.pdf).
