The following article shows how to set up access to reports by assigning authorization groups to reports.\
Access is then granted through the S_PROGRAM authorization object, see [SAP Note 338177](https://launchpad.support.sap.com/#/notes/338177).

### Set Up Access to Specific Reports

1. Log into SAP and use transaction code SE38 to open the ABAP Editor.
1. Enter the name of the report you want to access and select **Attributes** as the *Subobjects*.
1. Click **[Change]**. A window that contains the program attributes opens.
1. Assign an authorization group.
1. Edit or create a user role you want to grant access to (transaction code PFCG).
1. Manually assign the authorization object S_PROGRAM to the user role.
1. Select the actions **SUBMIT** and **BTCSUBMIT** in the S_PROGRAM object field *P_ACTION*.
1. Assign the same authorization group that is assigned to the report to the S_PROGRAM object field *P_GROUP*.
1. Save and generate the authorization.
1. Assign the user role to users.

______________________________________________________________________

#### Related Links

- [Create the Custom Authorization Object Z_TS_PROG](../create-the-custom-authority-object-z-ts-prog/)
- [SAP Authorization Objects for Reports](../../documentation/setup-in-sap/sap-authority-objects/#report)
- [Documentation: Report](../../documentation/report/)
