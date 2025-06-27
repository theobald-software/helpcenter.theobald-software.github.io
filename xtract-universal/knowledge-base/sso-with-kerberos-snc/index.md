The following article describes the required steps for setting up Single Sign-On (SSO) with Secure Network Communication (SNC) and Kerberos encryption.

Note

SAP officially does not support the Kerberos Wrapper Library (gx64krb5.dll) anymore.

Warning

**Single Sign-On availability.**\
ABAP application server has to run on a Windows OS and SNC with Kerberos encryption setup on SAP.

### Requirements

- The SAP ABAP application server runs under a Windows operating system.
- The BI client (which calls the extraction) runs under Windows.
- The SAP Kerberos Wrapper Library (gsskrb5) is used as the SNC solution.

### "Double Hop" Issue

SNC solution must support the Windows credentials being passed on by Xtract Universal. Since Active Directory is based on Kerberos, a "Double Hop" issue may occur. Here is a possible solution to the "Double Hop" issue:

For security reasons, Kerberos does not allow credentials to be passed on. But there are Kerberos extensions from Microsoft (S4U extensions) that allow credentials passing on. These extensions are also known as "constrained delegation". Because the Kerberos Wrapper Library uses the Microsoft extensions for Kerberos to work around the "Double Hop" issue, it is only available for Windows. It therefore only works with SAP application servers under Windows and clients under Windows.

Unlike the Kerberos Wrapper Library (gsskrb5) from SAP (according to SAP), SAP's Common Crypto Library does not explicitly support credentials to be passed on. The Kerberos Wrapper Library (gsskrb5) used by multiple customers of Theobald Software.

When using an SNC solution from a third-party vendor, use either the Kerberos Wrapper Library or a corresponding solution of the third-party vendor.

### Activation of HTTPS

1. Enable access control protocol HTTPS within the tab *Web Server* settings.
1. Reference an existing [X.509 certificate](../../documentation/access-restrictions/install-x.509-certificate/) .
1. Click **[OK]** to confirm .

Make sure to check the default ports, e.g., *8165* in Xtract Universal.

### Configuration of Windows AD Service Account

Using SSO with Kerberos SNC, the Xtract Universal service must run under a dedicated service account.

Note

As of Xtract Universal version 5.0 SAP passwords are encrypted with a key that is derived from the Windows account that runs the XU service. The passwords can only be accessed from the same service account, when restoring a backup or moving the files to a different machine. If the service account changes, passwords need to be re-entered manually.

### Server Settings

Warning

**Incompatible library.**\
Xtract Universal runs on 64bit OS only. Kerberos Wrapper Library gx64krb5.dll(64-Bit version) is required.\
Download `gx64krb5.dll` from [SAP Note 2115486](https://launchpad.support.sap.com/#/notes/2115486).

1. Copy the Kerberos Wrapper Library to the file system, e.g., to `C:\SNC\gx64krb5.dll` of the machine, where the service is running.

1. Place the downloaded .dll file on each machine, where the Designer is running.

1. Open "Computer Management" by entering the following command: `compmgmt.msc`.

1. Under **Local Users and Groups** select **Groups > Administrators**.

1. Click **[Add]** to add the service account to the local admin group .

1. Open "Local Security policy" by entering the following command: `secpol.msc`.

1. Select **[Local Policies > User Rights Assignment]**:

   - Act as part of the operating system
   - Impersonate a client after authentication

1. Change the registry settings of the server machine:

   | **Field** | **Registry Entry** | | --- | --- | | SubKey | HKEY_LOCAL_MACHINE\\SOFTWARE\\SAP\\gsskrb5 | | Entry | ForceIniCredOK | | Type | REG_DWORD | | Value | 1 |

### SAP Source Settings

Note

An existing [SAP connection](../../documentation/sap-connection/) to a Single Application Server or Message Server is the prerequisite for using SSO with SNC.

1. In the main menu of the Xtract Universal Designer, navigate to **[Server > Manage Sources]**. The window "Source Details" opens.
1. Select an existing SAP source and click **[Edit]** (pencil symbol).
1. Enable the **SNC** option in the subsection *Authentication*.
1. Enable the checkbox *Impersonate authenticated caller (SSO)* .
1. Enter the complete path of the Kerberos library in the field *SNC library* e.g., `C:\SNC\gx64krb5.dll` .
1. Enter the SPN of the SAP service account in the field *Partner name* . Use the following notation: `p:[SPN]@[Domain-FQDN-Uppercase]`.
1. Click **[Test Connection]** to verify your connection settings.
1. Click **[OK]** to confirm.

Note

The SAP Logon Pad SNC settings for partner name differ from the ones used in Xtract Universal. SAP Logon Pad uses the UPN of the SAP service accounts and Xtract Universal uses the Service Principal Name (SPN). Use the following notation: *p:[SAP Service Account]@[domain]*. SPN's are case sensitive in the SNC partner name.

### SNC Activation in SAP

In SAP, apply the Kerberos SNC settings as described in the [SAP Help: Single Sign-On with Microsoft Kerberos SSP](https://help.sap.com/viewer/e815bb97839a4d83be6c4fca48ee5777/7.5.9/EN-US/440ebf6c9b2b0d1ae10000000a114a6b.html).

______________________________________________________________________

#### Related Links

- [Documentation: X.509 certificate](../../documentation/access-restrictions/install-x.509-certificate/)
- [Documentation: Run the Xtract Universal Service under a Windows Service Account](../../documentation/server/service-account/).
