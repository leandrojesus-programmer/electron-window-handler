import { IWindowHandler } from "./IWindowHandler";
import { BrowserWindow, BrowserWindowConstructorOptions } from "electron";

export class WindowHandler implements IWindowHandler {
    
    VIEW_PATH: string;    
    browserWindows: [string, BrowserWindow][];

    constructor(){
        this.VIEW_PATH = ""
        this.browserWindows = []
    }

    showWindow(view: string, id?: number | undefined): void {
        throw new Error("Method not implemented.");
    }

    hideWindow(view: string, id?: number | undefined): void {
        throw new Error("Method not implemented.");
    }

    closeWindow(view: string, id?: number | undefined): void {
        throw new Error("Method not implemented.");
    }

    createWindow(view: string, options?: BrowserWindowConstructorOptions | undefined): void {
        throw new Error("Method not implemented.");
    }

    deleteWindow(view: string, id?: number | undefined): void {
        throw new Error("Method not implemented.");
    }

    browserWindowExist(view: string, id?: number | undefined): boolean {
        throw new Error("Method not implemented.");
    }

    getBrowserWindow(view: string, id?: number | undefined): BrowserWindow | null {
        throw new Error("Method not implemented.");
    }

}