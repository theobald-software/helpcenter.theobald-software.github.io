The following article describes the process of running extractions for [pull destinations](../../documentation/destinations/) using Single-Sign-On (SSO) with SAP Logon-Ticket. For more information on using SSO with Xtract Universal (XU), see [Documentation: SAP Single-Sign-On](../../documentation/sap-connection/#single-sign-on-sso).

### Requirements

- The Xtract Universal server must be set up to use HTTPS, see [SSO with Kerberos SNC](../sso-with-kerberos-snc/#activation-of-https).
- The Xtract Universal service must run under an [XU Service Account](../../documentation/server/service-account/).
- The XU service account must be configured for *Constrained Delegation* to the SPN of the AS Java in AD.
- An Application Server Java (AS Java) must be set up as a Ticket Issuing System, see [SAP Help: Configuring the AS Java to Issue Logon Tickets](https://help.sap.com/doc/saphelp_nw75/7.5.5/EN-US/4a/412251343f2ab1e10000000a42189c/frameset.htm).
- The AS Java must be configured for SPNEGO/Kerberos.
- A mapping between Windows AD users and SAP identities must be configured in the AS Java. The AS Java must be configured to generate SAP Logon Tickets. Consult with your SAP Basis team for more information.
- The SAP AS ABAP must be configured to trust SAP Logon Tickets from the AS Java, see [SAP Help: Using Logon Tickets with AS ABAP](https://help.sap.com/doc/saphelp_nw75/7.5.5/en-US/9d/472b83bbed4915b84b30e539c625ae/frameset.htm).

### Process of Authentication

The following graphic illustrates the process of calling an extraction with SSO via Ticket Issuer:

1. The BI tool user starts an extraction by calling the XU web service. They authenticate against the XU web service with their Active Directory identity, using HTTPS and SPNEGO.
1. The XU server contacts the Active Directory Domain Controller via Kerberos and tries to impersonate the web service caller (BI tool user) against the SAP AS Java (ticket issuer).
1. The XU server receives a Kerberos ticket from the DC that allows it to impersonate the caller against the AS Java.
1. The XU server uses the Kerberos ticket from 3. to authenticate against the AS Java as the caller via HTTPS and SPNEGO.\
   Prerequisite: The AS Java has been configured for SPNEGO/Kerberos.
1. The AS Java maps the caller's AD identity to an SAP user and generates an SAP Logon Ticket for this SAP user. The AS Java sends the SAP Logon Ticket to the XU server via HTTPS as the value of the MYSAPSSO2 cookie.
1. The XU server takes the SAP Logon Ticket that it has received from the AS Java and uses it to authenticate against the AS ABAP as the caller via RFC.
1. The XU server extracts data from the AS ABAP using the identity and privileges of the caller (BI tool user) via RFC.
1. The XU server sends the extracted data from 7. to the caller.

______________________________________________________________________

#### Related Links

- [Set Up an XU Service Account](../../documentation/server/service-account/)
- [SAP Help: Kerberos and SAP NetWeaver AS for Java](https://help.sap.com/doc/saphelp_nw75/7.5.5/EN-US/4c/8a4d292e2849a8b7cbd229be5c94a5/frameset.htm)
- [SAP Help: Using Logon Tickets with AS ABAP](https://help.sap.com/doc/saphelp_nw75/7.5.5/EN-US/d0/dc33c460a243929b7ec120f55af101/frameset.htm)
- [Youtube-Tutorial: Kerberos-Based Single Sign-On to Application Server Java Unlisted](https://www.youtube.com/watch?v=GRIkarGsU5U)
