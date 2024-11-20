
### Available Filter Options

You can enter filter values directly in the {{ page.meta.componentName }} {{ component }} {% if page.meta.componentFolder == "bwcube" %}, select pre-defined values from SAP{% endif %} or define {% if page.meta.product != "xtract-is" %} [{{ variables }}](edit-runtime-parameters.md) {% else %} {{ variables }} {% endif %} to pass values during runtime.

The {{ page.meta.componentName }} {{ component }} offers the following filter options:

| Type | Operator |  Description    |  
|:---------|:---------|:-------------|
| Single | | Compare data to a single specified value. |
||*(not) like pattern* |  True if data values do (not) contain to the specified value.{% if page.meta.componentFolder == "odp" %} Not not all ODP contexts and data sources support this option.{% endif %} |
||*(not) equal to* |  True if data is (not) equal to the specified value.|
||*at least* |  True if data is greater than or equal to the specified value.|
||*more than* |  True if data is greater than the specified value.|
||*at most* | True if data is less than or equal to the specified value.|
||*less than* | True if data is less than the specified value.|
| Range | | Check if the data is (not) within a specified range of values. |
||*(not) between* | True if data values do (not) lie between the 2 specified values. |
{% if page.meta.product != "xtract-is" %} | List | | Check if the data is part of a specified list of values.
| | *element of* | True if data values are part of the list. |{% endif %}

