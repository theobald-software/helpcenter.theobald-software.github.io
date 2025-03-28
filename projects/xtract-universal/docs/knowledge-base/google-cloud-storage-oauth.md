---
title: Set Up OAuth 2.0 for the Google Cloud Storage Destination
description: Dynamic Runtime Parameter within KNIME Workflow
---

The following article shows how to enable OAuth 2.0 for the google cloud storage destination.

{{ productName }} supports OAuth 2.0 for authentication with the Google servers.
To enable the OAuth 2.0 protocol, configure an OAuth flow with the required access permissions to {{ productName }}.

!!! note
    Google initially classifies third-party applications generally as unsafe and issues a warning.
    The verification process is optional. Official app verification involves ongoing charges.


!!! note
    As of version 5.11.16 {{ productName }} also supports authentication via service account credentials, see [Documentation: Google Cloud Storage - Destination Details](../documentation/destinations/google-cloud-storage.md/#destination-details).

### GCP console
The GCP console allows configuring of all resources and services. 
To get to the overview dashboard, navigate to the [Google Cloud Storage](https://cloud.google.com/storage) page and click **[Console]** or **[Go to console]**. 

To access all settings and services use the navigation menu on the upper left side.

![xu-google-cloud-req-01](../assets/images/articles/xu/googlecloudstorage/xu-google-cloud-req-01.png){:class="img-responsive"}
 
 
### Set Up OAuth 2.0

1. Open the GCP console. In the navigation menu, select **APIs & Services > Credentials**.<br>
![xu-google-cloud-req-02](../assets/images/articles/xu/googlecloudstorage/xu-google-cloud-req-02.png){:class="img-responsive"}
2. In the "Credentials" section select **Create Credentials > OAuth client ID**.<br>
![xu-google-cloud-req-03](../assets/images/articles/xu/googlecloudstorage/xu-google-cloud-req-03.png){:class="img-responsive"}
3. Click **[Configure consent screen]**. The "Configure consent screen" is processed with the OAuth flow that is started when a connection is established in the {{ productName }} Designer.<br>
![xu-google-cloud-req-04](../assets/images/articles/xu/googlecloudstorage/xu-google-cloud-req-04.png){:class="img-responsive"}
4. 
	1. If your account belongs to an organization, you can restrict the usage of {{ productName }} in combination with GCS to your organization. 
	To do so, select **internal** in the *User Type* option :number-1:. The restriction option is only available, if you are a [GSuite](https://gsuite.google.com/) user. <br>
	2. Alternatively you can allow any user with access to the OAuth credentials to grant {{ productName }} the permission to write data to your GCS buckets. 
	To do so, select **external** in the *User Type* option.<br>
	![xu-google-cloud-req-05](../assets/images/articles/xu/googlecloudstorage/xu-google-cloud-req-05.png){:class="img-responsive"}
5. Click **[Create]** to continue :number-2:.
6. In the "App information" section enter an app name of your choice. <br>
**Support email** and **Developer contact information** are also mandatory fields. Click **[Save and continue]** to get to the next section. <br>
![xu-google-cloud-req-06](../assets/images/articles/xu/googlecloudstorage/xu-google-cloud-req-06.png){:class="img-responsive"}
7. In the following section click **[Add or remove scopes]**.<br>
{{ productName }} needs read and write permissions for its operations, which are configured in the "Scopes" section.<br>
![xu-google-cloud-req-08](../assets/images/articles/xu/googlecloudstorage/xu-google-cloud-req-08.png){:class="img-responsive"}
8. Enter `https://www.googleapis.com/auth/devstorage.read_write` under **Manually add scopes** and click **[Add to table]**.<br>
![xu-google-cloud-req-09](../assets/images/articles/xu/googlecloudstorage/xu-google-cloud-req-09.png){:class="img-responsive"}
9. The newly added scope is the first entry in the table. Click **[Update]** to create the entry. <br>
![xu-google-cloud-req-10](../assets/images/articles/xu/googlecloudstorage/xu-google-cloud-req-10.png){:class="img-responsive"}
10. Click **[Continue]** when the "Verfification required" window is prompted. <br>
![xu-google-cloud-req-11](../assets/images/articles/xu/googlecloudstorage/xu-google-cloud-req-11.png){:class="img-responsive"}
11. Click **[Save and continue]** twice. <br>   
![xu-google-cloud-req-12](../assets/images/articles/xu/googlecloudstorage/xu-google-cloud-req-12.png){:class="img-responsive"}
12. Click **[Back to dashboard]** to return to the dashboard.<br>
![xu-google-cloud-req-14](../assets/images/articles/xu/googlecloudstorage/xu-google-cloud-req-14.png){:class="img-responsive"}
13. Return to the "Credentials" menu, click **[Create credentials]** and select *OAuth client ID*. <br>
Select *Desktop app* as application type :number-1:, enter a name for the app :number-2:. <br>
![xu-google-cloud-req-15](../assets/images/articles/xu/googlecloudstorage/xu-google-cloud-req-15.png){:class="img-responsive"}
14. Click **[Create]** :number-3:.

Your OAuth client is now created. <br>
The **Client ID** and the **Client secret** are needed for the destination configuration in {{ productName }}, see [Documentation: Google Cloud Connection Settings](../documentation/destinations/google-cloud-storage.md/#destination-details).<br>
![xu-google-cloud-req-16](../assets/images/articles/xu/googlecloudstorage/xu-google-cloud-req-16.png){:class="img-responsive"}

*****
#### Related Links
- [Documentation: Google Cloud Storage Destination](../documentation/destinations/google-cloud-storage.md)
- [Google Cloud Storage Documentation: Cloud Storage-Authentifizierung](https://cloud.google.com/storage/docs/authentication)
- [Google Cloud Storage Documentation](https://cloud.google.com/storage/docs#docs)
