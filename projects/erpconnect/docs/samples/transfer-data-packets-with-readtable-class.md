---
title: Transfer data packets with ReadTable
description: Transferring data packets with ReadTable class
---

This sample shows how to use the data packaging mechanism of the *ReadTable* class.

### About 

Table extractions have a limit of table rows that can be extracted at once (between 100,000 and 1,000,000 depending on the system).
To avoid this limitation, the *ReadTable* class offers a packaging mechanism to extract a huge number of table rows.

!!! note
    The SAP standard function module RFC_READ_TABLE is not suited for mass data extraction.

### Set Up Data Packaging

Follow the steps below to set up data packaging:

1. Set the *ReadTable* property `PackageSize` to a value greater than 0 to enable packaging.
2. Set the *ReadTable* property `RaiseIncomingPackageEvent` to *true* to raise an event `IncomingPackage` when a new data packet is processed.
3. Implement the `IncomingPackage` event to process each data packet. The packet is provided as a *Datatable* object.

```csharp linenums="1" title="Table MKPF"
using System;
using System.Data;
using ERPConnect;
using ERPConnect.Utils;

// Set your ERPConnect license
LIC.SetLic("xxxx");

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

var read = new ReadTable(con)
{
    PackageSize = 10000,
    RaiseIncomingPackageEvent = true,
    TableName = "MKPF"
};

read.IncomingPackage += OnIncomingPackage;

read.Run();

Console.WriteLine("Press enter to exit");
Console.ReadLine();
return;

static void OnIncomingPackage(ReadTable sender, DataTable packageResult)
{
    Console.WriteLine($"Processing data package with {packageResult.Rows.Count} rows");
}
```

Output:

```
Processing data package with 10000 rows
Processing data package with 10000 rows
Processing data package with 10000 rows
Processing data package with 10000 rows
Processing data package with 10000 rows
Processing data package with 10000 rows
Processing data package with 10000 rows
Processing data package with 798 rows
Press enter to exit
```
