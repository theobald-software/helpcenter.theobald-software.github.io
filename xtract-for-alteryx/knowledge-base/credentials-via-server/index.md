This article provides examples on how to handle SAP credentials and authorization for Xtract for Alteryx workflows on the Alteryx Server.

### About the Use Case

When creating workflows, it is common for the creator to provide their own SAP credentials. Once the workflow is shared with other users on the Alteryx Server, it can be necesary for the users to provide their own SAP credentials to meet security guidelines. As Xtract for Alteryx does not support external management of credentials by Alteryx's Data Connection Manager (DCM), alternative approaches are necessary to ensure data security.

The examples presented in this article are no best practices or recommendations. The following are suggestions that have been implemented by users.

### Single Technical User

One way to ensure that no unauthorized users have access, is by controlling which Gallery Users are allowed to run the workflow on the Alteryx Server. How to set up the workflow authorization:

1. Set up your workflow with an [SAP connection](../../documentation/sap-connection/) that uses the credentials of an SAP Technical User.
1. Share your workflow on an Alteryx Server.
1. Use the authorization options provided by Alteryx to control which users can run the workflow. Examples:
   - Use *Collections* to control access by inviting only users or groups to the collection that should have access and assign "Run" permissions to the allowed users.
   - Restrict access in the workflow settings to remove any public or unwanted access.
   - If the Alteryx Server is connected to an authentication system (e.g., EntraID), set permissions at the user level or group level.

### Analytic App

How to make workflows executable by other Gallery Users using an Alteryx [Analytic App](https://help.alteryx.com/current/en/designer/apps-and-macros/analytic-apps.html):

1. Set up your workflow as an Analytic App.
1. On the Alteryx Server the Gallery Users create their own [SAP connection in the DCM](../../documentation/sap-connection/) with their personal SAP login credentials.
1. When executing the app, the Gallery Users can select their SAP connection via a drop-down list.

Tip

This approach also allows the use of different SAP instances.
