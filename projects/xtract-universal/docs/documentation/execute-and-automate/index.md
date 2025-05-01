---
title: Execute and Automate
description: Execute and Automate Extractions
---

This page shows how to run extractions automatically and manually. 
Examples on how to call extractions:

- [Commandline](call-via-commandline.md)
- [Webservice](../../web-api.md) 
- [Scheduler](call-via-scheduler.md)
- [ETL-Tools](call-via-etl.md)


### About the Execution of Extractions

Extractions are triggered by an HTTP request and executed on the [{{ productName }} server](../server/index.md).

The configuration of [source](../sap-connection/index.md), [destination](../destinations/index.md) and [extraction type](../introduction.md/#extraction-types) defines how the data transfer is performed. <br>
This configuration can contain dynamic elements, like [extraction parameters](../parameters/extraction-parameters.md) and [script expressions](../parameters/script-expressions.md).
Depending on the destination, the execution of an extraction can be triggered either interactively or unattended.

#### Interactive Extractions

Extractions are typically triggered interactively when a user requires new or updated data from SAP, and no additional data storage system (like a data warehouse) is present.
In these scenarios, execution of an extraction is typically triggered by one of {{ productName }}'s plugins 
(like [Alteryx](../destinations/alteryx.md), [Power BI Connector](../destinations/Power-BI-Connector.md) or [Power BI Report Server](../destinations/server-report-services.md)) 
or directly by the target environment ([QlikSense & QlikView](../destinations/qliksense-qlikview.md)).


#### Unattended Extractions

When an additional data storage system (database, cloud storage, flat files) is present, extractions are typically triggered as part of an ELT-process (Extract, Load, Transform), which is run unattended at regular intervals by a scheduler or other orchestration software.
In these scenarios, execution of an extractions is typically triggered by running the [XU command line tool](call-via-commandline.md) from the orchestration software. 

For advanced scenarios or environments that do not support commandline programs, the [HTTP Webservices](../../web-api.md) can be used for triggering and monitoring executions.

!!! note 
	{{ productName }} does not have its own scheduler. You can use third party schedulers. 

### Run parallel Extractions
The amount of possible parallel extractions depends on the hardware resources of the Windows server. 

Every triggered extraction is executed in a separate process of the operating system.
Reliability and throughput of the network connection, available RAM and disk throughput (for logging and caching) are all crucial factors for the parallelization.
Other factors are the performance of the SAP source system the destination.


!!! note 
	{{ productName }} scales corresponding to the available hardware resources of the runtime environment.

### Automate the Creation of Extractions

As of {{ productName }} Version 4.26.1, the command line tool xu-config.exe is available in the installation directory of {{ productName }}, e.g. `{{ installationDir }}\xu-config.exe`.
The tool creates extractions, sources and destinations outside of the {{ productName }} Designer.

For more information, see [Knowledge Base Article: Create Extractions via Commandline](../../knowledge-base/config-command-line-tool.md).

****
#### Related Links
- [Knowledge Base Article: Call Extractions via Script](../../knowledge-base/call-extraction-via-script.md)
- [Knowledge Base Article: Execute & Schedule all Extractions using an SSIS Package](../../knowledge-base/execute_all_defined_xu_extractions.md)
