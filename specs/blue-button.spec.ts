import { HomePage } from '../page-objects/homepage/homepage.po';
import { closeAlert, getAlertText } from '../helpers/browser.helpers';
import { waitForAlert } from '../helpers/ec.helpers';
import { browser } from 'protractor';


describe('', async () => {
    const menuLeft = new HomePage().menuLeft; 
    const footer = new HomePage().footer;

    beforeEach(async () => {
        browser.get(browser.baseUrl);
    });

    it('WHEN I click the blue button in the menu-items; ', async () => {
        'THEN I see the alert with the text for each menu-item;'
        const menuItemsObject = [];

        menuItemsObject.push({menuItemHeader: 'Item 1', alertText: 'In menu-item 1'});
        menuItemsObject.push({menuItemHeader: 'Item 2', alertText: 'In menu-item 2'});
        menuItemsObject.push({menuItemHeader: 'Item 3', alertText: 'In menu-item 3'});
        menuItemsObject.push({menuItemHeader: 'Item 4', alertText: 'In menu-item 4'});
        menuItemsObject.push({menuItemHeader: 'Item 5', alertText: 'In menu-item 5'});
        
        const menuItems = await menuLeft.menuItem.getAllMenuItems();

        for (let i = 0; i < menuItems.length; i++) {
            await menuLeft.menuItem.clickBlueButton(menuItemsObject[i].menuItemHeader);
            await waitForAlert();
            expect(await getAlertText()).toMatch(menuItemsObject[i].alertText);
            await closeAlert();
        }
    });

    fit('WHEN I click blue button located in the footer; ', async () => {
        'THEN I see the alert with the text for the footer;'
        footer.blueButton.click();
        await waitForAlert();
        expect(getAlertText()).toMatch('In footerContainer');
        await closeAlert();
    })
})