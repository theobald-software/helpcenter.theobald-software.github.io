This page shows how to use the Query extraction type.\
The Query extraction type can be used to extract data via SAP queries.

### About SAP Queries

SAP Queries are used to access data sets in SAP, see [SAP Help - Working with Queries](https://help.sap.com/viewer/b1c834a22d05483b8a75710743b5ff26/7.51.6/en-US/0e05493bbccf41a79caed7099c82bd48.html) for more information. The SAP queries that can be used with Query extraction type are created by the SAP transactions SQ02 and SQ01. To use a BW Query as a data source, see [BW InfoCubes and BExQueries](../bwcube/).

### Prerequisites

- A connection to an SAP system is available, see [SAP Connection](../sap-connection/).
- The SAP user has sufficient user rights, see [SAP Authority Objects](../setup-in-sap/sap-authority-objects/#query).

Warning

**Missing Authorization.**\
To use the Query extraction type, access to the designated authority objects (RFC) in SAP must be available. Adjust [SAP Authority Objects: SAP Query](../setup-in-sap/sap-authority-objects/#query) accordingly.

### Create a Query Extraction

1. In the main window of the Designer, click **[New]** to create a new extraction. The window "Create Extraction" opens.
1. Select an [SAP Connection](../sap-connection/) of type **RFC** from the drop-down menu **Source**.
1. Enter a unique name for your extraction.
1. Select the extraction type **Query**.
1. Click **[OK]**. The main window of the extraction type opens automatically.

The majority of the functions of the extraction type can be accessed in the main window.

### Look up an SAP Query

1. In the main window of the extraction type, click **[]**. The window "Query Lookup" opens.
1. Enter the name of an SAP query in the field **Query Name** or the name of a user group in the field **User group** . Use wildcards (\*) if needed.
1. Select the query work area that contains the query object . For more information, see [SAP Help: Query Areas](https://help.sap.com/doc/saphelp_nw74/7.4.16/en-us/4e/3bdad0b8503b0fe10000000a42189e/frameset.htm).
1. Click **[]**. Search results are displayed.
1. Select a query and click **[OK]**.

The application returns to the main window of the extraction type.

### Define the Query Extraction Type

The Query extraction type offers the following options for query extractions:

1. If the SAP query has variants, select a variant from the drop-down-list *Variant*. For more information, see [Choose a Variant](variants-and-selections/#choose-a-variant).
1. In the section *Selection Screen*, edit a selection criterion you want to change or dynamize . For more information, see [Edit Selections](variants-and-selections/#edit-selections).
1. Check the [Extraction Settings](settings/) and the [General Settings](general-settings/) before running the extraction.
1. Click **[OK]** to save the extraction type.

You can now run the extraction, see [Execute and Automate Extractions](../execute-and-automate/).
