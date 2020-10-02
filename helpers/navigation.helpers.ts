import { browser } from "protractor";

export async function openHomePage(): Promise<void> {
    browser.logger.info(`   [NAVIGATION] opening the base url: ${browser.baseUrl}`);
    return await browser.get(browser.baseUrl);
}

export async function openPage(pageName: string): Promise<void> {
    browser.logger.info(`   [NAVIGATION] opening page: ${browser.baseUrl}/${pageName}`);
    return await browser.get(`${browser.baseUrl}/${pageName}`);
}