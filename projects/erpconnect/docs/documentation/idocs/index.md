---
title: IDocs
description: Receiving and Sending IDocs
---

IDocs are electronic documents that can be sent from or to SAP systems. <br>
You can exchange IDocs between SAP systems or between one SAP system and an external application. 
ERPConnect provides a set of classes to send, receive and construct IDocs.

### About IDocs
An IDoc consists of one control record and several data records. 
The control record contains routing data and information about the sending and the receiving system. 
The data records are arranged hierarchically. 
A single data record is also called segment. 
One segment itself consists of several fields.
For more information, see [SAP Help: Structure, Documentation, and Definition of IDoc Types](https://help.sap.com/viewer/8f3819b0c24149b5959ab31070b64058/7.40.18/en-US/4aa93e5005e24458e10000000a42189b.html). 

!!! tip
    You can use the transaction **WE60** to look up the structures of IDocs in SAP.


The figure below shows the IDoc object structure of ERPConnect.<br>
Each segment can contain child segments and every segment contains several field objects.

![SAP-IDoc-Object-Model](site:assets/images/erpconnect/documentation/SAP-IDoc-Object-Model.png){:class="img-responsive" width="450"}

