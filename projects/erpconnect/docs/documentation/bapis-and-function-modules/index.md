---
title: BAPIs/Function Modules
description: Calling BAPIs and Function Modules
---

Function modules are single functions managed by the SAP Function Builder (transaction **SE37**) and developed in SAP's programming language ABAP.

!!! note
    A BAPI/Function Module must have the attribute **Remote Enabled** to be called from outside the SAP system via the RFC protocol.

### About BAPIs/Function Modules
Every BAPI/Function Module provides import and export parameters. 
These parameters are used to pass or get scalar values.
An exchange of tables is also possible. 

The figure below shows the object hierarchy that is provided by ERPConnect to manage the exchange of imports, exports and table parameters.

![clientarchitecture](site:assets/images/erpconnect/documentation/erpconnect-client-architecture.png){:class="img-responsive"  width="450"}  

