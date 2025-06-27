This section contains an overview and description of all available *Transaction* settings.

The *Transaction* settings consist of the following subsections:

- [Control Buttons](#control-buttons) to close, save or delete the service .
- [GUI Steps](#gui-steps) displays the recorded actions .
- [Transaction](#transaction) displays input screens that represent the SAP GUI .

### Control Buttons

**[Delete]**\
Deletes the service.

**[Cancel]**\
Closes the service and dismisses any changes.

**[Run]**\
Opens the *Run Menu* to testrun the service directly in yunIO.

**[Save]**\
Saves changes in the service.

### GUI Steps

When recording a transaction workflow, all actions are logged under *GUI Steps*.

Once the recording is finished, clicking actions opens the corresponding screen. This functionality is used to parameterize the values from in the initial recording, see [Parameterize Transactions](../).

### Transaction

When starting a transaction recording, the subsection *Transaction* displays the content of the SAP GUI.

**[Start]**\
Starts the recording of a transaction code.

**[Stop]**\
Stops the recording of the transaction code.

**[Submit]**\
Equivalent to pressing enter in the SAP GUI.

**Enable Diagnostics Mode**\
When this option is active, debug information about the transaction service are recorded and written to the folder `C:\Program Files\Theobald Software\yunIO\logs\diagnostic_runs\`. Activate the diagnostics mode when necessary, e.g., upon request of the support team.
