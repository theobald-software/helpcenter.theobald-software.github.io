


**Supported Connection Methods** 


- Connection to a single application server via [RFC protocol](settings.md/#source-type-rfc)
- Connection to a message server (Load Balancing) via [RFC protocol](settings.md/#source-type-rfc)
- Connection to a single application server or [public or private cloud instance via RFC over WebSocket](../../knowledge-base/access-data-in-the-sap-public-cloud.md)
- Connection to SAP on-premise systems and SAP cloud systems via [OData protocol](settings.md/#source-type-odata)

**Supported Authentication Methods** 

The RFC protocol supports the following authentication methods:

- Plain login using SAP username and password (system or dialogue user)
- [Secure Network Communication (SNC)](snc-authentication.md) using username and password via basic authentication
- [SSO with Logon-Ticket](sso-with-logon-ticket.md) using username and password via basic authentication



### Connect to SAP via RFC Protocol

Follow the steps below to create a source that connects to SAP via RFC protocol:

1. In the main window of the Designer, navigate to the menu bar and select **Server > Manage Sources**. The window "Manage Sources" opens.  <br>
![Create-Connection](../../assets/images/documentation/sap-connection/{{ abbr }}/open-manage-sources.png){:class="img-responsive"}
2. Click **[Add]** to add a new SAP connection or click **[:pen-button:]** to edit an existing connection. The window "Change Source" opens. <br>
![Create-Connection-2](../../assets/images/documentation/sap-connection/sap-source-manage.png){:class="img-responsive"}
3. Enter a name for the SAP connection in the field **Name**.
4. Select **RFC** as the source type. <br>
![sap-source-general](../../assets/images/documentation/sap-connection/sap-source-general.png){:class="img-responsive"}
5. In the *General* tab, select a connection method and enter the [system details](settings.md#general) of your SAP system. 

	!!! tip
		Input values for the SAP connection can be found in the Properties of the SAP Logon Pad, alternatively request the input values from the SAP Basis team.
					
6. In the *Authentication* tab, select one of the following authentication methods:
	- *Plain* uses the SAP username and password.
	- [*Secure Network communication (SNC)*](snc-authentication.md) uses an encrypted connection between {{ productName }} and SAP with an SAP username and password.
	- [*SAP Logon Ticket*](sso-with-logon-ticket.md) uses SAP Logon-Tickets in place of user credentials. This connection is not encrypted.
7. In the *RFC Options* tab, select an [RFC library](settings.md#rfc-libraries) for the SAP connection. The default is the NetWeaver RFC library.
8. Optional: In the *Access Control* tab, you can restrict read and write access to the SAP source, see [Access Management](../access-restrictions/restrict-designer-access.md/#restrict-access-to-the-designer).
9. Click **[Test designer connection]** to validate the connection between the {{ productName }} Designer and the SAP system. 
10. Click **[Test server connection]** to validate the connection between the {{ productName }} Server and the SAP system. 
11. Click **[OK]** to save the SAP source.
	
For more information on the input options, see [Connection Settings](settings.md/#source-type-rfc).

### Connect to SAP via OData Protocol

Follow the steps below to create a source that connects to SAP via OData protocol:

1. In the main window of the Designer, navigate to the menu bar and select **Server > Manage Sources**. The window "Manage Sources" opens.  <br>
![Create-Connection](../../assets/images/documentation/sap-connection/{{ abbr }}/open-manage-sources.png){:class="img-responsive"}
2. Click **[Add]** to add a new SAP connection or click **[:pen-button:]** to edit an existing connection. The window "Change Source" opens. <br>
![Create-Connection-2](../../assets/images/documentation/sap-connection/sap-source-manage.png){:class="img-responsive"}
3. Enter a name for the SAP connection in the field **Name**.
4. Select **OData** as the source type. <br>
![sap-source-general](../../assets/images/documentation/sap-connection/sap-source-odata.png){:class="img-responsive"}
5. Enter the [base URL](settings.md#base-url) of your SAP system.
6. Enter login [credentials](settings.md#username) for your SAP system.
7. Click **[Test Connect]** to validate the connection between the {{ productName }} Designer and the SAP system.  
8. Optional: In the *Access Control* tab, you can restrict read and write access to the SAP source, see [Access Management](../access-restrictions/restrict-designer-access.md/#restrict-access-to-the-designer).
9. Click **[OK]** to save the SAP source.
	
For more information on the input options, see [Connection Settings](settings.md/#source-type-odata).

### Assign an SAP Source to Extractions

An SAP source is assigned when [creating an extraction](../../getting-started.md/#create-an-extraction). <br>
Follow the steps below to change the SAP source of an existing extraction:

1. Select an extraction from the list of extractions in the main window of the Designer.
2. Click **[:designer-source:{ .lg .middle }Source]**. The window “Change Source” opens.<br>
![open-sap-source](../../assets/images/documentation/sap-connection/{{ abbr }}/open-sap-source.png){:class="img-responsive"}
3. Select an SAP source from the dropdown list.<br>
![sap-source-change](../../assets/images/documentation/sap-connection/sap-source-change.png){:class="img-responsive"}
4. Click **[OK]** to confirm your input.

### Single-Sign-On (SSO)

BI client tools such as Power BI, Power Pivot, Alteryx, etc. can start {{ extractions }} in {{ productName }}. 
{{ productName }} loads the extracted data directly into the tools. 
In this use case, it is often required that the {{ extraction }} is executed with the SAP credentials of the (Windows AD) user, whose BI client triggered the {{ extraction }}. 
This means that the SAP authorizations of the user apply. This is especially important when extracting BW/BEx queries.

The Windows credentials of the user are forwarded to SAP using {{ productName }}. 
On the way to SAP or on the SAP side, the Windows user and its SAP credentials are mapped.

#### Supported SSO Scenarios

{{ productName }} supports the following procedures for Single Sign-On (SSO):

- [Secure Network Communication (SNC) with Client Certificates](../../knowledge-base/sso-with-client-certificates.md)
- [Secure Network Communication (SNC) with PSE and External ID](../../knowledge-base/sso-with-external-id.md)
- [Secure Network Communication (SNC) with SAP’s Kerberos Wrapper Library (deprecated)](../../knowledge-base/sso-with-kerberos-snc.md)
- [SAP Logon Ticket](../../knowledge-base/sso-with-logon-ticket.md)

The authentication method can be selected in the SAP source connection settings.
