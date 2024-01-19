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
├───articles.md #contains a list of articles (this file is named "samples" in ERPConnect)
├───articles #contains articles (this folder is named "samples" in ERPConnect)
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
├───quick-start.md #migrated "getting started" page from the old Online Help (if quickstart consists of multiple pages, create a folder instead)
└───troubleshooting.md #contains a list of troubleshooting articles in jitbit
```

### Front Matter Items

List of available front matter items:

``` yaml
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

### How to add new content

1. Choose a directory / URL for the new content. The URL is relative to the docs directory. Example:<br>

	=== "Regular .md files"
		- Directory:
		`helpcenter.theobald-software.github.io\projects\erpconnect\{==docs\documentation\introduction\requirements.md==}`
		
		- URL:
		`https://helpcenter.theobald-software.com/erpconnect/{==documentation/introduction/requirements/==}`

	=== "index.md files"
		- Directory:
		`helpcenter.theobald-software.github.io\projects\erpconnect\{==docs\documentation\introduction\index.md==}`
		
		- URL:
		`https://helpcenter.theobald-software.com/erpconnect/{==documentation/introduction/==}`
		
2. Create a new .md file in the chosen directory. Filenames use "-" instead of empty spaces, e.g., `bapis-and-function-modules.md`.
3. Define the following front matter items in the .md file:

	``` yaml
	title: Page Title
	description: I’m a description
	status: new # this is optional, available are "new", "deprecated" or "beta" 
	```
	Additional front matter items are usually defined in .meta.yml files.
	
4. Fill the .md file with content.
5. Open the .pages file that is located in the same directory as the .md file. If no .pages file exists, create one.
6. Add the name of the new .md file to the list of pages in the navigation. 
The sequence of the listed files directly translates to the sequence of the rendered navigation items.

	``` yaml
	nav:
		- index.md #adds a landing page to a folder
		- requirements.md #adds a page (.md file)
		- saplibraries.md
		- installation #adds a subfolder
		- licensing.md
	collapse_single_pages: false
	```
	
	!!! warning 
		The navigation list uses a special format, so simply pressing enter after a list item to add a new item results in an error.
		Copy and paste an existing line and only replace the name of the .md file.
		
7. Build a preview of the project without the `dirtyreload` option.
8. Run [LinkChecker](linkchecker.md) on your preview page to check if references in the new .md file are valid. Example:
	```
	linkchecker linkchecker --no-warnings --no-status -r 0 http://localhost:8000/erpconnect/documentation/introduction/requirements/
	```
9. Review the content and push it to GitHub.

