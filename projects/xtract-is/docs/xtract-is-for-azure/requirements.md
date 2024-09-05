---
title: Requirements
description: System requirements for installing and using Xtract IS for Azure
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


### Installation and Configuration on SAP


|{{ Component }}       | SAP Release           | Requirements on the SAP System        |
|----------------------|-----------------------|-------------------------------------------------------------------------------|
|[{{ table }}](../documentation/table/index.md)           | Rel. > 4.6C       | Installation of a custom function module [/THEO/READ_TABLE](../documentation/setup-in-sap/custom-function-module-for-table-extraction.md/#installation-of-theoread_table) is recommended.    |
|[{{ bapi }}](../documentation/bapi/index.md)              | Rel. > 4.6C       | No requirements. Only remote-enabled functions are supported.                            |
|[{{ query }}](../documentation/query/index.md)             | Rel. > 4.6C       | No requirements.      |
|[{{ report }}](../documentation/report/index.md)            | Rel. > 4.6C       | Installation of a custom function module [Z_XTRACT_IS_REMOTE_REPORT](../documentation/setup-in-sap/custom-function-module-for-reports.md) is required.   |
|[{{ bwcube }}](../documentation/bwcube/index.md)            | Rel. > BW 3.1     | No requirements. BEx Queries require external access ("Allow External Access to this Query" option must be active).                                                                         |
|[{{ hierarchy }}](../documentation/hierarchy/index.md)       | Rel. > BW 3.1     | No requirements.      |
|[{{ odp }}](../documentation/odp/index.md)             | SAP_BASIS >= 730, BW >= 7,3X   | No requirements.   |
{% if page.meta.product != "xtract-for-alteryx" %}|[{{ deltaq }}](../documentation/deltaq/index.md)          | Rel. > 4.6C       | Customization required, see [Customization for DeltaQ](../documentation/setup-in-sap/customization-for-deltaq.md).     |
|[{{ ohs }}](../documentation/ohs/index.md)             | Rel. > BW 3.5     | Customization required, see [Customization for OHS in BW](../documentation/setup-in-sap/customization-for-ohs-in-bw.md).  |
|[{{ tableCDC }}](../documentation/table-cdc/index.md)      | SAP ECC 5.0 or above     | Installation of a custom function modules is necessary, see [Table CDC Requirements](../documentation/table-cdc/index.md#prerequisites). |
{% endif %}

For Information about the installation of the custom function modules and the SAP customization, check the section [SAP Customization](../documentation/setup-in-sap/index.md).


### SAP Licenses
Additional SAP licenses might be required for extracting data from SAP. Contact SAP to verify these requirements.

{% include "requirements/operating-systems.md" %}

{% include "requirements/xis-hardware.md" %}