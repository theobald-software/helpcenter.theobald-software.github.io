Most reports allow entering selections before report execution. Selections limit the result set of the report to extract only records that match the selection.

In SAP a [selection variant](https://help.sap.com/docs/btp/ABAP/3353524716.html) can be created in the input screen of an ABAP report. The purpose of a variant is to save selection settings on your input screen and to minimize the necessity to enter selections when running a report.

Note

Manual selections and variants can be combined. Manual selections overwrite any selections in the variant.

### Choose a Variant

Choose a variant from the drop-down-list *Variant*.\
When creating a new variant in SAP after creating the extraction, click **[]** to load the new variant.

The selections of the variant are **not** displayed in the *Selection Screen* section of the window. To see the definition of a variant, open the variant in SAP.

### Edit Selections

The *Selection Screen* in the main window of the component corresponds to the input screen in SAP.

Note

Some selection fields only have a technical name and no description. To understand which field corresponds to a field in SAP, open the input screen in SAP. Click on a selection field and press the function key `F1` to display the technical name of the selection field.

Follow the steps below to edit selection fields and filter data:

1. In the subsection *Selection Screen*, click **[Edit]** next to the field you want to edit. The window “Edit selection” opens.

1. Click **[Single]** or **[Range]** to add a corresponding filter, see [Filter Options](#filter-options).

1. In the column **Sign** , select *Include* to add the filtered data to the output or select *Exclude* to remove the filtered data from the output.

1. In the column **Option** , select an operator, see [Filter Options](#filter-options).

1. In the column **Value**, enter values directly into the input fields **Low** and **High** or assign existing SSIS variables to the selection fields .

   Note

   When SSIS variables are available, you can use the icon button next to the input field to switch between static values () and SSIS variables ().

1. Click **[OK]** to confirm your input.

1. Click **[Load live preview]** in the main window of the component to check the result of your selection. If SSIS variables are defined, you are prompted to populate the parameters with actual values.

Note that edited selection fields overwrite the selection fields in the variant.

Tip

If you use multiple selection parameters, it is more efficient to create a variant in SAP.

### Filter Options

The Xtract Report component offers the following filter options:

| Type | Operator | Description | | --- | --- | --- | | Single | | Compare data to a single specified value. | | | *(not) like pattern* | True if data values do (not) contain to the specified value. | | | *(not) equal to* | True if data is (not) equal to the specified value. | | | *at least* | True if data is greater than or equal to the specified value. | | | *more than* | True if data is greater than the specified value. | | | *at most* | True if data is less than or equal to the specified value. | | | *less than* | True if data is less than the specified value. | | Range | | Check if the data is (not) within a specified range of values. | | | *(not) between* | True if data values do (not) lie between the 2 specified values. |

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

______________________________________________________________________

#### Related Links

- [SAP Help: Report variants in SAP](https://help.sap.com/docs/btp/ABAP/3353524716.html)
