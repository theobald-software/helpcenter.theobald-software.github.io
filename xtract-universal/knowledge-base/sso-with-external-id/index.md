The following article shows how to set up Single Sign-On (SSO) with Secure Network Communication (SNC) and External ID.\
*SSO with External ID* uses a Personal Security Environment (PSE) to create a trust relationship between the SAP application server and the service account that runs Xtract Universal. This allows Xtract Universal to impersonate any SAP user.

### Requirements

The usage of *SSO with External ID* requires:

- The Xtract Universal service must run under a Windows AD Service account, see [Run the Xtract Universal Service under a Windows Service Account](../../documentation/server/service-account/).
- Set up access restrictions for the Xtract Universal Designer and the XU server, see [Restrict Access to Windows AD Users (Kerberos Authentication)](../../documentation/access-restrictions/restrict-server-access/#restrict-access-to-windows-ad-users-kerberos-authentication).
- Windows AD users must be mapped to SAP users in the SAP table USRACL, see [SAP Help: User Authentication and Single Sign-On](https://help.sap.com/docs/SAP_NETWEAVER_750/e815bb97839a4d83be6c4fca48ee5777/e54344b6d24a05408ca4faa94554e851.html?locale=en-US).
- The SAP CommonCryptoLib must be installed on the machine that runs Xtract Universal, see [SAP Note 1848999](https://launchpad.support.sap.com/#/notes/1848999).\
  Copy the library (sapcrypto.dll) and the command line tool (sapgenpse.exe) to a local directory, e.g. `C:\PSE\`. For more information, see [SAP Help: Downloading and Installing the SAP Cryptographic Library](https://help.sap.com/docs/SAP_IDENTITY_MANAGEMENT/4773a9ae1296411a9d5c24873a8d418c/3d4ece540ae64e30997498025e37f686.html?locale=en-US).
- The environment variables SECUDIR and SNC_LIB must be set to the PSE directory that contains the SAP CommonCryptoLib.

For more information on PSE, see [SAP Help: Creating PSEs and Maintaining the PSE Infrastructure](https://help.sap.com/doc/saphelp_nw73ehp1/7.31.19/en-us/59/6b653a0c52425fe10000000a114084/frameset.htm).

### The Process

SSO with External ID uses an X.509 certificate & PSE to create a trust relationship between the SAP application server and the service account that runs Xtract Universal. This allows Xtract Universal to impersonate any SAP user.

1. Users authenticate themselves against Xtract Universal via Active Directory (Kerberos) and request data from SAP.
1. Xtract Universal opens an RFC connection via SNC and uses PSE & External ID for authentication.
1. Xtract Universal reads the SAP table USRACL to determine the SAP user that is mapped to the Active Directory user from step 1.
1. Xtract Universal then impersonates the mapped SAP user to request the SAP data via SNC.
1. Xtract Universal retrieves the requested SAP data with the privileges of the caller.
1. Xtract Universal loads the extracted SAP data to the tool that triggered the extraction.

### Setup in SAP

1. Use the SAPGENPSE command line tool to generate an X.509 certificate for the Windows service account that runs Xtract Universal.\
   Use the following command to create the certificate:

   ```console
   sapgenpse gen_pse -p theo-xu.pse

   ```

   The distinguished name of the PSE owner can be the fully qualified hostname of the Xtract Universal server, e.g., `CN=xuserver.example.com`.

1. Use the the following command to export the certificate:

   ```console
   sapgenpse export_own_cert -v -p theo-xu.pse -o theo-xu.crt

   ```

1. Use SAP transaction STRUST to add the certificate to the list of trusted PSE certificates, see [SAP Help: Adding Certificates to PSE Certificate Lists](https://help.sap.com/docs/SAP_NETWEAVER_750/280f016edb8049e998237fcbd80558e7/798e9421e00b4dc1ade3d4199ac60837-35.html?locale=en-US).

1. Use SAP transaction SNC0 to create an access control list item that allows RFC and external IDs for the Common Name (CN) of the certificate created in step 1.

1. Use SAP transaction STRUST to export the server certificate of the SAP server, see [SAP Help: Exporting the AS ABAP's Public-Key Certificate](https://help.sap.com/saphelp_SNC700_ehp01/helpdata/en/47/d84e3c719d1742e10000000a11405a/frameset.htm).

1. Copy the exported server certificate to the PSE directory of the machine that runs Xtract Universal.

1. Use the SAPGENPSE command line tool to import the server certificate to the client PSE. Example:

   ```console
   sapgenpse maintain_pk -v -a server.crt -p theo-xu.pse

   ```

1. Use the following command to create a credentials file (cred_v2), see [SAP Help: Creating the Server's Credentials Using SAPGENPSE](https://help.sap.com/saphelp_snc70/helpdata/en/32/ce2e3ad962a51ae10000000a11402f/frameset.htm).

   ```console
   sapgenpse seclogin -p theo-xu.pse –O SAPServiceUser

   ```

   The credentials file gives Xtract Universal access to the PSE without providing the password for the PSE.

The PSE directory should now contain the following files:

- the client PSE `theo-xu.pse`
- the client certificate `theo-xu.crt`
- the server certificate that was exported from your SAP system `[server].crt`
- the credentials file `cred_v2`

### Setup in Xtract Universal

Create a new SAP source system in your Xtract Universal to set up SSO with External ID:

1. Navigate to **[Server > Manage Sources]** in the main menu of the Designer. The window "Manage Sources" opens.
1. Click **[Add]** to create a new SAP source.
1. Open the tab *General* and enter the connection details of your SAP system.
1. Open the tab *Authentication* and activate the option **Secure Network Communications (SNC)**.
1. Enter the name of an SAP user in the field **User** for the initial login with Xtract Universal.\
   This user must be a technical user (SAP user with security policy set to *Technical User*) and must have privileges to read the SAP table USRACL via the function module RFC_READ_TABLE.
1. Enter the complete path to the SAP cryptographic library in the field **SNC Library**, e.g. `C:\PSE\sapcrypto.dll`.
1. Enter the SPN of the SAP service account in the field **SNC partner name**. Use the following notation: `p:[SPN]@[Domain-FQDN-Uppercase]`.
1. Enable the option **SSO - Log in as caller via External ID**.
1. Click **[Test Connection]** to verify your connection settings.
1. Click **[OK]** to save your changes.

______________________________________________________________________

#### Related Links

- [Documentation: SAP Single-Sign-On](../../documentation/sap-connection/#single-sign-on-sso)
- [Documentation: Run the Xtract Universal Service under a Windows Service Account](../../documentation/server/service-account/).
- [SAP Help: Creating PSEs and Maintaining the PSE Infrastructure](https://help.sap.com/doc/saphelp_nw73ehp1/7.31.19/en-us/59/6b653a0c52425fe10000000a114084/frameset.htm)
