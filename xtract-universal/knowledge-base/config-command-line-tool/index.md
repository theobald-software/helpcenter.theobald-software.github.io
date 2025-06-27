The command line tool xu-config.exe tool creates extractions, sources and destinations outside of the Xtract Universal Designer. The tool is available in the installation directory of Xtract Universal, e.g. `C:\Program Files\XtractUniversal\xu-config.exe`.

The xu-config.exe tool supports the creation of the following extraction types and destinations:

| Extraction Types | Destinations | | --- | --- | | [Table](../../documentation/table/) | [Azure Storage](../../documentation/destinations/azure-storage/#destination-details) | | [Table CDC](../../documentation/table-cdc/) | [Amazon AWS S3](../../documentation/destinations/amazon-aws-s3/#destination-details) | | [ODP](../../documentation/odp/) | | | [DeltaQ](../../documentation/deltaq/) | |

### Prerequisites

The execution of PowerShell scripts must be authorized on your system, see [Microsoft Documentation: Managing the execution policy with PowerShell](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_execution_policies?view=powershell-7.2#managing-the-execution-policy-with-powershell).

Note

From Xtract Universal version 5.0.0 (2021-10-18) up to version 2024.8.6.35, the xu-config.exe tool must be run by the same Windows AD account that runs the [Xtract Universal Service](../../documentation/server/service-account/). This means, you either run the Windows command prompt as the respective user or you use the `runas` command in the command prompt. This is necessary, because passwords are encrypted for the user account that runs the xu-config.exe tool and can only be decrypted by the same account.

### Create an SAP Source using Windows Command Prompt

Note

the xu-config.exe tool only supports SAP connections with plain authentication.

1. Start the Windows command prompt application with administrator rights .

1. Navigate to the installation directory of Xtract Universal .

1. Run the following shell command to create an encrypted password for your SAP source :

   ```text
   powershell ./protect-password.ps1

   ```

1. Use the following command to select the `xu-config.exe` command line tool from the Xtract Universal installation directory and to create a new SAP source:

   ```text
   xu-config.exe --source <name> <host> <instance-number> <client> <language> <user> <protected-password>

   ```

1. Replace the parameters in `< >` with actual values . The parameters are not case sensitive.

1. Press **[Enter]** to run the command.

1. Check the generated source in the Xtract Universal Designer or in the directory `C:\Program Files\XtractUniversal\config\sources`.

### Create a Destination using Windows Command Prompt

1. Start the Windows command prompt application with administrator rights .

1. Navigate to the installation directory of Xtract Universal .

1. Run the following shell command to create encrypted passwords or keys necessary for the destination :

   ```text
   powershell ./protect-password.ps1

   ```

1. Use one the following commands to select the *xu-config.exe* command line tool from the Xtract Universal installation directory and to create a new destination:

   ```text
   xu-config.exe --azure <account> <accesskey> <container> <folder(opt)>

   ```

   ```text
   xu-config.exe --s3 --auth user <key> <secretkey> <bucket> <region> <folder(opt)>

   ```

   ```text
   xu-config.exe --s3 --auth iam <bucket> <region> <folder(opt)>

   ```

1. Replace the parameters in `< >` with actual values . The names of the parameters are not case sensitive.

1. Press **[Enter]** to run the command.

1. Check the generated destination in the Xtract Universal Designer or in the directory `C:\Program Files\XtractUniversal\config\destinations`.

### Create a Table Extraction using Windows Command Prompt

1. Start the Windows command prompt application with administrator rights .

1. Navigate to the installation directory of Xtract Universal.

1. Use the following command to select the *xu-config.exe* command line tool from the Xtract Universal installation directory and to create a new Table extraction:

   ```text
   xu-config.exe --extraction <source> <destination> --table <table>

   ```

1. Replace the parameters in `< >`with actual values .

1. Enter a [defined SAP Connection, Destination](../../documentation/setup/migration/#configuration-files) and an SAP Table object for the parameters \<source>, \<destination> and \<table>. The names of the parameters are not case sensitive.

1. Press **[Enter]** to run the command.

1. Check the generated table extraction in the Xtract Universal Designer or in the directory `C:\Program Files\XtractUniversal\config\extractions`.

Note

The following table settings are set by default after creation: **Package Size** (50000), **Extract data in background job** (enabled), all columns are selected for output.

Tip

Use the command `xu-config.exe -h` to look up the syntax for Table, Table CDC, ODP and DeltaQ extractions.

### Examples for all Extraction Types

| Extraction Type | Command | | --- | --- | | Table | `xu-config.exe --extraction ec5 sql-server --table TCURR` | | DeltaQ | `xu-config.exe --extraction ec5 sql-server --table TCURR` | | ODP (ABAP Core Data Services) | `xu-config.exe --extraction bw2 sql-server --odp ABAP_CDS UCONRFC_ATTR$F` | | ODP (SAP NetWeaver Business Warehouse) | `xu-config.exe --extraction bw2 sql-server --odp BW 0ADDR_SHORT$T` | | ODP (SAP HANA Information Views) | `xu-config.exe --extraction S4H sql-server --odp HANA HCCT232H1KHY32F7UL59IH224$F` | | ODP (DataSources/Extractors) | `xu-config.exe --extraction ec5 sql-server --odp SAPI 2LIS_11_VAITM` | | Table CDC (extract table on first run) | `xu-config.exe --extraction ec5 csv --tablecdc KNA1 true 5000` | | Table CDC (do not extract table on first run) | `xu-config.exe --extraction ec5 csv --tablecdc KNA1 false 10000` |

### Create Multiple Extractions using PowerShell

Multiple extractions can be generated semi-automatically using suitable scripts. The scripts for creating extractions can be used to contribute to the generation of an SAP data warehouse.

PowerShell Script to Create Multiple Tbale Extractions

```shell
# read table list
$tableList = "KNA1","LFA1","MARA","CSKT","SKA1"
# set the path to the installation folder
$XUConfig = 'C:\Program Files\XtractUniversal\xu-config.exe'
# source sytem
$source = "ec5"
# destination
$destination = "sqlserver2019"

# loop the tables
foreach ($tableName in $tableList) {
    # create the extraction e.g.
    # xu-config.exe --extraction ec5 sqlserver2019 --table KNA1 
    Try {                   
        write-host -f Green "$tableName : Creation of Extraction is starting "  (Get-Date)                      
        &$XUConfig --extraction $source $destination --table $tableName    

        # check the last exit code
        # 0: successful
        # else unsuccessful
        if($LASTEXITCODE -eq 0) {                           
            write-host -f Green "$tableName : Creation of Extraction  is successful"  (Get-Date)            
        } else {           
            write-host -f Red "$tableName : Creation of Extraction failed with error code $LASTEXITCODE!"  (Get-Date)
            #Write-Host $errorMessage
        }                
    }
    Catch {
        write-host -f Red "$tableName : Creation of Extraction failed with Exception ! " + (Get-Date)  $_.Exception.Message
    }         
}

```

______________________________________________________________________

#### Related Links

- [Documentation: SAP Connection](../../documentation/sap-connection/)
- [Documentation: Define a Table Extraction](../../documentation/table/#define-the-table-extraction-type)
- [Documentation: Run an Extraction](../../documentation/execute-and-automate/run-an-extraction/)
- [Documentation: WHERE Clause](../../documentation/table/where-clause/)
- [Documentation: Schedule Extractions](../../documentation/execute-and-automate/call-via-scheduler/)
