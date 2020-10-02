import { $, ElementFinder } from 'protractor';
import { BlueButton } from '../buttons/bluebutton.po';

export class Footer {
    public readonly headerTitle: ElementFinder = this.rootElement.$('p');

    // initiate page objects -> footer has blue button
    public readonly blueButton = new BlueButton(this.rootElement);
            
    constructor(public readonly rootElement = $('.footerContainer')) {}
}