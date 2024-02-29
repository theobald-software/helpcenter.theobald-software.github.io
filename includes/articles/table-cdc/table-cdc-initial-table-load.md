The following article shows how to handle the initial table load for delta extractions using the {{ tablecdc }} {{ component }}.

When using the {{ tablecdc }} {{ component }} for delta extractions, the initial table load can run into timeouts on SAP systems < 7.10.
The function module used by the {{ tablecdc }} {{ component }} to extract tables only supports SAP data extraction in background mode as of SAP version 7.10.
For SAP systems < 7.10 it is therefore recommended to execute the initial table load using the {{ table }} {{ component }}.

### Recommended Workflow

1. Set up TableCDC. Make sure the option **Extract table on first run** is deactivated.<br>
![table-cdc-delta-init](../assets/images/articles/table-cdc/table-cdc-delta-init.png){:class="img-responsive"}
2. Run the {{ tablecdc }} {{ component }} to initialize the delta extractions before extracting the initial table with the {{ table }} {{ component }}. 
This ensures that no data is missed between table extraction and delta initialization.
3. Set up a regular table extraction with the {{ table }} {{ component }}. Make sure to select a function module that supports extracting data in background mode in the **Extraction Settings**, e.g., RFC_READ_TABLE.<br>
![table-cdc-initial-table-load-extraction-settings](../assets/images/articles/table-cdc//table-cdc-initial-table-load-extraction-settings.png){:class="img-responsive"}
4. Run the table extraction.
5. Optional: Merge the data of the first delta run with the extracted initial table using a processing tool of your choice.

****

#### Related Links

- [Documentation: Defining a Table CDC Extraction](https://help.theobald-software.com/en/xtract-universal/table-cdc/extract-table-cdc)
- [Documentation: Defining a Table Extraction](https://help.theobald-software.com/en/xtract-universal/table/extract-table-data)
- [Documentation: Table Extraction Settings - Function modules and Background Jobs](https://help.theobald-software.com/en/xtract-universal/table/extraction-settings#function-module)