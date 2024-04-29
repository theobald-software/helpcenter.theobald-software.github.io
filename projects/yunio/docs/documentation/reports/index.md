---
title: Integrate Reports
icon: component/report
description: Information about the integration type Report
---

This page shows how to use the {{ report }} {{ component }}.<br>
The {{ report }} {{ component }} can be used to extracts data from ABAP reports and SAP transactions.

!!! warning 
	**Missing Authorization.**<br>
    To use Reports in yunIO, access to the designated authority objects (RFC) in SAP must be available.
    For more information, refer to the knowledge base article [SAP Authority Objects: Report](../setup-in-sap/sap-authority-objects.md/#report).

### About Reports

ABAP report programs extract and present huge amounts of data for SAP business applications.
SAP offers predefined standard reports that cover the basic needs of customers.
They can be executed via transaction codes. 

!!! tip
	Use transaction code SAP1 to get a list of all reports for all modules

{% include "/components/abap-reports/support-disclaimer.md" %}

