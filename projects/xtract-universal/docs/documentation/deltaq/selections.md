---
title: Selections
description: Filter the data that is returned by a DeltaQ datasource.
---

This page shows how to filter the data that is extracted by the {{ deltaq }} {{ component }}.
Selections limit the result set of the {{ deltaq }} {{ component }} to extract only records that match the selection.

{% include "components/selections.md" %}

### Script Expressions for DeltaQ

Script expressions are usually used to determine a dynamic date based on the current date. 

--8<-- "components/table/where-clause-syntax.md:script"

For more information on script expression, see [Script Expressions](../parameters/script-expressions.md).

### Data Format

{% include "components/settings/sap-data-format.md"  %}

