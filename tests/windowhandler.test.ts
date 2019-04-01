import { WindowHandler } from "../src/handlers/WindowHandler";
import { BrowserWindow } from "electron";

const windowHanlder = new WindowHandler();

test('getBrowserWindow_ViewId?_ReturnsABrowserWindow', () => {
    windowHanlder.browserWindows.push(['test', new BrowserWindow()])
    
    const browserWindow = windowHanlder.getBrowserWindow('test')

    expect(browserWindow).toBe(BrowserWindow)
    
})