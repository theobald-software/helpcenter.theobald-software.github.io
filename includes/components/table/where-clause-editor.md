
## WHERE Clause Editor

{% if page.meta.componentFolder != "table-cdc" %}
The WHERE clause editor offers a toolkit for those who are not familiar with the syntax of the WHERE clause.
{% if page.meta.product == "yunio" %}Use the toggle to switch between *Text mode* and *Editor mode*.
![WHERE-Clause-Builder-01](../../assets/images/yunio/documentation/where-clause-editor-mode.png){:class="img-responsive"}{% else %}Click **[Editor mode]** to open the editor. 
![WHERE-Clause-Builder-01](../../assets/images/documentation/components/table/where-clause-builder.png){:class="img-responsive"}
{% endif %} {% endif %}

There are 2 options for adding criteria to the WHERE clause:

- **[Add Criteria]** adds single criteria. <br>
	- The default structure for a single criteria with static values is `[Column][Operator][Value]` e.g., *MARC~WERKS = 1000*.
	{% if page.meta.product != "yunio" and page.meta.componentFolder != "table-cdc" %}- The default structure for a single criteria with parameters is `[Column][Operator][Parameter]` e.g., *MARC~WERKS = [p_WERKS]*.{% endif %}
- **[Add Criteria Group]** adds a group of criteria.
	- The default structure for a criteria group is `([Column1][Operator1][Value1][Boolean][Column2][Operator2][Value2])` e.g., *(MARC~PSTAT = 'L' OR MARC~PSTAT = 'LB')*.

!!! tip 
	Combine multiple criteria and criteria groups to create complex filters e.g., 
	*MARC~WERKS = 1000 AND (MARC~PSTAT = 'L' OR MARC~PSTAT = 'LB')* extracts only data where the column WERKS equals 1000 and the column PSTAT equals either 'L' or 'LB'.

### Components of the WHERE Clause Editor

{% if page.meta.product == "yunio" %}
![WHERE-Clause-Builder-Example](../../assets/images/yunio/documentation/where-clause-editor.png){:class="img-responsive"}
{% else %}
![WHERE-Clause-Builder-Example](../../assets/images/documentation/components/table/where-clause-builder-2.png){:class="img-responsive"}
{% endif %}

The following buttons and options are available in the WHERE Clause Editor:

| Icon  | Component   | Function    | 
| ------|-------------|-------------| 
| {% if page.meta.product == "yunio" %}:fontawesome-solid-trash:{% else %}:trashbin:{% endif %} | Delete row | deletes a criteria.|
| :material-arrow-up: | Move row up | changes the sequence of the criteria. The selected criteria moves up. <br>The sequence of criteria can also be changed with Drag and drop. |
| :material-arrow-down: | Move row down | changes the sequence of the criteria. The selected criteria moves down. <br>The sequence of criteria can also be changed with Drag and drop.| 
| :where-clause-column: | Column    | adds a column. Click on the component to select a column from the available tables. | 
| :where-clause-add-sql:| SQL       |  adds an Open SQL statement, see [SAP Documentation: Open SQL](https://help.sap.com/doc/abapdocu_750_index_htm/7.50/en-us/abenopensql.htm).      |  
| :material-not-equal-variant:| Operator  | adds an operator e.g., =, <, >, etc. |  
| :where-clause-add-literal: | Value | adds a static value of type *String*, *Number*, *Flag* or *List*. *List* offers a separate editor to create lists of type *String*, *Number* or *Select*. *Select* enables usage of SELECT statements. {% if page.meta.product != "yunio" %}For more information, see [Working with Lists in the WHERE-Clause Editor](../knowledge-base/tables/where-clause-editor-lists.md). {% endif %}|
| :where-clause-add: | Criteria | adds a new criteria after the selected criteria. |
| :where-clause-add-group: | Group | adds a new group of criteria the selected criteria. | 
{% if page.meta.product != "yunio" and page.meta.parent != "table-cdc" %}| :material-code-brackets: | Parameter | adds a previously defined {{ variable }}, see {% if page.meta.product != "xtract-is" %}[Runtime Parameters](edit-runtime-parameters.md){% else %}[Parameterization using SSIS Variables](parameterization.md#parameterization-using-ssis-variables){% endif %}.|{% endif %} 

!!! note
	When adding or editing a criteria only the relevant components are displayed e.g., **Add Operator** is only available if there is a column or SQL statement to use an operator on.

#### Edit and Delete Components

- Click on a component to edit it. All areas that are marked green can be edited.<br>
- To delete a component, click the {% if page.meta.product == "yunio" %}:fontawesome-solid-trash: icon that appears when hovering over{% else %}(x) icon above{% endif %} the component.<br>


### SAP System Fields

You can use [SAP system fields for date and time](https://help.sap.com/doc/abapdocu_751_index_htm/7.51/en-US/abentime_system_fields.htm) in a WHERE clause. 
The usage of SAP system fields requires SAP NW 7.4 SP5 or higher and the custom function module [/THEO/READ_TABLE](../setup-in-sap/custom-function-module-for-table-extraction.md/#installation-of-theoread_table).

Example:

1. Navigate to [WHERE Clause Editor](#where-clause-editor) and select a column of the type Date *here: BUDAT* :number-1:. 
![img-01](../../assets/images/documentation/components/table/table_where_syst_field_1.png){:class="img-responsive"}
2. Delete the criterion "Value" and use the criterion "SQL" :number-2:.
![img-02](../../assets/images/documentation/components/table/table_where_syst_field_2.png){:class="img-responsive"}
3. Within the "SQL" criterion, use the supported system fields for date and time with a preceding "@" character, *here: @sy-datum* :number-3:.
![img-03](../../assets/images/documentation/components/table/table_where_syst_field_3.png){:class="img-responsive"}
4. Click {{ previewBtn }} to check the result. 
