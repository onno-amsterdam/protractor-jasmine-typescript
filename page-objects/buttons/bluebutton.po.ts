import { ElementFinder } from "protractor";
import { AllureStepLogger } from "../../helpers/allure.helper";

export class BlueButton {
    public readonly button = this.rootElement.$('.blue-button');

    constructor(public readonly rootElement: ElementFinder) {}
    
    @(AllureStepLogger`[BUTTON] clicking the blue button`)
    public async click() {
        return await this.button.click();
    }
}