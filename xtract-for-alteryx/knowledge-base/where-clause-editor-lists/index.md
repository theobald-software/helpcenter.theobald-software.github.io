The following article shows how to use lists and SELECT statements in the [WHERE Clause Editor](../../documentation/table/where-clause/#where-clause-editor) of the Xtract Table component.\
Lists can contain multiple values separated by commas e.g., `1,10` or `“1”, “10”`.

### List Parameters

1. Create a Xtract Table extraction.
1. Look up the table KNA1, see [Documentation: Define the Xtract Table Component](../../documentation/table/#define-the-xtract-table-component).
1. Click **[Edit Parameters]**. The window "Edit runtime parameters" opens.
1. Click **[Add List]** to define a list parameter, e.g., *Parameter0*.
1. Click **[OK]** to save the parameter. The window "Edit runtime parameters" closes.
1. Open the *WHERE Clause* tab and click **[Editor Mode]** to open the WHERE clause editor.
1. Click **[Add criteria]**, then **[Default with parameter]** to create an empty template in the WHERE clause editor.
1. Select the column *ORT01* from KNA1 as the data you want to filter.
1. Select *IN* as the operator. *IN* is the only operator that can be used for lists.
1. Click **[Select parameter]** in the static parameter component of the WHERE clause. A drop down list opens.
1. Select an existing list parameter from the drop down list, e.g., *Parameter0*.
1. Click **[OK]** to confirm your input.
1. Click **[Load live preview]** or run the workflow to check the output.\
   When providing values for the list parameter, use multiple values separated by commas e.g., `1,10` or `“1”, “10”`.

### Static Lists

The depicted example statement returns all active customers (rows in the table KNA1) that have an address in one of the following cities: Berlin, Stuttgart, Paris, Seattle, Hong Kong or Dongguan.

1. Create a Xtract Table extraction.
1. Look up the table KNA1, see [Documentation: Define the Xtract Table Component](../../documentation/table/#define-the-xtract-table-component).
1. Open the *WHERE Clause* tab and click **[Editor Mode]** to open the WHERE clause editor.
1. Click **[Add criteria]**, then **[Default with literal]** to create an empty template in the WHERE clause editor.
1. Select the column *ORT01* from KNA1 as the data you want to filter.
1. Select *IN* as the operator. *IN* is the only operator that can be used for lists.
1. Select *List* as the type of the static filter value.
1. Click **[Press to Edit]** in the static value component of the WHERE clause. The window "Edit List" opens.
1. Select *String* as the **Type** of the list. When working with numbers, select *Number*.
1. Click **[Add]** to add items to the list. You can edit items via double-click.
1. Click **[OK]** to confirm your input.
1. Click **[Load live Preview]** or run the workflow to check the output.\
   When providing values for the list parameter, use multiple values separated by commas e.g., `1,10` or `“1”, “10”`.

### SELECT Statement

SELECT statements can be used to select data from SAP tables, see [ABAP Documentation: Open SQL SELECT](https://help.sap.com/doc/abapdocu_750_index_htm/7.50/en-us/abapselect.htm).\
The depicted example statement returns all active customers (rows in the table KNA1) that have a sales document in the table VBAK for sales document header data.

Note

The usage of SELECT statements is only possible as of SAP Release 7.40, SP05.

1. Create a new Xtract Table extraction.

1. Look up the table KNA1, see [Documentation: Define the Xtract Table Component](../../documentation/table/#define-the-xtract-table-component).

1. Open the *WHERE Clause* tab and click **[Editor Mode]** to open the WHERE clause editor.

1. Click **[Add criteria]**, then **[Default with literal]** to create an empty template in the WHERE clause editor.

1. Select the column *KUNNR* from KNA1 as the data you want to filter.

1. Select *IN* as the operator. *IN* is the only operator that can be used for lists.

1. Select *List* as the type of the static filter value.

1. Click **[Press to Edit]** in the static value component of the WHERE clause. The window "Edit List" opens.

1. Select *SELECT* as the **Type** of the list.

1. Enter the following SELECT statement to create a list that contains all items of the column KUNNR from the SAP table VBAK:

   ```text
   SELECT KUNNR FROM VBAK

   ```

1. Click **[OK]** to confirm your input.

1. Click **[Load live Preview]** or run the workflow to check the output.

______________________________________________________________________

#### Related Links

- [Documentation: WHERE Clause Editor](../../documentation/table/where-clause/#where-clause-editor)
