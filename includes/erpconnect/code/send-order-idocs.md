	
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