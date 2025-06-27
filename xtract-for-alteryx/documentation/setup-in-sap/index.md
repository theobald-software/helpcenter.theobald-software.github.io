This section covers [user rights](sap-authority-objects/) and customization topics for the SAP Basis.\
For information on [supported SAP systems](../setup/requirements/#supported-sap-systems-and-releases) and other IT topics, see [Setup](../setup/).

### Custom Function Modules

The following components require the installation of a custom function module:

| Component | Custom Function Module | Installation | | --- | --- | --- | | Xtract Report | [Z_XTRACT_IS_REMOTE_REPORT](custom-function-module-for-reports/) | Required | | Xtract Table | [/THEO/READ_TABLE](custom-function-module-for-table-extraction/) | Recommended |

Theobald Software distributes custom function modules as part of Xtract for Alteryx. The custom function modules can be installed in SAP using transport requests. The transport requests are available in the installation directory of Xtract for Alteryx, e.g., `C:\Program Files\XtractForAlteryx\ABAP\`.

For information on how to use transport request, see [Import an SAP Transport Request](/xtract-for-alteryx/knowledge-base/import-an-sap-transport-request).

Note

All objects that come with any of the transport requests, can be deleted by importing the `Z_THEO_READ_TABLE-deletion_request.zip` transport request.

### Popular Topics

- [SAP User Rights](sap-authority-objects/)
- [Download SAP Roles](sap-authority-objects/#sap-authorization-profiles)
- [Function Module for Table Extractions](custom-function-module-for-table-extraction/)
- [Function Module for Report Extractions](custom-function-module-for-reports/)
