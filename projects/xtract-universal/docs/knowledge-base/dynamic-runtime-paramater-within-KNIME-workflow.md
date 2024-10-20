---
title: Dynamic Runtime Parameters in KNIME Workflows
description: Dynamic Runtime Parameter within KNIME Workflow
---


The following article describes how user-defined runtime parameters in {{ productName }} can be transferred to the SAP Reader (Theobald Software) of a KNIME workflow. 
This reduces transaction costs and improves the use of a delta-mechanism on standard SAP tables. 

The depicted example uses the field *AEDAT* (Changed On) of the standard table *EKKO* (Purchasing Document Header). 
A runtime parameter in KNIME is used to extract and process only the entries from the SAP table EKKO that changed since the last run. 

![KMIME-dynamic-runtime-parameter-workflow](../assets/images/articles/xu/KMIME-dynamic-runtime-parameter-workflow.png){:class="img-responsive"}


### Requirements

Basic knowledge of T-SQL, KNIME Analytics Platform and the creation of table extractions in {{ productName }} is required.<br>
The following BI architecture must be available and configured:

- Latest version of the [KNIME Analytics Platform](https://www.knime.com/downloads).
- Installed KNIME extension [SAP Reader (Theobald Software)](https://hub.knime.com/knime/extensions/org.knime.features.sap.theobald/latest/org.knime.sap.theobald.node.v2.SAPTheobaldReader2NodeFactory).
- Existing table object in a Microsoft database (SQL-Server).
- Latest version of {{ productName }}, obtained from the [Theobald Software website](https://theobald-software.com/en/download-trial).
- Existing table extraction of table *EKKO - Purchasing Document Header* in {{ productName }}, see [Define a Table Extraction](../documentation/table/index.md/#define-the-table-extraction-type).
- Use of a WHERE condition with [runtime parameters](../documentation/table/edit-runtime-parameters.md) of the table extraction in {{ productName }} e.g.: `EKKO~AEDAT > @maxAEDAT`.

### KNIME Analytics Platform Workflow

1. Configuration of the KNIME node **Microsoft SQL Server Connector**:<br>
![KNIME-Microsoft SQL Server Connector](../assets/images/articles/xu/KNIME-Microsoft SQL Server Connector.png){:class="img-responsive"}
2. Configuration of the KNIME node **DB Table Selector**: <br>
Use the following SQL statement :number-2: for the table object *EKKO* in the **Custom Query** :number-1:.
```sql
SELECT MAX(REPLACE(AEDAT, '-', '')) AS maxAEDAT FROM #table#
```
![KNIME-DB-Table-Selector](../assets/images/articles/xu/KNIME-DB-Table-Selector.png){:class="img-responsive"}
3. Use the KNIME node **DB Reader** to read the result value of the Custom Query `maxAEDAT` and propagate the data to all connected nodes.
4. Configuration of the KNIME node **Table Row to Varaiable** :number-3::<br>
![KNIME-Table-Row-to-Variable](../assets/images/articles/xu/KNIME-Table-Row-to-Variable.png){:class="img-responsive"}
5. Right-click on the node **SAP Reader (Theobald Software)** to display the flow variable ports.<br>
![KNIME-Show-Flow-Variables-Ports](../assets/images/articles/xu/KNIME-Show-Flow-Variables-Ports.png){:class="img-responsive"}
6. Configuration of the KNIME node **SAP Reader (Theobald Software)**, see [KNIME Integration via SAP Reader (Theobald Software)](../documentation/destinations/knime.md/#knime-integration-via-sap-reader):<br>
![KNIME-SAP Reader (Theobald Software)-Settings](../assets/images/articles/xu/KNIME-SAP-Reader-(Theobald Software)-Settings.png){:class="img-responsive"}
7. In the **Parameters** tab, use **Fetch Parameters** :number-4: to add the user-defined variable to the WHERE condition :number-5: and enter a default value :number-6:.<br>
![KNIME-SAP-Reader-(Theobald Software)-(SAP Tabelle EKKO)](../assets/images/articles/xu/KNIME-SAP-Reader-(Theobald Software)-(SAP Tabelle EKKO).png){:class="img-responsive"}
8. In the **Flow Variables** tab, select the variable `maxAEDAT` in the **Custom Parameters** section using the drop-down menu :number-7:.<br>
![KNIME-SAP-Reader-Flow-Variables](../assets/images/articles/xu/KNIME-SAP-Reader-Flow-Variables.png){:class="img-responsive"}
9. Pass the results of the extraction in the workflow to the KNIME node **DB Writer** and execute the workflow.

!!! tip
    Check the correct execution of the extraction with user-defined runtime parameters in the [Extraction Log](../documentation/logs.md/#read-extraction-logs) of {{ productName }}.


****
#### Releated Links
- [Documentation: KNIME Destination](../documentation/destinations/knime.md)
- [Read or download documentation for KNIME Software](https://docs.knime.com/)
- [KNIME Flow Control Guide](https://docs.knime.com/2021-06/analytics_platform_flow_control_guide/index.html#introduction)
