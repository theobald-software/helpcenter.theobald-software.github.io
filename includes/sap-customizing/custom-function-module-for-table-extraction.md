
### Installation of /THEO/READ_TABLE

An SAP transport request for the installation of the function module is provided in the installation directory of {{ productName }}{% if page.meta.product == "xtract-core" %} in the `Transports` folder.{% else %}: `{{ installationDir }}\ABAP\`.<br>{% endif %}
Transport requests are imported into SAP by your SAP Basis team. For more information, see [Knowledge Base: Import an SAP Transport Request](site:/knowledge-base/import-an-sap-transport-request/).

{% if page.meta.product != "xtract-core" %}
!!! note
	Take a look at the README.pdf in the installation directory (e.g.,`{{ installationDir }}\ABAP\README.pdf`) before installing any custom function modules.

{% endif %}

It is recommended to install the latest custom function module THEO/READ_TABLE:

| Transport Request | Compatible SAP Systems | 
| :------ |:--- | 
| `THEO_READ_TABLE_740SP05.zip` | ABAP version 7.40 SP05 and higher | 
| `THEO_READ_TABLE_710.zip`  | ABAP version 7.10 to 7.40 SP04 | 
| `THEO_READ_TABLE_640.zip`  |  ABAP versions from 6.40 until 7.03 | 
| `THEO_READ_TABLE_46C.zip`  |  ABAP versions from 4.6C | 

When importing the transport requests on older SAP releases a syntax error may occur. Contact [Theobald Support](https://support.theobald-software.com) and send the dedicated error message text.


!!! warning   
	**Generating Short Dumps.**<br>
	Testing the function modules on an SAP system is not possible.
	Function modules /THEO/READ_TABLE and Z_THEO_READ_TABLE can only be called by Theobald Software products due to the callback function of the module.
	Avoid calling function modules /THEO/READ_TABLE and Z_THEO_READ_TABLE directly from an SAP system.
	

{% if page.meta.product != "xtract-core" %}	
### Supported Features

| Supported Features by THEO_READ_TABLE| _740SP05 | _710 | _640 | 46C |
| :------ |:---: | :---: | :---: | :---: |
| WHERE Clause | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: | 
| HAVING Clause | :white_check_mark: | :white_check_mark: | :white_check_mark: | :x: |
| INNER JOIN | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: |
| LEFT OUTER JOIN | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: |
| Conversion exits | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: |
| Aggregate functions | :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: |
| SQL expressions (subqueries) | :white_check_mark: | :x: | :x: | :x: |
| Background jobs | :white_check_mark: | :white_check_mark: | :x: | :x: |

*****
#### Related Links
- [Knowledge Base: Import an SAP Transport Request](site:{{ product }}/knowledge-base/import-an-sap-transport-request/)
{% if page.meta.product != "yunio" %}- [{{ table }} {{ Component }}](../table/index.md){% else %}- [{{ table }} {{ Component }}](../tables-and-views/index.md){% endif %}

{% endif %}
