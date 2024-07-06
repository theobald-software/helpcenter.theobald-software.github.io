
The HAVING clause can be used to filter groups of rows, see [SAP ABAP Documentation: SELECT-HAVING](https://help.sap.com/doc/abapdocu_750_index_htm/7.50/en-US/abaphaving_clause.htm).

### Create a HAVING Clause

The following example shows how many materials are assigned to a material type (MTART). 
After applying the HAVING Clause, the preview shows only the material types with more than 10 materials assigned.


1. Select an aggregate function :number-1: for a field you want to use in the HAVING-clause. 

	!!! note 
		Aggregate functions are only supported for numeric field types, which is why the field BRGEW (Gross Weight) is used in the example.

	![HAVING Clause-Aggregation](../../assets/images/documentation/components/table/having-clause-aggregate.png){:class="img-responsive"}
2. Navigate to tab *HAVING Clause* :number-2:.
3. Enter a HAVING Clause, e.g., `COUNT(BRGEW) > 10`.<br>
![HAVING Clause](../../assets/images/documentation/components/table/having-clause.png){:class="img-responsive"}
4. Click {{ previewBtn }} to display the results in the *Preview* section.

!!! note 
	When fields with the same name exist in different tables, the field names must be formatted as [Table]~[Column], e.g., MAKT~MATNR. 
	This can be the case with [table joins](table-join.md).

### HAVING Clause Syntax 

With regard to syntax and formulas, the same rules apply as for the [WHERE Clause](where-clause.md#where-clause-syntax). 

