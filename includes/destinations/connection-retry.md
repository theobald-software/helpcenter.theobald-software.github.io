

Connection retry is a built-in function of the {{ page.meta.title }} destination. 
The retry function is activated by default.

Connection retry is a functionality that prevents extractions from failing in case of transient connection interruptions to {{ page.meta.title }}. 
Xtract Universal follows an exponential retry strategy. The selected exponential strategy results in seven retry attempts and an overall timespan of 140 seconds. 
If a connection is not established during the timespan of 140 seconds, the extraction fails.
