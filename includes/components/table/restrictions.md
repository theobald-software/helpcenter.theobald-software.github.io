
### RFC_READ_TABLE Restrictions
Especially with older SAP releases you may encounter a few restrictions when using the SAP standard function module (RFC_READ_TABLE) for table extraction:

- The overall width of all columns to be extracted must not exceed 512 bytes.
- It is not possible to extract data from tables that contain one or more columns of the data type f (FLTP, floating point), DEC (decimal, e.g. for percentage) or x (RAW, LRAW).
- Poor extraction performance with larger tables.  Can cause also duplicates.
- Depending on the SAP version there may be other restrictions. 
 
When facing restrictions, install the Theobald Software custom function module {% if page.meta.product == "xtract-core" %}[/THEO/READ_TABLE](#installation-of-theoread_table){% else %}[/THEO/READ_TABLE](../setup-in-sap/custom-function-module-for-table-extraction.md#installation-of-theoread_table){% endif %} on your SAP system. 

!!! warning  
	**Converting issues**<br>
	Error while converting value '\*.0' of row 1530, column 3.<br>
	The SAP standard module *RFC_READ_TABLE* for table extraction can only extract the ABAP data type DEC to a limited extent. This leads to the mentioned example error during extraction.
	Use the function module */THEO/READ_TABLE*.

