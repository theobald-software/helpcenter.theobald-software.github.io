	
	=== "Single Server login"

		```csharp linenums="1"
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

	=== "Load Balancing"

		```csharp linenums="1"
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
		
	=== "RFC via WebSocket"

		```csharp linenums="1"
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
	