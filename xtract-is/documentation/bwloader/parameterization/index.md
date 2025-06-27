### Parameterization using SSIS Variables

SSIS variables store values that an SQL Server Integration Services package and its containers, tasks, and event handlers can use at runtime. The following settings in the Xtract BWLoader component allow entry of an SSIS variable:

- [*Package Size*](../settings/#package-size)
- [*Gateway host*](../#define-the-xtract-bwloader-component)
- [*Gateway service*](../#define-the-xtract-bwloader-component)
- [*Program ID*](../#define-the-xtract-bwloader-component)

#### Use SSIS Variables with @-Notation

To use SSIS variables in input fields of the component, place an @ symbol before the variable name.

1. Choose an input field that supports SSIS variables.
1. Instead of entering a fixed a value, enter a variable name using the @-notation, e.g., *@vDate*.
1. Create a new SSIS variable with the same name, but without the @ symbol, e.g., *vDate*.
1. Make sure to select the correct data type.

You can now use the SSIS variable to set dynamic input values for the input field.

### Custom Properties of Xtract BWLoader

The *Custom Properties* are properties that are unique to the component. When parameterizing the component using SSIS variables, the *Custom Properties* are overwritten.

The *Custom Properties* of the Xtract BWLoader component are displayed in the "Properties" window.

List of relevant *Custom Properties*:

| Property | Comment | | --- | --- | | *DataSourceType* | Corresponds to the setting [*Data Source*](../#look-up-an-infopackage) in the Xtract BWLoader component | | *GatewayHost* | Corresponds to the setting [*Gateway host*](../#define-the-xtract-bwloader-component) in the Xtract BWLoader component. | | *GatewayService* | Corresponds to the setting [*Gateway service*](../#define-the-xtract-bwloader-component) in the Xtract BWLoader component. | | *InfoPackage* | Corresponds to the setting [*InfoPackage*](../#look-up-an-infopackage) in the Xtract BWLoader component. | | *InfoSource* | Corresponds to the setting [*InfoSource*](../#look-up-an-infopackage) in the Xtract BWLoader component. | | *LogSys* | Corresponds to the [*Logical System*](../#look-up-an-infopackage) of the DataSource. | | *NolPackageStartOnlyWait* | Corresponds to the setting [*No InfoPackage Start (Only Wait)*](../settings/#no-infopackage-start) in the Xtract BWLoader component. | | *PackageSize* | Corresponds to the setting [*Package Size*](../settings/#package-size) in the Xtract BWLoader component. | | *ProcessChain* | Corresponds to the setting [*Trigger Process Chain after Upload*](../settings/#trigger-process-chain) in the Xtract BWLoader component. | | *ProgramID* | Corresponds to the setting [*Program ID*](../#define-the-xtract-bwloader-component) in the Xtract BWLoader component. | | *WaitUntilFinished* | Corresponds to the setting [*Wait data transfer to be finished*](../settings/#wait-data-transfer-to-be-finished) in the Xtract BWLoader component |

______________________________________________________________________

#### Related Links:

- [Integration Services (SSIS) Variables](https://docs.microsoft.com/en-us/sql/integration-services/integration-services-ssis-variables?view=sql-server-ver15)
