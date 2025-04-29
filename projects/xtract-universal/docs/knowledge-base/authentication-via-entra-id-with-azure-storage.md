---
title: Authentication via Microsoft Entra ID for Azure Storage
description: Authentication via Microsoft Entra ID for Azure Storage
author: Bharath Gorapalli, Valerie Schipka
---

The following article shows how to connect to the Azure Storage destination using Authentication via Microsoft Entra ID (formerly Azure Active Directory).
The article leads you through the following process:

1. Register a new app with your Entra ID tenant.
2. Assign access rights for the new app in Azure Storage using the Storage Blob Data Contributor role.
3. In {{ productName }}, connect to Azure Storage using the Microsoft Entra ID method.

### App Registration

Follow the steps below to register a new app with your Entra ID tenant:

1. Open the Azure portal and navigate to **App Registrations**.
2. Click **[New registration]** to register a new app with your Entra ID tenant. <br>
![azure-app-new-registration](../assets/images/articles/xu/azure-storage/azure-app-new-registration.png){:class="img-responsive"}
3. Enter the name of the application.
4. In the Redirect UI section, select *Public Client /native (mobile and desktop)* and assign `https://login.microsoftonline.com/common/oauth2/nativeclient` as the redirect URI.
5. Click **Register**.<br>
![azure-app-registration](../assets/images/articles/xu/azure-storage/azure-app-registration.png){:class="img-responsive"}
6. Open the new application and navigate to **API Permissions > Add a permission > Azure Storage**.<br>
![azure-app-permission](../assets/images/articles/xu/azure-storage/azure-app-permission.png){:class="img-responsive"}
7. Click **Grant admin consent**.<br>
![azure-app-grant-permission](../assets/images/articles/xu/azure-storage/azure-app-grant-permission.png){:class="img-responsive"}

### Access Rights in Azure Storage

Follow the steps below to assign access rights for the [new Azure app](#app-registration) in Azure Storage using the Storage Blob Data Contributor role:

1. Open the Azure portal and navigate to **Access Control (IAM)**. 
2. Click **[Add role assignment]**.<br>
![azure-storage-role-assignment](../assets/images/articles/xu/azure-storage/azure-storage-role-assignment.png){:class="img-responsive"}
3. Select the **Storage Blob Data Contributor** role and click **[Next]**. <br>
![azure-storage-role](../assets/images/articles/xu/azure-storage/azure-storage-role.png){:class="img-responsive"}
4. Click **+ Select members** and add the new Azure app created in [App Registration](#app-registration) to the members.<br>
![azure-storage-members](../assets/images/articles/xu/azure-storage/azure-storage-members.png){:class="img-responsive"}
5. Click **[Next]** to continue, then click **[Review + assign]** to assign the access rights.<br>
![azure-storage-review+assign](../assets/images/articles/xu/azure-storage/azure-storage-review+assign.png){:class="img-responsive"}

### Connect to Azure Storage

Follow the steps below to connect {{ productName }} to the Azure Storage destination using Authentication via Microsoft Entra ID:

1. Open {{ productName }} and create a new Azure Storage destination or edit an existing destination.
2. Select the connection type **Azure active directory**. 
3. Enter the name of your storage account.<br>
![azure-destination-in-xu](../assets/images/articles/xu/azure-storage/azure-destination-in-xu.png){:class="img-responsive"}
4. Copy and paste the Application (client) ID and the Directory (tenant) ID from the Azure app created in [App Registration](#app-registration).<br>
![azure-info](../assets/images/articles/xu/azure-storage/azure-info.png){:class="img-responsive"}
5. Click **[Connect]**. The window "Azure OAuth 2.0" opens.
6. When prompted, provide the credentials of a Microsoft service user for the OAuth connection. 
Make sure that the user meets the following requirements:
	- The user has the 'Storage Blob Data Contributor' or 'Owner' role in Azure Storage.
	- The user does not use Multifactor Authentication (MFA) as extractions fail when the MFA of the user expires.
7. Click **[Accept]** to grant the permission to access data in Microsoft. <br>
![azure-auth-in-xu](../assets/images/articles/xu/azure-storage/azure-auth-in-xu.png){:class="img-responsive"}
8. If the connection is successful, a "Connection successful" message is displayed in a pop-up window.

