
### Installation and Configuration on SAP


|{{ Component }}       | SAP Release           | Requirements on the SAP System        |
|----------------------|-----------------------|-------------------------------------------------------------------------------|
|[{{ table }}](../../documentation/table/index.md)           | Rel. > 4.6C       | Installation of a custom function module [/THEO/READ_TABLE](../../documentation/setup-in-sap/custom-function-module-for-table-extraction.md/#installation-of-theoread_table) is recommended.    |
|[{{ bapi }}](../../documentation/bapi/index.md)              | Rel. > 4.6C       | No requirements. Only remote-enabled functions are supported.                            |
|[{{ query }}](../../documentation/query/index.md)             | Rel. > 4.6C       | No requirements.      |
|[{{ report }}](../../documentation/report/index.md)            | Rel. > 4.6C       | Installation of a custom function module [Z_XTRACT_IS_REMOTE_REPORT](../../documentation/setup-in-sap/custom-function-module-for-reports.md) is required.   |
|[{{ bwcube }}](../../documentation/bwcube/index.md)            | Rel. > BW 3.1     | No requirements. BEx Queries require external access ("Allow External Access to this Query" option must be active).                                                                         |
|[{{ hierarchy }}](../../documentation/hierarchy/index.md)       | Rel. > BW 3.1     | No requirements.      |
|[{{ odp }}](../../documentation/odp/index.md)             | SAP_BASIS >= 730, BW >= 7,3X   | No requirements.   |
{% if page.meta.product != "xtract-for-alteryx" %}|[{{ deltaq }}](../../documentation/deltaq/index.md)          | Rel. > 4.6C       | Customization required, see [Customization for DeltaQ](../../documentation/setup-in-sap/customization-for-deltaq.md).     |
|[{{ ohs }}](../../documentation/ohs/index.md)             | Rel. > BW 3.5     | Customization required, see [Customization for OHS in BW](../../documentation/setup-in-sap/customization-for-ohs-in-bw.md).  |
|[{{ tableCDC }}](../../documentation/table-cdc/index.md)      | SAP ECC 5.0 or above     | Installation of a custom function modules is necessary, see [Table CDC Requirements](../../documentation/table-cdc/index.md#requirements). |
{% endif %}

For Information about the installation of the custom function modules and the SAP customization, check the section [SAP Customization](../../documentation/setup-in-sap/index.md).


### SAP Licenses
Additional SAP licenses might be required for extracting data from SAP. Contact SAP to verify these requirements.
