
The following article shows how to create a client [PSE (Personal Security Environment)](https://help.sap.com/saphelp_nw73/helpdata/en/4c/61a6c6364012f3e10000000a15822b/frameset.htm) that can be used to connect to SAP cloud systems via WebSocket RFC.<br>

### Prerequisites

- SAP Cloud API URL, e.g., `https://my123456-api.s4hana.ondemand.com`. 
- [Download the SAP Cryptographic Library](https://help.sap.com/doc/saphelp_em900/9.0/en-US/48/a324e7ccfc062de10000000a42189d/frameset.htm) (sapgenpse.exe and sapcrypto.dll) from the SAP Service Marketplace.

### Creating a Client PSE

Follow the steps below to create a client PSE file that trusts the server certificate of the SAP cloud system. 

1. Enter the SAP Cloud API URL in a browser of your choice.
2. View the certificate in the browser.<br>

	=== ":fontawesome-brands-chrome: Chrome"

		Navigate to **View site information > Connection is secure > Certificate is valid**.<br>
		![sap-cloud-view-certificate-chrome](../assets/images/articles/sap/sap-cloud-view-certificate-chrome.png){:class="img-responsive"}

	=== ":fontawesome-brands-firefox: Firefox"

		Click the pad lock icon left of the URL, navigate to **Connection secure > More information**, then click **[View Certificate]**.<br>
		![sap-cloud-view-certificate](../assets/images/articles/sap/sap-cloud-view-certificate.png){:class="img-responsive"}

3. Download the certificate chain from the browser. The certificate chain contains all certificates that are signed by the server certificate.

	=== ":fontawesome-brands-chrome: Chrome"

		Open the *Details* tab and click **[Export...]**. <br>
		Make sure to save the file in the format *Base64-encoded ASCII, certificate chain (\*.pem;\*.crt)*.<br>
		![sap-cloud-download-certificate](../assets/images/articles/sap/sap-cloud-download-certificate-chrome.png){:class="img-responsive"}

	=== ":fontawesome-brands-firefox: Firefox"
	
		Scroll to the *Miscellaneous* section of the certificate and in the download row, click *PEM (chain)*.<br>
		![sap-cloud-download-certificate](../assets/images/articles/sap/sap-cloud-download-certificate.png){:class="img-responsive"}

4. Use the sapgenpse tool to create a client PSE file: 

	```
	sapgenpse.exe gen_pse -p client.pse -v [Distinguished name]
	```
	- Replace `[Distinguished name]` with the distinguished name of the server that runs the Xtract product, e.g., `"CN=COMPUTER.theobald.local, C=DE, S=BW, O=TS, OU=DEV"`.
	- Optionally, replace `client.pse` with a custom file name for the .pse file. 	
	- The tool creates its own repository in a standard path, unless the path is changed by the environment variable SECUDIR or by specifying an absolute path. 
	
	!!! warning
		**Restricted Access**<br>
		The PSE must be created without a password/pin, otherwise reading is not possible.
		Make sure not to secure the PSE. 
	
6. Use the following command to add the certificate chain from step 3 to the client PSE:

	```
	sapgenpse.exe maintain_pk -a <[chain.pem]> -p <client.pse>
	```
	Replace `[chain.pem]` with the name of the downloaded .pem file, e.g., `s4hana-cloud-sap-chain.pem`.
	For more information on how to use the sapgenpse.exe, run the command `sapgenpse -h`.
	
The .pse file can now be used to connect {{ productName }} to the SAP cloud{% if page.meta.product == 'erpconnect' %}, see [SAP Connection - WebSocket RFC](../documentation/sap-connection/log-on-to-sap.md){% endif %}.<br>

<!---
### Usage in Xtract Universal

- Because Xtract Universal is running as the local SYSTEM user, specify the absolute path to the PSE file, e.g.: C:\Users\<USER>\AppData\Local\sec\client.pse.
- Instead of using the default user field used for all other SAP systems, cloud systems require the usage of the Alias user field. Do not specify a user.
-->
