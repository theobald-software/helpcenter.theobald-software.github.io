---
title: SSO and SNC
description: SAP connection with SSO and SNC
---

The RFCServer class supports SAP connection with SSO and SNC.<br>
The RFCServer class works similarly to the R3Connection class, see [ERPConnect with SSO with SNC](../sap-connection/sso-with-snc.md).

!!! note
    Note the prerequisites described in [SSO with SNC - Prerequisites](../sap-connection/sso-with-snc.md#prerequisites) beschrieben.


### SAP Connection with SSO and SNC
The RFCServer class provides the property *SNCSettings*. 
Assign the partner name in the SAP transaction **SM59** (e.g. p:RFCServerSNC@THEOBALD) to the property *OwnName* of *SNCSettings*.
  
```csharp linenums="1" title="SSO and SNC"
RFCServer rfcServer = new RFCServer();
rfcServer.GatewayHost = "sap-erp-as05.example.com";
rfcServer.GatewayService = "sapgw00";
rfcServer.ProgramID = "SNCTEST";
rfcServer.SNCSettings.Enabled = true;
rfcServer.SNCSettings.Mechanism = SNCMechanism.Kerberos5;
rfcServer.SNCSettings.OwnName = "p:RFCServerSNC@THEOBALD";
 
rfcServer.Protocol = ClientProtocol.RFC;
rfcServer.CanReceiveIdocs = true;
rfcServer.IsUnicode = true;
```
  
![RFCServer-Destination]( site:assets/images/erpconnect/documentation/RFCServer-Destination.png){:class="img-responsive"}

!!! note
    If SNC is used with Kerberos and Active Directory, the Active Directory account used for the RFC server must have a Service Principal Name corresponding to the partner name in SAP.

![RFCServer-AD]( site:assets/images/erpconnect/documentation/RFCServer-AD.png)
      
