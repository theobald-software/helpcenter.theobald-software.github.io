The following sample shows how to use the *ReadTable* class to read data from an SAP table and how to process the ADO.NET result table object.

### Read Data From Tables

Follow the steps below to read tables from SAP:

1. Connect to the SAP system using `R3Connection`.
1. Create a table object using `ReadTable()`.
1. Specify the name of the SAP table using `TableName`.
1. Specify the columns you want to read using `AddField()`.
1. Optional: Specify additional parameters, e.g., WHERE Clause (`WhereClause` or maximum number of rows `RowCount`).
1. Optional: Specify the function module that is used to read the table using `SetCustomFunctionName()`. The default is RFC_READ_TABLE.
1. Read the SAP table using `Run()`.
1. Access the table using the `Result` attribute.

```csharp
using System;
using System.Data;
using ERPConnect;
using ERPConnect.Utils;

// Set your ERPConnect license
LIC.SetLic("xxxx");

// Open the connection to SAP
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

var table = new ReadTable(connection)
{
    WhereClause = "SPRAS = 'EN'",
    TableName = "MAKT",
    RowCount = 10
};

// Select columns to read
table.AddField("MATNR");
table.AddField("MAKTX");

// Specify a function module that is used to read the table
table.SetCustomFunctionName("RFC_READ_TABLE");

table.Run();

DataTable result = table.Result;
for (int i = 0; i < result.Rows.Count; i++)
{
    Console.WriteLine($"{result.Rows[i]["MATNR"]} {result.Rows[i]["MAKTX"]}");
}

Console.ReadLine();

```

Output:

```text
000000000000000023 Pawan Kalyan_08
000000000000000038 Test US colleagues upd4
000000000000000043 English Check 25_01
000000000000000058 Ventilation, complete build
000000000000000059 Filter Ereteam
000000000000000068 a portable 1 ton crane
000000000000000078 Component Full Repair Service ...
000000000000000088 AS-100 T-shirt XL
000000000000000089 AS-100 T-shirt
000000000000000098 PCB Subassembly

```

______________________________________________________________________

#### Related Links

- [Samples: Transfer data packets with ReadTable class](../../../samples/transfer-data-packets-with-readtable-class/)
- [Samples: Get meta data of a table](../../../samples/get-meta-data-of-a-table/)
- [Samples: Get CostCenter hierarchies](../../../samples/get-costcenter-hierarchies/)
