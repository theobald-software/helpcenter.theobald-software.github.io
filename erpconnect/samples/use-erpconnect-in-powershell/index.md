This sample shows how to use ERPConnect in Windows PowerShell to connect to SAP, extract data from a table (MAKT) and print it to the console.

### Prerequisites

- The librfc32.dll has to be registered: `regsvr32 c:\windows\system32\librfc32.dll`
- The PowerShell script uses the file extension \*\*\* .PS1

### Extract SAP Table Data in PowerShell

The following sample code calls connects to SAP and extracts the data of SAP table MAKT directly in Powershell or within the Powershell ISE:

Table MAKT

```powershell
$ErrorActionPreference = "Stop"

# If ERPConnect is registered in the GAC then use the following line
# [Reflection.Assembly]::LoadWithPartialName("ERPConnectStandard20.dll")

# If no is it also possible to load ERPConnect directly
[Reflection.Assembly]::LoadFile("C:\Program Files\ERPConnect\ERPConnectStandard20.dll")

# Set your ERPConnect license
[ERPConnect.LIC]::SetLic("xxxx")

$hostname = "server.acme.org"
$systemid = 00
$username = "user"
$password = "passwd"
$lang     = "EN"
$client   = "001"

$connection = new-object ERPConnect.R3Connection($hostname, $systemid, $username, $password, $lang, $client)

$connection.Protocol = [ERPConnect.ClientProtocol]::NWRFC
$connection.Open()

$readTable = new-object ERPConnect.Utils.ReadTable($connection)
$readTable.AddField("MATNR")
$readTable.AddField("MAKTX")
$readTable.AddField("SPRAS")
$readTable.RowCount = 10
$readTable.WhereClause = "SPRAS = 'EN'"
$readTable.TableName = "MAKT"

$readTable.Run()

$result = $readTable.Result

$result

```

Output:
