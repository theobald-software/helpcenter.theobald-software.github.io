

#### Compatibility mode

The following compatibility modes are available:
- *Pure*: standard parquet format
- *Spark*: ensures compatibility with Apache Spark by using different data types than the standard parquet format:

	| SAP | Pure / BigQuery | Spark |
	|------|-------------|-------|
	| INT1 | UINT_8 | INT16 |
	| TIMS | TIME_MILLIS | UTF8 |

- *BigQuery*: ensures compatibility with with Google BigQuery by formatting the columns names, see [BigQuery Documentation: Column Names](https://cloud.google.com/bigquery/docs/schemas?hl=en#column_names).

