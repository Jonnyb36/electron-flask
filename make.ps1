$ErrorActionPreference = "Stop"

function Abort-OnError {
    if ($LASTEXITCODE) {
        ""
        Write-Host "Last operation failed, aborting build" -ForegroundColor Red
        exit
    }
}

[System.Environment]::SetEnvironmentVariable("PIPENV_VENV_IN_PROJECT", "1")
[System.Environment]::SetEnvironmentVariable("PYTHONOPTIMIZE", "1")

# # build the static webpage
# cd .\my_app
# yarn build
# cd ..

# add onefile below when working
pipenv run pyinstaller ..\run_app.py -n "Flask_Electron" -y --clean --onefile `
--add-data "./build/;build" `
--hiddenimport pkg_resources.py2_warn `
--distpath dist-python
Abort-OnError

## cd .\my_app
# electron-builder

# # clean up
# rm -rf build
# rm -rf run_app.spec 
# rm -rf dist-python

# # Remove mkl files as bloat the tool
# Remove-Item .\dist\Flask_Electron\mkl_*.dll
# Abort-OnError