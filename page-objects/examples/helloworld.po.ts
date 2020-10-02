import { ElementFinder, $ } from "protractor";

export class HelloWorld {
    public readonly header: ElementFinder = $('h1');
}
