---
title: Requirements
description: Requirements
---

This page contains information about system requirements and compatible SAP systems for Xtract IS for Azure.

### Required Components

- ADFv2
- Azure-SSIS Integration Runtime (IR)

### Setup of the Environment

Refer to the Microsoft documentation to set up the environment:

- [Provision the Azure-SSIS Integration Runtime in Azure Data Factory with Azure portal UI ](https://docs.microsoft.com/en-us/azure/data-factory/tutorial-deploy-ssis-packages-azure) 
- [Provision the Azure-SSIS Integration Runtime in Azure Data Factory with PowerShell](https://docs.microsoft.com/en-us/azure/data-factory/tutorial-deploy-ssis-packages-azure-powershell)

Once the environment runs, develop a simple SSIS package that does NOT contain any Xtract IS  {{ components }} and deploy and run the package on the Azure-SSIS IR.
If the SSIS package runs is successfully, proceed to set up Xtract IS for Azure on the Azure-SSIS IR. 

!!! note
    By default Azure automatically updates the Microsoft integration runtime. 
	To avoid possible compatibility issues with Xtract IS for Azure, disable automatic updates.

{% include "requirements/supported-ssis.md" %}

#### Development
 
SQL Server Data Tools (SSDT) are required to create SSIS packages. 
Use the correct SSDT for your SQL Server Integration Services (SSIS) version, see [Microsoft Documentation: Download SQL Server Data Tools (SSDT) for Visual Studio](https://docs.microsoft.com/en-us/sql/ssdt/download-sql-server-data-tools-ssdt?view=sql-server-ver15) for details.

{% include "requirements/sap-releases.md" %}

{% include "requirements/sap-tcpip-ports.md" %}

{% include "requirements/sap-installation.md" %}

{% include "requirements/operating-systems.md" %}

{% include "requirements/xis-hardware.md" %}