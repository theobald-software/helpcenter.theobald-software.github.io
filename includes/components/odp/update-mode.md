

The {{ odp }} {{ component }} can be used for delta extractions.
This means that only recently added or changed data is extracted, instead of a full load.
The data that is extracted is defined by the **Update Mode** setting in the main window of the {{ component }}.

![Update-Mode](../../assets/images/documentation/components/odp/update-mode.png ){:class="img-responsive"}

### Update Modes

#### Full update
Extracts all data (full mode).

#### Delta update

!!! note
	The **Delta update** option is ready for input only if the ODP provider in the SAP source system supports delta updates.
	
Runs a delta initialization, if no delta initialization is available for the selected subscriber. 
Runs a delta update, if there is a delta initialization for the selected subscriber.
A delta update only extracts data that was added or changed on the SAP system since the last delta request.

- **Extract data** <br/>
Allows extracting data when running a delta initialization. 
Leaving this checkbox unchecked runs a delta initialization without extracting data. <br/>
- **Auto-sync subscription**<br/>
Allows deletion of the existing subscription and creates a new subscription, if required.
Each extraction has an internal ID, which is part of the subscriber. 
If you change the filter of an extraction after the delta initialization, the *Auto-sync subscription* option automatically deletes the existing subscription and creates a new one. 
A subscription is deleted, if the error message "Illegal change in selection parameters" returns from the SAP system.
To delete subscriptions manually, see [Subscriptions](subscriptions.md).

#### Delta recovery
Re-runs the last delta update.

#### Direct read (without ODQ)
Directly reads all available data, bypassing the ODQ (Operational Delta Queue). 
Direct read is the only update mode that supports data aggregation functions (*Maximum*, *Minimum* and *Sum*).
