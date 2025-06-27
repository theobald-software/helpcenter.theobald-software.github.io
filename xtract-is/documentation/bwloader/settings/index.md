This page contains an overview of the settings in the Xtract BW Loader component.\
To open the settings, click ****Settings**** in the main window of the component.

### General

#### Package Size

The extracted data is split into packages of the defined size. The default value is 50000 lines.\
A package size between 20000 and 50000 is advisable for large amounts of data. 0 means no packaging. Not using packaging can lead to an RFC timeout for large data extractions.

Warning

**RFC_ERROR_SYSTEM_FAILURE - No more storage space available for extending an internal table**\
To avoid a memory overflow on the SAP source system and to avoid huge overheads, choose a package size that suits your memory capacity.

#### Wait data transfer to be finished

If this option is checked, the component waits until data processing is completed. You will receive additional error messages if data processing fails.

#### Trigger Process Chain

If you want to trigger a process chain after uploading just type in the name of the process chain here.

### SAP BI 3rd party notification

#### No InfoPackage Start

The best way to upload data is to trigger the InfoPackage (default value). Under some conditions it might be useful not to trigger the InfoPackage but only to wait for notification (sleeping mode). In this case check this option.

#### Use external Notifier

Corresponds to an option in [Load Data into SAP BW](../#load-data-into-sap-bw).

#### Request ID variable

Corresponds to an option in [Load Data into SAP BW](../#load-data-into-sap-bw).

### Performance Improvement

#### Debug Details

Generates more detailed log entries to enable easier error detection

#### Enable Parallel Processing

Enables multiple uploads at the same time.

#### Allow multiple SAP connections

Allows to establish more than one connection to SAP which improves performance.

#### Max. Number of Threads

Maximum number of application threads that prepare the packages to be uploaded.
