---
title: Integration in Azure Data Factory using Webservices
description: automation-of-xu-data-extracts-with-adf-Part 2
author: Yogen Weinreich, Valerie Schipka
---


The following article describes a scenario that uses Azure Data Factory (ADF) to trigger and automate SAP data movements using {{ productName }}'s [webservices](../web-api.md). <br>
This article targets customers that utilize ADF as a platform for orchestrating data movement and transformation. <br>

!!! note
    The depicted scenario is no best practice or recommendation.
    The following is a suggestion of how an orchestration of {{ productName }} extractions from ADF can look like, see also [Integration in Azure Data Factory using Commandline](adf-integration-using-command-line.md).


### Prerequisites

- A [self-hosted Integration runtime](https://docs.microsoft.com/EN-US/azure/data-factory/create-self-hosted-integration-runtime#create-a-self-hosted-ir-via-azure-data-factory-ui) is set up on the server {{ productName }} runs on. 
This ensures that {{ productName }}'s web server is accessible from ADF over http(s).   
- The extraction uses a [push-destination](../documentation/destinations/index.md), e.g., Azure Blob Storage or Azure SQL Server.<br> 
- The extraction runs successfully when called from a web browser, see [Web-API](../web-api.md/#run-extractions).
- Access to Azure Data Factory.
- Knowledge on how to build ADF pipelines.

### Basic Principles

The depicted scenario builds upon the following basic principles:

- {{ productName }} offers a [Web-API](../web-api.md/#run-extractions) through which various actions can be performed via http(s) calls. 
- Microsoft's self-hosted Integration runtime enables access to on-prem resources, such as {{ productName }}, from ADF.
- Microsoft's ADF offers a *Web Activity* that allows calling resources via http(s) and a self-hosted Integration runtime.

The depicted scenario uses two ADF pipelines to run extractions from ADF:
- a [Child Pipeline](#child-pipeline) that extracts data from SAP.
- a [Master pipeline](#master-pipeline) that executes the child pipeline for different extractions.<br>

### Child Pipeline

Follow the steps below to create a child pipeline that extracts data from SAP:

1. Run an extraction using a web activity :number-1:, see [Web-API - Run Extractions](../web-api.md/#run-extractions).<br>
![XU_ADF_global_parameter](../assets/images/articles/xu/xu_ADF_2_Child_pipeline.png)
2. Query the extraction status in regular intervals using a web activity :number-2:, see [Web-API - Get Status of an Extraction](../web-api.md/#get-status-of-an-extraction). <br>
![XU_ADF_global_parameter](../assets/images/articles/xu/xu_ADF_2_Child_pipeline_Check_Status.png)
3. Add a condition that checks the extraction status :number-3: and executes follow up activities in case the extractions fails.<br>
Example: When the extraction fails, use a web activity to query the extraction log, see [Web-API - Get Extraction Logs](../web-api.md/#get-extraction-logs), and write the logs to an Azure Blob Storage account. 
A follow up event can then be triggered by the *Storage event*, e.g., sending a notification email.<br>
![XU_ADF_global_parameter](../assets/images/articles/xu/xu_ADF_2_Child_pipeline_write_Log.png)

The pipeline functions as a standalone solution. It can be run in debug mode or can be triggered via a scheduler. 

### Master Pipeline

Follow the steps below to create a master pipeline that executes the child pipeline multiple times, each time for a different extraction.
This allows automatic iteration through all extractions defined in {{ productName }}. 

1. Query a list of extractions :number-1: using a web activity, see [Web-API - Get Extraction Details](../web-api.md/#get-extraction-details).<br>
![XU_ADF_global_parameter](../assets/images/articles/xu/xu_ADF_2_Master_pipeline.png)
2. Loop over the list of extractions :number-2:. 
3. In the loop, pass the name of the current extraction to the *Child pipeline* and execute the *Child pipeline* for that extraction.<br>
![XU_ADF_global_parameter](../assets/images/articles/xu/xu_ADF_2_Master_pipeline_ForEachLoop.png)


### Variables and Parameters

Parameters and variables are used in both pipelines:
- Parameters provide constant values that are used in multiple activities. 
- Variables provide dynamic values at runtime and are used to pass on data between different activities or pipelines.

The following parameters and variables are used in the depicted scenario:

| Parameter / Variable| Name                        | Data Type | Defined in      | Description                                                                                                                                                                                      |
|--------------------|------------------------------|-----------|-----------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Parameter          | p_global_XU_HOST             | String    | global          | This parameter contains the base URL of the {{ productName }} webserver, here: `https://MyOnPremXuServer.theobald.local:8165`. The parameter is used in every Web Activity.                       |
| Variable           | v_XU_extractions_array       | Array     | Master pipeline | This variable stores the list of XU extractions returned by *Web* activity *Get_List_of_XU_extractions*. The variable's value is set in the *Set variable* activity *Set variable_extraction array*. |
| Parameter          | p_extractionName_from_Master | String    | Child pipeline  | This parameter takes on the value (extraction name) of the current iteration *For Each* activity *ForEach extraction in v_extraction array. As a default name, you assign a name of an extraction. This allows running the Child pipeline w/o being triggered from the Master pipeline.                                                         |
| Variable           | v_TIMESTAMP                  | String    | Child pipeline  | This variable stores the extraction's timestamp returned by *Web* activity *XU_START_JOB*. The variable’s value is set in the *Set variable* activity *TIMESTAMP*. The variable is later used in *Web* activities *CHECK_XU_JOB_STATUS* and *XU_Get_Extraction_Log*.         |
| Variable           | v_JOB_STATUS                 | String    | Child pipeline  | This variable stores the extraction's run status returned by *Web* activity*CHECK_XU_JOB_STATUS*. The variable’s value is set in the *Set variable* activity *JOB_STATUS*. As long as the variable has the status "Running", the *Until* activity *IS_JOB_RUNNING* is executed. Other values this variable can can have are "FinishedNoErrors" and "FinishedErrors".                                                                                                                                                                                                   |
| Variable           | v_Log                        | String    | Child pipeline  |This variable stores the extraction's log returned by *Web* activity*XU_Get_Extraction_Log*. The variable’s value is set in the *Set variable* activity *Set_variable_XU_Log*. The value of this variable is appended to the log file in the *Copy data* activity *Copy Extraction Log to Blob*.                                                                                                                                                                                                  |

For more information on variables in ADF, see [Call Dynamic Extractions with Variables in ADF](call-dynamic-extractions-with-variables-in-adf.md).

### Download JSON Templates

Downloads for the child and master pipeline are provided below:

[:material-download-circle: Download CHILD pipeline as json](../assets/files/xu/CHILD_pipeline_Execute_single_XU_extraction.json){ .md-button .md-button--primary }
[:material-download-circle: Download MASTER pipeline as json](../assets/files/xu/MASTER_pipeline_Loop_over_XU_extractions.json){ .md-button .md-button--primary }

*****
#### Related Links
- [Call Dynamic Extractions with Variables in ADF](call-dynamic-extractions-with-variables-in-adf.md).
- [Integration in Azure Data Factory using Commandline](adf-integration-using-command-line.md)
