This page contains an overview of the settings in the window "General Settings".\
To open the general settings, click **General Settings** in the main window of the extraction type.

### Misc. Tab

The *Misc.* tab covers cache settings, column encryption and keywords of an extraction type.

#### Cache results

This option can be neglected. Board Connector always uses the result cache, because Board always requests the results twice.

#### Keywords

One or more keywords (tags) can be assigned to an extraction. Keywords can be entered directly in the keyword field. You can use these keywords to filter extractions in the "Search Extractions" window. To open the "Search Extractions" window, click **[ Search]** in the main window of the Designer.

Tip

To add keywords to multiple extractions at once, select the extractions in the main window of the Designer.\
Right-click + **Add/Remove keywords** opens the window "Add/Remove Keywords To/From Multiple Extractions".

### Security Tab

Restrict user access to the extraction. For more information, see [Restrict Designer Access](../../access-restrictions/restrict-designer-access/).

### CSV Tab

The *CSV* tab covers data and date formatting.

#### Column Name Style

Defines the style of the column name. Following options are available:

| Option | Description | | --- | --- | | **Code** | The SAP technical column name is used as column name in the destination e.g. MAKTX. | | **PrefixedCode** | The SAP technical column name is prefixed by SAP object name and the tilde character e.g., MAKT~MAKTX | | **CodeAndText** | The SAP technical column name and the SAP description separated by an underscore are used as column name in the destination e.g., MAKTX_Material Description (Short Text) | | **TextAndCode** | The SAP description and the SAP technical column name description separated by an underscore are used as column name in the destination e.g., Material Description (Short Text)\_MAKTX |

#### Date Conversion

When **Convert dates** is active, the following date conversions apply:

| Option | Description | | --- | --- | | **Year 0** | Converts the SAP date 00000000 to the entered value. | | **Year 9999** | Converts the SAP date 9999XXXX to the entered value. | | **Invalid values** | If an SAP date cannot be converted to a valid date format, the invalid date is converted to the entered value. NULL is supported as a value. |

### Columns Order Tab

The "Columns Order" feature enables users to rearrange the order of result columns when running an extraction. To rearrange the result order, assign indexes to the available result columns. Index 0 defines the first column in the result set, index 1 the second columns, etc.

| Option | Description | | --- | --- | | **Enabled** | When this option is active, the defined column order is applied when running the extraction. | | **Swap** | Swaps the index of 2 columns. All other columns keep their indexes. | | **Insert** | Inserts the selected column into the selected index. All other indexes are recalculated. | | **Reset default** | Restores the original column order. |
