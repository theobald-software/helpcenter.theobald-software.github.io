This page shows how to use the Xtract Hierarchy component. The Xtract Hierarchy component can be used to extract Hierarchies and InfoObjects from SAP BW systems.

Note

To extract hierarchies from a BW system, use the Xtract Hierarchy component. To extract hierarchies from an ERP system like ECC or S4, use the [Xtract ODP](../odp/) component.

### Prerequisites

- A connection to an SAP system is available, see [SAP Connection](../sap-connection/).
- The SAP user has sufficient user rights, see [SAP Authority Objects](../setup-in-sap/sap-authority-objects/#bw-hierarchy).

Warning

**Missing Authorization.**\
To use the Xtract Hierarchy component, access to the designated authority objects (RFC) in SAP must be available. Adjust [SAP Authority Objects](/xtract-is/documentation/setup-in-sap/sap-authority-objects#bw-hierarchy) accordingly.

### Add an Xtract Hierarchy Component

Follow the steps below to add an Xtract Table component to your SSIS package:

1. Drag&drop the Xtract Hierarchy component from the SSIS toolbox into your data flow task.

1. Double-click the component. A connection manager is automatically assigned to the component and the main window of the component opens.

   Note

   If there are multiple connection managers, the window "Select Connection Manager" opens, see [SAP Connection](../sap-connection/#assign-connection-managers-to-xtract-components). Once a connection manager is selected, the main window of the component opens.

The majority of the functions of the component can be accessed in the main window.

### Look Up a Hierarchy

1. In the main window of the component, click **[]**. The window “Hierarchy Lookup” opens.
1. Enter the name of a Hierarchy in the field **Hierarchy Name** or the name of an InfoObject in the field **InfoObject** . Use wildcards (\*) if needed.
1. Click **[]**. Search results are displayed.
1. Select a Hierarchy and click **[Select]**.

The application returns to the main window of the component.

### Define the Xtract Hierarchy Component

The Xtract Hierarchy component offers the following options for Hierarchy extractions:

1. Define the output format of the Hierarchy in the [settings](settings/#extraction-settings) . The Xtract Hierarchy component supports the following output formats:

   - [ParentChild Format](output-format/#parentchild-format)
   - [Natural Format](output-format/#natural-format)
   - [ParentChildWithNodeNames Format](output-format/#parentchildwithnodenames-format)

1. Click **[Load live preview]** to display a live preview of the first 100 records.

1. Click **[OK]** to save the component.

You can now run the SSIS package.

______________________________________________________________________

#### Related Links

- [Settings](settings/)
- [SAP Help: Uploading Hierarchies from Flat Files](https://help.sap.com/saphelp_scm700_ehp02/helpdata/en/fa/e92637c2cbf357e10000009b38f936/frameset.htm)
