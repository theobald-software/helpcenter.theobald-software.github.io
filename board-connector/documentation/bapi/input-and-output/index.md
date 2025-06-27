This page contains an overview and description of the Import, Export, Changings and Tables parameter in the BAPI extraction type.

Each Import, Export, Changings and Tables parameter can have one of the following representations:

- A scalar field (e.g., characters, date, time, number, amount etc.).
- A structure consisting of several components.
- A table (tabular array of data) consisting of columns (data values of the same type) and rows (data records).

## Import Parameters

Import parameters represent the input values sent from the client to SAP. In the tab **Imports** you can define import parameters that can be presented as scalar values or structures .

To use the filtering function, enter text in the headers of the columns **Name** and **Description**.

### Scalar Parameters

Assign single values to an import parameter by using one of the following options:

- If the input field is empty, enter a static value.
- If a checkbox is displayed in the input field, the parameter is predefined in SAP. The value in SAP is displayed in a light gray font. To disable the predefined value, activate the checkbox and leave the field empty or enter a new value.
- If **[]** is displayed in the input field, enter a static value. Click **[]** to switch between static values and dynamic values that are set at runtime.
- If **[]** is displayed in the input field, select a [runtime parameter](../edit-runtime-parameters/). Click **[]** to switch between dynamic values and static values.

When using runtime parameters, make sure the data type of the input matches the data type in SAP.

### Structure Parameters

When a Function Module / BAPI uses structures as import parameters, you can assign structure elements (i.e. fields) similarly to single [scalar fields](#scalar-parameters). Setting a single value or a parameter for the whole structure is not possible.

1. Click **[]**. The window "Edit Structures" opens.
1. Enter static values ( **[]** icon or no icon) or assign runtime parameters ( **[]** icon).

Tip

It is possible to use tables as input parameters, see [Tables Parameters](#table-parameters).

## Export Parameters

Export parameters represent the output values sent from SAP back to the client after the execution of a Function Module. In the tab **Export** you can select the items you want to add to the output of the extraction type.

### Add Items to Output

Mark the checkbox in the output column to add an item to the output of the extraction type.

To use the filtering function, enter text in the headers of the columns **Name** and **Description**.

Tip

It is possible to use tables as output parameters, see [Add Tables to Output](#add-tables-to-output).

## Changing Parameters

Changing parameters represent parameters that can be used for input and output. In the tab **Changings** you can define the changing parameters.

## Table Parameters

Table parameters are parameters presented in a table structure consisting of multiple rows. Tables can be used for input and output. In the tab **Tables** you can define table parameters for importing and exporting data into and from an SAP Function Module or BAPI.

Tables represent a structure of multiple rows of the same data type.

To use the filtering function, enter text in the headers of the columns **Name** and **Description**.

Note

Only **5** tables are available for parallel exporting.

- Click **[]** to check the names and data types of the table fields .
- Activate the checkbox in the output column to add items to the output .
- Click **[]** to edit tables .

### Access Metadata of Tables

Click **[]** to display the metadata of a table. The metadata includes the name and the data type of all fields. After the function module was edited in SAP, refresh the metadata by clicking **Refresh metadata**

### Add Tables to Output

Mark the checkbox in the output column to add a table to the output.

### Edit Tables

You can assign tables elements (i.e. fields) similarly to single [scalar fields](#scalar-parameters):

1. Click **[]**. The window "Edit Table Contents" opens.
1. Click **[Add]** to add new set of parameters.
1. Enter values or runtime parameters.\
   When using runtime parameters, make sure the data type of the input matches the SAP data type.
1. Click **[Remove]** to delete a row.

## Exceptions

**Exceptions** refer to ABAP exceptions / errors messages of an SAP BAPI. If an exception occurs during runtime, Board Connector returns a corresponding error message.

By default, all exceptions result in errors when running the BAPI extraction type. To ignore exceptions during runtime, deselect the exceptions in the **Exceptions** tab.
