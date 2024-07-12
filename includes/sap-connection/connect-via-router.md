
### Connect via Router

If you access the SAP source system (Application server or Message server) via an SAP router, set the router string before the host name. 
For more information on SAP routers, see [SAP Documentation: SAP-Router](https://help.sap.com/viewer/6d9a59096c4b1014b507f15bed51571f/7.01.22/en-US/486b41efb74c07bee10000000a42189d.html).

Example:<br>
If the application server is "hamlet" and the router string is `/H/lear.theobald-software.com/H/`, set the host property to `/H/lear.theobald-software.com/H/hamlet`.
