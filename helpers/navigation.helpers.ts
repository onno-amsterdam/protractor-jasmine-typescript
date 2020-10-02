import { browser } from "protractor";

export async function openHomePage(): Promise<void> {
    return await browser.get(browser.baseUrl);
}

export async function openPage(pageName: string): Promise<void> {
    return await browser.get(`${browser.baseUrl}/${pageName}`);
}