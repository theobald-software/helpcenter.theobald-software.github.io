This page contains an overview of the extraction settings in the DeltaQ extraction type.\
To open the extraction settings, click ****Extraction Settings**** in the main window of the extraction type.

The DeltaQ settings consist of the following tabs:

- [*Base*](#base-settings)
- [*Hierarchy*](#hierarchy-settings)

## Base Settings

### Transfer Mode

The raw data packages can be sent by SAP via *tRFC* call or *Data-IDoc*. *tRFC* is is the default setting.\
Switch to *IDoc* to monitor the raw data packages in the transaction WE02 (IDoc-Monitoring) for debugging reasons.

### Misc. Settings

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

#### Accept Gaps in DataPackage ID

At the end of each extraction the DeltaQ component performs a consistency check. The extraction is considered consistent if all data packages arrive correctly. Example: When using a filter function in the user exit of an OLTP source, certain data packages are not sent. In this case the filter function is an inconsistency. If **Accept Gaps in DataPackage ID** is active, gaps in the package numbering are not considered inconsistencies. Only use this option when a filter function exists in the user exit.

#### Timeout (sec)

Enter a time period (in seconds). The timeout applies when an extraction finishes on the SAP side, but not all tRFC calls have been received.

## Hierarchy Settings

The following settings only apply to Hierarchy extractions.

### Extraction

#### Language

Enter the language of the Hierarchy, e.g., ‘E’ or ‘D’.

#### Hierarchy Name

Enter the name of the Hierarchy.

#### Hierarchy Class

Enter the class of the Hierarchy.

#### Representation

- *ParentChild*: The Hierarchy is represented in the SAP parent-child format, see [Output Formats: ParentChild](../../hierarchy/output-format/#parentchild-format). Example:
- *Natural*: The SAP parent-child Hierarchy is transformed into a regular hierarchy, see [Output Formats: Natural](../../hierarchy/output-format/#natural-format). Example:
- *ParentChildWithNodeNames*: The Hierarchy is represented in a reduced SAP parent-child format that only includes single nodes and their parent, see [Output Formats: ParentChildWithNodeNames](../../hierarchy/output-format/#parentchildwithnodenames-format). Example:

### Natural Representation

Note

The subsection *Natural Settings* is only active, when the **Representation** is set to *Natural*.

#### Level Count

Defines the maximum number of levels. The following example shows a Hierarchy with four levels.

#### Fill empty levels

Copies the bottom element of the Hierarchy until the last level. The following example depicts the previously shown Hierarchy with the activated *Repeat Leaves* option.

#### Description texts for levels

Sets the output field *LevelTextN* for each field *LevelN* containing the text based on the system language settings.

#### Leaves only

Returns only the leaves as data records.

## Maintenance

Click **[Maintenance]** to open a list of Init requests of the DataSource (SAP transaction RSA7).

Select an Init request and click **[]** to delete it. This is necessary when re-initializing a delta process.
