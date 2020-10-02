import { browser } from "protractor";

export async function getAlertText() {
    const alertDialog = await browser.switchTo().alert();

    return alertDialog.getText();
}

export async function closeAlert() {
    return await browser.switchTo().alert().accept();
}