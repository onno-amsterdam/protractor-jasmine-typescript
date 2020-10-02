import { $, ElementFinder } from "protractor";

export class DelayedActions {
    public readonly removedElement: ElementFinder = $('#to-be-removed');
    public readonly addedElement: ElementFinder = $('#added-element');
}