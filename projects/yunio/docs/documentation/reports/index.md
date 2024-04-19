---
title: Integrate Reports
# icon: component/report
description: Information about the integration type Report
---

This section shows how to use the {{ report }} {{ component }}.<br>
The {{ report }} {{ component }} can be used to extracts data from ABAP reports and SAP transactions.

!!! warning "Warning! Missing Authorization"
    To use Reports in yunIO, access to the designated authority objects (RFC) in SAP must be available.
    For more information, refer to the knowledge base article [SAP User Rights: Report](https://kb.theobald-software.com/sap/authority-objects-sap-user-rights#report).

### About Reports

ABAP report programs extract and present huge amounts of data for SAP business applications.
SAP offers predefined standard reports that cover the basic needs of customers.
They can be executed via transaction codes. 

!!! tip
	Use transaction code SAP1 to get a list of all reports for all modules

{% include "/components/abap-reports/support-disclaimer.md" %}

### Prerequisites

- A connection to an SAP system, see [SAP Connection](../sap-connection/index.md) is available.
- The SAP user has sufficient user rights, see [SAP Authority Objects](../setup-in-sap/sap-authority-object.md/#report).
- The custom function module `Z_XTRACT_IS_REMOTE_REPORT` is installed in your SAP system, see [Installation of Z_XTRACT_IS_REMOTE_REPORT](#sap-customizing).
- The report returns a table-like structure in SAP.

