---
title: Parameterization 
description: Parametrization 
---

This page shows how to parameterize the {{ ohs }} {{ component }} using SSIS variables directly in the component and by using SSIS expressions to set *Data Flow Properties*.


{% include "components/xis-pass-parameters.md" %}

### Data Flow Properties of {{ ohs }}
List of *Data Flow Properties* that can be parameterized:

|Property Name|Description|
|:----|:----|
| *[Xtract OHS].[ConvertsDates]*| Enable or disable conversion of SAP dates, see [ConvertsDates](#convertsdates). |
| *[Xtract OHS].[ConvertsTimes]*| Enable or disable conversion of SAP times.|
| *[Xtract OHS].[MinDateReplacement]*| Converts the SAP date 00000000 to the entered value, see [MinDateReplacement](#mindatereplacement).|
| *[Xtract OHS].[MaxDateReplacement]*| Converts the SAP date 9999XXXX to the entered value, see [MaxDateReplacement](#maxdatereplacement).|
| *[Xtract OHS].[InvalidDateReplacement]*| Every invalid value will be converted into the entered value, see [InvalidDateReplacement](#invaliddatereplacement).|

### Custom Properties of {{ ohs }}

The *Custom Properties* are properties that are unique to the {{ component }}.
When parameterizing the component using SSIS variables, the *Custom Properties* are overwritten.

The *Custom Properties* of the {{ ohs }} {{ component }} are displayed in the "Properties" window. 

![ohs-properties](../../assets/images/documentation/components/ohs/xis/ohs-properties.png)

{% include "components/table/xis-properties.md" %}

****
#### Related Links
- [{{ ohs }} Settings](settings.md)
- [Microsoft Documentation: Use Property Expressions in Packages](https://learn.microsoft.com/en-us/sql/integration-services/expressions/use-property-expressions-in-packages)
