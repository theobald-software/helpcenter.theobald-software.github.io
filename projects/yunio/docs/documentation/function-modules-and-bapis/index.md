---
title: Integrate Function Modules / BAPIs
icon: component/bapi
description: Information about the integration type Function Module / BAPI
---

This page shows how to use the {{ bapi }} {{ component }}.<br>
The {{ bapi }} {{ component }} can be used to parameterize and execute SAP function modules and BAPIs for automation.


!!! warning 
	**Missing Authorization.**<br>
    To use the {{ bapi }} {{ component }}, access to the designated authority objects (RFC) in SAP must be available. 
	For more information, see [SAP Authority Objects: BAPI](../setup-in-sap/sap-authority-objects.md/#bapi).

### About Function Modules / BAPIs

Function modules are procedures that encapsulate and reuse global functions in the SAP system. 
SAP systems contain several predefined functions modules that can be called from any ABAP program. 
A Business Application Programming Interface (BAPI) is a remote function module that can access business data and processes of an SAP system from different systems.
<!---
Every Function Module / BAPI provides import and export parameters. 
These parameters are used to pass or get scalar values. An exchange of tables is also possible.
-->


{% include "/components/bapis-and-function-modules/support-disclaimer.md" %}

