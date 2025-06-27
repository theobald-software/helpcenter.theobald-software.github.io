This page contains an overview of the extraction settings in the OData extraction type.\
To open the extraction settings, click ****Extraction Settings**** in the main window of the extraction type.

### Extraction Settings

#### Package Size

The extracted data is split into packages of the defined size. The default value is 50000 lines.\
A package size between 20000 and 50000 is advisable for large amounts of data. 0 means no packaging. Not using packaging can lead to an RFC timeout for large data extractions.

Warning

**RFC_ERROR_SYSTEM_FAILURE - No more storage space available for extending an internal table**\
To avoid a memory overflow on the SAP source system and to avoid huge overheads, choose a package size that suits your memory capacity.

#### Row Limit

Specifies the maximum number of extracted records. 0 extracts all data. You can use this option to perform tests with a small amount of data by entering a row limit of e.g., 1000.
