

This page contains an overview and description of the Import, Export, Changings and Tables parameter in the {{ bapi }} {{ component }}.

Each Import, Export, Changings and Tables parameter can have one of the following representations:

- A scalar field (e.g., characters, date, time, number, amount etc.).
- A structure consisting of several components.
- A table (tabular array of data) consisting of columns (data values of the same type) and rows (data records).


## Import Parameters
Import parameters represent the input values sent from the client to SAP. 
In the tab **Imports** you can define import parameters that can be presented as scalar values :number-1: or structures :number-2:. 

![import-parameters](../../assets/images/documentation/components/bapi/{{ abbr }}/import-parameters.png){:class="img-responsive"}

To use the filtering function, enter text in the headers of the columns **Name** and **Description**. <br>

### Scalar Parameters

Assign single values to an import parameter by using one of the following options:
- If the input field is empty, enter a static value.
- If a checkbox is displayed in the input field, the parameter is predefined in SAP. The value in SAP is displayed in a light gray font.
To disable the predefined value, activate the checkbox and leave the field empty or enter a new value.
- If **[:runtime-parameters-static:]** is displayed in the input field, enter a static value. 
Click **[:runtime-parameters-static:]** to switch between static values and dynamic values that are set at runtime.
- If **[:runtime-parameters-dynamic:]** is displayed in the input field, select {% if page.meta.product == "xtract-is" %}an {{ variable }} / parameter. This option is only available if the project contains SSIS variables.{% else %}a [runtime parameter](edit-runtime-parameters.md).{% endif %}
Click **[:runtime-parameters-dynamic:]** to switch between dynamic values and static values.

When using {{ variables }}, make sure the data type of the input matches the data type in SAP. {% if page.product == "xtract-is" %}Example:

![Assigning-SSIS-Variables](../../assets/images/xis/documentation/bapi/ssis-variables.gif){:class="img-responsive" style="border:1px solid black;"}
{% endif %}


### Structure Parameters 

When a Function Module / BAPI uses structures as import parameters, you can assign structure elements (i.e. fields) similarly to single [scalar fields](#scalar-parameters). 
Setting a single value or a parameter for the whole structure is not possible. 

1. Click **[:pen-button:]**. The window "Edit Structures" opens.
2. Enter static values ( **[:runtime-parameters-static:]** icon or no icon) or assign {{ variables }} ( **[:runtime-parameters-dynamic:]** icon).<br>
![BAPI import parameters](../../assets/images/documentation/components/bapi/edit-structure.png){:class="img-responsive"}

!!! tip	
	It is possible to use tables as input parameters, see [Tables Parameters](#table-parameters).


## Export Parameters
Export parameters represent the output values sent from SAP back to the client after the execution of a Function Module.
In the tab **Export** you can select the items you want to add to the output of the {{ component }}.

### Add Items to Output
Mark the checkbox in the output column to add an item to the output of the {{ component }}.
{% if page.meta.product == "xtract-for-alteryx" %}The selected output is assigned to the [output anchor](index.md/#input-and-output-anchors) 'E' of the {{ bapi }} {{ component }}.{% endif %}

![BAPI export parameters](../../assets/images/documentation/components/bapi/{{ abbr }}/export-parameters.png){:class="img-responsive"}

To use the filtering function, enter text in the headers of the columns **Name** and **Description**. <br>

!!! tip
	It is possible to use tables as output parameters, see [Add Tables to Output](#add-tables-to-output).


## Changing Parameters

Changing parameters represent parameters that can be used for input and output. 
In the tab **Changings** you can define the changing parameters.

## Table Parameters

Table parameters are parameters presented in a table structure consisting of multiple rows. Tables can be used for input and output.
In the tab **Tables** you can define table parameters for importing and exporting data into and from an SAP Function Module or BAPI.

Tables represent a structure of multiple rows of the same data type.

To use the filtering function, enter text in the headers of the columns **Name** and **Description**.

!!! note 
	Only **5** tables are available for parallel exporting.

- Click **[:glasses-button:]** to check the names and data types of the table fields :number-1:.
- Activate the checkbox in the output column to add items to the output :number-2:.
- Click **[:pen-button:]** to edit tables :number-3:.

![BAPI table parameters](../../assets/images/documentation/components/bapi/{{ abbr }}/table-parameters.png){:class="img-responsive"}

### Access Metadata of Tables
Click **[:glasses-button:]** to display the metadata of a table. The metadata includes the name and the data type of all fields. 
{% if page.meta.product != "xtract-for-alteryx" %} After the function module was edited in SAP, refresh the metadata by clicking **Refresh metadata**<br>
![BAPI table metadata](../../assets/images/documentation/components/bapi/BAPI-Table-Metadata.png){:class="img-responsive"}
{% endif %}

### Add Tables to Output 

Mark the checkbox in the output column to add a table to the output.<br> 
![BAPI table output](../../assets/images/documentation/components/bapi/BAPI-Table-Output.png){:class="img-responsive"}

{% if page.meta.product == "xtract-for-alteryx" %}
The selected tables are assigned to the [output anchors](tool-configuration.md/#output-mappings) of the {{ bapi }} {{ component }}.
The number of tables that can be added to the output is limited to 5 tables.
{% endif %}

### Edit Tables 

You can assign tables elements (i.e. fields) similarly to single [scalar fields](#scalar-parameters): 

1. Click **[:pen-button:]**. The window "Edit Table Contents" opens.<br>
![BAPI edit table](../../assets/images/documentation/components/bapi/BAPI-Table-Edit.png){:class="img-responsive"}
2. Click **[Add]** to add new set of parameters.<br>
3. Enter values or {{ variables }}.<br>
When using {{ variables }}, make sure the data type of the input matches the SAP data type.<br>
![BAPI edit table](../../assets/images/documentation/components/bapi/BAPI-Edit-Table-Contents.png){:class="img-responsive"}
4. Click **[Remove]** to delete a row.

{% if page.meta.product == "xtract-is" %}
### Map Input Tables

When connecting tables to the {{ bapi }} {{ component }}, a data mapping is executed automatically. 
To correctly map the data, the following requirements apply:

![BAPI table mapping](../../assets/images/documentation/components/bapi/{{ abbr }}/ssis-write-xtractis-fuba.png){:class="img-responsive" align=left}

- The column names of the input table must be the same as in the {{ bapi }} {{ component }}.
- The data types in the input table must be the same as in the {{ bapi }} {{ component }}.
Click **[:glasses-button:]** next to a table to look up column names and data types in the {{ bapi }} {{ component }}.

!!! tip
	If the column names and / or datatypes of the input table and the {{ bapi }} table do not match, add a *Derived Column* component to convert the input data.

{% endif %}
{% if page.meta.product == "xtract-for-alteryx" %}

### Map Input Tables

To correctly map the data of an input table, the following requirements apply:

- The column names of the input table must be the same as in the {{ bapi }} {{ component }}.
- The data types in the input table must be the same as in the {{ bapi }} {{ component }}.
Click **[:glasses-button:]** next to a table to look up column names and data types in the {{ bapi }} {{ component }}.

Follow the steps below to pass tables to the {{ bapi }} {{ component }} at runtime:
1. Define or load the input tables into your workflow. 
2. Connect the input tables to the {{ bapi }} {{ component }} using the input anchor "I". <br>
The number that is displayed in the connection arrow is used to identify tables in the {{ bapi }} {{ component }}.<br>
![bapi-input-table2](../../assets/images/documentation/components/bapi/{{ abbr }}/bapi-input-table.png){:class="img-responsive" }
3. Open the {{ bapi }} {{ component }} and navigate to the table you want to parameterize.
4. Select an input table from the dropdown list. <br>
![bapi-input-table](../../assets/images/documentation/components/bapi/{{ abbr }}/bapi-input-table2.png){:class="img-responsive" }

To remove an input table from a structure, click **[:x-button:]**.

{% endif %}


## Exceptions

**Exceptions** refer to ABAP exceptions / errors messages of an SAP BAPI.
If an exception occurs during runtime, {{ productName }} returns a corresponding error message.

By default, all exceptions result in errors when running the {{ bapi }} {{ component }}.
To ignore exceptions during runtime, deselect the exceptions in the **Exceptions** tab.

![BAPI Exceptions](../../assets/images/documentation/components/bapi/BAPI-Exceptions.png){:class="img-responsive"}

