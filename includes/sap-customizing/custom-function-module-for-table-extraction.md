
### Installation of /THEO/READ_TABLE

An SAP transport request for the installation of the function module is provided in the installation directory: 
`{{ installationDir }}\ABAP\`.<br>
Transport requests are imported into SAP by your SAP Basis team.

!!! note
	Take a look at the README.pdf in the installation directory (e.g.,`{{ installationDir }}\ABAP\README.pdf`) before installing any custom function modules.

It is recommended to install the latest custom function module THEO/READ_TABLE:

| Transport Request | Compatible SAP Systems | 
| :------ |:--- | 
| `THEO_READ_TABLE_740SP05.zip` | ABAP version 7.40 SP05 and higher | 
| `THEO_READ_TABLE_710.zip`  | ABAP version 7.10 and higher | 
| `THEO_READ_TABLE_640.zip`  |  ABAP versions from 6.40 until 7.03 | 
| `THEO_READ_TABLE_46C.zip`  |  ABAP versions from 4.6C until 6.40 | 

When importing the transport requests on older SAP releases a syntax error may occur. Contact [Theobald Support](https://support.theobald-software.com) and send the dedicated error message text.


!!! warning   
	**Generating Short Dumps.**<br>
	Testing the function modules on an SAP system is not possible.
	Note that the function modules /THEO/READ_TABLE and Z_THEO_READ_TABLE can only be called by Theobald products due to the callback function of the module.

	
### Supported Features

| Supported Features by THEO_READ_TABLE| _740SP05 | _710 | _640 | 46C |
| :------ |:---: | :---: | :---: | :---: |
| WHERE Clause | :material-check: | :material-check: | :material-check: | :material-check: | 
| HAVING Clause | :material-check: | :material-check: | :material-check: | :x: |
| INNER JOIN | :material-check: | :material-check: | :material-check: | :material-check: |
| LEFT OUTER JOIN | :material-check: | :material-check: | :material-check: | :material-check: |
| Conversion exits | :material-check: | :material-check: | :material-check: | :material-check: |
| Aggregate functions | :material-check: | :material-check: | :material-check: | :material-check: |
| SQL expressions (subqueries) | :material-check: | :x: | :x: | :x: |
| Background jobs | :material-check: | :material-check: | :x: | :x: |

*****
#### Related Links
- [Knowledge Base: Import an SAP Transport Request](../../knowledge-base/import-an-sap-transport-request.md)
{% if page.meta.product != "yunio" %}- [{{ table }} {{ component }}](../table/index.md){% else %}- [{{ table }} {{ component }}](../tables-and-views/index.md){% endif %}