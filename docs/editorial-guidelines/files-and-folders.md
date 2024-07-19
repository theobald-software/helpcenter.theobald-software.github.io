---
title: Files & Folders
---

The published content of a product's HelpCenter is located in the following directory of the [gitHub repository](https://github.com/theobald-software/helpcenter.theobald-software.github.io):

```
helpcenter.theobald-software.github.io\projects\[product name]\docs
```

### Folder Structure

The following treeview illustrates the general folder structure of the HelpCenter repository.
Highlighted folders are linked to each other via [symlink](symlinks.md).

``` bash hl_lines="12 14 15 16 17 19 25 27 28 29 38 40"
├───.cache
├───.github
│   └───workflows #contains the GitHub workflow for publishing
├───docs
│   ├───assets #contains images and stylesheets for the product page
│   │   ├───images
│   │   │   └───editorial-guide #contains images for the editorial-guide
│   │   ├───javascripts #contains custom functions
│   │   └───stylesheets #contains custom styles
│   ├───editorial-guide #contains content of the editorial guide
│   └───ui-style-guide #contains the (yunIO) UI style guide
├───files #contains downloadable files
├───images #contains images that are available in all products
│   ├───articles #contains images for general KB articles
│   ├───documentation #contains general images for user documentation (components)
│   └───logos #contains images of logos (not icons!)
├───includes #contains .md files that can be referenced in all products
├───overrides #contains custom designs, e.g., 404 page
│   ├───.icons #contains custom icons
│   └───partials #contains extended theme elements
├───projects #contains content of product pages
│   └───[product name]
│       ├───docs #contains the content pages of the HelpCenter
│       │   ├───assets #contains images, files and stylesheets for the product
│       │   │   ├───files #reference to parent folder
│       │   │   ├───images 
│       │   │   │   ├───articles #reference to parent folder
│       │   │   │   ├───components #reference to parent folder
│       │   │   │   ├───logos #reference to parent folder
│       │   │   │   └───[product name] #contains images for the specific product
│       │   │   │       ├───articles #contains images for product-specific KB articles
│       │   │   │       ├───documentation #contains images for user documentation
│       │   │   │       └───getting started #contains images for getting started
│       │   │   ├───javascripts #contains custom functions for the product
│       │   │   └───stylesheets #contains custom styles for the product
│       │   ├───documentation #contains the migrated Online Help
│       │   └───knowledge-base #contains the migrated KB
│       ├───includes #reference to parent folder for local build
│       ├───overrides #contains custom designs, e.g. banner & announcements
│       │   ├───.icons #reference to parent folder
│       │   ├───assets #Talgat's customizations for the banner
│       │   └───partials #contains extended theme elements
│       └───site  #contains the built html pages of the product
└───site #contains the built html pages of all products
```

### Files in the `docs` Folder of a Product

Every product has a `docs` folder that should contain the following files and subfolders:

``` bash hl_lines="2 4 5 6"
├───assets
│   ├───files #contains downloadable files
│   ├───images
│   │   ├───articles #general images for KB articles
│   │   ├───components #general images for components (table, bapi, etc.)
│   │   ├───logos #images of logos (not icons!)
│   │	└───[product name] #contains images for the specific product
│   │    	├───articles #contains images for product-specific KB articles
│   │    	├───documentation #contains images for user documentation
│   │    	└───getting started #contains images for getting started
│   ├───javascripts #contains custom functions for the product
│   ├───stylesheets #contains custom styles for the product
│   └───catalog.json #contains the new version-history of the product
├───documentation
│   ├───about-this-documentation.md #contains disclaimers/general info about documentation
│   ├───... #migrated content from the old Online Help
│   ├───.pages #contains the navigation for this folder
│   └───.meta.yml #contains front matter items that are added to all files in this folder
├───knowledge-base #contains articles (this folder is named "samples" in ERPConnect)
│   ├───index.md #contains a list of all articles
│   ├───... #migrated content from the old KB
│   └───.meta.yml #contains front matter items that are added to all files in this folder
├───.pages #contains the top navigation of the HelpCenter
├───changelog.md #contains the new version history
├───index.md #landing page of the product
├───getting-started.md #migrated "getting started" page from the old Online Help
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
- add the front matter item `component` to all pages in a component folder


``` yaml title="List of Front Matter Items"
search: 
  - exclude: true
  - boost: 2
title: Page Title
description: I’m a description and I show up in social cards
author: Valerie Schipka, Fabian Steffan #recommended for articles
destination: huawei #for if-conditions in includes
template: home.html #only needed for custom page designs, e.g., landing page
status: new #new, deprecated or beta 
component: table #for if-conditions in includes
product: xtract-universal #for if-conditions in includes
hide:
  - navigation
  - toc
  - feedback
tags:
  - random
```
