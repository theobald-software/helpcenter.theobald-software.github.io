---
title: Pass Credentials on the Alteryx Server
description: How to handle SAP credentials and authorization for {{ productName }} workflows on Alteryx Servers.
author: Simon Rech, Valerie Schipka
---

This article provides examples on how to handle SAP credentials and authorization for {{ productName }} workflows on the Alteryx Server.

### About the Use Case

When creating workflows, it is common for the creator to provide their own SAP credentials.
Once the workflow is shared with other users on the Alteryx Server, it can be necesary for the users to provide their own SAP credentials to meet security guidelines.
As {{ productName }} does not support external management of credentials by Alteryx's Data Connection Manager (DCM), alternative approaches are necessary to ensure data security.

The approaches presented in this article are no best practices or recommendations. 
The following are suggestions that have been implemented by users.

<!--
### Install Xtract for Alteryx on an Alteryx Server

To use {{ productName }} with the Alteryx Server, [install {{ productName }}](../documentation/setup/installation.md) on the machine that hosts the Alteryx Server.

!!! note
	For distibuted landscapes with multiple Alteryx Server machines, e.g., worker nodes, {{ productName }} must be installed on all machines. 
	Alternatively, you can run Alteryx workflows only on dedicated Alteryx Server machines.

### DCM

Alteryx's Data Connection Manager (DCM) allows externalizing credentials from workflows and managing them centrally. 
This approach ensures that workflows do not contain embedded credentials and prevents unauthorized use of the creator's credentials.​


[SAML SSO](https://community.alteryx.com/t5/Engine-Works/Alteryx-Architectures-SAML-SSO-Authentication/ba-p/895056)

-->


<!--
The thing is we (or at least I) don't know if SSO will work with Alteryx Server or if we need to first make changes to XfA. 
We told Novartis at the time that it would work and had the confirmation that it would be implemented by dev if needed (as the deal size was big enough). 
Also, it's very difficult to reproduce this as we have only one Alteryx Server environment and that is used for demos etc. 
So we can't just experiment much with SSO there.
-->

### Single Technical User

One way to ensure that no unauthorized users have access, is by controlling which Gallery Users are allowed to run the workflow on the Alteryx Server.
How to set up authorizations for the workflow:

<div class="workflow" markdown>

1. Set up your workflow with an [SAP connection](../documentation/sap-connection/index.md) that uses the credentials of an SAP Technical User.
2. Share your workflow on an Alteryx Server.
3. Use the authorization options provided by Alteryx to control which users can run the workflow. Examples:
	- Use Collections to control access by inviting only users or groups to the collection that should have access and assign "Run" permissions to the allowed users.
	- Restrict access in the workflow settings to remove any public or unwanted access.
	- If the Alteryx Server is connected to an authentication system (e.g., EntraID), set permissions at the user level or group levels.

</div>


### Analytic App

How to make workflows executable by other Gallery Users using an Alteryx [Analytic App](https://help.alteryx.com/current/en/designer/apps-and-macros/analytic-apps.html):

<div class="workflow" markdown>

1. Set up your workflow as an Analytic App.
2. On the Alteryx Server the Gallery Users create their own [SAP connection in the DCM](../documentation/sap-connection/index.md) with their personal SAP login credentials.
3. When executing the app, the Gallery Users can select their SAP connection via a drop-down list. 

</div>

!!! tip
	This approach also allows the use of different SAP instances.