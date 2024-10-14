---
title: Xtract IS for Azure
description: Learn about Xtract IS for Azure - a plug’n’play solution for SAP and Azure SQL Server Integration Services.
hide:
  - navigation
---

![img](site:assets/images/logos/theo-thumbs.png){ .lg .middle width="30px"} This section shows how to set up Xtract IS on an Azure SSIS Integration Runtime environment.

### About Xtract IS for Azure

SSIS packages that contain [Xtract IS](documentation/introduction.md) components can be run on an [Azure-SSIS Integration Runtime (IR)](https://docs.microsoft.com/en-us/azure/data-factory/create-azure-ssis-integration-runtime).
Instead of deploying the developed packages to an on-prem SSIS server, the packages are deployed to an Azure-SSIS IR to be scheduled and run in the Azure cloud.

<div class="grid cards" markdown>

-   :yunio-edit: __Development of SSIS Packages__

    ---

    Installation of Xtract IS on an on-prem Visual Studio/SSDT environment, see [Xtract IS Setup](../documentation/setup/installation.md).

-   :yunio-run: __Running SSIS Packages__

    ---

    Installation of Xtract for Azure on an Azure-SSIS IR, see [Xtract IS for Azure Installation](#installation) 

</div>

In this scenario Xtract IS is licensed per Azure-SSIS IR on which SSIS packages are deployed and executed using the [Azure SSIS-IR Cluster ID](../knowledge-base/determine-the-azure-cluster-ID.md).
This license model is distributed as "Xtract IS for Azure".


<!---
![XISforAzure_Architecture](../assets/images/xis/for-azure/Xtract_IS_for_Azure.png){:class="img-responsive"}
-->

### Prerequisites

- [Azure-SSIS Integration Runtime (IR), based on Microsoft's Azure Data Factory v2 (ADFv2)](https://docs.microsoft.com/en-us/azure/data-factory/create-azure-ssis-integration-runtime)
- The SAP system needs to be accessible from the Azure-SSIS IR, e.g., through a VPN tunnel or a self-hosted Integration Runtime (SHIR), see [Microsoft Documentation: Configure a self-hosted IR as a proxy for an Azure-SSIS IR in Azure Data Factory](https://docs.microsoft.com/en-us/azure/data-factory/self-hosted-integration-runtime-proxy-ssis). 
- When creating the SSIS packages, use the correct SQL Server Data Tools (SSDT) for your SQL Server Integration Services (SSIS) version, see [Microsoft Documentation: Download SQL Server Data Tools (SSDT) for Visual Studio](https://docs.microsoft.com/en-us/sql/ssdt/download-sql-server-data-tools-ssdt?view=sql-server-ver15) for details.

### Setup the Azure-SSIS IR Environment

Refer to the Microsoft documentation to set up the Azure-SSIS Integration Runtime environment:

- [Provision the Azure-SSIS Integration Runtime in Azure Data Factory with Azure portal UI](https://docs.microsoft.com/en-us/azure/data-factory/tutorial-deploy-ssis-packages-azure) 
- [Provision the Azure-SSIS Integration Runtime in Azure Data Factory with PowerShell](https://docs.microsoft.com/en-us/azure/data-factory/tutorial-deploy-ssis-packages-azure-powershell)

Once the environment runs, develop a simple SSIS package that does NOT contain any Xtract IS  {{ components }} and deploy and run the package on the Azure-SSIS IR.
If the SSIS package runs is successfully, proceed to set up Xtract IS for Azure on the Azure-SSIS IR. 

!!! note
    By default Azure automatically updates the Microsoft integration runtime. 
	To avoid possible compatibility issues with Xtract IS for Azure, disable automatic updates.


### Install Xtract IS for Azure

=== "Manual Setup"

	#### Create an Azure Storage container

	Follow the instructions in the [Microsoft Documentation: Standard Custom Setup](https://docs.microsoft.com/en-us/azure/data-factory/how-to-configure-azure-ssis-ir-custom-setup#standard-custom-setup) to set up 3rd party extensibility for Azure-SSIS IR. 
	The only the part of the setup of an Azure storage container and the creation of a Shared Access Signature is relevant.

	Copy the following files provided in the customer portal into the Azure storage container:
	- *XtractISSetup.exe*
	- [main.cmd](https://cdn-files.theobald-software.com/download/XtractIS/main.cmd)
	- [XtractISLicense.json](../documentation/setup/license.md) (license file provided after purchasing Xtract IS for Azure)

	![XISforAzure_StorageContainer](../assets/images/xis/for-azure/XISforAzure_StorageContainer.png){:class="img-responsive" }

	#### Add Azure Storage Container to SSIS-IR

	=== "Use Azure Portal UI"

		When provisioning the Azure-SSIS IR via the Azure Portal UI, enter the Azure Storage container's SAS URI in the *Custom setup container SAS URI* field. <br>
		![XISforAzure_Portal_CustomSetupContainer](../assets/images/xis/for-azure/XISforAzure_Portal_CustomSetupContainer.png){:class="img-responsive" }

	=== "Use PowerShell"

		When provisioning the Azure-SSIS IR via a [PowerShell](https://docs.microsoft.com/de-de/azure/data-factory/tutorial-deploy-ssis-packages-azure-powershell#create-an-azure-ssis-integration-runtime) populate the parameter `-SetupScriptContainerSasUri` with the Azure Storage container's SAS URI.

	Start the Integration Runtime. 
	During the startup of the Integration Runtime the *main.cmd* is executed, which triggers an unattended installation of Xtract IS for Azure on the SSIS-IR.

	!!! note
		The startup process of the Azure SSIS-IR might take up to 20 minutes.

	!!! tip "Recommendation"
		A regular update of the software is crucial for stable performance.
		Check the [changelog](../changelog.md) for updates. 
		A newer version can be installed over the older version.


=== "Express Custom Setup"

	As an alternative to the manual setup, the Express Custom Setup can be used for installing Xtract IS for Azure on an Azure SSIS-IR. See [Microsoft documentation](https://docs.microsoft.com/en-us/azure/data-factory/how-to-configure-azure-ssis-ir-custom-setup#express-custom-setup) for more information.

	![XISforAzure_ExpressCustomSetup_1](../assets/images/xis/for-azure/XISforAzure_ExpressCustomSetup_1.png){:class="img-responsive" width="49%" }
	![XISforAzure_ExpressCustomSetup_2](../assets/images/xis/for-azure/XISforAzure_ExpressCustomSetup_2.png){:class="img-responsive" width="50%" }

	To use Xtract IS for Azure via the Express Custom Setup, a valid license file is required.
	The Express Custom Setup installs a specific version of Xtract IS for Azure. For information on the currently used version, see [Microsoft Documentation: Installing licensed components](https://docs.microsoft.com/en-us/azure/data-factory/how-to-configure-azure-ssis-ir-custom-setup#installing-licensed-components) or contact [Theobald Software](mailto:info@theobald-software.com).


### Use a Self-Hosted Integration Runtime (SHIR)

Xtract IS for Azure supports the usage of SHIR for connecting to an on-prem SAP system from Azure SSIS-IR.
For more information
******
#### Related Links
- [Knowledge Base Article: Determine the Azure SSIS-IR Cluster ID](../knowledge-base/determine-the-azure-cluster-ID.md)
- [Knowledge Base Article: Execute SSIS Packages between Cloud Data Stores and a Private Network Data Storage](../knowledge-base/execute-ssis-packages-between-cloud-data-stores-and-a-private-network-data-storage.md)

