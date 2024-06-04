---
title: Send IDocs
description: Example- Sending an IDoc from your .Net Application
---

This section shows how to send an IDoc.<br>
To configure your SAP system to send IDocs, see [Set Up a Test Environment for IDocs](./prerequisites.md#set-up-a-test-environment-for-idocs).

There are two ways to create an IDoc object: 

<!---
<div class="grid cards" markdown>
-   `CreateIdoc` 

	---
	
	Creates an IDoc with all segments located in the segment collections. 
	This is useful for sending simple IDocs. 
	
-   `CreateEmptyIdoc` and `CreateSegment` 

	---
	
	Creates only the needed segments. 
</div>
-->

- `CreateIdoc` creates an IDoc with all segments located in the segment collections. <br>
This is useful for sending simple IDocs. 
- `CreateEmptyIdoc` and `CreateSegment` create only the needed segments. 



### Send an IDoc

Follow the steps below to send IDocs:

1. Connect to the SAP system using `R3Connection`. 
2. Use `CreateIdoc` or `CreateEmptyIdoc` to instance a valid *IDoc* object. Provide an object type for the IDocs, e.g., "SYSTAT01", "MATMAS01", "ORDERS01", etc.
3. Provide receiver and sender information. 
4. Fill in the fields in the IDoc segments.
5. Send the IDoc using `Send`. 
6. Run the program and check the result.

!!! tip
    Use SAP transaction WE60 to look up the segment documentation of IDocs.

!!! note
    Make sure to configure your SAP system to receive IDocs.

Examples:

=== "Send a STATUS IDoc"

	{% include "erpconnect/code/send-status-idocs.md" %}

	Output:

	The status code of the manipulated IDoc increases from 3 (Data passed...) to 12 (Dispatch OK). <br>
	![SAP-Send-IDoc-001]( site:assets/images/erpconnect/documentation/SAP-Send-IDoc-001.png){:class="img-responsive" width="400px" }

=== "Send a MATMAS IDoc"

	{% include "erpconnect/code/send-matmas-idocs.md" %}

	Output:

	![MatmasSend](site:assets/images/erpconnect/documentation/samples/MatmasSend.jpg){:class="img-responsive"}

=== "Send an ORDER IDoc"

	{% include "erpconnect/code/send-order-idocs.md" %}

	Output:

	![IdocSalesOrder](site:assets/images/erpconnect/documentation/samples/IdocSalesOrder.png){:class="img-responsive"}


****
#### Related Links
- [Send an ORDER IDoc](../../samples/send-an-order-idoc.md)
- [Send a MATMAS IDoc](../../samples/send-a-matmas-idoc.md)
- [Send a STATUS IDoc](../../samples/send-a-simple-status-idoc.md)
- [Resend IDocs which where set to CPICERR in SM58](../../samples/resend-idocs-which-where-set-to-cpicerr-in-sm58.md)
- [Set Up an RFC-Destination](./prerequisites.md#set-up-an-rfc-destination)

