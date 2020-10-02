import { $, ElementArrayFinder, ElementFinder } from 'protractor';
import { DelayedActionsDropDown } from '../../dropdowns/delayed-actions-dropdown.po';

export class MenuRight {
    // set elements
    public readonly headerTitle: ElementFinder = this.rootElement.$('p');

    // instantiate page-objects in the MenuRight
    public readonly delayedActions = new DelayedActionsDropDown(this.rootElement);
            
    constructor(public readonly rootElement = $('.menuRightContainer')) {}
}