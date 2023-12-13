
Namespace: [ERPConnect.Queries.QueryHelper](index.md)  
Assembly: ERPConnect35.dll  

DataTable object

```csharp
public class SearchResultQueryDataTable : DataTable, IComponent, IDisposable, IServiceProvider, IListSource, ISupportInitializeNotification, ISupportInitialize, ISerializable, IXmlSerializable, IEnumerable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[MarshalByValueComponent](https://learn.microsoft.com/dotnet/api/system.componentmodel.marshalbyvaluecomponent) ← 
[DataTable](https://learn.microsoft.com/dotnet/api/system.data.datatable) ← 
[SearchResultQueryDataTable](ERPConnect.Queries.QueryHelper.SearchResultQueryDataTable.md)

#### Implements

[IComponent](https://learn.microsoft.com/dotnet/api/system.componentmodel.icomponent), 
[IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable), 
[IServiceProvider](https://learn.microsoft.com/dotnet/api/system.iserviceprovider), 
[IListSource](https://learn.microsoft.com/dotnet/api/system.componentmodel.ilistsource), 
[ISupportInitializeNotification](https://learn.microsoft.com/dotnet/api/system.componentmodel.isupportinitializenotification), 
[ISupportInitialize](https://learn.microsoft.com/dotnet/api/system.componentmodel.isupportinitialize), 
[ISerializable](https://learn.microsoft.com/dotnet/api/system.runtime.serialization.iserializable), 
[IXmlSerializable](https://learn.microsoft.com/dotnet/api/system.xml.serialization.ixmlserializable), 
[IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.ienumerable)

#### Inherited Members

[DataTable.fInitInProgress](https://learn.microsoft.com/dotnet/api/system.data.datatable.finitinprogress), 
[DataTable.GetObjectData\(SerializationInfo, StreamingContext\)](https://learn.microsoft.com/dotnet/api/system.data.datatable.getobjectdata), 
[DataTable.BeginInit\(\)](https://learn.microsoft.com/dotnet/api/system.data.datatable.begininit), 
[DataTable.EndInit\(\)](https://learn.microsoft.com/dotnet/api/system.data.datatable.endinit), 
[DataTable.AcceptChanges\(\)](https://learn.microsoft.com/dotnet/api/system.data.datatable.acceptchanges), 
[DataTable.CreateInstance\(\)](https://learn.microsoft.com/dotnet/api/system.data.datatable.createinstance), 
[DataTable.Clone\(\)](https://learn.microsoft.com/dotnet/api/system.data.datatable.clone), 
[DataTable.Copy\(\)](https://learn.microsoft.com/dotnet/api/system.data.datatable.copy), 
[DataTable.Clear\(\)](https://learn.microsoft.com/dotnet/api/system.data.datatable.clear), 
[DataTable.Compute\(string, string\)](https://learn.microsoft.com/dotnet/api/system.data.datatable.compute), 
[DataTable.GetChanges\(\)](https://learn.microsoft.com/dotnet/api/system.data.datatable.getchanges\#system\-data\-datatable\-getchanges), 
[DataTable.GetChanges\(DataRowState\)](https://learn.microsoft.com/dotnet/api/system.data.datatable.getchanges\#system\-data\-datatable\-getchanges\(system\-data\-datarowstate\)), 
[DataTable.GetErrors\(\)](https://learn.microsoft.com/dotnet/api/system.data.datatable.geterrors), 
[DataTable.ImportRow\(DataRow\)](https://learn.microsoft.com/dotnet/api/system.data.datatable.importrow), 
[DataTable.NewRow\(\)](https://learn.microsoft.com/dotnet/api/system.data.datatable.newrow), 
[DataTable.NewRowFromBuilder\(DataRowBuilder\)](https://learn.microsoft.com/dotnet/api/system.data.datatable.newrowfrombuilder), 
[DataTable.GetRowType\(\)](https://learn.microsoft.com/dotnet/api/system.data.datatable.getrowtype), 
[DataTable.NewRowArray\(int\)](https://learn.microsoft.com/dotnet/api/system.data.datatable.newrowarray), 
[DataTable.OnColumnChanging\(DataColumnChangeEventArgs\)](https://learn.microsoft.com/dotnet/api/system.data.datatable.oncolumnchanging), 
[DataTable.OnColumnChanged\(DataColumnChangeEventArgs\)](https://learn.microsoft.com/dotnet/api/system.data.datatable.oncolumnchanged), 
[DataTable.OnPropertyChanging\(PropertyChangedEventArgs\)](https://learn.microsoft.com/dotnet/api/system.data.datatable.onpropertychanging), 
[DataTable.OnRemoveColumn\(DataColumn\)](https://learn.microsoft.com/dotnet/api/system.data.datatable.onremovecolumn), 
[DataTable.OnRowChanged\(DataRowChangeEventArgs\)](https://learn.microsoft.com/dotnet/api/system.data.datatable.onrowchanged), 
[DataTable.OnRowChanging\(DataRowChangeEventArgs\)](https://learn.microsoft.com/dotnet/api/system.data.datatable.onrowchanging), 
[DataTable.OnRowDeleting\(DataRowChangeEventArgs\)](https://learn.microsoft.com/dotnet/api/system.data.datatable.onrowdeleting), 
[DataTable.OnRowDeleted\(DataRowChangeEventArgs\)](https://learn.microsoft.com/dotnet/api/system.data.datatable.onrowdeleted), 
[DataTable.OnTableCleared\(DataTableClearEventArgs\)](https://learn.microsoft.com/dotnet/api/system.data.datatable.ontablecleared), 
[DataTable.OnTableClearing\(DataTableClearEventArgs\)](https://learn.microsoft.com/dotnet/api/system.data.datatable.ontableclearing), 
[DataTable.OnTableNewRow\(DataTableNewRowEventArgs\)](https://learn.microsoft.com/dotnet/api/system.data.datatable.ontablenewrow), 
[DataTable.RejectChanges\(\)](https://learn.microsoft.com/dotnet/api/system.data.datatable.rejectchanges), 
[DataTable.Reset\(\)](https://learn.microsoft.com/dotnet/api/system.data.datatable.reset), 
[DataTable.Select\(\)](https://learn.microsoft.com/dotnet/api/system.data.datatable.select\#system\-data\-datatable\-select), 
[DataTable.Select\(string\)](https://learn.microsoft.com/dotnet/api/system.data.datatable.select\#system\-data\-datatable\-select\(system\-string\)), 
[DataTable.Select\(string, string\)](https://learn.microsoft.com/dotnet/api/system.data.datatable.select\#system\-data\-datatable\-select\(system\-string\-system\-string\)), 
[DataTable.Select\(string, string, DataViewRowState\)](https://learn.microsoft.com/dotnet/api/system.data.datatable.select\#system\-data\-datatable\-select\(system\-string\-system\-string\-system\-data\-dataviewrowstate\)), 
[DataTable.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.data.datatable.tostring), 
[DataTable.BeginLoadData\(\)](https://learn.microsoft.com/dotnet/api/system.data.datatable.beginloaddata), 
[DataTable.EndLoadData\(\)](https://learn.microsoft.com/dotnet/api/system.data.datatable.endloaddata), 
[DataTable.LoadDataRow\(object\[\], bool\)](https://learn.microsoft.com/dotnet/api/system.data.datatable.loaddatarow\#system\-data\-datatable\-loaddatarow\(system\-object\(\)\-system\-boolean\)), 
[DataTable.LoadDataRow\(object\[\], LoadOption\)](https://learn.microsoft.com/dotnet/api/system.data.datatable.loaddatarow\#system\-data\-datatable\-loaddatarow\(system\-object\(\)\-system\-data\-loadoption\)), 
[DataTable.Merge\(DataTable\)](https://learn.microsoft.com/dotnet/api/system.data.datatable.merge\#system\-data\-datatable\-merge\(system\-data\-datatable\)), 
[DataTable.Merge\(DataTable, bool\)](https://learn.microsoft.com/dotnet/api/system.data.datatable.merge\#system\-data\-datatable\-merge\(system\-data\-datatable\-system\-boolean\)), 
[DataTable.Merge\(DataTable, bool, MissingSchemaAction\)](https://learn.microsoft.com/dotnet/api/system.data.datatable.merge\#system\-data\-datatable\-merge\(system\-data\-datatable\-system\-boolean\-system\-data\-missingschemaaction\)), 
[DataTable.Load\(IDataReader\)](https://learn.microsoft.com/dotnet/api/system.data.datatable.load\#system\-data\-datatable\-load\(system\-data\-idatareader\)), 
[DataTable.Load\(IDataReader, LoadOption\)](https://learn.microsoft.com/dotnet/api/system.data.datatable.load\#system\-data\-datatable\-load\(system\-data\-idatareader\-system\-data\-loadoption\)), 
[DataTable.Load\(IDataReader, LoadOption, FillErrorEventHandler\)](https://learn.microsoft.com/dotnet/api/system.data.datatable.load\#system\-data\-datatable\-load\(system\-data\-idatareader\-system\-data\-loadoption\-system\-data\-fillerroreventhandler\)), 
[DataTable.CreateDataReader\(\)](https://learn.microsoft.com/dotnet/api/system.data.datatable.createdatareader), 
[DataTable.WriteXml\(Stream\)](https://learn.microsoft.com/dotnet/api/system.data.datatable.writexml\#system\-data\-datatable\-writexml\(system\-io\-stream\)), 
[DataTable.WriteXml\(Stream, bool\)](https://learn.microsoft.com/dotnet/api/system.data.datatable.writexml\#system\-data\-datatable\-writexml\(system\-io\-stream\-system\-boolean\)), 
[DataTable.WriteXml\(TextWriter\)](https://learn.microsoft.com/dotnet/api/system.data.datatable.writexml\#system\-data\-datatable\-writexml\(system\-io\-textwriter\)), 
[DataTable.WriteXml\(TextWriter, bool\)](https://learn.microsoft.com/dotnet/api/system.data.datatable.writexml\#system\-data\-datatable\-writexml\(system\-io\-textwriter\-system\-boolean\)), 
[DataTable.WriteXml\(XmlWriter\)](https://learn.microsoft.com/dotnet/api/system.data.datatable.writexml\#system\-data\-datatable\-writexml\(system\-xml\-xmlwriter\)), 
[DataTable.WriteXml\(XmlWriter, bool\)](https://learn.microsoft.com/dotnet/api/system.data.datatable.writexml\#system\-data\-datatable\-writexml\(system\-xml\-xmlwriter\-system\-boolean\)), 
[DataTable.WriteXml\(string\)](https://learn.microsoft.com/dotnet/api/system.data.datatable.writexml\#system\-data\-datatable\-writexml\(system\-string\)), 
[DataTable.WriteXml\(string, bool\)](https://learn.microsoft.com/dotnet/api/system.data.datatable.writexml\#system\-data\-datatable\-writexml\(system\-string\-system\-boolean\)), 
[DataTable.WriteXml\(Stream, XmlWriteMode\)](https://learn.microsoft.com/dotnet/api/system.data.datatable.writexml\#system\-data\-datatable\-writexml\(system\-io\-stream\-system\-data\-xmlwritemode\)), 
[DataTable.WriteXml\(Stream, XmlWriteMode, bool\)](https://learn.microsoft.com/dotnet/api/system.data.datatable.writexml\#system\-data\-datatable\-writexml\(system\-io\-stream\-system\-data\-xmlwritemode\-system\-boolean\)), 
[DataTable.WriteXml\(TextWriter, XmlWriteMode\)](https://learn.microsoft.com/dotnet/api/system.data.datatable.writexml\#system\-data\-datatable\-writexml\(system\-io\-textwriter\-system\-data\-xmlwritemode\)), 
[DataTable.WriteXml\(TextWriter, XmlWriteMode, bool\)](https://learn.microsoft.com/dotnet/api/system.data.datatable.writexml\#system\-data\-datatable\-writexml\(system\-io\-textwriter\-system\-data\-xmlwritemode\-system\-boolean\)), 
[DataTable.WriteXml\(XmlWriter, XmlWriteMode\)](https://learn.microsoft.com/dotnet/api/system.data.datatable.writexml\#system\-data\-datatable\-writexml\(system\-xml\-xmlwriter\-system\-data\-xmlwritemode\)), 
[DataTable.WriteXml\(XmlWriter, XmlWriteMode, bool\)](https://learn.microsoft.com/dotnet/api/system.data.datatable.writexml\#system\-data\-datatable\-writexml\(system\-xml\-xmlwriter\-system\-data\-xmlwritemode\-system\-boolean\)), 
[DataTable.WriteXml\(string, XmlWriteMode\)](https://learn.microsoft.com/dotnet/api/system.data.datatable.writexml\#system\-data\-datatable\-writexml\(system\-string\-system\-data\-xmlwritemode\)), 
[DataTable.WriteXml\(string, XmlWriteMode, bool\)](https://learn.microsoft.com/dotnet/api/system.data.datatable.writexml\#system\-data\-datatable\-writexml\(system\-string\-system\-data\-xmlwritemode\-system\-boolean\)), 
[DataTable.WriteXmlSchema\(Stream\)](https://learn.microsoft.com/dotnet/api/system.data.datatable.writexmlschema\#system\-data\-datatable\-writexmlschema\(system\-io\-stream\)), 
[DataTable.WriteXmlSchema\(Stream, bool\)](https://learn.microsoft.com/dotnet/api/system.data.datatable.writexmlschema\#system\-data\-datatable\-writexmlschema\(system\-io\-stream\-system\-boolean\)), 
[DataTable.WriteXmlSchema\(TextWriter\)](https://learn.microsoft.com/dotnet/api/system.data.datatable.writexmlschema\#system\-data\-datatable\-writexmlschema\(system\-io\-textwriter\)), 
[DataTable.WriteXmlSchema\(TextWriter, bool\)](https://learn.microsoft.com/dotnet/api/system.data.datatable.writexmlschema\#system\-data\-datatable\-writexmlschema\(system\-io\-textwriter\-system\-boolean\)), 
[DataTable.WriteXmlSchema\(XmlWriter\)](https://learn.microsoft.com/dotnet/api/system.data.datatable.writexmlschema\#system\-data\-datatable\-writexmlschema\(system\-xml\-xmlwriter\)), 
[DataTable.WriteXmlSchema\(XmlWriter, bool\)](https://learn.microsoft.com/dotnet/api/system.data.datatable.writexmlschema\#system\-data\-datatable\-writexmlschema\(system\-xml\-xmlwriter\-system\-boolean\)), 
[DataTable.WriteXmlSchema\(string\)](https://learn.microsoft.com/dotnet/api/system.data.datatable.writexmlschema\#system\-data\-datatable\-writexmlschema\(system\-string\)), 
[DataTable.WriteXmlSchema\(string, bool\)](https://learn.microsoft.com/dotnet/api/system.data.datatable.writexmlschema\#system\-data\-datatable\-writexmlschema\(system\-string\-system\-boolean\)), 
[DataTable.ReadXml\(Stream\)](https://learn.microsoft.com/dotnet/api/system.data.datatable.readxml\#system\-data\-datatable\-readxml\(system\-io\-stream\)), 
[DataTable.ReadXml\(TextReader\)](https://learn.microsoft.com/dotnet/api/system.data.datatable.readxml\#system\-data\-datatable\-readxml\(system\-io\-textreader\)), 
[DataTable.ReadXml\(string\)](https://learn.microsoft.com/dotnet/api/system.data.datatable.readxml\#system\-data\-datatable\-readxml\(system\-string\)), 
[DataTable.ReadXml\(XmlReader\)](https://learn.microsoft.com/dotnet/api/system.data.datatable.readxml\#system\-data\-datatable\-readxml\(system\-xml\-xmlreader\)), 
[DataTable.ReadXmlSchema\(Stream\)](https://learn.microsoft.com/dotnet/api/system.data.datatable.readxmlschema\#system\-data\-datatable\-readxmlschema\(system\-io\-stream\)), 
[DataTable.ReadXmlSchema\(TextReader\)](https://learn.microsoft.com/dotnet/api/system.data.datatable.readxmlschema\#system\-data\-datatable\-readxmlschema\(system\-io\-textreader\)), 
[DataTable.ReadXmlSchema\(string\)](https://learn.microsoft.com/dotnet/api/system.data.datatable.readxmlschema\#system\-data\-datatable\-readxmlschema\(system\-string\)), 
[DataTable.ReadXmlSchema\(XmlReader\)](https://learn.microsoft.com/dotnet/api/system.data.datatable.readxmlschema\#system\-data\-datatable\-readxmlschema\(system\-xml\-xmlreader\)), 
[DataTable.GetDataTableSchema\(XmlSchemaSet\)](https://learn.microsoft.com/dotnet/api/system.data.datatable.getdatatableschema), 
[DataTable.GetSchema\(\)](https://learn.microsoft.com/dotnet/api/system.data.datatable.getschema), 
[DataTable.ReadXmlSerializable\(XmlReader\)](https://learn.microsoft.com/dotnet/api/system.data.datatable.readxmlserializable), 
[DataTable.CaseSensitive](https://learn.microsoft.com/dotnet/api/system.data.datatable.casesensitive), 
[DataTable.IsInitialized](https://learn.microsoft.com/dotnet/api/system.data.datatable.isinitialized), 
[DataTable.RemotingFormat](https://learn.microsoft.com/dotnet/api/system.data.datatable.remotingformat), 
[DataTable.ChildRelations](https://learn.microsoft.com/dotnet/api/system.data.datatable.childrelations), 
[DataTable.Columns](https://learn.microsoft.com/dotnet/api/system.data.datatable.columns), 
[DataTable.Constraints](https://learn.microsoft.com/dotnet/api/system.data.datatable.constraints), 
[DataTable.DataSet](https://learn.microsoft.com/dotnet/api/system.data.datatable.dataset), 
[DataTable.DefaultView](https://learn.microsoft.com/dotnet/api/system.data.datatable.defaultview), 
[DataTable.DisplayExpression](https://learn.microsoft.com/dotnet/api/system.data.datatable.displayexpression), 
[DataTable.ExtendedProperties](https://learn.microsoft.com/dotnet/api/system.data.datatable.extendedproperties), 
[DataTable.HasErrors](https://learn.microsoft.com/dotnet/api/system.data.datatable.haserrors), 
[DataTable.Locale](https://learn.microsoft.com/dotnet/api/system.data.datatable.locale), 
[DataTable.MinimumCapacity](https://learn.microsoft.com/dotnet/api/system.data.datatable.minimumcapacity), 
[DataTable.ParentRelations](https://learn.microsoft.com/dotnet/api/system.data.datatable.parentrelations), 
[DataTable.PrimaryKey](https://learn.microsoft.com/dotnet/api/system.data.datatable.primarykey), 
[DataTable.Rows](https://learn.microsoft.com/dotnet/api/system.data.datatable.rows), 
[DataTable.TableName](https://learn.microsoft.com/dotnet/api/system.data.datatable.tablename), 
[DataTable.Namespace](https://learn.microsoft.com/dotnet/api/system.data.datatable.namespace), 
[DataTable.Prefix](https://learn.microsoft.com/dotnet/api/system.data.datatable.prefix), 
[DataTable.Site](https://learn.microsoft.com/dotnet/api/system.data.datatable.site), 
[DataTable.ColumnChanging](https://learn.microsoft.com/dotnet/api/system.data.datatable.columnchanging), 
[DataTable.ColumnChanged](https://learn.microsoft.com/dotnet/api/system.data.datatable.columnchanged), 
[DataTable.Initialized](https://learn.microsoft.com/dotnet/api/system.data.datatable.initialized), 
[DataTable.RowChanged](https://learn.microsoft.com/dotnet/api/system.data.datatable.rowchanged), 
[DataTable.RowChanging](https://learn.microsoft.com/dotnet/api/system.data.datatable.rowchanging), 
[DataTable.RowDeleting](https://learn.microsoft.com/dotnet/api/system.data.datatable.rowdeleting), 
[DataTable.RowDeleted](https://learn.microsoft.com/dotnet/api/system.data.datatable.rowdeleted), 
[DataTable.TableClearing](https://learn.microsoft.com/dotnet/api/system.data.datatable.tableclearing), 
[DataTable.TableCleared](https://learn.microsoft.com/dotnet/api/system.data.datatable.tablecleared), 
[DataTable.TableNewRow](https://learn.microsoft.com/dotnet/api/system.data.datatable.tablenewrow), 
[MarshalByValueComponent.Dispose\(\)](https://learn.microsoft.com/dotnet/api/system.componentmodel.marshalbyvaluecomponent.dispose\#system\-componentmodel\-marshalbyvaluecomponent\-dispose), 
[MarshalByValueComponent.Dispose\(bool\)](https://learn.microsoft.com/dotnet/api/system.componentmodel.marshalbyvaluecomponent.dispose\#system\-componentmodel\-marshalbyvaluecomponent\-dispose\(system\-boolean\)), 
[MarshalByValueComponent.GetService\(Type\)](https://learn.microsoft.com/dotnet/api/system.componentmodel.marshalbyvaluecomponent.getservice), 
[MarshalByValueComponent.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.componentmodel.marshalbyvaluecomponent.tostring), 
[MarshalByValueComponent.Events](https://learn.microsoft.com/dotnet/api/system.componentmodel.marshalbyvaluecomponent.events), 
[MarshalByValueComponent.Site](https://learn.microsoft.com/dotnet/api/system.componentmodel.marshalbyvaluecomponent.site), 
[MarshalByValueComponent.Container](https://learn.microsoft.com/dotnet/api/system.componentmodel.marshalbyvaluecomponent.container), 
[MarshalByValueComponent.DesignMode](https://learn.microsoft.com/dotnet/api/system.componentmodel.marshalbyvaluecomponent.designmode), 
[MarshalByValueComponent.Disposed](https://learn.microsoft.com/dotnet/api/system.componentmodel.marshalbyvaluecomponent.disposed), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

## Properties

### <a id="ERPConnect_Queries_QueryHelper_SearchResultQueryDataTable_Count"></a> Count

Returns the number of rows

```csharp
[Browsable(false)]
public int Count { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ERPConnect_Queries_QueryHelper_SearchResultQueryDataTable_Item_System_Int32_"></a> this\[int\]

Returns a row at a given position

```csharp
public SearchResultQueryRow this[int index] { get; }
```

#### Property Value

 [SearchResultQueryRow](ERPConnect.Queries.QueryHelper.SearchResultQueryRow.md)

## Methods

### <a id="ERPConnect_Queries_QueryHelper_SearchResultQueryDataTable_AddSearchResultQueryRow_ERPConnect_Queries_QueryHelper_SearchResultQueryRow_"></a> AddSearchResultQueryRow\(SearchResultQueryRow\)

Add a new AddSearchResultQueryRow object to the table

```csharp
public void AddSearchResultQueryRow(SearchResultQueryRow row)
```

#### Parameters

`row` [SearchResultQueryRow](ERPConnect.Queries.QueryHelper.SearchResultQueryRow.md)

New AddSearchResultQueryRow object

### <a id="ERPConnect_Queries_QueryHelper_SearchResultQueryDataTable_AddSearchResultQueryRow_System_String_System_String_System_String_"></a> AddSearchResultQueryRow\(string, string, string\)

Add a new AddSearchResultQueryRow object to the table

```csharp
public SearchResultQueryRow AddSearchResultQueryRow(string QueryName, string UserGroup, string DescriptionText)
```

#### Parameters

`QueryName` [string](https://learn.microsoft.com/dotnet/api/system.string)

QueryName

`UserGroup` [string](https://learn.microsoft.com/dotnet/api/system.string)

UserGroup

`DescriptionText` [string](https://learn.microsoft.com/dotnet/api/system.string)

DescriptionText

#### Returns

 [SearchResultQueryRow](ERPConnect.Queries.QueryHelper.SearchResultQueryRow.md)

-

### <a id="ERPConnect_Queries_QueryHelper_SearchResultQueryDataTable_Clone"></a> Clone\(\)

Creates an empty Datatable object with the same structure

```csharp
public override DataTable Clone()
```

#### Returns

 [DataTable](https://learn.microsoft.com/dotnet/api/system.data.datatable)

Empty Datatable object

### <a id="ERPConnect_Queries_QueryHelper_SearchResultQueryDataTable_CreateInstance"></a> CreateInstance\(\)

Creates a new object of the DataTable class

```csharp
protected override DataTable CreateInstance()
```

#### Returns

 [DataTable](https://learn.microsoft.com/dotnet/api/system.data.datatable)

The newly created object

### <a id="ERPConnect_Queries_QueryHelper_SearchResultQueryDataTable_GetEnumerator"></a> GetEnumerator\(\)

GetEnumerator()

```csharp
public IEnumerator GetEnumerator()
```

#### Returns

 [IEnumerator](https://learn.microsoft.com/dotnet/api/system.collections.ienumerator)

System.Collections.IEnumerator

### <a id="ERPConnect_Queries_QueryHelper_SearchResultQueryDataTable_GetRowType"></a> GetRowType\(\)

DataTable related method, please have a look at the manual provided by Microsoft

```csharp
protected override Type GetRowType()
```

#### Returns

 [Type](https://learn.microsoft.com/dotnet/api/system.type)

DataTable related method, please have a look at the manual provided by Microsoft

### <a id="ERPConnect_Queries_QueryHelper_SearchResultQueryDataTable_NewRowFromBuilder_System_Data_DataRowBuilder_"></a> NewRowFromBuilder\(DataRowBuilder\)

DataTable related method, please have a look at the manual provided by Microsoft

```csharp
protected override DataRow NewRowFromBuilder(DataRowBuilder builder)
```

#### Parameters

`builder` [DataRowBuilder](https://learn.microsoft.com/dotnet/api/system.data.datarowbuilder)

DataTable related method, please have a look at the manual provided by Microsoft

#### Returns

 [DataRow](https://learn.microsoft.com/dotnet/api/system.data.datarow)

DataTable related method, please have a look at the manual provided by Microsoft

### <a id="ERPConnect_Queries_QueryHelper_SearchResultQueryDataTable_NewSearchResultQueryRow"></a> NewSearchResultQueryRow\(\)

Creates a new SearchResultQueryRow object

```csharp
public SearchResultQueryRow NewSearchResultQueryRow()
```

#### Returns

 [SearchResultQueryRow](ERPConnect.Queries.QueryHelper.SearchResultQueryRow.md)

New SearchResultQueryRow object

### <a id="ERPConnect_Queries_QueryHelper_SearchResultQueryDataTable_OnRowChanged_System_Data_DataRowChangeEventArgs_"></a> OnRowChanged\(DataRowChangeEventArgs\)

DataTable related method, please have a look at the manual provided by Microsoft

```csharp
protected override void OnRowChanged(DataRowChangeEventArgs e)
```

#### Parameters

`e` [DataRowChangeEventArgs](https://learn.microsoft.com/dotnet/api/system.data.datarowchangeeventargs)

DataTable related method, please have a look at the manual provided by Microsoft

### <a id="ERPConnect_Queries_QueryHelper_SearchResultQueryDataTable_OnRowChanging_System_Data_DataRowChangeEventArgs_"></a> OnRowChanging\(DataRowChangeEventArgs\)

DataTable related method, please have a look at the manual provided by Microsoft

```csharp
protected override void OnRowChanging(DataRowChangeEventArgs e)
```

#### Parameters

`e` [DataRowChangeEventArgs](https://learn.microsoft.com/dotnet/api/system.data.datarowchangeeventargs)

DataTable related method, please have a look at the manual provided by Microsoft

### <a id="ERPConnect_Queries_QueryHelper_SearchResultQueryDataTable_OnRowDeleted_System_Data_DataRowChangeEventArgs_"></a> OnRowDeleted\(DataRowChangeEventArgs\)

DataTable related method, please have a look at the manual provided by Microsoft

```csharp
protected override void OnRowDeleted(DataRowChangeEventArgs e)
```

#### Parameters

`e` [DataRowChangeEventArgs](https://learn.microsoft.com/dotnet/api/system.data.datarowchangeeventargs)

DataTable related method, please have a look at the manual provided by Microsoft

### <a id="ERPConnect_Queries_QueryHelper_SearchResultQueryDataTable_OnRowDeleting_System_Data_DataRowChangeEventArgs_"></a> OnRowDeleting\(DataRowChangeEventArgs\)

DataTable related method, please have a look at the manual provided by Microsoft

```csharp
protected override void OnRowDeleting(DataRowChangeEventArgs e)
```

#### Parameters

`e` [DataRowChangeEventArgs](https://learn.microsoft.com/dotnet/api/system.data.datarowchangeeventargs)

DataTable related method, please have a look at the manual provided by Microsoft

### <a id="ERPConnect_Queries_QueryHelper_SearchResultQueryDataTable_RemoveSearchResultQueryRow_ERPConnect_Queries_QueryHelper_SearchResultQueryRow_"></a> RemoveSearchResultQueryRow\(SearchResultQueryRow\)

DataTable related method, please have a look at the manual provided by Microsoft

```csharp
public void RemoveSearchResultQueryRow(SearchResultQueryRow row)
```

#### Parameters

`row` [SearchResultQueryRow](ERPConnect.Queries.QueryHelper.SearchResultQueryRow.md)

DataTable related method, please have a look at the manual provided by Microsoft

