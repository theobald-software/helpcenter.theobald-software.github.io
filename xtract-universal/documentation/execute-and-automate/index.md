This page shows how to run extractions automatically and manually. Examples on how to call extractions:

- [Commandline](call-via-commandline/)
- [Webservice](../../web-api/)
- [Scheduler](call-via-scheduler/)
- [ETL-Tools](call-via-etl/)

### About the Execution of Extractions

Extractions are triggered by an HTTP request and executed on the [Xtract Universal server](../server/).

The configuration of [source](../sap-connection/), [destination](../destinations/) and [extraction type](../introduction/#extraction-types) defines how the data transfer is performed.\
This configuration can contain dynamic elements, like [extraction parameters](../parameters/extraction-parameters/) and [script expressions](../parameters/script-expressions/). Depending on the destination, the execution of an extraction can be triggered either interactively or unattended.

#### Interactive Extractions

Extractions are typically triggered interactively when a user requires new or updated data from SAP, and no additional data storage system (like a data warehouse) is present. In these scenarios, execution of an extraction is typically triggered by one of Xtract Universal's plugins (like [Alteryx](../destinations/alteryx/), [Power BI Connector](../destinations/Power-BI-Connector/) or [Power BI Report Server](../destinations/server-report-services/)) or directly by the target environment ([QlikSense & QlikView](../destinations/qliksense-qlikview/)).

#### Unattended Extractions

When an additional data storage system (database, cloud storage, flat files) is present, extractions are typically triggered as part of an ELT-process (Extract, Load, Transform), which is run unattended at regular intervals by a scheduler or other orchestration software. In these scenarios, execution of an extractions is typically triggered by running the [XU command line tool](call-via-commandline/) from the orchestration software.

For advanced scenarios or environments that do not support commandline programs, the [HTTP Webservices](../../web-api/) can be used for triggering and monitoring executions.

Note

Xtract Universal does not have its own scheduler. You can use third party schedulers.

### Run parallel Extractions

The amount of possible parallel extractions depends on the hardware resources of the Windows server.

Every triggered extraction is executed in a separate process of the operating system. Reliability and throughput of the network connection, available RAM and disk throughput (for logging and caching) are all crucial factors for the parallelization. Other factors are the performance of the SAP source system the destination.

Note

Xtract Universal scales corresponding to the available hardware resources of the runtime environment.

### Automate the Creation of Extractions

As of Xtract Universal Version 4.26.1, the command line tool xu-config.exe is available in the installation directory of Xtract Universal, e.g. `C:\Program Files\XtractUniversal\xu-config.exe`. The tool creates extractions, sources and destinations outside of the Xtract Universal Designer.

For more information, see [Knowledge Base Article: Create Extractions via Commandline](../../knowledge-base/config-command-line-tool/).

______________________________________________________________________

#### Related Links

- [Knowledge Base Article: Call Extractions via Script](../../knowledge-base/call-extraction-via-script/)
- [Knowledge Base Article: Execute & Schedule all Extractions using an SSIS Package](../../knowledge-base/execute_all_defined_xu_extractions/)
