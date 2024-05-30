---
title: Dynamic Runtime Parameter in KNIME Workflows
description: Dynamic Runtime Parameter within KNIME Workflow
---
### About this approach

The following article describes how user-defined runtime parameters in {{ productName }} can be transferred to the SAP Reader (Theobald Software) of a KNIME workflow. 

The background is the reduction of transaction costs as well as the use of a delta-mechanism on standard SAP tables. 

In this example, the following field *AEDAT - Changed On* of the standard table *EKKO - Purchasing Document Header* is used. 

Through this procedure, only changed entries from the SAP table EKKO are extracted from the SAP source system and processed into the existing SQL Server database table. 

![KMIME-dynamic-runtime-parameter-workflow](../assets/images/xu/articles/KMIME-dynamic-runtime-parameter-workflow.png){:class="img-responsive"}

!!! note
    Basic knowledge of T-SQL, KNIME Analytics Platform and the creation of table extractions in {{ productName }} is required.

### Requirements

The following BI architecture must be available and configured:

- Latest version of the [KNIME Analytics Platform](https://www.knime.com/downloads).
- Installed KNIME extension [SAP Reader (Theobald Software)](https://hub.knime.com/knime/extensions/org.knime.features.sap.theobald/latest/org.knime.sap.theobald.node.v2.SAPTheobaldReader2NodeFactory).
- Existing table object in a Microsoft database (SQL-Server).
- Latest version of {{ productName }}, obtained from the [Theobald Software website](https://theobald-software.com/en/download-trial).
- Existing table extraction of table *EKKO - Purchasing Document Header* in {{ productName }}, see [Defining a Table Extraction](https://help.theobald-software.com/en/xtract-universal/getting-started/define-a-table-extraction).
- Use of a WHERE condition with [user-defined variables](https://help.theobald-software.com/en/xtract-universal/advanced-techniques/user-defined-variables) of the table extraction in {{ productName }} e.g.: `EKKO~AEDAT > @maxAEDAT`.

### KNIME Analytics Platform Workflow

1. Configuration of the KNIME node **Microsoft SQL Server Connector**.
![KNIME-Microsoft SQL Server Connector](../assets/images/xu/articles/KNIME-Microsoft SQL Server Connector.png){:class="img-responsive"}
2. Configuration of the KNIME node **DB Table Selector**.
![KNIME-DB-Table-Selector](../assets/images/xu/articles/KNIME-DB-Table-Selector.png){:class="img-responsive"}
3. Use the following SQL statement :number-2: for the table object *EKKO* in the **Custom Query** :number-1:.
```sql
SELECT MAX(REPLACE(AEDAT, '-', '')) AS maxAEDAT FROM #table#
```
4. Using the KNIME node **DB Reader** to read the result value of the Custom Query `maxAEDAT` to propagated to all connected nodes.
5. Configuration of the KNIME node **Table Row to Varaiable** :number-3:.
![KNIME-Table-Row-to-Variable](../assets/images/xu/articles/KNIME-Table-Row-to-Variable.png){:class="img-responsive"}
7. Right-click on the node **SAP Reader (Theobald Software)** to display the flow variable ports.
![KNIME-Show-Flow-Variables-Ports](../assets/images/xu/articles/KNIME-Show-Flow-Variables-Ports.png){:class="img-responsive"}
6. Configuration of the KNIME node **SAP Reader (Theobald Software)**, see [KNIME Integration via SAP Reader (Theobald Software)](https://kb.theobald-software.com/xtract-universal/knime-integration-via-sap-reader#step-by-step-guide).
![KNIME-SAP Reader (Theobald Software)-Settings](../assets/images/xu/articles/KNIME-SAP Reader (Theobald Software)-Settings.png){:class="img-responsive"}
8. In the **Parameters** tab, use **Fetch Parameters** :number-4: to add the user-defined variable to the WHERE condition :number-5: and enter a default value :number-6:.
![KNIME-SAP-Reader-(Theobald Software)-(SAP Tabelle EKKO)](../assets/images/xu/articles/KNIME-SAP-Reader-(Theobald Software)-(SAP Tabelle EKKO).png){:class="img-responsive"}
9. In the **Flow Variables** tab, select the variable `maxAEDAT` in the **Custom Parameters** section using the drop-down menu :number-7:.
![KNIME-SAP-Reader-Flow-Variables](../assets/images/xu/articles/KNIME-SAP-Reader-Flow-Variables.png){:class="img-responsive"}
10. Finally, pass the results of the extraction in the workflow to the KNIME node **DB Writer** and execute the workflow.

!!! tip
    Check the correct execution of the extraction with user-defined runtime parameters in the [Extraction Log](https://help.theobald-software.com/en/xtract-universal/logging#reading-logs---extraction-log) of {{ productName }}.


****
#### Releated Link
- [KNIME Integration via SAP Reader (Theobald Software)](https://kb.theobald-software.com/xtract-universal/knime-integration-via-sap-reader)
- [Read or download documentation for KNIME Software](https://docs.knime.com/)
- [KNIME Flow Control Guide](https://docs.knime.com/2021-06/analytics_platform_flow_control_guide/index.html#introduction)
