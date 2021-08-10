import type {MenuItemConstructorOptions,MenuItem } from 'electron';
import { Menu } from 'electron';
import log from 'electron-log';

function getTemplate(): MenuItemConstructorOptions[] | MenuItem[] {
  return [
    {
      label: '文件',
      submenu: [
        { role: 'hide' },
        { role: 'hideOthers' },
        { role: 'unhide' },
        { type: 'separator' },
        { role: 'quit' },
      ],
    },
    {
      label: '编辑',
      submenu: [
        { role: 'undo' },
        { role: 'redo' },
        { type: 'separator' },
        { role: 'cut' },
        { role: 'copy' },
        { role: 'paste' },
        { role: 'selectAll' },
      ],
    },
    {
      label: '工具',
      submenu: [
        { role: 'reload' },
        { role: 'toggleDevTools' },
        { type: 'separator' },
        { role: 'togglefullscreen' },
      ],
    },
    {
      label: '工程',
      submenu: [
        { role: 'minimize' },
        { role: 'close' },
      ],
    },
    {
      label: '换肤',
      submenu: [
        { role: 'minimize' },
        { role: 'close' },
      ],
    },
    {
      label: '帮助',
      submenu: [
        { role: 'minimize' },
        { role: 'close' },
      ],
    },
  ];
}

export function init(): void{
  log.info('(menu) init');
  const menu = Menu.buildFromTemplate(getTemplate());
  Menu.setApplicationMenu(menu);
}
