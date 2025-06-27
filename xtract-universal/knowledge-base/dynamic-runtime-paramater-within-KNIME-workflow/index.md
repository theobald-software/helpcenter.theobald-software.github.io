The following article describes how user-defined runtime parameters in Xtract Universal can be transferred to the SAP Reader (Theobald Software) of a KNIME workflow. This reduces transaction costs and improves the use of a delta-mechanism on standard SAP tables.

The depicted example uses the field *AEDAT* (Changed On) of the standard table *EKKO* (Purchasing Document Header). A runtime parameter in KNIME is used to extract and process only the entries from the SAP table EKKO that changed since the last run.

### Requirements

Basic knowledge of T-SQL, KNIME Analytics Platform and the creation of table extractions in Xtract Universal is required.\
The following BI architecture must be available and configured:

- Latest version of the [KNIME Analytics Platform](https://www.knime.com/downloads).
- Installed KNIME extension [SAP Reader (Theobald Software)](https://hub.knime.com/knime/extensions/org.knime.features.sap.theobald/latest/org.knime.sap.theobald.node.v2.SAPTheobaldReader2NodeFactory).
- Existing table object in a Microsoft database (SQL-Server).
- Latest version of Xtract Universal, obtained from the [Theobald Software website](https://theobald-software.com/en/download-trial).
- Existing table extraction of table *EKKO - Purchasing Document Header* in Xtract Universal, see [Define a Table Extraction](../../documentation/table/#define-the-table-extraction-type).
- Use of a WHERE condition with [runtime parameters](../../documentation/table/edit-runtime-parameters/) of the table extraction in Xtract Universal e.g.: `EKKO~AEDAT > @maxAEDAT`.

### KNIME Analytics Platform Workflow

1. Configuration of the KNIME node **Microsoft SQL Server Connector**:

1. Configuration of the KNIME node **DB Table Selector**:\
   Use the following SQL statement for the table object *EKKO* in the **Custom Query** .

   ```sql
   SELECT MAX(REPLACE(AEDAT, '-', '')) AS maxAEDAT FROM #table#

   ```

1. Use the KNIME node **DB Reader** to read the result value of the Custom Query `maxAEDAT` and propagate the data to all connected nodes.

1. Configuration of the KNIME node **Table Row to Varaiable** :

1. Right-click on the node **SAP Reader (Theobald Software)** to display the flow variable ports.

1. Configuration of the KNIME node **SAP Reader (Theobald Software)**, see [KNIME Integration via SAP Reader (Theobald Software)](../../documentation/destinations/knime/#knime-integration-via-sap-reader):

1. In the **Parameters** tab, use **Fetch Parameters** to add the user-defined variable to the WHERE condition and enter a default value .

1. In the **Flow Variables** tab, select the variable `maxAEDAT` in the **Custom Parameters** section using the drop-down menu .

1. Pass the results of the extraction in the workflow to the KNIME node **DB Writer** and execute the workflow.

Tip

Check the correct execution of the extraction with user-defined runtime parameters in the [Extraction Log](../../documentation/logs/#read-extraction-logs) of Xtract Universal.

______________________________________________________________________

#### Releated Links

- [Documentation: KNIME Destination](../../documentation/destinations/knime/)
- [Read or download documentation for KNIME Software](https://docs.knime.com/)
- [KNIME Flow Control Guide](https://docs.knime.com/2021-06/analytics_platform_flow_control_guide/index.html#introduction)
