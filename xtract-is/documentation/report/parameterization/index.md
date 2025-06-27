This page shows how to parameterize the Xtract Report component using SSIS variables directly in the component and by using SSIS expressions to set *Data Flow Properties*.

### Parameterization using SSIS Variables

SSIS variables store values that an SQL Server Integration Services package and its containers, tasks, and event handlers can use at runtime.\
You can use SSIS variables for selections. Available SSIS variables are listed in the selection settings when parameter input () is selected, see [Edit Selections](../variants-and-selections/#edit-selections).

Note

The Xtract Report component does not support variables of the data types *DateTime* and *DBNull*. For more information on the data types of system variables, see [Microsoft Documentation: System Variables](https://docs.microsoft.com/en-us/sql/integration-services/system-variables?view=sql-server-ver15).

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

### Data Flow Properties of Xtract Report

List of *Data Flow Properties* that can be parameterized:

| Property | Description | | --- | --- | | *[Xtract Report].[Variant]* | Corresponds to the settings [Variants](../variants-and-selections/#choose-a-variant) in the {{ r }} component. | | *[Xtract Report].[BatchJobDestination]* | Corresponds to the setting [Spool Destination](../settings/#spool-destination) in the Xtract Report component. | | *[Xtract Report].[BatchJobName]* | Corresponds to the setting [Background Job Name](../settings/#background-job-name) in the Xtract Report component. | | *[Xtract Report].[BatchJobTimeout]* | Corresponds to the setting [Background Job Timeout](../settings/#background-job-timeout) in the Xtract Report component. |

### Custom Properties of Xtract Report

The *Custom Properties* are properties that are unique to the component. When parameterizing the component using SSIS variables, the *Custom Properties* are overwritten.

The *Custom Properties* of the Xtract Report component are displayed in the "Properties" window.

List of the relevant *Custom Properties*:

| Property | Description | | --- | --- | | *BatchJobDestination* | Corresponds to the setting [Spool Destination](../settings/#spool-destination) in the Xtract Report component. | | *BatchJobName* | Corresponds to the setting [Background Job Name](../settings/#background-job-name) in the Xtract Report component. | | *BatchJobTimeout* | Corresponds to the setting [Background Job Timeout](../settings/#background-job-timeout) in the Xtract Report component. | | *DynamicColumnWidthsAndOffsets* | Corresponds to the setting [Dynamic Column Widths and Offsets](../report-columns-define/#dynamic-column-width-and-offset) in the Xtract Report component. | | *ReportRowsPerDataRow* | Corresponds to the setting [Report Rows Per Data Row](../report-rows-define/#report-rows-per-data-row) in the Xtract Report component. | | *ReportWidth* | Corresponds to the setting [Report Width](../report-rows-define/#report-width) in the Xtract Report component. | | *SkipBottomRows* | Corresponds to the setting [Skip Rows from Bottom](../report-rows-define/#skip-rows-from-bottom) in the Xtract Report component. | | *SkipTopRows* | Corresponds to the setting [Skip Rows from Top](../report-rows-define/#skip-rows-from-top) in the Xtract Report component. | | *UseBatch* | Corresponds to the setting [Use Background Mode](../settings/#use-background-mode) in the Xtract Report component. | | *Variant* | Corresponds to the setting [Variant](../variants-and-selections/#choose-a-variant) in the Xtract Report component. |

______________________________________________________________________

#### Related Links

- [Microsoft Documentation: Integration Services (SSIS) Variables](https://docs.microsoft.com/en-us/sql/integration-services/integration-services-ssis-variables?view=sql-server-ver15)
- [Microsoft Documentation: Use Property Expressions in Packages](https://learn.microsoft.com/en-us/sql/integration-services/expressions/use-property-expressions-in-packages)
