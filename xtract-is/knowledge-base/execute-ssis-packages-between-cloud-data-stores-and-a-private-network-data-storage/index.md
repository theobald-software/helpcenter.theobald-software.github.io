The following article describes a secure data integration approach to execute SSIS packages that access an SAP source system located in a private network (domain).

To perform data integration securely in a private network environment without a direct line-of-sight from the public cloud environment, you can install a self-hosted IR in your on-premises environment behind a firewall, or inside a virtual private network. The self-hosted integration runtime only makes outbound HTTP-based connections to the internet. The Xtract Connection (SAP connection) with the property *ConnectByProxy = True* is used to implement access to the local network using the Self-Hosted Integration Runtime (SHIR).

### Prerequisites

The following prerequisites are mostly based on the official Microsoft documentation for using Azure integration runtime (IR) as well as Self-Hosted Integration Runtime (SHIR).

- Download and install the latest version of self-hosted IR and the additional drivers and runtime on your on-premises machine or Azure virtual machine (VM).
- Create an SSIS package on a development environment (Visual Studio) and execute it successfully.
- Publish the SSIS project to an SSIS in Azure Data Factory (ADF).

### Step-by-Step Instructions

1. Configure and start the Azure Data Factory IR with the necessary files to run the [Xtract IS for Azure extension in ADF](../../xtract-is-for-azure/).

1. Download and install the SHIR on the local Windows server (on-prem), see [Microsoft Integration Runtime](https://www.microsoft.com/en-us/download/details.aspx?id=39717).

1. Register the Integration Runtime (Self-hosted), see [Configure a self-hosted IR via UI](https://learn.microsoft.com/en-US/azure/data-factory/create-self-hosted-integration-runtime?tabs=data-factory#configure-a-self-hosted-ir-via-ui).

1. If applicable: Enable SSIS package execution on self-hosted IR node using the following cmd command:

   ```text
   C:\Program Files\Microsoft Integration Runtime\5.0\Shared>dmgcmd -eesp

   ```

1. Execute the *XtractISSetup.exe* file to install Xtraxt IS and use Xtract IS Data Flow Tasks.

1. If your SSIS package uses one of the following components, download and install the relevant drivers:

   - Object Linking and Embedding Database (OLEDB), see [OLE DB Driver 18 for SQL Server](https://learn.microsoft.com/en-us/sql/connect/oledb/download-oledb-driver-for-sql-server?view=sql-server-ver16)
   - Open Database Connectivity (ODBC)
   - ADO.NET connectors
   - Azure Feature Pack, see [SSIS 2017 Feature Pack for Azure](https://www.microsoft.com/en-us/download/details.aspx?id=54798)

Note

If the Integration Runtime (Self-hosted) node encouters errors during execution, error logs are provided using the Windows Event Viewer.

______________________________________________________________________

#### Related Links:

- [Microsoft Documentation: .NET Framework system requirements](https://learn.microsoft.com/en-us/dotnet/framework/get-started/system-requirements)
- [Microsoft Documentation: Integration runtime in Azure Data Factory](https://learn.microsoft.com/en-US/azure/data-factory/concepts-integration-runtime#self-hosted-integration-runtime)
- [Microsoft Documentation: Self-hosted integration runtime](https://learn.microsoft.com/en-US/azure/data-factory/concepts-integration-runtime#self-hosted-integration-runtime)
- [Microsoft Documentation: Troubleshoot self-hosted integration runtime](https://learn.microsoft.com/en-us/azure/data-factory/self-hosted-integration-runtime-troubleshoot-guide?tabs=data-factory)
- [Microsoft Documentation: Assess SSIS project\\packages for executions in Azure](https://learn.microsoft.com/en-us/azure/data-factory/how-to-invoke-ssis-package-ssdt#assess-ssis-projectpackages-for-executions-in-azure)
