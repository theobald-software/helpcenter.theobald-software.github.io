@echo off
setlocal enabledelayedexpansion

:: Loop through all PNG files (adjust the extension if necessary)
for /r %%f in (xfa-*.png) do (
    :: Get the directory where the file is located
    set "dir=%%~dpf"
    :: Get the filename without the path
    set "filename=%%~nxf"
    :: Remove the 'xu-' prefix from the filename
    set "newfilename=!filename:~3!"
    
    :: Create a new 'xu' subfolder in the current file's directory
    if not exist "%%~dpf\xfa\" (
        mkdir "%%~dpf\xfa"
    )

    :: Move the file into the 'xu' folder and rename it
    move "%%f" "%%~dpf\xfa\!newfilename!"
)

echo All xfa- files have been moved to xfa subfolders and renamed.
pause
