This section shows how to send an IDoc.\
To configure your SAP system to send IDocs, see [Set Up a Test Environment for IDocs](../prerequisites/#set-up-a-test-environment-for-idocs).

There are two ways to create an IDoc object:

- `CreateIdoc` creates an IDoc with all segments located in the segment collections.\
  This is useful for sending simple IDocs.
- `CreateEmptyIdoc` and `CreateSegment` create only the needed segments.

### Send an IDoc

Follow the steps below to send IDocs:

1. Connect to the SAP system using `R3Connection`.
1. Use `CreateIdoc` or `CreateEmptyIdoc` to instance a valid *IDoc* object. Provide an object type for the IDocs, e.g., "SYSTAT01", "MATMAS01", "ORDERS01", etc.
1. Provide receiver and sender information.
1. Fill in the fields in the IDoc segments.
1. Send the IDoc using `Send`.
1. Run the program and check the result.

Tip

Use SAP transaction WE60 to look up the segment documentation of IDocs.

Note

Make sure to configure your SAP system to receive IDocs.

Examples:

```csharp
using System;
using ERPConnect;
using ERPConnect.Utils;

// Set your ERPConnect license
LIC.SetLic("xxxx");

using var connection = new R3Connection(
    host: "server.acme.org",
    systemNumber: 00,
    userName: "user",
    password: "passwd",
    language: "EN",
    client: "001")
{
    Protocol = ClientProtocol.NWRFC,
};

connection.Open();

// Inquire the IDoc number of the IDoc to be manipulated and read the input.    
Console.WriteLine("Which IDoc number would you like to manipulate?");  
string IdocNo = Console.ReadLine(); 

Idoc i = connection.CreateIdoc("SYSTAT01","");

// Fill Message Type 
i.MESTYP = "STATUS"; 

// Fill Information about IDoc Reciever 
i.RCVPRN = "PT4_800"; // Partner number 
i.RCVPRT = "LS"; // Partner type 

// Fill information about IDoc sender 
i.SNDPOR = "ERPCONNECT"; // Partner port 
i.SNDPRN = "ERPCONNECT"; // Partner number 
i.SNDPRT = "LS"; // Partner type

// Fill the right fields in the segments 
i.Segments["E1STATS",0].Fields["LOGDAT"].FieldValue = "20210901";
i.Segments["E1STATS",0].Fields["LOGTIM"].FieldValue = "152301"; 
i.Segments["E1STATS",0].Fields["STATUS"].FieldValue = "12"; 
i.Segments["E1STATS",0].Fields["DOCNUM"].FieldValue = IdocNo; 

i.Send(); 
Console.WriteLine("IDoc sent"); 
Console.ReadLine();

```

Output:

The status code of the manipulated IDoc increases from 3 (Data passed...) to 12 (Dispatch OK).

```csharp
using System;
using ERPConnect;

// Set your ERPConnect license
LIC.SetLic("xxxx");

using var connection = new R3Connection(
    host: "server.acme.org",
    systemNumber: 00,
    userName: "user",
    password: "passwd",
    language: "EN",
    client: "001")
{
    Protocol = ClientProtocol.NWRFC,
};

connection.Open(false);

ERPConnect.Idocs.Idoc id = con.CreateEmptyIdoc("MATMAS01","");

// Fill header data
id.SNDPRN = "ERPCONNECT";
id.SNDPOR = "ERPCONNECT";
id.SNDPRT = "LS";

id.RCVPRN = "ECW_00_800";
id.RCVPRT = "LS";
id.MESTYP = "MATMAS";

// Fill basic data
ERPConnect.Idocs.IdocSegment e1maram = id.CreateSegment("E1MARAM");
e1maram.Fields["MATNR"].FieldValue = "DEV003"; // Material Number
e1maram.Fields["MTART"].FieldValue = "FERT"; // Material Type
e1maram.Fields["MATKL"].FieldValue = "001"; //  Material Group
e1maram.Fields["MEINS"].FieldValue = "PCE"; // Base Unit of Measure
e1maram.Fields["MBRSH"].FieldValue = "M"; // Industry sector
e1maram.Fields["BRGEW"].FieldValue = "1"; // Gross Weight
e1maram.Fields["NTGEW"].FieldValue = "1"; // Net Weight
e1maram.Fields["GEWEI"].FieldValue = "KG"; // Weight Unit

id.Segments.Add(e1maram);

// Fill text data
ERPConnect.Idocs.IdocSegment e1maktm = id.CreateSegment("E1MAKTM");
e1maktm.Fields["SPRAS"].FieldValue = "E"; // Language Key
e1maktm.Fields["MAKTX"].FieldValue = "my Article"; // Description Text

e1maram.ChildSegments.Add(e1maktm);

// Send IDoc
id.Send();


Console.WriteLine("Ready..");
Console.ReadLine();

```

Output:

```csharp
using System;
using ERPConnect;

// Set your ERPConnect license
LIC.SetLic("xxxx");

using var connection = new R3Connection(
    host: "server.acme.org",
    systemNumber: 00,
    userName: "user",
    password: "passwd",
    language: "EN",
    client: "001")
{
    Protocol = ClientProtocol.NWRFC,
};

connection.Open(false);

Idoc idoc = connection.CreateEmptyIdoc("ORDERS01","");
idoc.MESTYP = "ORDERS";

// Fill information about idoc sender
idoc.SNDPRN = "1172"; // Partner number
idoc.SNDPRT = "KU"; // Partner type

// Create document header segment
IdocSegment e1edk01 = idoc.CreateSegment("E1EDK01");
idoc.Segments.Add(e1edk01);

// Create item segment
IdocSegment e1edp01 = idoc.CreateSegment("E1EDP01");
e1edp01.Fields["MENGE"].FieldValue = txtQty.Text;
idoc.Segments.Add(e1edp01);

// Create Object identification (material number in this case)
IdocSegment e1edp19 = idoc.CreateSegment("E1EDP19");
e1edp19.Fields["QUALF"].FieldValue = "002"; // 002 for material number
e1edp19.Fields["IDTNR"].FieldValue = txtMaterialNumber.Text; // material number
e1edp01.ChildSegments.Add(e1edp19);

idoc.Send();
this.lblInfo.Text = "Idoc sent";

```

Output:

______________________________________________________________________

#### Related Links

- [Send an ORDER IDoc](../../../samples/send-an-order-idoc/)
- [Send a MATMAS IDoc](../../../samples/send-a-matmas-idoc/)
- [Send a STATUS IDoc](../../../samples/send-a-simple-status-idoc/)
- [Resend IDocs which where set to CPICERR in SM58](../../../samples/resend-idocs-which-where-set-to-cpicerr-in-sm58/)
- [Set Up an RFC-Destination](../prerequisites/#set-up-an-rfc-destination)
