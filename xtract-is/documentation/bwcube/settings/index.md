This page contains an overview of the settings in the Xtract BW Cube component.\
To open the settings, click ****Settings**** in the main window of the component.

### String Conversion

#### Automatic String Conversion

All strings are converted into VarChar strings if the source system is non-Unicode, and all strings are converted into NVarChar if the source system is Unicode.

#### Convert Strings to VarChar

All strings are converted to VarChar regardless if the source system is Unicode or not.

#### Convert Strings to NVarChar

All strings are converted to NVarChar regardless if the source system is Unicode or not

### Extraction Type

#### Regular

Extracts the data using the MDX interface.

#### BEX

This option has to be used in case of BEx Queries with rows containing structures. In this case the query will be delivered with the same output (structure and data) as in the BEx analyzer. There are no options to change the selection of the dimension or the key figures.

Using the BEX Extraction mode you can even extract a Query View. After selecting the BEx query, set the query view name in the field Query View.

| Option | Description | | --- | --- | | **Fill Empty Cells** | Fills the empty cells of the dimension accordingly. | | **Eliminate Result Lines** | Removes the result row (e.g. sum). |

#### MDX

If this option is active, the main window of the component provides a text field where you can directly insert an MDX statement. After inserting the MDX statement, click **[Execute MDX and Refresh Metadata]** to load the metadata from the BW system. Variables can be used either for the whole MDX statement or within the MDX statement.

#### Use new OLAP BAPIs

Those BAPIs will be used by default if they are available on the BW system to remove the 1,000,000 cell restriction. It requires the following version of the SAP Netweaver BI:

- version 7.01 SP2 or higher (7.0 with ehp1 and support package 2 or later)
- version 7.11 with support package 00 or higher (SAPKW71100)

#### Decimal Separator (deprecated)

If the packaging is enabled (Package Size > 0) the component has to find out the correct decimal place conversion for the current SAP user. In case of security reasons you can declare a decimal separator so the component will not look for the settings and use the defined separator. Normally you will use a dot (.) or a comma (,).

### Misc

#### Do not tread ‘Axis has no rows’ as Error

Defines whether an error message is given when there is no data to be selected.

#### Use Description for Pipeline

Defines that the name of the pipeline element is given by the column description and not by the technical name.

#### User Formatted Values

Defines that the value of the key data will be extracted as defined in the query designer (e.g. scaling factor and decimal places). Debug Details Creates an detailed output of the single steps in the SSIS-protocol.

#### Debug Details

Generates more detailed log entries to enable easier error detection.

#### Measure Unit in Resultset

Displays the units of the key figures.

#### Package Size

The extracted data is split into packages of the defined size. The default value is 50000 lines.\
A package size between 20000 and 50000 is advisable for large amounts of data. 0 means no packaging. Not using packaging can lead to an RFC timeout for large data extractions.

Warning

**RFC_ERROR_SYSTEM_FAILURE - No more storage space available for extending an internal table**\
To avoid a memory overflow on the SAP source system and to avoid huge overheads, choose a package size that suits your memory capacity.

#### Automatic Slicing Dimension

This option sets a dimension for an automatic slicing. Slicing is the act of picking a subset of a cube by choosing a single value for one of its dimensions. Automatic slicing means that a loop is executed for each single value of the chosen slicing dimension (characteristic) to extract the result from BW.

Automatic Slicing Dimension allows the extraction of a large amount of data (millions of records) from BW.

#### Legacy metadata retrieval

This is for BWCube extractions that were created with Xtract IS version 2.5.17 or smaller. If you need to refresh the BW Cube’s metadata please check this flag first. This is necessary as the metadata retrieval has changed after 2.5.17 which does especially affect BEx Queries which contain two structures.
