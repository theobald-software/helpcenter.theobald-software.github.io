
The following article describes how to establish an SNC connection to an SAP source system. 

The depicted approach uses an X.509 certificate that provides the logon data of the Windows AD user. 
The correctness of this X.509 certificate is ensured via the company's internal certification authority (ca).

### Workflow

<div class="workflow" markdown>

1. Upon connection start, the Secure Login Client retrieves the SNC name from the SAP NetWeaver AS ABAP.
2. The Secure Login Client uses the authentication profile for this SNC name.
3. The user unlocks the security token, for example, by entering the PIN or password.
4. The Secure Login Client receives the X.509 certificate from the user security token. 
5. The Secure Login Client provides the X.509 certificate for single sign-on and secure communication between SAP GUI or Web GUI and the AS ABAP.
6. The user is authenticated and the communication is secured.

</div>

!!! tip
	The configuration of the X.509 certificate should be implemented by the network & SAP Basis team and requires basic knowledge in this area.

### Requirements

The following system settings are a prerequisite for using this SNC solution:

- Install the [Secure Login Client](https://help.sap.com/viewer/df185fd53bb645b1bd99284ee4e4a750/3.0/en-US/da610fd072e4409baa8b6a96973b5c67.html).
- The SAP application server is configured and activated for Secure Network Communication (SNC).
- The SNC standard library *sapcryptolib* is used as the SNC solution.
- The following SNC parameters are configured:

SNC parameter | Value | Example
------------ | ------------- | ----------
snc/gssapi_lib | Path and file name where the SAP Cryptographic Library is located. | *$(DIR_EXECUTABLE)\sapcrypto.dll*
snc/identity/as | Application server's SNC name Syntax: p:\<Distinguished_Name\> <br> The Distinguished Name part must match the Distinguished Name that you specify when creating the SNC PSE.| *p:CN=saperp.theobald.local*

### Step-by-Step Guide

Follow the steps below to set up the SNC connectivity ins SAP:

1. Generate the certificate for the application server and AD-user context from common Certificate Authority (ca).<br>
![X.509 Certificate Details](site:assets/images/articles/x509-certificate_example.png){:class="img-responsive"}

	!!! note
		The X.509 certificate is available when placed in folder **Certmgr > Personal > Certificates** within Windows certificate store (user).

2. Convert the .pfx file to SAP PSE format e.g., `sapgenpse.exe import_p12 -p cert.pse cert.pfx`.
3. Import the created PSE file via **TA STRUST > Edit mode > PSE Import > PSE Save as SNC Libcrypto**.
4. Edit the SNC configuration of the corresponding SAP user via transaction SU01 :number-1: > **SNC** :number-2: > **SNC Name** :number-3: = p:\<Full Distinguished_Name\>, e.g., `p:EMAIL="RandomUser@domain",CN="Random User",OU="Users",OU="TheobaldSoftware",DC="theobald",DC="local"`.<br>
![SNC User Settings](site:assets/images/articles/snc_user_settings.png){:class="img-responsive"}
5. Set up SNC authentication in the {{ productName }} SAP connection settings{% if product=="xtract-universal" or product=="board-connector" %}, see [Configure SNC in the SAP Source](../documentation/sap-connection/snc-authentication.md/#configure-snc-in-the-sap-source){% endif %}.

****
#### Releated Links
{% if product=="xtract-universal" or product=="board-connector" %}- [Certificate Renewal](certificate-renewal.md){% endif %}
- [SAP Help: Workflow with X.509 Certificate without Secure Login Server](https://help.sap.com/viewer/df185fd53bb645b1bd99284ee4e4a750/3.0/en-US/06d9e59a0fd44aa4aa082ffad7d618e3.html)
- [SAP Help: Secure Network Communications (SNC)](https://help.sap.com/doc/saphelp_nw70/7.0.31/en-us/e6/56f466e99a11d1a5b00000e835363f/content.htm?no_cache=true)
- [SAP Help: Configuring SNC: External Programs AS ABAP Using RFC ](https://help.sap.com/doc/saphelp_nwpi71/7.1/en-US/d9/e8a740bbaa4d8f8bee6f7b173bd99f/content.htm?loaded_from_frameset=true)
- [SAP Help: Setting the SNC Profile Parameters](https://help.sap.com/doc/saphelp_nw73ehp1/7.31.19/en-US/19/164442c1a1c353e10000000a1550b0/content.htm?no_cache=true)
- [SAP Help: Configuring SAP GUI and SAP Logon for Single Sign-On](https://help.sap.com/doc/saphelp_nw73ehp1/7.31.19/en-US/44/0ea40dc6970d1ce10000000a114a6b/content.htm?no_cache=true)
- [SAP Help: Secure Login Client](https://help.sap.com/viewer/df185fd53bb645b1bd99284ee4e4a750/3.0/en-US/ba21970855064e54a9246b6c6de67fb2.html)
- [SAP Additional Content: List of SNC Error Codes](https://wiki.scn.sap.com/wiki/display/Security/List+of+SNC+Error+Codes)
