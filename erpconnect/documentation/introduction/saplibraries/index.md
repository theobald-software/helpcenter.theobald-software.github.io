To use ERPConnect you need also the following SAP libraries.\
You can find the SAP Libraries in the SAP Marketplace download area.

### Netweaver RFC Library

ERPConnect supports the Netweaver RFC (SDK) as of version 4.6.0.\
Download the Netweaver library from the [SAP Software Download Center](https://me.sap.com/swdcnav/products/_APP=00200682500000001943&_EVENT=DISPHIER&HEADER=Y&FUNCTIONBAR=N&EVENT=TREE&NE=NAVIGATE&ENR=01200314690100002214&V=MAINT). For 64-Bit environments the following DLLs are required (XX can vary depending on the version of the NW RRC Libraries):

- sapnwrfc.dll
- icuucXX.dll
- icudtXX.dll
- icuinXX.dll

Copy the 64-Bit Version of NW Libraries to the `C:\Windows\System32` folder.\
Copy the 32-Bit Version of NW Libraries to the `C:\Windows\SysWoW64` folder.

If no protocol is defined when opening an SAP connection, the connection uses the Netweaver RFC library by default.

### Client Protocol RFC (librfc32.dll)

Copy the 64-bit version of librfc32.dll to the `C:\Windows\System32` folder.\
Copy the 32-Bit Version of librfc32.dll to the `C:\Windows\SysWoW64` folder.

Note that the files have the same file name, only the file size varies.

To use the Classic RFC Protocol, set the Property *Protocol* of the *R3Connection* object to *ClientProtocol.RFC* before you open the connection.

```text
R3Connection.Protocol = ClientProtocol.RFC;

```

Warning

**ERPConnect.ERPException: Cannot access librfc32.dll.**\
To use ERPConnect in 64-Bit mode, you need a 64-Bit version of the SAP library **librfc32.dll**. Make sure to copy the 64-bit version of librfc32.dll to the direcory `C:\Windows\System32`. To use ERPConnect in 32-Bit mode, copy the 32-Bit version of the librfc32.dll to the directory `C:\Windows\SysWOW64`.

### 
