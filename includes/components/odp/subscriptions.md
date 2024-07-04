
This page contains a description of the "Show active subscriptions" menu in the {{ odp }} {{ component }}.
To open the menu, click **Show active subscriptions** in the main window of the {{ component }}.

![open-show-active-subscriptions](../../assets/images/{{ abbr }}/documentation/odp/open-show-active-subscriptions.png){:class="img-responsive"}

### Show Active Subscriptions

The {{ odp }} {{ component }} acts as a subscriber (consumer) to [data providers](provider-contexts.md) to extract data from the data provider.
The window "Delta Subscriptions for product" displays details about subscribers.

![subscriptions](../../assets/images/documentation/components/odp/subscriptions.png){:class="img-responsive"}

Column Name | Description
------------| -------------
Name | Technical name of all subscriptions of a specific Theobald Software Xtract product (e.g., Xtract Universal).
Process | Technical name of a subscription
R. (number of requests) | Number of executed delta requests
Last request | Timestamp of the last delta request 
<!--- Created | Timestamp of the init request -->

To delete a subscription, click **[:trashbin:]** on the right side of the window.

!!! tip
	The information displayed in the "Delta Subscriptions for product" window can also be viewed in SAP transaction *ODQMON*.  

