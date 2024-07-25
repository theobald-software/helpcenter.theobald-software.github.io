
### Prerequisites

- SNC must be configured in your SAP system.
For more information about SNC configuration in SAP, see [SAP Help: Configuring the Application Server](http://help.sap.com/saphelp_nw73/helpdata/en/44/0e2e0cc7330d19e10000000a114a6b/frameset.htm). 
- Check the SAP profile parameter *snc/gssapi_lib* in SAP (transaction RZ10) to determine, which library is used for encryption in your SAP system. 
Your SAP Basis has to import and configure the same library on the application server and on the machine that runs {{ productName }}, e.g., `sapcrypto.dll`.
{% if page.meta.product == "xtract-universal" or page.meta.product == "board-connector"%}- The {{ productName }} server must be set up to use the HTTPS protocol, see [Server Settings](../server/server-settings.md#web-server).{% endif %}

For information on how to set up SNC via X.509 certificate, refer to the [Knowledge Base Article: Enable Secure Network Communication (SNC) via X.509 certificate](../../knowledge-base/enable-snc-using-pse-file.md).
