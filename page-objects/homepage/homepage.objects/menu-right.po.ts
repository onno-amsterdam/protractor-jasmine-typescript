import { $, ElementArrayFinder, ElementFinder } from 'protractor';

export class MenuRight {
    public readonly headerTitle: ElementFinder = this.rootElement.$('p');
            
    constructor(public readonly rootElement = $('.menuRightContainer')) {}
}