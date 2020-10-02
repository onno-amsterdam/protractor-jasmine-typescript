import { $, ElementFinder } from "protractor";

export class BlueButton {
    public readonly button = this.rootElement.$('.blue-button');

    constructor(public readonly rootElement: ElementFinder) {}

    public async click() {
        return await this.button.click();
    }
}