
{% if page.meta.product != "xtract-core" %}

## WHERE Clause Text Mode

The WHERE clause text mode allows you to directly enter a WHERE clauses. {% if page.meta.product != "yunio" %}The text mode of the WHERE clause supports script expressions.{% endif %}
{% if page.meta.product == "yunio" %}Use the toggle to switch between *Text mode* and *Editor mode*.{% endif %}

{% if page.meta.product != "yunio" %}

!!! warning  
	**Extraction fails due to incorrect syntax.** <br>
	The extractions fail, if incorrect syntax is used in the WHERE clause. <br> Make sure to use correct SAP OpenSQL syntax. Several important syntax rules are listed in this help section.

!!! tip
	To check the syntax of the WHERE clause, click **[Load live preview]**. This way there is no need to run an extraction to see, if the syntax is correct.

{% endif %}
{% endif %}

### WHERE Clause Syntax


The WHERE Clause syntax generally uses the following structure:

``` bash
[Table]~[Column][Space][Operator][Space][Filter-Value]
```

**Example:** 

```
KNA1~LAND1 = 'US'
```

The following rules apply to filter values:

| Rule | Correct | Wrong |
|--------|--------|--------|
| Enter a space before and after the equal sign |  :white_check_mark: *YEAR = '1999'* | :x: *YEAR= '1999 '*, *YEAR ='1999'* or *YEAR='1999'*|
| Set floating point numbers in single quotation mark | :white_check_mark: *KMENG > '10.3'* |  :x: *KMENG > 10.3*|
| Values must use the internal SAP representation:<br> :material-subdirectory-arrow-right: Date: YYYYMMDD <br> :material-subdirectory-arrow-right: Year Period: YYYYPPP <br> :material-subdirectory-arrow-right: Numbers with leading zeroes, e.g., customer numbers| <br> :white_check_mark: 19990101 <br> :white_check_mark: 1999001 <br> :white_check_mark: 0000001000 | <br> :x: 01.01.1999 <br> :x: 001.1999 <br> :x: 1000|


<!--- --8<-- [start:syntax] -->

The following operations are supported in the WHERE clause:

| Operator   |      Description     |  
|:---------|:------------- |
|=, EQ |  True if the content of operand1 is equal to the content of operand2.|
|<>, NE | True if the content of operand1 is not equal to the content of operand2.|
| <, LT | True if the content of operand1 is less than the content of operand2.|
|>, GT |  True if the content of operand1 is greater than the content of operand2.|
|<=, LE | True if the content of operand1 is less than or equal to the content of operand2.|
|>=, GE |  True if the content of operand1 is greater than or equal to the content of operand2.|
| (NOT) LIKE | True if the value of operand1 matches (does not match) the pattern in operand2.|
| (NOT) IN | True if the content of operand1 is (not) part of the content of operand2. Operand2 must be of type LIST or SQL.|

<!--- | (NOT) BETWEEN | True if the content of the operand1 lies (not) between the values of the operands operand2 and operand3. |-->

For more details on the OpenSQL syntax, see [SAP Help: Select WHERE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwhere.htm?file=abapwhere.htm) 

!!! tip
	To increase extracting performance, make sure to place the indexed fields as the first selection filter operation in the WHERE clause.

<!--- --8<-- [end:syntax] -->

!!! note
	When fields with the same name exist in different tables, the field names must be formatted as [table name]~[field name], e.g., MARC~MATNR. 
	This can be the case when extracting multiple tables.

{% if page.meta.product == "xtract-universal" or page.meta.product == "board-connector" %}
<!--- Script Expressions are not supported by Xtract IS and Xtract for Alteryx-->

### Script Expressions

The **[Text Mode]** of the WHERE clause supports script expressions. 
Script expressions are usually used to determine a dynamic date based on the current date. 
When using script expressions in a WHERE Clause, the value must be entered in single quotation marks.

**Syntax:**

```
[Table]~[Column][Space][Operator][Space]'#[Script-Expression]#'
```
<div class="result" markdown>

`BKPF~BUDAT >= '#{DateTime.Now.AddYears(-5).ToString("yyyyMMdd")}#'`

</div>

**Examples:**

<!--- --8<-- [start:script] -->

|   Input                         | Description              |
|:--------------------------------------|:--------------------|
|<pre>#{ DateTime.Now.ToString("yyyyMMdd") }#</pre>                                       | Current date in SAP format (yyyyMMdd)         |
|<pre>#{ String.Concat(DateTime.Now.Year.ToString(), "0101") }#</pre>                     | Current year concatenated with "0101" (yyyy0101)          |
|<pre>#{ String.Concat(DateTime.Now.ToString("yyyy"), "0101") }#</pre>                    | Current year concatenated with "0101" (yyyy0101)          |
|<pre>#{ String.Concat(DateTime.Now.ToString("yyyyMMdd").Substring(0,4), "0101") }#</pre> | Current year concatenated with "0101" (yyyy0101)          |

<!--- --8<-- [end:script] -->

For more information on script expression, see [Script Expressions](../parameters/script-expressions.md).

{% endif %} 

{% if page.meta.product != "yunio" %}

### Subqueries

!!! note
	The usage of subqueries is only possible as of SAP Release 7.40, SP05.


A subquery is an SQL query nested inside a larger query. 
Subqueries are nested queries that provide data to the enclosing query. Subqueries need be enclosed with parenthesis and can return individual values or a list of records.
Get more details about subqueries on the [SAP Help: Conditions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenwhere_logexp_in_subquery.htm).

**Example:**

In the following example a subquery is used with the *IN* operator. 
The following statement returns all the *active* customers (rows in the table KNA1) that have i.e. a sales document in the table VBAK for sales document header data.

```
KUNNR IN ( SELECT KUNNR FROM VBAK )
```

{% endif %}