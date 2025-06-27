This section contains information about system requirements and compatible SAP systems for ERPConnect.

### .NET Framework

ERPConnect (without LINQ to ERP) consists of two .NET assemblies that [target different frameworks](https://docs.microsoft.com/en-US/dotnet/standard/frameworks):

- ERPConnect35.dll (targets .NET Framework 3.5 SP1)
- ERPConnectStandard20.dll (targets .NET Standard 2.0)

That results in the following compatibility matrix:

| | ERPConnectStandard20.dll | ERPConnect35.dll | | --- | --- | --- | | .NET Framework 3.5 SP1 | | X | | .NET Framework 4.0 | | X | | .NET Framework 4.5 | | X | | .NET Framework 4.5.1 | | X | | .NET Framework 4.5.2 | | X | | .NET Framework 4.6 | | X | | .NET Framework 4.6.1 and newer | X | X | | .NET Core 2.0 and newer | X | X | | Universal Windows Platform 10.0.16299 and newer | X | |

### Supported SAP Systems and Releases

The following SAP Systems are supported:

- All SAP ABAP based systems that provide RFC connectivity and all SAP S/4 HANA (Cloud) systems that provide OData connectivity are supported.
- SAP ABAP systems on any database are supported (including HANA). The database used by the SAP system is irrelevant, because the integration occurs at SAP application server level.
- SAP systems running on Big Endian and Little Endian hardware are supported.
- SAP industry solutions like IS-U, IS-R, etc. are supported.
- SAP releases 4.6C and newer are supported.
- All operating systems are supported.

Examples

- [SAP S/4HANA](../../../samples/supported-sap-and-hana-versions/)
- mySAP
- SAP Application Server ABAP
- Message Server
- Router
- Standalone Gateway
- SAP Business Suite 7 (CRM, SRM, SCM etc.)
- SAP Business All in One, CAR, APO, PI
- SAP BW 3.1 and later
- SAP BW/BI 7.x
- SAP ERP / ECC 5.0 / ECC 6.0 (including all EhPs)
- SAP R/3 Version 4.6C and later
- SAP BW/4HANA
- ...and more.

**Disclaimer**

While SAP versions that are no longer supported by SAP still work with Theobald Software products, they are excluded from the Theobald Software support service.

#### Not Supported SAP Systems

The following SAP Systems are not supported:

- SAP systems that don’t run on ABAP systems
- SAP systems that don't provide RFC connectivity.

Examples

- SAP S/4HANA Cloud Public Edition
- Business By Design
- Business One
- Business Objects
- Sybase
- Ariba
- Success Factors
- Concur

Installation of custom function modules / transport requests is not required.

### Ports

The following ports between the Windows server that runs ERPConnect and the SAP server, must be open:

| SAP NetWeaver Component | Port (NN = System number of the SAP system) | | --- | --- | | SAP Application Server | 33<NN> | | SAP Message Server | 36<NN> | | Secure Network Communication (SNC) | 48<NN> | | SAP-Router | 3299 |

For more information, see [SAP Help: TCP/IP Ports of All SAP Products](https://help.sap.com/viewer/ports).

### Operating Systems

- Windows 11
- Windows Server 2022 (until 2031-10-14)
- Windows 10 (until 2025-10-14)
- Windows Server 2022
- Windows Server 2019 (until 2029-01-09)
- Windows Server 2016 (until 2027-01-12)

### Visual Studio

- Visual Studio 2022
- Visual Studio 2019
- Visual Studio 2017
- Visual Studio 2015 (until 14.10.2025)

### Other Applications and Frameworks

- [SAP NetWeaver RFC Library 7.50](https://launchpad.support.sap.com/#/notes/2573790)
- [Visual C++ 2013 Runtime](https://www.microsoft.com/en-US/download/details.aspx?id=40784)
- [SAP Library](../saplibraries/)

### Memory

- 2 GB or more recommended (depends on actual use case)

### Disk Space

- About 50 MB disk space are required for a full installation.

### 32/64-Bit Environment

- Both x86 and x64 platforms are supported.

Copy the 64-bit version of librfc32.dll to the `\System32` folder.\
Copy the 32-Bit Version of librfc32.dll to the `\SysWoW64` folder.

### Security Settings

- For logging on to SAP, a system or dialog user with appropriate [authority objects](../../sap-authority-objects/) is required.
- Plain authentication (user/password), Secure Network Communications (SNC) with and without Single Sign-On (SSO) and SAP Logon Tickets (MYSAPSSO2) are supported.

### Network Settings

Ports need to be opened depending on the SAP System connection technique. Details can be found in the knowledge base article [How to check the accessibility to a SAP System](../../../samples/how-to-check-the-accessibility-to-a-sap-system/).
