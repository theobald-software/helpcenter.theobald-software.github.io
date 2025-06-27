This page shows how to use the Xtract Cube component.\
The Xtract Cube component can be used to extract MDX or BICS data directly from BW InfoProviders (e.g., Cubes) or from BW Queries. The BW Queries can be based on InfoProviders.

### Prerequisites

- A connection to an SAP system is available, see [SAP Connection](../sap-connection/).
- The SAP user has sufficient user rights, see [SAP Authority Objects](../setup-in-sap/sap-authority-objects/#bw-cube-bw-query).
- To extract a BW Query, the attribute *Allow External Access to this Query* of the Query must be active in the BEx Query Designer or the BW Modeling Tool, see [Troubleshooting Article: Allow external access to BW Queries](https://support.theobald-software.com/helpdesk/KB/View/13800-allow-external-access-to-bw-queries).

Warning

**Missing Authorization.**\
To use the Xtract Cube component, access to the designated authority objects (RFC) in SAP must be available. Adjust [SAP Authority Objects: BW Query / BW Cube](../setup-in-sap/sap-authority-objects/#bw-cube-bw-query) accordingly.

### MDX versus BICS

The Xtract Cube component can extract data using the OLAP BAPI Interface (MDX) or the native BICs interface. The following table shows the differences between the two extractors:

| MDX | BICS | | --- | --- | | **Lookup syntax for BEx Queries:** `[tech. name of InfoPovider]/[tech. name of BEx Query]` | **Lookup syntax for BEx Queries:** `[tech. name of BEx Query]` Example: `0SD_C03_Q0018` | | **Lookup syntax for InfoProviders:** `$[tech. name of InfoProvoider]` | **Lookup syntax for InfoProviders:** `[tech. name of InfoProvider]` Example: `0SD_C03` | | **Wildcards in lookup:** The BEx-Query setting [Allow External Access to BW Queries](https://support.theobald-software.com/helpdesk/KB/View/13800-allow-external-access-to-bw-queries) is required. Example: `*0SD_C03_Q0018` instead of `0SD_C03/0SD_C03_Q0018` | **Wildcards in lookup:** not required and therefore not supported | | **Supported InfoProviders:** InfoCubes, Multiproviders, Composite Providers | **Supported InfoProviders:** InfoCubes, MuliProviders, Composite Providers, DSOs | | **Column names of Key figures:** EnterpriseID | **Column names of Key figures:** Technical name If techn. name is empty: name of the base measure. If name of the base measure is empty: EnterpriseID. **Tip:** In case of duplicate names, change the technical name in the BEx Query Designer. | | **Limit of Dimensions:** max. 50 dimensions | **Limit of Dimensions:** - |

### Add an Xtract Cube Component

Follow the steps below to add an Xtract Cube component to your workflow:

1. Drag & drop the Xtract component to your Alteryx workflow .
1. Assign an existing SAP connection .
1. Click **[ Edit]** to open the main window of the component.

The majority of the functions of the component can be accessed in the main window.

### Look Up a BW Cube or Query

1. In the main window of the component, click **[]**. The window “Cube and Query Lookup” opens.

1. Select the *Extractor*, *Datasource Type* and *Extraction Settings* of the object .

   | Option | Description | | --- | --- | | *Extractor* | defines if data is extracted using the OLAP BAPI Interface (MDX) or the native BICS Interface. BICS can only be used in combination with the [NetWeaver RFC protocol](../sap-connection/settings/#rfc-libraries). | | *Datasource Type* | defines if the look up searches for a BEx Query or an InfoProvider. | | *Extraction Settings* | only available for the MDX extractor. Use **Only Structure** if your BWCube extraction was created in an older software version, see [extraction settings](settings/) for more information. |

1. In the search bar, enter the name of a Query or a BW Cube / InfoProvider . Use wildcards (\*), if needed.

1. Click **[]**. Search results are displayed.\
   Alternatively click **[Direct Load]** to skip the lookup and load the BW Cube / InfoProvider directly. **[Direct Load]** only works if the full name is entered correctly in the search bar.

1. Select a Query or BW Cube / InfoProvider and click **[OK]** to confirm.

The application now returns to the main window of the component.

Note

Click **[Refresh Metadata]** to renew metadata. This is necessary if a data source has been adjusted in SAP, another source system has been connected, or the source system has been updated.

Warning

**Invalid action**\
A BW Query does not apprear in the list.\
Switch on the attribute *Allow External Access to this Query* in the BEx Query Designer or the BW Modeling Tool. For additional details see the [Troubleshooting Article: Allow external access to BW Queries](https://support.theobald-software.com/helpdesk/KB/View/13800-allow-external-access-to-bw-queries).

### Define the Xtract Cube Component

The Xtract Cube component offers the following options for Query and BW Cube extractions:

1. In the tree structure of the component, select the measure (key figures) you want to extract

   Tip

   The tree structure represents the metadata of the Query (or InfoProvider).\
   The first directory contains all the measures (key figures) . The following directories correspond to dimensions and often contain additional dimension properties .

1. Within the key figures directory, click the arrow to display the available units. Select a unit, if needed.

1. In the following directories, select the dimensions and properties you want to extract .

1. Optional: Right-click on a dimension to add filters to the dimension, see [Dimension Filters](variables-and-filters/#set-dimension-filters).

1. Optional: If a BW Query has a defined variable, click **[Edit Variables]** to edit the variable or provide input values, see [Variables](variables-and-filters/#edit-variables).

1. Click **[Load live preview]** to display a live preview of the data. For every selected dimension or property, a key figure and a unit is displayed in the result.

1. Check the [Extraction Settings](settings/) before running the workflow.

1. Click **[OK]** to save the component.

You can now run the workflow.
