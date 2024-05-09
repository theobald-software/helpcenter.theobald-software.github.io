---
title: Send a STATUS IDoc
description: Send a simple STATUS IDoc
---

The example below shows how to send a STATUS IDoc. 

### About 

The *STATUS* message type is used to manipulate the status of another outbound IDoc e.g., 
when a subsystem receives an IDoc and acknowledges the receive with a status change.
*STATUS* is a simple IDoc that contains only one data record.

!!! note
    Make sure to configure your SAP system to receive IDocs.

### Send a STATUS IDoc

Follow the steps below to send a STATUS IDoc:

1. Connect to the SAP system using `R3Connection`. 
2. Inquire the IDoc number of the IDoc to be manipulated and read the input.
3. Use `CreateIdoc` to instance a valid *IDoc* object. 
"SYSTAT01" is the IDoc type for the appropriate message type STATUS. 
4. Provide receiver and sender information. 
5. Fill in the following fields in segment *E1STATS*: 
	- the new status code (*STATUS*)
	- date and time (*LOGDAT*, *LOGTIM*) 
	- the number of the IDoc to be manipulated
6. Send the IDoc using the `Send`. <br> 
7. Run the program using and check the result.<br>


{% include "erpconnect/code/send-status-idocs.md" %}

Output:

The status code of the manipulated IDoc increases from 3 (Data passed...) to 12 (Dispatch OK). <br>
![IdocSend2]( site:assets/images/erpconnect/samples/IdocSend2.jpg){:class="img-responsive"}

*****

#### Related Links
- [Prerequisites for working with IDocs](../documentation/idocs/prerequisites.md)
- [Reveive an IDoc](receive-an-idoc.md)
- [Send an ORDER IDoc](send-an-order-idoc.md)
- [Send a MATMAS IDoc](send-a-matmas-idoc.md)