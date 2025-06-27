The following article shows how to run Xtract Universal in a virtual machine on an AWS EC2 instance.

AWS enables running virtual servers (instances) in the cloud, see [AWS Documentation: EC2](https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/concepts.html). Theobald Software offers Xtract Universal as an [Amazon Machine Image (AMI)](https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/AMIs.html) for the following customer purposes:

- Xtract Universal evaluation
- Hosting of Xtract Universal in the cloud

The Xtract Universal AMI can be selected when launching an instance in AWS.

## Pre-Configured Settings

When starting an Xtract Universal instance, the following settings are pre-configured:

| | Configuration | Resources | | --- | --- | --- | | License | Xtract Universal is already installed and running with a 30-days trial license. You can replace the trial license with your regular license. | [Documentation: Licensing](../../documentation/setup/license/) | | Software Updates | The pre-installed version of Xtract Universal is displayed in the AWS marketplace. Make sure to keep Xtract Universal up-to-date with the latest software releases, see [Xtract Universal Changelog](../../changelog/). | [Documentation: Installation and Update](../../documentation/setup/update/) | | Server Settings | The webserver is pre-configured with a self-signed TLS certificate and can be accessed in a browser via `https://xtractuniversal:8165/` from within the rdp session. | [Documentation: Server Settings](../../documentation/server/server-settings/) | | Data Extractions | There are no default SAP data extractions. To get started with Xtract Universal, create an SAP connection and start creating extractions. | [Getting Started on AWS](#getting-started-on-aws) |

## Prerequisites

- Access to an AWS account
- Access to the [EC2](https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/concepts.html) console

## Set Up Xtract Universal in AWS

There are multiple ways to set up Xtract Universal in EC2:

1. Log in to AWS marketplace and open the [Xtract Universal product page in AWS](https://aws.amazon.com/marketplace/pp/prodview-anarfo2osmhl4?sr=0-1&ref_=beagle&applicationId=AWSMPContessa#pdp-reviews).

1. Click **[View Purchase Options]** and [subscribe](https://docs.aws.amazon.com/marketplace/latest/buyerguide/buyer-ami-contracts.html) to Xtract Universal.

1. Click **[Continue to Configuration]** to select a software version and a region for hosting Xtract Universal.

1. Click **[Continue to Launch]**.

1. In **Choose Action** select *Launch through EC2* to access all options for configuring a virtual machine in EC2.

1. Click **[Launch]**. The EC2 console opens.

1. Set up your virtual machine, see [AWS Documentation: Launch an Instance](https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/EC2_GetStarted.html#ec2-launch-instance). The Xtract Universal AMI is already selected.

1. Start the EC2 instance and connect to it, see [AWS Documentation: Connect to an Instance](https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/EC2_GetStarted.html#ec2-connect-to-instance-windows).

1. When connected, the Xtract Universal Designer is located on the Desktop. Start the Xtract Universal Designer.

1. Set up an SAP connection and extractions, see [Documentation: Getting Started](../../getting-started/).

1. Open the [Amazon EC2 console](https://console.aws.amazon.com/ec2/).

1. In the EC2 console dashboard, click **[Launch instance]**.

1. In the *Quick Start* tab of **Application and OS Images (Amazon Machine Image)** click **[Browse more AMIs]**.

1. Enter "Xtract Universal" in the search bar. Xtract Universal is listed under *AWS Marketplace AMIs*.

1. Click **[Select]**. The application returns to the EC2 console.

1. Set up your virtual machine, see [AWS Documentation: Launch an Instance](https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/EC2_GetStarted.html#ec2-launch-instance). The Xtract Universal AMI is already selected.

1. Start the EC2 instance and connect to it, see [AWS Documentation: Connect to an Instance](https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/EC2_GetStarted.html#ec2-connect-to-instance-windows).

1. When connected, the Xtract Universal Designer is located on the Desktop.

1. Start the Xtract Universal Designer and click **[ Connect]** to [connect to the Xtract Universal Server](../../documentation/designer/#connect-the-designer-to-a-server).

Note

If you are not already [subscribed](https://docs.aws.amazon.com/marketplace/latest/buyerguide/buyer-ami-contracts.html) to Xtract Universal, launching the EC2 instance automatically adds the subscription.

## Getting Started on AWS

After Xtract Universal is set up on AWS, the following steps are required to start data extracting data from SAP:

- [Connect Xtract Universal to an SAP system](../../getting-started/#connect-to-sap).
- [Create an extraction](../../getting-started/#create-an-extraction) that defines which SAP data to extract.
- [Testrun the extraction](../../getting-started/#run-an-extraction) in the Xtract Universal Designer to preview the extracted data.
- [Add a destination](../../getting-started/#write-data-to-a-target-environment) to connect Xtract Universal to load the data into a target environment.
- Optional: [Automate your extractions](../../documentation/execute-and-automate/) using a scheduler, script or ETL tool.
