This section contains user documentation for Board Connector.

Find more information on how to use and navigate through the user documentation in the section ["About this Documentation"](../about-this-documentation/).

### About Board Connector

The Board Connector is an SAP Connector that extracts data from SAP systems and loads it into Board. The main entities in Board Connector are called "extractions". An extraction is a combination of the following elements:

- A connection to a source system (SAP)
- A connection to a destination / target environment (Board)
- A defined extraction type (e.g., Table)

### Software Architecture

Board Connector consists of two components:

- A [Designer](../designer/) to design and configure extractions.\
  When designing extractions in the Designer, the user can create and modify extractions, sources and alter the server settings.
- A [Server](../server/) to execute extractions.\
  During the execution phase, the user can execute the extractions that were designed in the Designer. The execution of the extractions takes place on the server.

### Extraction Types

Board Connector offers the following extractions types to cover a wide range of data extraction scenarios.
