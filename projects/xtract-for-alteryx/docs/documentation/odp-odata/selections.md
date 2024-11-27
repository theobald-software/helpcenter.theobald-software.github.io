---
title: Selections
description: ODP parameters
---

This page shows how to filter the data that is extracted by the {{ odpOdata }} {{ component }}.
Selections limit the result set of the {{ odpOdata }} {{ component }} to extract only records that match the selection.

### Edit Selections

Follow the steps below to edit selection fields and filter data:

1. In the subsection Fields, click **Edit** next to the field you want to edit. The window “Edit selection” opens.<br>
![edit-selection](../../assets/images/documentation/components/odp-odata/edit-selection.png){:class="img-responsive"}	
2. Select one of the following filter types:
	- :number-1: **Single** : only extract data that equals a single specified value.
	- :number-2: **Interval**: only extract data that lies within a specified range of values.
	
	![selection](../../assets/images/documentation/components/odp-odata/selection.png){:class="img-responsive"}	
	
3. Enter a values directly into the input fields or assign existing [runtime parameters](edit-runtime-parameters.md) to the selection.

	!!! note
		When runtime parameters are available, you can use the icon button next to the input field to switch between static values (:runtime-parameters-static:) and runtime parameters (:runtime-parameters-dynamic:).

4. Click **[OK]** to confirm your input.
5. Click **[Load live preview]** in the main window of the component to check the result of your selection. 
If runtime parameters are defined, you are prompted to populate the parameters with actual values.

When a filter is defined, the filter statement is displayed next to the **Edit** option.

### Data Format

{% include "components/settings/sap-data-format.md"  %}
