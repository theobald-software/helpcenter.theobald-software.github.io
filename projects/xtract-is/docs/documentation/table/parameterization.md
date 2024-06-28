---
title: Parameterization 
description: Parametrization 
---

This page shows how to parameterize the {{ table }} {{ component }} using SSIS variables directly in the component and by using SSIS expressions to set *Data Flow Properties*.


### Parameterization using SSIS Variables

SSIS variables can be used to parameterize the WHERE Clause in the {{ table }} {{ component }}, see [Dynamic WHERE Clause with SSIS Variables](where-clause.md#dynamic-where-clause-with-ssis-variables).

{% include "components/xis-pass-parameters.md" %}

### Data Flow Properties of {{ table }}
List of *Data Flow Properties* that can be parameterized:

|Property Name|Description|
|:----|:----|
| *[Xtract Table].[WhereClause]*| Corresponds to the tab *WHERE clause* in the Table component. Allows parameterization of the complete WHERE clause, see [Knowledge Base Article: Dynamization of WHERE Conditions](../../knowledge-base/dynamization-of-where-conditions.md).|
| *[Xtract Table].[ConvertsDates]*| Enable or disable conversion of SAP dates, see [ConvertsDates](#convertsdates). |
| *[Xtract Table].[CustomFunctionName]*| Corresponds to the setting [Function Module](settings.md#function-module) in the {{ table }} {{ component }}.|
| *[Xtract Table].[MaxRows]*| Corresponds to the setting [Row Limit](settings.md#max-limit) in the {{ table }} {{ component }}. |
| *[Xtract Table].[MinDateReplacement]*| Converts the SAP date 00000000 to the entered value, see [MinDateReplacement](#mindatereplacement).|
| *[Xtract Table].[MaxDateReplacement]*| Converts the SAP date 9999XXXX to the entered value, see [MaxDateReplacement](#maxdatereplacement).|
| *[Xtract Table].[InvalidDateReplacement]*| Every invalid value will be converted into the entered value, see [InvalidDateReplacement](#invaliddatereplacement).|
| *[Xtract Table].[PackageSize]*| Corresponds to the setting [Package Size](settings.md#package-size) in the {{ table }} {{ component }}. |

### Custom Properties of {{ table }}

The *Custom Properties* are properties that are unique to the {{ component }}.
When parameterizing the component using SSIS variables, the *Custom Properties* are overwritten.

The *Custom Properties* of the {{ table }} {{ component }} are displayed in the "Properties" window. 

![table-properties](../../assets/images/xis/documentation/table/table-properties.png)

{% include "components/table/xis-properties.md" %}

#### MaxRows
Corresponds to the setting [Row Limit](settings.md#max-limit) in the {{ table }} {{ component }}. 

#### OrderBy
Defines the table field that is used as the sort criterion for the result. 

#### PackageSize
Corresponds to the setting [Package Size](settings.md#package-size) in the {{ table }} {{ component }}. 

#### UseWideStrings
Defines whether DT_WSTR / DT_NTEXT (*true*) or DT_STR / DT_TEXT (*false*) is used as the data type for string columns. 

#### UseLegacyDateConversion
The property *UseLegacyDateConversion* is used for migration of table extractions from Xtract IS versions < 5.0.0. 
The default value of this property is *False*. 
As a prerequisite for using *UseLegacyDateConversion* property, the *ConvertsDates* property must be set to *True*. 
Setting *UseLegacyDateConversion* to *true* does the following:
- Invalid SAP date values are replaced with the value entered in the *InvalidDateReplacement* property.
- There is no replacement for SAP dates that contain the year '9999'. 
The value entered in the *MaxDateReplacement* property is *not* considered.
- SAP dates that contain the year '0000' are replaced with *NULL*. 
The value entered in the *MinDateReplacement* property is *not* considered. 

#### WhereClause
Corresponds to the tab *WHERE clause* in the {{ table }} {{ component }}. 
This property allows parameterization of the complete WHERE clause, see [Knowledge Base Article: Dynamization of WHERE Conditions](../../knowledge-base/dynamization-of-where-conditions.md).|

****
#### Related Links
- [{{ table }} Settings](settings.md) <br>
- [Knowledge Base Article: Dynamization of WHERE Conditions](../../knowledge-base/dynamization-of-where-conditions.md)