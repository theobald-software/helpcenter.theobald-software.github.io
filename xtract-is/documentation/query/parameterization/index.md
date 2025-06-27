This page shows how to parameterize the Xtract Query component using SSIS variables directly in the component and by using SSIS expressions to set *Data Flow Properties*.

### Parameterization using SSIS Variables

SSIS variables store values that an SQL Server Integration Services package and its containers, tasks, and event handlers can use at runtime.\
You can use SSIS variables for selections. Available SSIS variables are listed in the selection settings when parameter input () is selected, see [Edit Selections](../variants-and-selections/#edit-selections).

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

### Data Flow Properties of Xtract Query

List of *Data Flow Properties* that can be parameterized:

| Property | Description | | --- | --- | | *[Xtract Query].[Variant]* | Corresponds to the settings [Variants](../variants-and-selections/#choose-a-variant) in the Xtract Query component. |

### Custom Properties of Xtract Query

The *Custom Properties* are properties that are unique to the component. When parameterizing the component using SSIS variables, the *Custom Properties* are overwritten.

The *Custom Properties* of the Xtract Query component are displayed in the "Properties" window.

List of the relevant *Custom Properties*:

| Property | Description | | --- | --- | | *MaxRows* | Corresponds to the settings [MaxRows](../settings/#max-rows) in the Xtract Query component. | | *Variant* | Corresponds to the settings [Variants](../variants-and-selections/#choose-a-variant) in the Xtract Query component.. |

______________________________________________________________________

#### Related Links

- [Microsoft Documentation: Integration Services (SSIS) Variables](https://docs.microsoft.com/en-us/sql/integration-services/integration-services-ssis-variables?view=sql-server-ver15)
- [Microsoft Documentation: Use Property Expressions in Packages](https://learn.microsoft.com/en-us/sql/integration-services/expressions/use-property-expressions-in-packages)
