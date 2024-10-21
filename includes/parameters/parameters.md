
{{ productName }} supports multiple options to dynamize extractions:

- [Extraction parameters](extraction-parameters.md)
- [Script expressions](script-expressions.md)
{% if page.meta.product == "xtract-universal" %}- [SQL parameters](sql-parameters.md) 

While script expressions compute values, extraction parameters and by extension SQL parameters require users to pass actual values when running an extraction.
Extraction parameters affect the extraction settings, destination settings, the SAP connection settings, and the user-defined (custom) runtime parameters of an extraction. 
This includes the runtime parameters that are used in SQl commands (SQL parameters).

{% else %}

While script expressions compute values, extraction parameters require users to pass actual values when running an extraction.
Extraction parameters affect the extraction settings, the SAP connection settings, and the user-defined (custom) runtime parameters of an extraction. 

{% endif %}

### About Custom Runtime Parameters

User-defined runtime parameters can be used to filter SAP data before writing the data to the destination.
They are part of the [extraction parameters](extraction-parameters.md/#custom){% if page.meta.product == "xtract-universal" %} and can be used in SQL statements, see [SQL parameters](sql-parameters.md){% endif %}.
There are two types of custom runtime parameters:

- scalar parameters that represent a single value.
- list parameters that represent multiple values separated by a comma, e.g., 1,10 or “1”, “10”.

Most {{ components }} offer an *Edit runtime parameters* menu that allows users to create custom runtime parameters.

![edit-runtime-parameters](../../assets/images/documentation/components/bwcube/{{ abbr }}/open-edit-runtime-parameters.png)

Once runtime parameters are available, a switch is added to all input fields that support runtime parameters.
The switch allows users to switch between a static input value (:runtime-parameters-static:) and an existing runtime parameter (:runtime-parameters-dynamic:), e.g., *Parameter0*.

![use-runtime-parameters](../../assets/images/documentation/components/runtime-parameters/runtime-parameters-in-selections.png)

The following table shows what {{ components }} and settings support custom runtime parameters:

| {{ Component }} |  Settings that Support Custom Runtime Parameters | 
|----------|-------------|
| :component-bapi: {{ bapi }} | [Import parameters](../bapi/input-and-output.md/#import-parameters), [Table parameters](../bapi/input-and-output.md/#table-parameters) |  
| :component-bwcube: {{ bwcube }} | [BEx variables](../bwcube/variables-and-filters.md/#edit-variables), [dimension filters](../bwcube/variables-and-filters.md/#set-dimension-filters)   |  
| :component-deltaq: {{ deltaq }}  | [Selections](../deltaq/selections.md/#edit-selections)    | 
| :component-odp: {{ odp }} | [Selections](../odp/selections.md/#edit-selections)   | 
| :component-query: {{ query }} | [Selections](../query/variants-and-selections.md/#edit-selections)  | 
| :component-report: {{ report }}  | [Selections](../report/variants-and-selections.md/#edit-selections)  | 
| :component-table: {{ table }}  | [WHERE clause](../table/where-clause.md), [HAVING clause](../table/having-clause.md) | 
| :component-table-cdc: {{ tableCDC }}  | [WHERE clause](../table-cdc/where-clause.md) | 