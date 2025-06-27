This page shows how to use the Xtract Query component.\
The Xtract Query component can be used to extract data via SAP queries.

### About SAP Queries

SAP Queries are used to access data sets in SAP, see [SAP Help - Working with Queries](https://help.sap.com/viewer/b1c834a22d05483b8a75710743b5ff26/7.51.6/en-US/0e05493bbccf41a79caed7099c82bd48.html) for more information. The SAP queries that can be used with Xtract Query component are created by the SAP transactions SQ02 and SQ01. To use a BW Query as a data source, see [BW InfoCubes and BExQueries](../bwcube/).

### Prerequisites

- A connection to an SAP system is available, see [SAP Connection](../sap-connection/).
- The SAP user has sufficient user rights, see [SAP Authority Objects](../setup-in-sap/sap-authority-objects/#query).

Warning

**Missing Authorization.**\
To use the Xtract Query component, access to the designated authority objects (RFC) in SAP must be available. Adjust [SAP Authority Objects: SAP Query](../setup-in-sap/sap-authority-objects/#query) accordingly.

### Add an Xtract Query Component

Follow the steps below to add an Xtract Query component to your workflow:

1. Drag & drop the Xtract component to your Alteryx workflow .
1. Assign an existing SAP connection .
1. Click **[ Edit]** to open the main window of the component.

The majority of the functions of the component can be accessed in the main window.

### Look up an SAP Query

1. In the main window of the component, click **[]**. The window "Query Lookup" opens.
1. Enter the name of an SAP query in the field **Query Name** or the name of a user group in the field **User group** . Use wildcards (\*) if needed.
1. Select the query work area that contains the query object . For more information, see [SAP Help: Query Areas](https://help.sap.com/doc/saphelp_nw74/7.4.16/en-us/4e/3bdad0b8503b0fe10000000a42189e/frameset.htm).
1. Click **[]**. Search results are displayed.
1. Select a query and click **[OK]**.

The application returns to the main window of the component.

### Define the Xtract Query Component

The Xtract Query component offers the following options for query extractions:

1. If the SAP query has variants, select a variant from the drop-down-list *Variant*. For more information, see [Choose a Variant](variants-and-selections/#choose-a-variant).
1. In the section *Selection Screen*, edit a selection criterion you want to change or dynamize . For more information, see [Edit Selections](variants-and-selections/#edit-selections).
1. Check the [Extraction Settings](settings/) before running the workflow.
1. Click **[OK]** to save the component.

You can now run the workflow.
