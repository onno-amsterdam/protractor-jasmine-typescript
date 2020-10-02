import { browser, ElementFinder, ExpectedConditions as EC } from 'protractor';

export async function waitForElementNotInDOM(element: ElementFinder, timeout = 15000): Promise<boolean> {
    return await browser.wait(EC.stalenessOf(element), timeout);
}

export async function waitForElementInDOM(element: ElementFinder, timeout = 15000): Promise<boolean> {
    return await browser.wait(EC.presenceOf(element), timeout);
}

export async function waitForAlert(timeout = 15000): Promise<boolean> {
    return await browser.wait(EC.alertIsPresent(), timeout);
}
