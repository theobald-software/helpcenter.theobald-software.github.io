---
title: Create Equipment
description: Create Equipment
---

This sample shows how to create equipment in SAP using the BAPI BAPI_EQMT_MODIFY.

### About

The BAI BAPI_EQMT_MODIFY can be used to create or change equipment in SAP.

To create equipment using the BAPI BAPI_EQMT_MODIFY the equipment name (equi_master["EQUIPMENT"]) must be written in uppercase.
The fields EQUITYPE,INVENTORY and MANFACTURE are optional.

### Call BAPI_EQMT_MODIFY

The following sample code creates equipment in SAP using the BAPI BAPI_EQMT_MODIFY:

```csharp linenums="1" title="BAPI_EQMT_MODIFY"
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

connection.Open();

RFCFunction func = connection.CreateFunction("BAPI_EQMT_CREATE");
  
RFCStructure equi_master = func.Exports["EQUIMASTER"].ToStructure();
  
    equi_master["EQUIPMENT"] = "TESTEQUIP04"; //  Equipment
    equi_master["EQUICATGRY"] = "M"; //EquipmentCategory
    equi_master["EQUITYPE"] = "5000"; //ObjectType     optional
    equi_master["INVENTORY"] = "123456"; //Inventury No.  optional
    equi_master["MANFACTURE"] = "TEST AG"; //Manufacturer   optional
  
RFCStructure equi_text = func.Exports["EQUITEXT"].ToStructure();
  
    equi_text["EQUIDESCR"] = "TestDescription"; //Description
  
RFCStructure equi_location = func.Exports["EQUILOCATION"].ToStructure();
  
    equi_location["MAINTPLANT"] = "1000"; //Plant
  
func.Execute();
  
  
// ReturnMessage from BAPI
RFCStructure funcRet = func.Imports["RETURN"].ToStructure();
if (funcRet["Type"].ToString() == "S")
    Console.WriteLine("Equipment was created succesfully");
else
Console.WriteLine (funcRet["MESSAGE"].ToString());
Console.WriteLine("Please Press Enter to continue");
  
Console.ReadLine();
```
