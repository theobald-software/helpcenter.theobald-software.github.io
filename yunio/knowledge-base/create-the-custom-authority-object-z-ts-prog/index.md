The following article shows how to create the Z_TS_PROG authorization object for the custom function module The Theobald Software custom function module [Z_XTRACT_IS_REMOTE_REPORT](../../documentation/setup-in-sap/custom-function-module-for-reports/) enables the extractions of reports from SAP systems.

The Theobald Software custom function module Z_XTRACT_IS_REMOTE_REPORT enables the extractions of reports from SAP systems. If no authorization group is assigned to a report, Z_XTRACT_IS_REMOTE_REPORT uses a custom authorization object Z_TS_PROG to verify whether the SAP user is allowed to extract a report. The access to reports is granted based on the name of the report.

### Create the Custom Authorization Object Z_TS_PROG

1. Use transaction SU21 to create a new authorization object.
1. Expand the *Create* menu and click **[Authorization Object]**. The window "Create Authorization Object" opens.
1. Enter the following values:\
   **Object:** Z_TS_PROG\
   **Text:** Theobald Software Report Authorization
1. Click **[Continue]** to enable editing of the section *Authorization fields*.
1. Manually enter S_NAME as the first entry in *Authorization fields*.
1. Click **[Save]** to save the authorization object.

### Configure the Custom Authorization Object Z_TS_PROG

1. Either download the provided [SAP role](../../documentation/setup-in-sap/sap-authority-objects/#sap-authorization-profiles) or manually [create the Custom Authorization Object Z_TS_PROG](#create-the-custom-authorization-object-z_ts_prog).
1. Enter the change mode within the "Role Maintenance" window to configure the object.
1. Navigate to *Authorizations* and click *Change Authorization Data* (). The window "Change Role: Authorizations" opens.
1. Expand the tree view **Basis: Administration > Theobald Software authorization for reports**.
1. Click **[]**. The window "Field values" opens.
1. Enter the names of relevant ABAP reports and transfer the corresponding values.

______________________________________________________________________

#### Related Links

- [Authorize Access to Reports via Authorization Groups](../authorize-access-to-specific-reports/)
- [SAP Authorization Objects for Reports](../../documentation/setup-in-sap/sap-authority-objects/#report)
