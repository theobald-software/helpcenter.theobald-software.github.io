---
title: Flat File CSV 
description: Flat-File - CSV destination
destination: csv
---

This page shows how to set up and use the {{ page.meta.title }} destination. 
The {{ page.meta.title }} destination is a CSV (comma-separated values) flat file that can be written to a local directory or a network drive.  

{% include "destinations/create-destination.md" %}

![Destination-Details](../../assets/images/xu/documentation/destinations/flat-file-csv/destination-details.png){:class="img-responsive"}

### File output path

{% include "destinations/file-output-path.md" %}

{% include "destinations/csv-settings.md" %}

{% include "destinations/convert-encoding.md" %}

{% include "destinations/assign-destination.md" %}

![Destination-settings](../../assets/images/xu/documentation/destinations/flat-file-csv/destination-settings.png){:class="img-responsive"}

{% include "destinations/file-name.md" %}

{% include "parameters/file-name-script-expressions.md " %}

{% include "destinations/column-name-style.md" %}

{% include "destinations/date-conversion.md " %}
 
{% include "destinations/existing-files.md" %}

{% include "destinations/file-splitting.md" %}

{% include "destinations/column-mapping.md" %}
