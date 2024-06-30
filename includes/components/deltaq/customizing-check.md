
This page shows how to reference the SAP RFC destination in the {{ deltaq }} {{ component }}.

Using the {{ deltaq }} {{ component }} requires customization in SAP, see [Customizing for DeltaQ](../sap-customizing/customizing-for-deltaq).
After an RFC Destination is set up in SAP, the RFC destination and the RFC target system must be entered in the {{ deltaq }} {{ component }}.

### Settings in the {{ deltaq }} {{ Component }}

![deltaq-tech-settings](../../assets/images/documentation/components/deltaq/deltaq-tech-settings.png){:class="img-responsive"}

#### Gateway

Click **[:magnifying-glass:]** to look up an [RFC destination](../setup-in-sap/customization-for-deltaq.md) or enter the data of your RFC destination manually:

| Input Field | Description |
|---|-------------|
| Host| The name (or IP address) of your SAP system. Make sure that the Gateway host is the same as in your [SAP Connection](../sap-connection/index.md).
| Service | The gateway service is generally *sapgwNN*, where *NN* is the instance number of your SAP system, e.g., a number between *00* and *99*. *NN* must have the same value as the *System No* field in your [SAP Connection](../sap-connection/index.md) or the instance number in your SAP logon.| 
| Program ID | The name of the registered RFC server. Make sure that the registration of the Program ID and the host is whitelisted in the reginfo ACL on the SAP Gateway, see [SAP Blog: RFC Gateway Security](https://blogs.sap.com/2021/01/26/rfc-gateway-security-part-1-basic-understanding/). |

#### Logical Destination
Click **[:magnifying-glass:]** to look up a logical RFC target system or enter the name of the RFC target system manually.

### Customizing Check

In the main window of the component click **Customizing Check** to validate the DeltaQ customizing on the SAP system.
Make sure that all check marks are green. 

![customizing-check-successful](../../assets/images/documentation/components/deltaq/customizing-check-successfull.png){:class="img-responsive"}