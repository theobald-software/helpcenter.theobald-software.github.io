
This articles shows how to use {{ productName }} to parse a report that contains groups of data sets as a single data set. <br>
The depicted example uses the report *FBL3N* that contains multiple groups where each group has their own header and calculation rows.
The article leads you through the following steps to merge all groups into a single data set:

- [Remove rows](#remove-rows) that contain rows that total the content of the rows before.
- [Select a header](#select-a-header) for the report.
- [Parse rows that contain additional headers as columns.](#parse-rows-with-additional-headers-as-columns)

### About the Report

The report FBL3N has multiple groups for different Accounts or Company Codes.
When extracting the report as is, 

The report *G/L Account*  and *Company Code*...
the groups are separated by "-" characters and the calculation rows are the ones with the * character in them.

When combining groups, the Account Number (here 132000) and / or the Company code can be added as columns (see first two columns on the left side of the


=== "Report without skipping and parsing"
	
	![report-no-skip-rows](site:assets/images/articles/report/report-no-skip-rows.png){:class="img-responsive"}

=== "Report with skip and parsing"	
	
	![report-no-skip-rows](site:assets/images/articles/report/report-skip-rows.png)


```csv
Company Code,St,Assignment,DocumentNo,BusA,Type,Doc. Date,PK,Amount in local cur.,LCurr,Tx,Clrng doc.,Text
0001        ,       ,20130325          ,2000000071,    ,ZP      ,25.03.2013,50,"           1.234,00-",EUR  ,  ,          ,                                                  
0001        ,       ,20130325          ,2000000071,    ,ZP      ,25.03.2013,50,"           1.234,00-",EUR  ,  ,          ,                                                  
0001        ,       ,20130325          ,2000000071,    ,ZP      ,25.03.2013,50,"           1.234,00-",EUR  ,  ,          ,                                                  
0001        ,       ,20130325          ,2000000071,    ,ZP      ,25.03.2013,50,"           1.234,00-",EUR  ,  ,          ,                                             
0005        ,       ,20051231          ,100000000 ,    ,SA      ,31.12.2005,40,"          60.000,00 ",EUR  ,  ,          ,Test for Allocation FI                            
0005        ,       ,20051231          ,100000000 ,    ,SA      ,31.12.2005,40,"          60.000,00 ",EUR  ,  ,          ,Test for Allocation FI                            
0005        ,       ,20051231          ,100000000 ,    ,SA      ,31.12.2005,40,"          60.000,00 ",EUR  ,  ,          ,Test for Allocation FI                            
0005        ,       ,20051231          ,100000000 ,    ,SA      ,31.12.2005,40,"          60.000,00 ",EUR  ,  ,          ,Test for Allocation FI                            
0005        ,       ,20060413          ,100000018 ,    ,SA      ,13.04.2006,50,"          10.000,00-",EUR  ,  ,          ,                                                  
0005        ,       ,20060413          ,100000018 ,    ,SA      ,13.04.2006,50,"          10.000,00-",EUR  ,  ,          ,                                                  
0005        ,       ,20060413          ,100000018 ,    ,SA      ,13.04.2006,50,"          10.000,00-",EUR  ,  ,          ,                                     
0006        ,       ,20090922          ,100000000 ,    ,SA      ,22.09.2009,40,"      80.000.000,00 ",USD  ,  ,          ,                                                  
0006        ,       ,20090922          ,100000000 ,    ,SA      ,22.09.2009,40,"      80.000.000,00 ",USD  ,  ,          ,                                                  
0006        ,       ,20090922          ,100000000 ,    ,SA      ,22.09.2009,40,"      80.000.000,00 ",USD  ,  ,          ,                                                  
0006        ,       ,20090922          ,100000000 ,    ,SA      ,22.09.2009,40,"      80.000.000,00 ",USD  ,  ,          ,  
```

### Remove Rows

Follow the steps below to remove rows that total the content of the rows before. 
These rows are marked with an * symbol.

1. [Look up](../documentation/report/index.md/#look-up-a-report-or-transaction) the report FBL3N (RFITEMGL). 
2. If the report has variants, [select a variant](../documentation/report/variants-and-selections.md/#choose-a-variant).
3. Click **[Load Preview]** to load a preview of the first 100 rows.
4. Click **[Automatically detect columns]** to define the columns of the report.<br>
![report-no-skip-rows](site:assets/images/articles/report/report-skip-rows-preview.png)
5. Open the tab *Skip and Parse Rows*.
6. Click **[Add rows to skip]**.
7. To remove calculation rows, enter the keyword *. All rows that contain the keyword are displayed in a gray font in the preview section.
8. Click **[OK]** to save the changes.

The calculation rows will be skipped during the report extraction.<br>
For more information on how to manipulate rows in report extractions, see [Documentation: Define Rows](../documentation/report/report-rows-define.md).

### Select a Header

Follow the steps below to select one of multiple available headers as the report header:

1. Open the report extraction from [Remove Rows](#remove-rows) or any other report that contains multiple headers.
2. Click **[Load Preview]** to load a preview of the first 100 rows.
3. Open the tab *Skip and Parse Rows*.
4. In the preview section, right-click the header row and select **Select as header** from the context menu.
All rows that contain the header are displayed in a blue font in the preview section.

	!!! tip
		If the header is not part of the preview, enter a pattern in the field [**Header pattern**](../documentation/report/report-rows-define.md/#header-pattern) to scan all report rows for the pattern.

5. Click **[OK]** to save the changes.

The report parses the selected header as the report header during report extraction.<br>
Any duplicates of the header are removed from the result set.

### Parse Rows with Additional Headers as Columns

Follow the steps below to parse header rows that contain information about a data set as columns. 
The depicted example parses the header rows containing the *G/L Account* number and the *Company Code* of a data set as columns.

1. Open the report extraction from [Select a Header](#select-a-header).
2. Click **[Load Preview]** to load a preview of the first 100 rows.
3. Open the tab *Skip and Parse Rows*.
4. Click **[Add row to parse as column]** to add a new column.
5. Click **[:material-target:]**. The window "Parse Helper" opens and a new preview of the report data is fetched. This can take a while.
6. Under **Search keyword** enter a unique keyword from the row you want to parse as a column. Matching rows are displayed in the preview section of the window.	
7. Make sure only header rows are displayed in the preview section. If the preview includes regular rows, edit the keyword until only header rows remain.
8. Under **New Column Name** enter a name for the new column. 
9. Mark the content of the column in the preview section by pressing and dragging the mouse pointer over the length of the content. <br>
![parse helper](../assets/images/documentation/components/report/parse-helper.gif){:class="img-responsive" style="border:1px solid black;"}
10. Click **[OK]** to save the column properties. All rows that will be parsed as a column are displayed in a blue font in the preview section.
11. Repeat steps 4 to 7 for the *Company Code*.

	!!! tip
		If the *Company Code* is not relevant for your report analysis, remove the corresponding header row from the result set, see [Remove Rows](#remove-rows).

12. Click **[OK]** to save the changes. 
13. Run the {{ extraction }} and check if the rows are parsed correctly. 

The extracted report returns a single data set that includes the content of all original data set groups.


******

#### Related Links
- [Documentation: {{ report }}](../documentation/report/index.md)
- [Documentation: Skip Rows by Keyword](../documentation/report/report-rows-define.md/#skip-rows-by-keyword)
