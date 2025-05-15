---
title: IBM Db2
description: Write SAP data to an IBM Db2 destination
---

This page shows how to set up and use the {{ page.meta.title }} destination. 
The {{ page.meta.title }} destination loads data to an IBM Db2 destination.


## Requirements

The appropriate version (32bit for 32bit OS, 64bit for 64bit OS) of the ADO .NET driver must be installed.  
Select the *IBM Data Server Driver Package* and then the *IBM Data Server Driver Package (Windows AMD64 and Intel EM64T)* or 
*IBM Data Server Driver Package (Windows 32-bit AMD and Intel x86)*, see [IBM Data Server Client Packages - Version 11.5 GA](https://www.ibm.com/support/pages/node/387577).

If a fixed version is available, download the fixed version of the provider from the software vendor's website, see [Overview IBM Data Server Client Packages](https://www.ibm.com/support/pages/node/323035).<br> 

{% include "destinations/create-destination.md" %}

![Destination-Details](../../assets/images/documentation/destinations/ibm-db/destination-details.png){:class="img-responsive"}

#### Provider
Select a .Net provider for DB2. To install a provider, refer to [requirements](#requirements).

#### Host Name / Port
Enter the name or IP of the DB2 server and the port number. 

#### Username / Password
IBM Db2 authentication user name and password.

#### Database name
Enter the name of the IBM database.

#### Default schema
Enter the schema of the DB2 database.

#### Test Connection
Check the database connection.


{% include "destinations/assign-destination.md" %}

![Destination-settings](../../assets/images/documentation/destinations/ibm-db/destination-settings.png){:class="img-responsive"}

{% include "destinations/file-name.md" %}

{% include "parameters/file-name-script-expressions.md" %}

{% include "destinations/column-name-style.md" %}

{% include "destinations/date-conversion.md" %}

{% include "destinations/sql-commands.md" %}

{% include "destinations/transaction-style.md" %} 

{% include "destinations/db-merge-data.md" %} 

{% include "destinations/custom-sql-statements.md" %} 
