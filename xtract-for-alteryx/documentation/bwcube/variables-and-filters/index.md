This page shows how to use variables and dimension filters to filter the data that is extracted with the Xtract Cube component. There are two options to apply filters:

- [Variables](#edit-variables) are usually defined in SAP to create filter options for BW Queries. They can be edited in the Xtract Cube component.
- [Dimension Filters](#set-dimension-filters) are defined in the Xtract Cube component to filter data from InfoProviders or BW Queries that do not have variables.

### Edit Variables

BW queries often have defined variables to create filter options. Depending on the type of BEx variable (single value, multiple value, interval or complex selection) input fields of the variables are enabled or disabled.

1. [Look up](../#look-up-a-bw-cube-or-query) a BEx Query with defined variables .
1. Click **[Edit Variables]** . The window "Edit variables for [name of the query]" opens.
1. Select a field that uses variables from the drop-down menu .
1. Click **[Single]**, **[Range]** or **[List]** to add a corresponding filter, see [Filter Options](#filter-options).
1. In the column **Sign** , select *Include* to add the filtered data to the output or select *Exclude* to remove the filtered data from the output.
1. Select an operator in the column **Option** , see [Filter Options](#filter-options).
1. In the column **Value**, enter values directly into the input fields **Low** and **High**, assign existing [runtime parameters](../edit-runtime-parameters/) or look up pre-defined values in SAP.
   - Static values: Enter values directly into the Low and High input fields.
   - Runtime parameters: Select an existing runtime parameter from the drop-down list.
   - Pre-defined values: If available, select pre-defined values from SAP:
1. Click **[OK]** to confirm your input.
1. Click **[Load live preview]** in the main window of the component to check the result of the filter. If runtime parameters are defined, you are prompted to populate the parameters with actual values.

### Set Dimension Filters

Each dimension of a BEx Query or an InfoCube offers the possibility to set a filter to execute the MDX statement in BW using the selected filter values. Follow the steps below to create dimension filters in the Xtract Cube component.

1. In the tree structure of the component, right-click a dimension to open the context menu.
1. Click **[Edit Filter]**. The window "Edit Selections" opens.
1. Click **[Single]**, **[Range]** or **[List]** to add a corresponding filter, see [Filter Options](#filter-options).
1. In the column **Sign** , select *Include* to add the filtered data to the output or select *Exclude* to remove the filtered data from the output.
1. In the column **Option**, select an operator , see [Filter options](#filter-options).
1. In the column **Value**, enter values directly into the input fields **Low** and **High**, assign existing [runtime parameters](../edit-runtime-parameters/) or look up pre-defined values in SAP.
   - Static values: Enter values directly into the Low and High input fields.
   - Runtime parameters: Select an existing runtime parameter from the drop-down list.
   - Pre-defined values: If available, select pre-defined values from SAP.
1. Click **[OK]** to confirm your input.
1. Click **[Load live preview]** in the main window of the component to check the result of the filter. If runtime parameters are defined, you are prompted to populate the parameters with actual values.

When filters are applied, the symbol is displayed in the treeview of the dimensions.

Warning

**Extraction fails - Error message: Argument cannot be null or empty**\
When a filter is set, a value cannot be empty for an extraction to run.\
Make sure to pass a value (# is accepted).

### Filter Options

The Xtract Cube component offers the following filter options:

| Type | Operator | Description | | --- | --- | --- | | Single | | Compare data to a single specified value. | | | *(not) like pattern* | True if data values do (not) contain to the specified value. | | | *(not) equal to* | True if data is (not) equal to the specified value. | | | *at least* | True if data is greater than or equal to the specified value. | | | *more than* | True if data is greater than the specified value. | | | *at most* | True if data is less than or equal to the specified value. | | | *less than* | True if data is less than the specified value. | | Range | | Check if the data is (not) within a specified range of values. | | | *(not) between* | True if data values do (not) lie between the 2 specified values. | | List | | Check if the data is part of a specified list of values. | | | *element of* | True if data values are part of the list. |
