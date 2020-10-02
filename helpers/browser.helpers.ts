import { browser } from "protractor";

export async function getAlertText() {
    browser.logger.info(`   [ALERT] getting the alert text from`);
    const alertDialog = await browser.switchTo().alert();

    return alertDialog.getText();
}

export async function closeAlert() {
    browser.logger.info(`   [ALERT] closing the alert`);
    return await browser.switchTo().alert().accept();
}