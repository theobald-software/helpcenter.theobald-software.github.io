
This page shows how to define the columns and rows in the result set of a report extraction.<br>

## Columns

A report column is defined by its name, offset and length. 
Per default, all columns are of data type *string*. 
To identify a columns, the report needs to be executed. Columns can then be identified based on the output.
    
!!! tip
	At this stage, use a selection or variant that returns only a few records. This can be adapted later on.


- Some classical ABAP reports are developed to use the pipe symbol '\|' as a delimiter for the output columns. 
In this case the {{ report }} {{ component }} can automatically identify the columns. 
Automatic column detection also works for most ALV reports. Example:<br>
![Report-delimiters](../../assets/images/documentation/components/report/Report_new_delimiters.png){:class="img-responsive"}
- For reports where the output is not separated by the pipe symbol, the columns must be identified manually. Example:<br>
![Report-no-delimiters](../../assets/images/documentation/components/report/Report_new_no_delimiters.png){:class="img-responsive"}


### Define Columns Automatically

![Report-automatic-columns](../../assets/images/documentation/components/report/Report_new_automatic_columns.png){:class="img-responsive"}

#### Automatically detect columns

Click **[Automatically detect columns]** to execute the report based on the selected variant or selections. 
If they can be identified automatically, the column name, width and offset are displayed in the *Columns* section in the main window of the {{ component }}.

#### Dynamic column width and offset
If this option is active, the column width and offset is adjusted dynamically at report runtime. 
This can be required for reports that have varying column widths depending on the report's selection criteria.


### Define Columns Manually
When automatic column detection is not possible, the column names, widths and offsets must be set manually.

1. Make sure no columns are defined yet. 
If columns are defines, click **[:trashbin:]** in the *Columns* section in the main window of the {{ component }} to delete the columns.<br>
![Report-delete-columns](../../assets/images/documentation/components/report/Report_new_delete_column.png){:class="img-responsive"}
2. Click {{ previewBtn }}. The report is executed based on the selected report variant or selections. 
The output of the report is displayed in the *Load Preview* section.
3. To define the beginning (offset) of a column, press and hold down the left mouse button in the *Load Preview* section.  
4. To define the length of a column, move the mouse pointer to the right while still holding down the left mouse button.
5. Let go of the cursor. The report column is highlighted with a green background and an entry is added to the *Columns* section. <br>
![Report-Columns](../../assets/images/documentation/components/report/report-column.gif){:class="img-responsive" style="border:1px solid black;"}
6. To change the column name, offset and width, click in the respective fields in the *Columns* section and enter a new value.
7. Repeat steps 3 to 6 until all columns are defined.

!!! note
	Once a column is set and highlighted with a green background, its width and offset cannot be changed via the graphics editor. 
	Change it using the *Columns* section.

## Rows


Skipping and / or parsing rows is optional. The row settings are located in the tab *Skip and Parse Rows*.
Knowledge Base Article (Skip rows and Parse rows as Header).

![skip-and-parse-rows](../../assets/images/documentation/components/report/skip-and-parse-rows.png){:class="img-responsive"}


### Row Settings

#### Skip rows from top
Enter the number of rows you want to skip at the beginning of the report.
Some reports display meta information in the header section of the report, before the actual report body. This setting allows skipping the meta information. 

#### Skip rows from bottom
Similar to *skip rows from top*. Enter the number of rows you want to skip in the footer section of the report.

#### Report rows per data row
Use this setting for ABAP reports, that return two or more "physical" rows to display a single "semantic" data row. Enter the number of physical rows that represent a single data row. <br>
Example: Report RIEQUI20 

![Report_new_rows_per_data_row](../../assets/images/documentation/components/report/Report_new_rows_per_data_row.png){:class="img-responsive"}

#### Report width
Use this setting in combination with **Report rows per data row**. **Report width** defines the length of each physical row. 
The maximum width of extracted reports is limited to 1024 characters per row.

#### Header pattern

Enter a search pattern to detect the table header, e.g., *Created on*. 
The {{ report }} {{ component }} scans the report output for this pattern and uses the row that contains this pattern as the report header.
Alternatively, right-click the row that you want to use as a header and select **Select as header** from the context menu.

This setting is usually not required if the report's columns can be [detected automatically](report-columns-define.md/#define-columns-automatically) and *Dynamic column widths and offsets* is active in the main window of the {{ component }}.

<span style="color:blue">Rows that contain the header pattern displayed in a blue font in the preview section.</span>

#### Skip row pattern

Enter a search pattern. All report rows that contain the pattern are removed from the result set. 
Rows are removed *after* the report data was extracted from SAP.
Regular expressions is supported. Multiple row skip patterns can be entered separated by the pipe symbol '|'.

Example: `2020|2021|-|Sum` removes all rows containing the pattern '2020', '2021', '-' and 'Sum'. 

The skip row setting can be used for skipping header rows that are repeated in the output body of reports.
For more information, see [Knowledge Base Article: Skip Rows in Reports](../../knowledge-base/skip-rows-in-reports.md).

!!! note
	This setting is usually not required if the report columns can be [detected automatically](report-columns-define.md/#define-columns-automatically) and *Dynamic column widths and offsets* is checked in the Report window.

### Remove Rows

#### Add row to Skip
<!---
![remove rows](../../assets/images/documentation/components/report/remove-rows.png){align=right :class="img-responsive"}
--->

Define specific rows that are removed from the result set. 

Click **[Add row to skip]** and enter a string from the row you want to remove, e.g., `**` removes all rows that contain the characters `**`.
Alternatively, right-click the row you want to remove and select **Ignore/unignore row** from the context menu.

<span style="color:gray">Rows that are excluded from the result set are displayed in a gray font in the preview section.</span>

### Parse Header Row as new Column

#### Add row to parse as column
<!---
![parse row as header](../../assets/images/documentation/components/report/parse-row-as-header.png){align=right :class="img-responsive"}
--->

Define rows that are added to the result set as columns. 
This option can be used for reports that contain groups with multiple headers.

To add a new column, click **[Add row to parse as column]**.
Alternatively, right-click a header row you want to use as a column and select **Parse header row as new column** from the context menu.
To define the column, enter the following column properties manually or use the [parse helper](#parse-helper) to define the column properties:

| Property | Description | 
|----------|-------------|
| *Keyword*  | Enter a string from the row you want to add to the result set as a column. The report is scanned for rows that contain the string.|
| *Name*     | Enter a name for the new column.|
| *Offset*   | Define the beginning (offset) of the content that is written into the new column. <br>Example: Enter 0 if the content for the new column is located at the start of the row.<br>Enter 25 if the content starts 25 characters into the row.|
| *Width*    | Define the width of the new column.|


Rows that are parsed as a new column are displayed in a <span style="color:red">red font</span> in the preview section.

#### Parse Helper

Click **[:material-target:]** to open a parse helper that helps you define the column properties.

![parse helper](../../assets/images/documentation/components/report/parse-helper.png){:class="img-responsive"}

<span style="color:red">Rows that are parsed as a new column are displayed in a red font in the preview section.</span>
