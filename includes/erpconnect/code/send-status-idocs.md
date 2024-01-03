	
	``` csharp linenums="1" 
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