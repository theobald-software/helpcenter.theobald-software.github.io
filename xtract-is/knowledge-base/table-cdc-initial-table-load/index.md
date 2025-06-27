The following article shows how to handle the initial table load for delta extractions using the Xtract TableCDC component. The article applies in the following situation:

- The Xtract TableCDC component is run on SAP releases < 7.10
- The option **Extract table on first run** (Delta initialization) is activated.
- The delta initialization takes longer than the maximum processing time specified in the SAP profile parameter **rdisp/max_wprun_time**.
- The extraction aborts with an error message, e.g., `ERPConnect.ABAPRuntimeException: RfcInvoke failed(RFC_ABAP_RUNTIME_FAILURE): TIME_OUT - Time limit exceeded`.

Note

The custom function module /THEO/READ_TABLE used by the Table CDC component to extract the table does not support background mode on SAP releases < 7.10. The background mode avoids the timeout mentioned above.

### Recommended Workflow

1. Create a Xtract TableCDC extraction. Make sure the option **Extract table on first run** is deactivated.
1. Run the Xtract TableCDC extraction to initialize the delta extractions. This ensures that no data is missed between table extraction and delta initialization.
1. Create a regular Xtract Table extraction using the Xtract Table component. Make sure to select an SAP standard function module, e.g., RFC_READ_TABLE.
1. Run the Xtract Table extraction.

______________________________________________________________________

#### Related Links

- [Documentation: Define the Xtract TableCDC Component](../../documentation/table-cdc/#define-the-xtract-tablecdc-component).
- [Documentation: Define the Xtract Table Component](../../documentation/table/#define-the-xtract-table-component).
- [Documentation: Xtract Table Settings - Function modules and Background Jobs](../../documentation/table/settings/#extract-data-in-background-job)
