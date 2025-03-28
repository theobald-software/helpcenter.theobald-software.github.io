---
title: Run Xtract Universal in a VM on AWS EC2
description: Run Xtract Universal in a VM on AWS EC2
---

The following article shows how to run {{ productName }} in a virtual machine on an AWS EC2 instance.

AWS enables running virtual servers (instances) in the cloud, see [AWS Documentation: EC2](https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/concepts.html).
Theobald Software offers {{ productName }} as an [Amazon Machine Image (AMI)](https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/AMIs.html) for the following customer purposes:
- {{ productName }} evaluation
- Hosting of {{ productName }} in the cloud

The {{ productName }} AMI can be selected when launching an instance in AWS.

## Pre-Configured Settings

When starting an {{ productName }} instance, the following settings are pre-configured:

|          | Configuration  |  Resources |
|:---------|:-------------|:------|
| License  | {{ productName }} is already installed and running with a 30-days trial license. You can replace the trial license with your regular license. | [Documentation: Licensing](../documentation/setup/license.md) |
| Software Updates | The pre-installed version of {{ productName }} is displayed in the AWS marketplace. Make sure to keep {{ productName }} up-to-date with the latest software releases, see [{{ productName }} Changelog](../changelog.md). | [Documentation: Installation and Update](../documentation/setup/update.md) |
| Server Settings | The webserver is pre-configured with a self-signed TLS certificate and can be accessed in a browser via ``https://xtractuniversal:8165/`` from within the rdp session. | [Documentation: Server Settings](../documentation/server/server-settings.md) |
| Data Extractions | There are no default SAP data extractions. To get started with {{ productName }}, create an SAP connection and start creating extractions. | [Getting Started on AWS](#getting-started-on-aws) |


## Prerequisites

- Access to an AWS account
- Access to the [EC2](https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/concepts.html) console


## Set Up {{ productName }} in AWS

There are multiple ways to set up {{ productName }} in EC2:

=== "Set Up from the AWS Marketplace"

	1. Log in to AWS marketplace and open the [{{ productName }} product page in AWS](https://aws.amazon.com/marketplace/pp/prodview-anarfo2osmhl4?sr=0-1&ref_=beagle&applicationId=AWSMPContessa#pdp-reviews).
	2. Click **[View Purchase Options]** and [subscribe](https://docs.aws.amazon.com/marketplace/latest/buyerguide/buyer-ami-contracts.html) to {{ productName }}.<br>
	![XUinAWS-marketplace](../assets/images/articles/xu/XUinAWS-marketplace.png)
	3. Click **[Continue to Configuration]** to select a software version and a region for hosting {{ productName }}.
	4. Click **[Continue to Launch]**. <br>
	![XUinAWS-configure](../assets/images/articles/xu/XUinAWS-configure.png)
	5. In **Choose Action** select *Launch through EC2* to access all options for configuring a virtual machine in EC2. 
	![XUinAWS-launch](../assets/images/articles/xu/XUinAWS-launch.png)
	6. Click **[Launch]**. The EC2 console opens.
	7. Set up your virtual machine, see [AWS Documentation: Launch an Instance](https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/EC2_GetStarted.html#ec2-launch-instance).
	The {{ productName }} AMI is already selected.
	8. Start the EC2 instance and connect to it, see [AWS Documentation: Connect to an Instance](https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/EC2_GetStarted.html#ec2-connect-to-instance-windows).
	9. When connected, the {{ productName }} Designer is located on the Desktop. Start the {{ productName }} Designer.
	10. Set up an SAP connection and extractions, see [Documentation: Getting Started](../getting-started.md).

=== "Set Up from the EC2 Console"

	1. Open the [Amazon EC2 console](https://console.aws.amazon.com/ec2/).
	2. In the EC2 console dashboard, click **[Launch instance]**.<br>
	![XUinAWS-XUinAWS-ec2-launch](../assets/images/articles/xu/XUinAWS-ec2-launch.png)
	3. In the *Quick Start* tab of **Application and OS Images (Amazon Machine Image)** click **[Browse more AMIs]**. <br>
	![XUinAWS-browseAMIs](../assets/images/articles/xu/XUinAWS-browseAMIs.png)
	4. Enter "{{ productName }}" in the search bar. {{ productName }} is listed under *AWS Marketplace AMIs*.
	5. Click **[Select]**. The application returns to the EC2 console.<br>
	![XUinAWS-ec2-select](../assets/images/articles/xu/XUinAWS-ec2-select.png)
	6. Set up your virtual machine, see [AWS Documentation: Launch an Instance](https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/EC2_GetStarted.html#ec2-launch-instance).
	The {{ productName }} AMI is already selected.
	7. Start the EC2 instance and connect to it, see [AWS Documentation: Connect to an Instance](https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/EC2_GetStarted.html#ec2-connect-to-instance-windows).
	8. When connected, the {{ productName }} Designer is located on the Desktop. 
	9. Start the {{ productName }} Designer and click **[:designer-connect: Connect]** to [connect to the {{ productName }} Server](../documentation/designer.md/#connect-the-designer-to-a-server).<br>

	!!! note
		If you are not already [subscribed](https://docs.aws.amazon.com/marketplace/latest/buyerguide/buyer-ami-contracts.html) to {{ productName }}, launching the EC2 instance automatically adds the subscription.


## Getting Started on AWS

After {{ productName }} is set up on AWS,  the following steps are required to start data extracting data from SAP:
- [Connect {{ productName }} to an SAP system](../getting-started.md#connect-to-sap).
- [Create an extraction](../getting-started.md#create-an-extraction) that defines which SAP data to extract.
- [Testrun the extraction](../getting-started.md#run-an-extraction) in the {{ productName }} Designer to preview the extracted data.
- [Add a destination](../getting-started.md#write-data-to-a-target-environment) to connect {{ productName }} to load the data into a target environment.
- [Assign the destination to your extraction](../getting-started.md#assign-a-destination-to-an-extraction).
- Optional: [Automate your extractions](../documentation/execute-and-automate/index.md) using a scheduler, script or ETL tool.
