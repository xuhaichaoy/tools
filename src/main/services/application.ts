import type { BrowserWindow } from 'electron';
import { create, getPath } from './window';

export async function init(): Promise<BrowserWindow> {
  const win = create({
    width: 1200,
    // height: 620,
    height: 740,
    webPreferences: {
      contextIsolation: false,
      nodeIntegration: true,
      enableRemoteModule: true,
      // preload: path.join(__dirname, 'preload.js'),
    },
    // frame: false,
  });
  await win.loadURL(getPath());
  return win;
}
