---
title: Snowflake
description: Write SAP data to a Snowflake
destination: snowflake
---

This page shows how to set up and use the {{ page.meta.title }} destination. 
The {{ page.meta.title }} destination loads data into a Snowflake environment.

## Requirements

The connection to the Snowflake target environment is made via the ODBC driver for Windows 64-bit architectures.
No additional installations are required to use the Snowflake destination.

- Download and install the [SnowflakeDSIIDriver](https://sfc-repo.snowflakecomputing.com/odbc/win64/latest/index.html).
- To connect through a proxy server, configure the following environment variables: `http_proxy`, `https_proxy`, `no_proxy`.<br>
For more information, see [Snowflake: ODBC Configuration and Connection Parameters](https://docs.snowflake.com/en/user-guide/odbc-parameters.html#using-environment-variables).
- The ODBC default port (443) for HTTPS is enabled and allows outbound traffic from the network to Snowflake's services.
- The Snowflake account used to upload data to Snowflake needs the corresponding access and role privileges, see [Snowflake Documentation: Overview of Access Control - Roles](https://docs.snowflake.com/en/user-guide/security-access-control-overview#roles).
The following privileges are required:
	- PUT command
	- COPY command
	- TABLE

The Snowflake destination only supports [Snowflake managed data stages](https://docs.snowflake.com/en/user-guide/data-load-local-file-system).
To write SAP data to external stages in Snowflake, refer to the [Azure Storage](azure-storage.md), [AWS S3](amazon-aws-s3.md) or [Google Cloud](google-cloud-storage.md) destination. 

{% include "destinations/create-destination.md" %}


### General

![Destination-Details](../../assets/images/documentation/destinations/snowflake/destination-details_1.png){:class="img-responsive"}

#### Output directory
Enter an existing local directory in which the extracted data is written as a csv file.<br>
Process during an extraction:

- A csv file is created in the output directory.
- Once the file has reached a certain size, it is zipped (gzip), see [File Splitting](#file-splitting).
- The zipped file is uploaded via PUT command to the Snowflake staging area.
- The data is then copied via COPY command to the target table in Snowflake.

This process (gzip + PUT command) repeats itself until the extraction is finished.
While running an extraction, the csv files in the local directory and the staging area are deleted. 

#### Account Name
Enter the Snowflake authentication account. <br>
The account name can be derived from the connection URL.
- URL for organization account identifier: <br>
`https://[organization]-[account_name].snowflakecomputing.com/console#/`
- URL for region account identifier (legacy): <br>
`https://[account_name].[region].[cloud].snowflakecomputing.com/console#/`

#### Database
Enter the name of the Snowflake database.

#### Schema
Enter the schema of the Snowflake database.

#### Role
Enter a Snowflake user role. If no user role is entered, the default user role is used for the connection.


### Account Identifier

![Destination-Details](../../assets/images/documentation/destinations/snowflake/destination-details_2.png){:class="img-responsive"}

#### Organization (preferred)
Enter the name of your organization.
Authentication via the account name in your organization is the preferred way of identifying youself against Snowflake, see [Snowflake Documentation: Account Name in Your Organization](https://docs.snowflake.com/en/user-guide/admin-account-identifier.html#format-1-preferred-account-name-in-your-organization)

#### Region (legacy)
Select the region of the Snowflake environment from the drop-down-menu. 
The selected region must match the information in the assigned account. 

!!! note
	Regions with the suffix *(legacy)* are deprecated.
	Select the *(legacy)* option if you connect to Snowflake using an old *Cloud Region ID*.
	For more information on the current *Cloud Region IDs*, see [Snowflake Documentation: Supported Cloud Regions](https://docs.snowflake.com/en/user-guide/intro-regions.html).

### Authentication

![Destination-Details](../../assets/images/documentation/destinations/snowflake/destination-details_3.png){:class="img-responsive"}

#### Username
Enter the Snowflake authentication user name. 

#### Basic
If this option is active, basic authentication is used for authentication.
Enter the Snowflake authentication password of the user in the field **Password**.

#### Key Pair
If this option is active, key pairs are used for authentication, see [Snowflake Documentation: Key Pair Authentication & Key Pair Rotation](https://docs.snowflake.com/en/user-guide/key-pair-auth).
Select the path to your private key in the field **Private Key Path**. Both encrypted and non-encrypted private keys are supported. 
If you use encrypted private key for authentication, enter the password that is used by snowflake to decrypt it in the field **Key password**.


### Stages

Click **[Test Connection]** to fetch all stages and warehouses from Snowflake. 
The stages and warehouses then become available for selection.

![Destination-Details](../../assets/images/documentation/destinations/snowflake/destination-details_4.png){:class="img-responsive"}

#### Stage name
Select a Snowflake Stage.
Note that only Snowflake managed data stages are displayed. <!--please check if "supported" a good term in this case-->

#### Warehouse
Select a Snowflake Data Warehouse.

{% include "destinations/assign-destination.md" %}

![Destination-settings](../../assets/images/documentation/destinations/snowflake/destination-settings.png){:class="img-responsive"}

{% include "destinations/file-name.md" %}

{% include "parameters/file-name-script-expressions.md" %}

{% include "destinations/column-name-style.md" %}

{% include "destinations/date-conversion.md" %}
 
{% include "destinations/file-splitting.md" %}

{% include "destinations/sql-commands.md" %}

{% include "destinations/transaction-style.md" %} 

### Empty Values

!!! warning
	**NULL result in a non-nullable column.**<br>
	By default empty strings are converted to NULL values when uploading data to Snowflake. To deactivate the conversion, disable **Replace empty values with SQL NULL**.

This option controls the Snowflake file format parameter EMPTY_FIELD_AS_NULL.
When **Replace empty values with SQL NULL** is active, empty strings are converted to NULL values when uploading data to Snowflake.

### Append Extraction Timestamp

When **Add timestamp column to result set** is active, an additional column *ExtractionTimestamp* is added to the output of the extraction.
The timestamp uses the format  `yyyy-MM-dd'T'HH:mm:ss.SSS'Z'` (UTC).

{% include "destinations/db-merge-data.md" %} 

{% include "destinations/custom-sql-statements.md" %} 

### Custom SQL Example

In the depicted example, the DataSource *0FI_AP_4* is extended by one column that is filled with the user-defined runtime parameter *RUNTIMEPARAMETER*.
The filling of the new column is implemented dynamically in the **Finalization** section of the destination settings.

1. In Snowflake, deselect the **Error on Column Count Mismatch** option in the *XTRACT_UNIVERSAL* File Format.<br>
![File-Format-Option](../../assets/images/documentation/destinations/snowflake/file-format-option.png){:class="img-responsive"}
2. Open the extraction and click **Edit runtime parameter** :number-1: to create the runtime parameter *RUNTIMEPARAMETER* :number-2:.
![Edit-Runtime-Parameter](../../assets/images/documentation/destinations/snowflake/edit-runtime-parameter.png){:class="img-responsive"}
3. Choose a field in the sections *Fields* and click **Edit** :number-3: to add :number-4: a selection criterion that uses the runtime parameter :number-5:.
![Edit-Selections](../../assets/images/documentation/destinations/snowflake/edit-selections.png){:class="img-responsive"}
4. Close the extraction and open the [Destination Settings](#assign-the-snowflake-destination-to-an-extraction) of the extraction. 
5. Make sure to assign the {{ page.meta.title }} destination to the extraction.
6. In the staging step **Preparation**, select the option *Custom SQL* from the drop-down list and click **[Edit SQL]**. The window "Edit SQL" opens.
7. In the drop-down menu, select the option *Drop & Create* and click **[Generate Statement]** :number-6: to [use the template](#use-templates) for *Drop & Create*.<br>
![Edit-Preparation-Statement](../../assets/images/documentation/destinations/snowflake//edit-preparation-statement.png){:class="img-responsive"}
8. Add the following line in the generated statement: <br>
	```sql
	"RUNTIMEPARAMETER" VARCHAR(4),
	```
9. Click **[OK]** to confirm your input. <br>
10. In the staging step **Row Processing**, select the option *Copy file to table*. <br>
At this point, no data from the SAP source system but `NULL` values are written to the newly created column *RUNTIMEPARAMETER*.
11. In the staging step **Finalization**, the `NULL` values can be filled by a custom SQL statement. 
Select the option *Custom SQL* from the drop-down list and click **[Edit SQL]**.  The window "Edit SQL" opens.
12. Paste the following SQl statement into the editor:
![Edit-Finalization-Statement](../../assets/images/documentation/destinations/snowflake/edit-finalization-statement.png){:class="img-responsive"}
	```sql
	UPDATE "0FI_AP_4"
	SET RUNTIMEPARAMETER= '@RUNTIMEPARAMETER'
	WHERE RUNTIMEPARAMETER IS NULL;
	```
	The `NULL` values are filled with the runtime parameter *RUNTIMEPARAMETER* and written into the SQL target table using the T-SQL command `UPDATE`.
13. Click **[OK]** to confirm your input and close the destination settings.
14. Open the "Run Extraction" window of the Designer :number-7: and enter a value for the runtime parameter :number-8:, before running the extraction :number-9:.
![Run-Dialog](../../assets/images/documentation/destinations/snowflake/run-extraction-dialog.png){:class="img-responsive"}

Check the existence of the new column *RUNTIMEPARAMETER* in the Snowflake Console of the table *0FI_AP_4*.

![Result-Snowflake-Console](../../assets/images/documentation/destinations/snowflake/result_snowflake_console.png){:class="img-responsive"}
*****

## Related Links
- [Requirements: .NET-Framework](../setup/requirements.md#other-applications-and-frameworks)
- [Requirements: 64-bit Architecture](../setup/requirements.md#hardware)
- [Snowflake Documentation: Installing and Configuring the ODBC Driver for Windows](https://docs.snowflake.com/en/user-guide/odbc-windows.html)
- [Snowflake Documentation: Snowflake Identifiers](https://docs.snowflake.com/en/sql-reference/identifiers-syntax.html#double-quoted-identifiers)
- [Knowledge Base Article: Integrate SAP Data into a Snowflake Data Warehouse](../../knowledge-base/integrate_sap_data_into_a_Snowflake_data_warehouse.md)
- [Knowledge Base Article: SAP Integration with Matillion Data Loader](../../knowledge-base/create-a-custom-cennector-in-matillion-data-loader.md)
- [Extraction Parameters](../parameters/extraction-parameters.md#custom)
