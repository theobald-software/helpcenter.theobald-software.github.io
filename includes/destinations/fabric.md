
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

1. Click **[Authenticate using Entra ID]**. The window "Entra ID" opens.
2. When prompted, sign in with your Microsoft credentials.
3. After the sign in, a list of requested permissions is displayed, see [Knowledge Base Article: Authentication via Microsoft Entra ID](../../knowledge-base/authentication-via-entra-id-with-azure-storage.md). <br>
![xu-entraID](../../assets/images/documentation/destinations/azure-storage/xu-azure-blob-con_4.png){:class="img-responsive" width="350px"}
4. Click **[Accept]** to establish a connection to the storage account.

If the connection is successful, a "Connection successful" info window opens. 

!!! warning
	**The window "Entra ID" shows a blank screen.**<br>
	If the window "Entra ID" shows a blank screen, the content is likely blocked by the Internet Explorer ESC (Enhanced Security Configuration) on Windows servers.
	To disable the Internet Explorer ESC, refer to the instructions in the [Microsoft Documentation: How to turn off Internet Explorer ESC on Windows servers](https://learn.microsoft.com/en-us/previous-versions/troubleshoot/browsers/security-privacy/enhanced-security-configuration-faq#how-to-turn-off-internet-explorer-esc-on-windows-servers).


### Files Folder

#### URL

Enter the URL of the Lakehouse, including the folder path in which the data is written.
The URL uses the following format:<br>
`https://onelake.dfs.fabric.microsoft.com/<workspaceGUID>/<itemGUID>/<folder>/`

Example: 
`https://onelake.dfs.fabric.microsoft.com/12345678-aaaa-bbbb-cccc-123456789abc/12345678-dddd-ffff-gggg-123456789abc/folder-name`


You can copy the URL in the [Microsoft Fabric portal](https://app.fabric.microsoft.com/home) using the properties of a OneLake folder:
	
![xu-onelake-url](../../assets/images/documentation/destinations/fabric/url.png)

