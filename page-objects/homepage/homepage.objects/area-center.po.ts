import { $, ElementFinder } from 'protractor';

export class AreaCenter {
    public readonly headerTitle: ElementFinder = this.rootElement.$('p');
            
    constructor(public readonly rootElement = $('.areaCenterContainer')) {}
}