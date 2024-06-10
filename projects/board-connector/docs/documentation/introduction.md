---
title: Introduction to Board Connector
description: Introduction
---

<div class="grid cards" markdown>

-   ![img](site:assets/images/logos/theo-thumbs.png){ .lg .middle width="30px"} This section contains user documentation for {{ productName }}.

</div>


### About {{ productName }}

The Board Connector is an SAP Connector that extracts data from SAP systems and loads it into Board. 
The main entities in {{ productName }} are called "{{ extractions }}". 
An {{ extraction }} is a combination of the following elements:

- A connection to a source system (SAP)
- A connection to a destination / target environment (Board) 
- A defined {{ component }} (e.g., {{ table }})

![BC-Architecture](../assets/images/bc/documentation/Board.png){:class="img-responsive"}

### Software Architecture 

{{ productName }} consists of two components:

- A [Designer](#link) to design and configure {{ extractions }}.<br>
When designing {{ extractions }} in the Designer, the user can create and modify extractions, sources and alter the server settings.
- A [Server](#link) to execute {{ extractions }}.<br>
During the execution phase, the user can execute the {{ extractions }} that were designed in the Designer. 
The execution of the {{ extractions }} takes place on the server.

![BC-Architecture](../assets/images/bc/documentation/Architecture.png){:class="img-responsive"}

### Available {{ Components }}

{{ productName }} offers the following {{ components }} to cover a wide range of data extraction scenarios.

{% include "components/components.md" %}

