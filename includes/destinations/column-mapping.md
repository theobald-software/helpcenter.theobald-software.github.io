### Column Mapping

Activate **Column Mapping** when appending data to an existing file or entity that has different column names or a different number of columns.<br>
This can be the case when extracting data from two or more extractions into the same destination file, where the column names of the extraction and the destination file differ.

!!! note 
	The column names in the extraction and destination must be unique. 
	If duplicated column names are found, an error message is displayed.
	The column names must be corrected, before column mapping can be used.

#### Requirements

When working with flat files, ensure that:<br>
- the XU server and the Designer both have access to the destination file.<br>
- the [output directory](#destination-details) and the [file name](#file-name) of the extraction match the destination file. <br>
- the [Column Name Style](#column-name-style) of the extraction and destination file match.

#### Mapping

Follow the steps below to map data:

1. Select the option **Append results** in the subsection [Existing Files](#existing-files).
2. Activate the option **Column Mapping**.
3. Click **[Map]** to assign columns. The window "Column Mapping" opens.<br>
	- *Destination Columns* displays the names of the columns that are available in the destination file or entity.
	- *Not Mapped* defines whether or not columns are mapped to the destination columns.
	- *Source Columns* defines which SAP column is mapped to a destination column.

		![Column-Mapping](../../assets/images/documentation/destinations/flat-file-csv/column-mapping.png){:class="img-responsive"}
4. Depending on the column names of the source and target file, follow the instructions below:
	1. If the column names of the extraction and the names of the destination columns match, click **[Auto map by name]**.<br>
	2. If the column names do not match, assign columns manually by selecting the respective SAP column from the dropdown menu under *Source Columns*.<br>
	3. If a column does not have a counterpart or is not supposed to be appended, activate the checkbox in the column *Not Mapped*.<br>
5. Click **[OK]** to confirm your input.

When running the extraction the extracted data is added to the destination file or entity as specified in the column mapping.

!!! tip 
	In case an error message pops up, click **[Show more]** to see a description of what caused the error.
