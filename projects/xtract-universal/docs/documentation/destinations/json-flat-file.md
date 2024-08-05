---
title: Flat File JSON 
description: Write SAP data to a JSON Flat-File destination
---

This page shows how to set up and use the {{ page.meta.title }} destination. 
The {{ page.meta.title }} destination is a JSON flat file that can be written to a local directory or a network drive.  

{% include "destinations/create-destination.md" %}

![Destination-Details](../../assets/images/xu/documentation/destinations/flat-file-json/destination-details.png){:class="img-responsive"}


{% include "destinations/file-output-path.md" %}

{% include "destinations/assign-destination.md" %}

![Destination-settings](../../assets/images/xu/documentation/destinations/flat-file-json/destination-settings.png){:class="img-responsive"}

{% include "destinations/file-name.md" %}

{% include "parameters/file-name-script-expressions.md" %}

{% include "destinations/column-name-style.md" %}

{% include "destinations/date-conversion.md" %}
 
{% include "destinations/existing-files.md" %}

{% include "destinations/file-splitting.md" %}
