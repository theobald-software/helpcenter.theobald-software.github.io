
```csharp linenums="1" hl_lines="22-30" title="BW Query ZSIMPLEQUERY"
using System;
using System.Data;
using ERPConnect;
using ERPConnect.BW;

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

BWCube cube = connection.CreateBWCube("0D_DECU/DECUQUERY1");

cube.Dimensions["0D_MATERIAL"].SelectForFlatMDX = true;
cube.Dimensions["0D_SOLD_TO"].SelectForFlatMDX = true;

cube.Measures[0].SelectForFlatMDX = true;
cube.Measures[1].SelectForFlatMDX = true;

DataTable result = cube.Execute();
foreach (DataRow row in result.Rows)
{
    foreach (DataColumn column in result.Columns)
    {
        Console.WriteLine($"{column.Caption}: {row[column]}");
    }

    Console.WriteLine();
}
```

Output:

```
Material (SAP Demo): M18
Sold-to-Party (SAP Demo): Thomas Bush Inc.
Net&value of the invoice item in the docCurrency (SAP Demo): 398403,00
Clearing value in document currency (SAP Demo): 328206,00

Material (SAP Demo): M18
Sold-to-Party (SAP Demo): Toro Motor Company
Net&value of the invoice item in the docCurrency (SAP Demo): 234234,00
Clearing value in document currency (SAP Demo): 196959,00

Material (SAP Demo): M18
Sold-to-Party (SAP Demo): Calorad Inc.
Net&value of the invoice item in the docCurrency (SAP Demo): 111921,00
Clearing value in document currency (SAP Demo): 96837,00

Material (SAP Demo): PCSERVICEA
Sold-to-Party (SAP Demo): Infix Co.
Net&value of the invoice item in the docCurrency (SAP Demo): 84564,00
Clearing value in document currency (SAP Demo): 0,00

Material (SAP Demo): PCSERVICEA
Sold-to-Party (SAP Demo): Lampen-Markt GmbH
Net&value of the invoice item in the docCurrency (SAP Demo): 2826,00
Clearing value in document currency (SAP Demo): 0,00

Material (SAP Demo): PCSERVICEA
Sold-to-Party (SAP Demo): Minerva Industries
Net&value of the invoice item in the docCurrency (SAP Demo): 27759,00
Clearing value in document currency (SAP Demo): 0,00

Material (SAP Demo): PCSERVICEA
Sold-to-Party (SAP Demo): Nobil North Sea Limi
Net&value of the invoice item in the docCurrency (SAP Demo): 11118,00
Clearing value in document currency (SAP Demo): 0,00
```