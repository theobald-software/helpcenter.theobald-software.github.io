
The {{ tableCDC }} {{ component }} requires the installation of the custom function modules /THEO/CDC and /THEO/READ_TABLE in your SAP system.
If you cannot install the function modules, turn to your SAP Basis team for help.


### Installation of THEO_CDC_ECC or THEO_CDC_S4

All transport requests for the custom function groups are provided in the installation directory of {{ productName }}, e.g., `{{ installationDir }}`.
Make sure to install the correct transport request for your SAP system:

| SAP System | Function Group | Directory |
|-----------|------------------------|------------|
| SAP ECC Systems | THEO_CDC_ECC | <pre>{{ installationDir }}\ABAP\TableCDC\THEO_CDC_ECC.zip</pre> |
| SAP S/4 Systems with SAP_BASIS Version < 7.55 | THEO_CDC_S4 | <pre>{{ installationDir }}\ABAP\TableCDC\THEO_CDC_S4.zip</pre> |
| SAP S/4 Systems with SAP_BASIS Version &GreaterEqual; 7.55 | THEO_CDC_S4_755 | <pre>{{ installationDir }}\ABAP\TableCDC\THEO_CDC_S4_755.zip</pre> |


The transport request needs to be imported into SAP by your SAP Basis team.<br>
The function groups /THEO/CDC_ECC and /THEO/CDC_S4 both contain the following function modules:

| Function Modules | Description |
| :------ |:--- |
| /THEO/CLEAR_LOGTAB | Clear entries of log tab up to a given sequence number | 
| /THEO/COUNT_LOGTAB_ENTRIES | Count log table entries |
| /THEO/CREATE_LOG_TABLE | Function module for creating log tables |
| /THEO/CREATE_TRIGGERS | Function module for creating DB triggers for CDC |
| /THEO/DELETE_LOG_TABLE | Function module for deleting log tables |
| /THEO/DELETE_TRIGGERS | Function module for deleting DB triggers for CDC |
| /THEO/GET_DB | Get database system identifier|
| /THEO/GET_INFO | Get package information|
| /THEO/GET_TRIGGERS | Function module to retrieve triggers|

!!! note
	Take a look at the README.pdf in the installation directory (e.g.,`{{ installationDir }}\ABAP\README.pdf`) before installing any custom function modules.

### Installation of /THEO/READ_TABLE

Install the custom function module /THEO/READ_TABLE, see [Function Module for Tables](custom-function-module-for-table-extraction.md#installation-of-theoread_table).

!!! note 
	Take a look at the README.pdf in the installation directory (e.g.,`{{ installationDir }}\ABAP\README.pdf`) before installing any custom function modules.

*****
#### Related Links
- [Knowledge Base: Import an SAP Transport Request](../../knowledge-base/import-an-sap-transport-request.md)
- [Knowledge Base: Delta Mechanism of Table CDC](../../knowledge-base/table-cdc-mechanism.md)
- [Table CDC - Prerequisites](../table-cdc/index.md#prerequisites)

