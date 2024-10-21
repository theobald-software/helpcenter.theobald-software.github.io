
### Parameterization using Expression Properties

The recommended way of parameterization is to use SSIS expressions to set *Data Flow Properties*. 
*Data Flow Properties* are displayed in the "Properties" window of the Data Flow Task. 

!!! note
	*Data Flow Properties* are not to be confused with *Custom Properties* that are displayed in the "Properties" window of the component. 
	When parameterizing the *Data Flow Properties*, the *Custom Properties* are overwritten.

For more information on property expressions, see [Microsoft Documentation: Use Property Expressions in Packages](https://learn.microsoft.com/en-us/sql/integration-services/expressions/use-property-expressions-in-packages).

1. Right-click the Data Flow canvas and select **Properties**. The window "Properties" opens.
2. Add an *Expression* by clicking using **[…]**. The window "Property Expression Editor" opens.<br>
![Expressions](../../assets/images/documentation/components/table/xis/expressions.png){:class="img-reagierend"}
3. Select a property from the drop-down list under *Property*.<br>
4. Open the "Expression Builder" using the **[…]** button under *Expression*.
5. Build your Expression and click **[Evaluate Expression]** to check for correct syntax.
6. Confirm your input with **[OK]**.