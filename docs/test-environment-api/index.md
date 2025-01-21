---
title: API Documentation Playground
description: A test environment for API documentation.
---

This section contains general API documentation based on Open API Specification documents.

All test pages reference the swagger.json file in the following location: 
`helpcenter.theobald-software.github.io\docs\test-environment-api\swagger.json`
Only the Neoteroi page references the swagger3.json file in the same location, because it is only compatible with OpenAPI 3.x.


My personal favourites:
1. [MkDocs Swagger UI Tag](api-swagger-ui-tag.md) (because of the [styling options](https://blueswen.github.io/mkdocs-swagger-ui-tag/options/))
2. [Redoc Tag](api-redoc.md).

## Render Swagger

See [api-render-swagger.md](api-render-swagger.md).

Can only reference local and hosted (URL) .json files.

Installation:
``` title="cmd.exe"
pip install mkdocs-render-swagger-plugin
```

Activation:
``` title="mkdocs.yml"
plugins:
  - render_swagger
```

Usage: See file.

Example:
- [https://docs.scarf.sh/api-v2/](https://docs.scarf.sh/api-v2/)

## MkDocs Swagger UI Tag

[https://blueswen.github.io/mkdocs-swagger-ui-tag/](https://blueswen.github.io/mkdocs-swagger-ui-tag/)

See [api-swagger-ui-tag.md](api-swagger-ui-tag.md).


- Can reference local and hosted (URL) .json and .yml files.
- Offers multiple parameters, see [https://blueswen.github.io/mkdocs-swagger-ui-tag/options/](https://blueswen.github.io/mkdocs-swagger-ui-tag/options/).
- Synchronized dark mode with Material for MkDocs.


Installation:
``` title="cmd.exe"
pip install mkdocs-swagger-ui-tag
```

Activation:
``` title="mkdocs.yml"
plugins:
  - swagger-ui-tag:
      supportedSubmitMethods: []
```

Usage:
``` title="api-render-swagger.md"
<swagger-ui src="swagger.json"/>
```

Example: [https://blueswen.github.io/mkdocs-swagger-ui-tag/demo/without-try-it-out/](https://blueswen.github.io/mkdocs-swagger-ui-tag/demo/without-try-it-out/)

## Neoteroi

[https://www.neoteroi.dev/mkdocs-plugins/web/oad/](https://www.neoteroi.dev/mkdocs-plugins/web/oad/)

See [api-neoteroi.md](api-neoteroi.md).

- Can reference local and hosted (URL) .json and .yml files.
- Only works with OpenAPI 3.x

Copy the `mkdocsoad.css` into the `assets/stylesheets` folder of the project.

Installation:
``` title="cmd.exe"
pip install neoteroi-mkdocs
```

Activation:
``` title="mkdocs.yml"
plugins:
  - neoteroi.mkdocsoad:
      use_pymdownx: true
```
  
Usage:
``` title="api-neoteroi.md"
[OAD(./docs/test-environment-api/swagger3.json)]
```

## Redoc Tag

[https://blueswen.github.io/mkdocs-redoc-tag/](https://blueswen.github.io/mkdocs-redoc-tag/)

See [api-redoc.md](api-redoc.md).

- Can reference local and hosted (URL) .json and .yml files.

Installation:
```
pip install mkdocs-redoc-tag
```

Activation:
``` title="mkdocs.yml"
plugins:
   - redoc-tag
```
  
Usage:
```
<style>
.md-grid {
  max-width: 100%; /* or 100%, if you want to stretch to full-width */
}
.md-typeset h1,
  .md-content__button {
    display: none;
  }

</style>

<redoc src="https://petstore.swagger.io/v2/swagger.json"/>
```
