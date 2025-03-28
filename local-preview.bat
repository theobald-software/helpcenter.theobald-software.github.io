@echo off

setlocal enabledelayedexpansion

echo Enter numbers between 0 and 6 to serve websites. Separate multiple numbers with spaces:
echo 0 - All
echo 1 - ERPConnect
echo 2 - yunIO
echo 3 - Board Connector
echo 4 - Xtract Universal
echo 5 - Xtract IS
echo 6 - Xtract for Alteryx
echo 7 - Xtract Core
set /p numbers=


echo Enter optional arguments for mkdocs serve command. Leave empty for none:
echo dirty - only re-build files that have changed
echo help - show all input options
echo quiet - silence warnings
echo strict - abort the build on any warnings
echo watch PATH - a directory or file to watch for live reloading (can be supplied multiple times)
set /p optional_args=


for %%i in (%numbers%) do (
    set folder=
    set port=
	set product=
    if %%i==0 (
        set "folder=C:\Source\helpcenter.theobald-software.github.io\"
        set "port=8000"
		set "product=All"
    )
    if %%i==1 (
        set "folder=C:\Source\helpcenter.theobald-software.github.io\projects\erpconnect"
        set "port=8001"
		set "product=ERPConnect"
    )
    if %%i==2 (
        set "folder=C:\Source\helpcenter.theobald-software.github.io\projects\yunio"
        set "port=8002"
		set "product=yunIO"
    )
    if %%i==3 (
        set "folder=C:\Source\helpcenter.theobald-software.github.io\projects\board-connector"
        set "port=8003"
		set "product=Board Connector"
    )
    if %%i==4 (
        set "folder=C:\Source\helpcenter.theobald-software.github.io\projects\xtract-universal"
        set "port=8004"
		set "product=Xtract Universal"
    )
    if %%i==5 (
        set "folder=C:\Source\helpcenter.theobald-software.github.io\projects\xtract-is"
        set "port=8005"
		set "product=Xtract IS"
    )
    if %%i==6 (
        set "folder=C:\Source\helpcenter.theobald-software.github.io\projects\xtract-for-alteryx"
        set "port=8006"
		set "product=Xtract for Alteryx"
    )
	if %%i==7 (
        set "folder=C:\Source\helpcenter.theobald-software.github.io\projects\xtract-core"
        set "port=8007"
		set "product=Xtract Core"
    )
    if not defined folder (
        echo Invalid input for website number %%i
    ) else (
        if "!optional_args!"=="" (
            start "!product!" cmd /c "cd /d !folder! && mkdocs serve -a localhost:!port!" && start "" "http://localhost:!port!"
        ) else (
            start "!product!" cmd /c "cd /d !folder! && mkdocs serve -a localhost:!port! --!optional_args!" && start "" "http://localhost:!port!"
        )
	)
)

pause