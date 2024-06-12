---
title: SAP Connection
icon: simple/sap
description: SAP Connection
---

This page shows how to connect to SAP.<br>
An SAP connection is required to use any Xtract Universal {{ component }}.


{% include "/sap-connection/sap-auth-warning.md" %}

**Supported Connection Methods** 

- Connection to a single application server
- Connection to a message server (Load Balancing) 
- Connect to a single application server or public or private cloud instance via RFC over WebSocket.

**Supported Authentication Methods**

- [Plain login](#connect-to-sap) using SAP username and password (system or dialogue user)
- [Secure Network Communication (SNC)](snc-authentication.md) using username and password via basic authentication
- [SSO with Login-Ticket](sso-with-logon-ticket-md) using username and password via basic authentication

### Connect to SAP

Follow the steps below to create an SAP source that connects to SAP:

1. In the main window of the Designer, navigate to the menu bar and select **Server > Manage Sources**. The window "Manage Sources" opens.  <br>
![Create-Connection](../../assets/images/{{ abbr }}/documentation/sap-connection/open-manage-sources.png){:class="img-responsive"}
2. Click **[Add]** to add a new SAP connection or click :pen-button: to edit an existing connection. The window "Change Source" opens. <br>
![BC-Create-Connection-2](../../assets/images/general/sap-connection/sap-source-manage.png){:class="img-responsive"}
3. Enter a name for the SAP connection in the field **Name**.
4. In the *General* tab, enter the system details of your SAP system and enter the SAP username and password of an SAP system or dialogue user.  

	!!! tip
		Input values for the SAP connection can be found in the Properties of the SAP Logon Pad or they can be requested from the SAP Basis team.
	


In the subsection *System* of the *General* tab, select one of the following connection methods:
	- **Single application server** 
	- **Load balancing**
	- **WebSocket**

In the subsection Connection select one of the following authentication methods:
	Plain uses the SAP username and password.
	SNC uses an encrypted connection between Xtract for Alteryx and SAP with username and password.
	Ticket Issuer uses SAP Logon-Tickets in place of user credentials. This connection is not encrypted.

5. Enter the system details of your SAP system and enter the SAP username and password of an SAP system or dialogue user.  

	!!! tip
		Input values for the SAP connection can be found in the Properties of the SAP Logon Pad or they can be requested from the SAP Basis team.
	
6. Click **[Test connection]** to validate the connection parameters. 
7. Click **[OK]** to save the XTRACT Connection Manager.


For information on how to connect to SAP using Secure Network Authentication (SNC), see [SNC Authentication](snc-authentication.md).
For information on properties and parameters of the XTRACT Connection Manager, see [Parameterize Connections](parameterize-connections.md).

### Assign an SAP Source to {{ Components }}

XTRACT Connection Managers can be assigned to an Xtract {{ component }} automatically or manually.

=== "Assign Automatically"

	1. Create an XTRACT Connection Manager as shown in [Connect to SAP](#connect-to-sap).
	2. Drag & drop an Xtract {{ component }} into the data flow task.  
	3. Double-click the Xtract {{ component }} to automatically assign a Connection Manager.
	If there are multiple XTRACT Connection Managers, the window "Select Connection Manager" opens.<br>
	![select-connection-manager](../../assets/images/xis/documentation/sap-connection/select-connection-manager.png)<br>
	Select an XTRACT Connection Manager and click **[OK]**.

=== "Assign Manually"

	1. Create an XTRACT Connection Manager as shown in [Connect to SAP](#connect-to-sap).
	2. Drag & drop an Xtract {{ component }} into the data flow task.   
	3. Select the Xtract {{ component }} and click *Show Advanced Editor* in the *Properties* menu of the {{ component }} :number-1:. 
	The window "Advanced Editor" opens :number-2:. <br>
	![assign-connection-manager](../../assets/images/xis/documentation/sap-connection/assign-connection-manager.png)
	4. Select an XTRACT Connection Manager from the drop-down-menu :number-3:. 
	5. Confirm your selection with **[OK]** :number-4:.

	!!! note
		The {{ bapi }} {{ component }} does not have an *Advanced Editor*.<br>
		To manually assign an XTRACT Connection Manager to an {{ bapi }} {{ component }}, open the main window of the {{ bapi }} {{ component }}.
		The main window of the {{ bapi }} {{ component }} contains a *Change Connection Manager* menu. 


{% include "/sap-connection/connect-via-router.md" %}

*****
#### Related Links

- [Connection Settings: Connection Methods](settings.md#connection-methods)
