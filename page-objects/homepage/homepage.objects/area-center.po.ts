import { $, ElementFinder } from 'protractor';
import { DelayedActions } from '../../common/delayed-actions-results.po';

export class AreaCenter {
    // set the elements
    public readonly headerTitle: ElementFinder = this.rootElement.$('p');
            
    // instantiate page-objects
    public readonly delayedActions = new DelayedActions(this.rootElement);

    constructor(public readonly rootElement = $('.areaCenterContainer')) {}
}