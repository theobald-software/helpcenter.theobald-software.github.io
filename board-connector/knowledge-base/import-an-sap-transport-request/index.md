The following article shows how to import transport requests for custom functions modules that are included in the installation directory of your product, e.g., `C:\Program Files\BOARDConnector\ABAP`.

### Upload SAP Transport Requests to SAP

If you have access to the file system of SAP, you can copy and paste the files of your transport request directly into the `data` and `cofiles` folders of your SAP system. If you don't have access to the file system, follow the steps below to upload the files of your transport request using the SAP function module ARCHIVFILE_CLIENT_TO_SERVER:

1. Unzip the transport request provided in the installation directory of your product, e.g., `C:\Program Files\BOARDConnector\ABAP`.
1. Open SAP and go to transaction AL11.
1. Find the entry DIR_TRANS in the column *Name of Directory Parameter*. Note or copy the path shown in the column *Directory*.
1. Go to SAP transaction SE37.
1. Enter name of function module ARCHIVFILE_CLIENT_TO_SERVER and click **[Test/Execute]**.
1. In the field **PATH** you select your request file from from step 1. The name of the file starts with an "R", e.g., R900472.
1. In the field **TARGET PATH** you construct your target path using the following pattern:\
   `{copied path from step 2}\data\{request file name}`.
1. Enable case-sensitivity and click **[Execute]**. When prompted, confirm the upload.
1. In the field **PATH** you select your cofile from from step 1. The name of the file starts with a "K", e.g., K900472.
1. In the field **TARGET PATH** you construct your target path using the following pattern:\
   `{copied path from step 2}\cofiles\{cofile name}`.
1. Enable case-sensitivity and click **[Execute]**. When prompted, confirm the upload.

The files are now available in SAP.

Note

Another method for uploading files to SAP is the SAP transaction CG3Z. This transaction is only available on ERP systems.

### Import SAP Transport Requests

Follow the steps below to add the transport requests to the import queue and import them:

1. Go to SAP transaction STMS to open the transport management system.
1. Click **[Import Overview]** ( icon).
1. Double click on the import queue in which you want to load the transport request into.
1. Open the transport request selection dialog via **More > Extras > Other Requests > Add**.
1. Select the transport request and confirm. If prompted, confirm the import.
1. Select your transport request from the list and click **[Import Request]** ( icon). The window "Import Transport Request" opens.
1. Enter the target client. If the version of the SAP system where the transport request was created differs from your SAP system version, select the option **Ignore Invalid Component Version**.
1. Confirm your settings.

The transport request is imported.

### Check the Status of Transport Requests

The import overview of the transport management system (transaction STMS) lists all transport requests.\
The status of the transport requests is displayed in the column "RC".

A green bar indicates that the import was successful. In case of warnings or errors, double click on the icon to view the error messages.
