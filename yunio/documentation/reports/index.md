This page shows how to use the *Report* integration type.\
The *Report* integration type can be used to extracts data from ABAP reports and SAP transactions.

### About Reports

ABAP report programs extract and present huge amounts of data for SAP business applications. SAP offers predefined standard reports that cover the basic needs of customers. They can be executed via transaction codes.

Tip

Use transaction code SAP1 to get a list of all reports for all modules.

### General Workflow

The following graphic shows the general workflow of setting up report services with yunIO:

### Prerequisites

- A connection to an SAP system is available, see [SAP Connection](../sap-connection/).
- The SAP user has sufficient user rights, see [SAP Authority Objects](../setup-in-sap/sap-authority-objects/#report).
- The custom function module `Z_XTRACT_IS_REMOTE_REPORT` is installed in your SAP system, see [Function Module for Reports](../setup-in-sap/custom-function-module-for-reports/#installation-of-z_xtract_is_remote_report). As of `Z_XTRACT_IS_REMOTE_REPORT` version 1.2 access to reports must be explicitly granted, see [Knowledge BAse Article: Authorize Access to Specific Reports](../../knowledge-base/authorize-access-to-specific-reports/).
- The report must return a table-like structure in SAP.

Warning

**Missing Authorization.**\
To use the *Report* integration type, access to the designated authority objects (RFC) in SAP must be available. Adjust [SAP Authority Objects: Report](../setup-in-sap/sap-authority-objects/#report) accordingly.

### Look Up a Report

1. [Create a new service](../../getting-started/#create-a-service) of integration type *Report*.
1. In the *Search SAP Reports* menu, enter the name or TCODE of a report . The use of wildcards ( * ) is only supported for report names.
1. Click **[Search]** to look up the name of a report or click **[By TCODE]** to look up the TCODE.
1. Select a source file from the list of available search results .

The settings of the *Report* integration type open.

### Define the *Report* Service

The following options are available to filter data, detect columns, etc:

1. If the report has variants, select a variant in the subsection [*Advanced Settings*](settings/#variant).
1. Optional: In the subsection [*Selection Parameters*](settings/#selection-parameters), enter values for selection criteria you want to change or dynamize.
1. Click **[Detect Columns]** to execute the report based on the selected variant or selections and detect columns automatically. The detected columns are displayed in the subsection *Output columns*. This step is mandatory for using the service.
1. Click **[Run]** to check the results, see [Running Services in yunIO](../run-services/#run-services-in-yunio).

For more information on *Report* settings, see [Settings](settings/).

### Sample

Follow the steps below to create a simple service that extracts the SAP ABAP report RLT10010 (Evaluation of Movements per Storage Type).

1. [Create a new service](../../getting-started/#connect-to-sap) of integration type *Report*.
1. [Look up](#look-up-a-report) the report RLT10010.
1. Select a variant or enter selection parameters. The given example uses a variant *VAR01*.
1. Run the report in SAP to determine the number of rows to skip. Set **Skip rows from top** to 8 to skip the header of the report.
1. Click **[Detect Columns]** to automatically detect the columns of the report. The detected columns are displayed in the section *Output Columns*.
1. Click **[Save]** to save the service.
1. Click **[Run]** to check the output of the service, see [Running Services in yunIO](../run-services/#run-services-in-yunio).

### Custom Reports

The extraction of custom reports (Z reports) is possible if the report returns a table-like structure in SAP. Issues specific to Z reports are not included in the scope of support provided by Theobald Software.
