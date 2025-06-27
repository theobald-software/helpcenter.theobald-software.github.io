The following sample shows how to fetch flight information of airplanes from an SAP Query

### About

This sample uses the training Query *D3* that contains flight information of airplanes.\
Data that matches certain selection criteria (e.g. airline and date of flight) is fetched and drawn into a *DataGrid*, see screenshot below.

Tip

If you don't know the technical name of a Query parameter, you can look it up in your SAP-System. Use the transaction **SQ01** or **SQ02** to search a Query. Open the description of the Query and scroll to the section *Selections*. All parameter properties including the name are listed.

### Call D3

The Query *D3* has the following properties:

- user workspace: global
- user group: *BT*
- parameters: "CARRID" (airline) and "FLDATE" (date)

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
