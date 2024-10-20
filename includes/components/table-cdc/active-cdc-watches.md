This page shows how to keep track of {{ tableCDC }} log tables and triggers in your SAP system.<br>
The *Active CDC Watches* menu lists all active log tables and their DB triggers in the SAP source system.
All listed {{ tableCDC }} resources can be deleted from the SAP source system.

To open the *Active CDC Watches* menu, click **Show Active CDC Watches** in the main window of the extraction type.<br>
![Active-CDC-Watches_designer](../../assets/images/documentation/components/table-cdc/{{ abbr }}-Active-CDC-Watches_designer.png)

### Active CDC Watches

![Active-CDC-Watches](../../assets/images/documentation/components/table-cdc/Active-CDC-watches.png){:class="img-responsive"}

#### Source Table
Name of the source table that is tracked by the {{ tableCDC }} component.

#### Log Table
Name of the log table that tracks changes in the source table.

#### Created on
Timestamp when the log table was created.

#### Created by
SAP username that was used to create the initial log table.

#### Rows
Number of rows in the log table. 
<!--- After successfully running an extraction, the associated log table is cleared and the number of rows should be 0. -->

#### Show Details
Click **[:octicons-info-16:]** to display more information about the DB triggers in the "CDC watch details" window.

![Active-CDC-Watches-details](../../assets/images/documentation/components/table-cdc/Active-CDC-watches-details.png){:class="img-responsive"}

#### Delete CDC resources
Click **[:trashbin:]** to delete the log table and all associated triggers from your SAP system.<br>
It is not possible to delete the log table and the triggers of the current extraction, see [Delete Log Table and DB Triggers](index.md/#delete-log-table-and-triggers).