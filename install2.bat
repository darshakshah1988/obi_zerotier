@echo off
set "sourceFolder=.\obiSoft_client"
set "destinationFolder=C:\obi\client"

if not exist "%sourceFolder%" (
    echo Source folder does not exist.
    exit /b
)

if not exist "%destinationFolder%" (
    mkdir "%destinationFolder%"
)

xcopy "%sourceFolder%" "%destinationFolder%" /E /I /Y
echo Folder copied successfully.


call install3.bat