import { browser } from "protractor";
import { HomePage } from "../page-objects/homepage/homepage.po"

describe('[HOMEPAGE] functionality on the homepage', async () => {
    const homepage = new HomePage();
    
    beforeEach(async () => {
        browser.get(browser.baseUrl);
    });

    it('WHEN homepage is opened' + 
        'THEN a header navigation bar is shown', async () => {
        expect(homepage.header.headerTitle.getText()).toMatch('Header Container');
    });

    it('WHEN homepage is opened' + 
        'THEN a footer bar is shown', async () => {
        expect(homepage.footer.headerTitle.getText()).toMatch('Footer Container');
    });

    it('WHEN homepage is opened' + 
        'THEN a left menu is shown', async () => {
        expect(homepage.menuLeft.headerTitle.getText()).toMatch('Menu Left Container');
    });

    it('WHEN homepage is opened' + 
        'THEN a area center is shown', async () => {
        expect(homepage.areaCenter.headerTitle.getText()).toMatch('Area Center Container');
    });

    it('WHEN homepage is opened' + 
        'THEN a right menu is shown', async () => {
        expect(homepage.menuRight.headerTitle.getText()).toMatch('Menu Right Container');
    });
}); 