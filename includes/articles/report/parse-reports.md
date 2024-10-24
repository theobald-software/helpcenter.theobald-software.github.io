
This articles shows how to use {{ productName }} to parse a report that contains groups of data sets as a single data set. <br>
The depicted example uses the report *FBL3N* that contains multiple groups where each group has their own header and calculation rows.
The article leads you through the following steps to merge all groups into a single data set:

- [Remove rows](#remove-rows) that contain that contain *sum* caluculations and other unnecessary rows.
- [Select a header](#select-a-header) for the report.
- [Parse rows that contain additional headers as columns.](#parse-rows-with-additional-headers-as-columns)

### About the Report

The report FBL3N has multiple groups for different Accounts or Company Codes.
When extracting the report as is, 

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

Follow the steps below to remove rows that contain *sum* caluculations. Note that these rows usually contain * symbols.

For more information on how to manupulate rows in report extractions, see [Documentation: Rows](../documentation/report/report-columns-define/#rows).

### Select a Header

### Parse Rows with Additional Headers as Columns

In the depicted example, the report RFITEMGL contains rows that total the content of the rows before. 
These rows are marked with an * symbol: <br>

=== "Report without Row Skip Patterns"
	
	![report-no-skip-rows](site:assets/images/articles/report/report-no-skip-rows.png){:class="img-responsive"}

=== "Report with Row Skip Patterns"	
	
	![report-no-skip-rows](site:assets/images/articles/report/report-skip-rows.png)

To remove all rows that contain the * symbol, follow the instructions below:

1. Look up a report. The depicted example uses the report RFITEMGL. 
2. Define the columns of the report automatically or manually, see {% if page.meta.product == "xtract-universal" or page.meta.product == "board-connector" %}[Documentation: Define the Report Extraction Type](../documentation/report/index.md/#define-the-report-extraction-type){% else %}[Documentation: Define the Xtract Report Component](../documentation/report/index.md/#define-the-xtract-report-component){% endif %}. <br>
![report-no-skip-rows](site:assets/images/articles/report/report-skip-rows-preview.png)
3. Click {{ settingsBtn }}. The window "Extraction Settings" open.<br>
![report-no-skip-rows](site:assets/images/articles/report/report-skip-rows-settings.png)
4. Enter a **Row skip pattern**. To process special symbols, add `\`before the symbol, e.g., to remove rows that contain the sum symbol * , enter `\*`. 
5. Click **[OK]** to close the {{ settings }}. 
5. Click **[OK]** to save the extraction. Note that the live preview of the report component does not include the **Row skip pattern** option. 
**Row skip pattern** is only executed when running the extraction.
6. Run the {{ extraction }}. 

The extracted report does not include rows that contain a * symbol.



******

#### Related Links
- [Documentation: Skip Rows by Keyword](../documentation/report/report-columns-define/#skip-rows-by-keyword)
- [Documentation: Skip Rows by Keyword](../documentation/report/report-columns-define/#parse-header-row-as-new-column)