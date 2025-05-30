
The following article shows how to create the Z_TS_PROG authorization object for the custom function module The Theobald Software custom function module [Z_XTRACT_IS_REMOTE_REPORT](../documentation/setup-in-sap/custom-function-module-for-reports.md) enables the extractions of reports from SAP systems.<br>

The Theobald Software custom function module Z_XTRACT_IS_REMOTE_REPORT enables the extractions of reports from SAP systems.
If no authorization group is assigned to a report, Z_XTRACT_IS_REMOTE_REPORT uses a custom authorization object Z_TS_PROG to verify whether the SAP user is allowed to extract a report. 
The access to reports is granted based on the name of the report.


### Create the Custom Authorization Object Z_TS_PROG

1. Use transaction SU21 to create a new authorization object.
2. Expand the *Create* menu and click **[Authorization Object]**. The window "Create Authorization Object" opens.<br>
![report-authorization-object](site:assets/images/articles/report/sap-authority-object.png)
3. Enter the following values:<br>
**Object:** Z_TS_PROG<br>
**Text:** Theobald Software Report Authorization<br>
![report-create-authorization-object](site:assets/images/articles/report/sap-create-authorization-object.png)
4. Click **[Continue]** to enable editing of the section *Authorization fields*.
5. Manually enter S_NAME as the first entry in *Authorization fields*. 
6. Click **[Save]** to save the authorization object.


### Configure the Custom Authorization Object Z_TS_PROG
1. Either download the provided [SAP role](../documentation/setup-in-sap/sap-authority-objects.md/#sap-authorization-profiles) or manually [create the Custom Authorization Object Z_TS_PROG](#create-the-custom-authorization-object-z_ts_prog).
2. Enter the change mode within the "Role Maintenance" window to configure the object.
3. Navigate to *Authorizations* and click *Change Authorization Data* (:pen-button:). The window "Change Role: Authorizations" opens.
4. Expand the tree view **Basis: Administration > Theobald Software authorization for reports**.<br>
![change-role](site:assets/images/articles/report/sap-change-role-authorizations.png) 
5. Click **[:pen-button:]**. The window "Field values" opens.<br>
![report-field-values](site:assets/images/articles/report/sap-edit-authorization-object-field-values.png)
6. Enter the names of relevant ABAP reports and transfer the corresponding values.

*****

#### Related Links
- [Authorize Access to Reports via Authorization Groups](./authorize-access-to-specific-reports.md)
- [SAP Authorization Objects for Reports](../documentation/setup-in-sap/sap-authority-objects.md/#report)
