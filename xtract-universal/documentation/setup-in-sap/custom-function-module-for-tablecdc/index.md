The Table CDC extraction type requires the installation of the custom function modules /THEO/CDC and /THEO/READ_TABLE in your SAP system. If you cannot install the function modules, turn to your SAP Basis team for help.

### Installation of THEO_CDC_ECC or THEO_CDC_S4

All transport requests for the custom function groups are provided in the installation directory of Xtract Universal, e.g., `C:\Program Files\XtractUniversal`. Make sure to install the correct transport request for your SAP system:

| SAP System | Function Group | Directory | | --- | --- | --- | | SAP ECC Systems | THEO_CDC_ECC | *C:\\Program Files\\XtractUniversal\\ABAP\\TableCDC\\THEO_CDC_ECC.zip* | | SAP S/4 Systems with SAP_BASIS Version < 7.55 | THEO_CDC_S4 | *C:\\Program Files\\XtractUniversal\\ABAP\\TableCDC\\THEO_CDC_S4.zip* | | SAP S/4 Systems with SAP_BASIS Version ≥ 7.55 | THEO_CDC_S4_755 | *C:\\Program Files\\XtractUniversal\\ABAP\\TableCDC\\THEO_CDC_S4_755.zip* |

The transport request needs to be imported into SAP by your SAP Basis team.\
The function groups /THEO/CDC_ECC and /THEO/CDC_S4 both contain the following function modules:

| Function Modules | Description | | --- | --- | | /THEO/CLEAR_LOGTAB | Clear entries of log tab up to a given sequence number | | /THEO/COUNT_LOGTAB_ENTRIES | Count log table entries | | /THEO/CREATE_LOG_TABLE | Function module for creating log tables | | /THEO/CREATE_TRIGGERS | Function module for creating DB triggers for CDC | | /THEO/DELETE_LOG_TABLE | Function module for deleting log tables | | /THEO/DELETE_TRIGGERS | Function module for deleting DB triggers for CDC | | /THEO/GET_DB | Get database system identifier | | /THEO/GET_INFO | Get package information | | /THEO/GET_TRIGGERS | Function module to retrieve triggers |

Note

Take a look at the README.pdf in the installation directory (e.g.,`C:\Program Files\XtractUniversal\ABAP\README.pdf`) before installing any custom function modules.

### Installation of /THEO/READ_TABLE

Install the custom function module /THEO/READ_TABLE, see [Function Module for Tables](../custom-function-module-for-table-extraction/#installation-of-theoread_table).

Note

Take a look at the README.pdf in the installation directory (e.g.,`C:\Program Files\XtractUniversal\ABAP\README.pdf`) before installing any custom function modules.

______________________________________________________________________

#### Related Links

- [Knowledge Base: Import an SAP Transport Request](../../../knowledge-base/import-an-sap-transport-request/)
- [Knowledge Base: Delta Mechanism of Table CDC](../../../knowledge-base/table-cdc-mechanism/)
- [Table CDC - Prerequisites](../../table-cdc/#prerequisites)
