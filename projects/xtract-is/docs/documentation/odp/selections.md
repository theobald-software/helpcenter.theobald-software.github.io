---
title: Selections
description: ODP parameters
---

This page shows how to filter the data that is extracted by the {{ odp }} {{ component }}.
Selections limit the result set of the {{ odp }} {{ component }} to extract only records that match the selection.

### Edit Selections

Follow the steps below to edit selection fields and filter data:

1. In the subsection *Fields*, click **Edit** next to the field you want to edit. The window “Edit selection” opens.<br>
![Sections](../../assets/images/documentation/components/{{ page.meta.componentFolder }}/selections.png)
2. Add one or more of the following filter types:<br>
	- Click **[Single]** to compare the data to a single specified value.<br>
	- Click **[Range]** to check if the data is (not) within a specified range of values.
3. In the column **Sign** :number-1:, select *Include* to add the filtered data to the output or select *Exclude* to remove the filtered data from the output.<br>
![edit-selections](../../assets/images/documentation/components/edit-selections-xis.png){:class="img-responsive"}
4. In the column **Option** :number-2:, select an operator. The operator filters data according to the table below.
	
	| Operator |  Description    |  
	|:---------|:-------------|
	|(not) like pattern |  True if data values do (not) contain to the content of operand 1. Not not all ODP contexts and data sources support this option.|
	|(not) equal to |  True if data is (not) equal to the content of operand 1.|
	|at least |  True if data is greater than or equal to the content of operand 1.|
	|more than |  True if data is greater than the content of operand 1.|
	|at most | True if data is less than or equal to the content of operand 1.|
	|less than | True if data is less than the content of operand 1.|
	|(not) between | True if data values do (not) lie between the values of operand 1 and operand 2. |
	| elements equal | True if data values are part of operand 1. This option is only available for type *List*. |
	
5. In the column **Value**, enter values directly into the input fields **Low** and **High** or assign existing [parameter](#use-ssis-variables-in-selections) to the selection fields :number-3:.

	!!! note
		When parameters are available, you can use the icon button inside the input field to switch between static values (:runtime-parameters-static:) and parameters (:runtime-parameters-dynamic:).

6. Click **[OK]** to confirm your input. 
7. Click {{ previewBtn }} in the main window of the {{ component }} to check the result of your selection. 
If parameters are defined, you are prompted to populate the parameters with actual values.


The number of defined filters is displayed in square brackets next to the **Edit** option.

### Use SSIS Variables in Selections

To use SSIS variables in selection, create a parameter as a placeholder for the SSIS variable.
The parameter can be overwritten by an SSIS variable in the *Custom Properties* or *Data Flow Properties* of the component.

Follow the steps below to create a parameter in the {{ odp }} {{ component }}:
	
1. In the main window of the component click **Edit Parameters**. 
The window “Edit Runtime Parameters” opens.<br>
![open-edit-runtime-parameters](../../assets/images/{{ abbr }}/documentation/{{ page.meta.componentFolder }}/open-edit-runtime-parameters.png){:class="img-responsive"}
2. Click **[Add Scalar]** to define scalar parameters to be used as placeholders for actual values.
The placeholders need to be populated with actual values at runtime.<br>
![dd-parameters](../../assets/images/documentation/components/runtime-parameters/edit-runtime-parameters.png){:class="img-responsive"}
	
	!!! tip
		Parameter0..-n is the default naming for the added parameter. You can enter a name of your choice.
		
3. Select one of the following data types from the drop-down menu.
The data types may correlate to SAP data types.

	| Type | Description |
	|--------|-------------|
	| *Text* | Can be used for any type of SAP selection field. |
	| *Number* | Can be used for numeric SAP selection fields. |
	| *Flag* | Can only be used for SAP selection fields THAT require an ‘X’ (true) or a blank ‘‘ (false) as input value. |

4. Click **[OK]** to confirm.

The parameter can now be used in selections and can be overwritten by SSIS variables in the *Custom Properties* or *Data Flow Properties* of the component.

### Data Format

{% include "components/settings/sap-data-format.md"  %}
