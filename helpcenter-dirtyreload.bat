title HelpCenter
@echo off
if _%1_==_payload_  goto :payload
:getadmin
    echo %~nx0: elevating self
    set vbs=%temp%\getadmin.vbs
    echo Set UAC = CreateObject^("Shell.Application"^)                >> "%vbs%"
    echo UAC.ShellExecute "%~s0", "payload %~sdp0 %*", "", "runas", 1 >> "%vbs%"
    "%temp%\getadmin.vbs"
    del "%temp%\getadmin.vbs"
 goto :eof
 :payload
::ENTER YOUR CODE BELOW::
cd C:\Source\helpcenter.theobald-software.github.io
start "HelpCenter" /B mkdocs serve --dirtyreload
rem start "" /B http://localhost:8000/
pause
