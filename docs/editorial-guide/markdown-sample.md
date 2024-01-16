---
title: Markdown Samples
---

Migrate content from the Editorial Guide.

## New Features

### Content Tabs

Use content tabs for code blocks and changelogs in combination with the snippet markdown extension.

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

### Announcements

Coming soon...

### Tags

Coming soon...

### Variables & Meta Data

Coming soon...
