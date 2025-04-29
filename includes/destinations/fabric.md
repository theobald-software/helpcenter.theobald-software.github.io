
### Authentication

The {{ page.meta.title }} destination uses [Microsoft Entra ID](https://www.microsoft.com/en-us/security/business/identity-access/microsoft-entra-id) for authentication.
Register Microsoft OneLake as an application in Entra ID and configure OneLake to use the registered application.
	
#### Tenant ID
Enter the Directory (tenant) ID of the registered app.
	
#### Client ID
Enter the Application (client) ID of the registered app. 

!!! tip
	You can copy the tenant ID and client ID in the [Microsoft Entra admin center](https://entra.microsoft.com/#home) or the [Azure portal](https://portal.azure.com/), where the app is registered.<br>
	![xu-azure-blob-con-3](../../assets/images/documentation/destinations/fabric/entraID.png){:class="img-responsive"}

#### Authenticate using Entra ID

Follow the steps below to authenticate {{ productName }} against Microsoft:

1. Click **[Authenticate using Entra ID]**. The window "Entra ID" opens.
2. When prompted, sign in with your Microsoft credentials. 
Make sure that the Microsoft user does not use Multifactor Authentication (MFA) as extractions fail when the MFA of the user expires. 
3. After the sign in, a list of requested permissions is displayed, see [Knowledge Base Article: Authentication via Microsoft Entra ID](../../knowledge-base/authentication-via-entra-id-with-azure-storage.md). <br>
![xu-entraID](../../assets/images/documentation/destinations/azure-storage/xu-azure-blob-con_4.png){:class="img-responsive" }
4. Click **[Accept]** to establish a connection to the storage account.

If the connection is successful, a "Connection successful" info window opens. 

!!! warning
	**The window "Entra ID" shows a blank screen.**<br>
	If the window "Entra ID" shows a blank screen, the content is likely blocked by the Internet Explorer ESC (Enhanced Security Configuration) on Windows servers. <br>
	To disable the Internet Explorer ESC, refer to the instructions in the [Microsoft Documentation: How to turn off Internet Explorer ESC on Windows servers](https://learn.microsoft.com/en-us/previous-versions/troubleshoot/browsers/security-privacy/enhanced-security-configuration-faq#how-to-turn-off-internet-explorer-esc-on-windows-servers).

