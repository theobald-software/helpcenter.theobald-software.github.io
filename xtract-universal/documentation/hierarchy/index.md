This page shows how to use the BW Hierarchy extraction type. The BW Hierarchy extraction type can be used to extract Hierarchies and InfoObjects from SAP BW systems.

Note

To extract hierarchies from a BW system, use the BW Hierarchy extraction type. To extract hierarchies from an ERP system like ECC or S4, use the [ODP](../odp/) extraction type.

### Prerequisites

- A connection to an SAP system is available, see [SAP Connection](../sap-connection/).
- The SAP user has sufficient user rights, see [SAP Authority Objects](../setup-in-sap/sap-authority-objects/#bw-hierarchy).

Warning

**Missing Authorization.**\
To use the BW Hierarchy extraction type, access to the designated authority objects (RFC) in SAP must be available. Adjust [SAP Authority Objects](/xtract-universal/documentation/setup-in-sap/sap-authority-objects#bw-hierarchy) accordingly.

### Create a BW Hierarchy Extraction

1. In the main window of the Designer, click **[New]** to create a new extraction. The window "Create Extraction" opens.
1. Select an [SAP Connection](../sap-connection/) of type **RFC** from the drop-down menu **Source**.
1. Enter a unique name for your extraction.
1. Select the extraction type **BW Hierarchy**.
1. Click **[OK]**. The main window of the extraction type opens automatically.

The majority of the functions of the extraction type can be accessed in the main window.

### Look Up a Hierarchy

1. In the main window of the component, click **[]**. The window “Hierarchy Lookup” opens.
1. Enter the name of a Hierarchy in the field **Hierarchy Name** or the name of an InfoObject in the field **InfoObject** . Use wildcards (\*) if needed.
1. Click **[]**. Search results are displayed.
1. Select a Hierarchy and click **[Select]**.

The application returns to the main window of the extraction type.

### Define the BW Hierarchy Extraction Type

The BW Hierarchy extraction type offers the following options for Hierarchy extractions:

1. Define the output format of the Hierarchy in the [extraction settings](settings/#extraction-settings) . The BW Hierarchy extraction type supports the following output formats:

   - [ParentChild Format](output-format/#parentchild-format)
   - [Natural Format](output-format/#natural-format)
   - [ParentChildWithNodeNames Format](output-format/#parentchildwithnodenames-format)

1. Click **[Load live preview]** to display a live preview of the first 100 records.

1. Check the [General Settings](general-settings/) before running the extraction..

1. Optional: The default value for **Date To** is *99991231*. To change the value, override the *dateTo* [extraction parameter](../parameters/extraction-parameters/) when calling the extraction.

1. Click **[OK]** to save the extraction type.

You can now run the extraction, see [Execute and Automate Extractions](../execute-and-automate/).

______________________________________________________________________

#### Related Links

- [Extraction Settings](settings/)
- [SAP Help: Uploading Hierarchies from Flat Files](https://help.sap.com/saphelp_scm700_ehp02/helpdata/en/fa/e92637c2cbf357e10000009b38f936/frameset.htm)
