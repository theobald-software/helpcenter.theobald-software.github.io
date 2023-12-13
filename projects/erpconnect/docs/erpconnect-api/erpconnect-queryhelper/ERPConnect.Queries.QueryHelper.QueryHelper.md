
Namespace: [ERPConnect.Queries.QueryHelper](index.md)  
Assembly: ERPConnect35.dll  

This class provides several search functions for queries (e.g. variants...)

```csharp
public class QueryHelper
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[QueryHelper](ERPConnect.Queries.QueryHelper.QueryHelper.md)

#### Inherited Members

[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

## Constructors

### <a id="ERPConnect_Queries_QueryHelper_QueryHelper__ctor_ERPConnect_R3Connection_"></a> QueryHelper\(R3Connection\)

Constructs a QueryHelper object

```csharp
public QueryHelper(R3Connection Con)
```

#### Parameters

`Con` [R3Connection](../erpconnect/ERPConnect.R3Connection.md)

A valid R3Connection object

## Properties

### <a id="ERPConnect_Queries_QueryHelper_QueryHelper_Connection"></a> Connection

Get / Sets an R3Connection object

```csharp
public R3Connection Connection { get; set; }
```

#### Property Value

 [R3Connection](../erpconnect/ERPConnect.R3Connection.md)

## Methods

### <a id="ERPConnect_Queries_QueryHelper_QueryHelper_SearchForQueries_ERPConnect_Queries_WorkSpace_System_String_System_String_System_String_"></a> SearchForQueries\(WorkSpace, string, string, string\)

Searches for queries by using the given search patterns

```csharp
public SearchResultQueryDataTable SearchForQueries(WorkSpace WorkSpace, string SearchPatternUserGroup, string SearchPatternQueryName, string SearchPatternFunctionAreaName)
```

#### Parameters

`WorkSpace` [WorkSpace](../erpconnect-queries/ERPConnect.Queries.WorkSpace.md)

Workspace local / global

`SearchPatternUserGroup` [string](https://learn.microsoft.com/dotnet/api/system.string)

Search pattern for the user group (you can use *)

`SearchPatternQueryName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Search pattern for the query name (you can use *)

`SearchPatternFunctionAreaName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Search pattern for the function area (you can use *)

#### Returns

 [SearchResultQueryDataTable](ERPConnect.Queries.QueryHelper.SearchResultQueryDataTable.md)

A DataTable which contains the search result set

### <a id="ERPConnect_Queries_QueryHelper_QueryHelper_SearchForUserGroups_ERPConnect_Queries_WorkSpace_System_String_"></a> SearchForUserGroups\(WorkSpace, string\)

Searches for user groups

```csharp
public SearchResultUserGroupsDataTable SearchForUserGroups(WorkSpace WorkSpace, string UserGroupSearchPattern)
```

#### Parameters

`WorkSpace` [WorkSpace](../erpconnect-queries/ERPConnect.Queries.WorkSpace.md)

Workspace local / global

`UserGroupSearchPattern` [string](https://learn.microsoft.com/dotnet/api/system.string)

Search string for user groupy (you can use * as well)

#### Returns

 [SearchResultUserGroupsDataTable](ERPConnect.Queries.QueryHelper.SearchResultUserGroupsDataTable.md)

SearchResultUserGroupsDataTable which contains the result set

#### Examples

The example below shows how to retrieve every user group in the system (search pattern *)

<pre><code class="lang-csharp">R3Connection con = new R3Connection("hamlet",11,"Theobald","pw","EN","800");

con.Open();

QueryHelper qh = new QueryHelper(con);
SearchResultUserGroupsDataTable ret =  qh.SearchForUserGroups(WorkSpace.GlobalArea,"*");

Form1 f1 = new Form1();
f1.dataGrid1.DataSource = ret;
f1.ShowDialog();</code></pre>

### <a id="ERPConnect_Queries_QueryHelper_QueryHelper_SearchForVariants_ERPConnect_Queries_WorkSpace_System_String_System_String_"></a> SearchForVariants\(WorkSpace, string, string\)

Searches for variants to a given query

```csharp
public SearchResultVariantsDataTable SearchForVariants(WorkSpace WorkSpace, string UserGroupName, string QueryName)
```

#### Parameters

`WorkSpace` [WorkSpace](../erpconnect-queries/ERPConnect.Queries.WorkSpace.md)

Workspace local / global

`UserGroupName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the user group

`QueryName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the query

#### Returns

 [SearchResultVariantsDataTable](ERPConnect.Queries.QueryHelper.SearchResultVariantsDataTable.md)

SearchResultVariantsDataTable which contains the result set

#### Examples

[ C# ]
<pre><code class="lang-csharp">R3Connection con = new R3Connection( ... );

con.Open();

QueryHelper qh = new QueryHelper(con);
SearchResultVariantsDataTable ret =  qh.SearchForVariants(WorkSpace.GlobalArea,"/SAPQUERY/MB","MEBESTWERTAN");

Form1 f1 = new Form1();
f1.dataGrid1.DataSource = ret;
f1.ShowDialog();</code></pre>

