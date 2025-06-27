This page contains information about system requirements and compatible SAP systems for yunIO.

### Supported SAP Systems and Releases

The following SAP Systems are supported:

- All SAP ABAP based systems that provide RFC connectivity and all SAP S/4 HANA (Cloud) systems that provide OData connectivity are supported.
- SAP ABAP systems on any database are supported (including HANA). The database used by the SAP system is irrelevant, because the integration occurs at SAP application server level.
- SAP systems running on Big Endian and Little Endian hardware are supported.
- SAP industry solutions like IS-U, IS-R, etc. are supported.
- SAP releases 4.6C and newer are supported.
- All operating systems are supported.

Examples

- [SAP S/4HANA](/yunio/knowledge-base/supported-sap-and-hana-versions)
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

### Ports

The following ports between the Windows server that runs yunIO and the SAP server, must be open:

| SAP NetWeaver Component | Port (NN = System number of the SAP system) | | --- | --- | | SAP Application Server | 33<NN> | | SAP Message Server | 36<NN> | | Secure Network Communication (SNC) | 48<NN> | | SAP-Router | 3299 |

For more information, see [SAP Help: TCP/IP Ports of All SAP Products](https://help.sap.com/viewer/ports).

### Operating Systems

- Windows 11
- Windows Server 2022 (until 2031-10-14)
- Windows 10 (until 2025-10-14)
- Windows Server 2022
- Windows Server 2019 (until 2029-01-09)
- Windows Server 2016 (until 2027-01-12)

### Supported Web Browsers

yunIO supports current versions of the following web browsers:

Firefox

Chrome

Edge

Safari

### Hardware

The following requirements apply to the hardware:

| Hardware | Minimum Requirement | | --- | --- | | Processor Cores | 2 Cores | | Processor Speed | Processor: 1.4 GHz, recommended is 2.0 GHz or faster | | Main Memory | 8 GB | | Disk Space | min. 150 MB required for installation | | 64-Bit Environment | 64-Bit operating systems only | | Display Resolution | 1920x1080x1.25 with 1.25 display scaling |
