This sample shows how to execute the SAP transaction ME21 (create purchase order) as a background process.

Tip

The installation package of ERPConnect includes the *Transaction-Recorder* tool. This tool records transactions and implements them to code, see [Transaction-Recorder](../../documentation/transactions/transaction-recorder/).

### Call Transaction ME21

```csharp
using (R3Connection con = new R3Connection("SAPServer", 00, "SAPUser", "Password", "EN", "800"))
    {
    con.Open();

    Transaction trans = new Transaction();
    trans.Connection = con;
    trans.TCode = "ME21";

    //Begin a new Dynpro
    trans.AddStepSetNewDynpro("SAPMM06E", "0100");
    trans.AddStepSetCursor("EKKO-EKGRP");
    trans.AddStepSetOKCode("/00"); // Enter
    trans.AddStepSetField("EKKO-LIFNR", "1070"); // Vendor
    trans.AddStepSetField("RM06E-BSART", "NB"); // Order Type
    trans.AddStepSetField("RM06E-BEDAT", "01.01.2006"); //Purch.Date
    trans.AddStepSetField("EKKO-EKORG", "1000"); // Purchase Org
    trans.AddStepSetField("EKKO-EKGRP", "010"); // Purchase Group
    trans.AddStepSetField("RM06E-LPEIN", "T");

    //Begin a new Dynpro
    trans.AddStepSetNewDynpro("SAPMM06E", "0120");
    trans.AddStepSetCursor("EKPO-WERKS(01)");
    trans.AddStepSetOKCode("=BU");
    trans.AddStepSetField("EKPO-EMATN(01)", "B-7000"); // Material
    trans.AddStepSetField("EKPO-MENGE(01)", "20"); // Quantity
    trans.AddStepSetField("EKPO-WERKS(01)", "1000"); // Plant
    trans.Execute();

    foreach (ERPConnect.Utils.BatchReturn br in trans.Returns)
        MessageBox.Show(br.Message);
    if (trans.Returns.Count == 0)
        MessageBox.Show("No Messages");
    }

```

At the end the code loops over the *Returns* collection to check the *BatchReturn* objects that contain the return messages of the Batch Input transaction.
