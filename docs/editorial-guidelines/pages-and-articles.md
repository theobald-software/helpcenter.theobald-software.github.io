---
title: Add new Pages / Articles
level: classified
---

What to consider when creating new pages in a product's user documentation or knowledge base.

### Documentation pages

What to consider when creating new documentation pages:

- Create new documentation pages in the `documentation` folder of the product, e.g., `helpcenter.theobald-software.github.io\projects\[product name]\docs\documentation\`.
- Filenames use "-" instead of empty spaces, e.g., `bapis-and-function-modules.md`.
- The URL of the file is relative to the `/docs` directory. Example:<br>

	=== "Regular .md files"
		Directory: `helpcenter.theobald-software.github.io\projects\erpconnect\{==docs\documentation\intro\requirements.md==}`
		
		:octicons-arrow-right-24: `https://helpcenter.theobald-software.com/erpconnect/{==documentation/intro/requirements/==}`

	=== "index.md files"
		Directory: `helpcenter.theobald-software.github.io\projects\erpconnect\{==docs\documentation\intro\index.md==}`
		
		:octicons-arrow-right-24: `https://helpcenter.theobald-software.com/erpconnect/{==documentation/intro/==}`
		
- Define the following front matter items in the .md file:

	``` yaml
	---
	title: Page Title
	description: I’m a description
	status: new # this is optional, available are "new", "deprecated" or "beta" 
	tags: 
	   - some tag # this is optional, add tags 
	---
	```
	Additional front matter items can be defined in [.meta.yml files](files-and-folders.md#metayml-files).
	
- Add the name of the new .md file to the list of navigation items in the [.pages file](files-and-folders.md#pages-files) that is located in the same directory. 
If no .pages file exists, create one.
- Preview and check the content before publishing.

#### Add a New Destination

What to consider when adding a new destination in Xtract Universal:

- Create a new .md file that uses the name of the destination, e.g., `dataiku.md` for the Dataiku destination.
- Add the status *new* in the front matter of the .md file.
- Add the destination and its logo in the index.md file of the destination folder.
- Add the destination to the drop-down list of the Getting Started page.

### Articles

What to consider when creating new articles:

- Create new articles in the `knowledge-base` directory of the product, e.g., `helpcenter.theobald-software.github.io\projects\[product name]\docs\knowledge-base\`.
- Use an introduction sentence: "The following article shows / describes / contains..."
- Add authors to the front matter of an article:

	``` yaml
	--- 
	title: I'm an article
	author: Valerie Schipka, Fabian Steffan
	---
	```
	
- Add the article in the index.md file of the `knowledge-base` folder.
- Mark new articles in the index.md file using :material-alert-decagram:. Remove the status after a month. Example:

	``` markdown
	- [Authorization Objects - SAP User Rights {==:material-alert-decagram:==}](authority-objects-sap-user-rights.md) 
	```
	
	<div class="result" markdown>

	![new-article](../assets/images/editorial-guide/new-article.jpg)

	</div>	

