import is from 'electron-is';
import { BrowserWindow } from 'electron';
import createProtocol from 'umi-plugin-electron-builder/lib/createProtocol';

let count = 0;

export function create(opts?: Electron.BrowserWindowConstructorOptions | undefined) {
  count += 1;
  const win: BrowserWindow | null = new BrowserWindow(opts);
  return win;
}

export function getCount() {
  return count;
}

export function getPath() {
  let path: string;
  if (is.dev()) {
    path = 'http://localhost:8000';
  } else {
    createProtocol('app');
    path = 'app://./index.html';
  }
  return path;
}
