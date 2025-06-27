This page shows how to filter the data that is extracted by the Xtract ODP component. Selections limit the result set of the Xtract ODP component to extract only records that match the selection.

### Edit Selections

Follow the steps below to edit selection fields and filter data:

1. In the subsection *Fields*, click **Edit** next to the field you want to edit. The window “Edit selection” opens.

1. Click **[Single]**, **[Range]** or **[List]** to add a corresponding filter, see [Filter Options](#filter-options).

1. In the column **Sign** , select *Include* to add the filtered data to the output or select *Exclude* to remove the filtered data from the output.

1. In the column **Option** , select an operator, see [Filter Options](#filter-options).

1. In the column **Value**, enter values directly into the input fields **Low** and **High** or assign existing [runtime parameters](../edit-runtime-parameters/) to the selection fields .

   Note

   When runtime parameters are available, you can use the icon button next to the input field to switch between static values () and runtime parameters ().

1. Click **[OK]** to confirm your input.

1. Click **[Load live preview]** in the main window of the component to check the result of your selection. If runtime parameters are defined, you are prompted to populate the parameters with actual values.

The number of defined filters is displayed in square brackets next to the **Edit** option.

### Filter Options

The Xtract ODP component offers the following filter options:

| Type | Operator | Description | | --- | --- | --- | | Single | | Compare data to a single specified value. | | | *(not) like pattern* | True if data values do (not) contain to the specified value. Not not all ODP contexts and data sources support this option. | | | *(not) equal to* | True if data is (not) equal to the specified value. | | | *at least* | True if data is greater than or equal to the specified value. | | | *more than* | True if data is greater than the specified value. | | | *at most* | True if data is less than or equal to the specified value. | | | *less than* | True if data is less than the specified value. | | Range | | Check if the data is (not) within a specified range of values. | | | *(not) between* | True if data values do (not) lie between the 2 specified values. | | List | | Check if the data is part of a specified list of values. | | | *element of* | True if data values are part of the list. |

### Data Format

Use the following internal SAP representation for input:

- Date: The date 01.01.1999 has the internal representation 19990101 (YYYYMMDD).
- Year period: The year period 001.1999 has the internal representation 1999001 (YYYYPPP).
- Numbers: Numbers must contain the leading zeros, e.g., customer number 1000 has the internal representation 0000001000.

Warning

**Values accept only the internal SAP representation.**\
Input that does not use the internal SAP representation results in error messages. Use the internal SAP representation. Example:

```text
ERPConnect.ABAPProgramException: RfcInvoke failed(RFC_ABAP_MESSAGE): Enter date in the format \_.\_.\_

```
