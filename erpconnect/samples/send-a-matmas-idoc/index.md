This sample shows how to create and send a MATMAS IDoc.

Note

This sample only creates basic data. To add more sophisticated data, look up the IDoc documentation via SAP transaction WE60 to find out more about the segments.

### Send a MATMAS IDocs

Follow the steps below to send a MATMAS IDoc:

1. Connect to the SAP system using `R3Connection`.

1. Use `CreateEmptyIdoc` to instance an empty IDoc.

1. Provide receiver and sender information.

1. Use \`CreateSegment create the needed segments.

1. Fill in the fields in the IDoc segments.

1. Send the IDoc using `Send`.

1. Run the program and check the result.

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

______________________________________________________________________

#### Related Links

- [Prerequisites for working with IDocs](../../documentation/idocs/prerequisites/)
- [Reveive an IDoc](../receive-an-idoc/)
- [Send an ORDER IDoc](../send-an-order-idoc/)
- [Send a STATUS IDoc](../send-a-simple-status-idoc/)
