As of ERPConnect version 1.6 SSO scenarios are supported.\
There are several methods to get an SSO Ticket depending on the SAP Infrastructure in the company.

Note

To use SSO the SAP system must be configured as described in [SAP Help - Single Sign-On Configuration](https://help.sap.com/doc/saphelp_nw75/7.5.5/en-US/48/ca0fe42fbb5c97e10000000a42189d/content.htm?no_cache=true).

### Logon with SSO-Tickets

#### Create an SSO-Ticket

To create an SSO ticket the *R3Connection* class provides the method `GetSSOTicket`. All logon data must be provided once to create the ticket as shown in the code below.

```csharp
using(ERPConnect.R3Connection cont = new ERPConnect.R3Connection())
{
    cont.Host = "sap-erp-as05.example.com";
    cont.SystemNumber = 7;
    cont.Client = "800";
    cont.Language = "DE";
    cont.UserName = "alice";
    cont.Password = "pw";

    string ssoticket = cont.GetSSOTicket();
}

```

#### Logon

If there is a ticket available, you can establish the connection without user credentials:

```csharp
using (ERPConnect.R3Connection conts = new ERPConnect.R3Connection())
{
    conts.Host = "sap-erp-as05.example.com";
    conts.SystemNumber = 7;
    conts.Client = "800";
    conts.Language = "EN";
    conts.LogonTicket = ssoticket;

    conts.Open();
}

```

For information on how to login to SAP using the cookie from the SAP Portal Ticketissuer, refer to [Login to SAP with an SSO Logonticket](../../../samples/login-to-sap-with-an-sso-logonticket/).

______________________________________________________________________

#### Related Links

- [Login to SAP with an SSO Logonticket from the SAP Portal Ticketissuer](../../../samples/login-to-sap-with-an-sso-logonticket/)
- [SAP Help - Single Sign-On Configuration](https://help.sap.com/doc/saphelp_nw75/7.5.5/en-US/48/ca0fe42fbb5c97e10000000a42189d/content.htm?no_cache=true)
- [SSO with SNC](../sso-with-snc/)
