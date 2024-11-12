---
title: SAP Libraries
description: SAP Libraries
---


To use ERPConnect you need also the following SAP libraries.<br>
You can find the SAP Libraries in the SAP Marketplace download area.

### Netweaver RFC Library

ERPConnect supports the Netweaver RFC (SDK) as of version 4.6.0. <br>
For 64-Bit environments the following DLLs are required (XX can vary depending on the version of the NW RRC Libraries):
- sapnwrfc.dll
- icuucXX.dll
- icudtXX.dll
- icuinXX.dll 

Copy the 64-Bit Version of NW Libraries to the `C:\Windows\System32` folder.<br>
Copy the 32-Bit Version of NW Libraries to the `C:\Windows\SysWoW64` folder.

If no protocol is defined when opening an SAP connection, the connection uses the Netweaver RFC library by default.

### Client Protocol RFC (librfc32.dll)

Copy the 64-bit version of librfc32.dll to the `C:\Windows\System32` folder. <br>
Copy the 32-Bit Version of librfc32.dll to the `C:\Windows\SysWoW64` folder.

Note that the files have the same file name, only the file size varies.

![librfc32dll]( site:assets/images/erpconnect/documentation/librfc32dll.png){:class="img-responsive" width="300px" }

To use the Classic RFC Protocol, set the Property *Protocol* of the *R3Connection* object to *ClientProtocol.RFC* before you open the connection.

```
R3Connection.Protocol = ClientProtocol.RFC;
```

### 
