
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
