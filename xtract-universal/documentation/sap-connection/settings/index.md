This page contains an overview of the SAP connection settings in the window "Change Source".\
To open the server settings, navigate to **[Server] > [Manager Sources]** in the main window of the Designer and click **[]**.

## Source Type RFC

The source type **RFC** enables users to access SAP data using the RFC (Remote Function Call) protocol. The RFC connectivity supports connections to single application servers, message servers (Load Balancing) and public or private cloud instances (WebSocket).

For more information, see [SAP Help: RFC](https://help.sap.com/doc/saphelp_gbt10/1.0/en-US/48/88068ad9134076e10000000a42189d/frameset.htm).

### General

Certain input fields for the SAP connection vary depending on the selected connection method.

#### Host

Host name or IP address of the application server (Property Host).

#### Instance No.

A two-digit number between 00 and 99 (Property SystemNumber).

#### Client

A three-digit number of the SAP client between 000 and 999, e.g., 800.

#### Language

The logon language for the SAP system, e.g., EN for English or DE for German.

#### Message Server

Name or IP address of the message server (Property MessageServer).

#### System ID

Three-digit System ID (Property SID e.g., MSS).

#### Logon group

Property LogonGroup, usually *PUBLIC*.

#### Client

A three-digit number of the SAP client between 000 and 999, e.g., 800.

#### Language

The logon language for the SAP system, e.g., EN for English or DE for German.

#### Host

Name or IP address of the SAP (cloud) system.

#### Port

Port of the SAP (cloud) system, e.g., 443.

#### Library

Path to the SAP Cryptographic Library (download available in the SAP Service Marketplace).

#### Client PSE

Path to the client .pse file, see [Knowledge Base Article: Create a Client PSE to connect to SAP Cloud Systems](../../../knowledge-base/create-personal-security-environment/)

#### Client

A three-digit number of the SAP client between 000 and 999, e.g., 800.

#### Language

The logon language for the SAP system, e.g., EN for English or DE for German.

### Authentication

Certain input fields for the SAP connection vary depending on the selected authentication method.

#### User

SAP username.

#### Password

Password of the SAP user.

#### User name is alias

If this option is active, the name entered in the field **User** is used as the internet user alias, e.g., the communication user in the SAP Public Cloud. Activate this option when connecting to an SAP cloud system using the WebSocket connection method, see [Knowledge Base Article: Access Data in the SAP Public Cloud](../../../knowledge-base/access-data-in-the-sap-public-cloud/).

#### Request SAP credentials from caller when running extractions

If this option is active, SAP credentials entered in the **User** and **Password** fields are ignored. Provide SAP credentials via basic authentication when running an extraction. Caching the result of extractions is inactive.

#### User

SAP username.

#### Password

Password of the SAP user.

#### User name is alias

Activate this option when connecting to an SAP cloud system using the WebSocket connection method. When this option is active, the name entered in the field **User** is used as the internet user alias.

#### SNC library

Path to the SNC library, e.g., `C:\Program Files\SAP\FrontEnd\SecureLogin\sapcrypto.dll`

#### SNC Partner Name

The SAP Partner Name configured for the SAP application server, e.g., `p:SAPserviceERP/Alice@THEOBALD.LOCAL`.

#### Use static SAP credentials / Windows service account

This option activates SNC without SSO. If available, the SAP credentials in the fields **User** and **Password** are used for authentication. The Windows Active Directory user that opens the connection is the service account under which the Xtract Universal Windows service runs.

#### Request SAP credentials from caller

This option activates SNC with user and password. If this option is active, SAP credentials entered in the fields **User** and **Password** are ignored.\
Provide SAP credentials via basic authentication when running an extraction.

#### SSO - Log in as caller via External ID

This option activates SSO with External ID. SSO with External ID uses a Personal Security Environment (PSE) to create a trust relationship between the SAP application server and the service account that runs Xtract Universal. This allows Xtract Universal to impersonate any SAP user. For more information, see [Knowledge Base Article: SSO with External ID](../../../knowledge-base/sso-with-external-id/).

#### SSO - Impersonate caller via Kerberos

This option activates Kerberos SSO. The Windows Active Directory user is used for authentication. For this scenario “HTTPS - Restricted to AD users with Designer read access” must be selected and configured in the [Server Settings](../../server/server-settings/#web-server). For more information, see [Knowledge Base Article: SSO with Kerberos SNC](../../../knowledge-base/sso-with-kerberos-snc/).

#### SSO - Enroll certificate on behalf of caller

This option activates Certificate SSO. The Certificate SSO authentication uses Certificate Enrollment (Enroll-On-Behalf-Of) via Active Directory Certificate Services for the Windows Active Directory user that calls the extraction. For this scenario “HTTPS - Restricted to AD users with Designer read access” must be configured in the [Server Settings](../../server/server-settings/#web-server). For more information, see [Knowledge Base Article: SSO with Client Certificates](../../../knowledge-base/sso-with-client-certificates/).

#### Ticket issuer URL

URL of an Application Server Java (AS Java) that is configured to issue logon tickets. For more information, see [SAP Help: Configuring the AS Java to Issue Logon Tickets](https://help.sap.com/doc/saphelp_nw75/7.5.5/EN-US/4a/412251343f2ab1e10000000a42189c/frameset.htm).

#### Impersonate caller when running extractions (Kerberos SSO)

Activate this option to open the connection in the Windows Active Directory user context of the caller. Otherwise the connection is opened in the context of the service account running the Xtract Universal Windows service. For more information, see [Knowledge Base Article: SSO with Logon-Ticket](../../../knowledge-base/sso-with-logon-ticket/).

### RFC Options

#### RFC Libraries

Select an RFC library. The following RFC libraries are supported:

- NetWeaver RFC library (sapnwrfc.dll)
- Classic RFC library (librfc32.dll)

The RFC API (Remote Function Call) allows to establish an RFC connection to an SAP system from an external system that communicates as Client or Server with the SAP system. For more information on SAP libraries, see [SAP Help: RFC Libraries](https://help.sap.com/saphelp_nwpi71/helpdata/de/45/18e96cd26321a1e10000000a1553f6/frameset.htm).

SAP does not [support librfc32.dll](https://blogs.sap.com/2012/08/15/support-for-classic-rfc-library-ends-march-2016/) anymore.

Note

For certain older SAP releases, e.g., R/3 4.6C, it is necessary to enter the user name in upper case when using the NetWeaver RFC library.

Note

When using the NetWeaver RFC library with the [DeltaQ](../../deltaq/) extraction type or the [OHS](../../ohs/) extraction type, the RFC destination in SAP transaction SM59 must be set to *Unicode*. We recommend using the not supported librfc32.dll for certain extraction types, e.g., DeltaQ as it runs more stable than the NetWeaver RFC library.

#### Trace Directory

You can log debug information and save it locally.\
Enter a path to a local directory in the field **Trace directory** to save the debug information. For more information, see [Troubleshooting: Trace Directory](https://support.theobald-software.com/helpdesk/KB/View/14455-how-to-activate-tracing-for-xtract-products).

Clear the **Trace Directory** field when it is not needed.

Warning

**Increase of used hard drive memory.**\
A big amount of information is collected when debug logging is activated. This can decrease the capacity of your hard drives dramatically. Activate the debug logging only when necessary e.g., upon request of the support team.

#### Use SAPGUI

There are SAP Reports and BAPIs that require an installed SAP GUI even when they are called remotely. Activate this option only if necessary.

Warning

**'sapgui' start failed.**\
Sometimes SAP opens a pop-up window that requires input when running extractions. To deactivate pop-up windows, open the SAP GUI Logon pad and navigate to **Options... > Security Settings**. Click the **[Open Security Configuration]** button and select *Allow* as the **Default Action**. Apply the changes and close the SAP GUI Logon pad.

## Source Type OData

The source type **OData** enables users to access data from SAP on-premises and cloud systems using the OData (Open Data) protocol. OData defines a set of rules to create, edit and consume resources through RESTful interfaces (HTTP messages exchanging).

For more information, see [SAP Help: OData Services](https://help.sap.com/doc/77979cd206da4b7f9bd264b390d373fc/CLOUD/en-US/OData_Services.pdf).

#### Base URL

The base URL (protocol, hostname and port) of your SAP system. Examples:

- SAP on-premises systems: `http://sap-erp-as05.example.com:50000`
- SAP cloud systems: `https://my123456.s4hana.cloud.sap`

The URL can be requested from the SAP Basis team.

#### Username

When connecting to an SAP on-premises system, enter the username of an SAP dialog user. When connecting to an SAP private or public cloud system, enter the username of an [SAP Communication User](https://learning.sap.com/learning-journeys/implement-sap-s-4hana-cloud-public-edition-for-sourcing-and-procurement/setting-up-communication-management_a913171c-c96d-47a9-81ec-dc9ee8754320).

#### Password

Password of the SAP user.

#### Test Connect

Click **[Test Connect]** to test the OData connection.\
The radio buttons **OData V2** and **OData V4** indicate which OData protocol versions are enabled.\
For more information about the OData protocol version, refer to [OData V2](https://www.odata.org/documentation/odata-version-2-0/) and [OData V4](https://www.odata.org/documentation/).

## Access Control

Access control can be performed at the source level. This access control overrides the settings at the server level. For more information, see [Access Management](../../access-restrictions/restrict-designer-access/#restrict-access-to-the-designer).
