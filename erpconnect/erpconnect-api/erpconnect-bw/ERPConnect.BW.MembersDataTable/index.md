Namespace: [ERPConnect.BW](../)\
Assembly: ERPConnectStandard20.dll

A DataTable object that conatains a list of members

```csharp
public class MembersDataTable : DataTable, IComponent, IDisposable, IServiceProvider, IListSource, ISupportInitializeNotification, ISupportInitialize, ISerializable, IXmlSerializable, IEnumerable

```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← [MarshalByValueComponent](https://learn.microsoft.com/dotnet/api/system.componentmodel.marshalbyvaluecomponent) ← [DataTable](https://learn.microsoft.com/dotnet/api/system.data.datatable) ← [MembersDataTable](./)

#### Implements

[IComponent](https://learn.microsoft.com/dotnet/api/system.componentmodel.icomponent), [IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable), [IServiceProvider](https://learn.microsoft.com/dotnet/api/system.iserviceprovider), [IListSource](https://learn.microsoft.com/dotnet/api/system.componentmodel.ilistsource), [ISupportInitializeNotification](https://learn.microsoft.com/dotnet/api/system.componentmodel.isupportinitializenotification), [ISupportInitialize](https://learn.microsoft.com/dotnet/api/system.componentmodel.isupportinitialize), [ISerializable](https://learn.microsoft.com/dotnet/api/system.runtime.serialization.iserializable), IXmlSerializable, [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.ienumerable)

#### Inherited Members

[DataTable.fInitInProgress](https://learn.microsoft.com/dotnet/api/system.data.datatable.finitinprogress), [DataTable.GetObjectData(SerializationInfo, StreamingContext)](https://learn.microsoft.com/dotnet/api/system.data.datatable.getobjectdata), [DataTable.BeginInit()](https://learn.microsoft.com/dotnet/api/system.data.datatable.begininit), [DataTable.EndInit()](https://learn.microsoft.com/dotnet/api/system.data.datatable.endinit), [DataTable.AcceptChanges()](https://learn.microsoft.com/dotnet/api/system.data.datatable.acceptchanges), [DataTable.CreateInstance()](https://learn.microsoft.com/dotnet/api/system.data.datatable.createinstance), [DataTable.Clone()](https://learn.microsoft.com/dotnet/api/system.data.datatable.clone), [DataTable.Copy()](https://learn.microsoft.com/dotnet/api/system.data.datatable.copy), [DataTable.Clear()](https://learn.microsoft.com/dotnet/api/system.data.datatable.clear), [DataTable.Compute(string, string)](https://learn.microsoft.com/dotnet/api/system.data.datatable.compute), [DataTable.GetChanges()](https://learn.microsoft.com/dotnet/api/system.data.datatable.getchanges#system-data-datatable-getchanges), [DataTable.GetChanges(DataRowState)](<https://learn.microsoft.com/dotnet/api/system.data.datatable.getchanges#system-data-datatable-getchanges(system-data-datarowstate)>), [DataTable.GetErrors()](https://learn.microsoft.com/dotnet/api/system.data.datatable.geterrors), [DataTable.ImportRow(DataRow)](https://learn.microsoft.com/dotnet/api/system.data.datatable.importrow), [DataTable.NewRow()](https://learn.microsoft.com/dotnet/api/system.data.datatable.newrow), [DataTable.NewRowFromBuilder(DataRowBuilder)](https://learn.microsoft.com/dotnet/api/system.data.datatable.newrowfrombuilder), [DataTable.GetRowType()](https://learn.microsoft.com/dotnet/api/system.data.datatable.getrowtype), [DataTable.NewRowArray(int)](https://learn.microsoft.com/dotnet/api/system.data.datatable.newrowarray), [DataTable.OnColumnChanging(DataColumnChangeEventArgs)](https://learn.microsoft.com/dotnet/api/system.data.datatable.oncolumnchanging), [DataTable.OnColumnChanged(DataColumnChangeEventArgs)](https://learn.microsoft.com/dotnet/api/system.data.datatable.oncolumnchanged), [DataTable.OnPropertyChanging(PropertyChangedEventArgs)](https://learn.microsoft.com/dotnet/api/system.data.datatable.onpropertychanging), [DataTable.OnRemoveColumn(DataColumn)](https://learn.microsoft.com/dotnet/api/system.data.datatable.onremovecolumn), [DataTable.OnRowChanged(DataRowChangeEventArgs)](https://learn.microsoft.com/dotnet/api/system.data.datatable.onrowchanged), [DataTable.OnRowChanging(DataRowChangeEventArgs)](https://learn.microsoft.com/dotnet/api/system.data.datatable.onrowchanging), [DataTable.OnRowDeleting(DataRowChangeEventArgs)](https://learn.microsoft.com/dotnet/api/system.data.datatable.onrowdeleting), [DataTable.OnRowDeleted(DataRowChangeEventArgs)](https://learn.microsoft.com/dotnet/api/system.data.datatable.onrowdeleted), [DataTable.OnTableCleared(DataTableClearEventArgs)](https://learn.microsoft.com/dotnet/api/system.data.datatable.ontablecleared), [DataTable.OnTableClearing(DataTableClearEventArgs)](https://learn.microsoft.com/dotnet/api/system.data.datatable.ontableclearing), [DataTable.OnTableNewRow(DataTableNewRowEventArgs)](https://learn.microsoft.com/dotnet/api/system.data.datatable.ontablenewrow), [DataTable.RejectChanges()](https://learn.microsoft.com/dotnet/api/system.data.datatable.rejectchanges), [DataTable.Reset()](https://learn.microsoft.com/dotnet/api/system.data.datatable.reset), [DataTable.Select()](https://learn.microsoft.com/dotnet/api/system.data.datatable.select#system-data-datatable-select), [DataTable.Select(string)](<https://learn.microsoft.com/dotnet/api/system.data.datatable.select#system-data-datatable-select(system-string)>), [DataTable.Select(string, string)](<https://learn.microsoft.com/dotnet/api/system.data.datatable.select#system-data-datatable-select(system-string-system-string)>), [DataTable.Select(string, string, DataViewRowState)](<https://learn.microsoft.com/dotnet/api/system.data.datatable.select#system-data-datatable-select(system-string-system-string-system-data-dataviewrowstate)>), [DataTable.ToString()](https://learn.microsoft.com/dotnet/api/system.data.datatable.tostring), [DataTable.BeginLoadData()](https://learn.microsoft.com/dotnet/api/system.data.datatable.beginloaddata), [DataTable.EndLoadData()](https://learn.microsoft.com/dotnet/api/system.data.datatable.endloaddata), [DataTable.LoadDataRow(object[], bool)](<https://learn.microsoft.com/dotnet/api/system.data.datatable.loaddatarow#system-data-datatable-loaddatarow(system-object()-system-boolean)>), [DataTable.LoadDataRow(object[], LoadOption)](<https://learn.microsoft.com/dotnet/api/system.data.datatable.loaddatarow#system-data-datatable-loaddatarow(system-object()-system-data-loadoption)>), [DataTable.Merge(DataTable)](<https://learn.microsoft.com/dotnet/api/system.data.datatable.merge#system-data-datatable-merge(system-data-datatable)>), [DataTable.Merge(DataTable, bool)](<https://learn.microsoft.com/dotnet/api/system.data.datatable.merge#system-data-datatable-merge(system-data-datatable-system-boolean)>), [DataTable.Merge(DataTable, bool, MissingSchemaAction)](<https://learn.microsoft.com/dotnet/api/system.data.datatable.merge#system-data-datatable-merge(system-data-datatable-system-boolean-system-data-missingschemaaction)>), [DataTable.Load(IDataReader)](<https://learn.microsoft.com/dotnet/api/system.data.datatable.load#system-data-datatable-load(system-data-idatareader)>), [DataTable.Load(IDataReader, LoadOption)](<https://learn.microsoft.com/dotnet/api/system.data.datatable.load#system-data-datatable-load(system-data-idatareader-system-data-loadoption)>), [DataTable.Load(IDataReader, LoadOption, FillErrorEventHandler)](<https://learn.microsoft.com/dotnet/api/system.data.datatable.load#system-data-datatable-load(system-data-idatareader-system-data-loadoption-system-data-fillerroreventhandler)>), [DataTable.CreateDataReader()](https://learn.microsoft.com/dotnet/api/system.data.datatable.createdatareader), [DataTable.WriteXml(Stream)](<https://learn.microsoft.com/dotnet/api/system.data.datatable.writexml#system-data-datatable-writexml(system-io-stream)>), [DataTable.WriteXml(Stream, bool)](<https://learn.microsoft.com/dotnet/api/system.data.datatable.writexml#system-data-datatable-writexml(system-io-stream-system-boolean)>), [DataTable.WriteXml(TextWriter)](<https://learn.microsoft.com/dotnet/api/system.data.datatable.writexml#system-data-datatable-writexml(system-io-textwriter)>), [DataTable.WriteXml(TextWriter, bool)](<https://learn.microsoft.com/dotnet/api/system.data.datatable.writexml#system-data-datatable-writexml(system-io-textwriter-system-boolean)>), [DataTable.WriteXml(XmlWriter)](<https://learn.microsoft.com/dotnet/api/system.data.datatable.writexml#system-data-datatable-writexml(system-xml-xmlwriter)>), [DataTable.WriteXml(XmlWriter, bool)](<https://learn.microsoft.com/dotnet/api/system.data.datatable.writexml#system-data-datatable-writexml(system-xml-xmlwriter-system-boolean)>), [DataTable.WriteXml(string)](<https://learn.microsoft.com/dotnet/api/system.data.datatable.writexml#system-data-datatable-writexml(system-string)>), [DataTable.WriteXml(string, bool)](<https://learn.microsoft.com/dotnet/api/system.data.datatable.writexml#system-data-datatable-writexml(system-string-system-boolean)>), [DataTable.WriteXml(Stream, XmlWriteMode)](<https://learn.microsoft.com/dotnet/api/system.data.datatable.writexml#system-data-datatable-writexml(system-io-stream-system-data-xmlwritemode)>), [DataTable.WriteXml(Stream, XmlWriteMode, bool)](<https://learn.microsoft.com/dotnet/api/system.data.datatable.writexml#system-data-datatable-writexml(system-io-stream-system-data-xmlwritemode-system-boolean)>), [DataTable.WriteXml(TextWriter, XmlWriteMode)](<https://learn.microsoft.com/dotnet/api/system.data.datatable.writexml#system-data-datatable-writexml(system-io-textwriter-system-data-xmlwritemode)>), [DataTable.WriteXml(TextWriter, XmlWriteMode, bool)](<https://learn.microsoft.com/dotnet/api/system.data.datatable.writexml#system-data-datatable-writexml(system-io-textwriter-system-data-xmlwritemode-system-boolean)>), [DataTable.WriteXml(XmlWriter, XmlWriteMode)](<https://learn.microsoft.com/dotnet/api/system.data.datatable.writexml#system-data-datatable-writexml(system-xml-xmlwriter-system-data-xmlwritemode)>), [DataTable.WriteXml(XmlWriter, XmlWriteMode, bool)](<https://learn.microsoft.com/dotnet/api/system.data.datatable.writexml#system-data-datatable-writexml(system-xml-xmlwriter-system-data-xmlwritemode-system-boolean)>), [DataTable.WriteXml(string, XmlWriteMode)](<https://learn.microsoft.com/dotnet/api/system.data.datatable.writexml#system-data-datatable-writexml(system-string-system-data-xmlwritemode)>), [DataTable.WriteXml(string, XmlWriteMode, bool)](<https://learn.microsoft.com/dotnet/api/system.data.datatable.writexml#system-data-datatable-writexml(system-string-system-data-xmlwritemode-system-boolean)>), [DataTable.WriteXmlSchema(Stream)](<https://learn.microsoft.com/dotnet/api/system.data.datatable.writexmlschema#system-data-datatable-writexmlschema(system-io-stream)>), [DataTable.WriteXmlSchema(Stream, bool)](<https://learn.microsoft.com/dotnet/api/system.data.datatable.writexmlschema#system-data-datatable-writexmlschema(system-io-stream-system-boolean)>), [DataTable.WriteXmlSchema(TextWriter)](<https://learn.microsoft.com/dotnet/api/system.data.datatable.writexmlschema#system-data-datatable-writexmlschema(system-io-textwriter)>), [DataTable.WriteXmlSchema(TextWriter, bool)](<https://learn.microsoft.com/dotnet/api/system.data.datatable.writexmlschema#system-data-datatable-writexmlschema(system-io-textwriter-system-boolean)>), [DataTable.WriteXmlSchema(XmlWriter)](<https://learn.microsoft.com/dotnet/api/system.data.datatable.writexmlschema#system-data-datatable-writexmlschema(system-xml-xmlwriter)>), [DataTable.WriteXmlSchema(XmlWriter, bool)](<https://learn.microsoft.com/dotnet/api/system.data.datatable.writexmlschema#system-data-datatable-writexmlschema(system-xml-xmlwriter-system-boolean)>), [DataTable.WriteXmlSchema(string)](<https://learn.microsoft.com/dotnet/api/system.data.datatable.writexmlschema#system-data-datatable-writexmlschema(system-string)>), [DataTable.WriteXmlSchema(string, bool)](<https://learn.microsoft.com/dotnet/api/system.data.datatable.writexmlschema#system-data-datatable-writexmlschema(system-string-system-boolean)>), [DataTable.ReadXml(Stream)](<https://learn.microsoft.com/dotnet/api/system.data.datatable.readxml#system-data-datatable-readxml(system-io-stream)>), [DataTable.ReadXml(TextReader)](<https://learn.microsoft.com/dotnet/api/system.data.datatable.readxml#system-data-datatable-readxml(system-io-textreader)>), [DataTable.ReadXml(string)](<https://learn.microsoft.com/dotnet/api/system.data.datatable.readxml#system-data-datatable-readxml(system-string)>), [DataTable.ReadXml(XmlReader)](<https://learn.microsoft.com/dotnet/api/system.data.datatable.readxml#system-data-datatable-readxml(system-xml-xmlreader)>), [DataTable.ReadXmlSchema(Stream)](<https://learn.microsoft.com/dotnet/api/system.data.datatable.readxmlschema#system-data-datatable-readxmlschema(system-io-stream)>), [DataTable.ReadXmlSchema(TextReader)](<https://learn.microsoft.com/dotnet/api/system.data.datatable.readxmlschema#system-data-datatable-readxmlschema(system-io-textreader)>), [DataTable.ReadXmlSchema(string)](<https://learn.microsoft.com/dotnet/api/system.data.datatable.readxmlschema#system-data-datatable-readxmlschema(system-string)>), [DataTable.ReadXmlSchema(XmlReader)](<https://learn.microsoft.com/dotnet/api/system.data.datatable.readxmlschema#system-data-datatable-readxmlschema(system-xml-xmlreader)>), [DataTable.GetDataTableSchema(XmlSchemaSet)](https://learn.microsoft.com/dotnet/api/system.data.datatable.getdatatableschema), [DataTable.GetSchema()](https://learn.microsoft.com/dotnet/api/system.data.datatable.getschema), [DataTable.ReadXmlSerializable(XmlReader)](https://learn.microsoft.com/dotnet/api/system.data.datatable.readxmlserializable), [DataTable.CaseSensitive](https://learn.microsoft.com/dotnet/api/system.data.datatable.casesensitive), [DataTable.IsInitialized](https://learn.microsoft.com/dotnet/api/system.data.datatable.isinitialized), [DataTable.RemotingFormat](https://learn.microsoft.com/dotnet/api/system.data.datatable.remotingformat), [DataTable.ChildRelations](https://learn.microsoft.com/dotnet/api/system.data.datatable.childrelations), [DataTable.Columns](https://learn.microsoft.com/dotnet/api/system.data.datatable.columns), [DataTable.Constraints](https://learn.microsoft.com/dotnet/api/system.data.datatable.constraints), [DataTable.DataSet](https://learn.microsoft.com/dotnet/api/system.data.datatable.dataset), [DataTable.DefaultView](https://learn.microsoft.com/dotnet/api/system.data.datatable.defaultview), [DataTable.DisplayExpression](https://learn.microsoft.com/dotnet/api/system.data.datatable.displayexpression), [DataTable.ExtendedProperties](https://learn.microsoft.com/dotnet/api/system.data.datatable.extendedproperties), [DataTable.HasErrors](https://learn.microsoft.com/dotnet/api/system.data.datatable.haserrors), [DataTable.Locale](https://learn.microsoft.com/dotnet/api/system.data.datatable.locale), [DataTable.MinimumCapacity](https://learn.microsoft.com/dotnet/api/system.data.datatable.minimumcapacity), [DataTable.ParentRelations](https://learn.microsoft.com/dotnet/api/system.data.datatable.parentrelations), [DataTable.PrimaryKey](https://learn.microsoft.com/dotnet/api/system.data.datatable.primarykey), [DataTable.Rows](https://learn.microsoft.com/dotnet/api/system.data.datatable.rows), [DataTable.TableName](https://learn.microsoft.com/dotnet/api/system.data.datatable.tablename), [DataTable.Namespace](https://learn.microsoft.com/dotnet/api/system.data.datatable.namespace), [DataTable.Prefix](https://learn.microsoft.com/dotnet/api/system.data.datatable.prefix), [DataTable.Site](https://learn.microsoft.com/dotnet/api/system.data.datatable.site), [DataTable.ColumnChanging](https://learn.microsoft.com/dotnet/api/system.data.datatable.columnchanging), [DataTable.ColumnChanged](https://learn.microsoft.com/dotnet/api/system.data.datatable.columnchanged), [DataTable.Initialized](https://learn.microsoft.com/dotnet/api/system.data.datatable.initialized), [DataTable.RowChanged](https://learn.microsoft.com/dotnet/api/system.data.datatable.rowchanged), [DataTable.RowChanging](https://learn.microsoft.com/dotnet/api/system.data.datatable.rowchanging), [DataTable.RowDeleting](https://learn.microsoft.com/dotnet/api/system.data.datatable.rowdeleting), [DataTable.RowDeleted](https://learn.microsoft.com/dotnet/api/system.data.datatable.rowdeleted), [DataTable.TableClearing](https://learn.microsoft.com/dotnet/api/system.data.datatable.tableclearing), [DataTable.TableCleared](https://learn.microsoft.com/dotnet/api/system.data.datatable.tablecleared), [DataTable.TableNewRow](https://learn.microsoft.com/dotnet/api/system.data.datatable.tablenewrow), [MarshalByValueComponent.Dispose()](https://learn.microsoft.com/dotnet/api/system.componentmodel.marshalbyvaluecomponent.dispose#system-componentmodel-marshalbyvaluecomponent-dispose), [MarshalByValueComponent.Dispose(bool)](<https://learn.microsoft.com/dotnet/api/system.componentmodel.marshalbyvaluecomponent.dispose#system-componentmodel-marshalbyvaluecomponent-dispose(system-boolean)>), [MarshalByValueComponent.GetService(Type)](https://learn.microsoft.com/dotnet/api/system.componentmodel.marshalbyvaluecomponent.getservice), [MarshalByValueComponent.ToString()](https://learn.microsoft.com/dotnet/api/system.componentmodel.marshalbyvaluecomponent.tostring), [MarshalByValueComponent.Events](https://learn.microsoft.com/dotnet/api/system.componentmodel.marshalbyvaluecomponent.events), [MarshalByValueComponent.Site](https://learn.microsoft.com/dotnet/api/system.componentmodel.marshalbyvaluecomponent.site), [MarshalByValueComponent.Container](https://learn.microsoft.com/dotnet/api/system.componentmodel.marshalbyvaluecomponent.container), [MarshalByValueComponent.DesignMode](https://learn.microsoft.com/dotnet/api/system.componentmodel.marshalbyvaluecomponent.designmode), [MarshalByValueComponent.Disposed](https://learn.microsoft.com/dotnet/api/system.componentmodel.marshalbyvaluecomponent.disposed), [object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype), [object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), [object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring), [object.Equals(object?)](<https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)>), [object.Equals(object?, object?)](<https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)>), [object.ReferenceEquals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), [object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Properties

### Count

Number of rows contained in the DataTable object

```csharp
[Browsable(false)]
public int Count { get; }

```

#### Property Value

[int](https://learn.microsoft.com/dotnet/api/system.int32)

### this[int]

returns a MembersRow object at the given position

```csharp
public MembersRow this[int index] { get; }

```

#### Property Value

[MembersRow](../ERPConnect.BW.MembersRow/)

## Methods

### AddMembersRow(MembersRow)

Adds a new row to the table

```csharp
public void AddMembersRow(MembersRow row)

```

#### Parameters

`row` [MembersRow](../ERPConnect.BW.MembersRow/)

The MembersRow object to be added

### AddMembersRow(string, string, string, string)

Create a new MembersRow object and adds it to the table

```csharp
public MembersRow AddMembersRow(string MemberName, string UniqueName, string ParentUniqueName, string MemberCaption)

```

#### Parameters

`MemberName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the member

`UniqueName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Unqiue name of the member

`ParentUniqueName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of parent member

`MemberCaption` [string](https://learn.microsoft.com/dotnet/api/system.string)

Caption of the member

#### Returns

[MembersRow](../ERPConnect.BW.MembersRow/)

The MembersRow object that was created and added

### Clone()

Clones the object

```csharp
public override DataTable Clone()

```

#### Returns

[DataTable](https://learn.microsoft.com/dotnet/api/system.data.datatable)

The new object that was cloned

### CreateInstance()

Creates a new MembersDataTable object

```csharp
protected override DataTable CreateInstance()

```

#### Returns

[DataTable](https://learn.microsoft.com/dotnet/api/system.data.datatable)

The new MembersDataTable object

### GetEnumerator()

Returns an enumerator that can iterate through a collection.

```csharp
public IEnumerator GetEnumerator()

```

#### Returns

[IEnumerator](https://learn.microsoft.com/dotnet/api/system.collections.ienumerator)

An IEnumerator that can be used to iterate through the collection.

### GetRowType()

Returns the a Type object of the row

```csharp
protected override Type GetRowType()

```

#### Returns

[Type](https://learn.microsoft.com/dotnet/api/system.type)

The Type object of the row

### NewMembersRow()

Creates a new MembersRow object

```csharp
public MembersRow NewMembersRow()

```

#### Returns

[MembersRow](../ERPConnect.BW.MembersRow/)

A new MembersRow object

### NewRowFromBuilder(DataRowBuilder)

Creates a new DataRow object from a DataRowBuilder object

```csharp
protected override DataRow NewRowFromBuilder(DataRowBuilder builder)

```

#### Parameters

`builder` [DataRowBuilder](https://learn.microsoft.com/dotnet/api/system.data.datarowbuilder)

The DataRowBuilder object

#### Returns

[DataRow](https://learn.microsoft.com/dotnet/api/system.data.datarow)

The new DataRow object
