import { IWindowHandler } from "./IWindowHandler";
import { BrowserWindow, BrowserWindowConstructorOptions } from "electron";

export class WindowHandler implements IWindowHandler {
    
    private VIEW_PATH: string;    
    private browserWindows: [string, BrowserWindow | null][];

    constructor()
    constructor(viewPath?: string | undefined){  
        if (!viewPath) {
            this.VIEW_PATH = "../views/"
        } 
        else {
            this.VIEW_PATH = viewPath
        }

        this.browserWindows = []
    }

    showWindow(view: string, id?: number | undefined): void {
        const identification: string | number = id ? id : view
   
        this.browserWindows.forEach(function ([view, browserWindow]) {
            if (view === identification || browserWindow!.id === identification) {
                browserWindow!.show()
            }
        })
    }

    hideWindow(view: string, id?: number | undefined): void {
        const identification: string | number = id ? id : view
   
        this.browserWindows.forEach(function ([view, browserWindow]) {
            if (view === identification || browserWindow!.id === identification) {
                browserWindow!.hide()
            }
        })
    }

    closeWindow(view: string, id?: number | undefined): void {
        const identification: string | number = id ? id : view
   
        this.browserWindows.forEach(([view, browserWindow]) => {
            if (view === identification || browserWindow!.id === identification) {
                browserWindow!.close()
                this.deleteWindow(view)
            }
        })
        
    }

    createWindow(view: string, options?: BrowserWindowConstructorOptions | undefined): void {
        const window = new BrowserWindow(options)

        this.browserWindows.push([view, window])

        window.loadFile(view)
    }

    addChildWindow(parentView: string, childView: string, childOptions?: BrowserWindowConstructorOptions | undefined, parentId?: number | undefined): void {
        throw new Error("Method not implemented.");
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