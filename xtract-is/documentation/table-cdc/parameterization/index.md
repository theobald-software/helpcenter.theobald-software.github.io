This page shows how to parameterize the Xtract TableCDC component using SSIS variables directly in the component and by using SSIS expressions to set *Data Flow Properties*.

### Parameterization using SSIS Variables

SSIS variables can be used to parameterize the WHERE Clause in the Xtract Table component, see [Dynamic WHERE Clause with SSIS Variables](../where-clause/#dynamic-where-clause-with-ssis-variables).

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

### Data Flow Properties of Xtract TableCDC

List of *Data Flow Properties* that can be parameterized:

| Property Name | Description | | --- | --- | | *[Xtract Table CDC].[ConvertsDates]* | Enable or disable conversion of SAP dates, see [ColumnNameStyle](#columnnamestyle). | | *[Xtract Table CDC].[InvalidDateReplacement]* | Every invalid value will be converted into the entered value, see [InvalidDateReplacement](#invaliddatereplacement). | | *[Xtract Table CDC].[MinDateReplacement]* | Converts the SAP date 00000000 to the entered value, see [MinDateReplacement](#mindatereplacement). | | *[Xtract Table CDC].[MaxDateReplacement]* | Converts the SAP date 9999XXXX to the entered value, see [MaxDateReplacement](#maxdatereplacement). |

### Custom Properties of Xtract TableCDC

The *Custom Properties* are properties that are unique to the component. When parameterizing the component using SSIS variables, the *Custom Properties* are overwritten.

The *Custom Properties* of the Xtract TableCDC component are displayed in the "Properties" window.

#### ColumnNameStyle

- *Code*: the SAP technical column name is used as column name in the output, e.g., MAKTX.
- *PrefixedCode*: the SAP technical column name is prefixed by SAP object name and the tilde character, e.g., MAKT~MAKTX.
- *CodeAndText*: the SAP technical column name and the SAP description separated by an underscore are used as column name in the output, e.g., MAKTX_Material Description (Short Text).
- *TextAndCode*: the SAP description and the SAP technical column name description separated by an underscore are used as column name in the destination e.g., Material Description (Short Text)\_MAKTX.

#### ConvertsDates

When this property is set to *True* (default) SAP date fields (YYYYMMDD) assume the SSIS pipeline type DT_DBDATE instead of DT_WSTR. For the date conversions to apply, set the property *UseLegacyDateConversion* to *False*. In case of invalid data in SAP date fields, the following date conversions are applied:

- *InvalidDateReplacement*
- *MaxDateReplacement*
- *MinDateReplacement*

#### InvalidDateReplacement

Replaces an invalid date format. The default value is *1970-01-02*. To use the property enter a replacement value for invalid SAP dates, such as '20190132' (January 32nd 2019) in the format yyyy-mm-dd. The value NULL is supported.

#### MaxDateReplacement

Replaces SAP dates with the year 9999. The default value is *2099-12-31*. To use the property enter a replacement value in the format yyyy-mm-dd that contains the year ‘9999’. Example: ‘99990101’ (January 1st 9999). The value NULL is supported.

#### MinDateReplacement

Replaces SAP dates with the year *0000*. The default value is *1970-01-01*. To use the property enter a replacement value in the format yyyy-mm-dd that contains the year '0000'. Example: '00000000'. The value NULL is supported.

______________________________________________________________________

#### Related Links

- [Xtract TableCDC Settings](../settings/)
- [Knowledge Base Article: Dynamization of WHERE Conditions](../../../knowledge-base/dynamization-of-where-conditions/)
