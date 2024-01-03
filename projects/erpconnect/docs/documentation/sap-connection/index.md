---
title: SAP Connection
description: SAP Connection
---

This section contains information on how to connect to SAP systems.

### Prerequisites
ERPConnect requires an RFC library, see [SAP Libraries](../introduction/saplibraries.md).

The RFC API (Remote Function Call) enables an RFC connection between an SAP system and an external system that can communicate with SAP as a client or server.
The RFC API has two versions:

- classic RFC-API (classic RFC library).
- Netweaver-RFC-API (Netweaver RFC library). 

For more information on the RFC libraries, see [SAP Help - RFC API: Classical & NetWeaver](https://help.sap.com/saphelp_nwpi71/helpdata/en/45/18e96cd26321a1e10000000a1553f6/frameset.htm).

### Supported Connection Methods

There are multiple ways to log on to your SAP system with ERPConnect:

- Connect to a [single application server](log-on-to-sap.md/#input-parameters)
- Connect to a [message server (Load Balancing)](log-on-to-sap.md/#input-parameters)
- Connect to a single application server or public or private cloud instance via [RFC over WebSocket](log-on-to-sap.md/#input-parameters)
- Connect using [Single-Sign-On (SSO) and Logon Tickets](sso-with-log-on-tickets.md)
- Connect using [Single-Sign-On (SSO) and Secure Network Communication (SNC)](sso-with-snc.md)
