The following sample application shows how to use the *Transaction* class to execute an SAP transaction.

### Execute SAP Transactions

Follow the steps below to run SAP transactions from ERPConnect:

1. Connect to the SAP system using `R3Connection`. Set the `UseGui` property to *true*.
1. Create a transaction object using `Transaction()`.
1. Specify the SAP transaction code using `TCode`.
1. Optional: add batch steps using `AddStep`.
1. Launch the SAP GUI and execute the SAP transaction using `Execute`.

Tip

The installation package of ERPConnect includes the *Transaction-Recorder* tool. This tool records transactions and implements them to code, see [Transaction-Recorder](../transaction-recorder/).

The following sample code executes the SAP transaction MMBE (stock overview):

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
    UseGui = true,
};

connection.Open();

Console.Write("Material: ");
string material = Console.ReadLine();

Console.Write("Plant: ");
string plant = Console.ReadLine();

var transaction = new Transaction(connection)
{
    ExecutionMode = TransactionDialogMode.ShowAll,
    TCode = "MMBE"
};

transaction.AddStepSetNewDynpro("RMMMBEST", "1000");
transaction.AddStepSetOKCode("ONLI");
transaction.AddStepSetCursor("MS_WERKS-LOW");
transaction.AddStepSetField("MS_MATNR-LOW", material);
transaction.AddStepSetField("MS_WERKS-LOW", plant);

// run
transaction.Execute();

```

Input:

```text
Material: 100-100
Plant: 1000

```

Output:

______________________________________________________________________

#### Related Links

- [Samples: Access Stock Overview using Batch Input](../../../samples/access-stock-overview-using-batch-input/)
- [Samples: Create New Customers using Batch Input](../../../samples/create-new-customers-using-batch-input/)
- [Samples: Create Purchase Orders using Batch Input and Background Processing](../../../samples/create-purchase-orders-using-batch-input/)
