# code3d README

nodejs version working for me 14.21.3 and 18.15.0  
npm version 6.14.18

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
``` 
npm run dev  
```

build widget for Visual Studio Code
``` 
npm run build
```

open buildjs in Visual Studio Code
1. open file **extension.js** in VSC 
2. press **F5**
3. in opened window press **CNTRL+SHIFT+P**
4. in command panel write **code3DDDDDDDDD...**  
for open console for develop
1. in opened window press **CNTRL+SHIFT+P**
2. in command panel write **Developer: Toggle Develper Tools**

for make Visual Studio Code extension
``` 
npm run build_vsix
``` 

for add builded extension to Visual Studio Code as extension
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

# Enjoy!!!