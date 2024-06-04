---
title: Prerequisites
description: Prerequisites in SAP
---

{% include "erpconnect/set-up-an-rfc-destination.md" %}

### Set Up a Test Environment for IDocs 

To receive test IDocs, you can set up a test environment in your SAP system.<br>
Follow the steps below to set up a test environment that can send *MATMAS* IDocs for distributing material master data: 

1. Define a Logical System to which the IDocs can be sent.<br>
Use the transaction **SPRO** to open *Customizing* and navigate to *SAP Web Application Server -> ALE -> Sending and Receiving Systems -> Logical Systems -> Define Logical System* (this path is valid for Release 4.7).
Create a new line and enter the name of the system e.g., ERPCONNECT and a short description.
2. Use the transaction **SM59** to create an RFC Destination, see [Set Up an RFC Destination](#set-up-an-rfc-destination).
3. Use the transaction **WE21** to create a *Transactional RFC* IDoc Port. <br>
The name of the port must be unique and refer to the RFC destination defined in step 2. <br>
![IDoc-Test-Environment_001]( site:assets/images/erpconnect/documentation/IDoc-Test-Environment_001.png){:class="img-responsive" width="800px"}
4. Use the transaction **WE20** to create a Partner Profile for the logical system created in step 1.<br>
Add an outbound parameter using the **[+]** button. 
For this example select *MATMAS* as the message type, *MATMAS05* as the IDoc basic type and enter the name of the port created in step 3 as the logical receiver port. <br>
![IDoc-Test-Environment_002]( site:assets/images/erpconnect/documentation/IDoc-Test-Environment_002.png){:class="img-responsive" width="600px"}
5. Use the transaction **BD10** to open the menu for sending IDocs. 
Enter the logical system as shown in the figure below and run the program via **[F8]**.
The IDocs are created and sent to the specified port.<br>
![IDoc-Test-Environment_003]( site:assets/images/erpconnect/documentation/IDoc-Test-Environment_003.png){:class="img-responsive" width="800px"}

### Set Up Receiving IDocs

The following instructions show how to customize your SAP system for processing IDocs and creating sales orders.

1. Use the transaction **WE20** to create a Partner Profile. <br>
In case of a SalesOrder IDoc, the external system acts like a customer.
The customer number is the appropriate partner number. Use *KU* as the partner type. <br>
![IDoc-Receive-001]( site:assets/images/erpconnect/documentation/IDoc-Receive-001.png){:class="img-responsive" width="600px"}
2. Add an inbound parameter and select *ORDERS* as the message type and *ORDE* as the process code.
That enables the SAP system to find the right routines for creating a sales order, when an IDoc is received.<br>
![IDoc-Receive-002]( site:assets/images/erpconnect/documentation/IDoc-Receive-002.png){:class="img-responsive" width="600px"}
3. Use the transaction **VOE2** to process the incoming data. The transaction creates a line in the *EDSDC table*.
Assign the following parameters for the customer number that sends the IDoc: 
Sales organization, distribution channel, division, sales type.<br>
![IDoc-Receive-003]( site:assets/images/erpconnect/documentation/IDoc-Receive-003.png){:class="img-responsive" width="800px"}

