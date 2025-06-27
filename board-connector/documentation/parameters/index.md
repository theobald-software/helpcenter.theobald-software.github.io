Board Connector supports multiple options to dynamize extractions:

- [Extraction parameters](extraction-parameters/)
- [Script expressions](script-expressions/)

While script expressions compute values, extraction parameters require users to pass actual values when running an extraction. Extraction parameters affect the extraction settings, the SAP connection settings, and the user-defined (custom) runtime parameters of an extraction.

### About Custom Runtime Parameters

User-defined runtime parameters can be used to filter SAP data before writing the data to the destination. They are part of the [extraction parameters](extraction-parameters/#custom). There are two types of custom runtime parameters:

- scalar parameters that represent a single value.
- list parameters that represent multiple values separated by a comma, e.g., 1,10 or “1”, “10”.

Most extractions types offer an *Edit runtime parameters* menu that allows users to create custom runtime parameters.

Once runtime parameters are available, a switch is added to all input fields that support runtime parameters. The switch allows users to switch between a static input value () and an existing runtime parameter (), e.g., *Parameter0*.

The following table shows what extractions types and settings support custom runtime parameters:

| Extraction Type | Settings that Support Custom Runtime Parameters | | --- | --- | | BAPI | [Import parameters](../bapi/input-and-output/#import-parameters), [Table parameters](../bapi/input-and-output/#table-parameters) | | BWCube | [BEx variables](../bwcube/variables-and-filters/#edit-variables), [dimension filters](../bwcube/variables-and-filters/#set-dimension-filters) | | DeltaQ | [Selections](../deltaq/selections/#edit-selections) | | ODP | [Selections](../odp/selections/#edit-selections) | | Query | [Selections](../query/variants-and-selections/#edit-selections) | | Report | [Selections](../report/variants-and-selections/#edit-selections) | | Table | [WHERE clause](../table/where-clause/), [HAVING clause](../table/having-clause/) | | Table CDC | [WHERE clause](../table-cdc/where-clause/) |
