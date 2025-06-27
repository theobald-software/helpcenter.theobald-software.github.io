This page contains an overview of the settings in the Xtract DeltaQ component.\
To open the settings, click ****Settings**** in the main window of the component.

The Xtract DeltaQ settings consist of the following tabs:

- [*Base*](#base-settings)
- [*Misc*](#misc-settings)
- [*Hierarchy*](#hierarchy-settings)

## Base Settings

### Transfer Mode

The raw data packages can be sent by SAP via *tRFC* call or *Data-IDoc*. *tRFC* is is the default setting.\
Switch to *IDoc* to monitor the raw data packages in the transaction WE02 (IDoc-Monitoring) for debugging reasons.

### Convert Dates

#### Min Date

Converts the SAP date 00000000 to the entered value. NULL is supported as a value.

#### Max Date

Converts the SAP date 9999XXXX to the entered value. NULL is supported as a value.

#### Replace invalid date with

In case of no convertable date values you have to enter a default date value into the textbox. Every invalid value is converted into this value.

## Misc. Settings

#### Update Mode Variable

Defines a variable for the update mode. Enter the name of an SSIS variable in the format `@variable_name` and set the component's custom property *UseLegacyVarUpdate* to *true* to overwrite the Update Mode. The SSIS variable can process the following values: F, C, D, S, I and R, as it is listed in [Update Mode](../update-mode/).

#### Request ID

This field is optional. If a value (e.g., XtractDatasource) is set, it will be used as suffix in the SAP job name (e.g., BIXtractDatasource), otherwise a combination of process ID and timestamp will be used (e.g. REQU_pppppppp_yyyyMMddHHmmss), with process ID being the ID of the Windows process, the XtractDeltaQServerPool.exe is running under.

#### Automatic Synchronization

Option to prevent manual changes in the transactional system when switching from test environment to production environment.\
Example: To use DeltaQ extractions in the production environment, the data source has to be enabled in the production environment. If **Automatic Synchronization** is active, the activation is performed automatically and the timestamp of the data source is changed to be consistent with the settings of the SAP system.

Note

If the data source is modified in the SAP system, manually activate the data source in the DeltaQ component, even when **Automatic Synchronization** is active. Otherwise data load will fail. This behavior belongs to the SAP design, see [SAP Help: Replication of DataSources](https://help.sap.com/viewer/ccc9cdbdc6cd4eceaf1e5485b1bf8f4b/7.4.19/en-US/4a12eaff76df1b42e10000000a42189c.html).

#### Add Serialization Info to Output

Adds the columns *DataPackageID* and *RowCounter* to the output.\
Example: the following columns that are a composite key of the SAP records are included in the output:

- *RequestID*
- *DataPackageID*
- *RowCounter*

Note

Newer data has a higher PackageID. In the same package newer data has a higher RowCounter.

## Hierarchy Settings

The following settings only apply to Hierarchy extractions.

#### Language

Enter the language of the Hierarchy, e.g., ‘E’ or ‘D’.

#### Hierarchy Name

Enter the name of the Hierarchy.

#### Hierarchy Class

Enter the class of the Hierarchy.

#### Hierarchy Version

Enter the version of the Hierarchy.

## Maintenance

Click **[Maintenance]** to open a list of Init requests of the DataSource (SAP transaction RSA7).

Select an Init request and click **[]** to delete it. This is necessary when re-initializing a delta process.
