This page shows how to keep track of Xtract TableCDC log tables and triggers in your SAP system.\
The *Active CDC Watches* menu lists all active log tables and their DB triggers in the SAP source system. All listed Xtract TableCDC resources can be deleted from the SAP source system.

To open the *Active CDC Watches* menu, click **Show Active CDC Watches** in the main window of the extraction type.

### Active CDC Watches

#### Source Table

Name of the source table that is tracked by the Xtract TableCDC component.

#### Log Table

Name of the log table that tracks changes in the source table.

#### Created on

Timestamp when the log table was created.

#### Created by

SAP username that was used to create the initial log table.

#### Rows

Number of rows in the log table.

#### Show Details

Click **[]** to display more information about the DB triggers in the "CDC watch details" window.

#### Delete CDC resources

Click **[]** to delete the log table and all associated triggers from your SAP system.\
It is not possible to delete the log table and the triggers of the current extraction, see [Delete Log Table and DB Triggers](../#delete-log-table-and-triggers).
