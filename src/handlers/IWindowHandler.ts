import { BrowserWindow, BrowserWindowConstructorOptions } from "electron";

export interface IWindowHandler {
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
     * Wires a already created BrowserWindow with a another BrowserWindow, making a 
     * parent-child relation. If the child BrowserWindow doesn't exist, it will be 
     * auto created.
     * 
     * @param parentView parent browserwindow view
     * @param childView child browserwindow view
     * @param childOptions child browserwindow options 
     * @param parentId parent browserwindow id 
     */
    addChildWindow(parentView:string,childView:string,childOptions?:BrowserWindowConstructorOptions,parentId?:number): void;   
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