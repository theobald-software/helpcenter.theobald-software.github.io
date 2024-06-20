The following article shows how to handle the initial table load for delta extractions using the {{ tableCDC }} {{ component }}.
The article applies in the following situation:

- The {{ tableCDC }} {{ component }} is run on SAP releases < 7.10
- The option **Extract table on first run** (Delta initialization) is activated.
- The delta initialization takes longer than the maximum processing time specified in the SAP profile parameter **rdisp/max_wprun_time**.
- The extraction aborts with an error message, e.g., `ERPConnect.ABAPRuntimeException: RfcInvoke failed(RFC_ABAP_RUNTIME_FAILURE): TIME_OUT - Time limit exceeded`.

!!! note
	The custom function module /THEO/READ_TABLE used by the Table CDC component to extract the table does not support background mode on SAP releases < 7.10.
	The background mode avoids the timeout mentioned above.

### Recommended Workflow

1. Create a {{ tableCDC }} extraction. Make sure the option **Extract table on first run** is deactivated.<br>
![table-cdc-delta-init](../assets/images/articles/table-cdc/table-cdc-delta-init.png){:class="img-responsive"}
2. Run the {{ tableCDC }} extraction to initialize the delta extractions.
This ensures that no data is missed between table extraction and delta initialization.
3. Create a regular {{ table }} extraction using the {{ table }} {{ component }}. 
Make sure to select an SAP standard function module, e.g., RFC_READ_TABLE.<br>
![table-cdc-initial-table-load-extraction-settings](../assets/images/articles/table-cdc//table-cdc-initial-table-load-extraction-settings.png){:class="img-responsive"}
4. Run the {{ table }} extraction.

****

#### Related Links

- [Documentation: Defining a Table CDC Extraction](https://help.theobald-software.com/en/xtract-universal/table-cdc/extract-table-cdc)
- [Documentation: Defining a Table Extraction](https://help.theobald-software.com/en/xtract-universal/table/extract-table-data)
- [Documentation: Table Extraction Settings - Function modules and Background Jobs](https://help.theobald-software.com/en/xtract-universal/table/extraction-settings#function-module)