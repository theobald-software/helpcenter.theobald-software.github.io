This page shows how to use the Xtract OHS component.\
The Xtract OHS component can be used to extract data from Open Hub Service (OHS) destinations.

### Prerequisites

- A connection to an SAP system is available, see [SAP Connection](../sap-connection/).
- The SAP user has sufficient user rights, see [SAP Authority Objects](../setup-in-sap/sap-authority-objects/#table).
- Configure your SAP BW system to make data sources accessible, see [Customization for OHS in BW](../setup-in-sap/customization-for-ohs-in-bw/).

Warning

**Missing Authorization.**\
To use the Xtract OHS component, access to the designated authority objects (RFC) in SAP must be available. Adjust [SAP Authority Objects](../setup-in-sap/sap-authority-objects/#ohs) accordingly.

### Add an Xtract OHS Component

Follow the steps below to add an Xtract Table component to your SSIS package:

1. Drag&drop the Xtract OHS component from the SSIS toolbox into your data flow task.

1. Double-click the component. A connection manager is automatically assigned to the component and the main window of the component opens.

   Note

   If there are multiple connection managers, the window "Select Connection Manager" opens, see [SAP Connection](../sap-connection/#assign-connection-managers-to-xtract-components). Once a connection manager is selected, the main window of the component opens.

The majority of the functions of the component can be accessed in the main window.

### Look up an OHS Destination

1. In the main window of the component, select an **Extraction type** in the main window of the component.

   - Select **Table** if you use BW4Hana2.0 and make sure that the open hub destination type in SAP is set to *database table*.
   - Select **Third party tool (legacy)** if you use BW4Hana2.0 and make sure that the open hub destination type in SAP is set to *third party tool*.

1. Click **[ Lookup]**. The window “OHS Lookup” opens.

1. In the field **OHS Destination**, enter the name of an OHS destination . Use wildcards (\*) if needed.

1. Click **[]**. Search results are displayed .

1. Select an OHS destination and click **[OK]** to confirm.

The application now returns to the main window of the component.

### Define the Xtract OHS Component

The Xtract OHS component offers the following options for OHS extractions:

1. If **Process Chain** is empty, enter an SAP process chain assigned to your OHS destination, see [SAP Help: Display/Maintenance of Process Chain Attributes](https://help.sap.com/docs/SAP_NETWEAVER_701/6da591e86c4b1014b43de329b9ffb859/4a2cf30c6ed91c62e10000000a42189c.html?locale=en-US).

   Note

   If **Process Chain** is left empty, the extraction fails.

1. Optional: Use the **Timeout** setting to set a maximum time period to wait for a notification from the BW system. If the time limit is reached, the extraction fails.

1. Check the [Settings](settings/) before running the SSIS package.

1. Click **[OK]** to save the component.

You can now run the SSIS package.
