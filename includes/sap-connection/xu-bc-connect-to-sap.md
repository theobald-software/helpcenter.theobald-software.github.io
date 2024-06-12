
**Supported Connection Methods** 

- Connection to a single application server
- Connection to a message server (Load Balancing) 
- Connect to a single application server or public or private cloud instance via RFC over WebSocket.

**Supported Authentication Methods**

- Plain login using SAP username and password (system or dialogue user)
- [Secure Network Communication (SNC)](snc-authentication.md) using username and password via basic authentication
- [SSO with Logon-Ticket](sso-with-logon-ticket-md) using username and password via basic authentication

### Connect to SAP

Follow the steps below to create an SAP source that connects to SAP:

1. In the main window of the Designer, navigate to the menu bar and select **Server > Manage Sources**. The window "Manage Sources" opens.  <br>
![Create-Connection](../../assets/images/{{ abbr }}/documentation/sap-connection/open-manage-sources.png){:class="img-responsive"}
2. Click **[Add]** to add a new SAP connection or click :pen-button: to edit an existing connection. The window "Change Source" opens. <br>
![Create-Connection-2](../../assets/images/documentation/sap-connection/sap-source-manage.png){:class="img-responsive"}
3. Enter a name for the SAP connection in the field **Name**.
4. In the *General* tab, enter the [system details](settings.md#link) of your SAP system and enter the SAP username and password of an SAP system or dialogue user.  <br>
![sap-source-general](../../assets/images/documentation/sap-connection/sap-source-general.png){:class="img-responsive"}

	!!! tip
		Input values for the SAP connection can be found in the Properties of the SAP Logon Pad or they can be requested from the SAP Basis team.
		
4. In the *Authentication* tab, select one of the following authentication methods:
	- *Plain* uses the SAP username and password.
	- [*Secure Network communication (SNC)*](snc-authentication.md) uses an encrypted connection between {{ productName }} and SAP with an SAP username and password.
	- [*SAP Logon Ticket*](sso-logon-ticket.md) uses SAP Logon-Tickets in place of user credentials. This connection is not encrypted.
5. In the *RFC Options* tab, select an [RFC library](settings.md#rfc-libraries) for the SAP connection. The default is the NetWeaver RFC library.
6. Optional: In the *Access Control* tab, you can restrict read and write access to the SAP source, see [Access Restriction](#link).
7. Click **[Test designer connection]** to validate the connection between the {{ productName }} Designer and the SAP system. 
8. Click **[Test server connection]** to validate the connection between the {{ productName }} Server and the SAP system. 
9. Click **[OK]** to save the SAP source.

For more information on the input options, see [Connection Settings](settings.md).

### Assign an SAP Source to Extractions

An SAP source is assigned when [creating an extraction](#link). <br>
Follow the steps below to change the SAP source of an existing extraction:

1. Select an extraction from the list of extractions in the main window of the Designer.
2. Click **[Source]**. The window “Change Source” opens.<br>
![open-sap-source](../../assets/images/{{ abbr }}/documentation/sap-connection/open-sap-source.png){:class="img-responsive"}
3. Select an SAP source from the dropdown list.<br>
![sap-source-change](../../assets/images/documentation/sap-connection/sap-source-change.png){:class="img-responsive"}
4. Click **[OK]** to confirm your input.