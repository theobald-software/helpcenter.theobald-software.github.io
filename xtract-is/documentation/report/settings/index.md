This page contains an overview of the settings in the Xtract Report component.\
To open the settings, click ****Settings**** in the main window of the component.

### Batch Processing

#### Use Background Mode

If you choose this option, the ABAP report is executed as a batch job in SAP. Use this option for long running reports in SAP that would run into an RFC timeout when called in dialog mode. Certain reports that throw an error message when running in dialog mode can be extracted when run in background mode.

#### Background Job Timeout

Enter a time period (in seconds). The Xtract Report component polls the status of the batch job in SAP for the specified time period. If the SAP batch job is not finished by the specified time period, the extraction aborts.

#### Background Job Name

The name of the background job under which the report is run in SAP.

#### Spool Destination

Enter the name of the spool destination (printer). If the ABAP report produces an output, a spool destination is generated. The spool destination defines where the output would go if printed, e.g., LP01 or LOCL. You can display all spool requests in SAP using the SAP transaction SP01.

### Function Module

The Report component requires installation of the custom function module `Z_XTRACT_IS_REMOTE_REPORT` in your SAP system, see [Install Report Custom Function Module](../../setup-in-sap/custom-function-module-for-reports/). If you manually created the function module in your SAP system and gave it a different name, enter that name in this field. The default is `Z_XTRACT_IS_REMOTE_REPORT`.

______________________________________________________________________

#### Related Links

- [Microsoft: Regular Expressions in the Microsoft Online Help](http://msdn.microsoft.com/en-us/library/az24scfc.aspx)
- [Knowledge Base Article: Parse Reports in Xtract IS](../../../knowledge-base/parse-reports/)
- [Install Report Custom Function Module](../../setup-in-sap/custom-function-module-for-reports/)
