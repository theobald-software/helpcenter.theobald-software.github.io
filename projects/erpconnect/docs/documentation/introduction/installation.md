---
title: Installation
description: Installation specifics
---

### Prerequisites

Administrator permissions are required to install ERPConnect.

### Setup

`ERPConnectSetup.exe` is an industry standard setup. Execute the `ERPConnectSetup.exe` file and follow the instructions of the setup. <br>
The installation process copies the class library and all available tools into the program directory.

![ERPConnect_Setup]( site:assets/images/erpconnect/documentation/ERPConnect_Setup.png){:class="img-responsive" }

After the installation you are able to use ERPConnect in your .NET environment.<br>
The license installation procedure is described in the section [Installing the license](./licensing.md).

### Program Directory Files
The list below shows several most important files that are placed into the default directory `C:\Program Files\ERPConnect` after installation:

| Files | Description |
| :------ |:--- | 
| ERPConnect35.dll (<b>*</b>) | The ERPConnect class library for .NET 3.5 SP1 or higher. |
| ERPConnectStandard20.dll (<b>*</b>)| The ERPConnect class library for .NET Standard 2.0.|
| ERPConnect35.xml <br>ERPConnectStandard20.xml | Visual Studio documentation files. |
| TransactionRecorder.exe | Small tool to record batch sequences and create appropriate .NET code, see [Transaction Templates](../transactions/transaction-recorder.md). |
| IdocSchemeGenerator.exe | Small tool to generate XML schemas for IDocs, see [IDocs Templates](../idocs/idocs-schema-generator.md). |
| FunctionTemplateGenerator.exe | Small tool to generate XML templates for RFCFunction objects, see [BAPI/Function Module Templates](../bapis-and-function-modules/function-template-generator.md). |

After the installation you are able to use ERPConnect in your .NET environment. <br>
The files marked with (<b>*</b>) can be supplied as redistributables with your application.

