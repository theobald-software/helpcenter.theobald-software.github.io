This page shows how to use the command line tool *xu.exe* to schedule extractions with third party scheduling tools. Windows Task Scheduler and the SQL Server Agent are used as examples for setting up extraction schedules.

### Call via Windows Task Scheduler

1. Open the Windows Task Scheduler by typing *Taskschd.msc* into the command line.

1. Create a new task by clicking **Actions > Create Task ...** .

1. Enter a name for the task and an optional description.

1. In the tab *Triggers* click **[New...]** to add a time option.

1. Set a start date and time and confirm the entry with **[OK]** .

1. State the start program in *Program / script* in the tab *Actions*. Add the parameters of the extraction in *Add arguments (optional)*. Example:

   ```text
   "C:\Program Files\XtractUniversal\xu.exe" -s todd.theobald.local -p 8065 -n SAPPlants

   ```

1. Click **[OK]** to confirm the input.

1. Check the summary and finish the setup.

The extraction is now scheduled and can be run by right-clicking the task and selecting the *Run* option.

Tip

Multiple extractions can be assigned to a single task. Edit the task and switch to the *Actions* tab. Create a new action as described above.

### Call via SQL Server Agent

Note

You must have all necessary authorization for creating and executing jobs with the SQL Server Agent.

1. Open the SQL-Server-Management-Studio (SSMS) to connect to an SQL-Server.

1. Create a new job via **SQL Server Agent > New > Job...**.

1. Navigate to *Select a page > Steps* and click **[New]**.

1. Enter a **Step name**, **Type**, **Run as** and **Command** , e.g., *xu*, *Operating system (CmdExec)*, *SQL-Server-Agent Service Account*. Example:

   ```text
   "C:\Program Files\XtractUniversal\xu.exe" -s localhost -p 8065 -n customers

   ```

1. Click *Select a page > Advanced* to set further options. Examples:

   - **On success action**, **On failure action**
   - **Retry attemps**, **Retry interval**
   - **Output file**

1. Click **[OK]** to confirm your input.

1. Find the new job in **SQL Server Agent > Jobs**.

1. Right-click the job and select **Start Job at Step...** to execute the job.

1. The successful execution of the SQL Server Agent job is displayed in SSMS.

______________________________________________________________________

#### Related Links

- [Microsoft Documentation: SQL Server Agent](https://docs.microsoft.com/en-us/sql/ssms/agent/sql-server-agent?view=sql-server-ver15)
- [Microsoft Documentation: Start Task Scheduler](http://technet.microsoft.com/en-us/library/cc721931.aspx)
