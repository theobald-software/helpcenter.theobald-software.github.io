---
title: Create a Report Service
description: How to create a web service that executes function modules / BAPIs
---

The following section shows how to use the {{ report }} {{ component }}.<br>
A report extraction is possible if the report returns a table-like structure in SAP.

### General Workflow
The following graphic shows the general workflow of setting up report services with yunIO:<br>
![Report-Workflow](../../assets/images/yunio/report-general-workflow-yunIO.png){:class="img-responsive" width="400px"}

### Create a new Service


## Look Up a Report

1. Create a new [*Service*](./getting-started#creating-a-service) of type *Report*. 
2. Click **[Save and edit]**. The *Search SAP Reports* menu opens.
3. Enter the name of a report or the TCODE of a report in the field **Search by a report name or an exact TCODE** (1). The use of wildcards ( * ) is only supported for report names.
![SAP-Table-or-Views](../../assets/images/yunio/report-lookup.png){:class="img-responsive" width="750px"}
4. To look up report names, click **[Search]** (2).
To look up TCODES, click **[By TCODE]**.
5. Select a source file from the list of available search results (3). 
The extraction settings of *Report* open automatically.<br>

## Example

The following example shows how to set up a yunIO service that extracts the SAP ABAP report RLT10010 (Evaluation of Movements per Storage Type):
1. Create a new service of integration type *Report*, see [Getting Started: Creating a Service](./getting-started#creating-a-service).
2. Look up the report RLT10010, see [Look Up a Report](#look-up-a-report).
3. Select a variant or enter selection parameters. The given example uses a variant *VAR01*.<br>
![report-rlt10010](../../assets/images/yunio/report-rlt10010.png){:class="img-responsive"}
4. Run the report in SAP to determine the number of rows to skip. Set **Skip rows from top** to 8 to skip the header of the report.
![SAP-Table-or-Views](../../assets/images/yunio/report-sap3.png){:class="img-responsive"}
5. Click **[Detect Columns]** to automatically detect the columns of the report. The detected columns are displayed in the section *Output Columns*.
6. Click **[Save]** to save the service.
7. Test the output of the service, see [Testing a Service](./run-services#testing-a-service).<br>
![report-response.png](../../assets/images/yunio/report-response.png){:class="img-responsive"}

