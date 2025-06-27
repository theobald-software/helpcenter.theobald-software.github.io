The following article shows how to connect to the Azure Storage destination using Authentication via Microsoft Entra ID (formerly Azure Active Directory). The article leads you through the following process:

1. Register a new app with your Entra ID tenant.
1. Assign access rights for the new app in Azure Storage using the Storage Blob Data Contributor role.
1. In Xtract Universal, connect to Azure Storage using the Microsoft Entra ID method.

### App Registration

Follow the steps below to register a new app with your Entra ID tenant:

1. Open the Azure portal and navigate to **App Registrations**.
1. Click **[New registration]** to register a new app with your Entra ID tenant.
1. Enter the name of the application.
1. In the Redirect UI section, select *Public Client /native (mobile and desktop)* and assign `https://login.microsoftonline.com/common/oauth2/nativeclient` as the redirect URI.
1. Click **Register**.
1. Open the new application and navigate to **API Permissions > Add a permission > Azure Storage**.
1. Click **Grant admin consent**.

The app is now registered.

### Access Rights in Azure Storage

Follow the steps below to assign access rights for the [new Azure app](#app-registration) in Azure Storage using the Storage Blob Data Contributor role:

1. Open the Azure portal and navigate to **Access Control (IAM)**.
1. Click **[Add role assignment]**.
1. Select the **Storage Blob Data Contributor** role and click **[Next]**.
1. Click **+ Select members** and add the new Azure app created in [App Registration](#app-registration) to the members.
1. Click **[Next]** to continue, then click **[Review + assign]** to assign the access rights.

Access rights are now assigned.

### Connect to Azure Storage

Follow the steps below to connect Xtract Universal to the Azure Storage destination using Authentication via Microsoft Entra ID:

1. Open Xtract Universal and create a new Azure Storage destination or edit an existing destination.
1. Select the connection type **Azure active directory**.
1. Enter the name of your storage account.
1. Copy and paste the Application (client) ID and the Directory (tenant) ID from the Azure app created in [App Registration](#app-registration).
1. Click **[Connect]**. The window "Azure OAuth 2.0" opens.
1. When prompted, provide the credentials of a Microsoft service user for the OAuth connection. Make sure that the user meets the following requirements:
   - The user has the 'Storage Blob Data Contributor' or 'Owner' role in Azure Storage.
   - The user does not use Multifactor Authentication (MFA) as extractions fail when the MFA of the user expires.
1. If the connection is successful, a "Connection successful" message is displayed in a pop-up window.

The destination is now ready to use.
