---
title: Script Expressions
description: How to dynamize extractions with custom Script Expressions offered by Board Connector.
---

Script expressions offer a way of adding dynamic parameters to {{ productName }}. 
Script expressions are resolved at extraction runtime. 
The output of a script expression is a string. 
This string can be used as input for further .NET string operations.

Script expressions can be used as selection parameters for [{{ table }}](../table/where-clause.md/#script-expressions) or [{{ deltaq }}](../deltaq/selections.md/#script-expressions-for-deltaq) extractions.

{% include "parameters/script-expressions.md" %}

### List of available Script Expressions

Script expressions are usually used to determine a dynamic date based on the current date. 
When using script expressions in a [WHERE Clause](../table/where-clause.md/#script-expressions), the value must be entered in single quotation marks.

--8<-- "components/table/where-clause-syntax.md:script"
