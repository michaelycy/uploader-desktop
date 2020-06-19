import { app, BrowserWindow } from 'electron';
import isDev from 'electron-is-dev';
import path from 'path';
import url from 'url';

let win: BrowserWindow;
function createWindow() {
  // 创建浏览器窗口
  win = new BrowserWindow({
    width: 886,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  const urlPath = url.format(
    isDev
      ? 'http://localhost:3000/index.html'
      : {
          protocol: 'file',
          pathname: path.resolve(__dirname, '../src/index.html'),
          slashes: true,
        }
  );

  win.loadURL(urlPath);
  // 禁用安全警告
  process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';
}

app.whenReady().then(createWindow);

// 在所有窗口都关闭时结束程序
app.on('window-all-closed', () => {
  // 在 macOS 中，一般会让应用及选单列接续留着，
  // 除非使用者按了 Cmd + Q 确定终止
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // 在 macOS 中，一般会在使用者按了 Dock 图标
  // 且沒有其他视窗开启的情況下，
  // 重新在应用程式里建立视图。
  if (win === null) {
    createWindow();
  }
});
