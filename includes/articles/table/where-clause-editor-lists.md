
The following article shows how to use lists and SELECT statements in the [WHERE Clause Editor](https://help.theobald-software.com/en/xtract-universal/table/where-clause#where-clause-editor) of the {{ table }} {{ component }}.<br>
Lists can contain multiple values separated by commas e.g., `1,10` or `“1”, “10”`.

{% if page.meta.product != "xtract-is" %}

### List Parameters

1. Create a {{ table }} extraction. 
2. Look up the table KNA1, see [Documentation: Define a Table Extraction](https://help.theobald-software.com/en/xtract-universal/getting-started/define-a-table-extraction).<br>
3. Click {{ parameterBtn }}. The window "Edit runtime parameters" opens.
4. Click **[Add List]** to define a list parameter, e.g., *Parameter0*.	<br>
![list-parameter](../assets/images/articles/table/list-parameter.png){:class="img-responsive"}
5. Click **[OK]** to save the parameter. The window "Edit runtime parameters" closes.
6. Open the *WHERE Clause* tab and click **[Editor Mode]** to open the WHERE clause editor. <br>
![where-clause-editor](../assets/images/articles/table/where-clause-builder.png){:class="img-responsive"}
7. Click **[Add criteria]**, then **[Default with parameter]** to create an empty template in the WHERE clause editor.
5. Select the column *ORT01* from KNA1 as the data you want to filter.
6. Select *IN* as the operator. *IN* is the only operator that can be used for lists.
7. Click **[Select parameter]** in the static parameter component of the WHERE clause. A drop down list opens.
8. Select an existing list parameter from the drop down list, e.g., *Parameter0*.<br>
![where-clause-list](../assets/images/articles/table/where-clause-list.png){:class="img-responsive"}
9. Click **[OK]** to confirm your input.
10. Click **[Load live Preview]** or run the {{ extraction }} to check the output.<br>
When providing values for the list parameter, use multiple values separated by commas e.g., `1,10` or `“1”, “10”`.

{% endif %}

### Static Lists

The depicted example statement returns all active customers (rows in the table KNA1) that have an address in one of the following cities: Berlin, Stuttgart, Paris, Seattle, Hong Kong or Dongguan.

1. Create a {{ table }} extraction. 
2. Look up the table KNA1, see [Documentation: Define a Table Extraction](https://help.theobald-software.com/en/xtract-universal/getting-started/define-a-table-extraction).<br>
3. Open the *WHERE Clause* tab and click **[Editor Mode]** to open the WHERE clause editor. <br>
![where-clause-editor](../assets/images/articles/table/where-clause-builder.png){:class="img-responsive"}
4. Click **[Add criteria]**, then **[Default with literal]** to create an empty template in the WHERE clause editor.
5. Select the column *ORT01* from KNA1 as the data you want to filter.
6. Select *IN* as the operator. *IN* is the only operator that can be used for lists.
7. Select *List* as the type of the static filter value.<br>
![where-clause-editor](../assets/images/articles/table/where-clause-editor-00.png){:class="img-responsive"}
8. Click **[Press to Edit]** in the static value component of the WHERE clause. The window "Edit List" opens.
9. Select *String* as the **Type** of the list. When working with numbers, select *Number*.
10. Click **[Add]** to add items to the list. You can edit items via double-click.<br>
![where-clause-editor](../assets/images/articles/table/where-clause-editor-04.png){:class="img-responsive"}
11. Click **[OK]** to confirm your input.
12. Click **[Load live Preview]** or run the {{ extraction }} to check the output.<br>
When providing values for the list parameter, use multiple values separated by commas e.g., `1,10` or `“1”, “10”`.

### SELECT Statement

SELECT statements can be used to select data from SAP tables, see [ABAP Documentation: Open SQL SELECT](https://help.sap.com/doc/abapdocu_750_index_htm/7.50/en-us/abapselect.htm).<br>
The depicted example statement returns all active customers (rows in the table KNA1) that have a sales document in the table VBAK for sales document header data.

!!! note 

	The usage of SELECT statements is only possible as of SAP Release 7.40, SP05.

1. Create a new {{ table }} extraction. 
2. Look up the table KNA1, see [Documentation: Define a Table Extraction](https://help.theobald-software.com/en/xtract-universal/getting-started/define-a-table-extraction).<br>
3. Open the *WHERE Clause* tab and click **[Editor Mode]** to open the WHERE clause editor. <br>
![where-clause-editor](../assets/images/articles/table/where-clause-builder.png){:class="img-responsive"}
4. Click **[Add criteria]**, then **[Default with literal]** to create an empty template in the WHERE clause editor.
5. Select the column *KUNNR* from KNA1 as the data you want to filter.
6. Select *IN* as the operator. *IN* is the only operator that can be used for lists.
7. Select *List* as the type of the static filter value.<br>
![where-clause-editor](../assets/images/articles/table/where-clause-editor-01.png){:class="img-responsive"}
7. Click **[Press to Edit]** in the static value component of the WHERE clause. The window "Edit List" opens.
8. Select *SELECT* as the **Type** of the list. 
9. Enter the following SELECT statement to create a list that contains all items of the column KUNNR from the SAP table VBAK:

	```
	SELECT KUNNR FROM VBAK
	``` 
	
	![where-clause-editor](../assets/images/articles/table/select-statement.png){:class="img-responsive"}
	
10. Click **[OK]** to confirm your input.
11. Click **[Load live Preview]** or run the {{ extraction }} to check the output.


*****
#### Related Links
- [Documentation: WHERE Clause Editor](https://help.theobald-software.com/en/xtract-universal/table/where-clause#where-clause-editor)