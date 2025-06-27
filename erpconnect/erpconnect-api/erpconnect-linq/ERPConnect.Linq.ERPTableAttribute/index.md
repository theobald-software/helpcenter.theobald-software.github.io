Namespace: [ERPConnect.Linq](../)\
Assembly: ERPConnectStandard20.dll

This attribute is used to set the original table name and custom function name to read tables.

```csharp
[AttributeUsage(AttributeTargets.Class, AllowMultiple = false)]
public class ERPTableAttribute : Attribute

```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← [Attribute](https://learn.microsoft.com/dotnet/api/system.attribute) ← [ERPTableAttribute](./)

#### Inherited Members

[Attribute.GetCustomAttributes(MemberInfo, Type)](<https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattributes#system-attribute-getcustomattributes(system-reflection-memberinfo-system-type)>), [Attribute.GetCustomAttributes(MemberInfo, Type, bool)](<https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattributes#system-attribute-getcustomattributes(system-reflection-memberinfo-system-type-system-boolean)>), [Attribute.GetCustomAttributes(MemberInfo)](<https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattributes#system-attribute-getcustomattributes(system-reflection-memberinfo)>), [Attribute.GetCustomAttributes(MemberInfo, bool)](<https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattributes#system-attribute-getcustomattributes(system-reflection-memberinfo-system-boolean)>), [Attribute.IsDefined(MemberInfo, Type)](<https://learn.microsoft.com/dotnet/api/system.attribute.isdefined#system-attribute-isdefined(system-reflection-memberinfo-system-type)>), [Attribute.IsDefined(MemberInfo, Type, bool)](<https://learn.microsoft.com/dotnet/api/system.attribute.isdefined#system-attribute-isdefined(system-reflection-memberinfo-system-type-system-boolean)>), [Attribute.GetCustomAttribute(MemberInfo, Type)](<https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattribute#system-attribute-getcustomattribute(system-reflection-memberinfo-system-type)>), [Attribute.GetCustomAttribute(MemberInfo, Type, bool)](<https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattribute#system-attribute-getcustomattribute(system-reflection-memberinfo-system-type-system-boolean)>), [Attribute.GetCustomAttributes(ParameterInfo)](<https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattributes#system-attribute-getcustomattributes(system-reflection-parameterinfo)>), [Attribute.GetCustomAttributes(ParameterInfo, Type)](<https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattributes#system-attribute-getcustomattributes(system-reflection-parameterinfo-system-type)>), [Attribute.GetCustomAttributes(ParameterInfo, Type, bool)](<https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattributes#system-attribute-getcustomattributes(system-reflection-parameterinfo-system-type-system-boolean)>), [Attribute.GetCustomAttributes(ParameterInfo, bool)](<https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattributes#system-attribute-getcustomattributes(system-reflection-parameterinfo-system-boolean)>), [Attribute.IsDefined(ParameterInfo, Type)](<https://learn.microsoft.com/dotnet/api/system.attribute.isdefined#system-attribute-isdefined(system-reflection-parameterinfo-system-type)>), [Attribute.IsDefined(ParameterInfo, Type, bool)](<https://learn.microsoft.com/dotnet/api/system.attribute.isdefined#system-attribute-isdefined(system-reflection-parameterinfo-system-type-system-boolean)>), [Attribute.GetCustomAttribute(ParameterInfo, Type)](<https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattribute#system-attribute-getcustomattribute(system-reflection-parameterinfo-system-type)>), [Attribute.GetCustomAttribute(ParameterInfo, Type, bool)](<https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattribute#system-attribute-getcustomattribute(system-reflection-parameterinfo-system-type-system-boolean)>), [Attribute.GetCustomAttributes(Module, Type)](<https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattributes#system-attribute-getcustomattributes(system-reflection-module-system-type)>), [Attribute.GetCustomAttributes(Module)](<https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattributes#system-attribute-getcustomattributes(system-reflection-module)>), [Attribute.GetCustomAttributes(Module, bool)](<https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattributes#system-attribute-getcustomattributes(system-reflection-module-system-boolean)>), [Attribute.GetCustomAttributes(Module, Type, bool)](<https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattributes#system-attribute-getcustomattributes(system-reflection-module-system-type-system-boolean)>), [Attribute.IsDefined(Module, Type)](<https://learn.microsoft.com/dotnet/api/system.attribute.isdefined#system-attribute-isdefined(system-reflection-module-system-type)>), [Attribute.IsDefined(Module, Type, bool)](<https://learn.microsoft.com/dotnet/api/system.attribute.isdefined#system-attribute-isdefined(system-reflection-module-system-type-system-boolean)>), [Attribute.GetCustomAttribute(Module, Type)](<https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattribute#system-attribute-getcustomattribute(system-reflection-module-system-type)>), [Attribute.GetCustomAttribute(Module, Type, bool)](<https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattribute#system-attribute-getcustomattribute(system-reflection-module-system-type-system-boolean)>), [Attribute.GetCustomAttributes(Assembly, Type)](<https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattributes#system-attribute-getcustomattributes(system-reflection-assembly-system-type)>), [Attribute.GetCustomAttributes(Assembly, Type, bool)](<https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattributes#system-attribute-getcustomattributes(system-reflection-assembly-system-type-system-boolean)>), [Attribute.GetCustomAttributes(Assembly)](<https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattributes#system-attribute-getcustomattributes(system-reflection-assembly)>), [Attribute.GetCustomAttributes(Assembly, bool)](<https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattributes#system-attribute-getcustomattributes(system-reflection-assembly-system-boolean)>), [Attribute.IsDefined(Assembly, Type)](<https://learn.microsoft.com/dotnet/api/system.attribute.isdefined#system-attribute-isdefined(system-reflection-assembly-system-type)>), [Attribute.IsDefined(Assembly, Type, bool)](<https://learn.microsoft.com/dotnet/api/system.attribute.isdefined#system-attribute-isdefined(system-reflection-assembly-system-type-system-boolean)>), [Attribute.GetCustomAttribute(Assembly, Type)](<https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattribute#system-attribute-getcustomattribute(system-reflection-assembly-system-type)>), [Attribute.GetCustomAttribute(Assembly, Type, bool)](<https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattribute#system-attribute-getcustomattribute(system-reflection-assembly-system-type-system-boolean)>), [Attribute.Equals(object?)](https://learn.microsoft.com/dotnet/api/system.attribute.equals), [Attribute.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.attribute.gethashcode), [Attribute.Match(object?)](https://learn.microsoft.com/dotnet/api/system.attribute.match), [Attribute.IsDefaultAttribute()](https://learn.microsoft.com/dotnet/api/system.attribute.isdefaultattribute), [Attribute.TypeId](https://learn.microsoft.com/dotnet/api/system.attribute.typeid), [object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype), [object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), [object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring), [object.Equals(object?)](<https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)>), [object.Equals(object?, object?)](<https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)>), [object.ReferenceEquals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), [object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Constructors

### ERPTableAttribute()

Initializes an instance of the ERPTableAttribute class.

```csharp
public ERPTableAttribute()

```

### ERPTableAttribute(string)

Initializes an instance of the ERPTableAttribute class with a given original table name.

```csharp
public ERPTableAttribute(string name)

```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

## Properties

### CustomFunctionName

Gets and sets the name of the custom function name to read tables.

```csharp
public string CustomFunctionName { get; set; }

```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### Name

Gets and sets the name of the original table.

```csharp
public string Name { get; set; }

```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)
