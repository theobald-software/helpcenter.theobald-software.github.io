The following article shows how to set up access control for reports.

To grant access to a report, an authorization group must be assigned to the report.\
Access to the report can then be granted through the S_PROGRAM authorization object, see [SAP Note 338177](https://launchpad.support.sap.com/#/notes/338177).

### Authorizing Access to Specific Reports

1. Log into SAP and use transaction code SE38 to open the ABAP Editor.
1. Enter the name of the report you want to access and select **Attributes** as the *Subobjects*.
1. Click **[Change]**. A window that contains the program attributes opens.
1. Assign an authorization group.
1. Edit or create a user role you want to grant access to (transaction code PFCG).
1. Manually assign the authorization object S_PROGRAM to the user role.
1. Select the action **SUBMIT** in the S_PROGRAM object field *P_ACTION*.
1. Assign the same authorization group that is assigned to the report to the S_PROGRAM object field *P_GROUP*.
1. Save and generate the authorization.
1. Assign the user role to users.

______________________________________________________________________

#### Related Links

- [How to Create the Custom Authorization Object Z_TS_PROG](../create-the-custom-authority-object-z-ts-prog/)
