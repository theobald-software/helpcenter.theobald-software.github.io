
### Prerequisites

- SNC must be configured in your SAP system.
For more information about SNC configuration in SAP, see [SAP Documentation: Configuring the Application Server](http://help.sap.com/saphelp_nw73/helpdata/en/44/0e2e0cc7330d19e10000000a114a6b/frameset.htm). 
- Check the SAP profile parameter *snc/gssapi_lib* in SAP (transaction RZ10) to determine, which library is used for encryption in your SAP system. 
Your SAP Basis has to import and configure the same library on the application server and on the machine that runs {{ productName }}, e.g., `sapcrypto.dll`.

