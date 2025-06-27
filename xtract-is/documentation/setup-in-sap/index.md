This section covers [user rights](sap-authority-objects/) and customization topics for the SAP Basis.\
For information on [supported SAP systems](../setup/requirements/#supported-sap-systems-and-releases) and other IT topics, see [Setup](../setup/).

### Custom Function Modules

The following components require the installation of a custom function module:

| Component | Custom Function Module | Installation | | --- | --- | --- | | Xtract Report | [Z_XTRACT_IS_REMOTE_REPORT](custom-function-module-for-reports/) | Required | | Xtract Table | [/THEO/READ_TABLE](custom-function-module-for-table-extraction/) | Recommended | | Xtract TableCDC | [/THEO/READ_TABLE](custom-function-module-for-table-extraction/) and [THEO_CDC](custom-function-module-for-tablecdc/) | Required |

Theobald Software distributes custom function modules as part of Xtract IS. The custom function modules can be installed in SAP using transport requests. The transport requests are available in the installation directory of Xtract IS, e.g., `C:\Program Files\XtracIS\ABAP\`.

For information on how to use transport request, see [Import an SAP Transport Request](/xtract-is/knowledge-base/import-an-sap-transport-request).

Note

All objects that come with any of the transport requests, can be deleted by importing the `Z_THEO_READ_TABLE-deletion_request.zip` transport request.

### Customizations in SAP

The following components require a customization in the SAP system:

- Xtract DeltaQ, see [Customization for DeltaQ](customization-for-deltaq/).
- Xtract OHS, see [Customization for OHS in BW](customization-for-ohs-in-bw/).

### Popular Topics

- [SAP User Rights](sap-authority-objects/)
- [Download SAP Roles](sap-authority-objects/#sap-authorization-profiles)
- [Function Module for Table Extractions](custom-function-module-for-table-extraction/)
- [Function Module for TableCDC Extractions](custom-function-module-for-tablecdc/)
- [Function Module for Report Extractions](custom-function-module-for-reports/)
- [Customization for DeltaQ](customization-for-deltaq/)
- [Customization for OHS](customization-for-ohs-in-bw/)
