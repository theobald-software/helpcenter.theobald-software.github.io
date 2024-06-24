
### Installation and Configuration on SAP


|{{ Component }}       | SAP Release           | Requirements on the SAP System        |
|----------------------|-----------------------|-------------------------------------------------------------------------------|
|[{{ table }}](site:documentation/table/)           | Rel. > 4.6C       | Installation of a custom function module [/THEO/READ_TABLE](site:documentation/setup-in-sap/custom-function-module-for-table-extraction/#installation-of-theoread_table) is recommended.    |
|[{{ bapi }}](site:documentation/bapi/)              | Rel. > 4.6C       | No requirements. Only remote-enabled functions are supported.                            |
|[{{ query }}](site:documentation/query/)             | Rel. > 4.6C       | No requirements.      |
|[{{ report }}](site:documentation/reports/)            | Rel. > 4.6C       | Installation of a custom function module [Z_XTRACT_IS_REMOTE_REPORT](site:documentation/setup-in-sap/custom-function-module-for-reports/) is required.   |
|[{{ bwcube }}](site:documentation/bw-cube/)            | Rel. > BW 3.1     | No requirements. BEx Queries require external access ("Allow External Access to this Query" option must be active).                                                                         |
|[{{ hierarchy }}](site:documentation/hierarchy/)       | Rel. > BW 3.1     | No requirements.      |
|[{{ odp }}](site:documentation/odp/)             | SAP_BASIS >= 730, BW >= 7,3X   | No requirements.   |
{% if page.meta.product != "xtract-for-alteryx" %}|[{{ deltaq }}](site:documentation/deltaq/)          | Rel. > 4.6C       | Customization required, see [Customization for DeltaQ](site:documentation/setup-in-sap/customization-for-deltaq/).     |
|[{{ ohs }}](site:documentation/ohs/)             | Rel. > BW 3.5     | Customization required, see [Customization for OHS in BW](site:documentation/setup-in-sap/customization-for-ohs-in-bw/).  |
|[{{ tableCDC }}](site:documentation/table-cdc/)      | SAP ECC 5.0 or above     | Installation of a custom function modules is necessary, see [Table CDC Requirements](site:documentation/table-cdc/#requirements). |
{% endif %}

For Information about the installation of the custom function modules and the SAP customization, check the section [SAP Customization](site:documentation/setup-in-sap/).


### SAP Licenses
Additional SAP licenses might be required for extracting data from SAP. Contact SAP to verify these requirements.
