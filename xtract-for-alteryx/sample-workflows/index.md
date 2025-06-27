This section offers a set of sample workflows you can download and use as a base to design your own processes.

______________________________________________________________________

How to get started:

1. Download one of the sample workflows.
1. Open the workflow in your Alterx Designer.
1. Assign a valid [SAP Connection](../documentation/sap-connection/) to all Xtract components in the workflow.
1. Start using the workflow or start editing until the workflow suits your requirements.

______________________________________________________________________

### SAP Migration Scenarios

Workflows that support SAP migration, e.g., from ECC to S/4HANA:

- **Data Anonymization and Replication to QA system**

  ______________________________________________________________________

- **Short-term Bridge App**

  ______________________________________________________________________

- **Source & Target Validations - Report level**

  ______________________________________________________________________

  This workflow uses the [Xtract Report](../documentation/report/) component to validate data integrity between source and target systems.

  [Download](../assets/files/xfa/S4%20Migration%20-%20Source%20%26%20Target%20Validations%20-%20Report%20level.yxmd)

- **Source & Target Validations - Table level**

  ______________________________________________________________________

  This workflow uses the [Xtract Table](../documentation/table/) component to validate data integrity between source and target systems.

  [Download](../assets/files/xfa/S4%20Migration%20-%20Source%20%26%20Target%20Validations%20-%20Table%20level.yxmd)

- **Source & Target Validations - Table & other**

  ______________________________________________________________________

  This workflow uses the [Xtract Table](../documentation/table/) component to validate data integrity between source and target systems. This workflow can be used for tests and demos, as it uses a flat file as a target to resemble the source system with minor changes that are discovered in the reconciliation.

  [Download](../assets/files/xfa/S4%20Migration%20-%20Source%20%26%20Target%20Validations%20-%20Table%20%26%20other.yxzp)

______________________________________________________________________

### Xtract BAPI

Workflows that execute SAP BAPIs and function modules:

- **Read and Write Data with BAPIs**

  ______________________________________________________________________

  This workflow demonstrates using [Xtract BAPI](../documentation/bapi/) to create a purchase requisition in SAP and load the data of the purchase requisition into Alteryx.

  [Download](../assets/files/xfa/BAPI-ERP-ReadandWrite.yxmd)

- **Read SAP LongTexts**

  ______________________________________________________________________

  This workflow demonstrates using [Xtract BAPI](../documentation/bapi/) to read SAP long texts in different languages.

  [Download](../assets/files/xfa/SAP-Read-Long-Texts.yxmd)

- **Read SAP Attachment Files**

  ______________________________________________________________________

  This workflow demonstrates extracting attachments of all formats from an SAP systems, e.g., .pdf files of purchase orders, images, and other objects. For more information, see [Knowledge Base Article: Read and Download SAP Attachment Files](../knowledge-base/read-sap-attachment-files/).

  [Download](../assets/files/xfa/SAP-Read-Attachment-Files.yxmd)

- **Sync Purchase Requisitions from ERP to S4**

  ______________________________________________________________________

  This workflow demonstrates syncing purchase requisitions from ERP to S/4. It involves creating a new requisition in ERP, checking its absence in S/4, syncing by generating corresponding entries in both systems, and confirming the presence in S/4.

  [Download](../assets/files/xfa/BAPI-Sync-PRs-from-ERP-to-S4.yxmd)

______________________________________________________________________

### Xtract Cube

Workflows that extract data from SAP BW InfoCubes and BEx Queries:

- **Cube: BWInfoProvider**

  ______________________________________________________________________

  This workflow demonstrates using [Xtract Cube](../documentation/bwcube/) to load data from an SAP BW InfoProvider.

  [Download](../assets/files/xfa/Cube-BWInfoProvider.yxmd)

- **Cube: BWQuery**

  ______________________________________________________________________

  This workflow demonstrates using [Xtract Cube](../documentation/bwcube/) to load data from an SAP BW Query.

  [Download](../assets/files/xfa/Cube-BWQuery.yxmd)

______________________________________________________________________

### Xtract Hierarchy

Workflows that extract Hierarchies from an SAP BW system:

- **BW CostCenter Hierarchy**

  ______________________________________________________________________

  This workflow demonstrates using [Xtract Hierarchy](../documentation/hierarchy/) to load data from an SAP BW CostCenter hierarchy. This workflow also showcases the different hierarchy representations "Parent-Child" and "Natural".

  [Download](../assets/files/xfa/Hierarchy-BW.yxmd)

______________________________________________________________________

### Xtract ODP

Workflows that extract data via the SAP Operational Data Provisioning (ODP) framework:

- **Read & Merge Data from SAP BW**

  ______________________________________________________________________

  This workflow demonstrates using [Xtract ODP](../documentation/odp/) to load sales documents and customer master data from an SAP BW system. The loaded data is then combined, cleaned, and prepared for further analysis.

  [Download](../assets/files/xfa/ODP-BW-Full.yxmd)

- **Read & Merge Delta Data from SAP BW**

  ______________________________________________________________________

  This workflow demonstrates using [Xtract ODP](../documentation/odp/) to load delta sales documents and customer master data from an SAP BW system. Sales documents are loaded using Xtract ODP's delta function, which retrieves only data that has changed since the last execution.

  [Download](../assets/files/xfa/ODP-BW-Delta.yxmd)

- **Read & Merge Data from SAP ERP**

  ______________________________________________________________________

  This workflow demonstrates using [Xtract ODP](../documentation/odp/) to load sales documents and customer master data from an SAP ERP system. The loaded data is then combined, cleaned, and prepared for further analysis.

  [Download](../assets/files/xfa/ODP-ERP-Full.yxmd)

- **Read & Merge Delta of Data from SAP ERP**

  ______________________________________________________________________

  This workflow demonstrates using [Xtract ODP](../documentation/odp/) to load delta sales documents and customer master data from an SAP ERP system. Sales documents are loaded using Xtract ODP's delta function, which retrieves only changed data since the last execution. For more information, see [Knowledge Base Article: ODP based Delta Extraction of Sales and Customer Data](../knowledge-base/delta-extraction-of-sales-data/).

  [Download](../assets/files/xfa/ODP-ERP-Delta.yxmd)

- **Read SAP S/4HANA CDS Views**

  ______________________________________________________________________

  This workflow demonstrates using [Xtract ODP](../documentation/odp/) to load business partner master data from SAP S/4HANA CDS views. The loaded data is then cleaned and filtered for further analysis.

  [Download](../assets/files/xfa/ODP-S4-Full.yxmd)

- **Read Delta of SAP S/4HANA CDS Views**

  ______________________________________________________________________

  This workflow demonstrates using [Xtract ODP](../documentation/odp/) to load the delta data of suppliers and customers from SAP S/4HANA CDS views. The loaded data is then checked for missing address information.

  [Download](../assets/files/xfa/ODP-S4-Delta.yxmd)

______________________________________________________________________

### Xtract Report

Workflows that extract data from SAP ABAP Reports:

- **Read Reports from SAP ERP**

  ______________________________________________________________________

  This workflow demonstrates using [Xtract Report](../documentation/report/) to load data from the ABAP Report RLT10010 (Evaluation of Movements per Storage Type).

  [Download](../assets/files/xfa/Report-ERP-ABAPReport.yxmd)

- **Read Reports from an SAP S/4HANA Transaction**

  ______________________________________________________________________

  This workflow demonstrates using [Xtract Report](../documentation/report/) to load a list of sales orders from an SAP S/4HANA transaction.

  [Download](../assets/files/xfa/Report-S4-TCode.yxmd)

______________________________________________________________________

### Xtract Table

Workflows that extract data from SPA table and Views:

- **Read SAP Tables from SAP ERP**

  ______________________________________________________________________

  This workflow demonstrates using [Xtract Table](../documentation/table/) to load customer master data and to prepare the data for further analysis in Excel or a 3rd party BI solution.

  [Download](../assets/files/xfa/Table-ERP.yxmd)

- **Read & Join SAP Tables from SAP ERP**

  ______________________________________________________________________

  This workflow demonstrates using [Xtract Table](../documentation/table/) to perform a table join of the SAP tables KNA1 (Customer Master Data) and KNVV (Customer Master Sales Data) and to prepare the data for further analysis in Excel or a 3rd party BI solution.

  [Download](../assets/files/xfa/Table-ERP-Join.yxmd)

- **Read Universal Journal Data from SAP S/4HANA**

  ______________________________________________________________________

  This workflow demonstrates using [Xtract Table](../documentation/table/) to load data from SAP S/4HANA's Universal Journal and to prepare the data for further analysis in Excel or a 3rd party BI solution.

  [Download](../assets/files/xfa/Table-S4.yxmd)

- **Parameterize SAP Table Extractions**

  ______________________________________________________________________

  This workflow demonstrates how to use scalar and list parameters with the [Xtract Table](../documentation/table/) component.

  [Download](../assets/files/xfa/Table-Dynamic-Parameters.yxmd)

______________________________________________________________________

#### Related Links

- [Theobald Software Product Page: Xtract for Alteryx](https://theobald-software.com/xtract-for-alteryx/)
- [Knowledge Base: Xtract for Alteryx](../knowledge-base/)
