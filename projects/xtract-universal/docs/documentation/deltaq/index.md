---
title: DeltaQ
description: How to use the DeltaQ extraction type
icon: component/deltaq
---

This page shows how to use the {{ deltaq }} {{ component }}.<br>
The {{ deltaq }} {{ component }} can be used to extract delta data from SAP DataSources. 
This means that only recently added or changed data is extracted, instead of a full load.
For more information on the delta process, see [Initialize a Delta Process](update-mode.md/#initialize-a-delta-process).




{% include "components/deltaq/prerequisites.md" %}

{% include "components/deltaq/auth-warning.md" %}

{% include "components/deltaq/sap-transactions.md" %}

{% include "components/xu-bc-new.md"  %}

{% include "components/deltaq/define-a-deltaq-extraction.md" %}

*****
#### Related Links
- [DeltaQ Troubleshooting Guide](../../troubleshooting.md/#deltaq-troubleshooting). 
- [SAP Help: Activate the BI Content DataSource](https://help.sap.com/saphelp_scm70/helpdata/ru/d8/8f5738f988d439e10000009b38f842/content.htm?no_cache=true)
- [Knowledge Base Article: Create Generic DataSource using Function Module and Timestamps](../../knowledge-base/create-generic-datasource-using-function-module-and-timestamps.md)
