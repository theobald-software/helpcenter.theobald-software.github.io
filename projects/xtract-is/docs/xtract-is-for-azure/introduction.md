---
title: Introduction
description: Learn about Xtract IS for Azure - a plug’n’play solution for SAP and Azure SQL Server Integration Services.
---

![img](../assets/images/logos/theo-thumbs.png){ .lg .middle width="30px"} This section shows how to set up Xtract IS on an Azure SSIS Integration Runtime.

### About Xtract IS for Azure

Xtract IS for Azure is a plug and play solution that allows running SSIS packages that contain Xtract IS components for connecting to an SAP source and extracting data from SAP on an [Azure-SSIS Integration Runtime (IR), based on Microsoft's Azure Data Factory v2 (ADFv2)](https://docs.microsoft.com/en-us/azure/data-factory/create-azure-ssis-integration-runtime).

![XISforAzure_Architecture](../assets/images/xis/for-azure/Xtract_IS_for_Azure.png){:class="img-responsive"}

### Prerequisites

The SAP system needs to be accessible from the Azure-SSIS IR, e.g., through a VPN tunnel or a self-hosted Integration Runtime.

For information on system requirements, see [Requirements](requirements.md).

### Software Architecture

With Azure-SSIS IR, SSIS packages are developed on a local Xtract IS (on-prem) Visual Studio/SSDT environment.
Instead of deploying the developed packages to an on-prem SSIS server, the packages are deployed to an Azure-SSIS IR to be scheduled and run in the Azure cloud.

Xtract IS for Azure is based on the existing Xtract IS (on-prem) version, see [Xtract IS Documentation](../documentation/introduction.md).

<div class="grid cards" markdown>

-   :yunio-edit: __Development of SSIS Packages__

    ---

    Installation of Xtract IS on a Visual Studio/SSDT environment, see [Xtract IS Setup](../documentation/setup/installation.md)

-   :yunio-run: __Running SSIS Packages__

    ---

    Installation of Xtract for Azure on an Azure-SSIS IR, see [Xtract IS for Azure Installation](installation.md) 

</div>

### {{ Components }}

{{ productName }} offers the following {{ components }} to cover a wide range of data extraction scenarios.


::cards:: cols=3

- title: {{ bapi }}
  icon: ../assets/images/logos/components/Function-BAPI.svg
  content: Execute BAPIs and Function Modules. <br> <br> <span class="keyword">type&#58; transformation</span> <span class="keyword">ECC</span> <span class="keyword">S4/HANA</span> <span class="keyword">BW</span> <span class="keyword">BW/4HANA</span>
  url: ../documentation/bapi/index.md
  
- title: {{ bwcube }}
  icon: ../assets/images/logos/components/Cube-BEx.svg
  content: Extract data from SAP BW InfoCubes and BEx Queries.<br> <br><span class="keyword">type&#58; source</span><span class="keyword">BW</span> <span class="keyword">BW/4HANA</span> 
  url: ../documentation/bwcube/index.md
  
- title: {{ bwloader }}
  icon: ../assets/images/logos/components/BWLoader.svg
  content: Load data into SAP BW systems. <br> <br> <br> <span class="keyword">type&#58; destination</span> <span class="keyword">BW</span> <span class="keyword">BW/4HANA</span>
  url: ../documentation/bwloader/index.md

- title: {{ hierarchy }}
  icon: ../assets/images/logos/components/Hierarchy.svg
  content: Extract Hierarchies from an SAP BW / BI system. <br> <br> <br> <span class="keyword">type&#58; source</span> <span class="keyword">BW</span> <span class="keyword">BW/4HANA</span>
  url: ../documentation/hierarchy/index.md
  
- title: {{ deltaq }}
  icon: ../assets/images/logos/components/DeltaQ.svg
  content: Extract data from DataSources (OLTP) and extractors from ERP and ECC systems.<br><br><span class="keyword">type&#58; source</span><span class="keyword">ECC</span> <span class="keyword">S4/HANA</span> <span class="keyword">BW</span> <span class="keyword">BW/4HANA</span> 
  url: ../documentation/deltaq/index.md

- title: {{ odp }}
  icon: ../assets/images/logos/components/ODP.svg
  content: Extract data via the SAP Operational Data Provisioning (ODP) framework.<br> <br> <span class="keyword">type&#58; source</span><span class="keyword">ECC</span> <span class="keyword">S4/HANA</span> <span class="keyword">BW</span> <span class="keyword">BW/4HANA</span>
  url: ../documentation/odp/index.md
  
- title: {{ ohs }}
  icon: ../assets/images/logos/components/Open-Hub.svg
  content: Extract data from InfoSpokes and OHS destinations.<br> <br> <br><span class="keyword">type&#58; source</span><span class="keyword">BW</span> <span class="keyword">BW/4HANA</span> 
  url: ../documentation/ohs/index.md
  
- title: {{ query }}
  icon: ../assets/images/logos/components/Query.svg
  content: Extract data from ERP queries. <br>**BEx queries are covered by {{ bwcube }}**.<br> <br><span class="keyword">type&#58; source</span><span class="keyword">ECC</span> <span class="keyword">S4/HANA</span>  
  url: ../documentation/query/index.md

- title: {{ report }}
  icon: ../assets/images/logos/components/Report.svg
  content: Extract data from SAP ABAP reports.<br> <br> <br><span class="keyword">type&#58; source</span><span class="keyword">ECC</span> <span class="keyword">S4/HANA</span> 
  url: ../documentation/report/index.md
  
- title: {{ table }}
  icon: ../assets/images/logos/components/Table.svg
  content: Extract data from SAP tables and views. <br> <br><span class="keyword">type&#58; source</span><span class="keyword">ECC</span> <span class="keyword">S4/HANA</span> <span class="keyword">BW</span> <span class="keyword">BW/4HANA</span> 
  url: ../documentation/table/index.md

- title: {{ tableCDC }}
  icon: ../assets/images/logos/components/Table-CDC.svg
  content:  Extract delta data from SAP tables and views.<br> <br> <span class="keyword">type&#58; source</span><span class="keyword">ECC</span> <span class="keyword">S4/HANA</span> <span class="keyword">BW</span> <span class="keyword">BW/4HANA</span>
  url: ../documentation/table-cdc/index.md

::/cards::


