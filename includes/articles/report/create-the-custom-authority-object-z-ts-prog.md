
The following article shows how to create the Z_TS_PROG authorization object for the custom function module Z_XTRACT_IS_REMOTE_REPORT.<br>

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

*****

#### Related Links
- [Authorize Access to Reports via Authorization Groups](./authorize-access-to-specific-reports.md)
- [SAP Authorization Objects for Reports](../documentation/setup-in-sap/sap-authority-objects.md/#report)
- [Documentation: Report](../documentation/report/index.md)