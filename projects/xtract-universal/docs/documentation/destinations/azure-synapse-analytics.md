---
title: Azure Synapse Analytics (SQL pool)
description: Azure Synapse Analytics (SQL pool)destination
destination: azure
---

This page shows how to set up and use the {{ page.meta.title }} destination. 
The {{ page.meta.title }} destination loads data to an Azure Synapse SQL Pool.

## Requirements

To use the Azure Synapse Analytics SQL Pool destination, you need:
- An [Azure Analytics SQL database](https://docs.microsoft.com/en-us/azure/azure-sql/database/single-database-create-quickstart?tabs=azure-portal).
- [Azure portal firewall rules](https://docs.microsoft.com/en-us/azure/azure-sql/database/secure-database-tutorial#create-firewall-rules) that grant access for the IP addresses Xtract Universal is running on.

{% include "destinations/create-destination.md" %}

![Destination-Details](../../assets/images/xu/documentation/destinations/azure-synapse/destination-details.png){:class="img-responsive"}

#### Server Name
Enter the name of the Azure Servers in the following format:<br>
`[servername].database.windows.net`

#### User Name
Enter the user name.

#### Password
Enter the password.

#### Database Name
Enter the name of the Azure Synapse SQl Pool.

#### Test Connection
Check the database connection.


{% include "destinations/assign-destination.md" %}

![Destination-settings](../../assets/images/xu/documentation/destinations/azure-synapse/destination-settings.png){:class="img-responsive"}

{% include "destinations/file-name.md" %}

{% include "parameters/file-name-script-expressions.md " %}

{% include "destinations/column-name-style.md" %}

{% include "destinations/date-conversion.md " %}

{% include "destinations/sql-commands.md" %}

{% include "destinations/debugging-bulk-insert.md" %}

{% include "destinations/transaction-style.md" %} 

{% include "destinations/db-merge-data.md" %} 

{% include "destinations/custom-sql-statements.md" %}

***

## Related Links
- [Microsoft Documentation: Microsoft Azure Synapse Analytics](https://docs.microsoft.com/en-us/azure/synapse-analytics/)
- [Integration via Azure Data Factory](../execute-and-automate/call-via-etl.md#integration-via-azure-data-factory)