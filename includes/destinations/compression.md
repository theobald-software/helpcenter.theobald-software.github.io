### Compression

Compression is only available for the csv file format, see [Destination Details: File Format](#file-format).

{% if page.meta.destination != "azure" %}
#### None
The data is transferred uncompressed and stored as a csv file.
{% endif %}

#### GZip
The data is transferred compressed and stored as a gz file. 

