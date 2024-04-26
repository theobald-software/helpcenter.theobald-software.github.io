---
title: Create a Report Service
description: How to create a web service that executes function modules / BAPIs
---

This section shows how to use the {{ report }} {{ component }}.<br>
A report extraction is possible if the report returns a table-like structure in SAP.

### General Workflow
The following graphic shows the general workflow of setting up report services with yunIO:<br>
![Report-Workflow](../../assets/images/yunio/report-general-workflow-yunIO.png){:class="img-responsive" width="400px"}

### Prerequisites

- A connection to an SAP system is available, see [SAP Connection](../sap-connection/index.md).
- The SAP user has sufficient user rights, see [SAP Authority Objects](../setup-in-sap/sap-authority-objects.md/#report).
- The custom function module `Z_XTRACT_IS_REMOTE_REPORT` is installed in your SAP system, see [Installation of Z_XTRACT_IS_REMOTE_REPORT](../setup-in-sap/custom-function-module-for-reports.md/#installation-of-z_xtract_is_remote_report).
- The report must return a table-like structure in SAP.

### Look Up a Report

1. [Create a new service](../../getting-started.md/#create-a-service) of {{ component }} {{ report }}. 
2. In the *Search SAP Reports* menu, enter the name or TCODE of a report :number-1:. The use of wildcards ( * ) is only supported for report names.<br>
![SAP-Table-or-Views](../../assets/images/yunio/report-lookup.png){:class="img-responsive" width="750px"}
3. Click **[Search]** to look up the name of a report or click **[By TCODE]** to look up the TCODE.
4. Select a source file from the list of available search results :number-2:. 

The settings of the {{ report }} {{ component }} open.

### Next Steps

The following options are available to filter data, detect columns, etc:

1. If the report has variants, select a variant in the subsection [*Advanced Settings*](settings.md/#variant).<br>
![report-rlt10010](../../assets/images/yunio/report-rlt10010.png){:class="img-responsive"}
2. Optional: In the subsection [*Selection Parameters*](settings.md/#selection-parameters), enter values for selection criteria you want to change or dynamize.
3. Click **[Detect Columns]** to execute the report based on the selected variant or selections and detect columns automatically. 
The detected columns are displayed in the subsection *Output columns*. This step is mandatory for using the service.
4. Click **[Run]** to check the results, see [Running Services in yunIO](../run-services.md/#run-services-in-yunio).

For more information on {{ report }} settings, see [Settings](settings.md).

### Sample

Follow the steps below to create a simple service that extracts the SAP ABAP report RLT10010 (Evaluation of Movements per Storage Type).

1. [Create a new service](../../getting-started.md/#connect-to-sap) of {{ component }} {{ report }}.
2. [Look up](#look-up-a-report) the report RLT10010.
3. Select a variant or enter selection parameters. The given example uses a variant *VAR01*.<br>
![report-rlt10010](../../assets/images/yunio/report-rlt10010.png){:class="img-responsive"}
4. Run the report in SAP to determine the number of rows to skip. Set **Skip rows from top** to 8 to skip the header of the report.
![SAP-Table-or-Views](../../assets/images/yunio/report-sap3.png){:class="img-responsive"}
5. Click **[Detect Columns]** to automatically detect the columns of the report. The detected columns are displayed in the section *Output Columns*.
6. Click **[Save]** to save the service.
7. Click **[Run]** to check the output of the service, see [Running Services in yunIO](../run-services.md/#run-services-in-yunio).<br>
![report-response.png](../../assets/images/yunio/report-response.png){:class="img-responsive"}

