import { $, ElementFinder } from 'protractor';

export class Header {
    public readonly headerTitle: ElementFinder = this.rootElement.$('p');
            
    constructor(public readonly rootElement = $('.headerContainer')) {}
}