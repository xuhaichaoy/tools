import type { BrowserWindow} from 'electron';
import { app, protocol } from 'electron';
import log from 'electron-log';
import installExtension, {
  REACT_DEVELOPER_TOOLS,
} from 'electron-devtools-installer';

import * as application from './services/application';
import * as menu from './services/menu';

log.transports.file.level = 'info';

log.info('(main/index) app start');
log.info(`(main/index) log file at ${log.transports.file.file}`);


const isDevelopment = process.env.NODE_ENV === 'development';
let mainWindow: BrowserWindow;

protocol.registerSchemesAsPrivileged([
  { scheme: 'app', privileges: { secure: true, standard: true } },
]);


app.on('ready', async () => {
  log.info('(main/index) app ready');
  menu.init();
  const win: BrowserWindow = await application.init();
  if (isDevelopment) {
    await installExtension(REACT_DEVELOPER_TOOLS)
      .then((name) => {
        log.info(`Added Extension:  ${name}`);
      })
      .catch((err) => {
        log.info('An error occurred: ', err);
      });
  }

});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    application.init();
  }
});

app.on('quit', () => {
  log.info('(main/index) app quit');
  log.info('(main/index) <<<<<<<<<<<<<<<<<<<');
});


