---
title: Xtract BW Cube
description: How to use the BW Cube extraction type
icon: component/bwcube
---

This page shows how to use the {{ bwcube }} {{ component }}.<br>
The {{ bwcube }} {{ component }} can be used to extract MDX or BICS data directly from BW InfoProviders (e.g., Cubes) or from BW Queries. 
The BW Queries can be based on InfoProviders.


{% include "components/bwcube/prerequisites.md" %}

{% include "components/bwcube/auth-warning.md" %}

{% include "components/xis-new.md"  %}


### Look Up a BW Cube or Query

By default, the {{ bwcube }} {{ component }} extracts data using the MDX interface.<br>
To use [BEX mode](settings.md/#bex) or to enter [MDX statements](settings.md/#mdx), change the [settings](settings.md) before the looking up a BW Cube or Query.

1. In the main window of the {{ component }}, click the search botton. The window “Cube and Query Lookup” opens.
![Look-Up-Cube](../../assets/images/documentation/components/bwcube/{{ abbr }}/bwcube_main-window_add.png){:class="img-responsive"}
2. Select the type of cube you want to extract data from (Info Cube or Query) :number-1:.<br>
![bwcube_look-up](../../assets/images/documentation/components/bwcube/{{ abbr }}/bwcube_look-up.png){:class="img-responsive"}
3. In the search bar, enter the name of a Query or a BW Cube / InfoProvider :number-2:. Use wildcards (*), if needed.
3. Click the search button. Search results are displayed.
4. Select a Query or BW Cube / InfoProvider :number-3: and click **[OK]** to confirm.

The application now returns to the main window of the component.

!!! note
	Click **Refresh Metadata** to renew metadata. 
	This is necessary if a data source has been adjusted in SAP, another source system has been connected, or the source system has been updated.

!!! warning
	**Invalid action**<br>
	A BW Query must have the attribute *Allow External Access to this Query* switched on in the BEx Query Designer or the BW Modeling Tool to appear in the list.
	For additional details see the [Troubleshooting Article: Allow external access to BW Queries](https://support.theobald-software.com/helpdesk/KB/View/13800-allow-external-access-to-bw-queries). 


### Define the {{ bwcube }}  {{ Component }}

The {{ bwcube }} {{ component }} offers the following options for Query and BW Cube extractions:

1. In the tree structure of the {{ component }}, double-click the measure (key figures) :number-1: you want to extract.<br>
![Cube-Details](../../assets/images/documentation/components/bwcube/{{ abbr }}/cube-measures.png){:class="img-responsive"}

	!!! tip 
		The tree structure represents the metadata of the Query (or InfoProvider). <br>
		The first directory contains all the measures (key figures) :number-1:. 
		The following directories correspond to dimensions and often contain additional dimension properties :number-2:. 

2. Within the key figures directory, click the arrow to display the available units. Select a unit, if needed.
3. In the following directories, select the dimensions and properties you want to extract :number-2:.
4. Optional: Click the **Filter** option next to a dimension to add filters :number-3:, see [Dimension Filters](variables-and-filters.md/#set-dimension-filters).
5. Optional: If a BW Query has a defined variable, click **Variables** :number-4: to edit the variable or provide input values, see [Variables](variables-and-filters.md/#edit-variables).
6. Click **[Preview]** to display a live preview of the data. 
For every selected dimension or property, a key figure and a unit is displayed in the result. 
7. Check the [{{ Settings }}](settings.md){% if page.meta.product == "xtract-universal" or page.meta.product == "board-connector"%} and the [General Settings](general-settings.md){% endif %} before running the {{ extraction }}.
8. Click **[OK]** to save the {{ component }}.

You can now run the {{ extraction }}{% if page.meta.product == "xtract-universal" %}, see [Execute and Automate Extractions](../execute-and-automate/index.md){% endif %}.

