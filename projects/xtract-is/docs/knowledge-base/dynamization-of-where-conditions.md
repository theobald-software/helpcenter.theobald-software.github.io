---
title: Dynamic WHERE Conditions
description: Dynamization of WHERE conditions of the XIS table components
---


The following article shows how to define dynamic WHERE conditions for Table extractions.

The dynamization of the Xtract Table components increases the maintainability of SSIS packages. 
So-called SSIS expressions based on table properties are used for this functionality. 
The following table lists all defined table properties that can be used dynamically at runtime of the SSIS package:


|Property |Description|
|:----|:----|
| `[Xtract Table].[WhereClause]`| Restricts the number of rows included in the results set by the statement SELECT of a query, by using a logical expression.|
| `[Xtract Table].[ConvertsDates]`|Converts the character-type SAP date to a special date format.|
| `[Xtract Table].[CustomFunctionName]`| Specifies the name of the function module used for data extraction.|
| `[Xtract Table].[MaxRows]`|Specifies the maximum number of extracted records.|
| `[Xtract Table].[MinDateReplacement]`|Date conversions are applied in case of invalid data in SAP date fields.|
| `[Xtract Table].[MaxDateReplacement]`|Date conversions are applied in case of invalid data in SAP date fields.|
| `[Xtract Table].[PackageSize]`| Specifies the number of records retrieved per data package.|


### How to use [Xtract Table].[WhereClause]

In the depicted example, only results until 01.01 of the current fiscal year are extracted. 
The SAP standard table *BKPF - Accounting Document Header* and the table field *BUDAT - Posting Date in the Document* are used. 

1. Create an SSIS package and add an Xtract Table component.
2. Look up the table you want to extract, e.g., BKPF.
3. Right-click on the Data Flow canvas and open **Properties**.<br>
![data_flow_properties](../assets/images/articles/xis/data_flow_properties_expressions.png){:class="img-responsive"}
3. Add an SSIS expression using the *Expressions* property. Click  **[...]** next to the *Expressions* property. The window "Property Expressions Editor" opens.
4. Select the property `[Xtract Table].[WhereClause]`.<br>
![expression_editor](../assets/images/articles/xis/property_expression_editor.png){:class="img-responsive"}
5. Open the Expression Builder by clicking **[...]**.
6. Copy & paste following expression:

	```
	"BUDAT <= " + "'" +  (DT_STR, 4, 1252) DATEPART("yy" , GETDATE())  + "0101'"
	```
	
	![expression_builder](../assets/images/articles/xis/expression_builder.png){:class="img-responsive"}
	
7. Click **[Evaluate Expression]** to check if the syntax is correct.
8. Click **[OK]** in the Expression Builder and the Property Expression Editor to confirm the input.
9. Check the WHERE-Clause of the table extraction in tab *WHERE Clause*.
![xis-where-condition](../assets/images/articles/xis/xis_where_clause_tab.png){:class="img-responsive"}
10. Run the SSIS package.


### SSIS Expression Samples

|SSIS Expression|	Output	| Description |
|:----|:----|:----|
|<pre>"BUDAT >= " + "'" + (DT_STR, 4, 1252) DATEPART( "yy", DATEADD( "yy", -1, GETDATE() ) ) + "%'" </pre>|	BUDAT >= ‘2019%’	|All values of the last 2 years. |
|`"BUDAT = " + "'" +(DT_STR, 4, 1252) DATEPART("yy" , GETDATE()) + RIGHT("0" + (DT_STR, 2, 1252) DATEPART("mm" , GETDATE()), 2) +RIGHT("0" + (DT_STR, 2, 1252) DATEPART("dd" , GETDATE()), 2) + "'"`|	BUDAT = ‘20200726’|	All values of the current day.|
|`"BUDAT >= " + "'" + (DT_STR, 4, 1252) DATEPART( "yy", GETDATE() ) + "01%'" + " AND BUDAT < " + "'" + (DT_STR, 4, 1252) DATEPART( "yy", GETDATE() ) + "04%'"`|	BUDAT >= ‘202001%’ AND BUDAT < ‘202004%’|	All values in Q1 of the current year.|
|`"BUDAT LIKE " + "'" + (DT_STR, 4, 1252) DATEPART("yy" , GETDATE()) + RIGHT("0" + (DT_STR, 2, 1252) DATEPART("mm" , GETDATE()), 2) + "%'"`| BUDAT LIKE ‘202007%’	| All values of the current month. |
|`"BUDAT LIKE " + "'" + (DT_STR, 4, 1252) DATEPART("yy" , GETDATE()) + "%'"`|	BUDAT LIKE ‘2020%’	|All values of the current year. |
|`(DT_WSTR, 4) YEAR( GETDATE() )`|	2022	|Current year value. |
|`(DT_WSTR, 4) DATEPART( "yy", DATEADD( "yy", -9, GETDATE() ) )`|	2013	|Annual calculation based on the number parameter used. |
