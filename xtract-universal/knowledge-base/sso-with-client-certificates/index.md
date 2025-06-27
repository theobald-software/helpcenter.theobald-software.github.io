The following article describes the process of setting up Single-Sign-On (SSO) via Secure Network Communication (SNC) with SAP client certificates. For more information on using SSO with Xtract Universal (XU), see [Documentation: SAP Single-Sign-On](../../documentation/sap-connection/#single-sign-on-sso).

### Requirements

The usage of *SSO Certificate* requires the correct characteristics of the architecture:

- Implement SAP SSO with X.509 certificates without Secure Login Server, see [SAP-Documentation: Authentication Methods without Secure Login Server](https://help.sap.com/viewer/df185fd53bb645b1bd99284ee4e4a750/LATEST/en-US/7c45fe620ab9469083f7ab50a9008c37.html).
- Implement Microsoft Certificate Store and Active Directory Certificate Templates for SAPGUI/RFC, see [Microsoft TechNet: Certificate Template](https://social.technet.microsoft.com/wiki/contents/articles/53249.active-directory-certificate-services-enterprise-ca-architecture.aspx#Certificate_Template).
- Set up an enrollment agent for Xtract Universal in AD, see [Microsoft TechNet: Establish Restricted Enrollment Agents](https://social.technet.microsoft.com/wiki/contents/articles/10942.ad-cs-security-guidance.aspx#Establish_Restricted_Enrollment_Agents).
- Install the SAP Secure Login Client on the server that runs Xtract Universal, see [SAP-Documentation: Secure Login Client](https://help.sap.com/viewer/8ac26ac20064447ba9e65b18e1bb747e/Cloud/en-US/b304e57f6393461dafd7affc2760b05b.html).\
  The Secure Login Client ensures that the correct SNC library is available for *SSO Certificate*. This library is used to open the SAP connection.
- The Xtract Universal service must run under a Windows AD Service account, see [Run the Xtract Universal Service under a Windows Service Account](../../documentation/server/service-account/).
- Set up access restrictions for the Xtract Universal Designer and the XU server, see [Restrict Access to Windows AD Users (Kerberos Authentication)](../../documentation/access-restrictions/restrict-server-access/#restrict-access-to-windows-ad-users-kerberos-authentication).

### Process

The following graphic illustrates the process of authentication via *SSO Certificate*:

1. The user of the BI tool (caller) triggers an extraction by calling the XU webservice of your Xtract product. The caller uses their Active Directory identity to authenticate against the XU webservice via HTTPS and SPNEGO.
1. The XU server checks if a certificate for the caller is available in the Windows Certificate Store. If no certificate is available for the caller, a new certificate is issued by the Windows enrollment agent.
   1. The XU server requests the Client certificate from the Windows Certificate Store via the Windows API. If a certificate is available, the process continues with step 3. If no certificate is available steps 2b) to 2e) are executed.
   1. The XU server requests an enrollment agent certificate from the Windows Certificate Store via the Windows API. The enrollment agent certificate can be used to issue client certificates.
   1. The XU server receives the enrollment agent certificate from the Windows Certificate Store.
   1. If the requested certificate from 2a) is not found in the Windows Certificate Store, the XU server enrolls a new client certificate for the caller using the enrollment agent certificate.
   1. The Windows Certificate Store receives the new client certificate from the Active Directory Services via MSRPC.
1. The XU server receives the client certificate of the caller from the Windows Certificate Store.
1. The XU server configures the SAP Secure Login Client via the Windows Registry.
1. The Secure Login Client receives the caller's client certificate as specified by the XU server in step 4 from the Windows Certificate Store.
1. The Secure Login Client uses the client certificate of the caller to authenticate the caller's identity via SNC against SAP.
1. The XU server extracts data with the identity and privileges of the caller.
1. The XU server loads the extracted data from 7 to the tool that triggered the extraction.

### Setting up SSO and SNC with Client Certificates

Create a new SAP source system in Xtract Universal to set up SSO with client certificates:

1. Navigate to **[Server > Manage Sources]** in the main menu of the Designer. The window "Manage Sources" opens.
1. Click **[Add]** to create a new SAP source.
1. Open the tab *General* and enter the connection details of your SAP system.
1. Open the tab *Authentication* and activate the option **SNC**.
1. Enter the path to the 64bit version of the SAP Crypto Library in the field *SNC library*, e.g., `C:\Program Files\SAP\FrontEnd\SecureLogin\lib\sapcrypto.dll`. The SAP Crypto Library is installed as part of the SAP Secure Login Client.
1. Enter the SNC partner name of the SAP system in the field **SNC partner name**. This is the same partner name as the SNC name used to set up the SAP GUI.
1. Activate the option **Enroll certificate on behalf of caller (Certificate SSO)**.
1. Enter the technical name of the Active Directory Certificate Template used to authenticate SAP users.
1. Enter the thumbprint of the certificate of the enrollment agent. If you don't know the name or thumbprint, consult the IT department that manages the Active Directory Certificate Services.
1. Click **[Test Designer Connection]** to test your connection settings.
1. Click **[OK]** to confirm your input.

Tip

Create new extractions in the test environment with an SAP connection that uses **Plain Authentication**. Change the SAP source when moving the extraction to the productive environment.

______________________________________________________________________

#### Related Links

- [SAP Help: Secure Network Communications](https://help.sap.com/doc/saphelp_nw73ehp1/7.31.19/en-US/e6/56f466e99a11d1a5b00000e835363f/content.htm?no_cache=true)
- [SAP Help: Secure Login Client](https://help.sap.com/viewer/8ac26ac20064447ba9e65b18e1bb747e/Cloud/en-US/b304e57f6393461dafd7affc2760b05b.html)
- [SAP Help: Logging on with Secure Login Client Using SNC](https://help.sap.com/viewer/df185fd53bb645b1bd99284ee4e4a750/3.0/en-US/68a6caca798e4adbba5608fb69ea6398.html)
