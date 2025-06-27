This section shows how to install and set up ERPConnect for the first time.

### Installation

1. [Download](https://theobald-software.com/en/download-trial/) a 30 day trial version of ERPConnect or download the latest version from the [customer portal](https://my.theobald-software.com/).
1. Run the ERPConnect executable (ERPConnectSetup.exe) to install ERPConnect. For information on system requirements, see [Requirements](../documentation/introduction/requirements/).
1. Download one of the following SAP libraries from the SAP Marketplace download area:
   - [Classic RFC library](../documentation/introduction/saplibraries/#client-protocol-rfc-librfc32dll)
   - [Netweaver RFC library](../documentation/introduction/saplibraries/#netweaver-rfc-library)
1. When using a 64-bit system, copy the 64-bit version of the library to the `C:\Windows\System32` folder.\
   When using a 32-bit system, copy the 32-Bit Version of librfc32.dll to the `C:\Windows\SysWoW64` folder.
1. Add the ERPConnect.dll class library as a reference to your project.\
   The library is located in the ERPConnect installation directory, e.g., `C:\Program Files\ERPConnect`.

For more information, see [Installation](../documentation/introduction/installation/#setup).

### Connect to SAP

1. Set the (demo) license **before** connecting to SAP.

   The demo license is provided as a .json file that is located in the installation directory of ERPConenct, e.g., `C:\Program Files\ERPConnect\ERPConnectLicense.json`. Use one of the following methods to set the license.

   - Read the license file and apply the license:

     ```csharp
     ERPConnect.LIC.LoadJsonLicense(string filename);

     ```

   - Copy and paste the content of the `ERPConnectLicense.json` file into a constant string in the code and use the string to set the license:

     ```text
     ERPConnect.LIC.SetJsonLicense(string json); 

     ```

   The demo license is provided in the `ERPConnectTrialKey.txt` file in the installation directory of ERPConenct, e.g., `C:\Program Files\ERPConnect\ERPConnectTrialKey.txt`. Use the following command to set the license number:

   ```csharp
   ERPConnect.LIC.SetLic("XXXXXXXXXX");

   ```

   Tip

   You can also provide the path to the ERPConnectTrialKey.txt file to set the license. Example:

   ```csharp
   ERPConnect.LIC.SetLic(File.ReadAllText("C:\\Program Files\\ERPConnect\\ERPConnectTrialKey.txt"));

   ```

1. Create an `R3Connection` object and define all [input parameters](../documentation/sap-connection/log-on-to-sap/#input-parameters).\
   Make sure to use an SAP dialog user with sufficient SAP authorization, see [Authorization Objects - SAP User Rights](../documentation/sap-authority-objects/).

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

1. Establish the connection using `Open()`.

1. Run the program to test the SAP connection.

For more information, see [Connect to SAP](../documentation/sap-connection/log-on-to-sap/).

### Next Steps

ERPConnect offers the following features for reading and writing data from and to SAP:

| Functionality / SAP Objects | Description | | --- | --- | | [**ABAP Code**](/erpconnect/documentation/abap) | Generate and execute ABAP code on-the-fly. | | [**BAPIs and Function Modules**](/erpconnect/documentation/bapis-and-function-modules) | Access BAPIs and RFC function modules to read and write data from and to SAP. | | [**BW Cube and BEx Queries**](/erpconnect/documentation/bw-cubes-and-bw-queries) | Extract data from SAP BW InfoCubes and BEx Queries. | | [**IDocs**](/erpconnect/documentation/idocs) | Send and receive SAP IDocs. | | [**Queries**](/erpconnect/documentation/queries) | Extract SAP queries (not BEx queries). | | [**RFC Server Functions**](/erpconnect/documentation/rfc-server) | Create, register and use RFC server functions. | | [**Tables**](/erpconnect/documentation/table) | Read SAP Tables directly via RFC. | | [**Transactions**](/erpconnect/documentation/transactions) | Execute SAP transactions via batch input. |
