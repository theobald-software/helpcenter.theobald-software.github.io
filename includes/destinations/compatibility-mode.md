

#### Compatibility mode

The following compatibility modes are available:
- *Pure* 
- *Spark* (does not support the data types used in pure mode, so other data types need to be used)
- *BigQuery* (formats columns names to be compatible with Google BigQuery, see [BigQuery Documentation: Column Names](https://cloud.google.com/bigquery/docs/schemas?hl=en#column_names))

| SAP | Pure / BigQuery | Spark |
|------|-------------|-------|
| INT1 | UINT_8 | INT16 |
| TIMS | TIME_MILLIS | UTF8 |
