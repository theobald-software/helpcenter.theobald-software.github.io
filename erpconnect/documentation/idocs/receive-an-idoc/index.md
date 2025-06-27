This section shows how to receive and process an IDoc.\
To configure your SAP system to receive IDocs, see [Set Up a Test Environment for IDocs](../prerequisites/#set-up-a-test-environment-for-idocs).

### About

The following sample receives a *MATMAS* IDoc that contains material descriptions. The material descriptions are written into the console window to check the contents of the IDoc.

The *MATMAS* IDoc is analyzed using the *E2MARAM005* segment. Within this segment, several *E2MAKTM001* child segments contain material descriptions.

Tip

You can use the transaction **WE60** to look up the structures of IDocs in SAP.

### Receive a MATMAS IDoc

Follow the steps below to receive a MATMAS IDoc:

1. Create an RFC Server object to accept calls from SAP, see [RFC Server](/erpconnect/documentation/rfc-server/create-rfc-functions/) for more information.
1. To receive IDocs with the *RFCServer* object, set the property `CanReceiveIdocs` to *true*.
1. When an IDoc is received by ERPConnect, the event `IncomingIdoc` is triggered and a reference to the *RFCServer* object and to the *IDoc* object is transferred.
1. Use the `IncomingIdoc` event to read the data buffer of the child segment *E2MAKTM001*. The description text is located at index 4 with a length of 40 in *E2MAKTM001*.
1. Write the description texts into the console window.
1. Run the program.
1. Send an IDoc in SAP and check the result.

```csharp
using System;
using ERPConnect;
using ERPConnect.Idocs;

// Set your ERPConnect license
LIC.SetLic("xxxx");

using var server = new RFCServer();
server.Logging = true;
server.GatewayHost = "hamlet";
server.GatewayService = "sapgw11";
server.ProgramID = "ERPTEST";
server.CanReceiveIdocs = true;

server.InternalException += (_, exception) =>
{
    Console.WriteLine($"Internal error: {exception.Message}");
};

server.IncomingIdoc += (_, idoc) =>
{
    Console.WriteLine("Received Idoc " + idoc.IDOCTYP);
    IdocSegment e1maram = idoc.Segments["E2MARAM005", 0];
    for (int i = 0; i < e1maram.ChildSegments.Count; i++)
    {
        if (e1maram.ChildSegments[i].SegmentName != "E2MAKTM001")
        {
            continue;
        }

        string text = e1maram.ChildSegments[i].ReadDataBuffer(4, 40);
        Console.WriteLine($"Material text found: {text}");
    }
};

server.Start();

Console.WriteLine("Server is running. Press any key to exit.");
Console.ReadLine();

server.Stop();

```

Output:

In this case, 5 *E2MAKTM001* segments were found so 5 texts are passed.

Note

If you do not want to read the data buffer with offset and length of the texts, you can load an XML Schema instead, see [Templates](../idocs-schema-generator/).

______________________________________________________________________

#### Related Links

- [Setting Up a Test Environment for IDocs](../prerequisites/#set-up-a-test-environment-for-idocs)
- [Set Up Receiving IDocs](../prerequisites/#set-up-receiving-idocs)
