ERPConnect supports the following connection methods to SAP systems:

- Connect to a single application server.
- Connect to a message server (Load Balancing).
- Connect to a single application server or public or private cloud instance via RFC over WebSocket.

### Input Parameters

The connection methods require the following input:

| Single Application Server | Load Balancing | RFC over WebSocket | | --- | --- | --- | | Name of the user (*UserName* property) | Name of the user (*UserName* property) | Name of the user (*UserName* property) | | Password (*Password* property) | Password (*Password* property) | Password (*Password* property) | | Language (*Language* property) | Language (*Language* property) | Language (*Language* property) | | Client (*Client* property) | Client (*Client* property) | Client (*Client* property) | | Name of the application server (*Host* property) | Name of the message server (*MessageServer* property) | WebSocket host (*WebSocketHost* property) | | System number between 0 and 99 (*SystemNumber* property) | System ID (*SID* property e.g., MBS) | WebSocket port (*WebSocketPort* property) | | | Name of the group (*LogonGroup* property e.g., PUBLIC) | *AliasUser* property instead of *UserName* for cloud systems | | | | Various TLS settings (*TlsSettings* property), e.g., *CryptoLibrary*, [*ClientPse*](../../../samples/create-personal-security-environment/) |

### Connect to SAP

1. Add the ERPConnect.dll class library as a reference to the project.

1. Create a new R3Connection object and define all input parameters.

1. Establish the connection using `Open`.

   ```csharp
   using (R3Connection con = new R3Connection())
   {
       con.UserName = "SAPUser";
       con.Password = "SAPPassword";
       con.Language = "EN";
       con.Client = "800";
       con.Host = "sap-erp-as05.example.com";
       con.SystemNumber = 00;
       con.Protocol = ClientProtocol.NWRFC; //use ClientProtocol.RFC for classic RFC library

       con.Open();
   }

   ```

   ```csharp
   using (R3Connection con = new R3Connection())
   {
       con.UserName = "SAPUser";
       con.Password = "SAPPassword";
       con.Language = "DE";
       con.Client = "800";
       con.MessageServer = "sap-erp-as05.example.com";
       con.LogonGroup = "PUBLIC";
       con.SID = "ECC";
       con.Protocol = ClientProtocol.NWRFC; //use ClientProtocol.RFC for classic RFC library
       con.UsesLoadBalancing = true;

       con.Open();
   }

   ```

   ```csharp
   using (R3Connection con = new R3Connection())
   {
       con.UsesWebSocket = true;
       con.WebSocketHost = "myinstance-api.s4hana.cloud.sap";
       con.WebSocketPort = 443;
       con.TlsSettings = new TlsSettings
       {
           TrustAll = false,
           CryptoLibrary = @"C:\lib\sapcrypto.dll",
           ClientPse = "CLIENT.PSE"
       };

       con.AliasUser = "TESTUSER",
       con.Password = "Password",

       con.Open();
   }

   ```

#### Encoding

The default encoding for an SAP connection is SAP code page 1100 (iso-8859-1). When using the NW RFC protocol you can explicitly set an encoding. This is necessary if your SAP credentials contain characters that are not part of SAP code page 1100.

```csharp
con.Protocol = ClientProtocol.NWRFC; 
con.InitialEncoding = SAPEncodingInfo.UTF16LittleEndian;

```

#### Client Protocol

The default client protocol is the NWRFC Protocol. To use the old RFC Protocol add the following command:

```csharp
con.Protocol = ClientProtocol.RFC;

```

Tip

If you use the constructor of the R3Connection class to provide the login properties, you can save lines.\
Example: `R3Connection con = new R3Connection("SAPServer",00,"SAPUser","Password","EN","800");`.

Note

For more information on authentication, see [SSO with Log On Tickets](../sso-with-log-on-tickets/) and [SSO with SNC](../sso-with-snc/).

### Connect via Router

When accessing an SAP system via a Router, the router string must be set before the host name or the name of the message server.\
For more information on route strings, see [SAP Help- Route String Entry for SAProuter](https://help.sap.com/saphelp_erp60_sp/helpdata/en/4f/992df1446d11d189700000e8322d00/frameset.htm).

```csharp
using (R3Connection con = new R3Connection())
{
    con.UserName = "SAPUser";
    con.Password = "SAPPassword";
    con.Language = "DE";
    con.Client = "800";
    con.Host = "SAPServer";
    con.SAProuterString = "/H/SAProuter";
    con.SystemNumber = 00;
    con.Protocol = ClientProtocol.NWRFC;

    con.Open();
}

```

______________________________________________________________________

#### Related Links

- [SSO with Log On Tickets](../sso-with-log-on-tickets/).
- [SSO with SNC](../sso-with-snc/).
- [Implement a connection pool](../../../samples/implement-a-connection-pool/)
