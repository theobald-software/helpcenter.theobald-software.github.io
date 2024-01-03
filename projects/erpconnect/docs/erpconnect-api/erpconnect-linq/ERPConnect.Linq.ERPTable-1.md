
Namespace: [ERPConnect.Linq](index.md)  
Assembly: ERPConnect35.dll  

Represents a table for a particular type in the underlying SAP system database.

```csharp
public class ERPTable<TEntity> : IOrderedQueryable<TEntity>, IQueryable<TEntity>, IEnumerable<TEntity>, IOrderedQueryable, IQueryable, IEnumerable, IQueryProvider, IListSource
```

#### Type Parameters

`TEntity` 

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ERPTable<TEntity\>](ERPConnect.Linq.ERPTable\-1.md)

#### Implements

[IOrderedQueryable<TEntity\>](https://learn.microsoft.com/dotnet/api/system.linq.iorderedqueryable\-1), 
[IQueryable<TEntity\>](https://learn.microsoft.com/dotnet/api/system.linq.iqueryable\-1), 
[IEnumerable<TEntity\>](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1), 
[IOrderedQueryable](https://learn.microsoft.com/dotnet/api/system.linq.iorderedqueryable), 
[IQueryable](https://learn.microsoft.com/dotnet/api/system.linq.iqueryable), 
[IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.ienumerable), 
[IQueryProvider](https://learn.microsoft.com/dotnet/api/system.linq.iqueryprovider), 
[IListSource](https://learn.microsoft.com/dotnet/api/system.componentmodel.ilistsource)

#### Inherited Members

[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

## Constructors

### <a id="ERPConnect_Linq_ERPTable_1__ctor_ERPConnect_R3Connection_"></a> ERPTable\(R3Connection\)

Initializes a new instance of the ERPTable class with a given R3Connection.

```csharp
public ERPTable(R3Connection connection)
```

#### Parameters

`connection` [R3Connection](../erpconnect/ERPConnect.R3Connection.md)

The R3Connection instance.

### <a id="ERPConnect_Linq_ERPTable_1__ctor_ERPConnect_R3Connection_System_IO_TextWriter_"></a> ERPTable\(R3Connection, TextWriter\)

Initializes a new instance of the ERPTable class with a given R3Connection 
and logger object.

```csharp
public ERPTable(R3Connection connection, TextWriter log)
```

#### Parameters

`connection` [R3Connection](../erpconnect/ERPConnect.R3Connection.md)

The R3Connection instance.

`log` [TextWriter](https://learn.microsoft.com/dotnet/api/system.io.textwriter)

The logger instance.

### <a id="ERPConnect_Linq_ERPTable_1__ctor_ERPConnect_Linq_ERPDataContext_"></a> ERPTable\(ERPDataContext\)

Initializes a new instance of the ERPTable class with a given ERPDataContext

```csharp
public ERPTable(ERPDataContext context)
```

#### Parameters

`context` [ERPDataContext](ERPConnect.Linq.ERPDataContext.md)

The ERPDataContext instance.

## Properties

### <a id="ERPConnect_Linq_ERPTable_1_Connection"></a> Connection

Gets the connection object used to connect the underlying database.

```csharp
public R3Connection Connection { get; }
```

#### Property Value

 [R3Connection](../erpconnect/ERPConnect.R3Connection.md)

### <a id="ERPConnect_Linq_ERPTable_1_ContainsListCollection"></a> ContainsListCollection

Gets a value indicating whether the collection is a collection of IList objects.

```csharp
public bool ContainsListCollection { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ERPConnect_Linq_ERPTable_1_ElementType"></a> ElementType

Gets the type of the element(s) that are returned when the expression tree 
associated with this instance of IQueryable is executed.

```csharp
public Type ElementType { get; }
```

#### Property Value

 [Type](https://learn.microsoft.com/dotnet/api/system.type)

### <a id="ERPConnect_Linq_ERPTable_1_Expression"></a> Expression

Gets the expression tree that is associated with the instance of IQueryable.

```csharp
public Expression Expression { get; }
```

#### Property Value

 [Expression](https://learn.microsoft.com/dotnet/api/system.linq.expressions.expression)

### <a id="ERPConnect_Linq_ERPTable_1_Log"></a> Log

Gets and sets the logger object.

```csharp
public TextWriter Log { get; set; }
```

#### Property Value

 [TextWriter](https://learn.microsoft.com/dotnet/api/system.io.textwriter)

## Methods

### <a id="ERPConnect_Linq_ERPTable_1_CreateQuery__1_System_Linq_Expressions_Expression_"></a> CreateQuery<TElement\>\(Expression\)

Constructs an IQueryable object that can evaluate the query represented 
by a specified expression tree.

```csharp
public IQueryable<TElement> CreateQuery<TElement>(Expression expression)
```

#### Parameters

`expression` [Expression](https://learn.microsoft.com/dotnet/api/system.linq.expressions.expression)

An expression tree that represents a LINQ 
            query.

#### Returns

 [IQueryable](https://learn.microsoft.com/dotnet/api/system.linq.iqueryable\-1)<TElement\>

An IQueryable that can evaluate the query represented by the 
            specified expression tree.

#### Type Parameters

`TElement` 

### <a id="ERPConnect_Linq_ERPTable_1_CreateQuery_System_Linq_Expressions_Expression_"></a> CreateQuery\(Expression\)

Constructs an IQueryable object that can evaluate the query represented 
by a specified expression tree.

```csharp
public IQueryable CreateQuery(Expression expression)
```

#### Parameters

`expression` [Expression](https://learn.microsoft.com/dotnet/api/system.linq.expressions.expression)

An expression tree that represents a LINQ 
            query.

#### Returns

 [IQueryable](https://learn.microsoft.com/dotnet/api/system.linq.iqueryable)

An IQueryable that can evaluate the query represented by the 
            specified expression tree.

### <a id="ERPConnect_Linq_ERPTable_1_Execute__1_System_Linq_Expressions_Expression_"></a> Execute<TResult\>\(Expression\)

Executes the strongly-typed query represented by a specified expression tree.

```csharp
public TResult Execute<TResult>(Expression expression)
```

#### Parameters

`expression` [Expression](https://learn.microsoft.com/dotnet/api/system.linq.expressions.expression)

An expression tree that represents a LINQ 
            query.

#### Returns

 TResult

The value that results from executing the specified query.

#### Type Parameters

`TResult` 

The type of the value that results from executing 
            the query.

### <a id="ERPConnect_Linq_ERPTable_1_Execute_System_Linq_Expressions_Expression_"></a> Execute\(Expression\)

Executes the query represented by a specified expression tree.

```csharp
public object Execute(Expression expression)
```

#### Parameters

`expression` [Expression](https://learn.microsoft.com/dotnet/api/system.linq.expressions.expression)

An expression tree that represents a LINQ 
            query.

#### Returns

 [object](https://learn.microsoft.com/dotnet/api/system.object)

The value that results from executing the specified query.

### <a id="ERPConnect_Linq_ERPTable_1_GetEnumerator"></a> GetEnumerator\(\)

Returns an enumerator that iterates through the collection.

```csharp
public IEnumerator<TEntity> GetEnumerator()
```

#### Returns

 [IEnumerator](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerator\-1)<TEntity\>

### <a id="ERPConnect_Linq_ERPTable_1_GetList"></a> GetList\(\)

Returns an IList that can be bound to a data source.

```csharp
public IList GetList()
```

#### Returns

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.ilist)

Returns the collection.

