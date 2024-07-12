
### Syntax of Script Expressions

Script expressions use the C# syntax. 
They must begin and end with a hash symbol (#). The formula starts and ends with curly brackets ({}), e.g., `#{ Extraction.TableName }# `

!!! note
	Expressions that are specific to {{ productName }} are case sensitive. Make sure to use the exact syntax as documented below.

#### IF-Statements 

An IF-statement (ternary operator) is supported and uses the following syntax: 

``` c#
iif([bool condition], [string trueResult], [string falseResult])
``` 

**Examples:** 

<table>
  <tr>
    <th width="30%">Input</th>
    <th>Output</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><code>#{ iif(DateTime.Now.Month==7, "July","Unknown")}#</code></td>
    <td>July </td>
    <td>In month 7 the output is "July", all else is "Unknown".</td>
  </tr>
  <tr>
    <td><code>#{Extraction.ExtractionName}##{ iif(string.IsNullOrEmpty(Extraction.Context), string.Empty, "/" + Extraction.Context)}#</code></td>
    <td> </td>
    <td>*Extraction.Context* returns a result only with ODP extractions. With all other extraction types the result is empty. <ul>
		<li>If the extraction name is 'SAP_1' and the extraction type is 'Table', the resulting file path would be <code>SAP_1/[filename]</code>. </li>
		<li>If the extraction name is 'SAP_2' and the extraction type is 'ODP' and a SAP DataSource (extraction context: SAPI) is being extracted, the resulting file path would be <code>SAP_2/SAPI/[filename]</code>. </li>
		</ul>
	</td>
  </tr>
</table>


### Script Expressions based on .NET 

{{ productName }} script expressions support the following .NET objects, properties and methods from the .NET System Namespace of {{ productName }}'s current [.NET framework](../setup/requirements.md#other-applications-and-frameworks):

*Object*, *Boolean*, *Char*, *String*, *SByte*, *Byte*, *Int16*, *UInt16*, *Int32*, *UInt32*, *Int64*, *UInt64*, *Single*, *Double*, *Decimal*, *DateTime*, *TimeSpan*, *Guid*, *Math*, *Convert*.

!!! note
	The most common usage scenario is using the methods and properties of the .NET *DateTime* and *String* classes. 
	For further information of supported [.NET classes and their properties and methods](https://docs.microsoft.com/en-us/dotnet/api/system?redirectedfrom=MSDN&view=netframework-4.7.2) including [DateTime](https://docs.microsoft.com/en-us/dotnet/api/system.datetime?view=net-5.0) and [String](https://docs.microsoft.com/en-us/dotnet/api/system.string?view=netframework-4.7.2) see the Microsoft online documentation.

#### Supported Keywords
The following key words are supported: 

*true*, *false*, *null*.
