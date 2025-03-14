---
title: SSIS Migration
description: SSIS Migration
---

This page contains information on how to migrate SSIS packages with Xtract IS {{ components }} from a lower SQL Server/SSIS version to a higher version. 

- When migrating from SQL Server 2012 or lower to SQL Server 2019, follow the instructions in [Migrate from SQL Server 2008/2012 to SQL Server 2019](#migrate-from-sql-server-20082012-to-sql-server-2019).
- When migrating from SQL Server 2016 or higher to SQL Server 2019, follow the instructions in [Migrate from SQL Server 2016 to SQL Server 2019](#migrate-from-sql-server-20142016-to-sql-server-2019).

### Install the Latest Version of Xtract IS

Install the latest version of Xtract IS on your SSIS server and any development environment (Visual Studio/SSDT).


### Migrate from SQL Server 2008/2012 to SQL Server 2019

A migration from SQL Server 2012 to SQL Server 2019 also requires a migration of SSIS packages.

The SSIS packages are converted to run on SQL Server 2016 using the *Xtract IS Conversion Preparer* before they can be migrated to SQL Server 2019.
The *Xtract IS Conversion Preparer* is a tool that prepares SSIS packages created for older SQL Server versions to migrate to newer SQL Server versions.

The *XtractISConversionPreparer.exe* is located in the installation directory of Xtract IS, e.g., `{{ installationDir }}\XtractISConversionPreparer.exe`. 

1. Run the *XtractISConversionPreparer.exe*. The window "XtractIS Conversion Preparer" opens.
2. Click **[Add file(s)]** and select the packages that need to be prepared for conversion.
If there is a package in the debug folder, it is automatically be included.
3. Select the SQL Server version, for which you want to prepare the packages from the drop-down list.<br>
For migration to SQL Server 2019, select *SSIS 2016* from the pull-down menu. 
To migrate to SQL Server 2019 the extra step via SQL Server 2016 is mandatory.
During conversion, the tool creates a backup of your SSIS package. <br>

	!!! tip "Recommendation"
		Manually create a backup copy prior to conversion.
		
	![XIS_ConversionPreparer_2016](../../assets/images/documentation/setup/xis/XIS_ConversionPreparer_2016.png){:class="img-responsive"}
4. Click **[Prepare]**. The conversion process is started. <br>
5. To migrate from SQL Server 2016 to SQL Server 2019, follow the instructions in [Migrate from SQL Server 2014/2016 to SQL Server 2019](#migrate-from-sql-server-20142016-to-sql-server-2019).

!!! note
	The password encryption of the SSIS packages set by the [ProtectionLevel property](https://docs.microsoft.com/en-us/sql/integration-services/security/access-control-for-sensitive-data-in-packages?view=sql-server-ver15#set_protection) must be deactivated or changed for the conversion of the SSIS packages.

### Migrate from SQL Server 2014/2016 to SQL Server 2019

!!! note
	SSIS packages created by an SQL Server Data Tools (SSDT) / Visual Studio (VS) version from **before** 2015 must be migrated to SQL Server 2016 before it can be migrated to SQL Server 2019.
	To migrate correctly, select SQL Server 2016 as the target version, then save and reopen the project.

1. Open a new Solution in Visual Studio.
2. Open the project properties and select an SQL server as "Deployment Target Version":<br>
![VS-Deployment-Target](../../assets/images/documentation/setup/xis/VS_Deployment_Target.png){:class="img-responsive"}
	- If your SSIS packages have been created by an SSDT/VS version from **after** 2015 for SQL Server 2016, continue with step 6.
	- If your SSIS packages have been created by an SSTD/VS version from **before** 2015 for SQL Server 2016, select the SQL Server on which your packages have run until now (SQL Server 2014 or SQL Server 2016).
	- If the SSIS packages have been prepared by the *Xtract IS Conversion Preparer* from [Migrating from SQL Server 2008/2012 to SQL Server 2019](#migrate-from-sql-server-20082012-to-sql-server-2019), select SQL Server 2016.<br>
3. Save the project.
4. Add the SSIS packages to the project.
5. Save the project again.
6. Change the "Deployment Target Version" to SQL Server 2019.
7. If Xtract IS {{ components }} are not displayed correctly in the Data Flow Task, close the Solution and reopen it.
If the Xtract IS {{ components }} are still not displayed correctly, close and restart Visual Studio.

Saving the project before and after the import of SSIS packages is necessary for the migration to work correctly.
