import { IWindowHandler } from "./IWindowHandler";

export class WindowHandler implements IWindowHandler {
    VIEW_PATH: string;    browserWindows: [string, Electron.BrowserWindow][];
    showWindow(view: string, id?: number | undefined): void {
        throw new Error("Method not implemented.");
    }
    hideWindow(view: string, id?: number | undefined): void {
        throw new Error("Method not implemented.");
    }
    closeWindow(view: string, id?: number | undefined): void {
        throw new Error("Method not implemented.");
    }
    createWindow(view: string, options?: Electron.BrowserWindowConstructorOptions | undefined): void {
        throw new Error("Method not implemented.");
    }
    deleteWindow(view: string, id?: number | undefined): void {
        throw new Error("Method not implemented.");
    }
    browserWindowExist(view: string, id?: number | undefined): boolean {
        throw new Error("Method not implemented.");
    }
    getBrowserWindow(view: string, id?: number | undefined): Electron.BrowserWindow | null {
        throw new Error("Method not implemented.");
    }


}