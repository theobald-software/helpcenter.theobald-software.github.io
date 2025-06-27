The following article shows how to create a client [PSE (Personal Security Environment)](https://help.sap.com/saphelp_nw73/helpdata/en/4c/61a6c6364012f3e10000000a15822b/frameset.htm) that can be used to connect to SAP cloud systems via WebSocket RFC.

### Prerequisites

- SAP Cloud API URL, e.g., `https://my123456-api.s4hana.ondemand.com`.
- [Download the SAP Cryptographic Library](https://help.sap.com/doc/saphelp_em900/9.0/en-US/48/a324e7ccfc062de10000000a42189d/frameset.htm) (sapgenpse.exe and sapcrypto.dll) from the SAP Service Marketplace.

### Creating a Client PSE

Follow the steps below to create a client PSE file that trusts the server certificate of the SAP cloud system.

1. Enter the SAP Cloud API URL in a browser of your choice.

1. View the certificate in the browser.

   Navigate to **View site information > Connection is secure > Certificate is valid**.

   Click the pad lock icon left of the URL, navigate to **Connection secure > More information**, then click **[View Certificate]**.

1. Download the certificate chain from the browser. The certificate chain contains all certificates that are signed by the server certificate.

   Open the *Details* tab and click **[Export...]**.\
   Make sure to save the file in the format *Base64-encoded ASCII, certificate chain (\*.pem;\*.crt)*.

   Scroll to the *Miscellaneous* section of the certificate and in the download row, click *PEM (chain)*.

1. Use the sapgenpse tool to create a client PSE file:

   ```text
   sapgenpse.exe gen_pse -p client.pse -v [Distinguished name]

   ```

   - Replace `[Distinguished name]` with the distinguished name of the server that runs the Xtract product, e.g., `"CN=COMPUTER.theobald.local, C=DE, S=BW, O=TS, OU=DEV"`.
   - Optionally, replace `client.pse` with a custom file name for the .pse file.
   - The tool creates its own repository in a standard path, unless the path is changed by the environment variable SECUDIR or by specifying an absolute path.

   Warning

   **Restricted Access**\
   The PSE must be created without a password/pin, otherwise reading is not possible. Make sure not to secure the PSE.

1. Use the following command to add the certificate chain from step 3 to the client PSE:

   ```text
   sapgenpse.exe maintain_pk -a <[chain.pem]> -p <client.pse>

   ```

   Replace `[chain.pem]` with the name of the downloaded .pem file, e.g., `s4hana-cloud-sap-chain.pem`. For more information on how to use the sapgenpse.exe, run the command `sapgenpse -h`.

The .pse file can now be used to connect ERPConnect to the SAP cloud, see [SAP Connection - WebSocket RFC](../../documentation/sap-connection/log-on-to-sap/).
