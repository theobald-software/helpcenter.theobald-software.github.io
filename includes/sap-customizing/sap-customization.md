
### Custom Function Modules

Theobald Software distributes custom function modules as part of {{ productName }}. 
The custom function modules can be installed in SAP using transport requests. 
The transport requests are available in the installation directory of {{ productName }}, e.g., {% if page.meta.product == "yunio" %}`C:\Program Files\Theobald Software\yunIO\ABAP\`.{% else %}`C:\Program Files\[XtractProduct]\ABAP\`.{% endif %}

The following {{ components}} require the installation of a custom function module:


| {{ Component }} | Custom Function Module | Installation |
| :------ |:--- |:--- | 
| {{ report }} | [Z_XTRACT_IS_REMOTE_REPORT](custom-function-module-for-reports.md) | Required |
| {{ table }} | [/THEO/READ_TABLE](custom-function-module-for-table-extraction.md) | Recommended |
{% if page.meta.product == "xtract-universal" or page.meta.product == "xtract-is" or page.meta.product == "board-connector" %}-| {{ tableCDC }} | [/THEO/READ_TABLE](custom-function-module-for-table-extraction.md) and [THEO_CDC](custom-function-module-for-tablecdc.md/#installation-of-theo_cdc_ecc-or-theo_cdc_s4)| Required | {% endif %}

For information on how to use transport request, see [Import an SAP Transport Request](site:knowledge-base/import-an-sap-transport-request.md). <br>

!!! note
	All objects that come with any of the transport requests, can be deleted by importing the `Z_THEO_READ_TABLE-deletion_request.zip` transport request.

