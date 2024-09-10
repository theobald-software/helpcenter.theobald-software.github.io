---
title: Offline Documentation
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
4. Run the *local-preview.bat* file to build a preview of the project you want to export.
5. Check the console for any broken links or missing images (marked as WARNING).
6. After checking the preview, run the *build-projects.bat* to build the offline website of a project. 

The offline website is nor available in the /site directory of the projects.
To use the offline website, open the index.html in your browser.

!!! tip
	You can zip the whole /site folder to share the offline website via email or slack.
	
### Export a PDF

Still under investigation...