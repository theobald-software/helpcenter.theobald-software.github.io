
### Dynamic WHERE Clause with SSIS Variables

You can use SSIS variables and parameters as placeholders for filter values in the WHERE Clause.
To parameterize the whole WHERE Clause, see [Parameterization using Expression Properties](parameterization.md#parameterization-using-expression-properties).

1. Define an SSIS variable / parameter. Make sure the data type of the variable matches the data type of the table records you want to filter.
2. Open the {{ table }} {{ component }} and navigate to the WHERE Clause tab.
3. Click **[Editor mode]** to open the WHERE Clause Editor.
4. Add a new filter criteria and use the **[Default with Parameter]** template.<br>
![SSIS-variable](../../assets/images/xis/documentation/table/ssis-variable.png)
5. Click inside the *Parameter* component. A drop-down-list that displays all available SSIS variables and parameters opens. Select your SSIS variable / parameter from the list.
6. To test the WHERE clause, assign a default value for the SSIS variable and click {{ previewBtn }}.
7. Click **[OK]** to save the {{ component }}.