This article contains examples of PowerShell scripts that query information from Xtract Universal and run extractions.\
The following sample scripts are available:

- [Run an Extraction](#run-an-extraction)
- [Run an Extraction with a Parameter](#run-an-extraction-with-a-parameter)
- [Run an Extraction with a Parameter using PowerShell Variables](#run-an-extraction-with-a-parameter-using-powershell-variables)
- [Run an Extraction with Multiple Parameters](#run-an-extraction-with-multiple-parameters)
- [Create a Function to Run an Extraction](#create-a-function-to-run-an-extraction)
- [Loop an Array with Different Parameter Values](#loop-an-array-with-different-parameter-values)
- [Run multiple Extractions in Sequence](#run-multiple-extractions-in-sequence)
- [Run multiple Extractions in Parallel](#run-multiple-extractions-in-parallel)
- [Get a List of Defined Extractions](#get-a-list-of-defined-extractions)
- [Get the Latest Log of Extractions](#get-the-latest-log-of-extractions)
- [Get the Metadata of Extractions](#get-the-metadata-of-extractions)

### Run an Extraction

Execute an Xtract Universal extraction using the command tool xu.exe in a PowerShell script as shown below:

Run an Extraction

```shell
# execute an Xtract Universal extraction using the command tool xu.exe in a PowerShell script
# 2>&1 redirects standard error (the 2) to the same place as standard output (the 1)
&'C:\Program Files\XtractUniversal\xu.exe' -s "localhost" -p "8065" -n "SAPSalesCube" 1>$null 2>1

```

### Run an Extraction with a Parameter

Here is an example of an extraction with a variable *CalendarMonth* that needs a value in the format YYYYMM, e.g. 201712:

Run an Extraction with a Parameter

```shell
# the extraction has a variable CalendarMonth that needs a value in the format YYYYMM, e.g. 201712
&'C:\Program Files\XtractUniversal\xu.exe' -s "localhost" -p "8065" -n "SAPSalesCube" -o CalendarMonth='200401' 1>$null 2>&1

```

### Run an Extraction with a Parameter using PowerShell Variables

Here is an example of an extraction with a parameter using a PowerShell variable:

Run an Extraction with a Parameter using PowerShell Variables

```shell
# set the path to the installation folder
$XUCmd = 'C:\Program Files\XtractUniversal\xu.exe'
# XU server &amp; port
$XUServer = "localhost"
$XUPort = "8065"
# extraction name
$XUExtraction = "SAPSalesCube"

# Setting Calendar month variable
# the extraction has a variable CalendarMonth that needs a value in the format YYYYMM, e.g. 201712
$myCalendarMonth = (Get-Date -format "yyyyMM")

# run an extraction with one parameter
&$XUCmd -s $XUServer -p $XUPort -n $XUExtraction -o CalendarMonth=$myCalendarMonth 1>$null 2>&1

```

### Run an Extraction with Multiple Parameters

Here is an example of an extraction with multiple parameters:

Run an Extraction with Multiple Parameters

```shell
# run an extraction with multiple parameters
&$XUCmd -s $XUServer -p $XUPort -n $XUExtraction -o CalendarMonth=$myCalendarMonth -o clearBuffer=true 1>$null 2>&1

```

### Create a Function to Run an Extraction

Here is an example of a function that runs an extraction, checks the exit code and writes an output:

Create a Function to Run an Extraction

```shell
# Function to run an XU extraction
Function XURun($XUCmd, $XUServer, $XUPort, $XUExtraction, $XUParameters)
{
Try {
$parameters = $XUCmd + " " + $XUServer + " " + $XUPort + " " + $XUExtraction + " " + $XUParameters

if([string]::IsNullOrEmpty($XUParameters)){
&$XUCmd -s $XUServer -p $XUPort -n $XUExtraction 1>$null 2>&1
} else {
&$XUCmd -s $XUServer -p $XUPort -n $XUExtraction -o $XUParameters 1>$null 2>&1
}

# check the last exit code
# 0: successful
# else unsuccessful
if($LASTEXITCODE -eq 0) {

write-host -f Green "The last command $parameters has been executed successfully" (Get-Date)

} else {

write-host -f Red "The last execution for $parameters failed with error code $LASTEXITCODE!" (Get-Date)
Write-Host $errorMessage
}
}
Catch {

write-host -f Red "Error running XU extraction!" + (Get-Date) $_.Exception.Message
}
}

# define error message
$errorMessage = @'
If the command completes an operation successfully, it returns an exit code of zero (0).
In case of an error, it will return one of the following (http status) codes:
HTTP Statuscodes (e.g. 404 when the extraction does not exist)
1001 An undefined error occured
1002 Could not find the specified file
1013 Invalid input data
1014 The number of arguments is invalid
1015 The parameter name is unknown
1016 The argument is not valid
1053 Something is wrong with your URL
1087 The parameter is invalid
'@

# run an extraction with multiple parameters
$XUParameters = "clearBuffer=True -o CalendarMonth=$myCalendarMonth"
$XUResult = XURun -XUCmd $XUCmd -XUServer $XUServer -XUPort $XUPort -XUExtraction $XUExtraction -XUParameters $XUParameters

```

### Loop an Array with Different Parameter Values

The depicted example uses a loop to run an extraction with different parameter values. The parameters values are defined in an array.

Loop an Array with Different Parameter Values

```shell
$Months = @("200401","200402","200403")
foreach($Month in $Months){
XURun -XUCmd $XUCmd -XUServer $XUServer -XUPort $XUPort -XUExtraction $XUExtraction -XUParameters CalendarMonth=$Month
}

```

### Run multiple Extractions in Sequence

The depicted example uses a loop tu run multiple extractions in sequence. The extraction names are defined in an array.

Run multiple Extractions in Sequence

```shell
Function XURun-Multi ($XUCmd, $XUServer, $XUPort, $XUExtractions,$XUParameters){

foreach($XUExtraction in $XUExtractions){

XURun -XUCmd $XUCmd -XUServer $XUServer -XUPort $XUPort -XUExtraction $XUExtraction -XUParameters $XUParameters
}
}

#$XUExtractions = "SAPCustomers", "SAPPlants";,"PSSAPCustomers", "PSSAPPlants";
$XUResult = XURUN-Multi -XUCmd $XUCmd -XUServer $XUServer -XUPort $XUPort -XUExtractions $XUExtractions

```

### Run multiple Extractions in Parallel

There are multiple ways to run parallel commands in PowerShell. One of them is using [PowerShell Workflow](https://docs.microsoft.com/en-us/system-center/sma/overview-powershell-workflows). Here is an example of using a ThrottleLimit to limit the number of parallel running extractions.

Run multiple Extractions in Parallel

```shell
# Define Workflow 1
# Run multiple Extractions in parallell using powershell workflow
Workflow XURun-Parallel { param ($XUCmd, $XUServer, $XUPort, $XUExtractions, $XUParameters, $ThrottleLimit)

foreach -parallel -throttlelimit $ThrottleLimit ($XUExtraction in $XUExtractions){

InlineScript{
if([string]::IsNullOrEmpty($XUParameters)){
&$Using:XUCmd -s $Using:XUServer -p $Using:XUPort -n $Using:XUExtraction 1>$null 2>&1
} else {
&$Using:XUCmd -s $Using:XUServer -p $Using:XUPort -n $Using:XUExtraction -o $Using:XUParameters 1>$null 2>&1
}
}

}
}

# 4 parallel extractions
$ThrottleLimit = 4
XURun-Parallel -XUCmd $XUCmd -XUServer $XUServer -XUPort $XUPort -XUExtractions $XUExtractions -XUParameters $XUParamters -ThrottleLimit $ThrottleLimit

# Define Workflow 2

# Run multiple Extractions using PowerShell workflow

Workflow XURun-Parallel2{ param ($XUCmd, $XUServer, $XUPort, $XUExtractions, $XUParameters, $ThrottleLimit)

foreach -parallel -throttlelimit $ThrottleLimit ($XUExtraction in $XUExtractions){

InlineScript{

Try {
$parameters = $Using:XUCmd + " " + $Using:XUServer + " " + $Using:XUPort + " " + $Using:XUExtraction + " " + $Using:XUParameters

if([string]::IsNullOrEmpty($Using:XUParameters)){
&$Using:XUCmd -s $Using:XUServer -p $Using:XUPort -n $Using:XUExtraction 1>$null 2>&1
} else {
&$Using:XUCmd -s $Using:XUServer -p $Using:XUPort -n $Using:XUExtraction -o $Using:XUParameters 1>$null 2>&1
}

# check the last exit code
# 0: successful
# else unsuccessful
if($LASTEXITCODE -eq 0) {

write-host -f Green "The last command $Using:parameters has been executed successfully" (Get-Date)

} else {

write-host -f Red "The last execution for $Using:parameters failed with error code $LASTEXITCODE!" (Get-Date)
Write-Host $errorMessage
}
}
Catch {

write-host -f Red "Error running XU extraction!" + (Get-Date) $_.Exception.Message
}
}

}
}

# 4 parallel extractions
$ThrottleLimit = 4
XURun-Parallel2 -XUCmd $XUCmd -XUServer $XUServer -XUPort $XUPort -XUExtractions $XUExtractions -XUParameters $XUParamters -ThrottleLimit $ThrottleLimit

```

### Get a List of Defined Extractions

Xtract Universal offers an HTTP API to access the defined extractions, their metadata and log, the server log and further information. The following function queries the list of extractions from the repository. The output will have the following format for each extraction.

*Name : BWCubeFIGL*\
*Type : BWCube*\
*Source : sapbw*\
*Destination : tableau*\
*LastRun : 2018-04-25_12:44:02.422*\
*RowCount : 2733787*\
*LastChange : 2018-02-16_12:18:29.475*\
*Created : 2018-02-14_11:25:47.718*

Get a List of Defined Extractions

```shell
<pre>Function XUGet-Extractions($XUServer, $XUPort){
$XUExtractions= (Invoke-WebRequest "http://$XUServer`:$XUPort").Content | ConvertFrom-CSV
return $XUExtractions
}
$XUExtractions = XUGet-Extractions $XUServer $XUPort
[code lang='powershell']
The following functions gets the list of extraction names from repository. This list can be then used e.g. to run the extraction or to check their logs.
[code lang='powershell']
Function XUGet-ExtractionNames($XUServer, $XUPort){
$XUExtractions = XUGet-Extractions $XUServer $XUPort
$XUExtractionNames = $XUExtractions | foreach { $_.Name } #| where{$_ -like "*PSSAP*"}
return $XUExtractionNames
}
$XUExtractionNames = XUGet-ExtractionNames $XUServer $XUPort

# run all the extractions in the list
XURun-Parallel2 -XUCmd $XUCmd -XUServer $XUServer -XUPort $XUPort -XUExtractions $XUExtractionNames

```

### Get the Latest Log of Extractions

The following script gets the latest log of the extractions and writes a colorful output depending on the log status.

Get the Latest Log of Extractions

```shell
Function XUGet-Log($XUServer, $XUPort){
$XUExtractionNames = XUGet-ExtractionNames $XUServer $XUPort
$XULog = @{}
foreach ($XUExtractName in $XUExtractionNames) {
# concatenate URL
$XUURL = "http://$XUServer`:$XUPort/log/?req_type=extraction&amp;name=$XUExtractName"
# get log, convert it to csv, sort by timestamp and select the newest log
$newestLog = (Invoke-WebRequest $XUURL).Content | ConvertFrom-CSV | Sort-Object Timestamp | Select-Object -Last 1
# chech log status
Switch ($newestLog.StateDescr) {
"FinishedNoErrors"{ write-host -f Green $XUExtractName $newestLog}
"FinishedErrors" {write-host -f Red $XUExtractName $newestLog}
"Running" {write-host -f Yellow $XUExtractName $newestLog}
"NotAvailable"{write-host -f Blue $XUExtractName $newestLog}
}
$XULog.Add($XUExtractName, $newestLog)
}
return $XULog
}
$XULog = XUGet-Log $XUServer $XUPort

```

### Get the Metadata of Extractions

This function gets the metadata of the extractions, including field names, data types etc. The output has the following format for each extraction:

*POSITION,NAME,DESC,TYPE,LENGTH,DECIMALS*\
*0,WERKS,Plant,C,4,0*\
*1,NAME1,Name,C,30,0*\
*2,KUNNR,Customer number of plant,C,10,0*\
*3,NAME2,Name 2,C,30,0*

Get the Metadata of Extractions

```shell
# Get Metadata
# http://[host]:[port]/metadata/?name=[extractionName]
Function XUGet-Metadata($XUServer, $XUPort){
$XUExtractionNames = XUGet-ExtractionNames $XUServer $XUPort
$XUMetadata = @{}
foreach ($XUExtractName in $XUExtractionNames) {
# concatenate URL
$XUURL = "http://$XUServer`:$XUPort/metadata/?name=$XUExtractName"
# get log, convert it to csv, sort by timestamp and select the newest log
$tmpmeta = (Invoke-WebRequest $XUURL).Content | ConvertFrom-CSV
$XUMetadata.Add($XUExtractName, $tmpmeta)
}
return $XUMetadata
}
$XUMetadata = XUGet-Metadata $XUServer $XUPort

```

______________________________________________________________________

#### Related Links:

- [Get all scripts from GitHub](https://github.com/KhoderElzein/theobaldsoftware/blob/master/XURunScript.ps1)
- [Documentation: Call extractions from command line](../../documentation/execute-and-automate/call-via-commandline/)
- [Microsoft PowerShell Documentation](https://docs.microsoft.com/en-us/powershell/)
