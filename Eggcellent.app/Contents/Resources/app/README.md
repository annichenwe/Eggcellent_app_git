# Electron Scaffolding Project

This projects contains a simple foundation to create your first Electron project.

The code is based on the official [electron quick start
demo](https://electron.atom.io/docs/tutorial/quick-start/).


Follow the "Build steps" guide to create your own electron project from
scratch.

## Download & install

Download and install the project on your computer using the [git cli tool](https://git-scm.com/downloads)

```bash
git clone https://github.com/interaksjonsdesign/electron-scaffolding-project.git
cd electron-scaffolding-project/
```

Use npm to install electron and  electron-packager globalt (-g)

```bash
npm install -g electron
npm install -g electron-packager
```

## Run the project

```bash
electron .
```

## Package the app

```bash
electron-packager . --icon "app_icons/Icon.icns" --overwrite
```
Your app will be in a folder called simple-electron-app-darwin-x64


## Build steps
To build your own versjon of this project please follow these steps:


**1\.** Create the main project

```bash
npm init
npm install --save electron
touch main.js
```


**2\.** Add following code to the main.js file

```javascript
// Require Electron and Node.js modules
var electron = require('electron');
var app = electron.app;
var BrowserWindow = electron.BrowserWindow;

var path = require('path');
var url = require('url');


// Global reference of the window object
var win;


function createWindow () {
  // Create the browser window.
  win = new BrowserWindow({width: 800, height: 600})

  // and load the index.html of the app.
  win.loadURL(url.format({
    pathname: path.join(__dirname, 'www/index.html'),
    protocol: 'file:',
    slashes: true
  }));

  // Open the DevTools.
  //win.webContents.openDevTools()

  // Emitted when the window is closed.
  win.on('closed', function(){
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null
  });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', function(){
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  };
});

app.on('activate', function(){
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

```


**3\.** Create app content

```bash
mkdir www
cd www
touch index.html
cd ..
```


**4\.** Add some content to the index.html file

```html
<!DOCTYPE html>
<html>
	<head>
    	<meta charset="utf-8">
		<title>Hello Electron</title>
	</head>
	<body>
		<h1>Hello Electron</h1>
	</body>
</html>
```


**5\.** Run the project

```bash
electron .
```
Hit [Ctrl+C] to close the project.


**6\.** Add the Icon

Download the icon file from GitHub: 
[https://github.com/interaksjonsdesign/Electron-Scaffolding-Project/raw/master/app_icons/Icon.icns](https://github.com/interaksjonsdesign/Electron-Scaffolding-Project/raw/master/app_icons/Icon.icns)

Create an icon folder.

```bash
mkdir app_icons
```
And add the Icon.icns file to the app_icons folder.


**7\.** Build the app

Add the build tool ["electron-packager"](https://www.npmjs.com/package/electron-packager)
(you may need to run the npm command as sudo)

```bash
npm install -g electron-packager
```

To build the app

```bash
electron-packager . --icon "app_icons/Icon.icns" --overwrite
```
Your app will be in a folder called simple-electron-app-darwin-x64


## Note
The icon used in this example is created with the free mac app [Image2Icon](http://www.img2icnsapp.com/)


