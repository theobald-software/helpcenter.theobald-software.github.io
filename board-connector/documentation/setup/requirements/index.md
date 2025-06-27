This page contains information about system requirements and compatible SAP systems for Board Connector.

### Board Server

Version 7.3.1 or higher

### Supported SAP Systems and Releases

The following SAP Systems are supported:

- All SAP ABAP based systems that provide RFC connectivity and all SAP S/4 HANA (Cloud) systems that provide OData connectivity are supported.
- SAP ABAP systems on any database are supported (including HANA). The database used by the SAP system is irrelevant, because the integration occurs at SAP application server level.
- SAP systems running on Big Endian and Little Endian hardware are supported.
- SAP industry solutions like IS-U, IS-R, etc. are supported.
- SAP releases 4.6C and newer are supported.
- All operating systems are supported.

Examples

- [SAP S/4HANA](/board-connector/knowledge-base/supported-sap-and-hana-versions)
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

The following ports between the Windows server that runs Board Connector and the SAP server, must be open:

| SAP NetWeaver Component | Port (NN = System number of the SAP system) | | --- | --- | | SAP Application Server | 33<NN> | | SAP Message Server | 36<NN> | | Secure Network Communication (SNC) | 48<NN> | | SAP-Router | 3299 |

For more information, see [SAP Help: TCP/IP Ports of All SAP Products](https://help.sap.com/viewer/ports).

### Installation and Configuration on SAP

| Extraction Type | SAP Release | Requirements on the SAP System | | --- | --- | --- | | [Table](/board-connector/documentation/table/) | Rel. > 4.6C | Installation of a custom function module [/THEO/READ_TABLE](/board-connector/documentation/setup-in-sap/custom-function-module-for-table-extraction/#installation-of-theoread_table) is recommended. | | [BAPI](/board-connector/documentation/bapi/) | Rel. > 4.6C | No requirements. Only remote-enabled functions are supported. | | [Query](/board-connector/documentation/query/) | Rel. > 4.6C | No requirements. | | [Report](/board-connector/documentation/report/) | Rel. > 4.6C | Installation of a custom function module [Z_XTRACT_IS_REMOTE_REPORT](/board-connector/documentation/setup-in-sap/custom-function-module-for-reports/) is required. | | [BWCube](/board-connector/documentation/bwcube/) | Rel. > BW 3.1 | No requirements. BEx Queries require external access ("Allow External Access to this Query" option must be active). | | [BW Hierarchy](/board-connector/documentation/hierarchy/) | Rel. > BW 3.1 | No requirements. | | [ODP](/board-connector/documentation/odp/) | SAP_BASIS >= 730, BW >= 7,3X | No requirements. | | [DeltaQ](/board-connector/documentation/deltaq/) | Rel. > 4.6C | Customization required, see [Customization for DeltaQ](/board-connector/documentation/setup-in-sap/customization-for-deltaq/). | | [OHS](/board-connector/documentation/ohs/) | Rel. > BW 3.5 | Customization required, see [Customization for OHS in BW](/board-connector/documentation/setup-in-sap/customization-for-ohs-in-bw/). | | [Table CDC](/board-connector/documentation/table-cdc/) | SAP ECC 5.0 or above | Installation of a custom function modules is necessary, see [Table CDC Requirements](/board-connector/documentation/table-cdc/#prerequisites). |

For Information about the installation of the custom function modules and the SAP customization, check the section [SAP Customization](/board-connector/documentation/setup-in-sap/).

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

- .NET Framework 4.7.2 or higher, see [Download .NET Framework from Microsoft](https://support.microsoft.com/en-us/help/4054530/microsoft-net-framework-4-7-2-offline-installer-for-windows).

### Hardware

The following requirements apply to the hardware:

| Hardware | Minimum Requirement | | --- | --- | | Processor Cores | 2 Cores, 1 additional core is required for each additional parallel extraction | | Processor Speed | 1.4 GHz, recommended: 2.0 GHz or faster | | Main Memory | 8 GB, recommended: 12 GB for up to two parallel extractions 4 GB dedicated memory in average for each additional parallel extraction. Check the exact storage requirements of an extraction in your scenario. | | Disk Space | min. 150 MB total for Installation | | 64-Bit Environment | 64-Bit operating systems only | | Display Resolution | 1920x1080x1.25 with 1.25 display scaling |
