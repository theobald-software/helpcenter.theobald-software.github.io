### Prerequisites

Administrator permissions are required to install ERPConnect.

### Setup

`ERPConnectSetup.exe` is an industry standard setup. Execute the `ERPConnectSetup.exe` file and follow the instructions of the setup.\
The installation process copies the class library and all available tools into the program directory.

After the installation you are able to use ERPConnect in your .NET environment.\
The license installation procedure is described in the section [Installing the license](../licensing/).

### Program Directory Files

The list below shows several most important files that are placed into the default directory `C:\Program Files\ERPConnect` after installation:

| Files | Description | | --- | --- | | ERPConnect35.dll (**\***) | The ERPConnect class library for .NET 3.5 SP1 or higher. | | ERPConnectStandard20.dll (**\***) | The ERPConnect class library for .NET Standard 2.0. | | ERPConnect35.xml ERPConnectStandard20.xml | Visual Studio documentation files. | | TransactionRecorder.exe | Small tool to record batch sequences and create appropriate .NET code, see [Transaction Templates](../../transactions/transaction-recorder/). | | IdocSchemeGenerator.exe | Small tool to generate XML schemas for IDocs, see [IDocs Templates](../../idocs/idocs-schema-generator/). | | FunctionTemplateGenerator.exe | Small tool to generate XML templates for RFCFunction objects, see [BAPI/Function Module Templates](../../bapis-and-function-modules/function-template-generator/). |

After the installation you are able to use ERPConnect in your .NET environment.\
The files marked with (**\***) can be supplied as redistributables with your application.
