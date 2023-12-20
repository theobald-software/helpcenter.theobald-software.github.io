---
title: ERPConnect HelpCenter
hide:
  - navigation
  - toc
---

# Welcome to the ERPConnect HelpCenter

<!-- termynal: {"prompt_literal_start": [">"], title: ERPConnect} -->

```sh
> Welcome to ERPConnect
How can we help you?
```
<!--

<div class="grid cards" markdown>

-   [:material-download-circle: Download latest software version](https://my.theobald-software.com/)

-   [:material-run-fast: How to get started](quick-start.md)

-   [:material-update: Latest updates](changelog.md)

-   [:material-file-document-outline: Code samples and use cases](#)

-   [:material-email: Contact Support](https://support.theobald-software.com/helpdesk)

-   [:material-lightbulb: Common errors](https://support.theobald-software.com/helpdesk/KB)

-   [:material-comment-quote: Give Feedback](#)

</div>

-->


<!---
[:material-download-circle: Download the latest software version](https://my.theobald-software.com/)

[:material-run-fast: How to get started](#)

[:material-file-document-outline: Code samples and use cases](#)

[:material-update: Latest updates](./version-history)

[:material-email: Contact Support](https://support.theobald-software.com/helpdesk)

[:material-lightbulb: Common error messages](https://support.theobald-software.com/helpdesk/KB)

[:material-comment-quote: Give Feedback](#)

-->

### What's New?

<div class="grid cards" markdown>

-   **RFC Connection via WebSocket added**

    ---
	
	See ... for code samples.
	<br><br>12/2023

-   **R3Connection API updated**

    ---
	
	This release has breaking changes, see [release notes]()...
	<br><br>03/2023

-   **ERPConnect45.dll removed**

    ---
	
	Please use ERPConnectStandard20.dll or ERPConnect35.dll instead
	<br><br>06/2022 

</div>

### FAQs

??? question "How do I determine if my SAP connection is valid?"
	Use the `ping()` method of the ERPConnect.R3Connection object. It does not raise exceptions, it only returns *true* or *false* depending on if the connection is active and usable.


??? question "What do I do when I get the exception `System.BadImageFormatException`?"
	If you use a 64-Bit system, you have to copy a 64-Bit version of the librfc32.dll in your `Windows\System32` folder. 
	The 32-Bit version of the librfc32.dll has to be copied in the `Windows\SysWow64` folder.


??? question "How can I establish an SNC (Secure Network Connection) to SAP?"
	Use the SNC functionality and commit all logon parameters in a single connection string. 
	You can use the constructor or the connection string property of the R3Connection object to set the connection string. Example:<br>
	``` csharp
	string ConnStr = “ashost=myapphost client=000 snc_mode=1 sysnr=00 type=3 user=SAPDOTNET snc_partnername="p:SAPServiceCS2@nt5.sap-ag.de";
	```
	For more information, see [About SNC in ERPConnect](https://help.theobald-software.com/en/erpconnect/sap-connection/sso-with-snc#about-snc-in-erpconnect).

??? question "Which ports are used by SAP to establish the connection?"
	If an SAP-Router is used, the ports are 3299 and 3399. If not, the ports are 32XX and 33XX. XX is usually the System number, e.g., 00, or 05.

??? question "Can I use a password with blanks inside?"
	You can use blank characters in your password, if you quote the password using double quotes. Example:
	``` csharp
	R3Connection con = new ERPConnect.R3Connection("ptmalg", 05, "User", "\"My Password\"", "EN", "800");
	```

??? question "Why do some tables cause an error in the ASSIGN statement in the program SAPLSDTX?"
	This error is caused by a bug in one of the SAP’s own function modules. 
	The tables that cause the bug contain at least one column of type F (floating point). <br>
	There are two ways to avoid this error:
	<li> Create a view in SAP over the table that causes the error. Leave out all columns of type F and use the `ReadTable` class to run the view instead of the table.</li>
	<li> Install the function module [Z_XTRACT_IS_TABLE](https://help.theobald-software.com/en/xtract-universal/sap-customizing/custom-function-module-for-table-extraction) into your system. Then call the method `ReadTable.SetCustomFunctionModule(“Z_XTRACT_IS_TABLE”)` before running the extraction. </li>

??? question "What do I do when I get the exception `DATA_BUFFER_EXCEEDED`?"
	This error is caused by a bug in one of the SAP’s own function modules. 
	The tables that cause the bug contain at least one column of type F (floating point). <br>
	There are two ways to avoid this error:
	<li> Create a view in SAP over the table that causes the error. Leave out all columns of type F and use the `ReadTable` class to run the view instead of the table.</li>
	<li> Install the function module [Z_XTRACT_IS_TABLE](https://help.theobald-software.com/en/xtract-universal/sap-customizing/custom-function-module-for-table-extraction) into your system. Then call the method `ReadTable.SetCustomFunctionModule(“Z_XTRACT_IS_TABLE”)` before running the extraction. </li>

??? question "How can I fix the error `Entry too long (please enter in the format --____)` when using date parameters?"
	Use the technical format YYYYMMDD, e.g., 20240711 for date values. Date formats such as "11-07-2024" are not accepted.
