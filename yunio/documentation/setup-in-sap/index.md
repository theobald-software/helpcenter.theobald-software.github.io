This section covers [user rights](sap-authority-objects/) and customization topics for the SAP Basis.\
For information on [supported SAP systems](../setup/requirements/#supported-sap-systems-and-releases) and other IT topics, see [Setup](../setup/).

### Custom Function Modules

The following integration types require the installation of a custom function module:

| Integration Type | Custom Function Module | Installation | | --- | --- | --- | | *Report* | [Z_XTRACT_IS_REMOTE_REPORT](custom-function-module-for-reports/) | Required | | *SAP Table and View* | [/THEO/READ_TABLE](custom-function-module-for-table-extraction/) | Recommended |

Theobald Software distributes custom function modules as part of yunIO. The custom function modules can be installed in SAP using transport requests. The transport requests are available in the installation directory of yunIO, e.g., `C:\Program Files\Theobald Software\yunIO\ABAP\`.

For information on how to use transport request, see [Import an SAP Transport Request](/yunio/knowledge-base/import-an-sap-transport-request).

Note

All objects that come with any of the transport requests, can be deleted by importing the `Z_THEO_READ_TABLE-deletion_request.zip` transport request.

### Popular Topics

- [SAP User Rights](sap-authority-objects/)
- [Download SAP Roles](sap-authority-objects/#sap-authorization-profiles)
- [Function Module for Table Extractions](custom-function-module-for-table-extraction/)
- [Function Module for Report Extractions](custom-function-module-for-reports/)
