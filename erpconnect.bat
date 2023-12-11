title ERPConnect
cd projects\erpconnect
start "ERPConnect" /B http://localhost:8001/
start "ERPConnect" /B /wait mkdocs serve -a localhost:8001 --dirtyreload
pause