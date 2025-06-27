This section shows how to call an extraction from a [Windows script (.bat)](#call-via-windows-script-bat) or [PowerShell script](#call-via-powershell-script) using the command line tool xu.exe.

### Call via Windows script (.bat)

Follow the steps below to run an extraction using a Windows script that calls the command line tool *xu.exe*.

1. Create a new batch file.

1. Define the following variables:

   - Standard output (*XUOutputfile*)
   - Standard error output (*XULogfile*)
   - Path to the command line tool (*XUCmd*)
   - XU server name (*XUServer*)
   - XU server port (*XUPort*)
   - Name of the extraction (*XUExtraction*)

   ```bat
   :: Execute an Xtract Universal extraction using the command tool xu.exe
   :: clear screen  
   cls
   :: Turns off the command echoing feature
   @echo off
   :: write the output to a file
   set XUOutputfile="C:\Data\xubatch\output.txt"
   :: write the log to a file
   set XULogfile="C:\Data\xubatch\log.txt"
   :: set the path to the installation folder
   set XUCmd="C:\Program Files\XtractUniversal\xu.exe"
   :: default is also localhost, so you skip it or change it  
   set XUServer=localhost
   :: default port is also 8065, so you skip it or change it  
   set XUPort=8065
   set XUExtraction=customers 

   ```

1. If the extraction requires input parameters, set dynamic parameters, e.g., *v_country* for the language key.

   ```bat
   :: the extraction has a variable Country that needs a country code of length 2, e.g. US
   :: Skip this block if you don't use variable  
   set v_country=US
   :: Turns on the command echoing feature
   @echo on

   ```

1. Run the extraction by calling the command line tool with the corresponding parameters.

   ```bat
   :: run the command tool with the right parameters
   %XUCmd% -s %XUServer% -p %XUPort% -n %XUExtraction% -o Country=%v_country% 1>%XUOutputfile% 2>%XULogfile%

   ```

   ```bat
   @echo off 
   :: create an array with extraction names separated by empty space 
   :: in this example there are two extractions named *customers* and *materials*.
   set extraction_list=customers materials 
   :: alternative 
   :: set extraction_list[0] = customers 
   :: set extraction_list[1] = materials 
   @echo on

   for %%e in (%extraction_list%) do ( 
       %XUCmd% -s %XUServer% -p %XUPort% -n %%e 1>>%XUOutputfile% 2>>%XULogfile%
   )

   :: The output in this example is added to the existing file with >>.

   ```

1. Check the return code and write a corresponding message. The return code *0* indicates a successful execution. Other [Return Codes](../../documentation/execute-and-automate/call-via-commandline/#return-codes) indicate errors during execution.

   ```bat
   :: check the last exit code
   :: 0: successful
   :: else unsuccessful
   @echo off 
   IF %ERRORLEVEL% EQU 0 ( 
    echo extraction %XUExtraction% is successful 
   ) ELSE (
    echo extraction %XUExtraction% is not successful. Error Code %ERRORLEVEL%. See log for details.
   )
   @echo on

   ```

1. Optional: extractions can be added to the Windows logs. They can be displayed in the Event Viewer.

### Call via PowerShell Script

Follow the steps below to run an extraction using a PowerShell script that calls the command line tool *xu.exe*.

1. Define the following variables:

   - Standard output (*XUOutputfile*)
   - Standard error output (*XULogfile*)
   - Path to the command line tool (*XUCmd*)
   - XU server name (*XUServer*)
   - XU server port (*XUPort*)
   - Name of the extraction (*XUExtraction*)

   ```shell
   # Execute an Xtract Universal extraction using the command tool xu.exe 
   # clear screen  
   clear
   # write the output to a file
   $XUOutputfile = "C:\Data\powershell\output.txt"
   # write the log to a file
   $XULogfile = "C:\Data\powershell\log.txt"
   # set the path to the installation folder
   $XUCmd = 'C:\Program Files\XtractUniversal\xu.exe'
   $XUServer = "localhost"
   $XUPort = "8065"
   $XUExtraction = "SAPSalesCube" 

   ```

1. If the extraction requires input parameters, set dynamic parameters, e.g., *myCalendarMonth* for the current month in the format "yyyyMM".

   ```shell
   # the extraction has a variable CalendarMonth that needs a value in the format "yyyyMM", e.g. 201712
   # Skip this block if you don't use variable
   # generate the calender month from the current date to be used as a variable
   # e.g. Tuesday, December 19, 2017 10:40:32 AM

   $myyear = (Get-Date -format "yyyy")
   $mymonth = (Get-Date -format "MM")

   # 201712
   $myCalendarMonth = "$myyear$mymonth"
   # another option Get-Date -format "yyyyMM"
   # just if you use variables
   # the extraction has a variable CalendarMonth, its value has the format YYYYMM
   # set the variable for calendar month e.g. 201712

   ```

1. Run the extraction by calling the command line tool with the corresponding parameters.

   ```shell
   :: run the command tool with the right parameters
   %XUCmd% -s %XUServer% -p %XUPort% -n %XUExtraction% -o Country=%v_country% 1>%XUOutputfile% 2>%XULogfile%

   ```

1. Check the return code and write a corresponding message. The return code *0* indicates a successful execution. Other [Return Codes](../../documentation/execute-and-automate/call-via-commandline/#return-codes) indicate errors during execution.

   ```shell
   # check the last exit code
   # 0: successful
   # else unsuccessful
   if($LASTEXITCODE -eq 0) {           
   write-host -f Green "The last command executed successfully"          
   } else {           
   write-host -f Red "The last execution failed with error code $LASTEXITCODE!"
   write-host $errorMessage
   }

   ```

For more examples on how to use PowerShell scripts with Xtract Universal, see [SAP Access with Xtract Universal and Powershell](../sap-access-with-xtract-universal-and-powershell/)

______________________________________________________________________

#### Related Links:

- [Create Extractions via Commandline](../config-command-line-tool/)
- [Insert Extraction Events into Windows Logs](../insert-extraction-events-into-the-windows-logs/)
- [SAP Access with Xtract Universal and Powershell](../sap-access-with-xtract-universal-and-powershell/)
