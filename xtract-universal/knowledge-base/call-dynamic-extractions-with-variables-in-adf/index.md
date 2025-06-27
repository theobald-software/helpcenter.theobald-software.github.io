The following article shows how to call Xtract Universal extractions dynamically from Azure Data Factory (ADF) using user-defined variables. The depicted example runs extractions daily to write data added or updated on the day before to the destination.

### Call Dynamic Extractions with Variables

The depicted example calls an extraction with a date parameter in ADF. The date parameter is set dynamically using a user-defined variable.

1. Create an extraction in Xtract Universal that uses runtime parameters.\
   The depicted example uses an extraction called *0COSTCENTER_0101_HIER* with a date parameter called *myDate*.
1. Create a pipeline in ADF that stores yesterday's date in a variable .
1. Format the date to the internal SAP date format (YYYYMMDD).\
   The type and format of the input variable must match the type and format of the actual parameter in Xtract Universal.
1. Add a web activity that calls extractions . The URL used to call static extractions has the following format:\
   `[Protocol]://[HOST or IP address]:[Port]/?name=[Name of the Extraction]`
1. To set runtime parameters of an extraction, add the corresponding variables to the extraction URL using the *@concat* command. The concatenated string has the following format:\
   `@concat('[Protocol]://[HOST or IP address]:[Port]/?name=[Name of the Extraction]&[Name of the Parameter in XU]=',variables('[Name of the Variable in ADF'))`
1. Run the pipeline and check the result.

Tip

You can copy the URL of an extraction from the Run window in Xtract Universal, see [Documentation: Run an Extraction](../../documentation/execute-and-automate/run-an-extraction/#run-extraction-window).

______________________________________________________________________

#### Related Links

- [Run an ADF pipeline when an SAP extraction file is successfully uploaded to Azure storage](../run-an-ADF-pipeline-when-sap-extraction-file-is-successfully-uploaded-to-Azure-storage/)
- [Integration in Azure Data Factory using Webservices](../adf-integration-using-webservices/)
- [Integration in Azure Data Factory using Command Line](../adf-integration-using-command-line/)
- [Documentation: Web API](../../web-api/)
