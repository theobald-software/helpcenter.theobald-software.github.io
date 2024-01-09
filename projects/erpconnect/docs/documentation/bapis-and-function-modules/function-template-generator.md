---
title: Templates
description: FunctionTemplateGenerator
---

The *Function-Template-Generator* provided by ERPConnect generates reusable XML templates for Function Modules and BAPIs.

### Create XML Templates

1. Run the *FunctionTemplateGenerator.exe* in the ERPConnect directory `C:\Program Files\ERPConnect` to start the *Function-Template-Generator*.
2. Enter the name of a  BAPI/Function Module that you want to use as a template.<br>
![Tools-003](site:assets/images/erpconnect/Tools-003.png)
3. Click **[Generate XML Template]**. 
4. The window "SAP Login" opens. Enter your SAP credentials and click **[OK]**.
5. Save the XML file to your local hard drive. 

### Use XML Templates

1. Create an XML template using the tool *FunctionTemplateGenerator.exe* located in the ERPConnect installation directory.
2. Add the XML file to your project as a resource.
3. Load the XML file into your program as shown in the sample code below.<br>
Now you can use the RFCFunction-object instead of the `CreateFunction` / `CreateBAPI` methods.

```csharp linenums="1" title="Load XML Templates"
using (R3Connection con = new R3Connection("SAPServer", 00, "SAPUser", "Password", "EN", "800"))
{
    RFCFunction f = new RFCFunction("BAPI_CUSTOMER_GETDETAIL");
    f.Connection = con;

    StreamReader reader = new StreamReader(
        System.Reflection.Assembly.GetExecutingAssembly().
            GetManifestResourceStream
                ("PocketGetCustomer.BAPI_CUSTOMER_GETDETAIL.xml"));
    f.LoadFromXML(reader);
}
```