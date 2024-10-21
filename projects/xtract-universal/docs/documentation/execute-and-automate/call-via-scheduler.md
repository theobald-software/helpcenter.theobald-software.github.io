---
title: Call via Scheduler
description: Call an Extraction via Scheduler
---

This page shows how to use the command line tool *xu.exe* to schedule extractions with third party scheduling tools.
Windows Task Scheduler and the SQL Server Agent are used as examples for setting up extraction schedules.

### Call via Windows Task Scheduler

1. Open the Windows Task Scheduler by typing *Taskschd.msc* into the command line.<br>
![Open Scheduler](../../assets/images/documentation/automation/xu/open_scheduler.png){:class="img-responsive"}
2. Create a new task by clicking **Actions > Create Task ...** :number-1:.<br>
![Create Task](../../assets/images/documentation/automation/xu/create_task.png){:class="img-responsive"}
3. Enter a name for the task :number-2: and an optional description.<br>
![Create Task General](../../assets/images/documentation/automation/xu/create_task_general.png){:class="img-responsive"}
4. In the tab *Triggers* click **[New...]** to add a time option.
5. Set a start date and time and confirm the entry with **[OK]** :number-3:.<br>
![Create Task Trigger](../../assets/images/documentation/automation/xu/create_task_trigger.png){:class="img-responsive"}
6. State the start program in *Program / script* in the tab *Actions*. Add the parameters of the extraction in *Add arguments (optional)*. Example:
```
"{{ installationDir }}\xu.exe" -s todd.theobald.local -p 8065 -n SAPPlants
```
![Create Task Actions](../../assets/images/documentation/automation/xu/create_task_actions.png){:class="img-responsive"}
7. Click **[OK]** :number-5: to confirm the input.
8. Check the summary and finish the setup.<br>
![xu-wts-command](../../assets/images/documentation/automation/xu/task_run.jpg){:class="img-responsive"}

The extraction is now scheduled and can be run by right-clicking the task and selecting the *Run* option. 

!!! tip 
	Multiple extractions can be assigned to a single task. Edit the task and switch to the *Actions* tab. Create a new action as described above.


### Call via SQL Server Agent

!!! note 
	You must have all necessary authorization for creating and executing jobs with the SQL Server Agent.   

1. Open the SQL-Server-Management-Studio (SSMS) to connect to an SQL-Server.
2. Create a new job via **SQL Server Agent > New > Job...**. <br>
![Create Job](../../assets/images/documentation/automation/xu/create_job.png){:class="img-responsive"}
3. Navigate to *Select a page > Steps* and click **[New]**.<br>
![Create Step](../../assets/images/documentation/automation/xu/create_step.png){:class="img-responsive"}
4. Enter a **Step name**, **Type**, **Run as** :number-1: and **Command** :number-2:, e.g., *xu*, *Operating system (CmdExec)*, *SQL-Server-Agent Service Account*. Example:
```
"{{ installationDir }}\xu.exe" -s localhost -p 8065 -n customers
```
![Create StepII](../../assets/images/documentation/automation/xu/xu_sql_server_agent_job_step.png){:class="img-responsive"}
5. Click *Select a page > Advanced* to set further options. Examples:
	- **On success action**, **On failure action**
	- **Retry attemps**, **Retry interval**
	- **Output file**
6. Click **[OK]** to confirm your input.
7. Find the new job in **SQL Server Agent > Jobs**. 
8. Right-click the job and select **Start Job at Step...** to execute the job. 
9. The successful execution of the SQL Server Agent job is displayed in SSMS.<br>
![xu-ssa-start](../../assets/images/documentation/automation/xu/xu_sql_server_agent_job_start.png){:class="img-responsive"}

****
#### Related Links
- [Microsoft Documentation: SQL Server Agent](https://docs.microsoft.com/en-us/sql/ssms/agent/sql-server-agent?view=sql-server-ver15)
- [Microsoft Documentation: Start Task Scheduler](http://technet.microsoft.com/en-us/library/cc721931.aspx)