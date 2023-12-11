title HelpCenter
cd C:\Source\helpcenter.theobald-software.github.io
start "HelpCenter" /B mkdocs serve -a localhost:8000 --dirtyreload
start "" /B http://localhost:8000/
pause
