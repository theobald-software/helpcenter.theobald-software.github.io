---
title: Markdown Samples
---

Migrate content from the Editorial Guide.

### Admonitions

!!! summary

	- I am a list
	- I summarize long passages of text


## New Features

### Announcements

Material for MkDocs includes an announcement bar to display product news or other important information.

- Open the following file: `helpcenter.theobald-software.github.io\projects\[product-name]\overrides\main.html`.
- Add an `announce` block in the main.html file:

	``` html
	{% extends "base.html" %}

	{% block announce %}
	  <p>The ERPConnect HelpCenter will soon replace the ERPConnect Online Help!<p>
	{% endblock %}
	```

To delete an announcement, remove the `announce` block from the file.

### Content Tabs

Use content tabs for code blocks and changelogs.

``` title="Content tabs with code blocks"
=== "C"

    ``` c
    #include <stdio.h>

    int main(void) {
      printf("Hello world!\n");
      return 0;
    }
    ```

=== "C++"

    ``` c++
    #include <iostream>

    int main(void) {
      std::cout << "Hello world!" << std::endl;
      return 0;
    }
    ```
```

<div class="result" markdown>

=== "C"

    ``` c
    #include <stdio.h>

    int main(void) {
      printf("Hello world!\n");
      return 0;
    }
    ```

=== "C++"

    ``` c++
    #include <iostream>

    int main(void) {
      std::cout << "Hello world!" << std::endl;
      return 0;
    }
    ```

</div>


``` title="Content tabs with changelogs"

=== "Xtract Universal"

    --8<-- "version-history/XtractUniversal.md"

=== "Theobald Extractors"

    --8<-- "version-history/TheobaldExtractors.md"
```

### Grid Cards

The list syntax is a shortcut for card grids and consists of an unordered (or ordered) list wrapped by a `div` with both, the `grid` and `cards` classes:


``` html title="Grid Cards"
<div class="grid cards" markdown>

- :fontawesome-brands-html5: __HTML__ for content and structure
- :fontawesome-brands-js: __JavaScript__ for interactivity
- :fontawesome-brands-css3: __CSS__ for text running out of boxes
- :fontawesome-brands-internet-explorer: __Internet Explorer__ ... huh?

</div>
```

<div class="result" markdown>
  <div class="grid cards" markdown>

- :fontawesome-brands-html5: **HTML** for content and structure
- :fontawesome-brands-js: **JavaScript** for interactivity
- :fontawesome-brands-css3: **CSS** for text running out of boxes
- :fontawesome-brands-internet-explorer: **Internet Explorer** ... huh?

  </div>
</div>


You can use regular markdown syntax in grid cards to add links, images, etc. Example:

``` html title="Grid Cards, complex example"
<div class="grid cards" markdown>

-   ![xu](../assets/images/XtractUniversal.png){ .lg .middle width="50px"} __Xtract Universal__

	---
	
    The flexible SAP interface for databases, analytics, BI or cloud solutions.

    [:octicons-arrow-right-24: Xtract Universal](https://help.theobald-software.com/en/xtract-universal/)

-   ![xis](../assets/images/XtractIS.png){ .lg .middle width="50px"} __Xtract IS__

    ---

    The powerful SAP plug-in for SQL Server Integration Services to extract mass data.

    [:octicons-arrow-right-24: Xtract IS](https://help.theobald-software.com/en/xtract-is/)

</div>
```

<div class="result" markdown>
  <div class="grid cards" markdown>

-   ![xu](../assets/images/XtractUniversal.png){ .lg .middle width="50px"} __Xtract Universal__

	---
	
    The flexible SAP interface for databases, analytics, BI or cloud solutions.

    [:octicons-arrow-right-24: Xtract Universal](https://help.theobald-software.com/en/xtract-universal/)

-   ![xis](../assets/images/XtractIS.png){ .lg .middle width="50px"} __Xtract IS__

    ---

    The powerful SAP plug-in for SQL Server Integration Services to extract mass data.

    [:octicons-arrow-right-24: Xtract IS](https://help.theobald-software.com/en/xtract-is/)

  </div>
</div>

### Tags

Coming soon...

### Variables 

Variables are placeholders for product specific words, e.g., "runtime parameters" versus "SSIS variables".
They can be used in the products and in reusable texts in the `includes` directory. 

How to define and use variables:

1. Open the mkdocs.yml file of a product.
2. Define variables under `extra`:

	``` yaml
	extra:
	  variable-name: value
	  product: Xtract Universal
	```
	
3. Use the variable in reusable or regular text using the following syntax:

	```
	{{ variable-name }}
	```

Example:

=== ".md file"

	```
	Welcome to {{ product }}!
	```

=== "ERPConnect product page"

	Welcome to ERPConnect!

=== "Xtract Universal product page"

	Welcome to Xtract Universal!

#### List of Variables

| Variable     | ERPConnect | Xtract IS            | Xtract for Alteryx       | Xtract Universal           |  yunIO          |
|--------------|------------|----------------------|--------------------------|----------------------------|-----------------|
| product      | ERPconnect | Xtract IS            | Xtract for Alteryx       | Xtract Unversal            | yunIO           |
| variable     | -          | SSIS variable        | runtime parameter        | runtime parameter          | -               |
| variables    | -          | SSIS variables       | runtime parameters       | runtime parameters         | -               |
| settings     | -          | settings             | extraction settings      | extraction settings        | server settings |
| settings-btn | -          | **Settings**         | **[Extraction Settings]**|**Extraction Settings**     | **Settings**    |
| parameter-btn| -          | **Edit parameters**  | **[Edit parameters]**    |**Edit runtime parameters** | -               |
