---
title: Integration with Cloud Interfaces
description: This article describes a use case where Xtract Core is integrated into a customer application.
search:
  exclude: true
---

This article describes a use case where {{ productName }} is integrated into an on-premise application that uses a cloud interface.

### About the Application

As a whitelabel solution, {{ productName }} can be used to create custom SAP interfaces.
The initial use case for {{ productName }} was an integration into a hybrid cloud application.
In this scenario, {{ productName }} operates on-premise within the customer's infrastructure, while a cloud-based application handles the user interface. 

The application uses {{ productName }} to:

- Create and delete SAP data sources
- Fetch tables and table metadata from SAP systems
- Create and delete destinations for the SAP data
- Create and delete Table extractions
- Run extractions


### Integration of {{ productName }}

The following graphic shows how {{ productName }} was integrated into the software architecture of the application:

![cloud-application](../assets/images/articles/xc/cloud-application.svg){ width="100%" }
