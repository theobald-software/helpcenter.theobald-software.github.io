---
title: Administration
---


### To-Do List

- [x] Setup repository
- [x] Setup folder structure 
- [x] Setup product overview (landing page)
- [x] Setup projects for products
- [x] Setup symlinks for images and files
- [x] Setup hidden content for editorial guide + release notes
- [x] Migrate ERPConnect content
- [x] Setup GitHub Pages
- [ ] Setup Google Analytics:
	- [x] track users
	- [x] track search bars
	- [ ] track "Was this page helpful?"
- [x] Breakless Lists (for migration)
- [x] LinkChecker
- [ ] Troubleshooting
	- [x] update / define which troubleshooting articles to include in the HelpCenter (new tag #hec1 for ERPConnect articles)
	- [ ] automate article list
- [ ] Customizations:
	- [ ] Custom header
	- [ ] Table filters for changelog
- [ ] Inherit config settings
- [x] Add a "summary" admonition
- [ ] Editorial Guide:
	- [ ] Migrate and update current [editorial guide](https://help.theobald-software.com/en/editorial-guide)
	- [ ] Front matter items (how and when to use them)
	- [ ] Tags (how and when to use them)
	- [ ] Variables (how and when to use them)
	- [ ] Meta data (how and when to use them)
- [ ] UI/console program for building local previews
- [ ] Setup a template for bug reports
- [ ] Test language setup
- [ ] .pdf export (define a template)

#### Optional

- [ ] [Tooltips Preview](https://github.com/zachhannum/mkdocs-tooltipster-links-plugin)
- [ ] [SpellChecker](https://github.com/pawamoy/mkdocs-spellcheck) 
- [ ] [Automatic Title Casing](https://github.com/mattchristopher314/mkdocs-title-casing-plugin)
- [ ] [Unused Files](https://github.com/wilhelmer/mkdocs-unused-files) (obsolete with latest ImageReferenceChecker?)


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
