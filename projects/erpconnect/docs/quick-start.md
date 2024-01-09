---
title: Quick Start
hide:
  - navigation
---

<div class="grid cards" markdown>

-   ![img](site:assets/images/icons/theo-thumbs.png){ .lg .middle width="30px"} This section shows how to install and set up ERPConnect for the first time.

</div>

### Installation

1. [Download](https://theobald-software.com/testversion-herunterladen) a 30 days trial version of ERPConnect.
2. Run the ERPConnect executable to install ERPConnect.
For information on system requirements, see [Requirements](documentation/introduction/requirements.md).
3. Download one of the following SAP libraries from the SAP Marketplace download area: 
	- [Classic RFC library](documentation/introduction/saplibraries.md#client-protocol-rfc-librfc32dll)
	- [Netweaver RFC library](documentation/introduction/saplibraries.md#netweaver-rfc-library)
4. When using a 64-bit system, copy the 64-bit version of the library to the `\System32` folder.<br>
When using a 32-bit system, copy the 32-Bit Version of librfc32.dll to the `\SysWoW64` folder.
5. Add the ERPConnect.dll class library as a reference to your project. <br>
The library is located in the ERPConnect installation directory, e.g., `C:\Program Files\ERPConnect`.

For more information, see [Installation](documentation/introduction/installation.md).

### Connect to SAP

1. Create an `R3Connection` object and define all [input parameters](documentation/sap-connection/log-on-to-sap.md/#input-parameters).<br>
Make sure to use an SAP dialog user with sufficient SAP authorization, see [Authorization Objects - SAP User Rights](samples/authority-objects-sap-user-rights.md)
{% include "erpconnect/code/sap-connection.md" %}
2. Establish the connection using `Open()`.
3. Run the program to test the SAP connection.

!!! note
	After the 30 days trial is expired, the license number must be set **before** connecting to SAP:
	``` csharp
	ERPConnect.LIC.SetLic("XXXXXXXXXX");
	```

For more information, see [Connect to SAP](documentation/sap-connection/log-on-to-sap.md).

### Next Steps

ERPConnect offers the following features for reading and writing data from and to SAP:

{% include "erpconnect/features.md" %}