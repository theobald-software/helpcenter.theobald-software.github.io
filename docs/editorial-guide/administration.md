---
title: Administration
---


### To-Do List (General)

- [x] Setup repository
- [x] Setup folder structure 
- [x] Setup product overview (landing page)
- [x] Setup projects for products
- [x] Setup symlinks for images and files
- [x] Setup hidden content for editorial guide + release notes
- [x] Migrate ERPConnect content
- [x] Setup GitHub Pages
- [x] Setup Google Analytics:
	- [x] track users
	- [x] track search bars
	- [x] track "Was this page helpful?"
- [x] Breakless Lists (for migration)
- [x] LinkChecker
- [ ] Troubleshooting
	- [x] update / define which troubleshooting articles to include in the HelpCenter (new tag #hec1 for ERPConnect articles)
	- [ ] automate article list (dev)
- [ ] Customizations:
	- [x] Custom header
	- [ ] Table filters for changelog (dev + Talgat)
- [ ] Inherit config settings (incompatibility with projects plugin, waiting for upgrades)
- [x] Add a "summary" admonition
- [x] Setup Custom Icons
- [ ] Editorial Guide:
	- [ ] Migrate [editorial guide](https://help.theobald-software.com/en/editorial-guide) (Maia)
	- [x] Front matter items 
	- [x] Tags 
	- [x] Variables
	- [x] Metadata
- [ ] UI/console program for building local previews (dev)
- [x] Setup a template for bug reports
- [x] Test language setup

#### Optional

- [x] [Tooltips Preview](https://squidfunk.github.io/mkdocs-material/setup/setting-up-navigation/#instant-previews)
- [ ] [Automatic Title Casing](https://github.com/mattchristopher314/mkdocs-title-casing-plugin)

### To-Do List (yunIO)

- [x] check if KB articles are up-to-date (use introduction sentences)
- [ ] check if version history and release notes are available in `includes\version-history` and `docs\release-notes`
- [ ] create Changelog page
- [ ] create empty Troubleshooting page and check if tag #hy1 is available
- [ ] create link to support portal in header
- [ ] create a Getting Started page
	- [ ] migrate Getting Started from OH
- [ ] create Articles/Integration Scenarios folder
	- [ ] migrate articles from KB
- [ ] create Documentation folder
	- [ ] migrate content from OH
- [ ] create content for the product landing page (list of links & What's New?)

### To-Do List (Xtract)

- [ ] check if KB articles are up-to-date and use introduction sentences
	- [ ] :products-xtract-universal:
	- [x] :products-xtract-is: 
	- [x] :products-xtract-for-alteryx: 
- [ ] check if version history and release notes are available in `includes\version-history` and `docs\release-notes`
- [ ] create Changelog page
	- [ ] :products-board-connector:
	- [ ] :products-xtract-universal:
	- [ ] :products-xtract-is: 
	- [ ] :products-xtract-for-alteryx: 
- [ ] create empty Troubleshooting page and check if tags are available
	- [ ] :products-board-connector: (#hbc1)
	- [ ] :products-xtract-universal: (#hxu1)
	- [ ] :products-xtract-is: (#hxis1)
	- [ ] :products-xtract-for-alteryx: (#hxfa1)
- [ ] create link to support portal in header
	- [ ] :products-board-connector:
	- [ ] :products-xtract-universal:
	- [ ] :products-xtract-is: 
	- [ ] :products-xtract-for-alteryx: 
- [ ] create a Getting Started page
	- [ ] :products-board-connector: migrate Getting Started from OH
	- [ ] :products-xtract-universal: migrate Getting Started from OH
	- [ ] :products-xtract-is: migrate Getting Started from OH
	- [ ] :products-xtract-for-alteryx: migrate Getting Started from OH
- [ ] create Articles/Integration Scenarios folder
	- [ ] :products-board-connector: migrate articles from KB
	- [ ] :products-xtract-universal: migrate articles from KB
	- [ ] :products-xtract-is: migrate migrate articles from KB
	- [ ] :products-xtract-for-alteryx: migrate articles from KB
- [ ] create Documentation folder
	- [ ] :products-board-connector: migrate articles from OH
	- [ ] :products-xtract-universal: migrate articles from OH
	- [ ] :products-xtract-is: migrate articles from OH
	- [ ] :products-xtract-for-alteryx: migrate articles from OH
- [ ] create content for the product landing page (list of links & What's New?)
	- [ ] :products-board-connector:
	- [ ] :products-xtract-universal:
	- [ ] :products-xtract-is: 
	- [ ] :products-xtract-for-alteryx: 
	
### Install External Plugins

!!! note
	External plugins need to be explicitly installed, while [build-in plugins](https://squidfunk.github.io/mkdocs-material/plugins/) only need to be activated in the mkdocs.yml file.

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
	
- Look up the latest changes:
	- [Material for MkDocs - Changelog](https://squidfunk.github.io/mkdocs-material/changelog/)<br>
	- [Insiders - Changelog](https://squidfunk.github.io/mkdocs-material/insiders/changelog/)

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

Before creating a bug report upgrade to the latest version and check the following resources:

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
