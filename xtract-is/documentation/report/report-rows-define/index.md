This page shows how to define the rows in the result set of a report extraction.\
The row settings are located in the tab *Skip and Parse Rows*.

### Row Settings

The Xtract Report component offers the following options to remove rows from the result set of a report extraction:

| Option | Description | | --- | --- | | [Skip rows from top](#skip-rows-from-top) | Removes the first n number of rows from the top of the report. | | [Skip rows from button](#skip-rows-from-bottom) | Removes the last n number of rows from the button of the report. | | [Skip rows by pattern](#skip-rows-from-bottom) | Uses a pattern or regular expression to remove rows that contain the pattern. | | [Skip rows by keyword](#add-row-to-skip) | Uses a keyword to remove all rows that contain the keyword. |

For more information on how to remove and parse rows to merge groups of data sets into a single data set, see [Knowledge Base Article: Parse Reports in Xtract IS](../../../knowledge-base/parse-reports/).

#### Skip rows from top

Enter the number of rows you want to skip at the beginning of the report. Some reports display meta information in the header section of the report, before the actual report body. This setting allows skipping the meta information.

#### Skip rows from bottom

Similar to *skip rows from top*. Enter the number of rows you want to skip in the footer section of the report.

#### Report rows per data row

Use this setting for ABAP reports that return two or more "physical" rows to display a single "semantic" data row. Enter the number of physical rows that represent a single data row.\
Example: Report RIEQUI20

#### Report width

Use this setting in combination with **Report rows per data row**. **Report width** defines the length of each physical row. The maximum width of extracted reports is limited to 1024 characters per row.

#### Header pattern

Enter a search pattern to detect the table header, e.g., *Created on*.\
The Xtract Report component scans the report output for this pattern and uses the row that contains this pattern as the report header. Any duplicates of the header row are removed from the result set.

Rows that contain the header pattern are displayed in a blue font in the preview section.

Tip

Alternatively, right-click the row that you want to use as a header and select **Select as header** from the context menu.

This setting is usually not required if the report's columns can be [detected automatically](../report-columns-define/#define-columns-automatically) and *Dynamic column widths and offsets* is active in the main window of the component.

#### Skip rows by pattern

Enter a search pattern. All report rows that contain the pattern are removed from the result set.\
The skip row setting can be used to skip header rows that are repeated in the output body of reports, see also [Skip rows by keyword](#skip-rows-by-keyword).\
The live preview in the Xtract Report component does not include the **Row Skip Pattern** option, because the rows are only removed after the report data is extracted from SAP.

- Regular expressions are supported.
- Multiple row skip patterns can be entered, separated by the pipe symbol "`|`", e.g., `2020|2021|-|Sum` removes all rows containing ‘2020’, ‘2021’, ‘-‘ and ‘Sum’.
- To process special symbols, add `\`before the symbol, e.g., `\*` removes rows that contain the sum symbol * .

Note

The setting *Skip rows by pattern* is usually not required if the report columns can be [detected automatically](../report-columns-define/#define-columns-automatically) and *Dynamic column widths and offsets* is checked in the Report window.

### Skip rows by keyword

Define rows that are removed from the result set of the report extraction. This option can be used to skip header rows that are repeated in the output body of reports.

#### Add Row to Skip

Click **[Add row to skip]** to define a row that is removed from the result set of the report extraction.\
Enter a unique keyword from the row you want to remove.\
Example: `**` removes all rows that contain the characters `**`.

Rows that are excluded from the result set are displayed in a gray font in the preview section.

Tip

Alternatively, right-click the row you want to remove and select **Ignore/unignore row** from the context menu.

### Parse Header Row as new Column

Define rows that are added to the result set as columns.\
This option can be used for reports that contain groups with multiple headers.

#### Add row to parse as column

Click **[Add row to parse as column]** to add a new column to the result set.\
Enter the following column properties manually or use the [parse helper](#parse-helper) to define the column properties:

| Property | Description | | --- | --- | | *Keyword* | Enter a unique keyword from the row to include it as a column in the result set. The report is scanned for rows that contain the string. The keyword search is case sensitive. | | *Name* | Enter a name for the new column. | | *Offset* | Define the beginning (offset) of the content that is written into the new column. *Example:* Enter 0 if the content for the new column is located at the start of the row. Enter 25 if the content starts 25 characters into the row. | | *Width* | Define the width of the new column. |

Tip

Alternatively, to add row to parse as column, right-click a header row you want to use as a column and select **Parse header row as new column** from the context menu.

Rows that are parsed as a column are displayed in a red font in the preview section.\
For more information, see [Knowledge Base Article: Parse Reports in Xtract IS](../../../knowledge-base/parse-reports/).

#### Parse Helper

The parse helper is a feature that helps you define properties for new columns:

1. In the subsection *Parse Header Row as new Column*, click **[Add row to parse as column]** to add a new column to the result set.

1. Click **[]** . The window "Parse Helper" opens and a new preview of the report data is fetched. This process may take several seconds to complete.

1. Under **Search keyword** enter a unique keyword from the row you want to parse as a column. Matching rows are displayed in the preview section of the window.

   Note

   The keyword search is case sensitive.

1. Make sure only header rows are displayed in the preview section. If the preview includes regular rows, edit the keyword until only header rows remain.

1. Under **New Column Name** enter a name for the new column.

1. Mark the content of the column in the preview section by pressing and dragging the mouse pointer over the length of the content.

1. Click **[OK]** to save the column properties.

The new column is added at the beginning of the report *after* running the SSIS package. Therefore, the new column is not included in the preview section of the component.

Rows that are parsed as a column are displayed in a red font in the preview section.

______________________________________________________________________

#### Related Links

- [Knowledge Base Article: Parse Reports in Xtract IS](../../../knowledge-base/parse-reports/).
