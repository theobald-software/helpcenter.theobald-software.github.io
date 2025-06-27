This section contains a list of available resources for the BAPI/Function Module classes.

### Call BAPIs/Function Modules

Follow the steps below to call BAPIs/Function Modules:

1. Connect to the SAP system using `R3Connection`.
1. Create an RFCFunction object using `CreateFunction`.
1. Provide values to export parameters, table parameters or import parameters for the RFCFunction objects.
   - Export parameters:\
     `Exports["parameter_name"].ParamValue` or\
     `Exports["structure_name"].ToStructure()["parameter:name"]`.
   - Table parameters: `Tables["table_name"]["parameter_name"].ParamValue`
   - Import parameters:\
     `Imports["parameter_name"].ParamValue` or\
     `Imports["structure_name"].ToStructure()["parameter:name"]`.
1. Execute the BAPIs/function modules using `Execute`.

The following sample code calls the BAPI BAPI_REQUISITION_GETDETAIL to get the processing status of a purchase requisition:

```csharp
public static void BanfStatus(string Banf_Number)
{
    RFCFunction func = connection.CreateFunction("BAPI_REQUISITION_GETDETAIL");
    func.Exports["NUMBER"].ParamValue = Banf_Number; 

    func.Execute();

    if (func.Tables["Return"].RowCount > 0)
    {
     string rMessage = func.Tables["Return"].Rows[0, "MESSAGE"].ToString();
     Console.WriteLine(rMessage);
    }
    if (func.Tables["REQUISITION_ITEMS"].RowCount > 0)
    {

     foreach (RFCStructure dr in func.Tables["REQUISITION_ITEMS"].Rows)
     {
       Console.WriteLine("BelgNummer:" + dr["PREQ_NO"].ToString() + " Pos: " + 
       dr["PREQ_ITEM"].ToString() + " Status: " + dr["PROC_STAT"].ToString());
     }
}

```

Output:

### Samples

For a list of sample applications and sample codes refer to [Samples: BAPIs and Function Modules](../../../samples/#bapis-and-function-modules).
