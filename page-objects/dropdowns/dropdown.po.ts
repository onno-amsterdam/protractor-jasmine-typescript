import { $, browser, element, ElementFinder } from "protractor";

export class DelayedActionsDropDown {
    public readonly dropdownButton: ElementFinder = $('.dropbtn');
    public readonly removeElementOption: ElementFinder = $('#remove-element');
    public readonly addElementOption: ElementFinder = $('#add-element');
    public readonly showAlertOption: ElementFinder = $('#show-alert');

    constructor(public readonly rootElement: ElementFinder = $('.dropdown')) {}
}