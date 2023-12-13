
Namespace: [ERPConnect.Queries](index.md)  
Assembly: ERPConnect35.dll  

Zusammenfassung für QueryField.

```csharp
public class QueryField
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[QueryField](ERPConnect.Queries.QueryField.md)

#### Inherited Members

[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

## Constructors

### <a id="ERPConnect_Queries_QueryField__ctor"></a> QueryField\(\)

Constructs an empty Query field object

```csharp
public QueryField()
```

### <a id="ERPConnect_Queries_QueryField__ctor_System_String_System_String_System_Int32_System_Int32_System_String_"></a> QueryField\(string, string, int, int, string\)

Constructs an QueryField object

```csharp
public QueryField(string Name, string ABAPType, int Length, int Decimals, string Description)
```

#### Parameters

`Name` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the field

`ABAPType` [string](https://learn.microsoft.com/dotnet/api/system.string)

ABAP type

`Length` [int](https://learn.microsoft.com/dotnet/api/system.int32)

Length of field

`Decimals` [int](https://learn.microsoft.com/dotnet/api/system.int32)

Number of decimals digits

`Description` [string](https://learn.microsoft.com/dotnet/api/system.string)

Description

## Properties

### <a id="ERPConnect_Queries_QueryField_ABAPType"></a> ABAPType

ABAP type

```csharp
public string ABAPType { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="ERPConnect_Queries_QueryField_Decimals"></a> Decimals

Number of decimals digits

```csharp
public int Decimals { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ERPConnect_Queries_QueryField_Description"></a> Description

Description

```csharp
public string Description { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="ERPConnect_Queries_QueryField_Length"></a> Length

Length of field

```csharp
public int Length { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ERPConnect_Queries_QueryField_Name"></a> Name

Name of the field

```csharp
public string Name { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

