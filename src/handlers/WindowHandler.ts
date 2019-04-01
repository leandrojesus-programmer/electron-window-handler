import { IWindowHandler } from "./IWindowHandler";
import { BrowserWindow, BrowserWindowConstructorOptions } from "electron";

export class WindowHandler implements IWindowHandler {
    
    VIEW_PATH: string;    
    browserWindows: [string, BrowserWindow | null][];

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
        const identification: string | number = id ? id : view

        
        this.browserWindows.forEach(function ([view, browserWindow]) {
            if (view === identification || browserWindow!.id === identification) {
                browserWindow = null
            }
        })
        
    }

    createWindow(view: string, options?: BrowserWindowConstructorOptions | undefined): void {
        const window = new BrowserWindow(options)

        this.browserWindows.push([view, window])

        window.loadFile(view)
    }

    deleteWindow(view: string, id?: number | undefined): void {
        const identification: string | number = id ? id : view

        this.browserWindows.forEach(function ([view, browserWindow], index, array) {
            if (view === identification || browserWindow!.id === identification) {
                array.splice(index, 1)
            }
        })

    }

    browserWindowExist(view: string, id?: number | undefined): boolean {
        const identification: string | number = id ? id : view

        let exists = false
        this.browserWindows.forEach(function ([view, browserWindow]) {
            if (view === identification || browserWindow!.id === identification) {
                exists = true
            }
        })

        return exists
    }

    getBrowserWindow(view: string, id?: number | undefined): BrowserWindow | null {             
        const identification: string | number = id ? id : view

        let window: BrowserWindow | null = null;
        this.browserWindows.forEach(function ([view, browserWindow]) {
            if (view === identification || browserWindow!.id === identification) {
                window = browserWindow
            }
        })

        return window        
    }

}