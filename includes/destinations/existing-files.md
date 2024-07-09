
### Existing files

If a flat file by the same name already exists in the target directory, the following actions can be taken:

{% if page.meta.destination == "csv" %}

| Option | Description |
|--------|--------------|
| **Replace file** | The export process overwrites existing files. |
| **Append results** | The export process appends new data to an already existing file, see [Column Mapping](#column-mapping).|
| **Abort extraction** | The process is aborted, if the file already exists. |

{% else %}

| Option | Description |
|--------|--------------|
| **Replace file** | The export process overwrites existing files. |
| **Abort extraction** | The process is aborted, if the file already exists. |

{% endif %}