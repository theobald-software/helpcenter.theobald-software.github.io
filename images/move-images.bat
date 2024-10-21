@echo off
setlocal enabledelayedexpansion

:: Loop through all files starting with '-' in the current folder and subfolders (adjust extensions if necessary)
for /r %%f in (-*.png -*.jpg -*.gif -*.txt -*.pdf) do (
    :: Get the filename without the path
    set "filename=%%~nxf"
    :: Remove the '-' prefix from the filename
    set "newfilename=!filename:~1!"
    
    :: Rename the file by removing the '-' prefix
    ren "%%f" "!newfilename!"
)

echo All files starting with '-' have been renamed.
pause
