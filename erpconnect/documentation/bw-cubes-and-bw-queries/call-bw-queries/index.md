The following sample shows how to fetch data from a BW Query using ERPConnect.\
To allow external access to a BW Query the checkbox **Allow external access** has to be set to active in the preferences for the query.

### Call BW Queries

1. Connect to the SAP system using `R3Connection`.
1. Create a BWCube object using `CreateCube`. Its name is made up of the cube name and query name. The cube object offers a collection for all contained dimensions (Dimensions) and key figures (Measures).
1. Set the attribute `SelectForFlatMDX` of a cube component to *true* to add it to the query output.
1. To pass values, address the variables via the variables collection. There are range tables behind each variable.
1. Execute the BW query using `Execute`. The output is a table of the *DataTable* type.

Note

The denomination of the key figures via the query generation in the designer does not conform to the original technical name. That means key figures are addressed by the ordinal number, not the name.

```csharp
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

```text
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

______________________________________________________________________

#### Related Links

- [Execute BW Queries](../../../samples/execute-bw-queries/)
