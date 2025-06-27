This page contains an overview of the extraction settings in the BW Cube extraction type.\
To open the extraction settings, click ****Extraction Settings**** in the main window of the extraction type.

### Extraction Settings

#### Package Size

The extracted data is split into packages of the defined size. The default value is 50000 lines.\
A package size between 20000 and 50000 is advisable for large amounts of data. 0 means no packaging. Not using packaging can lead to an RFC timeout for large data extractions.

Warning

**RFC_ERROR_SYSTEM_FAILURE - No more storage space available for extending an internal table**\
To avoid a memory overflow on the SAP source system and to avoid huge overheads, choose a package size that suits your memory capacity.

This option is not supported when using BICS mode.

#### Row Limit

Specifies the maximum number of extracted records. 0 extracts all data. You can use this option to perform tests with a small amount of data by entering a row limit of e.g., 1000.

This option is not supported when using BICS mode.

#### Member Display

This setting is only available for the BICS extractor.

- *Key*: Extracts the key of the dimension member.
- *Text* (default): Extracts the text of the dimension member.
- *Text and Key*: Adds an additional column for every dimension with the suffix `.KEY`. The original column contains the text of the dimension member, the column with the `.KEY` suffix contains the key of the dimension member.

#### Formatted Values

If this option is active, the values of key figures are formatted as defined in the Query Designer, e.g., scaling factor and number of decimal places.

#### Only Structure

Activate this option if the BWCube extraction type was created in an old version of the BWCube extraction type. The method for the metadata retrieval has changed, which affects especially BEx Queries with two structures.\
This option can only be activated and deactivated in the [Look Up](../#look-up-a-bw-cube-or-query) window of the component.

### Automatic Slicing Dimension

This option sets a dimension for an automatic slicing. Slicing is the act of picking a subset of a cube by choosing a single value for one of its dimensions. Automatic slicing means that a loop is executed for each single value of the chosen slicing dimension (characteristic) to extract the result from BW.

**Automatic Slicing Dimension** allows the extraction of a large amount of data (millions of records) from BW.

### Dimension on Columns

The following extraction setting is only available for MDX extractions. It appears in the extraction settings window after retrieving the metadata of an MDX extraction.

**Dimension on Columns** allows selecting other dimension/structure than the measure (key figures) dimension on the column axis. This swaps the measures and the selected dimension: the measures are placed on rows, the selected dimension is placed on columns.

Note the following:

- The BEx Query must contain a dimension structure
- Dimension filters on columns are not applied
- The selected properties for the new column dimension are ignored
- Unit columns are only supported when *key figures* are selected for the columns.
- Up to 1000 members are loaded when confirming the extraction settings window. These members are then the column names.

Recommendation

We recommend only using structures on columns.

Example:

- Output for **Dimension on Columns** = *Key Figures*
- Output for **Dimension on Columns** = *Cal. Year/Quarter [0CALQUARTER]*

### Experimental

The following settings are only available for BICS extractions. They appear in the extraction settings window after retrieving the metadata of a BICS extraction.

#### Create BICS Compatibility Report

When encountering an error using BICS, click **[Create BICS Compatibility Report]** to run a number of tests to help us analyze why and where the error occured.\
The test results are automatically stored in a .zip file. If you have multiple different SAP systems, perform this test on each of them.\
Send the resulting .zip files to the [Theobald Support](https://support.theobald-software.com) team.
