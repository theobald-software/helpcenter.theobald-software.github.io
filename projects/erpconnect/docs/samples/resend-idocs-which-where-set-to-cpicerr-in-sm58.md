---
title: Resend IDocs which where set to CPICERR in SM58
description: Resend IDocs which where set to CPICERR in SM58
---

This sample shows how to resend IDocs that are flagged with an error in the tRFC monitor.

### About

When IDocs are sent by SAP while the external system is not available, the IDocs / calls are flagged with error in SM58 (tRFC monitor). 
The calls are resent automatically after minutes depending on the system configuration.

### Force Resend of an IDoc

The following code sample looks up all errors in the table ARFCSSTATE of a given destination and then calls ARFC_RUN_NOWAIT to resend each call.

```csharp linenums="1" title="ARFC_RUN_NOWAIT & Table ARFCSSTATE"
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

// Look up errors in table ARFCSSTATE
string date = DateTime.Now.AddDays(-1).ToString("yyyyMMdd");
var readTable = new ReadTable(connection)
{
    TableName = "ARFCSSTATE",
    WhereClause = $"ARFCDEST = 'DEST' AND ARFCDATUM >= '{date}' AND ARFCSTATE = 'CPICERR'"
};

readTable.Run();
if (readTable.Result.Rows.Count == 0)
{
    return;
}

// Execute ARFC_RUN_NOWAIT for each call
RFCFunction function = connection.CreateFunction("ARFC_RUN_NOWAIT");
function.Exports["WITH_ENQ"].ParamValue = "X";

for (int i = 0; i < readTable.Result.Rows.Count; i++)
{

    function.Tables["DATA"].Clear();
    function.Tables["STATES"].Clear();

    var row = readTable.Result.Rows[i];
    RFCStructure structure = function.Exports["TID"].ToStructure();
    structure["ARFCIPID"] = row["ARFCIPID"].ToString();
    structure["ARFCPID"] = row["ARFCPID"].ToString();
    structure["ARFCTIME"] = row["ARFCTIME"].ToString();
    structure["ARFCTIDCNT"] = row["ARFCTIDCNT"].ToString();

    function.Execute();
}
```
