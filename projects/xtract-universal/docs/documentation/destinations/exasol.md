---
title: EXASolution
description: Write SAP data to an EXASolution destination
---

This page shows how to set up and use the {{ page.meta.title }} destination. 
The {{ page.meta.title }} destination loads data to an EXASolution database.

## Requirements

As of Xtract Universal version 4.2.26.0 the Exasol ADO.Net driver ExaDataProvider is provided with the setup of Xtract Universal. 
There are no additional installations needed to use Exasol database destination.


{% include "destinations/create-destination.md" %}

![Destination-Details](../../assets/images/documentation/destinations/exasol/destination-details.png){:class="img-responsive"}

#### Connection string
Enter the name or IP of the DB2 server and the port number. 

#### User Id / Password
Enter the user ID and password of the database user.

#### Schema
Enter the schema name of the database.
  
#### Test Connection
Checks the database connection.

{% include "destinations/assign-destination.md" %}

![Destination-settings](../../assets/images/documentation/destinations/exasol/destination-settings.png){:class="img-responsive"}


{% include "destinations/file-name.md" %}

{% include "parameters/file-name-script-expressions.md" %}

{% include "destinations/column-name-style.md" %}

{% include "destinations/date-conversion.md" %}

{% include "destinations/sql-commands.md" %}

{% include "destinations/debugging-bulk-insert.md" %}

{% include "destinations/transaction-style.md" %} 

{% include "destinations/db-merge-data.md" %} 

{% include "destinations/custom-sql-statements.md" %} 