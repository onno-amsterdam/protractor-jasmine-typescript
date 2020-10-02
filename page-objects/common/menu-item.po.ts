import { AllureStepLogger } from "../../helpers/allure.helper";
import { ElementFinder, $, ElementArrayFinder, by } from "protractor";
import { BlueButton } from "../buttons/bluebutton.po";

export class MenuItem {
    // page object selectors
    public readonly rootElementCssSelector: string = 'td.menu-item';
    public readonly menuItemTextCssSelector: string = 'p';
    public readonly menuItemHeaderCssSelctor: string = 'h5';

    // page object elements
    public readonly menuItem: ElementFinder = this.rootElement.$(this.rootElementCssSelector)
    public readonly menuItems: ElementArrayFinder = this.rootElement.$$(this.rootElementCssSelector);
    public readonly menuItemText: ElementFinder = this.rootElement.$(this.menuItemTextCssSelector);
    public readonly menuItemHeader: ElementFinder = this.rootElement.$(this.menuItemHeaderCssSelctor);

    constructor(public readonly rootElement: ElementFinder) {}

    /**
     * Function clicks the blue button in the menu item identified by the header text.
     * 
     * @param header string text of header
     */
    @(AllureStepLogger`[BUTTON] clicking the blue button in menu-item by header`)
    public async clickBlueButton(header: string): Promise<void> {
        const menuItemsArr: ElementFinder[] = await this.menuItems;
        let index = 0;
        
        for (const menuItem of menuItemsArr) {
            if (await menuItem.element(by.cssContainingText(this.menuItemHeaderCssSelctor,header)).isPresent()) {
                break;
            };
            if(menuItemsArr.length-1 == index) {
                 //Console.log(`the menu item with header "${header}" was not found in the menu;`);
            }
            index++;
        };
        const blueButton = new BlueButton(menuItemsArr[index]);

        return blueButton.click();
    };

    @(AllureStepLogger`[MENU ITEMS] getting all the menu items`)
    public async getAllMenuItems(): Promise<ElementFinder[]> {
        return this.menuItems;
    } 
}