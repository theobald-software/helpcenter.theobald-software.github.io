
### Prerequisites

- A connection to an SAP system is available, see [SAP Connection](../sap-connection/index.md).
- The SAP user has sufficient user rights, see [SAP Authority Objects](../setup-in-sap/sap-authority-objects.md/#odp).
- Implement the following SAP notes to use ODP:
	- [1931427 - ODP Data Replication API 2.0](https://launchpad.support.sap.com/#/notes/1931427)
	- [2232584 - Release of SAP extractors for ODP replication (ODP SAPI)](https://launchpad.support.sap.com/#/notes/2232584)
	- [1560241 - Release of DataSources for ODP data replication API](https://launchpad.support.sap.com/#/notes/1560241)
	- [2196500 - ODP Package size cannot be reduced below 50 MB](https://launchpad.support.sap.com/#/notes/2196500/D)
	- [2191995 - ODQ Package Size cannot be reduced below 50 MByte](https://launchpad.support.sap.com/#/notes/2191995/D)
- DataSources have to be activated in SAP, see [SAP Help: Activating DataSources in the SAP OLTP System](https://help.sap.com/docs/SLH_advanced_compliance_reporting_service/7a60944343e543a1ab99e9b2904dab09/e5d447257a95416190d29638a64a5dfa.html).
- Before creating ODP extractions, test the ODP source in SAP using the ABAP report RODPS_REPL_TEST to rule out and troubleshoot ODP problems in the ODP source.
For more information, see [SAP Wiki: Replication test with RODPS_REPL_TEST](https://wiki.scn.sap.com/wiki/display/BI/Replication+test+with+RODPS_REPL_TEST).

!!! note
	The ODP API 1.0 has limitations compared to ODP API 2.0, e.g., ODP API 1.0 does not support the extraction of Hierarchy DataSources. 
	For more information, see [SAP Wiki: Limitation of ODP API 1.0](https://wiki.scn.sap.com/wiki/display/BI/Limitation+of+ODP+API+1.0). 

	