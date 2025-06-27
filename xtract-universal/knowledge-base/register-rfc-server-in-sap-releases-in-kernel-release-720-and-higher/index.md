The following article shows how to register an RFC server in SAP releases with Kernel release 720 and higher.

Warning

**RFC server is not working, please check gateway info.**\
As of SAP Kernel Release 720, you can use the parameter *gw/acl_mode* to set an initial security environment to start and register external programs, e.g., RFC Server required for DeltaQ processing / customizing check. If this value is set to *1*, the DeltaQ extraction type cannot register the RFC Server and the Customizing Check returns the an error.

There are two options to avoid this error:

- Set the Profile Parameter *gw/acl_mode* to 0.
- Define a whitelist of programs that can register at the SAP Gateway.

### Change the Profile Parameter *gw/acl_mode*

When setting the profile parameter *gw/acl_mode* to 0 (default is 1), all RFC destinations / RFC servers with different Program IDs can register.

1. Use SAP transaction RZ10 to open the "Edit Profile" menu.
1. Select the profile name *Default* and *Extended Maintenance*.
1. Click **[Change]** and set the profile parameter *gw/acl_mode* value to *0*

The Customizing Check now executes without error messages.

### Define a Whitelist of Programs at the SAP Gateway

To define a whitelist of programs that can register at the SAP Gateway, create two files named *secinfo* and *reginfo*. Both files don't exist per default, see the example below.

1. Create the files *secinfo* and *reginfo*. The files must have the following content:

   ```abap
   #VERSION=2
   P TP=* HOST=internal,local CANCEL=internal,local ACCESS=internal,local
   # the following line should be the LAST line in the secinfo file
   P TP=XTRACT01 USER=* USER-HOST=* HOST=* 

   ```

   ```abap
   #VERSION=2
   # the following line should be the LAST line in the reginfo file
   P TP=XTRACT01

   ```

1. Copy both files to the following directory (data path): `/usr/sap/<SID>/<INSTANCE>/data/`

1. Extend the following two parameters to the Profile Parameter in the SAP transaction RZ10:

   - gw/reg_info = $(DIR_DATA)/reginfo
   - gw/sec_info = $(DIR_DATA)/secinfo

1. Restart the gateway or re-read the security parameters using SAP transaction SMGW (navigate to **Menu -> Goto -> Expert Functions -> External Security -> Reread**).

The Customizing Check now executes without error messages.

Warning

**Registration of the RFC-server fails.**\
The content of both files *secinfo* and *reginfo* override the parameter *gw/acl_mode*.\
Make sure that both files *secinfo* and *reginfo* allow the registration of the RFC-server.

______________________________________________________________________

#### Related Links

- [SAP Help: Gateway Security Files secinfo and reginfo](https://help.sap.com/doc/saphelp_crm700_ehp01/7.0.1.15/en-US/48/b2096b7895307be10000000a42189b/frameset.htm)
- [SAP Note 1850230](https://launchpad.support.sap.com/#/notes/0001850230)
- [SAP Community blog](http://scn.sap.com/docs/DOC-42463)
