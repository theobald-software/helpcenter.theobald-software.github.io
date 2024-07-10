---
title: MySQL
description: MySQL destination
---

This page shows how to set up and use the {{ page.meta.title }} destination. 
The {{ page.meta.title }} destination loads data to a MySQL database.

## Requirements

As of Xtract Universal version 4.2.26.0 the MySQL ADO.Net driver is provided with the setup of Xtract Universal.
There are no additional installations needed to use MySQL database destination.


{% include "destinations/create-destination.md" %}

![Destination-Details](../../assets/images/xu/documentation/destinations/my-sql/destination-details.png){:class="img-responsive"}


{% include "destinations/assign-destination.md" %}

![Destination-settings](../../assets/images/xu/documentation/destinations/my-sql/destination-settings.png){:class="img-responsive"}

{% include "destinations/file-name.md" %}

{% include "parameters/file-name-script-expressions.md" %}

{% include "destinations/column-name-style.md" %}

{% include "destinations/date-conversion.md" %}

{% include "destinations/sql-commands.md" %}

{% include "destinations/transaction-style.md" %} 

{% include "destinations/db-merge-data.md" %} 

{% include "destinations/custom-sql-statements.md" %} 