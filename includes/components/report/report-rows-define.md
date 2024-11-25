
This page shows how to define the rows in the result set of a report extraction.<br>
The row settings are located in the tab *Skip and Parse Rows*. 

![skip-and-parse-rows](../../assets/images/documentation/components/report/skip-and-parse-rows.png){:class="img-responsive"}


### Row Settings

The {{ report }} {{ component }} offers the following options to remove rows from the result set of a report extraction:

| Option | Description |
|--------|-------------|
| [Skip rows from top](#skip-rows-from-top) | Removes the first n number of rows from the top of the report. Use this option to skip rows in the header. | 
| [Skip rows from button](#skip-rows-from-bottom) | Removes the last n number of rows from the button of the report. Use this option to skip rows in the footer. | 
| [Skip rows by pattern](#skip-rows-from-bottom) | Uses a pattern or regular expression to remove rows that contain the pattern. If no regular expressions are involved, it is recommended to use the **Skip rows by keayword** option. | 
| [Skip rows by keyword](#add-row-to-skip) | Uses a keyword to remove all rows that contain the keyword. Use this option to remove header rows that are repeated in the output body of reports or rows that contain *sum* calculations. |

For more information on how to remove and parse rows to merge groups of data sets into a single data set, see [Knowledge Base Article: Parse Reports in {{ productName }}](../../knowledge-base/parse-reports.md).

#### Skip rows from top
Enter the number of rows you want to skip at the beginning of the report.
Some reports display meta information in the header section of the report, before the actual report body. This setting allows skipping the meta information. 

#### Skip rows from bottom
Similar to *skip rows from top*. Enter the number of rows you want to skip in the footer section of the report.

#### Report rows per data row
Use this setting for ABAP reports that return two or more "physical" rows to display a single "semantic" data row. Enter the number of physical rows that represent a single data row. <br>
Example: Report RIEQUI20 

![Report_new_rows_per_data_row](../../assets/images/documentation/components/report/Report_new_rows_per_data_row.png){:class="img-responsive"}

#### Report width
Use this setting in combination with **Report rows per data row**. **Report width** defines the length of each physical row. 
The maximum width of extracted reports is limited to 1024 characters per row.

#### Header pattern

Enter a search pattern to detect the table header, e.g., *Created on*. <br>
The {{ report }} {{ component }} scans the report output for this pattern and uses the row that contains this pattern as the report header.
Any duplicates of the header row are removed from the result set.

Rows that contain the header pattern are displayed in a <span style="color:blue">blue</span> font in the preview section.

!!! tip
	Alternatively, right-click the row that you want to use as a header and select **Select as header** from the context menu.

This setting is usually not required if the report's columns can be [detected automatically](report-columns-define.md/#define-columns-automatically) and *Dynamic column widths and offsets* is active in the main window of the {{ component }}.


#### Skip rows by pattern

Enter a search pattern. All report rows that contain the pattern are removed from the result set. <br>
The skip row setting can be used to skip header rows that are repeated in the output body of reports, see also [Skip rows by keyword](#skip-rows-by-keyword).<br>
The live preview in the {{ report }} {{ component }} does not include the **Row Skip Pattern** option, because the rows are only removed after the report data is extracted from SAP. 

- Regular expressions are supported.
- Multiple row skip patterns can be entered, separated by the pipe symbol "`|`", e.g., `2020|2021|-|Sum` removes all rows containing ‘2020’, ‘2021’, ‘-‘ and ‘Sum’.
- To process special symbols, add `\`before the symbol, e.g., `\*` removes rows that contain the sum symbol * .
{% if page.meta.product == "xtract-universal" %}- Only works with database destinations, e.g., Microsoft Azure Storage,  Mircosoft SQl Server, Snowflake, etc.{% endif %}


!!! note
	The setting *Skip rows by pattern* is usually not required if the report columns can be [detected automatically](report-columns-define.md/#define-columns-automatically) and *Dynamic column widths and offsets* is checked in the Report window.


### Skip Rows by Keyword

Define rows that are removed from the result set of the report extraction.
This option can be used to skip header rows that are repeated in the output body of reports.

#### Add Row to Skip

Click **[Add row to skip]** to define a row that is removed from the result set of the report extraction. <br>
Enter a unique keyword from the row you want to remove. <br>
Example: `**` removes all rows that contain the characters `**`.

Rows that are excluded from the result set are displayed in a <span style="color:gray">gray</span> font in the preview section.

!!! tip
	Alternatively, right-click the row you want to remove and select **Ignore/unignore row** from the context menu.

### Parse Header Row as new Column

Define rows that are added to the result set as columns. <br>
This option can be used for reports that contain groups with multiple headers.

#### Add row to parse as column
<!---
![parse row as header](../../assets/images/documentation/components/report/parse-row-as-header.png){align=right :class="img-responsive"}
--->

Click **[Add row to parse as column]** to add a new column.<br>
Enter the following column properties manually or use the [parse helper](#parse-helper) to define the column properties:

| Property | Description | 
|----------|-------------|
| *Keyword*  | Enter a unique keyword from the row to include it as a column in the result set. The report is scanned for rows that contain the string. The keyword search is case sensitive. |
| *Name*     | Enter a name for the new column.|
| *Offset*   | Define the beginning (offset) of the content that is written into the new column. <br>*Example:* Enter 0 if the content for the new column is located at the start of the row.<br>Enter 25 if the content starts 25 characters into the row.|
| *Width*    | Define the width of the new column.|


!!! tip
	Alternatively, to add row to parse as column, right-click a header row you want to use as a column and select **Parse header row as new column** from the context menu.

Rows that are parsed as a column are displayed in a <span style="color:red">red</span> font in the preview section.<br>
For more information, see [Knowledge Base Article: Parse Reports in {{ productName }}](../../knowledge-base/parse-reports.md).


#### Parse Helper

The parse helper is a feature that helps you define properties for new columns:

1. In the subsection *Parse Header Row as new Column*, click **[Add row to parse as column]**:number-1: to add a new column to the result set. <br>
![parse row as header](../../assets/images/documentation/components/report/parse-row-as-header.png){:class="img-responsive"}
2. Click **[:material-target:]** :number-2:. The window "Parse Helper" opens and a new preview of the report data is fetched. This process may take several seconds to complete.
3. Under **Search keyword** enter a unique keyword from the row you want to parse as a column. Matching rows are displayed in the preview section of the window.

	!!! note
		The keyword search is case sensitive.
		
4. Make sure only header rows are displayed in the preview section. If the preview includes regular rows, edit the keyword until only header rows remain.
5. Under **New Column Name** enter a name for the new column. 
6. Mark the content of the column in the preview section by pressing and dragging the mouse pointer over the length of the content. <br>
![parse helper](../../assets/images/documentation/components/report/parse-helper.gif){:class="img-responsive" style="border:1px solid black;"}
7. Click **[OK]** to save the column properties.

The new column is added at the beginning of the report *after* running the {{ extraction }}. 
Therefore, the new column is not included in the preview section of the {{ component }}. 

Rows that are parsed as a column are displayed in a <span style="color:red">red</span> font in the preview section.

*****
#### Related Links
- [Knowledge Base Article: Parse Reports in {{ productName }}](../../knowledge-base/parse-reports.md).
