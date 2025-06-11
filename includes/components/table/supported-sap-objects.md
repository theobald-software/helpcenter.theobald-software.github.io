
### Supported SAP Objects 

- Transparent tables
- Views
- ABAP CDS Views - the following requirements / limitations apply to CDS Views with parameters:
	- ABAP version is 7.40 SP08 or higher
	- the SAP user that is used in the SAP connection has permission to read the standard tables DDLDEPENDENCY and DD10B
	- no support for table joins
- HANA CDS Views
- Pool tables - table joins are not supported
- Cluster tables - table joins are not supported
