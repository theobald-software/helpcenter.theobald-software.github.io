---
title: SSO with SNC
description: SSO with SNC
---

Secure Network Communication (SNC) enables authentication and transport encryption between SAP systems and between SAP systems and third-party tools like Xtract Universal and Board Connector. 
For more information on SNC, see [SAP Help: SNC](https://help.sap.com/doc/saphelp_nw73ehp1/7.31.19/en-US/e6/56f466e99a11d1a5b00000e835363f/content.htm?no_cache=true).

When using SNC you can choose between the [NTLM](#ntlm) or the [Kerberos5](#kerberos) mechanism. 

### Prerequisites

The following DLLs from SAP need to be present in the `%SYSTEMROOT%\System32` directory of your system:

<div class="grid cards" markdown>

-   __For 32-bit:__

	---
	
    - NTLM: gssntlm.dll
	- Kerberos: gsskrb5.dll

-   __For 64-bit x86:__

    ---

    - NTLM:  gx64ntlm.dll
    - Kerberos: gx64krb5.dll
	
</div> 

The DLLs are available via the [SNOTE 2115486](http://service.sap.com/sap/support/notes/2115486). 

When using Kerberos authentication, apply the Kerberos SNC settings as described in the [SAP Help - Single Sign-On with Microsoft Kerberos SSP](https://help.sap.com/viewer/e815bb97839a4d83be6c4fca48ee5777/7.5.9/EN-US/440ebf6c9b2b0d1ae10000000a114a6b.html) to your SAP system. <br>

!!! note
    It is recommended to test the connection between SAP and the client before continuing.

### SNC in ERPConnect

The R3Connection object automatically determines the needed SNC DLL based on the settings of *SNCMechanism*. 
With the *SNCLibraryPath* property you can specify the path to the SNC DLL manually. 
In this case the automatic detection of the DLL is disabled and the setting for *SNCMechanism* are ignored.

If you specify the *SNCMechanism*, you can choose between the [NTLM](#ntlm) and the [Kerberos](#kerberos) mechanism.<br>
If the Kerberos authentication is not possible, NTLM is used automatically.
 
If you do not want to use the SNC properties to create a connection, set *SNCEnabled* to false. 
It disables all settings without changing the other SNC parameter. 

The following example codes show how to pass the necessary parameters for an SNC connection to an R3Connection object.


=== "SNC Mechanism"

    ```csharp linenums="1"
	using (R3Connection con = new R3Connection())
	{
		con.Host = "sap-erp-as05.example.com";
		con.SystemNumber = 7;
		con.Client = "800";
		con.Language = "DE";
		con.SNCSettings.Enabled = true;
		con.SNCSettings.PartnerName = "p:SAPServiceNSP@THEOBALD";
		con.SNCSettings.Mechanism = SNCMechanism.NTLM;
		con.SNCSettings.QualityOfProtection = SNCQualityOfProtection.Maximum;

		con.Open();
		// define your application
	}
	```

=== "Individual SNC DLL path"

    ```csharp linenums="1"
	using (R3Connection con = new R3Connection())
	{
		con.Host = "sap-erp-as05.example.com";
		con.SystemNumber = 7;
		con.Client = "800";
		con.Language = "DE";
		con.SNCSettings.Enabled = true;
		con.SNCSettings.PartnerName = "p:SAPServiceNSP@THEOBALD";
		con.SNCSettings.LibraryPath = @"C:\Windows\SysWOW64\sncgss32.dll";
		con.SNCSettings.QualityOfProtection = SNCQualityOfProtection.Maximum;

		con.Open();
		// define your application
	}
	```


!!! note
    As of ERP Connect version 4.2.3 you can set a security level with the property *QualityOfProtection*.

### NTLM 

NTLM (abbreviation for NT LAN Manager) is an authentication procedure for computer networks. <br>
NTLM performs the SSO authentication via a challenge-response authentication between the client and the server. 

For more information on NTLM, see [Microsoft Documentation - NTLM](https://docs.microsoft.com/en-us/windows-server/security/kerberos/ntlm-overview).

### Kerberos

The Kerberos method uses a Kerberos server to authenticate the client. <br>
The server creates so-called tickets and sends them to the client. 
The client authenticates itself with this ticket to the server.

For more information on Kerberos, see [Microsoft Documentation - Kerberos Authentication](https://docs.microsoft.com/en-us/windows-server/security/kerberos/kerberos-authentication-overview).

### Double Hop Problem

Double hop describes the passing of authentication information across two or more computers (hops).<br>
For technical reasons NTLM only works with one hop. 
For security reasons Kerberos transmits authentication data only in one hop by default, but it can be configured to send data over two or more hops.
Examples:

=== "Xtract PPV Server & PowerPivot on the same machine" 

	If you use Xtract PPV as the consumer of the SAP data, it has to run on the same computer that Xtract PPV Server and PowerPivot run on. 
	The domain controller and the SAP system can run on different computer. In this case you can also use NTML and Kerberos.

=== "Xtract PPV Server & PowerPivot on different machines" 

	If you use Xtract PPV as the comsumer for the SAP data and the Xtract PPV Server and PowerPivot run on different computers, you have 
	to use Kerberos which can be configured to handle the Double Hop Problem.
	For more information on the Kerberos configuration, see [Microsoft Techcommunity - Understanding Kerberos Double Hop](https://techcommunity.microsoft.com/t5/ask-the-directory-services-team/understanding-kerberos-double-hop/ba-p/395463).

For more information on the SSO configuration, see [SAP Help - Single Sign-On Configuration](https://help.sap.com/doc/saphelp_nw75/7.5.5/en-US/48/ca0fe42fbb5c97e10000000a42189d/content.htm?no_cache=true)

	
****
#### Related Links
- [SAP Help - Secure Network Communications (SNC)](http://help.sap.com/saphelp_nw70ehp1/helpdata/en/e6/56f466e99a11d1a5b00000e835363f/content.htm).
- [SAP Help - Single Sign-On](https://help.sap.com/viewer/e815bb97839a4d83be6c4fca48ee5777/7.5.9/en-US/89d115110d444d85a94dff7ffd0e2b7f.html)
