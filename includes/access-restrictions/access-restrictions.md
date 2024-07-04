
This section contains information on how to set up access restrictions to the Designer and the Server.

- Restrictions to the Designer affect the creation or modification of {% if page.meta.product == "xtract-universal" %}destinations, {% endif %}sources and extractions
- Restrictions to the Server affect the execution of extractions

There are two types of users and user groups, access can be restricted to:

- Windows AD users (Kerberos authentication)
- [Custom users](user-management.md) (Basic authentication)

### Authentication Between Designer and Server

The connection between the Designer and the Server can be established using different authentication and encryption methods.
The authentication method guarantees the verification of the identity of the logged in user.

![Designer_Authentication](../../assets/images/{{ abbr }}/documentation/designer/remote-login.png){:class="img-responsive"}

The following combinations of transport encryption and authentication are available:

!!! note 
	To use Kerberos transport encryption or authenticate an Active Directory (AD) user, a Kerberos Target Principal Name (TPN) is required. 
	TPN can either be a User Principal Name (UPN) or a Service Principal Name (SPN). 
	For more information on TPN, see [Knowledge Base Article: Target Principal Field (TPN)](../../knowledge-base/target-principal-TPN.md).

| Authentication Method | Description | TPN required |
| :------ |:--- | :---: |
| Windows credentials (current user) | The AD user, who runs the Designer authenticates themselves towards the Server via Kerberos. All data exchanged between Designer & Server is encrypted using Kerberos. | :white_check_mark: |
| Windows credentials (different users) | The AD user, whose user name and password are entered in the login window, authenticates themselves to the {{ Abbr }} server via Kerberos. All data exchanged between Designer & Server is encrypted using Kerberos.| :white_check_mark: |
| Custom credentials (TLS encryption) | The custom user, whose user name and password are entered in the login window, authenticates themselves to the Server. All data exchanged between Designer & Server is encrypted via TLS. To use TLS transport encryption, an [X.509 server certificate](#link) is required for the Service (can be stored in the [server settings](../server/server-settings.md). In the login window, the DNS hostname of the server for which the certificate is issued needs to be entered into the *Server* field. | :x: |
| Custom credentials (Kerberos encryption) | The custom user, whose user name and password are entered in the login window, authenticates themselves to the Server. All data exchanged between Designer & Server is encrypted using Kerberos. | :white_check_mark: |  
| Anonymous (no encryption) | There is no authentication. The data exchanged between Designer & Server is transferred in plain text without transport encryption. | :x: |  

### Activate / Deactivate Authentication

Follow the steps below to activate or deactivate authentication methods:<br>

1. Open **Server > Settings** from the main window of the Designer.<br>
![security-manage-users](../../assets/images/documentation/access-restriction/server-settings_manage.png){:class="img-responsive"}
2. In the tab *Configuration Server*, activate or deactivate your authentication methods.<br>
![ServerSettings_authenticaion_methods](../../assets/images/documentation/access-restriction/authentication-server-settings.png){:class="img-responsive"}
3. Click **[OK]** to confirm your input. If prompted, restart the server.

When [starting the Designer](../designer.md), only the activated authentication methods are available for the server connection.