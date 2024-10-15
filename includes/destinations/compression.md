### Compression

Compression is only available for the csv file format, see [Destination Details: File Format](#file-format).

{% if page.meta.destination == "google" %}

| Option | Description |
|--------|-------------|
| **None** | The data is transferred uncompressed and stored as a csv file. |
| **GZip** | The data is transferred compressed and stored as a gz file.  |

{% else %}

#### GZip
The data is transferred compressed and stored as a gz file. 

{% endif %}