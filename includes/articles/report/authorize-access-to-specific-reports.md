
The following article shows how to set up access to reports by assigning authorization groups to reports.<br>
Access is then granted through the S_PROGRAM authorization object, see [SAP Note 338177](https://launchpad.support.sap.com/#/notes/338177).

### Set Up Access to Specific Reports

1. Log into SAP and use transaction code SE38 to open the ABAP Editor.
2. Enter the name of the report you want to access and select **Attributes** as the *Subobjects*.
3. Click **[Change]**. A window that contains the program attributes opens.
4. Assign an authorization group.<br>
![report-authorization](../assets/images/articles/report/report-authorization.png)
5. Edit or create a user role you want to grant access to (transaction code PFCG).
6. Manually assign the authorization object S_PROGRAM to the user role.<br>
![report-manual-authorization-object](../assets/images/articles/report/manual-authorization-object.png)
7. Select the actions **SUBMIT** and **BTCSUBMIT** in the S_PROGRAM object field *P_ACTION*.
8. Assign the same authorization group that is assigned to the report to the S_PROGRAM object field *P_GROUP*. 
9. Save and generate the authorization.
10. Assign the user role to users.

******

#### Related Links
- [Create the Custom Authorization Object Z_TS_PROG](create-the-custom-authority-object-z-ts-prog.md)
- [SAP Authorization Objects for Reports](../documentation/setup-in-sap/sap-authority-objects.md/#report)
- [Documentation: Report](../documentation/report/index.md)
