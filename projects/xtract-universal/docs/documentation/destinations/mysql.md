---
title: MySQL
description: Write SAP data to a MySQL destination
---

This page shows how to set up and use the {{ page.meta.title }} destination. 
The {{ page.meta.title }} destination loads data to a MySQL database.

## Requirements

As of Xtract Universal version 4.2.26.0 the MySQL ADO.Net driver is provided with the setup of Xtract Universal.
There are no additional installations needed to use MySQL database destination.


{% include "destinations/create-destination.md" %}

![Destination-Details](../../assets/images/documentation/destinations/my-sql/destination-details.png){:class="img-responsive"}


#### Server Name
Enter the name of the server the MySQL database is hosted on.

#### Server Port
Enter the port of the server the MySQL database is hosted on.

#### User Name
Enter the MySQL database user ID.

#### Password
Enter the password of the database user.

#### Database
Enter the name of the MySQL database.

#### Test Connection
Check the database connection. 

{% include "destinations/assign-destination.md" %}

![Destination-settings](../../assets/images/documentation/destinations/my-sql/destination-settings.png){:class="img-responsive"}

{% include "destinations/file-name.md" %}

{% include "parameters/file-name-script-expressions.md" %}

{% include "destinations/column-name-style.md" %}

{% include "destinations/date-conversion.md" %}

{% include "destinations/sql-commands.md" %}

{% include "destinations/transaction-style.md" %} 

{% include "destinations/db-merge-data.md" %} 

{% include "destinations/custom-sql-statements.md" %} 