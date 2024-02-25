
This articles shows how to skip certain rows when extracting SAP reports.<br>
The depicted example uses the **Row Skip Pattern** option of the {{ report }} {{ component }} to remove rows that contain the * symbol in extracted reports.

!!! tip
	To skip header and/or footer rows that do not follow any pattern, use the *Row settings* in the main window of the {{ component }}.
	*Row settings* allows skipping rows at the top and at the bottom of the report.

### About Row Skip Patterns

The {{ settings }} of the {{ report }} {{ component }} include the **Row Skip Pattern** option.
**Row Skip Pattern** allows you to define a pattern that removes all rows that contain the pattern from the extracted report.
This can be used to remove header rows that are repeated in the output body of reports.

- Regular expressions are supported
- Multiple row skip patterns can be entered, separated by the pipe symbol "`|`", e.g., `2020|2021|-|Sum` removes all rows containing ‘2020’, ‘2021’, ‘-‘ and ‘Sum’.
- To process special symbols, add `\`before the symbol, e.g., `\*` removes rows that contain the sum symbol * .
{% if page.meta.product == "xtract-universal" %}- Only works with database destinations, e.g., Azure Storage, Snowflake, SQl Server, etc.{% endif %}

!!! note
	The live preview in the {{ report }} {{ component }} does not include the **Row Skip Pattern** option, because the rows are only removed after the report data is extracted from SAP. 

### How to Use Row Skip Patterns

In the depicted example, the report RFITEMGL contains rows that total the content of the rows before. 
These rows are marked with an * symbol: <br>

=== "Extracted report without Row Skip Patterns"
	
	![report-no-skip-rows](site:assets/images/articles/report/report-no-skip-rows.png){:class="img-responsive"}

=== "Extracted report with Row Skip Patterns"	
	
	![report-no-skip-rows](site:assets/images/articles/report/report-skip-rows.png)

To remove all rows that contain the * symbol, follow the instructions below:

1. Look up a report. The depicted example uses the report RFITEMGL. 
2. Define the columns of the report automatically or manually, see [Documentation: Defining a Report Extraction](https://help.theobald-software.com/en/xtract-universal/abap-reports/report-extraction-define). <br>
![report-no-skip-rows](site:assets/images/articles/report/report-skip-rows-preview.png)
3. Click {{ settingsBtn }}. The window "Extraction Settings" open.<br>
![report-no-skip-rows](site:assets/images/articles/report/report-skip-rows-settings.png)
4. Enter a **Row skip pattern**. To process special symbols, add `\`before the symbol, e.g., to remove rows that contain the sum symbol * , enter `\*`. 
5. Click **[OK]** to close the extraction settings. 
5. Click **[OK]** to save the extraction. Note that the live preview of the report component does not include the **Row skip pattern** option. 
**Row skip pattern** is only executed when running the extraction.
6. Run the extraction. 

The extracted report does not include rows that contain a * symbol.
