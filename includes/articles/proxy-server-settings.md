
The following article shows how to configure a proxy server in {{ productName }}. <br>
Due to corporate network regulations there can be the requirement that all web traffic needs to go through a web proxy. 
{% if page.meta.product == "xtract-universal" %}This means that {{ productName }} must also connect to a destination via a proxy server. {% endif %}

### System-Wide Configuration in the Windows Settings

Open the settings *Network and Internet* in your Windows start menu and set the respective proxy server settings. 
{% if page.meta.product == "xtract-universal" %}When connecting to a destination in {{ productName }} the connection is routed through the proxy server. {% endif %}

![XU-proxy-settings-01](../assets/images/articles/proxy-settings-01.png){:class="img-responsive"}

### Application Specific Configuration

Follow the [Microsoft guidelines](https://docs.microsoft.com/en-us/dotnet/framework/network-programming/proxy-configuration) to configure the proxy server.

Open the installation directory of {{ productName }}, e.g., `{{ installationDir }}`.
Modify the files {% if page.meta.product == "xtract-universal" %}**Theobald.Xu.Web.Worker.exe.config** and **XtractDesigner.exe.config**{% else %}**Theobald.Bc.Web.Worker.exe.config** and **BCDesigner.exe.config** {% endif %}. 
Enter the following section in both files: 

```xml title="Proxy Configuration"
<system.net>
    <defaultProxy>
        <proxy  proxyaddress="http://[My_Proxyserver]:3128"
                bypassonlocal="True"
        />
    </defaultProxy>
</system.net>
```

Examples:

=== "{% if page.meta.product == "xtract-universal" %}**Theobald.Xu.Web.Worker.exe.config**{% else %}**Theobald.Bc.Web.Worker.exe.config**{% endif %}"

	```xml
	<?xml version="1.0" encoding="utf-8"?>
	<configuration>
		<system.net>
			<defaultProxy>
				<proxy proxyaddress="http://[My_Proxyserver]:3128" bypassonlocal="true" />
			</defaultProxy>
		</system.net>
		<startup>
			<!-- ... -->
		</startup>
		<runtime>
			<!-- ... -->
		</runtime>
	</configuration>
	```

=== "{% if page.meta.product == "xtract-universal" %}**XtractDesigner.exe.config**{% else %}**BCDesigner.exe.config** {% endif %}"

	```xml
	<?xml version="1.0" encoding="utf-8"?>
	<configuration>
	​
		<configSections>
			<!-- ... -->
		</configSections>
	​
		<system.net>  
			<defaultProxy>  
				<proxy  proxyaddress="http://[My_Proxyserver]:3128"
					bypassonlocal="true"  
			/>  
			</defaultProxy>  
		</system.net>
		
	```

*****
#### Related Links

- [Microsoft Help: < defaultProxy > Element (Network Settings)](https://docs.microsoft.com/en-us/dotnet/framework/configure-apps/file-schema/network/defaultproxy-element-network-settings)












