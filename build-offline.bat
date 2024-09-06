@echo off

setlocal enabledelayedexpansion

echo Enter numbers between 0 and 6 to serve websites. Separate multiple numbers with spaces:
echo 2 - yunIO
echo 3 - Board Connector
echo 4 - Xtract Universal
echo 5 - Xtract IS
echo 6 - Xtract for Alteryx
set /p numbers=


for %%i in (%numbers%) do (
    set folder=
    set port=
	set product=
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
    if not defined folder (
        echo Invalid input for website number %%i
    ) else (
        start "!product!" cmd /c "cd /d !folder! && mkdocs build
	)
)

pause