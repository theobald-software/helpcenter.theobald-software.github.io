
The following article shows how to access data from the SAP S/4HANA Public Cloud.
{{ productName }} can access BAPIs / Function Modules that are available via SAP *Communication Scenarios*.

!!! note
	{{ productName }} only supports data extraction via RFC service using the [{{ bapi }} {{ component }}](../documentation/bapi/index.md). 
	Data extraction via OData is currently in development and is scheduled to be released in Q4 2024.
	Other {{ components }} cannot access data in the SAP Public Cloud. 

### About Communication Scenarios

*Communication Scenarios* are used to exchange data between the SAP Cloud and external systems. <br>
You can use the **Display Communication Scenarios** app in the SAP Public Cloud to look up available *Communication Scenarios* that provide access to BAPIs / Function Modules, e.g., the *Communication Scenario* SAP_COM_0109 includes BAPIS that are used for Sales Order Integration.

In *Communication Scenarios* BAPIs / Function Modules are listed as Service Type *RFC*:

![display-communication-scenarios](../assets/images/articles/bapi/sap-cloud/Display-Communication-Scenarios.png)


### Prerequisites

- Administrator role in the SAP Public Cloud to set up communication on the SAP side.
- The *Communication Scenario* SAP_COM_0636 (Remote Function Call - RFC Metadata Integration) is available in the SAP Public Cloud.
- [Download the SAP Cryptographic Library](https://help.sap.com/doc/saphelp_em900/9.0/en-US/48/a324e7ccfc062de10000000a42189d/frameset.htm) (sapcrypto.dll) from the SAP Service Marketplace.
- [Create a Client PSE to connect {{ productName }} to SAP Cloud Systems](create-personal-security-environment.md).
- Make sure to use {{ productName }} version 6.4.2.0 (2024-04-19) or higher.

### Enable Communication in the SAP Public Cloud

Use the **Communication Management** apps in the SAP Public Cloud to make BAPIs / Function Modules accessible for external systems:
 
1. Create a *Communication User* in the **Maintain Communication Users** app.<br>
![Maintain-Communication-Users](../assets/images/articles/bapi/sap-cloud/Maintain-Communication-Users.png)
2. Create a *Communication System* that handles inbound service calls in the **Communication Systems** app.<br>
![Communication-System](../assets/images/articles/bapi/sap-cloud/Communication-System.png)
3. Assign a *Communication User* to the *Communication System* in the subsection *Users for Inbound Communication*.
4. Create *Communication Arrangements* to define, which *Communication Scenarios* can be accessed by the *Communication System* and the *Communication User*.
The *Communication Scenario* SAP_COM_0636 (Remote Function Call - RFC Metadata Integration) is mandatory for using the {{ bapi }} {{ component }} in {{ productName }}.<br>
![Communication-Arrangement](../assets/images/articles/bapi/sap-cloud/Communication-Arrangement.gif)

For more information, see [SAP Help: Setting up Communication Management](https://learning.sap.com/learning-journeys/implement-sap-s-4hana-cloud-public-edition-for-sourcing-and-procurement/setting-up-communication-management_a913171c-c96d-47a9-81ec-dc9ee8754320).

### Enable Communication in {{ productName }}

Follow the steps below to create an {{ productName }} source that connects to an SAP Public Cloud:

1. In the main window of the Designer, navigate to the menu bar and select **Server > Manage Sources**. The window "Manage Sources" opens.  <br>
![Create-Connection](../assets/images/{{ abbr }}/documentation/sap-connection/open-manage-sources.png){:class="img-responsive"}
2. Click **[Add]** to add a new SAP connection or click **[:pen-button:]** to edit an existing connection. The window "Change Source" opens. <br>
![Create-Connection-2](../assets/images/documentation/sap-connection/sap-source-manage.png){:class="img-responsive"}
3. Enter a name for the SAP connection in the field **Name**, e.g., *SAPCloud*.
4. In the *General* tab, select the connection method **WebSocket**. <br>
![sap-source-general](../assets/images/documentation/sap-connection/sap-source-general-websocket.png){:class="img-responsive"}
5. Fill out the connection details, see [Connection Settings](../documentation/sap-connection/settings.md/#general).
	- In the field **Library**, enter the path to the SAP Cryptographic Library (sapcrypto.dll).
	- In the field **Client PSE**, enter the path to the client .pse file.
5. In the *Authentication* tab, enter the username and password of the SAP *Communication User*.
6. Activate the checkbox **User name is alias**.<br>
![sap-source-authentication-websocket](../assets/images/articles/bapi/WebSocket-Authentication.png){:class="img-responsive"}
8. Click **[Test designer connection]** to validate the connection between the {{ productName }} Designer and the SAP system. 
9. Click **[Test server connection]** to validate the connection between the {{ productName }} Server and the SAP system. 
10. Click **[OK]** to save the SAP source.

### Look Up and Execute BAPIs

Follow the regular workflow to look up and execute BAPIS:

1. [Create a new BAPI / Function Module extraction](../documentation/bapi/index.md/#create-a-bapi-extraction).
2. [Look up a BAPI / Function Module](../documentation/bapi/index.md/#look-up-a-function-module-bapi) included in the *Communication Scenarios* that your *Communication User* has access to.

	!!! note
		The lookup returns a list of all BAPIS in the SAP Public Cloud with no consideration for *Communication Scenarios*.
		Make sure to only select BAPIS that are available via *Communication Scenarios*, see [About Communication Scenarios](#about-communication-scenarios).
		
3. [Define all mandatory parameters of the BAPI](../documentation/bapi/index.md/#define-the-bapi-extraction-type).
4. [Run the extraction](../documentation/{{ run_extractions }}/#run-extractions-in-the-designer).

<!---
!!! warning
	**RFC_ABAP_MESSAGE: UCON RFC Rejected**<br>
	??? SAP_COM_0636 missing?
-->

-----
#### Related Links
- [SAP Help: Setting up Communication Management](https://learning.sap.com/learning-journeys/implement-sap-s-4hana-cloud-public-edition-for-sourcing-and-procurement/setting-up-communication-management_a913171c-c96d-47a9-81ec-dc9ee8754320)
- [SAP Community: Calling BAPIs in the SAP S/4HANA Public Cloud](https://community.sap.com/t5/enterprise-resource-planning-blogs-by-sap/calling-bapis-in-the-sap-s-4hana-public-cloud/ba-p/13411902)
- [Knowledge Base Article: Create a Client PSE to connect to SAP Cloud Systems](create-personal-security-environment.md)
