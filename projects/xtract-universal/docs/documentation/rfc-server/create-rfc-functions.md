---
title: Create RFC Functions
description: Sample
---

This section shows how to create, register and use RFC server functions.


### Register the RFC Server Function

1. Initialize an *RFCServer* object. Provide the gateway host, the gateway service and the program ID to register on the SAP gateway.
The program ID must be available as a registered destination in SAP, see [Set Up an RFC Destination](prerequisites.md). 
2. Register an *RFCServerFunction* object using `RegisteredFunctions.Add`.
An *RFCServer* object can hold more than one *RFCServerFunction* object.  
3. Add Imports and Exports. They are handled the same way as when calling RFC functions as a client. 
4. When an ABAP program calls the function, the event *IncomingCall* is triggered. <br>
When using C#, the event call-back must be defined in a separate line of code.  
5. Start the server using `Start`.

!!! note
    If the RFC destination is set to Unicode (SAP transaction code **SM59**), the property *IsUnicode* of the *RFCServer* object must be set to true.

{% include "erpconnect/create-rfc-functions.md" %}

*****
#### Related Links
- [Transactional RFC Server](../../samples/transactional-rfc-server.md)
- [Calculate the length of the SAP type QUAN when setting up an RFC-Server](../../samples/calculate-the-length-of-the-sap-type-quan--when-setting-up-an-rfc-server.md)
