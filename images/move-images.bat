@echo off
setlocal enabledelayedexpansion

:: Loop through all PNG files (adjust the extension if necessary)
for /r %%f in (bc-*.png) do (
    :: Get the directory where the file is located
    set "dir=%%~dpf"
    :: Get the filename without the path
    set "filename=%%~nxf"
    :: Remove the 'xu-' prefix from the filename
    set "newfilename=!filename:~3!"
    
    :: Create a new 'xu' subfolder in the current file's directory
    if not exist "%%~dpf\bc\" (
        mkdir "%%~dpf\bc"
    )

    :: Move the file into the 'xu' folder and rename it
    move "%%f" "%%~dpf\bc\!newfilename!"
)

echo All bc- files have been moved to bc subfolders and renamed.
pause
