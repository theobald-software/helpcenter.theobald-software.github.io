
The following article shows how to check the accessibility of an SAP system using the [paping.exe](https://code.google.com/archive/p/paping) tool.

Sometimes the firewall is blocking the traffic to the SAP System. This could be a local firewall, but also a firewall in the destination network.
You can use the paping.exe tool to ping the port and to check if the firewall is open.

### Ping the SAP System

Use the following syntax with paping.exe:

=== "General Syntax"

	``` console
	paping.exe SAPServer -p port -c 3*
	```

=== "Example"

	``` console
	paping.exe 192.168.0.9 -p 3305 -c 3
	```

![paping](../assets/images/articles/paping.png){:class="img-responsive"}

### Port Numbers

If an SAP-Router is used, the ports are 3299 and 3399. <br>
If not, the ports are 32XX and 33XX. XX is usually the system number, e.g., 00, or 05.

Some important port numbers:

```console
sapdp00 3200/tcp # SAP Dispatcher. 3200 + Instance-Number
sapgw00 3300/tcp # SAP Gateway. 3300 + Instance-Number
sapsp00 3400/tcp # 3400 + Instance-Number
sapms00 3500/tcp # 3500 + Instance-Number
sapmsSID 3600/tcp # SAP Message Server. 3600 + Instance-Number
sapgw00s 4800/tcp # SAP Secure Gateway 4800 + Instance-Number
```