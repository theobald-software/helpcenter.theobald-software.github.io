Namespace: [ERPConnect.Utils](../)\
Assembly: ERPConnectStandard20.dll

ABAPCode is a class, that can be used to execute ABAP code on the fly and retrieve the result.

```csharp
public class ABAPCode

```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← [ABAPCode](./)

#### Inherited Members

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype), [object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), [object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring), [object.Equals(object?)](<https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)>), [object.Equals(object?, object?)](<https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)>), [object.ReferenceEquals(object?, object?)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), [object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Constructors

### ABAPCode(R3Connection)

initializes a ABAPCode object that can be used to execute dynmic ABA code A valid SAP connection

```csharp
public ABAPCode(R3Connection Con)

```

#### Parameters

`Con` [R3Connection](../../erpconnect/ERPConnect.R3Connection/)

### ABAPCode()

initializes a ABAPCode object that can be used to execute dynmic ABA code

```csharp
public ABAPCode()

```

## Properties

### Connection

The R3Connection object which the ABAPCode object is assigned to.

```csharp
public R3Connection Connection { get; set; }

```

#### Property Value

[R3Connection](../../erpconnect/ERPConnect.R3Connection/)

### LastABAPSyntaxError

Returns the ABAP error message in case the programm is syntacly incorrect. The method Execute returns false.

```csharp
public string LastABAPSyntaxError { get; }

```

#### Property Value

[string](https://learn.microsoft.com/dotnet/api/system.string)

### ResultLineCount

Returns the number of lines that a retrieved a report output.

```csharp
public int ResultLineCount { get; }

```

#### Property Value

[int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### AddCodeLine(string)

Adds a new line of ABAP code.

```csharp
public void AddCodeLine(string CodeLine)

```

#### Parameters

`CodeLine` [string](https://learn.microsoft.com/dotnet/api/system.string)

Line of ABAP code to append

### Execute()

Executes ABAP code on the fly.

```csharp
public bool Execute()

```

#### Returns

[bool](https://learn.microsoft.com/dotnet/api/system.boolean)

true / false depends if the program could have been executed without a syntax error.

#### Remarks

The following code shows, how to set some ABAP code (located in textBox1), execute it and write the list result in another TextBox. You'll find this samples in the directory AbapPad. [C#]

```
  private void button1_Click(object sender, System.EventArgs e)
  {
     ERPConnect.R3Connection con = new ERPConnect.R3Connection();
     if(!con.AskUserAndOpen(true))
                     return;
     ERPConnect.Utils.ABAPCode code = new ERPConnect.Utils.ABAPCode();

     code.Connection = con;

     foreach(string s in textBox1.Lines)
     code.AddCodeLine(s);

     if (code.Execute())
     {
for(int i=0; i  code.ResultLineCount; i++)
         textBox2.Text += code.GetResultLine(i) + "\r\n";
     }
     else
         textBox2.Text = "ABAP Error: " + code.LastABAPSyntaxError;
 }
```

[VB]

```
  Private Sub button1_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles button1.Click
    Dim con As New ERPConnect.R3Connection
    If Not con.AskUserAndOpen(True) Then
        Exit Sub
    End If

    Dim code = New ERPConnect.Utils.ABAPCode
    code.Connection = con

    Dim s As String
    For Each s In textBox1.Lines
        code.AddCodeLine(s)
    Next

    Dim i As Integer
    If code.Execute() Then
        For i = 0 To code.ResultLineCount - 1
            textBox2.Text += code.GetResultLine(i) + vbCrLf
        Next
    Else
        textBox2.Text = "ABAP Error: " + code.LastABAPSyntaxError
    End If
End Sub
```

### GetResultLine(int)

Returns a single at the given position the resultset of the abap report

```csharp
public string GetResultLine(int Index)

```

#### Parameters

`Index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

Index of the result line

#### Returns

[string](https://learn.microsoft.com/dotnet/api/system.string)

Result line of the report output

### ResetCode()

Deletes the current code lines.

```csharp
public void ResetCode()

```
