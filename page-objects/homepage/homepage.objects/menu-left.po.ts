import { $, ElementArrayFinder, ElementFinder } from 'protractor';
import { MenuItem } from '../../common/menu-item.po';

export class MenuLeft {
    // page object elements
    public readonly headerTitle: ElementFinder = this.rootElement.$$('p').first();
    public readonly table: ElementFinder = this.rootElement.$('table');

    // initiate page object - menuLet has menuItems
    public readonly menuItem = new MenuItem(this.rootElement);
            
    constructor(public readonly rootElement = $('.menuLeftContainer')) {}
}