import { app, BrowserWindow } from 'electron';
import isDev from 'electron-is-dev';
import path from 'path';

function createWindow() {
  // 创建浏览器窗口
  let win = new BrowserWindow({
    width: 886,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  const URI = isDev ? 'http://localhost:3000' : `file://${path.resolve(__dirname, '../src')}`;
  win.loadURL(`${URI}/index.html`);
}

app.whenReady().then(createWindow);
