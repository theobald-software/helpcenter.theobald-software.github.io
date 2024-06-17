
### Create Runtime Parameters 

There are two types of {{ variables }}:

=== "Scalar parameters"

	Scalar {{ variables }} represent a single value. <br>
	Follow the steps below to create a scalar {{ variable }}:
	
	1. In the main window of the component click {{ parameterBtn }}. 
	The window “Edit Runtime Parameters” opens.<br>
	![open-edit-runtime-parameters](../../assets/images/{{ abbr }}/documentation/{{ page.meta.componentFolder }}/open-edit-runtime-parameters.png){:class="img-responsive"}
	2. Click **[Add Scalar]** to define scalar parameters to be used as placeholders for actual values.
	The placeholders need to be populated with actual values at runtime.
	![dd-parameters](../../assets/images/documentation/components/settings/edit-runtime-parameters.png){:class="img-responsive"}
	
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

=== "List parameters"

	List {{ variables }} represent multiple values. <br>
	Follow the steps below to create a list {{ variable }}:
	
	1. In the main window of the component click {{ parameterBtn }}. 
	The window “Edit Runtime Parameters” opens.<br>
	![open-edit-runtime-parameters](../../assets/images/{{ abbr }}/documentation/{{ page.meta.componentFolder }}/open-edit-runtime-parameters.png){:class="img-responsive"}
	2. Click **[Add List]** to define list parameters that contain multiple values separated by commas e.g., 1,10 or “1”, “10”.
	The placeholders need to be populated with actual values at runtime.
	![dd-parameters](../../assets/images/documentation/components/settings/edit-runtime-parameters-list.png){:class="img-responsive"}
	
		!!! tip
			Parameter0..-n is the default naming for the added parameter. You can enter a name of your choice.
		
	3. Click **[OK]** to confirm.

The {{ variables }} are now available in the {{ component }}.

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

{% endif %}

