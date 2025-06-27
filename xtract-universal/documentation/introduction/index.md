This section contains user documentation for Xtract Universal.

Find more information on how to use and navigate through the user documentation in the section ["About this Documentation"](../about-this-documentation/).

### About Xtract Universal

Xtract Universal is an SAP Connector for data extraction from SAP to various target environments. The extracted data can than be further processed e.g., in the context of business intelligence, data integration and data analytics.

### About Extractions

The main entities in Xtract Universal are called "extractions". An extraction is a combination of the following components:

- A defined [extraction type](#extraction-types), e.g., Table, Query, Report, etc.
- A connection to a [source](../setup/requirements/#supported-sap-systems-and-releases) system, e.g., SAP S/4HANA, SAP BW, etc.
- A connection to a [destination](../destinations/) / target environment, e.g., SQL Server, Azure, etc.

The graphic on the right depicts a practical example of an extraction and its components.

For more information on how to create and maintain extractions in the Xtract Universal Designer, see [create extractions](../../getting-started/#create-an-extraction).

### Software Architecture

Xtract Universal consists of two components:

- A [Designer](../designer/) to design and configure extractions.\
  When designing extractions in the Designer, the user can create and modify extractions, sources, destinations and alter the server settings.
- A [Server](../server/) to execute extractions.\
  During the execution phase, the user can execute the extractions that were designed in the Designer. The execution of the extractions takes place on the server.

Depending on the target environment, an extraction can be executed by the [Xtract Universal command line tool - xu.exe / xu.elf](../execute-and-automate/call-via-commandline/) or by the consuming destination, see [Pull and Push Destinations](../destinations/).

### Extraction Types

Xtract Universal offers the following extraction types to cover a wide range of data extraction scenarios.
