The following article shows how to handle the initial table load for delta extractions using the Table CDC extraction type. The article applies in the following situation:

- The Table CDC extraction type is run on SAP releases < 7.10
- The option **Extract table on first run** (Delta initialization) is activated.
- The delta initialization takes longer than the maximum processing time specified in the SAP profile parameter **rdisp/max_wprun_time**.
- The extraction aborts with an error message, e.g., `ERPConnect.ABAPRuntimeException: RfcInvoke failed(RFC_ABAP_RUNTIME_FAILURE): TIME_OUT - Time limit exceeded`.

Note

The custom function module /THEO/READ_TABLE used by the Table CDC component to extract the table does not support background mode on SAP releases < 7.10. The background mode avoids the timeout mentioned above.

### Recommended Workflow

1. Create a Table CDC extraction. Make sure the option **Extract table on first run** is deactivated.
1. Run the Table CDC extraction to initialize the delta extractions. This ensures that no data is missed between table extraction and delta initialization.
1. Create a regular Table extraction using the Table extraction type. Make sure to select an SAP standard function module, e.g., RFC_READ_TABLE.
1. Run the Table extraction.

______________________________________________________________________

#### Related Links

- [Documentation: Define the TableCDC Extraction Type](../../documentation/table-cdc/#define-the-table-cdc-extraction-type).
- [Documentation: Define the Table Extraction Type](../../documentation/table/#define-the-table-extraction-type).
- [Documentation: Table Extraction Settings - Function modules and Background Jobs](../../documentation/table/settings/#extract-data-in-background-job)
