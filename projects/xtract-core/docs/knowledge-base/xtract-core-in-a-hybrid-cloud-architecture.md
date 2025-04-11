---
title: "Xtract Core in a Hybrid Cloud Architecture"
description: This article describes a use case where Xtract Core is integrated into a customer application.
search:
  exclude: true
---

This article outlines a use case where {{ productName }} is deployed within a hybrid cloud architecture, combining on-premises SAP connectivity with a cloud-based user interface.

### About the Application


As a white-label solution, {{ productName }} enables third-party applications to extract data from SAP systems via RESTful services.
A typical implementation scenario involves integration into a hybrid cloud architecture. 
In this setup, {{ productName }} is deployed within the end customer’s on-premises network to maintain direct access to their SAP environment and to ensure secure and compliant data extraction.
Meanwhile, the cloud-based component of the application delivers the user interface.

The application uses {{ productName }} to:

- Create and delete SAP data sources
- Fetch tables and table metadata from SAP systems
- Create and delete destinations for the SAP data
- Create and delete Table extractions
- Run extractions


### Integration of {{ productName }}

The following graphic shows how {{ productName }} was integrated into the architecture of the application:

![cloud-application](../assets/images/articles/xc/cloud-application.svg){ width="100%" }
