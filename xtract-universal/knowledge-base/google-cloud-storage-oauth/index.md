The following article shows how to enable OAuth 2.0 for the google cloud storage destination.

Xtract Universal supports OAuth 2.0 for authentication with the Google servers. To enable the OAuth 2.0 protocol, configure an OAuth flow with the required access permissions to Xtract Universal.

Note

Google initially classifies third-party applications generally as unsafe and issues a warning. The verification process is optional. Official app verification involves ongoing charges.

Note

As of version 5.11.16 Xtract Universal also supports authentication via service account credentials, see [Documentation: Google Cloud Storage - Destination Details](../../documentation/destinations/google-cloud-storage/#destination-details).

### GCP console

The GCP console allows configuring of all resources and services. To get to the overview dashboard, navigate to the [Google Cloud Storage](https://cloud.google.com/storage) page and click **[Console]** or **[Go to console]**.

To access all settings and services use the navigation menu on the upper left side.

### Set Up OAuth 2.0

1. Open the GCP console. In the navigation menu, select **APIs & Services > Credentials**.
1. In the "Credentials" section select **Create Credentials > OAuth client ID**.
1. Click **[Configure consent screen]**. The "Configure consent screen" is processed with the OAuth flow that is started when a connection is established in the Xtract Universal Designer.
1. 1. If your account belongs to an organization, you can restrict the usage of Xtract Universal in combination with GCS to your organization. To do so, select **internal** in the *User Type* option . The restriction option is only available, if you are a [GSuite](https://gsuite.google.com/) user.
   1. Alternatively you can allow any user with access to the OAuth credentials to grant Xtract Universal the permission to write data to your GCS buckets. To do so, select **external** in the *User Type* option.
1. Click **[Create]** to continue .
1. In the "App information" section enter an app name of your choice.\
   **Support email** and **Developer contact information** are also mandatory fields. Click **[Save and continue]** to get to the next section.
1. In the following section click **[Add or remove scopes]**.\
   Xtract Universal needs read and write permissions for its operations, which are configured in the "Scopes" section.
1. Enter `https://www.googleapis.com/auth/devstorage.read_write` under **Manually add scopes** and click **[Add to table]**.
1. The newly added scope is the first entry in the table. Click **[Update]** to create the entry.
1. Click **[Continue]** when the "Verfification required" window is prompted.
1. Click **[Save and continue]** twice.
1. Click **[Back to dashboard]** to return to the dashboard.
1. Return to the "Credentials" menu, click **[Create credentials]** and select *OAuth client ID*.\
   Select *Desktop app* as application type , enter a name for the app .
1. Click **[Create]** .

Your OAuth client is now created.\
The **Client ID** and the **Client secret** are needed for the destination configuration in Xtract Universal, see [Documentation: Google Cloud Connection Settings](../../documentation/destinations/google-cloud-storage/#destination-details).

______________________________________________________________________

#### Related Links

- [Documentation: Google Cloud Storage Destination](../../documentation/destinations/google-cloud-storage/)
- [Google Cloud Storage Documentation: Cloud Storage-Authentifizierung](https://cloud.google.com/storage/docs/authentication)
- [Google Cloud Storage Documentation](https://cloud.google.com/storage/docs#docs)
