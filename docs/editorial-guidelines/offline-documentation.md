---
title: Offline Documentation
level: classified
---

The following HelpCenters can be exported as an offline website:

- Board Connector
- Xtract IS
- Xtract for Alteryx
- Xtract Universal
- yunIO

!!! note
	The changelog is not included in the offline website.

### Export an Offline Website


Follow the steps below to create an offline website.

1. In Fork, pull the branch **Offline-Documentation**.
2. Merge the branch **master** into **Offline-Documentation**.
Note that mkdocs.yml files are not merged. If changes are required, edit the mkdocs.yml files in the **Offline Documentation** branch manually.
3. Open Notepad++ and search all projects for `site:`.
If there are results, replace all instances of `site:` with a correct relative link.
4. Run the *local-preview-no-browser-tabs.bat* file to build a preview of the project you want to export.
5. Check the console for any broken links or missing images (marked as WARNING).
6. Run the *build-offline.bat* to build the offline website of a project. 

The offline website is nor available in the /site directory of the projects.
To use the offline website, open the index.html in your browser.

!!! tip
	You can zip the whole /site folder to share the offline website via email or slack.
	
### Export a PDF

Unfortunately some of the interactive elements of the HelpCenters do not translate to .pdf files.
This makes a coherent .pdf export almost impossible.

Tested:
- [PDF Export Plugin](https://github.com/zhaoterryy/mkdocs-pdf-export-plugin): <br> Doesn't work with symlinked images, icons, content tabs and more.
- [+ With pdf Plugin](https://github.com/orzih/mkdocs-with-pdf):<br> Doesn't work with content tabs, download links, admonitions and more. 
- [Print Site Plugin](https://timvink.github.io/mkdocs-print-site-plugin/index.html):<br> Doesn't work with symlinked images and more.
- [+ Exporter Plugin](https://adrienbrignon.github.io/mkdocs-exporter/configuration/generating-pdf-documents):<br> Doesn't include out-of-the-box cover pages or TOC, doesn't work with collapsed content, 


??? example "With PDF Tested Settings"
	```yaml
	- with-pdf:
			author: Theobald Software
			copyright: 2024 Theobald Software GmbH
			#
			#cover: false
			#back_cover: true
			cover_title: Xtract Universal
			cover_subtitle: User Documentation
			#custom_template_path: TEMPLATES PATH
			#
			#toc_title: TOC TITLE TEXT
			#heading_shift: false
			toc_level: 3
			#ordered_chapter_level: 2
			#excludes_children:
			#    - 'release-notes/:upgrading'
			#    - 'release-notes/:changelog'
			#
			exclude_pages:
				- 'knowledge-base/'
				- 'index'
				- 'getting-started'
				- 'web-api'
			#convert_iframe:
			#    - src: IFRAME SRC
			#      img: POSTER IMAGE URL
			#      text: ALTERNATE TEXT
			#    - src: ...
			#two_columns_level: 3
			#
			#render_js: true
			#headless_chrome_path: headless-chromium
			#
			output_path: XtractUniversal_Docum.pdf
			#enabled_if_env: ENABLE_PDF_EXPORT
			#
			debug_html: true
			#show_anchors: true
			#verbose: true
	```
	
??? example "Exporter Tested Settings"
	```yaml
	  - exporter:
		  formats:
			pdf:
			  enabled: true
			  explicit: false
			  aggregator:
				enabled: true
				output: documentation.pdf
				covers: none
		  buttons:
			- title: Download as PDF
			  icon: material-file-download-outline
			  enabled: !!python/name:mkdocs_exporter.formats.pdf.buttons.download.enabled
			  attributes: !!python/name:mkdocs_exporter.formats.pdf.buttons.download.attributes
	```