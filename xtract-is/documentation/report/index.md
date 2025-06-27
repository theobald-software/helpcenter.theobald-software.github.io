This page shows how to use the Xtract Report component.\
The Xtract Report component can be used to extract data from most standard and custom ABAP reports and SAP transactions. A report extraction is possible if the report returns a table-like structure in SAP.

### About Reports

ABAP report programs extract and present huge amounts of data for SAP business applications. SAP offers predefined standard reports that cover the basic needs of customers. They can be executed via transaction codes.

Tip

Use transaction code SAP1 to get a list of all reports for all modules.

### Custom Reports

The extraction of custom reports (Z reports) is possible if the report returns a table-like structure in SAP. Issues specific to Z reports are not included in the scope of support provided by Theobald Software.

### Prerequisites

- A connection to an SAP system is available, see [SAP Connection](../sap-connection/).
- The SAP user has sufficient user rights, see [SAP Authority Objects](../setup-in-sap/sap-authority-objects/#report).
- The custom function module `Z_XTRACT_IS_REMOTE_REPORT` is installed in your SAP system, see [Function Module for Reports](../setup-in-sap/custom-function-module-for-reports/#installation-of-z_xtract_is_remote_report). As of `Z_XTRACT_IS_REMOTE_REPORT` version 1.2 access to reports must be explicitly granted, see [Knowledge BAse Article: Authorize Access to Specific Reports](../../knowledge-base/authorize-access-to-specific-reports/).
- The report must return a table-like structure in SAP.

Warning

**Missing Authorization.**\
To use the Xtract Report component, access to the designated authority objects (RFC) in SAP must be available. Adjust [SAP Authority Objects: Report](../setup-in-sap/sap-authority-objects/#report) accordingly.

### General Workflow

The following graphic shows the general workflow of using the Xtract Report component:

### Add an Xtract Report Component

Follow the steps below to add an Xtract Table component to your SSIS package:

1. Drag&drop the Xtract Report component from the SSIS toolbox into your data flow task.

1. Double-click the component. A connection manager is automatically assigned to the component and the main window of the component opens.

   Note

   If there are multiple connection managers, the window "Select Connection Manager" opens, see [SAP Connection](../sap-connection/#assign-connection-managers-to-xtract-components). Once a connection manager is selected, the main window of the component opens.

The majority of the functions of the component can be accessed in the main window.

### Look up a Report or Transaction

1. In the main window of the component, click **[]**. The window “Report Lookup” opens.

1. In the field **Report Name**, enter the name of a report to extract . Use wildcards (*), if needed. Alternatively, select* *TCODE*\* to look up SAP Transaction codes.

   Tip

   In certain cases reports cannot be determined based on the TCODE. You can check the report name of a TCODE using the SAP GUI menu **System > Status...**.

1. Click **[]** . Search results are displayed.

1. Select a report and click **[OK]** to confirm.

The application now returns to the main window of the component.

### Define the Xtract Report Component

The Xtract Report component offers the following options for report extractions:

1. If the report has variants, select a variant from the drop-down-list *Variant*. For more information, see [Choose a Variant](variants-and-selections/#choose-a-variant).
1. Optional: In the section *Selection Screen*, edit a selection criterion you want to change or dynamize . For more information, see [Edit Selections](variants-and-selections/#edit-selections).
1. Click **[Load live preview]** to display a live preview of the first 100 records.
1. Optional: If your report has varying column widths, activate **Dynamic column widths and offsets**. The column widths and offsets are then adjusted dynamically at report runtime.
1. Click **[Automatically detect columns]** to execute the report based on the selected variant or selections and detect columns automatically.
1. Check if the automatically detected columns are accurate.\
   When automatic column detection is not possible, the column names, widths and offsets must be set manually, see [Define Columns manually](report-columns-define/#define-columns-manually).
1. Optional: Define row settings to remove or parse certain rows, see [Define Rows](report-rows-define/).
1. Check the [Settings](settings/) before running the SSIS package.
1. Click **[OK]** to save the component.

You can now run the SSIS package.

### Example Extraction

The depicted example shows how to set up a simple report extraction:

1. Look up report RLT10010 (Evaluation of Movements per Storage Type).
1. Select variant *VAR01*.
1. Load a live preview.
1. Automatically detect columns.
1. Remove the header (skip the first 8 rows).

______________________________________________________________________

#### Related Links

- [SAP Wiki: Types of ABAP Reports](https://wiki.scn.sap.com/wiki/display/ABAP/Types+of+Reports)
- [Knowledge Base Article: Authorize Access to Specific Reports](../../knowledge-base/authorize-access-to-specific-reports/)
