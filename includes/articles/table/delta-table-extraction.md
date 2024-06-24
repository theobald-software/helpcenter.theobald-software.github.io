
The following article shows how to load data incrementally (daily) from an SAP Table based on date fields.
The depicted example scenarios use the table VBAK (SAP Sales Document Header), which has two date fields: 

- ERDAT for creation date 
- AEDAT for update date

### Extract Data using a Date Parameter

The depicted example extracts data that was created or changed after a specific date.
The date is provided as a parameter at runtime.

1. Create a new {{ table }} extraction.
2. Look up a table you want to extract data from, e.g., VBAK. <br>
![VBAK-Table](../assets/images/articles/table/VBAK-Table.png){:class="img-responsive"}
3. Open the WHERE clause tab of the{{ table }} {{ component }} and enter the following criterion: <br>

	``` 
	( VBAK~ERDAT GE @LastDate AND VBAK~AEDAT EQ '00000000' ) OR VBAK~AEDAT GE @LastDate
	```
	
	This criterion extracts data if one of the following conditions is true: <br>
	- The data was created (ERDAT) after the date provided by the parameter `@LastDate` and it has not been changed (AEDAT). <br>
	- The data has changed (ARDAT) after the date provided by the parameter `@LastDate`.<br>
	![Where-Clause_Date-Param](../assets/images/articles/table/Where-Clause_Date-Param.png){:class="img-responsive"}

4. Click **[OK]** to confirm your input.
{% if page.meta.product == "xtract-universal" or page.meta.product == "board-connector"%}
5. Open the *Run Extraction* menu and navigate to the *Custom* tab for runtime parameters.<br>
![Where-Clause_Run-Extraction-Param](../assets/images/{{ abbr }}/articles/table/run-extraction-parameter.png){:class="img-responsive"}
6. Enter a value for the runtime parameter `@LastDate` in the format `YYYYmmDD`.
7. Click **[Run]** and check the results.
{% else %}
5. Create a {{ variable }} `LastDate` of type string.
6. Enter a value for `LastDate` in the format `YYYYmmDD` when running the {{ extraction }}.
7. Check the results.
{% endif %}


### Daily Data Extraction

The depicted example extracts data that was created or changed the day before.
The depicted example uses script expressions to query the current date.

1. Create a new Table extraction.
2. Look up a table you want to extract data from, e.g., VBAK. <br>
![VBAK-Table](../assets/images/articles/table/VBAK-Table.png){:class="img-responsive"}
3. Open the WHERE clause tab of the Table component and enter the following criterion: 

	``` 
	(ERDAT >= '#{ DateTime.Now.AddDays(-1).ToString("yyyyMMdd") }#' AND AEDAT = '00000000') OR AEDAT >= '#{ DateTime.Now.AddDays(-1).ToString("yyyyMMdd") }#'` <br>
	```
	
	This criterion extracts data if one of the following conditions is true:<br>
	- The data was created (ERDAT) the day before the current date and it has not been changed (AEDAT).<br>
	- The data has changed (ARDAT) the day before the current date.
	![Where-Clause_Daily](../assets/images/articles/table/Where-Clause-Daily.png){:class="img-responsive"}
	
4. Click **[OK]** to confirm your input.
5. Run the {{ extraction }}.

The extraction can be scheduled every night at 1p.m. or later to extract all changes of the day before.
Providing extraction dates is not necessary.
 
******

#### Related Links
- [Change Data Capture with CDHDR](./change-data-capture-with-cdhdr.md)
- [Table: WHERE Clause](https://help.theobald-software.com/en/xtract-universal/table/where-clause)
- [Scripted Expressions](https://help.theobald-software.com/en/board-connector/advanced-techniques/script-expressions)
