The extraction of reports requires the installation of a custom function module in your SAP system.\
If you cannot install the function module, turn to your SAP Basis team for help.

Note

As of version 1.2 of the custom function module `Z_XTRACT_IS_REMOTE_REPORT` access to reports must be explicitly granted, see [Authority Objects for Z_XTRACT_IS_REMOTE_REPORT](#authority-objects-for-z_xtract_is_remote_report).

### Installation of Z_XTRACT_IS_REMOTE_REPORT

Install the function module using the transport request *Z_XTRACT_IS_REMOTE_REPORT-transport.zip*.\
The transport request is located in the following installation directory: `C:\Program Files\[XtractProduct]\ABAP\Report\Z_XTRACT_IS_REMOTE_REPORT-transport.zip`.

The transport request needs to be imported into SAP by your SAP Basis team.

### Authority Objects for Z_XTRACT_IS_REMOTE_REPORT

As of Z_XTRACT_IS_REMOTE_REPORT version 1.2 access to reports must be explicitly granted.\
There are 2 ways to verify that the SAP user is allowed to extract a report:

- Use authentication groups, see [Authorizing Access to Reports via Authorization Groups](../../../knowledge-base/authorize-access-to-specific-reports/).
- Use the custom authorization object Z_TS_PROG.

______________________________________________________________________

#### Related Links

- [Knowledge Base: Import an SAP Transport Request](../../../knowledge-base/import-an-sap-transport-request/)
- [Knowledge Base: Authorizing Access to Specific Reports](../../../knowledge-base/authorize-access-to-specific-reports/)
- [SAP Help: Create Function Group](https://help.sap.com/viewer/bd833c8355f34e96a6e83096b38bf192/7.52.0/en-US/d1801ef5454211d189710000e8322d00.html)
