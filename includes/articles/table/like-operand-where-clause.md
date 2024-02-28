
The following article shows how to use the LIKE operand in WHERE-Clauses of the {{ table }} {{ component }}.<br>
The LIKE operand represents a pattern using the following wildcard characters:

- "%" is any character string (including an empty string)
- "_" is any character

The pattern is case-sensitive. Trailing blanks in operands are ignored. 
This also applies in particular to operands of the type string with trailing blanks that are otherwise respected in ABAP.

### Examples

|WHERE-Condition|Description|
|:----|:----|
| `MSEG~MJAHR LIKE '20__'`| Filter back all fiscal years of the table column MSEG~MJAHR that start with *20*.|
| `MSEG~MBLNR LIKE '0049%'`|Filters all records of the table column MSEG~MBLNR that return the Number of Material Document starting with the value *0049*.|
| `BKPF~BUKRS LIKE '__1_'` | Filters all records that have a *1* in the third digit of the value for the company code (BKPF~BUKRS).| 

=== "`MSEG~MJAHR LIKE '20__'`"

	![like_](../assets/images/articles/table/like_operator.png){:class="img-responsive"}

=== "`MSEG~MBLNR LIKE '0049%'`"
  
	![like_%](../assets/images/articles/table/like_percent_operator.png){:class="img-responsive"}

=== "`BKPF~BUKRS LIKE '__1_'`"
  
	![like](../assets/images/articles/table/like_operand.png){:class="img-responsive"}


****
### Related Links
- [SAP Documentation: Open SQL - Operands and Expressions - LIKE ](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenwhere_logexp_like.htm)