This page shows how to reference the SAP RFC destination in the DeltaQ extraction type.

Using the DeltaQ extraction type requires customization in SAP, see [Customizing for DeltaQ](../../setup-in-sap/customization-for-deltaq/). After an RFC Destination is set up in SAP, the RFC destination and the RFC target system must be entered in the DeltaQ extraction type.

### Settings in the DeltaQ Extraction Type

#### Gateway

Click **[]** to look up an [RFC destination](../../setup-in-sap/customization-for-deltaq/) or enter the data of your RFC destination manually:

| Input Field | Description | | --- | --- | | Host | The name (or IP address) of your SAP system. Make sure that the Gateway host is the same as in your [SAP Connection](../../sap-connection/). | | Service | The gateway service is generally *sapgwNN*, where *NN* is the instance number of your SAP system, e.g., a number between *00* and *99*. *NN* must have the same value as the *System No* field in your [SAP Connection](../../sap-connection/) or the instance number in your SAP logon. | | Program ID | The name of the registered RFC server. Make sure that the registration of the Program ID and the host is whitelisted in the reginfo ACL on the SAP Gateway, see [SAP Blog: RFC Gateway Security](https://blogs.sap.com/2021/01/26/rfc-gateway-security-part-1-basic-understanding/). |

#### Logical Destination

Click **[]** to look up a logical RFC target system or enter the name of the RFC target system manually.

### Customizing Check

In the main window of the component click **Customizing Check** to validate the DeltaQ customizing on the SAP system. Make sure that all check marks are green.
