This section contains information on how to set up access restrictions to the Designer and the Server.

- Restrictions to the Designer affect the creation or modification of sources and extractions
- Restrictions to the Server affect the execution of extractions

There are two types of users and user groups, access can be restricted to:

- Windows AD users (Kerberos authentication)
- [Custom users](user-management/) (Basic authentication)

### Authentication Between Designer and Server

The connection between the Designer and the Server can be established using different authentication and encryption methods. The authentication method guarantees the verification of the identity of the logged in user.

Note

When running extractions in the Designer, the executing user is always the Windows account that runs the Designer, not the login user. To run extractions under a different user, start the Board Connector Designer application as a different user (`Shift` + ).

Note

To use Kerberos transport encryption or authenticate an Active Directory (AD) user, a Kerberos Target Principal Name (TPN) is required. TPN can either be a User Principal Name (UPN) or a Service Principal Name (SPN). For more information on TPN, see [Knowledge Base Article: Target Principal Field (TPN)](../../knowledge-base/target-principal-TPN/).

The following combinations of transport encryption and authentication are available:

| Authentication Method | Description | TPN required | | --- | --- | --- | | Windows credentials (current user) | The AD user, who runs the Designer authenticates themselves towards the Server via Kerberos. All data exchanged between Designer & Server is encrypted using Kerberos. | | | Windows credentials (different users) | The AD user, whose user name and password are entered in the login window, authenticates themselves to the BC server via Kerberos. All data exchanged between Designer & Server is encrypted using Kerberos. | | | Custom credentials (TLS encryption) | The custom user, whose user name and password are entered in the login window, authenticates themselves to the Server. All data exchanged between Designer & Server is encrypted via TLS. To use TLS transport encryption, an [X.509 server certificate](install-x.509-certificate/) is required for the Service (can be stored in the [server settings](../server/server-settings/). In the login window, the DNS hostname of the server for which the certificate is issued needs to be entered into the *Server* field. | | | Custom credentials (Kerberos encryption) | The custom user, whose user name and password are entered in the login window, authenticates themselves to the Server. All data exchanged between Designer & Server is encrypted using Kerberos. | | | Anonymous (no encryption) | There is no authentication. The data exchanged between Designer & Server is transferred in plain text without transport encryption. | |

### Activate / Deactivate Authentication

Follow the steps below to activate or deactivate authentication methods:

1. Open **Server > Settings** from the main window of the Designer.
1. In the tab *Configuration Server*, activate or deactivate your authentication methods.
1. Click **[OK]** to confirm your input. If prompted, restart the server.

When [starting the Designer](../designer/), only the activated authentication methods are available for the server connection.
