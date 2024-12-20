
This articles shows how to use {{ productName }} to parse ABAP reports that contain groups of data sets and merge them into a single data set. 
The depicted example uses the report *FBL3N* that contains multiple groups where each group has its own header and calculation rows.

The article leads you through the following steps to merge all groups into a single data set:

- [Remove rows](#remove-rows) that calculate the content of the rows before.
- [Select a header](#select-a-header) for the report and remove duplicates.
- [Parse rows that contain additional headers as columns.](#parse-rows-with-additional-headers-as-columns)


=== "Report in SAP"
	
	![report-in-sap](../assets/images/articles/report/report-improvement/report-in-sap.png){:class="img-responsive"}

=== "Extracted Report without parsing"	

	![report-no-skip-rows](../assets/images/articles/report/report-improvement/report-without-parsing.png){:class="img-responsive"}
	
=== "Extracted Report with parsing"	
	
	![report-parse-rows-as-columns](../assets/images/articles/report/report-improvement/report-with-parsing.png){:class="img-responsive"}


### Remove Rows

Follow the steps below to remove rows that calculate the content of the rows before. 
Calculation rows are marked with an * symbol.

1. [Look up](../documentation/report/index.md/#look-up-a-report-or-transaction) a report that contains groups of data. 
The depicted example uses report FBL3N (RFITEMGL). 
2. If the report has variants, [select a variant](../documentation/report/variants-and-selections.md/#choose-a-variant).
3. Click **[Load Preview]** to load a preview of the first 100 rows.
4. Click **[Automatically detect columns]** to define the columns of the report.<br>
![report-no-skip-rows](../assets/images/articles/report/report-improvement/report-preview.png)
5. Open the tab *Skip and Parse Rows*.
6. Click **[Add rows to skip]**.
7. To remove calculation rows, enter the keyword *. <br> All rows that contain the keyword are displayed in a gray font in the preview section.<br>
![remove rows](../assets/images/articles/report/report-improvement/remove-rows.png)
8. To remove additional rows that separate calculation rows and headers, enter the keyword ---. 
9. Click **[OK]** to save the changes.

The calculation rows are skipped during the report extraction.<br>
For more information on how to manipulate rows in report extractions, see [Documentation: Define Rows](../documentation/report/report-rows-define.md).

=== "Before: Original Report"
	
	![report-no-skip-rows](../assets/images/articles/report/report-improvement/report-no-skip-rows.png){:class="img-responsive"}

=== "After: Report without caluclation rows"	
	
	![report-skip-rows](../assets/images/articles/report/report-improvement/report-skip-rows.png)

### Select a Header

Follow the steps below to select one of multiple available headers as the report header:

1. Open the report extraction from [Remove Rows](#remove-rows) or any other report that contains multiple headers.
2. Click **[Load Preview]** to load a preview of the first 100 rows.
3. Open the tab *Skip and Parse Rows*.
4. In the preview section, right-click the header row and select **Select as header** from the context menu.
All rows that contain the header are displayed in a blue font in the preview section.

	!!! tip
		If the header is not part of the preview (first 100 rows of the report), enter a pattern in the field [**Header pattern**](../documentation/report/report-rows-define.md/#header-pattern) to scan all report rows for the pattern.

	![report-select-header](../assets/images/articles/report/report-improvement/select-header.gif){:class="img-responsive" style="border:1px solid black;"}
5. Click **[OK]** to save the changes.

The report parses the selected header as the report header during report extraction.<br>
Any duplicates of the header are removed from the result set.


=== "Before: Report with multiple headers"	
	
	![report-skip-rows](../assets/images/articles/report/report-improvement/report-duplicate-headers.png)

=== "After: Report without duplicate headers"
	
	![report-no-duplicate-headers](../assets/images/articles/report/report-improvement/report-no-duplicate-headers.png){:class="img-responsive"}


### Parse Rows with Additional Headers as Columns

Follow the steps below to parse header rows that contain information about a data set as columns. 
The depicted example parses the header rows containing the *G/L Account* number and the *Company Code* of a data set as columns.

1. Open the report extraction from [Select a Header](#select-a-header) or any other report that contains multiple headers.
2. Click **[Load Preview]** to load a preview of the first 100 rows.
3. Open the tab *Skip and Parse Rows*.
4. Click **[Add row to parse as column]** to add a new column.<br>
![add-row-to-parse](../assets/images/articles/report/report-improvement/add-row-to-parse.png)
5. Click **[:material-target:]**. The window "Parse Helper" opens and a new preview of the report data is fetched. This can take a while.
6. Under **Search keyword** enter a unique keyword from the row you want to parse as a column. Matching rows are displayed in the preview section of the window.	
7. Make sure only header rows are displayed in the preview section. If the preview includes regular rows, edit the keyword until only header rows remain.
8. Under **New Column Name** enter a name for the new column. 
9. Mark the content of the column in the preview section by pressing and dragging the mouse pointer over the length of the content. <br>
![parse helper](../assets/images/documentation/components/report/parse-helper.gif){:class="img-responsive" style="border:1px solid black;"}
10. Click **[OK]** to save the column properties. All rows that will be parsed as a column are displayed in a blue font in the preview section.
11. Repeat steps 4 to 9 for the *Company Code*.

	!!! tip
		If the *Company Code* is not relevant for your report analysis, remove the corresponding header row from the result set, see [Remove Rows](#remove-rows).

12. Click **[OK]** to save the changes. 
13. Run the {{ extraction }} and check if the rows are parsed correctly. 

The extracted report returns a single data set that includes the content of all original data set groups.

=== "Before: Report with additional headers"	
	
	![report-no-duplicate-headers](../assets/images/articles/report/report-improvement/report-no-duplicate-headers.png){:class="img-responsive"}

=== "After: Report with rows for additional headers"
	
	![report-parse-rows-as-columns](../assets/images/articles/report/report-improvement/report-parse-rows-as-columns.png){:class="img-responsive"}



******

#### Related Links
- [{{ report }}](../documentation/report/index.md)
- [Skip Rows by Keyword](../documentation/report/report-rows-define.md/#skip-rows-by-keyword)
