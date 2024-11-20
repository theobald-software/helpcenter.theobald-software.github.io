---
title: Glossary
level: classified
---

### `Front Matter`

:   Front matter refers to the section of a markdown file at the beginning of the file that gives context to the content of the file, e.g., title, status, etc.
	
	```
	---
	title: Glossary
	description: A brief dictionary.
	---
	```

### `GitHub Workflow`

:   The GitHub workflow defines what happens when content is pushed to the main branch in GitHub. 
	It contains the version of Material and Insiders as well as the plugins that are used when hosting the HelpCenter.
	
	The workflow is located in `C:\Source\helpcenter.theobald-software.github.io\.github\workflows`. 
	Once the workflow is triggered, it can be [monitored](https://github.com/theobald-software/helpcenter.theobald-software.github.io/actions/workflows/ci.yml) on GitHub.
	
### `Insiders`

:   The sponsorship program of the Material theme. Access to Insiders means access to exclusive features, as well as prioritized support.
	
### `MKDocs`

:   An open source framework to create static websites (Jekyll alternative with a focus on documentation).

### `mkdocs.yml`

:   The configuration file for MKDocs projects. The mkdocs.yml file contains the setup of the Material theme, plugins, variables and other important definitions used in an MKDocs project. 
	
	The file is located in the root directory of an MKDocs project. Every Theobald Software product has it's own mkdocs.yml file. 

### `Material Theme`

:   An open source theme for MKDocs that comes with multiple features and plugins.
	
### `Markdown Extension`

:   Additional syntax that can be used in .md files, e.g., to define admonitions, tabbed content, grid cards.
	To activate a markdown extension in MKDocs, it needs to be listed in the mkdocs.yml.

### `pip`

:   `pip` is Python tool to download and install packages from PyPI and other Python package indexes. 
	The `pip` command can be used in the Windows commandline tool to install plugins for MKDocs.

### `Plugin`

:   Additional features that can be added to MKDocs. 
	We differentiate between Material build-in plugins that are installed as part of the Material theme and external plugins, that need to be installed separately using the `pip` command.
	To activate a plugin in MKDocs, it needs to be listed in the mkdocs.yml file.

### `Symlink / Symbolic Link`

:   A symbolic link is a file that points to a target file or a target directory. The symbolic link is a second file that exists independently of its target. 
	If a symbolic link is deleted, its target remains unaffected.
