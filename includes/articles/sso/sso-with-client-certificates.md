
<!---
only in Xu and BC
-->

The following article describes the process of setting up Single-Sign-On (SSO) via Secure Network Communication (SNC) with SAP client certificates. 
For more information on using SSO with {{ productName }} ({{ Abbr }}), see [Documentation: SAP Single-Sign-On](../documentation/sap-connection/index.md/#single-sign-on-sso).

### Requirements

The usage of *SSO Certificate* requires the correct characteristics of the architecture:
- Implement SAP SSO  with X.509 certificates without Secure Login Server, see [SAP-Documentation: Authentication Methods without Secure Login Server](https://help.sap.com/viewer/df185fd53bb645b1bd99284ee4e4a750/LATEST/en-US/7c45fe620ab9469083f7ab50a9008c37.html).
- Implement Microsoft Certificate Store and Active Directory Certificate Templates for SAPGUI/RFC, see [Microsoft TechNet: Certificate Template](https://social.technet.microsoft.com/wiki/contents/articles/53249.active-directory-certificate-services-enterprise-ca-architecture.aspx#Certificate_Template).
- Set up an enrollment agent for {{ productName }} in AD, see [Microsoft TechNet: Establish Restricted Enrollment Agents](https://social.technet.microsoft.com/wiki/contents/articles/10942.ad-cs-security-guidance.aspx#Establish_Restricted_Enrollment_Agents).
- Install the SAP Secure Login Client on the server that runs {{ productName }}, see [SAP-Documentation: Secure Login Client](https://help.sap.com/viewer/8ac26ac20064447ba9e65b18e1bb747e/Cloud/en-US/b304e57f6393461dafd7affc2760b05b.html).<br>
The Secure Login Client ensures that the correct SNC library is available for *SSO Certificate*.
This library is used to open the SAP connection.
- The {{ productName }} service must run under a Windows AD Service account, see [Run the {{ productName }} Service under a Windows Service Account](../documentation/server/service-account.md).
- Set up access restrictions for the {{ productName }} Designer and the {{ Abbr }} server, see [Restrict Access to Windows AD Users (Kerberos Authentication)](../documentation/access-restrictions/restrict-server-access.md/#restrict-access-to-windows-ad-users-kerberos-authentication).<br>

### Process

The following graphic illustrates the process of authentication via *SSO Certificate*:

![SSO-Certificate](../assets/images/articles/sso/{{ abbr }}/sso-certificate.png){:class="img-responsive"}

1. The user of the BI tool (caller) triggers an extraction by calling the {{ Abbr }} webservice of your Xtract product.
The caller uses their Active Directory identity to authenticate against the {{ Abbr }} webservice via HTTPS and SPNEGO.
2. The {{ Abbr }} server checks if a certificate for the caller is available in the Windows Certificate Store.
If no certificate is available for the caller, a new certificate is issued by the Windows enrollment agent.<br>
	1. The {{ Abbr }} server requests the Client certificate from the Windows Certificate Store via the Windows API.
	If a certificate is available, the process continues with step 3.
	If no certificate is available steps 2b) to 2e) are executed.<br>
	2. The {{ Abbr }} server requests an enrollment agent certificate from the Windows Certificate Store via the Windows API.
	The enrollment agent certificate can be used to issue client certificates.<br>
	3. The {{ Abbr }} server receives the enrollment agent certificate from the Windows Certificate Store.<br>
	4. If the requested certificate from 2a) is not found in the Windows Certificate Store, the {{ Abbr }} server enrolls a new client certificate for the caller using the enrollment agent certificate.<br>
	5. The Windows Certificate Store receives the new client certificate from the Active Directory Services via MSRPC.
3. The {{ Abbr }} server receives the client certificate of the caller from the Windows Certificate Store.
4. The {{ Abbr }} server configures the SAP Secure Login Client via the Windows Registry.
5. The Secure Login Client receives the caller's client certificate as specified by the {{ Abbr }} server in step 4 from the Windows Certificate Store.
6. The Secure Login Client uses the client certificate of the caller to authenticate the caller's identity via SNC against SAP.
7. The {{ Abbr }} server extracts data with the identity and privileges of the caller.
8. The {{ Abbr }} server loads the extracted data from 7 to the tool that triggered the extraction.

### Setting up SSO and SNC with Client Certificates

Create a new SAP source system in {{ productName }} to set up SSO with client certificates:
1. Navigate to **[Server > Manage Sources]** in the main menu of the Designer. The window "Manage Sources" opens.
2. Click **[Add]** to create a new SAP source.
3. Open the tab *General* and enter the connection details of your SAP system. <br>
![SAP-Source-Details](../assets/images/articles/sso/sap-source-details.png)
4. Open the tab *Authentication* and activate the option **SNC**.<br>
![sso-certificate-auth](../assets/images/articles/sso/sso-certificate-auth.png){:class="img-responsive"}
5. Enter the path to the 64bit version of the SAP Crypto Library in the field *SNC library*, e.g., `C:\Program Files\SAP\FrontEnd\SecureLogin\lib\sapcrypto.dll`.
The SAP Crypto Library is installed as part of the SAP Secure Login Client.
6. Enter the SNC partner name of the SAP system in the field **SNC partner name**. 
This is the same partner name as the SNC name used to set up the SAP GUI.
7. Activate the option **Enroll certificate on behalf of caller (Certificate SSO)**.<br>
![sso-certificate-auth2](../assets/images/articles/sso/sso-certificate-auth2.png){:class="img-responsive"}
8. Enter the technical name of the Active Directory Certificate Template used to authenticate SAP users.
9. Enter the thumbprint of the certificate of the enrollment agent.
If you don't know the name or thumbprint, consult the IT department that manages the Active Directory Certificate Services.
10. Click **[Test Designer Connection]** to test your connection settings.
11. Click **[OK]** to confirm your input.

!!! tip
	Create new extractions in the test environment with an SAP connection that uses **Plain Authentication**.
	Change the SAP source when moving the extraction to the productive environment.

*****

#### Related Links
- [SAP Help: Secure Network Communications](https://help.sap.com/doc/saphelp_nw73ehp1/7.31.19/en-US/e6/56f466e99a11d1a5b00000e835363f/content.htm?no_cache=true)
- [SAP Help: Secure Login Client](https://help.sap.com/viewer/8ac26ac20064447ba9e65b18e1bb747e/Cloud/en-US/b304e57f6393461dafd7affc2760b05b.html)
- [SAP Help: Logging on with Secure Login Client Using SNC](https://help.sap.com/viewer/df185fd53bb645b1bd99284ee4e4a750/3.0/en-US/68a6caca798e4adbba5608fb69ea6398.html)
