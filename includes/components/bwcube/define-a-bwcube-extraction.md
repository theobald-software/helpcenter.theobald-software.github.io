
### Look Up a BW Cube or Query

1. In the main window of the {{ component }}, click **[:magnifying-glass:]**. The window “Cube and Query Lookup” opens.
![Look-Up-Cube](../../assets/images/{{ abbr }}/documentation/bwcube/bwcube_main-window_add.png){:class="img-responsive"}
2. Select the *Extractor*, *Datasource Type* and *Extraction Settings* of the object :number-1:.<br>
![Look-Up-Cube](../../assets/images/documentation/components/bwcube/bwcube_look-up.png){:class="img-responsive"} 

	| Option                             | Description |
	|------------------------------------|---------------------------------------------------------------------------------------------|
	| *Extractor*   | defines if data is extracted using the OLAP BAPI Interface (MDX) or the native BICS Interface. BICS can only be used in combination with the [NetWeaver RFC protocol](../sap-connection/settings.md/#rfc-options). |
	| *Datasource Type* | defines if the look up searches for a BEx Query or an InfoProvider.  | 
	| *Extraction Settings*  | only available for the MDX extractor. Use **Only Structure** if your BWCube extraction was created in an older software version, see [{{ settings }}](settings.md) for more information. | 

3.  In the search bar, enter the name of a Query or a BW Cube / InfoProvider :number-2:. Use wildcards (*), if needed.
3. Click **[:magnifying-glass:]**. Search results are displayed.<br>
Alternatively click **[Direct Load]** to skip the lookup and load the BW Cube / InfoProvider directly. 
**[Direct Load]** only works if the full name is entered correctly in the search bar.
4. Select a Query or BW Cube / InfoProvider and click **[OK]** to confirm.

The application now returns to the main window of the component.

!!! note
	Click **[Refresh Metadata]** to renew metadata. 
	This is necessary if a data source has been adjusted in SAP, another source system has been connected, or the source system has been updated.

!!! warning
	**Invalid action**<br>
	A BW Query must have the attribute *Allow External Access to this Query* switched on in the BEx Query Designer or the BW Modeling Tool to appear in the list.
	For additional details see the [Troubleshooting Article: Allow external access to BW Queries](https://support.theobald-software.com/helpdesk/KB/View/13800-allow-external-access-to-bw-queries). 


### Define the {{ bwcube }}  {{ Component }}

The {{ bwcube }} {{ component }} offers the following options for Query and BW Cube extractions:

1. In the tree structure of the {{ component }}, select the measure (key figures) you want to extract :number-1: <br>
![Cube-Details](../../assets/images/documentation/components/bwcube/cube-measures.png){:class="img-responsive"}

	!!! tip 
		The tree structure represents the metadata of the Query (or InfoProvider). <br>
		The first directory contains all the measures (key figures) :number-1:. 
		The following directories correspond to dimensions and often contain additional dimension properties :number-2:. 

2. Within the key figures directory, click the arrow to display the available units. Select a unit, if needed.
3. In the following directories, select the dimensions and properties you want to extract :number-2:.
4. Optional: Right-click on a dimension to add filters to the dimension, see [Dimension Filters](variables-and-filters.md/#set-dimension-filters).
5. Optional: If a BW Query has a defined variable, click **[Edit Variables]** to edit the variable or provide input values, see [Variables](variables-and-filters/#edit-variables).
6. Click {{ previewBtn }} to display the output with data from BW. For every selected dimension or property, a key figure and a unit is displayed in the result. 
7. Check the [{{ Settings }}](settings.md){% if page.meta.product == "xtract-universal" or page.meta.product == "board-connector"%} and the [General Settings](general-settings.md){% endif %} before running the extraction.
8. Click **[OK]** to save the {{ component }}.

You can now run the {{ extraction }}{% if page.meta.product == "xtract-universal" %}, see [Execute and Automate Extractions](../execute-and-automate/index.md){% endif %}.

