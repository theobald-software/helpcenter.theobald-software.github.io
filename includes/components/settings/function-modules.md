
Specifies the name of the function module used for data extraction. 
This field is filled automatically depending on what function modules are installed on your SAP system.
Custom function modules are supported.

The following function modules can be used to extract tables:

- RFC_READ_TABLE (TAB512)
- /BODS/RFC_READ_TABLE (TAB2048)
- /SAPDS/RFC_READ_TABLE (TAB2048)
- /BODS/RFC_READ_TABLE2
- /SAPDS/RFC_READ_TABLE2
- Z_THEO_READ_TABLE
- [/THEO/READ_TABLE](../setup-in-sap/custom-function-module-for-table-extraction.md) (recommended)

!!! warning   
	**Duplicates in the target environment.**<br>
    The SAP standard modules for table extraction do not have pointers for table fields.
    In larger tables this may cause low performance and duplicates in the target environment.
    Use the function module [THEO/READ_TABLE](../setup-in-sap/custom-function-module-for-table-extraction.md/#installation-of-theoread_table) from Theobald Software to ensure smooth extractions.

Note the necessary [SAP Authority Objects](../setup-in-sap/sap-authority-objects.md/#table):

```
S_TABU_NAM ACTVT=03; TABLE=ENLFDIR
```
