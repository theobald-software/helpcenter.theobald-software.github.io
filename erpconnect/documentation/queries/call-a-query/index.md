The following sample shows how to fetch data from an SAP Query using ERPConnect.

Tip

If you don't know the technical name of a Query parameter, you can look it up in your SAP-System. Use the transaction **SQ01** or **SQ02** to search a Query. Open the description of the Query and scroll to the section *Selections*. All parameter properties including the name are listed.

### Call Queries

1. Connect to the SAP system using `R3Connection`.
1. Create a query object using `CreateQuery`. Each SAP query is defined by three descriptors:
   - the user workspace (local or global)
   - the user group
   - the name of the query
1. Define the parameters of the query. Every parameter has a distinctly technical name that can be looked up in the SAP.\
   Example: To create a selection criteria, access the parameter's range collection via the indexer and add a new range using `Add`. An individual range is defined by three descriptors:
   - a sign (include or exclude)
   - an operator (e.g. *equals* for parity)
   - a low or high value (LowValue and HighValue or only LowValue when using parity).
1. Execute the query using `Execute`.
1. The query returns a table of the *DataTable* type. Access the result table using `Result` attribute.

```csharp
private void btnFetchQueryData_Click(object sender, System.EventArgs e)
    {
      using (R3Connection con = new R3Connection("SAPServer", 00, "SAPUser", "Password", "EN", "800"))
        { 
           con.Open();

           // Create Query object Query q; 
           try
           {
               Query q = con.CreateQuery(WorkSpace.GlobalArea, "BT", "D3");

               // Add a criteria (in this case the airline) 
               q.SelectionParameters["CARRID"].Ranges.Add(
                   Sign.Include, RangeOption.Equals, inputAirline.Text);
               // Add a second criteria (in this case the date) 
               q.SelectionParameters["FLDATE"].Ranges.Add(
                   Sign.Include, RangeOption.Between, inputStartDate.Text, inputEndDate.Text);

               // Run the Query 
               q.Execute();
               // Bind result to datagrid 
               this.dataGridView1.DataSource = q.Result;
           }
           catch (Exception e1)
           {
            MessageBox.Show(e1.Message);
            return;
           }
        }
    }

```

______________________________________________________________________

#### Related Links

- [Samples: Fetch Data from an SAP Query](../../../samples/fetch-data-from-an-sap-query/)
