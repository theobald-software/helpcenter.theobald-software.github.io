---
title: Plugins & Theme Upgrade
---

Check for popular plugins: [Best-of Catalog](https://github.com/best-of-lists/best-of)<br>
Check for updates for the Material theme: [Insiders - Changelog](https://squidfunk.github.io/mkdocs-material/insiders/changelog/)


### Install New Plugins

!!! note
	External plugins need to be explicitly installed, while [build-in plugins](https://squidfunk.github.io/mkdocs-material/plugins/) only need to be activated as part of the Material theme in the mkdocs.yml file.

1. Install the plugin on your machine using the `pip` command in the commandline tool. Example:

	```
	pip install mkdocs-awesome-pages-plugin 
	```
	
2. Add the plugin to the list of plugins defined in the mkdocs.yml file. Example:

	```
	plugins:
	  - awesome-pages
	```
	
3. Build a preview of the project and test the plugin. 
Note that some plugins can be incompatible with other plugins.
4. If the tests are successful, add the plugin to the GitHub workflow in `C:\Source\helpcenter.theobald-software.github.io\.github\workflows`. Example:

	```
	- run: pip install mkdocs-awesome-pages-plugin 
	```
	
5. Push the changes to GitHub.

Here is a list with some available plugins: [Best-of Catalog](https://github.com/best-of-lists/best-of).

### Upgrade Material Theme

Before you start:

- Look up your current version: 
	
	```
	pip show mkdocs-material
	```
	
How to upgrade:

1. Log in to GitHub with the TSEDV account (credentials and TOTP authenticator “GitHub General Account” are available in Psono).
2. === "Upgrade Material to specific release"

		Replace the tag at the end of the URL of the command given below. 

		```
		pip install --upgrade git+https://${GH_TOKEN}@github.com/squidfunk/mkdocs-material-insiders.git@9.4.2-insiders-4.42.0
		```

	=== "Upgrade Material to latest release"

		When prompted, authorize the upgrade using the TSEDV GitHub account in your browser.
		
		```
		pip install --upgrade --force-reinstall mkdocs-material
		pip install --upgrade git+https://${GH_TOKEN}@github.com/squidfunk/mkdocs-material-insiders.git
		```

4. After the upgrade is done, log out of the TSEDV account.
5. Build a preview of the project and test backward compatibility.
6. If the tests are successful, edit the the material and insiders version in the following line of the GitHub workflow in `C:\Source\helpcenter.theobald-software.github.io\.github\workflows`:

	```
	- run: pip install git+https://${GH_TOKEN}@github.com/squidfunk/mkdocs-material-insiders.git@9.5.3-insiders-4.49.0
	```

7. Push the changes to GitHub.

### Bug Reports

Before creating a bug report for the Material theme, upgrade to the latest version and check the following resources:

- [Material Issue Tracker](https://github.com/squidfunk/mkdocs-material/issues)
- [Material Discussion Board](https://github.com/squidfunk/mkdocs-material/discussions)

An empty reproduction project required for bug reports is located in `X:\Online-Help\helpcenter bug reports`.

For information on how to create a bug report, see [Material for MKDocs: Bug reports](https://squidfunk.github.io/mkdocs-material/contributing/reporting-a-bug/).


### Important Links

Monitoring:

- [GitHub Workflow Runs](https://github.com/theobald-software/helpcenter.theobald-software.github.io/actions/workflows/ci.yml)
- [Gmail Inbox for theobald.helpcenter@gmail.com](https://mail.google.com/mail/u/0/#inbox)
- [Google Analytics HelpCenter Dashboard](https://analytics.google.com/analytics/web)

Changelogs:

- [MKDocs](https://www.mkdocs.org/about/release-notes/)
- [Material Theme](https://squidfunk.github.io/mkdocs-material/changelog/)
- [Material Insiders](https://squidfunk.github.io/mkdocs-material/insiders/changelog/)

Troubleshooting:

- [Material Issue Tracker](https://github.com/squidfunk/mkdocs-material/issues)
- [Material Discussion Board](https://github.com/squidfunk/mkdocs-material/discussions)
- [Material - How to report a bug](https://squidfunk.github.io/mkdocs-material/contributing/reporting-a-bug/)

Newsfeed:
- [SharePoint List](https://theobaldsoftware.sharepoint.com/Lists/Help%20Newsfeed/AllItems.aspx)
