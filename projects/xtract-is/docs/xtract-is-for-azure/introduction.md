---
title: Introduction
description: Learn about Xtract IS for Azure - a plug’n’play solution for SAP and Azure SQL Server Integration Services.
---

![img](site:assets/images/logos/theo-thumbs.png){ .lg .middle width="30px"} This section shows how to set up Xtract IS on an Azure SSIS Integration Runtime.

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

{% include "components/components.md" %}


