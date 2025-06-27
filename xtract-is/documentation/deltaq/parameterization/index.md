This page shows how to parameterize the Xtract DeltaQ component using SSIS variables directly in the component and by using SSIS expressions to set *Data Flow Properties*.

### Parameterization using SSIS Variables

SSIS variables store values that an SQL Server Integration Services package and its containers, tasks, and event handlers can use at runtime.

You can use SSIS variables for selections. Available SSIS variables are listed in the selection settings when parameter input () is selected, see [Edit Selections](../selections/#edit-selections).

#### Use SSIS Variables with @-Notation

The following input fields in the Xtract DeltaQ component allow entry of an SSIS variable:

- [*Logical Destination*](../deltaq-customization/#logical-destination)
- [*Gateway Host*](../deltaq-customization/#gateway)
- [*Gateway Service*](../deltaq-customization/#gateway)
- [*Program ID*](../deltaq-customization/#gateway)
- [*Update Mode Variable*](../settings/#update-mode-variable)
- [*RequestID*](../settings/#request-id)

To use SSIS variables in input fields of the component, place an @ symbol before the variable name.

1. Choose an input field that supports SSIS variables.
1. Instead of entering a fixed a value, enter a variable name using the @-notation, e.g., *@vDate*.
1. Create a new SSIS variable with the same name, but without the @ symbol, e.g., *vDate*.
1. Make sure to select the correct data type.

You can now use the SSIS variable to set dynamic input values for the input field.

### Parameterization using Expression Properties

The recommended way of parameterization is to use SSIS expressions to set *Data Flow Properties*. *Data Flow Properties* are displayed in the "Properties" window of the Data Flow Task.

Note

*Data Flow Properties* are not to be confused with *Custom Properties* that are displayed in the "Properties" window of the component. When parameterizing the *Data Flow Properties*, the *Custom Properties* are overwritten.

For more information on property expressions, see [Microsoft Documentation: Use Property Expressions in Packages](https://learn.microsoft.com/en-us/sql/integration-services/expressions/use-property-expressions-in-packages).

1. Right-click the Data Flow canvas and select **Properties**. The window "Properties" opens.
1. Add an *Expression* by clicking using **[…]**. The window "Property Expression Editor" opens.
1. Select a property from the drop-down list under *Property*.
1. Open the "Expression Builder" using the **[…]** button under *Expression*.
1. Build your Expression and click **[Evaluate Expression]** to check for correct syntax.
1. Confirm your input with **[OK]**.

### Data Flow Properties of Xtract DeltaQ

List of *Data Flow Properties* that can be parameterized:

| Property | Description | | --- | --- | | *[Xtract DeltaQ].[GatewayHost]* | Corresponds to the setting [Gateway Host](../deltaq-customization/#gateway) in the Xtract DeltaQ component. | | *[Xtract DeltaQ].[GatewayService]* | Corresponds to the setting [Gateway Service](../deltaq-customization/#gateway) in the Xtract DeltaQ component. | | *[Xtract DeltaQ].[ProgramID]* | Corresponds to the setting [Program ID](../deltaq-customization/#gateway) in the Xtract DeltaQ component. | | *[Xtract DeltaQ].[RequestID]* | Corresponds to the setting [RequestID](../settings/#request-id) in the Xtract DeltaQ component. | | *[Xtract DeltaQ].[TargetSystem]* | Corresponds to the setting [Logical Destination](../deltaq-customization/#logical-destination) in the Xtract DeltaQ component. | | *[Xtract DeltaQ].[UpdateType]* | Corresponds to the drop-down menu [Update Mode](../update-mode/#update-modes) in the Xtract DeltaQ component. Permitted values are: Full (70), Delta (68), Init (67), InitNoData (83), Repeat (82), InitNonCumulative (73), Activate (65). |

### Custom Properties of Xtract DeltaQ

The *Custom Properties* are properties that are unique to the component. When parameterizing the component using SSIS variables, the *Custom Properties* are overwritten.

The *Custom Properties* of the Xtract DeltaQ component are displayed in the "Properties" window.

List of the relevant *Custom Properties*:

| Property | Description | | --- | --- | | *GatewayHost* | Corresponds to the setting [Gateway Host](../deltaq-customization/#gateway) in the Xtract DeltaQ component. | | *GatewayService* | Corresponds to the setting [Gateway Service](../deltaq-customization/#gateway) in the Xtract DeltaQ component. | | *HierClass* | Corresponds to the setting [Hierarchy Class](../settings/#hierarchy-class) in the Xtract DeltaQ component. | | *HierName* | Corresponds to the setting [Hierarchy Name](../settings/#hierarchy-name) in the Xtract DeltaQ component. | | *Language* | Corresponds to the setting [Language](../settings/#language) in the Xtract DeltaQ component. | | *NewTimeStampFormatInRequestLog* | If this value is set to *true* (X), the format of the timestamp in the request log is changed. | | *OLTPSourceName* | Name of the OLTP source to be extracted. | | *OLTPSourceType* | Type of the OLTP source to be extracted. | | *ProgramID* | Corresponds to the setting [Program ID](../deltaq-customization/#gateway) in the Xtract DeltaQ component. | | *RequestID* | Corresponds to the setting [RequestID](../settings/#request-id) in the Xtract DeltaQ component. | | *TargetSystem* | Corresponds to the setting [Logical Destination](../deltaq-customization/#logical-destination) in the Xtract DeltaQ component. | | *Timeout* | Sets a timeout for the extraction. | | *TransferMethod* | Corresponds to the setting [Transfer Mode](../settings/#transfer-mode) in the Xtract DeltaQ component (tRTF or IDoc). | | *TransferStructure* | The transfer structure of the source, e.g., ROHIEROS. | | *UpdateType* | Corresponds to the drop-down menu [Update Mode](../update-mode/#update-modes) in the Xtract DeltaQ component. Permitted values are: Full (70), Delta (68), Init (67), InitNoData (83), Repeat (82), InitNonCumulative (73), Activate (65). | | *UseLegacyVarUpdate* | Set to *True* for backward compatibility with extractions that use the deprecated update mode [(V)Variable](../settings/#update-mode-variable). | | *UseWideString* | Defines whether DT_WSTR / DT_NTEXT (true) or DT_STR / DT_TEXT (false) is used as the data type for string columns. |

______________________________________________________________________

#### Related Links

- [Microsoft Documentation: Integration Services (SSIS) Variables](https://docs.microsoft.com/en-us/sql/integration-services/integration-services-ssis-variables?view=sql-server-ver15)
- [Microsoft Documentation: Use Property Expressions in Packages](https://learn.microsoft.com/en-us/sql/integration-services/expressions/use-property-expressions-in-packages)

______________________________________________________________________

content/en/xis-specific/parameterization/parametrization-via-variables.md
