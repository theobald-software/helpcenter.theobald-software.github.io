The following article describes a scenario that uses Microsoft Fabric Data Pipelines to trigger and automate SAP data movements using Xtract Universal's [web services](../../web-api/). This article targets customers that utilize Fabric Data Pipelines as a platform for orchestrating data movement and transformation.

Note

The depicted scenario is not a best practice or recommendation.\
The following is a suggestion of how an orchestration of Xtract Universal extractions from Microsoft Fabric Data Pipelines can be implemented.

### Prerequisites

- A [Microsoft On-premises Data Gateway](https://www.microsoft.com/en-us/download/details.aspx?id=53127) is set up on the server where Xtract Universal runs.\
  This ensures that Xtract Universal's web server is accessible from Fabric over HTTP(S).
- The extraction uses a [push-destination](../../documentation/destinations/), such as Microsoft Fabric OneLake or Azure Blob Storage.
- The extraction runs successfully when called from a web browser. See [Web-API](../../web-api/#run-extractions).
- Access to Microsoft Fabric OneLake.
- A Microsoft Fabric-enabled Workspace.
- Knowledge of how to build Data Pipelines.

### Basic Principles

The depicted scenario builds upon the following basic principles:

- Xtract Universal offers a [Web-API](../../web-api/#run-extractions) through which various actions can be performed via HTTP(S) calls.
- Microsoft's On-premises Data Gateway enables access to on-premises resources, such as Xtract Universal, from Fabric Data Pipelines.
- Microsoft's Fabric Data Pipelines provide a *Web Activity* that allows calling resources via HTTP(S) through a Data Gateway.

The scenario utilizes two data pipelines to run extractions from Microsoft's Fabric:

- Pipeline 1 ([Trigger an Extraction](#trigger-an-extraction)) extracts data from SAP.
- Pipeline 2 ([Retrieve Extraction Logs](#retrieve-extraction-logs)) retrieves the extraction logs of the executed Xtract Universal extraction.

### Trigger an Extraction

Follow the steps below to create **Pipeline 1**, which extracts data from SAP:

1. Create a Data Pipeline under your workspace in Microsoft Fabric.
1. Start with a blank Canvas Pipeline and select *Web Activity*.
1. Set up the connection using the Data Gateway and use the URL that runs the Xtract Universal extraction.
1. Save and run the Data Pipeline.
1. Verify in the Xtract Universal server if the extraction has been triggered.

The pipeline works as a standalone solution. It can be run in debug mode or triggered via a scheduler.

### Retrieve Extraction Logs

Follow the steps below to create **Pipeline 2**, which retrieves the extraction logs:

1. Create a Data Pipeline under your workspace in Microsoft Fabric.
1. Start with a blank Canvas Pipeline and select *Web Activity*.
1. Set up the connection using the Data Gateway and use the URL that retrieves the extraction logs of the executed Xtract Universal extraction.
1. Save and run the extraction pipeline to see the output, which contains the retrieved extraction logs.

______________________________________________________________________

#### Related Links

- [Microsoft Fabric - End-to-End Pipeline Tutorial](https://learn.microsoft.com/en-us/fabric/data-factory/tutorial-end-to-end-pipeline)
- [Microsoft Fabric - Data Factory Documentation](https://learn.microsoft.com/en-us/fabric/data-factory/)
