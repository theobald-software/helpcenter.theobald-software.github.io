---
title: Define Columns and Rows
description: Define a Report Extraction
---

This page shows how to define the columns of a report.<br>
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
If columns are defines, click **[:trashbin:]** in the *Columns* section in the main window of the {{ component }} to delete the columns.
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