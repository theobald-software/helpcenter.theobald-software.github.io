---
title: Selections
description: Datasource parameters
---

This page shows how to define selections to filter the data that is extracted by the {{ deltaq }} {{ component }}.

{% include "components/selections.md" %}


### Script Expressions for {{ deltaq }}

Script expressions are supported and can be used to determine a dynamic date based on the current date. 
Examples:

|   Input                         | Output                                                                         | Description              |
|:--------------------------------------|:------------------------------------------------------------------------------|:--------------------|
|```#{ DateTime.Now.ToString("yyyyMMdd") }#```                                       | yyyyMMdd | Current date in SAP format          |
|```#{ String.Concat(DateTime.Now.Year.ToString(), "0101") }#```                     | yyyy0101 | Current year concatenated with "0101"           |
|```#{ String.Concat(DateTime.Now.ToString("yyyy"), "0101") }#```                    | yyyy0101 | Current year concatenated with "0101"            |
|```#{ String.Concat(DateTime.Now.ToString("yyyyMMdd").Substring(0,4), "0101") }#``` | yyyy0101 | Current year concatenated with "0101"           |

### Data Format

{% include "components/Settings/sap-data-format.md"  %}
