
### Prerequisites

- A connection to an SAP system is available, see [SAP Connection](../sap-connection/index.md).
- The SAP user has sufficient user rights, see [SAP Authority Objects](../setup-in-sap/sap-authority-objects.md/#report).
- The custom function module `Z_XTRACT_IS_REMOTE_REPORT` is installed in your SAP system, see [Function Module for Reports](../setup-in-sap/custom-function-module-for-reports.md/#installation-of-z_xtract_is_remote_report).
As of `Z_XTRACT_IS_REMOTE_REPORT` version 1.2 access to reports must be explicitly granted, see [Knowledge BAse Article: Authorize Access to Specific Reports](../../knowledge-base/authorize-access-to-specific-reports.md).
- The report must return a table-like structure in SAP.