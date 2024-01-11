---
title: Fetch Data from a BW Query
description: Executing BW Queries
---

The following sample shows how to fetch data from a BW Query using ERPConnect.

### About
This sample uses the BW query *ZSIMPLEQUERY* which is based on the cube *0D_DECU*. <br>
The following screenshot shows the query in the designer. 

![BW-001]( site:assets/images/erpconnect/samples/BW-001.png){:class="img-responsive" }

!!! note
    To allow external access to a BW Query the checkbox **Allow external access** has to be set to active in the preferences for the query.

The dimensions *Material* and *Sold-to party* as well as the key figures *Billed Quantity* and *Costs* can be drawn into a *DataGrid*, see screenshot below. <br>
The dimension has a variable called *MAT01* that allows a limitation to the material number.

![BW-002]( site:assets/images/erpconnect/samples/BW-002.png){:class="img-responsive" width="600px" }

### Call ZSIMPLEQUERY

The following sample code calls the BW Query ZSIMPLEQUERY:

{% include "erpconnect/code/call-a-bw-query.md" %}

