The Xtract DeltaQ component is primarily used for delta extractions. This means that only recently added or changed data is extracted, instead of a full load. The data that is extracted is defined by the **Update Mode** setting in the main window of the component.

### Update Modes

The Xtract DeltaQ component offers the following update modes:

| Mode | Parameter Value | Description | | --- | --- | --- | | Full | *Full* | Extracts all data that match the set selection criteria. | | Delta Update | *Delta* | Only extracts data added or changed on the SAP system since the last delta request. [Initialize a delta process](#initialize-a-delta-process) before running a delta update. To prevent errors, aborts and gaps in your data during a delta run, run the next extraction in the update mode **Repeat**. | | Delta Initialization | *Init* | Extracts all data as full load and initializes the delta process. When re-initializing a delta process, first delete any existing Inits using the **[Maintenance]** button in the [settings](../settings/) menu. | | Repeat | *Repeat* | Repeats the last delta run and updates and any delta data accumulated since the last run. Deletes any data from the last (unsuccessful) delta update before running a repeat. You can run a repeat multiple times. | | Delta Init (without data) | *InitNoData* | Initializes the delta process without extracting any data from the SAP DataSources. The result of the *Delta Init* on the SAP side. When re-initializing a delta process, first delete any existing Inits using the **[Maintenance]** button in the [settings](../settings/) menu. | | Non-cumulative init | *InitNoncumulative* | Relevant for DataSources like *2LIS_03_BX*. | | Activate (don't extract) | *Activate* | Activates a DataSource similar to the **[Activate]** button, but it is more practical when activating DataSources in a batch. No data is extracted. |

Tip

**Update mode** can be set dynamically at runtime using the parameters values to overwrite the [custom property](../parameterization/#custom-properties-of-xtract-deltaq) *updateType*.

For more information about when to use which update mode, see [Initialize a Delta Process](#initialize-a-delta-process)

### Initialize a Delta Process

To start a delta process with the Xtract DeltaQ component, the delta must be initialized first. The following delta process shows when to use which [Update Modes](#update-modes).

#### Step 1: Delta Initialization [C]

This mode requests all data that meets the selection criteria.

Set **Update Mode** to *Delta Initialization* and run the extraction.\
The initialization selections are copied to load the delta records. You can now use *Delta Update*.

Note

When re-initializing a delta process, first delete any existing Inits (initialization requests) by clicking **[Maintenance]** in the [settings](../settings/).

#### Alternative Step 1: Delta Init (without data) [S]

This mode is similar to *Delta Initialization*, but no data is extracted from the SAP DataSource.

Set **Update Mode** to *Delta Init (without data)* and run the extraction.\
You can now use *Delta Update*.

Note

When re-initializing a delta process, first delete any existing Inits (initialization requests) by clicking **[Maintenance]** in the [extraction settings](../settings/).

#### Step 2: Delta Update [D]

*Delta Update* only extracts data added or changed on the SAP system since the last delta request.

Run the extraction with *Delta Initialization* or *Delta Init (without data)* once before setting the **Update Mode** to *Delta Update*.

Note

To prevent errors, aborts and gaps run the next extraction in the update mode *Repeat*.

#### Optional: Repeat [R]

This mode repeats the last delta run and updates all data accumulated since the last run. If the last run was unsuccessful, all data from the last delta update are deleted before a new run is started.\
A **Repeat** can be started several times.

Many DataSources have the field ROCANCEL. This field defines if records are added or overwritten depending on the delta process type of the DataSource. It defines how a record is updated in the delta process.\
In an ABR mode:

- *blank* returns an after image
- *'X'* returns a before image
- *'D'* deletes the record
- *'R'* returns a reverse image

#### Optional: Delta Queue - RSA7

Once delta is activated, you can view the queued datasets in the Delta queue in SAP transaction RSA7.\
If there is no new data to be transferred, a corresponding protocol message is displayed and the data pipeline is empty.

Note

Before initiating the next update, make sure that a delta update has been executed successfully. Running a new delta update removes the last one.

______________________________________________________________________

#### Related Links

- [SAP Help: Delta Transfer to BI](https://help.sap.com/doc/saphelp_nw70/7.0.31/en-US/37/4f3ca8b672a34082ab3085d3c22145/content.htm?no_cache=true)
- [SAP Help: Delta Process](https://help.sap.com/viewer/ccc9cdbdc6cd4eceaf1e5485b1bf8f4b/7.4.23/en-US/4f18f6aa3fca410ae10000000a42189d.html)
