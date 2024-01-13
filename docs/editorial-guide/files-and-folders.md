---
title: Files & Folders
---

### Folder Structure

The following treeview illustrates the general folder structure in the HelpCenter repository.
Highlighted folders are linked to each other via symlink.

``` bash hl_lines="8 9 23 24"
├───.cache
├───.github
│   └───workflows #contains the GitHub workflow for publishing
├───docs
│   ├───assets #contains images and stylesheets for the product page
│   ├───editorial-guide #contains content of the editorial guide
│   └───release-notes #contains release-notes for all products
├───files #contains downloadable files
├───images #contains images for all products
│   ├───[product name] #contains images for the specific product
│   │   └───articles #contains images from the old Knowledge Base
│   └───icons 
├───includes #contains .md files that can be referenced in all products
│   ├───articles #contains general content from the old Knowledge Base
│   ├───[product name] #contains content for the specific product 
│   ├───requirements #contains general content from the old Online Help
│   └───version-history #contains the version history of all products
├───overrides #contains custom designs, e.g., 404 page
├───projects #contains content of product pages
│   └───[product name]
│       ├───docs #contains the content pages of the HelpCenter
│       │   ├───assets #contains images, files and stylesheets for the product
│       │   │   ├───files #reference to parent folder
│       │   │   ├───images #reference to parent folder
│       │   │   └───stylesheets
│       │   ├───documentation #contains the migrated Online Help
│       │   └───articles #contains the migrated Knowledge Base
│       ├───overrides #contains custom designs, e.g. banner & announcements
│       ├───projects
│       └───site  #contains the built html product page
└───site #contains the built html pages of all products
```

### Content of `/docs` Folders

Every product has a `/docs` folder that should contain the following files and folders:

``` bash 
├───articles ##contains images from the old Knowledge Base (this folder is named "samples" in ERPConnect)
│   ├───... #migrated articles from the old Online Help
│   ├───.pages
│   └───.meta.yml
├───assets
│   ├───files
│   │   └───sap_roles
│   ├───images
│   │	├───[product name] #contains images for the specific product
│   │   │	└───articles #contains images from the old Knowledge Base
│   │   └───icons
│   │       ├───components
│   │       └───products
│   └───stylesheets
├───documentation
│   ├───... #migrated content from the Online Help
│   ├───.pages
│   └───.meta.yml
├───.pages
├───changelog.md #page for the new version history
├───index.md #landing page of the product
├───quick-start.md #migrated "getting started" page from the old Online Help (if quickstart consists of multiple pages, create a folder instead)
└───troubleshooting.md #list of troubleshooting articles in jitbit
```

### Front Matter Items

List of available front matter items:

``` bash
---
search: 
  - exclude: true
  - boost: 2
title: Page Title
description: I’m a description
template: home.html # only needed for custom page designs, e.g., landing page
status: new # new, deprecated or beta 
component: table # for if-conditions in includes
product: xtract-universal # for if-conditions in includes
hide:
  - navigation
  - toc
  - feedback
tags:
  - random
---
```
