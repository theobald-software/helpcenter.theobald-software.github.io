---
title: Script Expressions
description: Available Script Expressions
---

Script expressions offer a way of adding dynamic parameters to {{ productName }}. 
Script expressions are resolved at extraction runtime. 
The output of a script expression is a string. 
This string can be used as input for further .NET string operations.

Script expressions can be used in the following scenarios:

- as selection parameters for [Table](../table/where-clause#script-expressions) or [DeltaQ](../datasource-deltaq/datasource-parameters#script-expressions) extractions.
- as custom SQL commands in [Database Destinations](../destinations#databases--data-warehouses).
- as dynamic folder paths in the [Amazon S3](../destinations/amazon-aws-s3#folder) and [Azure Storage](../destinations/azure-storage#folder).
- as dynamic file names in push destinations.

{% include "parameters/script-expressions.md" %}

### List of available Script Expressions

{% include "parameters/file-name-script-expressions.md" %}

{% include "parameters/folder-script-expressions.md" %}

#### Use Script Expressions as Selection Parameters in Table and DeltaQ

Script expressions are usually used to determine a dynamic date based on the current date. <br>
When using script expressions in WHERE clauses, the value must be entered in single quotation marks.

**Syntax:**

```
[Field_name][Space][Operator][Space]'#[Script-Expression]#'
```

**Examples:**

|   Input                         | Output                                                                         | Description              |
|:--------------------------------------|:------------------------------------------------------------------------------|:--------------------|
|```#{ DateTime.Now.ToString("yyyyMMdd") }#```                                       | yyyyMMdd | Current date in SAP format          |
|```#{ String.Concat(DateTime.Now.Year.ToString(), "0101") }#```                     | yyyy0101 | Current year concatenated with "0101"           |
|```#{ String.Concat(DateTime.Now.ToString("yyyy"), "0101") }#```                    | yyyy0101 | Current year concatenated with "0101"            |
|```#{ String.Concat(DateTime.Now.ToString("yyyyMMdd").Substring(0,4), "0101") }#``` | yyyy0101 | Current year concatenated with "0101"           |
