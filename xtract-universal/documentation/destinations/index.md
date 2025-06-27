Xtract Universal allows you to extract data from SAP systems and load it to different destination environments. There are two types of destinations, depending on where the extraction process is started:

- **Pull Destinations**

  ______________________________________________________________________

  Extractions with pull destinations provide data on request. The extraction process is started by the destination environment. When a consumer requests the data, Xtract Universal translates the request into a query for the underlying SAP system, retrieves the data directly from the source system and delivers it to the consumer.

- **Push Destinations**

  ______________________________________________________________________

  Extractions with push destinations provide data proactively. The extraction process is started in Xtract Universal, e.g. via a [scheduled extraction](../execute-and-automate/call-via-scheduler/). An extraction with push destinations extracts data from the SAP source systems and loads them into the destination, where the data can be processed further.

### Manage Destinations

To open a list of all existing destinations, navigate to **Server > Destinations**.\
The window "Manage Destinations" opens. Here, you can edit, delete and add new destinations.

Note

The **http-csv** destination is a default destination and cannot be deleted.

### Databases / Data Warehouses

### Business Intelligence / Analytics / ETL

### Business Systems

### Cloud Storage

### Generic Destinations
