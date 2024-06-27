---
title: Variants and Selections
description: Variants and Selections
---

{% include "components/variants.md" %}

### Edit Selections

{% if page.meta.componentFolder == "deltaq" %}

!!! note
	Do not define selections when using the update mode Delta Update, because the selections of the Init mode are automatically applied.

{% endif %} 
{% if  page.meta.componentFolder != "odp" %}

The *Selection Screen* in the main window of the component corresponds to the input screen in SAP.

!!! note
	Some selection fields only have a technical name and no description. 
	To understand which field corresponds to a field in SAP, open the input screen in SAP. 
	Click on a selection field and press the function key ++f1++ to display the technical name of the selection field. 

{% endif %}

Follow the steps below to edit selection fields and filter data:

1. Click **[Edit]** next to the selection field you want to edit. The window “Edit selection” opens.<br>
![Sections](../../assets/images/documentation/components/{{ page.meta.componentFolder }}/selections.png)
2. Add one or more of the following filter types:<br>
	- Click **[Single]** to compare the data to a single specified value.<br>
	- Click **[Range]** to check if the data is (not) within a specified range of values.
	{% if page.meta.product != "xtract-is" %}- Click **[List]** to check if the data is (not) part of a specified list of values. {% endif %}
3. In the **Sign** column :number-1:, select *Include* to add the filtered data to the output or select *Exclude* to remove the filtered data from the output.<br>
![edit-selections](../../assets/images/documentation/components/{{ page.meta.componentFolder }}/edit-selections.png){:class="img-responsive"}
4. Select an operator in the **Option** column :number-2:. The operator filters data according to the table below.

   | Operator   |      Meaning      |  
   |:---------|:------------- |
   |(not) like pattern |  True if data values do (not) contain to the content of operand 1.{% if page.meta.componentFolder == "odp" %} <br>Not not all ODP contexts and data sources support this option.{% endif %}|
   |(not) equal to |  True if data is (not) equal to the content of operand 1.|
   |at least |  True if data is greater than or equal to the content of operand 1.|
   |more than |  True if data is greater than the content of operand 1.|
   |at most | True if data is less than or equal to the content of operand 1.|
   |less than | True if data is less than the content of operand 1.|
   |(not) between | True if data values do (not) lie between the values of operand 1 and operand 2. |
   |elements equal | True if data values are part of operand 1. This option is only available for type *List*. |
5. Enter values or assign {{ variables }} to the selection fields :number-3:. <br>
	- Static values: Enter values directly into the **Low** and **High** input fields. 
	If {{ variables }} are available, make sure that **[:runtime-parameters-static:]** is displayed next to the input field.
	Clicking on the icon switches between static and dynamic input values.<br>
	- {{ Variables }}: Click **[:runtime-parameters-static:]** to change the input type to dynamic values **[:runtime-parameters-dynamic:]**.
	Select an existing {{ variable }} from the drop-down list.
6. Click **[OK]** to confirm your input.
{% if page.meta.componentFolder != "query" and page.meta.componentFolder != "query" %}7. Click {{ previewBtn }} in the main window of the {{ component }} to check the result of your selection. <br>
If {{ variables }} are defined, you are prompted to populate the parameters with actual values.
{% endif %}

{% if page.meta.componentFolder != "deltaq" and page.meta.componentFolder != "odp" %}

Note that edited selection fields overwrite the selection fields in the variant. 

!!! tip
	If you use multiple selection parameters, it is more efficient to create a variant in SAP.

{% endif %}

### Data Format

{% include "components/Settings/sap-data-format.md"  %}

****
#### Related Links
- [SAP Documentation: Report variants in SAP](https://help.sap.com/docs/btp/ABAP/3353524716.html)