
{% if page.meta.destination == "parquet" or page.meta.destination == "tableau" %} 
#### Output directory 
{% else %}
#### File output path
{% endif %}

Enter the folder path to save the destination flat files in. 
If the entered folder does not exist, a new folder is created.

!!! note
	To write flat files to a network drive, you need to:
	- Enter the **File output path** in [UNC format](https://docs.microsoft.com/en-us/dotnet/standard/io/file-path-formats#unc-paths) e.g., `\\Server2\Share\Folder1`.<br>
	- Grant write permission to the directory to the [Xtract Universal service](../server/service-account.md) or run the service under a user account that has write permission. 
 