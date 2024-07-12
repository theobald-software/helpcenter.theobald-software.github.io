
!!! note
	To extract hierarchies from a BW system, use the {{ hierarchy }} {{ component }}.
	To extract hierarchies from an ERP system like ECC or S4, use the [{{ odp }}](../odp/index.md) {{ component }}.
	
### Prerequisites

- A connection to an SAP system is available, see [SAP Connection](../sap-connection/index.md).
- The SAP user has sufficient user rights, see [SAP Authority Objects](../setup-in-sap/sap-authority-objects.md/#bw-hierarchy).


!!! warning  
	**Missing Authorization.**<br>
    To use the {{ componentName }} {{ component }}, access to the designated authority objects (RFC) in SAP must be available.
    Adjust [SAP Authority Objects](site:documentation/setup-in-sap/sap-authority-objects#bw-hierarchy) accordingly.
