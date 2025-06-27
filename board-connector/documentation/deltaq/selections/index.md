This page shows how to filter the data that is extracted by the DeltaQ extraction type.

### Edit Selections

Note

Do not define selections when using the update mode Delta Update, because the selections of the Init mode are automatically applied.

Follow the steps below to edit selection fields and filter data:

1. In the subsection *OLTP Fields*, click **Edit** next to the field you want to edit. The window “Edit selection” opens.

1. Click **[Single]**, **[Range]** or **[List]** to add a corresponding filter, see [Filter Options](#filter-options).

1. In the column **Sign** , select *Include* to add the filtered data to the output or select *Exclude* to remove the filtered data from the output.

1. In the column **Option** , select an operator, see [Filter Options](#filter-options).

1. In the column **Value**, enter values directly into the input fields **Low** and **High** or assign existing [runtime parameters](../edit-runtime-parameters/) to the selection fields .

   Note

   When runtime parameters are available, you can use the icon button next to the input field to switch between static values () and runtime parameters ().

1. Click **[OK]** to confirm your input.

1. Click **[Load live preview]** in the main window of the extraction type to check the result of your selection. If runtime parameters are defined, you are prompted to populate the parameters with actual values.

### Filter Options

The DeltaQ extraction type offers the following filter options:

| Type | Operator | Description | | --- | --- | --- | | Single | | Compare data to a single specified value. | | | *(not) like pattern* | True if data values do (not) contain to the specified value. | | | *(not) equal to* | True if data is (not) equal to the specified value. | | | *at least* | True if data is greater than or equal to the specified value. | | | *more than* | True if data is greater than the specified value. | | | *at most* | True if data is less than or equal to the specified value. | | | *less than* | True if data is less than the specified value. | | Range | | Check if the data is (not) within a specified range of values. | | | *(not) between* | True if data values do (not) lie between the 2 specified values. | | List | | Check if the data is part of a specified list of values. | | | *element of* | True if data values are part of the list. |

### Script Expressions for DeltaQ

Script expressions are usually used to determine a dynamic date based on the current date.

| Input | Description | | --- | --- | | `#{ DateTime.Now.ToString("yyyyMMdd") }#` | Current date in SAP format (yyyyMMdd) | | `#{ String.Concat(DateTime.Now.Year.ToString(), "0101") }#` | Current year concatenated with "0101" (yyyy0101) | | `#{ String.Concat(DateTime.Now.ToString("yyyy"), "0101") }#` | Current year concatenated with "0101" (yyyy0101) | | `#{ String.Concat(DateTime.Now.ToString("yyyyMMdd").Substring(0,4), "0101") }#` | Current year concatenated with "0101" (yyyy0101) |

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
