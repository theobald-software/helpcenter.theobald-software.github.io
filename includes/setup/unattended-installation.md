
The installation of {{ productName }} can be initiated unattended without the GUI in a non-interactive way via the Windows Command Prompt.
Execute the `{{ setup }}Setup.exe` via command line and use the switch `--unattended`. 

``` console
start /wait {{ setup }}Setup.exe --unattended
```

`{{ setup }}Setup.exe` is Windows applications, meaning the Windows Command Prompt does not wait until the installation is complete. 
To wait until the installation is complete, use the [start](https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/start) command with the `/wait` switch. 

!!! note
	All switches are case sensitive.
