---
title: Parameterization 
description: Parametrization 
---

This page shows how to parameterize the {{ deltaq }} {{ component }} using SSIS variables directly in the component and by using SSIS expressions to set *Data Flow Properties*.

### Parameterization using SSIS Variables

SSIS variables store values that an SQL Server Integration Services package and its containers, tasks, and event handlers can use at runtime.

You can use SSIS variables for selections.
Available SSIS variables are listed in the selection settings when parameter input (:runtime-parameters-dynamic:) is selected, see [Edit Selections](selections.md#edit-selections).

#### Use SSIS Variables with @-Notation

The following input fields in the {{ deltaq }} {{ component }} allow entry of an SSIS variable:

- [*Logical Destination*](deltaq-customization.md/#logical-destination)
- [*Gateway Host*](deltaq-customization.md/#gateway)
- [*Gateway Service*](deltaq-customization.md/#gateway)
- [*Program ID*](deltaq-customization.md/#gateway)
- [*Update Mode Variable*](settings.md/#update-mode-variable)
- [*RequestID*](settings.md/#request-id)

{% include "components/xis-ssis-notation.md" %}

{% include "components/xis-pass-parameters.md" %}

### Data Flow Properties of {{ deltaq }}
List of *Data Flow Properties* that can be parameterized:

|Property |Description|
|:----|:----|
| *[Xtract DeltaQ].[GatewayHost]*|Corresponds to the setting [Gateway Host](deltaq-customization.md/#gateway) in the {{ deltaq }} {{ component }}.|
| *[Xtract DeltaQ].[GatewayService]*|Corresponds to the setting [Gateway Service](deltaq-customization.md/#gateway) in the {{ deltaq }} {{ component }}.|
| *[Xtract DeltaQ].[ProgramID]*|Corresponds to the setting [Program ID](deltaq-customization.md/#gateway) in the {{ deltaq }} {{ component }}.|
| *[Xtract DeltaQ].[RequestID]*|Corresponds to the setting [RequestID](settings.md/#request-id) in the {{ deltaq }} {{ component }}.|
| *[Xtract DeltaQ].[TargetSystem]*|Corresponds to the setting [Logical Destination](deltaq-customization.md/#logical-destination) in the {{ deltaq }} {{ component }}.|
| *[Xtract DeltaQ].[UpdateType]*|Corresponds to the drop-down menu [Update Mode](update-mode.md/#update-modes) in the {{ deltaq }} {{ component }}. Permitted values are: Full (70), Delta (68), Init (67), InitNoData (83), Repeat (82), InitNonCumulative (73), Activate (65). |

### Custom Properties of {{ deltaq }}

The *Custom Properties* are properties that are unique to the {{ component }}.
When parameterizing the component using SSIS variables, the *Custom Properties* are overwritten.

The *Custom Properties* of the {{ deltaq }} {{ component }} are displayed in the "Properties" window. 

![deltaq-properties](../../assets/images/documentation/components/deltaq/{{ abbr }}-deltaq-properties.png)

List of the relevant *Custom Properties*:

|Property|Description|
|:----|:----|
| *GatewayHost* | Corresponds to the setting [Gateway Host](deltaq-customization.md/#gateway) in the {{ deltaq }} {{ component }}.|
| *GatewayService* |Corresponds to the setting [Gateway Service](deltaq-customization.md/#gateway) in the {{ deltaq }} {{ component }}.|
| *HierClass* | Corresponds to the setting [Hierarchy Class](settings.md/#hierarchy-class) in the {{ deltaq }} {{ component }}.|
| *HierName* | Corresponds to the setting [Hierarchy Name](settings.md/#hierarchy-name) in the {{ deltaq }} {{ component }}. |
| *Language* | Corresponds to the setting [Language](settings.md/#language) in the {{ deltaq }} {{ component }}.|
| *NewTimeStampFormatInRequestLog* | If this value is set to *true* (X), the format of the timestamp in the request log is changed.|
| *OLTPSourceName* | Name of the OLTP source to be extracted.|
| *OLTPSourceType* | Type of the OLTP source to be extracted.|
| *ProgramID* | Corresponds to the setting [Program ID](deltaq-customization.md/#gateway) in the {{ deltaq }} {{ component }}.|
| *RequestID* | Corresponds to the setting [RequestID](settings.md/#request-id) in the {{ deltaq }} {{ component }}.|
| *TargetSystem* | Corresponds to the setting [Logical Destination](deltaq-customization.md/#logical-destination) in the {{ deltaq }} {{ component }}.|
| *Timeout* | Sets a timeout for the extraction.|
| *TransferMethod* | Corresponds to the setting [Transfer Mode](settings.md/#transfer-mode) in the {{ deltaq }} {{ component }} (tRTF or IDoc).|
| *TransferStructure* | The transfer structure of the source, e.g., ROHIEROS.|
| *UpdateType* | Corresponds to the drop-down menu [Update Mode](update-mode.md/#update-modes) in the {{ deltaq }} {{ component }}. Permitted values are: Full (70), Delta (68), Init (67), InitNoData (83), Repeat (82), InitNonCumulative (73), Activate (65).|
| *UseLegacyVarUpdate* | Set to *True* for backward compatibility with extractions that use the deprecated update mode [(V)Variable](settings.md/#update-mode-variable).|
| *UseWideString* | Defines whether DT_WSTR / DT_NTEXT (true) or DT_STR / DT_TEXT (false) is used as the data type for string columns.|

****
#### Related Links
- [Microsoft Documentation: Integration Services (SSIS) Variables](https://docs.microsoft.com/en-us/sql/integration-services/integration-services-ssis-variables?view=sql-server-ver15)
- [Microsoft Documentation: Use Property Expressions in Packages](https://learn.microsoft.com/en-us/sql/integration-services/expressions/use-property-expressions-in-packages)

-------------


content/en/xis-specific/parameterization/parametrization-via-variables.md 

