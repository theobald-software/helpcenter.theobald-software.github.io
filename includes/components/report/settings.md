

### Batch Processing

![Extraction-Settings](../../assets/images/documentation/components/report/extraction-settings.png)

#### Use Background Mode
If you choose this option, the ABAP report is executed as a batch job in SAP. 
A spool is generated in SAP (transaction SP01) which is later fetched by the {{ report }} {{ component }}. 
Use this option for long running reports in SAP that would run into an RFC timeout when called in dialog mode. 
Certain reports that throw an error message when running in dialog mode can be extracted when run in background mode.

#### Background Job Timeout
Enter a time period (in seconds). 
The {{ report }} {{ component }} polls the status of the batch job in SAP for the specified time period. 
If the SAP batch job is not finished by the specified time period, the extraction aborts.

#### Background Job Name

The name of the background job under which the report is run in SAP.

#### Spool Destination

Enter the name of the spool destination (printer).

<!---

### Automatic Detection

--->

### Function Module

The Report component requires installation of the custom function module `Z_XTRACT_IS_REMOTE_REPORT` in your SAP system, see [Install Report Custom Function Module](../setup-in-sap/custom-function-module-for-reports.md). 
If you manually created the function module in your SAP system and gave it a different name, enter that name in this field. 
The default is `Z_XTRACT_IS_REMOTE_REPORT`.

****

#### Related Links
- [Microsoft: Regular Expressions in the Microsoft Online Help](http://msdn.microsoft.com/en-us/library/az24scfc.aspx)
- [Knowledge Base Article: Parse Reports in {{ productName }}](../../knowledge-base/parse-reports.md)
- [Install Report Custom Function Module](../setup-in-sap/custom-function-module-for-reports.md)
