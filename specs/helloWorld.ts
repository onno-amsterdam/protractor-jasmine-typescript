import { browser, $ } from "protractor"

beforeAll(async () => {
    await browser.get(`/index.html`);
})

describe('The Protractor Project Test Page', () => {
    it('has a title "Home Page"', () => {
        expect(browser.getTitle()).toMatch('Home Page');
    })
    it('has a header "Hello World!"', () => {
        expect($('h1').getText()).toMatch('Hello World');
    })
    it('does not have a header "Hello Earth!"', () => {
        expect($('h1').getText()).not.toMatch('Hello World');
    })
})