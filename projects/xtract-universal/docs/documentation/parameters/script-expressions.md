---
title: Script Expressions
description: How to dynamize extractions with custom Script Expressions offered by Xtract Universal.
---

Script expressions offer a way of adding dynamic parameters to {{ productName }}. 
Script expressions are resolved at extraction runtime. 
The output of a script expression is a string. 
This string can be used as input for further .NET string operations.

Script expressions can be used in the following scenarios:

- as dynamic folder paths in cloud storage destinations.
- as dynamic file names in database destinations, cloud storage destinations and flat-file destinations.
- as custom SQL commands in database destinations.
- as selection parameters for [Table](../table/where-clause.md#script-expressions) or [DeltaQ](../deltaq/selections.md/#script-expressions-for-deltaq) extractions.

{% include "parameters/script-expressions.md" %}


### List of available Script Expressions

=== "File Names"

	--8<-- "parameters/file-name-script-expressions.md"

=== "Folder Paths"

	--8<-- "parameters/folder-script-expressions.md"

=== "Custom SQL Statements"

	#### Use Script Expressions in Custom SQL Statements

	--8<-- "destinations/custom-sql-statements.md:script"

=== "Selections in Table & DeltaQ"

	#### Use Script Expressions as Selection Parameters in Table and DeltaQ

	Script expressions are usually used to determine a dynamic date based on the current date. 
	When using script expressions in a [WHERE Clause](../table/where-clause.md/#script-expressions), the value must be entered in single quotation marks.

	--8<-- "components/table/where-clause-syntax.md:script"
