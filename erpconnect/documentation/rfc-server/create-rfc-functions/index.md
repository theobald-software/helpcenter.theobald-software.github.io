This section shows how to create, register and use RFC server functions.

### Register the RFC Server Function

1. Initialize an *RFCServer* object. Provide the gateway host, the gateway service and the program ID to register on the SAP gateway. The program ID must be available as a registered destination in SAP, see [Set Up an RFC Destination](../prerequisites/).
1. Register an *RFCServerFunction* object using `RegisteredFunctions.Add`. An *RFCServer* object can hold more than one *RFCServerFunction* object.
1. Add Imports and Exports. They are handled the same way as when calling RFC functions as a client.
1. When an ABAP program calls the function, the event *IncomingCall* is triggered.\
   When using C#, the event call-back must be defined in a separate line of code.
1. Start the server using `Start`.

Note

If the RFC destination is set to Unicode (SAP transaction code **SM59**), the property *IsUnicode* of the *RFCServer* object must be set to true.

In the following sample applications a simple RFC server function is created that allows ABAP programs to add numbers.

```csharp
using ERPConnect; 

static void Main(string[] args) 
{ 
   RFCServer s = new RFCServer();
   s.GatewayHost = "sap-erp-as05.example.com"; 
   s.GatewayService = "sapgw11"; 
   s.ProgramID = "ERPTEST"; 

   s.IncomingCall+=new ERPConnect.RFCServer.OnIncomingCall(s_IncomingCall); 

   RFCServerFunction f = s.RegisteredFunctions.Add("Z_ADD"); 

   f.Imports.Add("NUMBER1",RFCTYPE.INT); 
   f.Imports.Add("NUMBER2",RFCTYPE.INT); 
   f.Exports.Add("RES",RFCTYPE.INT); 

   s.Start(); 

   Console.Write( "Server is running. Press any key to exit."); 
   Console.ReadLine(); 
}

```

Two input parameters (*NUMBER1* and *NUMBER2*) are added in a new function (*Z_ADD*). The result (*RES*) is passed back to the calling ABAP program, see [Call RFC Server Functions in ABAP](#call-rfc-server-functions-in-abap).

```csharp
using ERPConnect; 

static void Main(string[] args)
{

    static RFCServer s = new RFCServer();
    s.GatewayHost = "SAPServer";
    s.GatewayService = "sapgw00";
    s.ProgramID = "ERPConnectTEST";

    s.IncomingCall += new RFCServer.OnIncomingCall(s_IncomingCall);

    RFCServerFunction f = s.RegisteredFunctions.Add("Z_ADD_2");

    f.Exports.Add("RES", RFCTYPE.INT);

    RFCTable numbertable = f.Tables.Add("NUMBERS");
    numbertable.Columns.Add("NUMB", 10, 0, RFCTYPE.NUM); 

    s.Start();

    Console.WriteLine("Press Enter to quit");
    Console.ReadLine();
}

```

A table (*NUMBERS*) with a column (*NUMB*) is added to a table collection using `Add()`. The result (*RES*) is passed back to the calling ABAP program, see [Call RFC Server Functions in ABAP](#call-rfc-server-functions-in-abap).

```csharp
using ERPConnect; 

static void Main(string[] args)
{
    static RFCServer s = new RFCServer();
    s.GatewayHost = "hamlet";
    s.GatewayService = "sapgw11";
    s.ProgramID = "ERPTEST";

    s.IncomingCall += new RFCServer.OnIncomingCall(s_IncomingCall);

    RFCServerFunction f = s.RegisteredFunctions.Add("Z_ADD_3");

    RFCTableColumnCollection Columns = new RFCTableColumnCollection ();
    Columns.Add("NUMB", 10, 0, RFCTYPE.NUM);
    Columns.Add("NUMB2", 10, 0, RFCTYPE.NUM);

    f.Imports.Add("NUMBERS",Columns );
    f.Exports.Add("RES", RFCTYPE.INT);

    s.Start();

    Console.WriteLine("Press Enter to quit");
    Console.ReadLine();
}

```

A structure (*NUMBERS*) with 2 columns (*NUMB1* and *NUMB2*) is added to a column collection via `RFCTableColumnCollection()`. The result (*RES*) is passed back to the calling ABAP program, see [Call RFC Server Functions in ABAP](#call-rfc-server-functions-in-abap).

```csharp
using ERPConnect; 

static void Main(string[] args)
{

    static RFCServer s = new RFCServer();
    s.GatewayHost = "hamlet";
    s.GatewayService = "sapgw11";
    s.ProgramID = "ERPTEST";

    s.IncomingCall += new RFCServer.OnIncomingCall(s_IncomingCall);

    RFCServerFunction f = s.RegisteredFunctions.Add("Z_ADD_4");

    RFCTableColumnCollection Columns = new RFCTableColumnCollection ();
    Columns.Add("NUMB1", 10, 0, RFCTYPE.NUM);
    Columns.Add("NUMB2", 10, 0, RFCTYPE.NUM);

    RFCTableColumnCollection EXColumns = new RFCTableColumnCollection();
    EXColumns.Add("NUMB1", 10, 0, RFCTYPE.NUM);
    EXColumns.Add("NUMB2", 10, 0, RFCTYPE.NUM);

    f.Imports.Add("NUMBERS",Columns );
    f.Exports.Add("EXNUMBERS", EXColumns);

    s.Start();

    Console.WriteLine("Press Enter to quit");
    Console.ReadLine();
}

```

Two structures (*NUMBERS* and *EXNUMBERS*) with 2 columns (*NUMB1* and *NUMB2*) are added to column collections via `RFCTableColumnCollection()`. One structure (*NUMBERS*) is used for import and the other (*EXNUMBERS*) is passed back to the calling ABAP program, see [Call RFC Server Functions in ABAP](#call-rfc-server-functions-in-abap).

### Handle Incoming Calls

The following code shows how the *IncomingCall* event is handled:

```csharp
private static void s_IncomingCall(RFCServer Sender, RFCServerFunction CalledFunction) 
{ 
   if (CalledFunction.FunctionName=="Z_ADD") 
   { 
      Int32 i1 = (Int32)CalledFunction.Imports["NUMBER1"].ParamValue; 
      Int32 i2 = (Int32)CalledFunction.Imports["NUMBER2"].ParamValue; 
      Int32 res = i1 + i2; 
      CalledFunction.Exports["RES"].ParamValue = res; 
      Console.WriteLine("Incoming Call"); 
   } 
   Else 
      throw new ERPConnect.ERPException("Function unknown"); 
}

```

The result is returned in the scalar export parameter *RES*.

```csharp
static void s_IncomingCall(RFCServer Sender, RFCServerFunction CalledFunction)
{
    Console.WriteLine("Incoming call!!");

    Int32 res = 0;

    foreach (RFCStructure row in CalledFunction.Tables["NUMBERS"].Rows)
        res += Convert.ToInt32(row["NUMB"]);

    CalledFunction.Exports["RES"].ParamValue = res;
}

```

Use the object hierarchy to iterate through the rows and add the values. The result is returned in the scalar export parameter *RES*.

```csharp
static void s_IncomingCall(RFCServer Sender, RFCServerFunction CalledFunction)
{
    Console.WriteLine("Incoming call!!");

    Int32 res = 0;
    RFCStructure numberstruc = CalledFunction.Imports["NUMBERS"].ToStructure();

    Int32 i1 = Convert.ToInt32(numberstruc["NUMB"].ToString());
    Int32 i2 = Convert.ToInt32(numberstruc["NUMB2"].ToString());

    res = i1 + i2;

    CalledFunction.Exports["RES"].ParamValue = res;
}

```

The result is returned in the scalar export parameter *RES*.

```csharp
static void s_IncomingCall(RFCServer Sender, RFCServerFunction CalledFunction)
{
    Console.WriteLine("Incoming call!!");

    RFCTableColumnCollection EXColumns = new RFCTableColumnCollection();
    EXColumns.Add("NUMB1", 10, 0, RFCTYPE.NUM);
    EXColumns.Add("NUMB2", 10, 0, RFCTYPE.NUM);

    CalledFunction.Exports.Add("EXNUMBER", EXColumns);
    RFCStructure numberstruc = CalledFunction.Imports["NUMBERS"].ToStructure();

    Int32 i1 = Convert.ToInt32(numberstruc["NUMB1"].ToString());
    Int32 i2 = Convert.ToInt32(numberstruc["NUMB2"].ToString());

    RFCStructure EXnumbers = CalledFunction.Exports["EXNUMBERS"].ToStructure();
    EXnumbers["NUMB1"] = i1 + 1;
    EXnumbers["NUMB2"] = i2 + 98;
}

```

The values from the IMPORT collection (*numberstruc*) are set in variables. Then different values are added to them and are written back to the EXPORT collection (*EXnumbers*).

The import parameters are passed by the calling SAP system.\
The export parameters are passed back to SAP.

### Call RFC Server Functions in ABAP

The following ABAP code is used to call the new function *Z_ADD* in the remote destination *ERPTEST*.

```abap
REPORT z_add_test 

DATA result TYPE i.
CALL FUNCTION 'Z_ADD' DESTINATION 'ERPTEST' 
   EXPORTING 
      number1 = 26 
      number2 = 25 
   IMPORTING 
      res = result. 
   WRITE: / 'Result: ', result.  

```

The two numbers 26 and 25 are passed, and the result 51 is passed back.

```abap
REPORT  zaddtest2 

DATA res TYPE i.
DATA numbs LIKE zaddstruc OCCURS 0 WITH HEADER LINE.

numbs-numb = '1'.
APPEND numbs.
numbs-numb = '2'.
APPEND numbs.
numbs-numb = '3'.
APPEND numbs.

CALL FUNCTION 'Z_ADD_2' DESTINATION 'ERPConnectTEST'
  IMPORTING
    res     = res
  TABLES
    numbers = numbs.

WRITE: / 'Result: ', res.

```

The two numbers 1, 2 and 3 are passed, and the result 6 is passed back.

```abap
REPORT  ZADDTEST3

DATA res TYPE i.
DATA numbs LIKE zaddstruc2.

numbs-numb1 = '1'.
numbs-numb2 = '2'.

CALL FUNCTION 'Z_ADD_3' DESTINATION 'ERPTEST'
  EXPORTING
    NUMBERS       = numbs
 IMPORTING
   RES           = res.

WRITE: / 'Result: ', res.

```

The two numbers 1 and 2 are passed, and the result 3 is passed back.

```abap
REPORT  ZADDTEST4                               .
                            .
DATA numbs LIKE zaddstruc2.
DATA exnumbers like zaddstruc2.

numbs-numb1 = '1'.
numbs-numb2 = '2'.

CALL FUNCTION 'Z_ADD_4' DESTINATION 'ERPTEST'
  EXPORTING
    NUMBERS       = numbs
   IMPORTING
   EXNUMBERS      = exnumbers.

WRITE: / 'First result is (added 1): ', exnumbers-numb1 .
WRITE: / 'Second result is (added 98): ', exnumbers-numb2 .

```

The two numbers 1 and 2 are passed, and the results 2 and 100 are passed back.

______________________________________________________________________

#### Related Links

- [Transactional RFC Server](../../../samples/transactional-rfc-server/)
- [Calculate the length of the SAP type QUAN when setting up an RFC-Server](../../../samples/calculate-the-length-of-the-sap-type-quan--when-setting-up-an-rfc-server/)
