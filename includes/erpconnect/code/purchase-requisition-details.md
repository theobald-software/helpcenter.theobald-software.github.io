
The following sample code calls the BAPI BAPI_REQUISITION_GETDETAIL to get the processing status of a purchase requisition:

```csharp linenums="1" title="BAPI_REQUISITION_GETDETAIL"
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

![BanfStatusEn]( site:assets/images/erpconnect/samples/BanfStatusEn.jpg){:class="img-responsive"}