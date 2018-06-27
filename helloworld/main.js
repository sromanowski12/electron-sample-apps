const electron = require('electron');
const {app, BrowserWindow} = require('electron');
const Menu = electorn.Menu;
const menuTemplate = [
  {
    label: 'Electron',
    submenu: [
      {
        label: 'About ...',
        click: () => {
          console.log('About Clicked');
        }
      }
    ]
  }
];
let mainWindow;

app.on('ready', function () {
  new BrowserWindow();
  const menuTemplate = [
    {
      label: 'Electron'
    }
  ];
  const menu = Menu.buildFromTemplate(menuTemplate);
  Menu.setApplicationMenu(menu);
});
