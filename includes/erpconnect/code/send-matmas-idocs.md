	
	``` csharp linenums="1" 
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