

This page shows how to use variables and dimension filters to filter the data that is extracted with the {{ bwcube }} {{ component }}.
There are two options to apply filters:
- [Variables](#edit-variables) are usually defined in SAP to create filter options for BW Queries. They can be edited in the {{ bwcube }} {{ component }}.
- [Dimension Filters](#set-dimension-filters) are defined in the {{ bwcube }} {{ component }} to filter data from InfoProviders or BW Queries that do not have variables.

### Edit Variables

BW queries often have defined variables to create filter options. 
Depending on the type of BEx variable (single value, multiple value, interval or complex selection) input fields of the variables are enabled or disabled.

1. [Look up](index.md/#look-up-a-bw-cube-or-query) a BEx Query with defined variables :number-1:.<br> 
![Edit Variables Button](../../assets/images/documentation/components/bwcube/{{ abbr }}/BExQuery-Variable.png){:class="img-responsive"}
2. Click **[Edit Variables]** :number-2:. The window "Edit variables for [name of the query]" opens.
3. Select a field that uses variables from the drop-down menu :number-3:.<br>
![selections](../../assets/images/documentation/components/bwcube/selections-cube.png){:class="img-responsive"}
4. Click **[Single]**{% if page.meta.product != "xtract-is" %}, **[Range]** or **[List]**{% else %} or **[Range]**{% endif %} to add a corresponding filter, see [Filter Options](#filter-options).
5. In the column **Sign** :number-4:, select *Include* to add the filtered data to the output or select *Exclude* to remove the filtered data from the output.<br>
6. Select an operator in the column **Option** :number-5:, see [Filter Options](#filter-options).
7. In the column **Value**, enter values directly into the input fields **Low** and **High**, assign existing {% if page.meta.product != "xtract-is" %} [{{ variables }}](edit-runtime-parameters.md) {% else %} {{ variables }} {% endif %} or look up pre-defined values in SAP.
	- :runtime-parameters-static:  Static values: Enter values directly into the Low and High input fields. 
	- :runtime-parameters-dynamic:  {{ Variables }}: Select an existing runtime parameter from the drop-down list.
	- :magnifying-glass:  Pre-defined values: If available, select pre-defined values from SAP:<br>
8. Click **[OK]** to confirm your input.
9. Click {{ previewBtn }} in the main window of the component to check the result of the filter.
If {{ variables }} are defined, you are prompted to populate the parameters with actual values.


### Set Dimension Filters 

Each dimension of a BEx Query or an InfoCube offers the possibility to set a filter to execute the MDX statement in BW using the selected filter values.
Follow the steps below to create dimension filters in the {{ bwcube }} {{ component }}.

1. In the tree structure of the {{ component }}, right-click a dimension to open the context menu.<br>
![Query Filter](../../assets/images/documentation/components/bwcube/cube-query-filter.png){:class="img-responsive"}
2. Click **[Edit Filter]**. The window "Edit Selections" opens. 
3. Click **[Single]**{% if page.meta.product != "xtract-is" %}, **[Range]** or **[List]**{% else %} or **[Range]**{% endif %} to add a corresponding filter, see [Filter Options](#filter-options).
4. In the column **Sign** :number-1:, select *Include* to add the filtered data to the output or select *Exclude* to remove the filtered data from the output.<br>
![edit-selections](../../assets/images/documentation/components/edit-selections.png){:class="img-responsive"}
5. In the column **Option**, select an operator :number-2:, see [Filter options](#filter-options).
5. In the column **Value**, enter values directly into the input fields **Low** and **High**, assign existing {% if page.meta.product != "xtract-is" %} [{{ variables }}](edit-runtime-parameters.md) {% else %} {{ variables }} {% endif %} or look up pre-defined values in SAP.
	- :runtime-parameters-static:  Static values: Enter values directly into the Low and High input fields. 
	- :runtime-parameters-dynamic:  {{ Variables }}: Select an existing runtime parameter from the drop-down list.
	- :magnifying-glass:  Pre-defined values: If available, select pre-defined values from SAP.
6. Click **[OK]** to confirm your input. 
7. Click {{ previewBtn }} in the main window of the {{ component }} to check the result of the filter.
If {{ variables }} are defined, you are prompted to populate the parameters with actual values.

When filters are applied, the :material-filter: symbol is displayed in the treeview of the dimensions.

!!! warning 
	**Extraction fails - Error message: Argument cannot be null or empty** <br>
	When a filter is set, a value cannot be empty for an extraction to run. <br>
	Make sure to pass a value (# is accepted).


{% include "components/filter-options.md" %}
