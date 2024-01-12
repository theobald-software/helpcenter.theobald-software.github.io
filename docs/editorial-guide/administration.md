---
title: Administration
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
│   ├───editorial-guide #contains content and images of the editorial guide
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

### Upgrade the Material Theme

Before you start:

- Look up the current version: 
	
	```
	pip show mkdocs-material
	```
	
- Look up the latest changes for Material: [Changelog - Material for MkDocs](https://squidfunk.github.io/mkdocs-material/changelog/)<br>
- Look up the latest changes for Insiders: [Changelog - Material for MkDocs](https://squidfunk.github.io/mkdocs-material/insiders/changelog/)

How to upgrade:

1. Log in to GitHub with the TSDEV account (credentials and TOTP authenticator “GitHub General Account” are available in Psono).
2. === "Upgrade Material to specific release"

		Replace the tag at the end of the URL of the command given below:

		```
		pip install --upgrade git+https://${GH_TOKEN}@github.com/squidfunk/mkdocs-material-insiders.git@9.4.2-insiders-4.42.0
		```

	=== "Upgrade Material to latest release"

		When prompted, authorize the upgrade using the TSDEV GitHub account in your browser.
		
		```
		pip install --upgrade --force-reinstall mkdocs-material
		pip install --upgrade git+https://${GH_TOKEN}@github.com/squidfunk/mkdocs-material-insiders.git
		```

4. After the upgrade is finished, log out of the TSDEV account.

!!! note
	To upgrade the hosted version of the HelpCenter to a specific release, edit the the following line of the GitHub workflow in `C:\Source\helpcenter.theobald-software.github.io\.github\workflows`:

	```
	- run: pip install git+https://${GH_TOKEN}@github.com/squidfunk/mkdocs-material-insiders.git@9.5.3-insiders-4.49.0
	```
	
	To avoid breaking changes, do not set the workflow to update to the latest release.


### Important Links

#### Monitoring

- [GitHub Workflow Runs](https://github.com/theobald-software/helpcenter.theobald-software.github.io/actions/workflows/ci.yml)
- [Gmail Inbox for theobald.helpcenter@gmail.com](https://mail.google.com/mail/u/0/#inbox)
- [Google Analytics HelpCenter Dashboard](https://analytics.google.com/analytics/web)

#### Changelogs

- [MKDocs](https://www.mkdocs.org/about/release-notes/)
- [Material Theme](https://squidfunk.github.io/mkdocs-material/changelog/)
- [Material Insiders](https://squidfunk.github.io/mkdocs-material/insiders/changelog/)
