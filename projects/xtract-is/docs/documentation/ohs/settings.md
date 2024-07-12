---
title: Settings
description: Extraction Settings
---

{% include "components/settings/open-settings.md"  %}

The OHS settings consist of two tabs: 

- [*Table*](#table-settings)
- [*Third party tool (legacy)*](#third-party-tool-settings)

The settings correspond to the selected extraction type. Set either *Table* or *Third party tool (legacy)* settings.

{% include "components/settings/warning-fuba.md" %}

## Table Settings

![Extraction-Settings](../../assets/images/documentation/components/ohs/settings-tables.png)

### Extraction Settings

#### Package Size

{% include "components/settings/package-size.md" %}

#### Row Limit

{% include "components/settings/row-limit.md" %}

### Function Module

{% include "components/settings/function-modules.md" %}

### Extract Data in Background Job

{% include "components/settings/run-in-background.md" %}

### Advanced Settings

#### Background Job Timeout (seconds)

{% include "components/settings/background-job-timeout.md" %}

#### Adjust Currency Decimals

{% include "components/settings/adjust-currency-decimals.md" %}

## Third Party Tool Settings

![Extraction-Settings](../../assets/images/documentation/components/ohs/settings-third-party-tools.png)

#### Gateway host
Enter the data of your gateway host. It is often the same host as the SAP application server.

#### Gateway service
Enter the data of your gateway service (*sapgwXX*, where XX is the system number).

#### Program ID 
Enter the program ID of the SAP RFC destination.
