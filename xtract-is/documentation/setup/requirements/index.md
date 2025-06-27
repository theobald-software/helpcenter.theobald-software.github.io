This page contains information about system requirements and compatible SAP systems for Xtract IS.

### Supported Visual Studio Versions

- Visual Studio 2015
- Visual Studio 2017
- Visual Studio 2019
- Visual Studio 2022

Note

To create SSIS packages in Visual Studio, SQL Server Data Tools (SSDT) are required. Make sure to use the SSDT that correlates to your SQL Server version. For more information, see [Microsoft Documentation: Download SQL Server Data Tools (SSDT) for Visual Studio](https://docs.microsoft.com/en-us/sql/ssdt/download-sql-server-data-tools-ssdt?view=sql-server-ver15).

### Supported SQL Server Versions

- SQL Server 2016
- SQL Server 2017
- SQL Server 2019
- SQL Server 2022

### Supported SQL Server Integration Services (SSIS)

- SQL Server Integration Services (SSIS) 2014 SP3 (until 2024-07-09)
- SQL Server Integration Services (SSIS) 2016 SP2 (until 2026-07-14)
- SQL Server Integration Services (SSIS) 2017 (until 2027-10-12)
- SQL Server Integration Services (SSIS) 2019 (until 2030-01-08)
- SQL Server Integration Services (SSIS) 2022

The version of the SQL Server Database used to read or write data can differ from the SQL Server Integration Services (SSIS) version, e.g., you can use SSIS version 2019 to write data to SQL Server Database version 2022.

### Supported SAP Systems and Releases

The following SAP Systems are supported:

- All SAP ABAP based systems that provide RFC connectivity and all SAP S/4 HANA (Cloud) systems that provide OData connectivity are supported.
- SAP ABAP systems on any database are supported (including HANA). The database used by the SAP system is irrelevant, because the integration occurs at SAP application server level.
- SAP systems running on Big Endian and Little Endian hardware are supported.
- SAP industry solutions like IS-U, IS-R, etc. are supported.
- SAP releases 4.6C and newer are supported.
- All operating systems are supported.

Examples

- [SAP S/4HANA](/xtract-is/knowledge-base/supported-sap-and-hana-versions)
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

### HANA Database

You can use Operational Data Provisioning (ODP) to connect the SAP HANA database of an SAP ABAP source system. Communication is done via RFC. With the ODP context for SAP HANA (HANA) the following HANA View types are available for extracting:

- Analysis Views
- Calculation Views
- Associated Attribute Views

Direct access to a HANA database without an SAP ABAP source system running on the corresponding HANA database is not supported.

### Ports

The following ports between the Windows server that runs Xtract IS and the SAP server, must be open:

| SAP NetWeaver Component | Port (NN = System number of the SAP system) | | --- | --- | | SAP Application Server | 33<NN> | | SAP Message Server | 36<NN> | | Secure Network Communication (SNC) | 48<NN> | | SAP-Router | 3299 |

For more information, see [SAP Help: TCP/IP Ports of All SAP Products](https://help.sap.com/viewer/ports).

### Installation and Configuration on SAP

| Component | SAP Release | Requirements on the SAP System | | --- | --- | --- | | [Xtract Table](/xtract-is/documentation/table/) | Rel. > 4.6C | Installation of a custom function module [/THEO/READ_TABLE](/xtract-is/documentation/setup-in-sap/custom-function-module-for-table-extraction/#installation-of-theoread_table) is recommended. | | [Xtract BAPI](/xtract-is/documentation/bapi/) | Rel. > 4.6C | No requirements. Only remote-enabled functions are supported. | | [Xtract Query](/xtract-is/documentation/query/) | Rel. > 4.6C | No requirements. | | [Xtract Report](/xtract-is/documentation/report/) | Rel. > 4.6C | Installation of a custom function module [Z_XTRACT_IS_REMOTE_REPORT](/xtract-is/documentation/setup-in-sap/custom-function-module-for-reports/) is required. | | [Xtract BWCube](/xtract-is/documentation/bwcube/) | Rel. > BW 3.1 | No requirements. BEx Queries require external access ("Allow External Access to this Query" option must be active). | | [Xtract Hierarchy](/xtract-is/documentation/hierarchy/) | Rel. > BW 3.1 | No requirements. | | [Xtract ODP](/xtract-is/documentation/odp/) | SAP_BASIS >= 730, BW >= 7,3X | No requirements. | | [Xtract DeltaQ](/xtract-is/documentation/deltaq/) | Rel. > 4.6C | Customization required, see [Customization for DeltaQ](/xtract-is/documentation/setup-in-sap/customization-for-deltaq/). | | [Xtract OHS](/xtract-is/documentation/ohs/) | Rel. > BW 3.5 | Customization required, see [Customization for OHS in BW](/xtract-is/documentation/setup-in-sap/customization-for-ohs-in-bw/). | | [Xtract TableCDC](/xtract-is/documentation/table-cdc/) | SAP ECC 5.0 or above | Installation of a custom function modules is necessary, see [Table CDC Requirements](/xtract-is/documentation/table-cdc/#prerequisites). |

For Information about the installation of the custom function modules and the SAP customization, check the section [SAP Customization](/xtract-is/documentation/setup-in-sap/).

### SAP Licenses

Additional SAP licenses might be required for extracting data from SAP. Contact SAP to verify these requirements.

### Operating Systems

- Windows 11
- Windows Server 2022 (until 2031-10-14)
- Windows 10 (until 2025-10-14)
- Windows Server 2022
- Windows Server 2019 (until 2029-01-09)
- Windows Server 2016 (until 2027-01-12)

### Other Applications and Frameworks

.NET Framework 4.7.2 or higher, see [Download .NET Framework from the Microsoft website](https://support.microsoft.com/en-us/help/4054530/microsoft-net-framework-4-7-2-offline-installer-for-windows).

### Hardware

The following requirements apply to the hardware:

| Hardware | Minimum Requirement | | --- | --- | | Main Memory | 4 GB. Depending on data volume, more memory may be required | | Disk Space | min. 50 MB total for Installation | | 32/64-Bit Environment | both 32-Bit and 64-Bit operating systems are supported |
