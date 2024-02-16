---
title: Files & Folders
---

### Folder Structure

The following treeview illustrates the general folder structure in the HelpCenter repository.
Highlighted folders are linked to each other via symlink.

``` bash hl_lines="11 12 16 26 27 31"
├───.cache
├───.github
│   └───workflows #contains the GitHub workflow for publishing
├───docs
│   ├───assets #contains images and stylesheets for the product page
│   │   ├───images
│   │   │   └───editorial-guide #contains images for the editorial-guide
│   │   └───stylesheets 
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
│       ├───includes #reference to parent folder for local build
│       ├───overrides #contains custom designs, e.g. banner & announcements
│       └───site  #contains the built html product page
└───site #contains the built html pages of all products
```

### Files in `/docs` Folders

Every product has a `/docs` folder that should contain the following files and folders:

``` bash 
├───articles #contains articles (this folder is named "samples" in ERPConnect)
│   ├───index.md #contains a list of articles
│   ├───... #migrated content from the old Knowledge Base
│   └───.meta.yml #contains front matter items that are added to all files in this folder
├───assets
│   ├───files
│   │   └───... #downloadable files
│   ├───images
│   │	├───[product name] #contains images for the specific product
│   │   │	└───articles #contains images from the old Knowledge Base (exists in every product)
│   │   └───icons
│   │       ├───components
│   │       └───products
│   └───stylesheets #contains additional/custom Designs for the product
├───documentation
│   ├───about.md #contains disclaimers (former "About this Online Help"
│   ├───... #migrated content from the old Online Help
│   ├───.pages #contains the navigation for this folder
│   └───.meta.yml #contains front matter items that are added to all files in this folder
├───.pages
├───changelog.md #contains the new version history
├───index.md #landing page of the product
├───getting-started.md #migrated "getting started" page from the old Online Help (if getting started consists of multiple pages, create a folder instead)
├───tags.md #a hidden page that contains a list of tags used in the product
└───troubleshooting.md #contains a list of troubleshooting articles in jitbit
```


### .pages Files

.pages files contain a list of navigation items.

- Every folder in the `/docs` directory contains a .pages file that defines the sequence of navigation items in the directory it is located in. 
- .pages files are used to define the sequence of navigation items.
- To hide a page from the navigation, remove it from the .pages file. 

=== "Define Navigation Items"

	``` yaml
	nav:
		- index.md #adds a landing page to a folder
		- requirements.md #adds a page (.md file)
		- installation #adds a subfolder
	collapse_single_pages: false 
	```

=== "Sort Navigation Items Alphabetically"

	``` yaml
	order: asc
	order_by: title
	collapse_single_pages: false
	```
	
!!! warning 
	The navigation list uses a special format, so simply pressing enter after a list item to add a new item results in an error.
	Copy and paste an existing line and only replace the name of the .md file.


### .meta.yml Files

.meta.yml files contain a list of metadata.<br>
When serving / building the project the metadata is added to all pages that are located in the same folder as the .meta.yml file.

Use cases:

- exclude all pages in a folder from the search 
- add the front matter item `product` to all pages in the product folder
- add the front matter item `component` to all pages in a folder


``` yaml title="List of Front Matter Items"
search: 
  - exclude: true
  - boost: 2
title: Page Title
description: I’m a description
author: Valerie Schipka, Fabian Steffan #recommended for articles
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
```
