# code3d README

nodejs version working for me 14.21.3 and 18.15.0  
npm version 6.14.18

prepare project
---

```
npm i
```

```
cd src/js_dev
```

```
npm i
```

```
cd ../..
```

run widget in browser
---
``` 
npm run dev  
```

build widget for Visual Studio Code
---
``` 
npm run build
```

open buildjs in Visual Studio Code
---
1. open file **extension.js** in VSC 
2. press **F5**
3. in opened window press **CNTRL+SHIFT+P**
4. in command panel write **code3DDDDDDDDD...**  
for open console for develop:
---
5. in opened window press **CNTRL+SHIFT+P**
6. in command panel write **Developer: Toggle Develper Tools**

for build Visual Studio Code extension file
---
``` 
npm run build_vsix
y
y
``` 

for install result to Visual Studio Code as extension, from builded extension file
---
1. open Extensions in left bar
2. click on **[...]** near EXTENSIONS in top side
3. select **INSTALL FROM VSIX...**
4. choise file **code3d-0.0.1.vsix**
5. restart Visual Studio Code
6. press **CNTRL+SHIFT+P**
7. in command panel write **code3DDDDDDDDD...**


# Gides for help
guide for build and publich
https://code.visualstudio.com/api/working-with-extensions/publishing-extension  
guide webview api
https://code.visualstudio.com/api/extension-guides/webview 


## Features

Describe specific features of your extension including screenshots of your extension in action. Image paths are relative to this README file.

For example if there is an image subfolder under your extension project workspace:

\!\[feature X\]\(images/feature-x.png\)

> Tip: Many popular extensions utilize animations. This is an excellent way to show off your extension! We recommend short, focused animations that are easy to follow.

## Requirements

If you have any requirements or dependencies, add a section describing those and how to install and configure them.

## Extension Settings

Include if your extension adds any VS Code settings through the `contributes.configuration` extension point.

For example:

This extension contributes the following settings:

* `myExtension.enable`: Enable/disable this extension.
* `myExtension.thing`: Set to `blah` to do something.

## Known Issues

Calling out known issues can help limit users opening duplicate issues against your extension.

## Release Notes

Users appreciate release notes as you update your extension.

### 1.0.0

Initial release of ...

### 1.0.1

Fixed issue #.

### 1.1.0

Added features X, Y, and Z.

---

## Working with Markdown

You can author your README using Visual Studio Code.  Here are some useful editor keyboard shortcuts:

* Split the editor (`Cmd+\` on macOS or `Ctrl+\` on Windows and Linux)
* Toggle preview (`Shift+Cmd+V` on macOS or `Shift+Ctrl+V` on Windows and Linux)
* Press `Ctrl+Space` (Windows, Linux, macOS) to see a list of Markdown snippets

## For more information

* [Visual Studio Code's Markdown Support](http://code.visualstudio.com/docs/languages/markdown)
* [Markdown Syntax Reference](https://help.github.com/articles/markdown-basics/)

**Enjoy!**
