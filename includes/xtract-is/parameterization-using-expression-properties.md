
### Parameterization using Expression Properties

The recommended way of parameterization is to use SSIS expressions to set *Data Flow Properties*. 
*Data Flow Properties* are displayed in the "Properties" window of the Data Flow Task. 

!!! note
	*Data Flow Properties* are not to be confused with *Custom Properties* that are displayed in the "Properties" window of the component. 
	When parameterizing the *Data Flow Properties*, the *Custom Properties* are overwritten.

For more information on property expressions, see [Microsoft Documentation: Use Property Expressions in Packages](https://learn.microsoft.com/en-us/sql/integration-services/expressions/use-property-expressions-in-packages).

1. Create an SSIS package, see [Getting Started](../getting-started).
2. Right-click the Data Flow canvas and select **Properties**. The window "Properties" opens.
3. Add an *Expression* by clicking using **[…]**. The window "Property Expression Editor" opens.<br>
![Expressions](../../assets/images/xis/documentation/table/expressions.png){:class="img-reagierend"}
4. Select a property from the drop-down list under *Property*.<br>
5. Open the "Expression Builder" using the **[…]** button under *Expression*.
6. Build your Expression and click **[Evaluate Expression]** to check for correct syntax.
7. Confirm your input with **[OK]**.