import { $, ElementFinder } from "protractor";

export class DelayedActions {
    // set the elements
    public readonly removedElement: ElementFinder = $('#to-be-removed');
    public readonly addedElement: ElementFinder = $('#added-element');

    constructor(public readonly rootElement: ElementFinder) {}
}