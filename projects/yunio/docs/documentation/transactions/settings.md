---
title: Settings
description: An overview and description of all transaction settings
---

This section contains an overview and description of all available {{ transaction }} settings.

The {{ transaction }} settings consist of the following subsections:
- [Control Buttons](#control-buttons) to close, save or delete the service :number-1:.
- [GUI Steps](#gui-steps) displays the recorded actions :number-2:.
- [Transaction](#transaction) displays input screens that represent the SAP GUI :number-3:.

![transaction-settings](../../assets/images/yunio/documentation/transaction-settings.png)

{% include "yunio/control-buttons.md" %}

### GUI Steps

When recording a transaction workflow, all actions are logged under *GUI Steps*.

Once the recording is finished, clicking actions opens the corresponding screen.
This functionality is used to parameterize the values from in the initial recording, see [Parameterize Transactions](index.md).

### Transaction

When starting a transaction recording, the subsection *Transaction* displays the content of the SAP GUI.

**[Start]**<br>
Starts the recording of a transaction code.

**[Stop]**<br>
Stops the recording of the transaction code. 

**[Submit]**<br>
Equivalent to pressing enter in the SAP GUI.

**Enable Diagnostics Mode**<br>
When this option is active, debug information about the transaction service are recorded and written to the folder `C:\Program Files\Theobald Software\yunIO\logs\diagnostic_runs\`.
Activate the diagnostics mode when necessary, e.g., upon request of the support team.


