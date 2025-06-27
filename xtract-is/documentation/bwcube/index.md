This page shows how to use the Xtract BWCube component.\
The Xtract BWCube component can be used to extract MDX or BICS data directly from BW InfoProviders (e.g., Cubes) or from BW Queries. The BW Queries can be based on InfoProviders.

### Prerequisites

- A connection to an SAP system is available, see [SAP Connection](../sap-connection/).
- The SAP user has sufficient user rights, see [SAP Authority Objects](../setup-in-sap/sap-authority-objects/#bw-cube-bw-query).
- To extract a BW Query, the attribute *Allow External Access to this Query* of the Query must be active in the BEx Query Designer or the BW Modeling Tool, see [Troubleshooting Article: Allow external access to BW Queries](https://support.theobald-software.com/helpdesk/KB/View/13800-allow-external-access-to-bw-queries).

Warning

**Missing Authorization.**\
To use the Xtract BWCube component, access to the designated authority objects (RFC) in SAP must be available. Adjust [SAP Authority Objects: BW Query / BW Cube](../setup-in-sap/sap-authority-objects/#bw-cube-bw-query) accordingly.

### Add an Xtract BW Cube Component

Follow the steps below to add an Xtract Table component to your SSIS package:

1. Drag&drop the Xtract BW Cube component from the SSIS toolbox into your data flow task.

1. Double-click the component. A connection manager is automatically assigned to the component and the main window of the component opens.

   Note

   If there are multiple connection managers, the window "Select Connection Manager" opens, see [SAP Connection](../sap-connection/#assign-connection-managers-to-xtract-components). Once a connection manager is selected, the main window of the component opens.

The majority of the functions of the component can be accessed in the main window.

### Look Up a BW Cube or Query

By default, the Xtract BWCube component extracts data using the MDX interface.\
To use [BEX mode](settings/#bex) or to enter [MDX statements](settings/#mdx), change the [settings](settings/) before the looking up a BW Cube or Query.

1. In the main window of the component, click the search botton. The window “Cube and Query Lookup” opens.
1. Select the type of cube you want to extract data from (Info Cube or Query) .
1. In the search bar, enter the name of a Query or a BW Cube / InfoProvider . Use wildcards (\*), if needed.
1. Click the search button. Search results are displayed.
1. Select a Query or BW Cube / InfoProvider and click **[OK]** to confirm.

The application now returns to the main window of the component.

Note

Click **Refresh Metadata** to renew metadata. This is necessary if a data source has been adjusted in SAP, another source system has been connected, or the source system has been updated.

Warning

**Invalid action**\
A BW Query must have the attribute *Allow External Access to this Query* switched on in the BEx Query Designer or the BW Modeling Tool to appear in the list. For additional details see the [Troubleshooting Article: Allow external access to BW Queries](https://support.theobald-software.com/helpdesk/KB/View/13800-allow-external-access-to-bw-queries).

### Define the Xtract BWCube Component

The Xtract BWCube component offers the following options for Query and BW Cube extractions:

1. In the tree structure of the component, double-click the measure (key figures) you want to extract.

   Tip

   The tree structure represents the metadata of the Query (or InfoProvider).\
   The first directory contains all the measures (key figures) . The following directories correspond to dimensions and often contain additional dimension properties .

1. Within the key figures directory, click the arrow to display the available units. Select a unit, if needed.

1. In the following directories, select the dimensions and properties you want to extract .

1. Optional: Click the **Filter** option next to a dimension to add filters , see [Dimension Filters](variables-and-filters/#set-dimension-filters).

1. Optional: If a BW Query has a defined variable, click **Variables** to edit the variable or provide input values, see [Variables](variables-and-filters/#edit-variables).

1. Click **[Preview]** to display a live preview of the data. For every selected dimension or property, a key figure and a unit is displayed in the result.

1. Check the [Settings](settings/) before running the SSIS package.

1. Click **[OK]** to save the component.

You can now run the SSIS package.
