# TOPS README
Text operations made easy!

## Description
Quickly create dynamically loaded re-usable commands for applying operations/macros to selected text using Python. 

## Requirements
For getting started with VSCode plugin development look at: https://code.visualstudio.com/api/get-started/your-first-extension

When you're familiar with the basics, working with the code of this repo is as simple as:
```sh
git clone <repo>  # Get the repository
cd <repo>         # Navigate to its directory

npm install       # Install the dependencies from the package.json
code .            # Open the directory in VSCode

<F5>              # Run debug - opens new window with plugin installed
```
## Keybindings
This extension contributes the following keybinding:

* `Ctrl-\`: Runs `tops.applyOperation`
## Extension Settings
This extension contributes the following settings:

* `tops.scriptsRoot`: Location for *your* textual operation scripts. When not set, the examples will be loaded.
* `tops.pythonExecutablePath`: Location of the python executable you want to use for running your operations.

## Known Issues
TBD