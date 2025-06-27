This page contains an overview of the settings in the Xtract OHS component.\
To open the settings, click ****Settings**** in the main window of the component.

The OHS settings consist of two tabs:

- [*Table*](#table-settings)
- [*Third party tool (legacy)*](#third-party-tool-settings)

The settings correspond to the selected extraction type. Set either *Table* or *Third party tool (legacy)* settings.

Warning

**Could not load list of available function modules because permission for table ENLFDIR is missing**\
This warning appears if a technical SAP user does not have authorization rights to access the SAP table *ENLFDIR*. Confirm the warning as the user can **still** adjust the extraction settings.

## Table Settings

### Extraction Settings

#### Package Size

The extracted data is split into packages of the defined size. The default value is 50000 lines.\
A package size between 20000 and 50000 is advisable for large amounts of data. 0 means no packaging. Not using packaging can lead to an RFC timeout for large data extractions.

Warning

**RFC_ERROR_SYSTEM_FAILURE - No more storage space available for extending an internal table**\
To avoid a memory overflow on the SAP source system and to avoid huge overheads, choose a package size that suits your memory capacity.

#### Row Limit

Specifies the maximum number of extracted records. 0 extracts all data. You can use this option to perform tests with a small amount of data by entering a row limit of e.g., 1000.

### Function Module

Specifies the name of the function module used for data extraction. This field is filled automatically depending on what function modules are installed on your SAP system. Custom function modules are supported.

The following function modules can be used to extract tables:

- RFC_READ_TABLE (TAB512)
- /BODS/RFC_READ_TABLE (TAB2048)
- /SAPDS/RFC_READ_TABLE (TAB2048)
- /BODS/RFC_READ_TABLE2
- /SAPDS/RFC_READ_TABLE2
- Z_THEO_READ_TABLE
- [/THEO/READ_TABLE](/xtract-is/documentation/setup-in-sap/custom-function-module-for-table-extraction) (recommended)

Warning

**Duplicates in the target environment.**\
The SAP standard modules for table extraction do not have pointers for table fields. In larger tables this may cause low performance and duplicates in the target environment. Use the function module [THEO/READ_TABLE](../../setup-in-sap/custom-function-module-for-table-extraction/#installation-of-theoread_table) from Theobald Software to ensure smooth extractions.

Note the necessary [SAP Authority Objects](../../setup-in-sap/sap-authority-objects/#table):

```text
S_TABU_NAM ACTVT=03; TABLE=ENLFDIR

```

### Extract Data in Background Job

If *Background job timeout (seconds)* checkbox is activated, the table extraction is executed as a background job in SAP. This setting is optional and is supported in combination with function module THEO/READ_TABLE or Z_THEO_READ_TABLE version 2.0. Activate the setting *Background job timeout (seconds)* for long-running extractions with a large amounts of data that may run into a timeout error (“Time limit exceeded”), when using the foreground mode.

Tip

The extraction jobs can be found in the SAP JobLog (**SM37**) under the JobName *theo_read_table*.

Warning

**Shared Memory ran out of memory!**\
If this error message pops up when running an extraction in the background, adjust the size of the Shared Memory. SAP recommends a Shared Memory size of 800MB~1.5GB for a production/test system or 2GB~4GB for S/4 systems, see [SAP Support: How to solve SYSTEM_NO_SHM_MEMORY runtime error](https://ga.support.sap.com/dtp/viewer/#/tree/1080/actions/12107).

### Advanced Settings

#### Background Job Timeout (seconds)

Sets a timeout period for extractions that run in background mode.\
The default value is 180 seconds. The maximum timeout value is 3600 seconds.

Note

The background job timeout setting only takes effect if the extractions run in background mode using [/THEO/READ_TABLE](../../setup-in-sap/custom-function-module-for-table-extraction/).

#### Adjust Currency Decimals

The default number of decimal places for a currency in the SAP database is 2 decimals. Currencies that do not have decimals are also stored in this format, e.g. JPY, VND, KRW, etc.

Example:

| Currency | Actual Amount | Amount stored in SAP database | | --- | --- | --- | | JPY | 100 | 1.00 | | KRW | 10000 | 100.00 |

When extracting currencies with no decimals, the amount stored in SAP is returned e.g., 100 JPY are extracted as 1.00. To correct the decimal placement of the extracted data, activate **Adjust Currency Decimals**. If **Adjust Currency Decimals** is active, currencies without decimals are multiplied by a factor that balances out the decimals.

**Adjust Currency Decimals** also requires the extraction of the corresponding CURRENCY field that can be used as a reference for the multiplication factor. Use the **[Load live preview]** function to find the correct currency field/s.

- If the currency field is part of the table, add it to the output.
- If the currency field is in another table, join the tables.
- If the reference is not part of a table, **Adjust Currency Decimals** cannot be used.

Note

The multiplication factor used in *Adjust Currency Decimals* is determined by the SAP currency table TCURX. To access the table, the following SAP Authority objects must be set in SAP: *S_TABU_NAM ACTVT=03; TABLE=TCURX*.

## Third Party Tool Settings

#### Gateway host

Enter the data of your gateway host. It is often the same host as the SAP application server.

#### Gateway service

Enter the data of your gateway service (*sapgwXX*, where XX is the system number).

#### Program ID

Enter the program ID of the SAP RFC destination.
