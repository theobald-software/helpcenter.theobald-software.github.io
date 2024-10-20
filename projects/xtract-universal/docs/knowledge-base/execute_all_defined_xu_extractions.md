---
title: Execute & Schedule all Extractions using an SSIS Package
description: execute_all_defined_xu_extractions 
author: Fabian Steffan
---

The following article shows how to execute and schedule all defined extractions in the {{ productName }} Designer using an SSIS-package. 

The implementation of this scenario is realized via the integration of an SSIS-package. 
The package uses the onboard SSIS tasks to sequentially call all existing extractions in {{ productName }}. 
The execution is implemented via the SQL Server Agent as part of the SSIS-DB.

### Requirements

The following programs and tools are required for using the SSIS-package:

- Install the [SQL Server](https://www.microsoft.com/en-us/sql-server/sql-server-downloads)
- Install the [SQL Server Management Studio (SSMS)](https://docs.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms?view=sql-server-ver15)
- Configure the [SQL Server Agent](https://docs.microsoft.com/en-us/sql/ssms/agent/configure-sql-server-agent?view=sql-server-ver15)
- Install the [{{ productName }} Server](../documentation/setup/installation.md)
- Download the following SSIS-package: 

[:material-download-circle: Download XtractUniversalScheduler.dtsx](../assets/files/xu/XtractUniversalScheduler.dtsx){ .md-button .md-button--primary}

The {{ productName }} Server must be installed on the same environment as the SQL-Server / SSIS-DB using the default directory `{{ installationDir }}`.

### Step-by-Step Guide

1. Import the SSIS-package *XtractUniversalScheduler.dtsx* into the SSIS-DB using the Microsoft SQL Server Management Studio.
2. Adjust the SSIS parameters to the correct values of the customer installation.<br>
![Configure_XtractUniversalScheduler](../assets/images/articles/xu/Configure_XtractUniversalScheduler.png){:class="img-responsive" width="830px"}

	| SSIS Parameter | Data type | Sensitive | Required | Example Value | Info |
	------------ | ------------- | ---------- | ---------| -------- |-------|
	| XtractUniversalServer| String | False | True | *[ServerName.theobald.local]* | [{{ productName }} Server](../documentation/designer.md) | 
	| XtractUniversalServerPort | String | False | True | *8065* | [XU-Server Ports](../documentation/server/index.md/#ports) |

3. Schedule the deployed SSIS package using the integrated SQL Server Agent execution jobs. For more information, see [Microsoft Documentation: Create a SQL-Server Agent Job](https://docs.microsoft.com/en-us/sql/ssms/agent/create-a-job?view=sql-server-ver15).<br>
![Create_Job_XtractUniversalScheduler_XtractUniversalScheduler](../assets/images/articles/xu/Create_Job_XtractUniversalScheduler.png){:class="img-responsive"}
4. Execute the created step of the SQL Server Agent.
5. Check the correct execution of all defined extractions within the {{ productName }} Designer window.<br>
![Xtract_Universal_Designer_Status](../assets/images/articles/xu/Xtract_Universal_Designer_Status.png){:class="img-responsive"}
6. Check the results in the extraction destination(s).<br>
![Destination_Results](../assets/images/articles/xu/Destination_Results.png){:class="img-responsive"}

### About the SSIS Package

The SSIS package contains the following SSIS variables:

SSIS Variables | Data type | Example Value | Expression
------------ | ------------- | ----- | ---------
extraction_arguments| String | *-s todd.theobald.local -p 8065 -n ExtractionName* | `"-s " + @[$Package::XtractUniversalServer]  + " -p " + @[$Package::XtractUniversalServerPort]  + " -n " +  REPLACE ( SUBSTRING( @[User::extraction_folder_name], 53, LEN(@[User::extraction_folder_name]) - 52 ) , "\\general.json", "")`
extraction_folder_name | String | *{{ installationDir }}\config\ extractions\ExtractionName\general.json* | -

****
#### Releated Links
- [Call via Commandline](../documentation/execute-and-automate/call-via-commandline.md)
- [Run Integration Services (SSIS) Packages](https://docs.microsoft.com/en-us/sql/integration-services/packages/run-integration-services-ssis-packages?view=sql-server-ver15)
- [Create an SQL-Server Agent Job](https://docs.microsoft.com/en-us/sql/ssms/agent/create-a-job?view=sql-server-ver15)
