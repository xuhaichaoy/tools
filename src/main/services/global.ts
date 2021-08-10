/* eslint-disable @typescript-eslint/no-namespace */
declare global {
  namespace NodeJS {
    interface Global {
      windows: Electron.BrowserWindow;
      OpenFilter: defaultType;
      Bwindow: any;
    }
  }
}

interface defaultType {
  openfilter: any;
}

export default global;
