import { BrowserWindow, BrowserWindowConstructorOptions } from "electron";

export interface IWindowHandler {
    // Stores the to views folder
    VIEW_PATH: string;
    // Stores BrowserWindows with respective view  
    browserWindows: [string, BrowserWindow | null][];
    /**
     * Invokes the method .show() from the BrowserWindow which has the specified view
     * or BrowserWindow id
     * @param view browserwindow view
     * @param id browserwindow id
     */
    showWindow(view:string,id?:number): void;
    /**
     * Invokes the method .hide() from the BrowserWindow which has the specified view
     * or BrowserWindow id
     * @param view browserwindow view
     * @param id browserwindow id
     */
    hideWindow(view:string,id?:number): void;   
    /**
     * Invokes the method .close() from the BrowserWindow which has the specified view
     * or BrowserWindow id
     * @param view browserwindow view
     * @param id browserwindow id
     */
    closeWindow(view:string,id?:number): void;
    /**
     * Creates a BrowserWindow and stores it on browserWindows
     * @param view browserwindow view
     * @param options browserwindow constructor options
     */
    createWindow(view:string,options?:BrowserWindowConstructorOptions): void;
    /**
     * Removes from browserWindows the BrowserWindow which has the specified view 
     * or BrowserWindow id
     * @param view browserwindow view
     * @param id browserwindow id
     */
    deleteWindow(view:string,id?:number): void;
    /**
     * Checks if the BrowserWindow which has the specified view 
     * or BrowserWindow id exist on browserWindows. 
     * Returns the true or false
     * @param view browserwindow view
     * @param options browserwindow constructor options
     */
    browserWindowExist(view:string,id?:number): boolean;
    /**
     * Gets from browserWindows a BrowserWindow which has the specified view 
     * or BrowserWindow id.
     * Returns the BrowserWindow or null
     * @param view browserwindow view
     * @param options browserwindow constructor options
     */
    getBrowserWindow(view:string,id?:number): BrowserWindow | null;   
}