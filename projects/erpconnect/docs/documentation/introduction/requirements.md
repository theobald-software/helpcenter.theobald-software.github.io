---
title: Requirements
description: System requirements for installing and using ERPConnect.
---

This section contains information about system requirements and compatible SAP systems for ERPConnect.

### .NET Framework

ERPConnect (without LINQ to ERP) consists of two .NET assemblies that [target different frameworks](https://docs.microsoft.com/en-US/dotnet/standard/frameworks):

-	ERPConnect35.dll (targets .NET Framework 3.5 SP1)
-	ERPConnectStandard20.dll (targets .NET Standard 2.0)

That results in the following compatibility matrix: <!--- bei den Sätzen fehlen Verben. Die Personalpronomen müssen ersetzt werden--->

| |	ERPConnectStandard20.dll	| ERPConnect35.dll|
|:------|:------|:------ |
|.NET Framework 3.5 SP1	| |	X|
|.NET Framework 4.0     | |	X |
|.NET Framework 4.5	    | |	X |
|.NET Framework 4.5.1	  | |	X |
|.NET Framework 4.5.2 	 | | X |
|.NET Framework 4.6	    | |	X |
|.NET Framework 4.6.1 and newer |	X |	X |
|.NET Core 2.0 and newer | X | X |
|Universal Windows Platform 10.0.16299 and newer	| X | |	 	 

{% include "requirements/sap-releases.md" %}

Installation of custom function modules / transport requests is not required.

{% include "requirements/sap-tcpip-ports.md" %}

{% include "requirements/operating-systems.md" %}


### Visual Studio

- Visual Studio 2022
- Visual Studio 2019
- Visual Studio 2017
- Visual Studio 2015 (until 14.10.2025)


### Other Applications and Frameworks

- [SAP NetWeaver RFC Library 7.50](https://launchpad.support.sap.com/#/notes/2573790) 
- [Visual C++ 2013 Runtime](https://www.microsoft.com/en-US/download/details.aspx?id=40784)
- [SAP Library](saplibraries.md)

### Memory
* 2 GB or more recommended (depends on actual use case)


### Disk Space
* About 50 MB disk space are required for a full installation.


### 32/64-Bit Environment
* Both x86 and x64 platforms are supported.

Copy the 64-bit version of librfc32.dll to the `\System32` folder. <br>
Copy the 32-Bit Version of librfc32.dll to the `\SysWoW64` folder.


![librfc32dll]( site:assets/images/erpconnect/documentation/librfc32dll.png){:class="img-responsive" width="300px" }

### Security Settings
 	
- For logging on to SAP, a system or dialog user with appropriate [authority objects](../sap-authority-objects.md) is required.
- Plain authentication (user/password), Secure Network Communications (SNC) with and without Single Sign-On (SSO) and SAP Logon Tickets (MYSAPSSO2) are supported.


### Network Settings
 	
Ports need to be opened depending on the SAP System connection technique.
Details can be found in the knowledge base article [How to check the accessibility to a SAP System](../../samples/how-to-check-the-accessibility-to-a-sap-system.md).
