import { browser } from "protractor";
import { HomePage } from "../page-objects/homepage/homepage.po"

describe('[HOMEPAGE] functionality on the homepage', async () => {
    const homepage = new HomePage();
    
    beforeEach(async () => {
        browser.get(browser.baseUrl);
    });

    fit('homepage shows a header navigation bar', async () => {
        await homepage.header.headerTitle.getText();
        expect(homepage.header.headerTitle.getText()).toMatch('Header Container');
    });

    it('homepage shows a footer bar', async () => {
        
    });

    it('homepage shows a left menu', async () => {
        
    });

    it('homepage shows a area center', async () => {
        
    });

    it('homepage shows a right menu', async () => {
        
    });
}); 