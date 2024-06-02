---
title: Proxy Server Settings in Xtract Universal
description: proxy server settings in xtract universal
---

The following article shows how to configure a proxy server in {{ productName }}. 

Due to corporate network regulations there can be the requirement that all web traffic needs to go through a web proxy. <br>
This means that {{ productName }} must also connect to a destination (e.g. S3 AWS) via a proxy server. <br>


### System-Wide Configuration in the Windows Settings

Open the settings *Network and Internet* in your Windows start menu and set the respective proxy server settings there. 
When connecting to a destination in {{ productName }} the connection is routed through the proxy server. 

![XU-proxy-settings-01](../assets/images/xu/articles/xu-proxy-settings-01.png){:class="img-responsive"}

### Application Specific Configuration

Follow the [Microsoft guidelines](https://docs.microsoft.com/en-us/dotnet/framework/network-programming/proxy-configuration).

Modify the **Theobald.Xu.Web.Worker.exe.config** and the **XtractDesigner.exe.config** files, in the {{ productName }} installation directory, e.g., `{{ installationDir }}`. 
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

!!! note
    Before {{ productName }} version 5.0 the **Theobald.Xu.Web.Worker.exe.config** was called **XtractRun.exe.config**.
    If you use {{ productName }} version <= 4.x, modify the **XtractRun.exe.config** instead of the **Theobald.Xu.Web.Worker.exe.config**.

=== "Theobald.Xu.Web.Worker.exe.config"

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

=== "XtractDesigner.exe.config"

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

Proxy server settings are generic settings that apply to all {{ productName }} destinations.

*****
#### Related Links

- [Microsoft Help: < defaultProxy > Element (Network Settings)](https://docs.microsoft.com/en-us/dotnet/framework/configure-apps/file-schema/network/defaultproxy-element-network-settings)
- [{{ productName }} - Online Help](https://help.theobald-software.com/en/xtract-universal/)











