import { browser } from "protractor";
import { HomePage } from "../page-objects/homepage/homepage.po"

describe('[HOMEPAGE] functionality on the homepage', async () => {
    const homepage = new HomePage();
    
    beforeEach(async () => {
        browser.get(browser.baseUrl);
    });

    it('homepage shows a header navigation bar', async () => {
        expect(homepage.header.headerTitle.getText()).toMatch('Header Container');
    });

    it('homepage shows a footer bar', async () => {
        expect(homepage.footer.headerTitle.getText()).toMatch('Footer Container');
    });

    it('homepage shows a left menu', async () => {
        expect(homepage.menuLeft.headerTitle.getText()).toMatch('Menu Left Container');
    });

    it('homepage shows a area center', async () => {
        expect(homepage.areaCenter.headerTitle.getText()).toMatch('Area Center Container');
    });

    it('homepage shows a right menu', async () => {
        expect(homepage.menuRight.headerTitle.getText()).toMatch('Menu Right Container');
    });
}); 