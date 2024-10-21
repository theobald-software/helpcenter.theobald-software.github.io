---
title: Introduction to Board Connector
description: Welcome to the user documentation of Board Connector.
---

![img](site:assets/images/logos/theo-thumbs.png){ .lg .middle width="30px"} This section contains user documentation for {{ productName }}. <br>

Find more information on how to use and navigate through the user documentation in the section ["About this Documentation"](about-this-documentation.md). 

### About {{ productName }}

The Board Connector is an SAP Connector that extracts data from SAP systems and loads it into Board. 
The main entities in {{ productName }} are called "{{ extractions }}". 
An {{ extraction }} is a combination of the following elements:

- A connection to a source system (SAP)
- A connection to a destination / target environment (Board) 
- A defined {{ component }} (e.g., {{ table }})

![BC-Architecture](../assets/images/documentation/introduction/bc/Board.png){:class="img-responsive"}

### Software Architecture 

{{ productName }} consists of two components:

- A [Designer](designer.md) to design and configure {{ extractions }}.<br>
When designing {{ extractions }} in the Designer, the user can create and modify extractions, sources and alter the server settings.
- A [Server](server/index.md) to execute {{ extractions }}.<br>
During the execution phase, the user can execute the {{ extractions }} that were designed in the Designer. 
The execution of the {{ extractions }} takes place on the server.

![BC-Architecture](../assets/images/documentation/introduction/bc/Architecture.png){:class="img-responsive"}

### {{ Components }}

{{ productName }} offers the following {{ components }} to cover a wide range of data extraction scenarios.

{% include "components/components.md" %}

