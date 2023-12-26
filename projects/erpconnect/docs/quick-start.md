---
title: Quick Start
hide:
  - navigation
---

### Installation and Setup

1. [Download](https://theobald-software.com/testversion-herunterladen) a 30 days trial version of ERPConnect.
2. Run the ERPConnect executable to install ERPConnect.
For information on system requirements, see [Requirements](guide/introduction/requirements.md).
3. To communicate with SAP download one of the following SAP libraries from the SAP Marketplace download area: 
	- [Classic RFC library](guide/introduction/saplibraries.md#client-protocol-rfc-librfc32dll)
	- [Netweaver RFC library](guide/introduction/saplibraries.md#netweaver-rfc-library)
4. When using a 64-bit system copy the 64-bit version of the library to the `\System32` folder.<br>
When using a 32-bit system copy the 32-Bit Version of librfc32.dll to the `\SysWoW64` folder.
5. Add the ERPConnect.dll class library as a reference to your project.

For more information, see [Installation](guide/introduction/installation.md).

### Connect to SAP

1. Create an `R3Connection` object and define all [input parameters](guide/sap-connection/log-on-to-sap.md/#input-parameters).<br>
Make sure to use an SAP dialog user with sufficient SAP authorization, see [Authorization Objects - SAP User Rights](samples/authority-objects-sap-user-rights.md)
{% include "erpconnect/code/sap-connection.md" %}
2. Establish the connection using `Open()`.
3. Run the program to test the SAP connection.

!!! note
	After the 30 days trial is expired, the license number must be set before connecting to SAP.
	``` csharp
	ERPConnect.LIC.SetLic("XXXXXXXXXX");
	```

For more information, see [Connect to SAP](guide/sap-connection/log-on-to-sap.md).

### Next Steps

ERPConnect offers the following features for reading and writing data from and to SAP:

|  Functionality / SAP Objects  |  Description   |  
|----------|-------------|
|  [__ABAP Code__](guide/abap/index.md) | Generate and execute ABAP code on-the-fly. |
|   [__BAPIs and Function Modules__](guide/bapis-and-function-modules/index.md) | Access BAPIs and RFC function modules to read and write data from and to SAP. |
|   [__BW Cube and BEx Queries__](guide/bw-cubes-and-bw-queries/index.md) | Extract data from SAP BW InfoCubes and BEx Queries. |
|   [__IDocs__](guide/idocs/index.md) | Send and receive SAP IDocs. |
|   [__Queries__](guide/queries/index.md) | Extract SAP queries (not BEx queries). |
|   [__RFC Server Functions__](guide/rfc-server/index.md) | Create, register and use RFC server functions. |
|   [__Tables__](guide/table/index.md) | Read SAP Tables directly via RFC. |
|   [__Transactions__](guide/transactions/index.md) | Execute SAP transactions via batch input. |
