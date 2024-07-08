
{% if page.meta.componentFolder == "table" %}

### Use Runtime Parameters in the WHERE Clause Editor

1. Navigate to the WHERE clause tab in the main window of the extraction and open the WHERE clause editor.
2. Add a new WHERE clause criteria that uses the **[Default with Parameter]** template.
3. Click the *Parameter* component. A drop-down list that displays all available parameters opens. 
Select a parameter from the list.<br>
![WHERE-Clause-Builder-Example](../../assets/images/documentation/components/table/where-clause-param.png){:class="img-responsive"}
4. To test the WHERE clause, click {{ previewBtn }}. Provide parameter values when prompted.


### Use Runtime Parameters in the WHERE Clause Text Mode

Add an @ symbol before a value to mark it as a runtime parameter, e.g., enter `@myParameter` instead of a value.
Example: `T001W~WERKS BETWEEN @PlantLow AND @PlantHigh`.

![Extraction-User-Variables](../../assets/images/documentation/components/table/where-clause-text-param.png){:class="img-responsive"}

{% elif page.meta.componentFolder == "bapi" %}

### Assign Runtime Parameters

Follow the steps below to assign runtime parameters to input fields of import, changings or table parameters of a Function Module / BAPI:

1. Navigate to the item you want to parameterize in the **Imports**, **Changings** or **Tables** tab.
2. Click the icon button next to the item to switch from static values (:runtime-parameters-static:) to {{ variables }} (:runtime-parameters-dynamic:).
If no icon is available, [create a runtime parameter](#create-runtime-parameters).<br>
3. Select a runtime parameter from the dropdown-list.<br>
![Assign parameters](../../assets/images/documentation/components/bapi/BAPI-Runtime-Parameters.png){:class="img-responsive"}

{% elif page.meta.componentFolder == "bwcube" %}

### Assign Runtime Parameters

Follow the steps below to assign the runtime parameters to variables or dimension filters.

=== "Variables"
	1. In the main window of the {{ component }}, click **[Edit Variables]**. The window "Edit Selections" opens.
	2. Add a filter to the variable, see [Variables](variables-and-filters.md/#edit-variables).
	2. Click the icon button next to the input field to switch between static values (:runtime-parameters-static:) and {{ variables }} (:runtime-parameters-dynamic:).
	If no icon button is available, [create a runtime parameter](#create-runtime-parameters).<br>
	![Selection With Parameters](../../assets/images/documentation/components/bwcube/parameters.png){:class="img-responsive"}
	3. Select a runtime parameter from the dropdown-list.
	4. Click **[OK]** to confirm the input.
	
=== "Dimension Filters"
	1. In the main window of the {{ component }}, right-click the dimension you want to parameterize.
	2. Click **Edit Filters**. The window "Edit Selections" opens. 
	3. Add a filter for the dimension, see [Dimension Filter](variables-and-filters.md/#set-dimension-filters).
	4. Click the icon button next to the input field to switch between static values (:runtime-parameters-static:) and {{ variables }} (:runtime-parameters-dynamic:).
	If no icon button is available, [create a runtime parameter](#create-runtime-parameters).<br>
	![Selection With Parameters](../../assets/images/documentation/components/runtime-parameters/runtime-parameters-in-selections.png){:class="img-responsive"}
	5. Select a runtime parameter from the dropdown-list.
	6. Click **[OK]** to confirm the input.

{% else %}
 
### Assign Runtime Parameters

Follow the steps below to assign the runtime parameters to selections.

1. In the main window of the {{ component }}, click the **[Edit]** button next to the selection you want to parameterize. 
The window "Edit Selections" opens.
2. Add a filter to the selection, see {% if page.meta.componentFolder == "odp"%}[Selections and Filters](#link){% elif page.meta.componentFolder == "deltaq"%}[Edit Selections](selections.md/#edit-selections){% else %}[Edit Selections](variants-and-selections.md/#edit-selections){% endif %}.<br> 
3. Click the icon button next to the input field to switch between static values (:runtime-parameters-static:) and {{ variables }} (:runtime-parameters-dynamic:).
If no icon button is available, [create a runtime parameter](#create-runtime-parameters).<br>
![Selection With Parameters](../../assets/images/documentation/components/runtime-parameters/runtime-parameters-in-selections.png){:class="img-responsive"}
4. Select a runtime parameter from the dropdown-list.
5. Click **[OK]** to confirm the input.

{% endif %}

{% if page.meta.product != "xtract-for-alteryx" %}
Pass values during runtime, see [Extraction Parameters - Custom](../parameters/extraction-parameters.md/#custom).{% endif %}
