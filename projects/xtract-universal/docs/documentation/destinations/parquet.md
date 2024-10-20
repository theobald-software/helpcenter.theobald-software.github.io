---
title: Flat File Parquet
description: Write SAP data to a Parquet Flat-File destination
destination: parquet
---

This page shows how to set up and use the {{ page.meta.title }} destination. 
The {{ page.meta.title }} destination loads data to a Parquet Database destination. 

{% include "destinations/create-destination.md" %}

![Destination-Details](../../assets/images/documentation/destinations/flat-file-parquet/destination-details.png){:class="img-responsive"}

{% include "destinations/file-output-path.md" %}

{% include "destinations/compatibility-mode.md" %}

{% include "destinations/assign-destination.md" %}

![Destination-settings](../../assets/images/documentation/destinations/flat-file-parquet/destination-settings.png){:class="img-responsive"}

{% include "destinations/file-name.md" %}

{% include "parameters/file-name-script-expressions.md" %}

{% include "destinations/column-name-style.md" %}

{% include "destinations/date-conversion.md" %}
 
{% include "destinations/existing-files.md" %}

