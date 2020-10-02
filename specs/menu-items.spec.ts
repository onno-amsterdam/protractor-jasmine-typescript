import { browser, ElementArrayFinder } from "protractor";
import { HomePage } from "../page-objects/homepage/homepage.po";

describe('[MENU ITEMS] in the left menu on the homepage;', async () => {
    const menuLeft = new HomePage().menuLeft;

    beforeEach(async () => {
        await browser.get(browser.baseUrl);
    })

    it('WHEN the menu items are shown in the left menu; ' + 
        'THEN each of the menu items has the class attribute menu-items', async () => {
            const menuItems = await menuLeft.menuItem.getAllMenuItems();

            for (const menuItem of menuItems) {
                expect(menuItem.getAttribute('class')).toMatch('menu-item');
            }
    });

    it('WHEN the menu items are shown in the left menu; ' + 
        'THEN the menu-items in the left menu have text;', async () => {
            const expectedText = [];
            expectedText.push({header:'Item 1', text:'Content of 1'});
            expectedText.push({header:'Item 2', text:'Content of 2'});
            expectedText.push({header:'Item 3', text:'Content of 3'});
            expectedText.push({header:'Item 4', text:'Content of 4'});
            expectedText.push({header:'Item 5', text:'Content of 5'});
            
            const menuItems = await menuLeft.menuItem.getAllMenuItems();
            
            // THE FOR LOOP
            for (let i= 0; i < menuItems.length; i++) {
                const headerText = await menuItems[i].$(menuLeft.menuItem.menuItemHeaderCssSelctor).getText();
                const menuItemText = await menuItems[i].$(menuLeft.menuItem.menuItemTextCssSelector).getText();

                expect(headerText).toMatch(expectedText[i].header);
                expect(menuItemText).toMatch(expectedText[i].text);
            }

            // THE FOR / OF LOOP
            let index = 0;
            for (const menuItem of menuItems) {
                const headerText = await menuItem.$(menuLeft.menuItem.menuItemHeaderCssSelctor).getText();
                const menuItemText = await menuItem.$(menuLeft.menuItem.menuItemTextCssSelector).getText();

                expect(headerText).toMatch(expectedText[index]['header']);
                expect(menuItemText).toMatch(expectedText[index]['text']);

                index++;
            }
    });

    it('WHEN the menu items are shown in the left menu; ' + 
        'THEN each menu item contains a icon element', async () => {
            const menuItems = await menuLeft.menuItem.getAllMenuItems();

            for (const menuItem of menuItems) {
                const isIconPresent = await menuItem.$('i').isPresent();
                expect(isIconPresent).toBe(true);
            }

    });

    it('WHEN the menu items are shown in the left menu; ' + 
        'THEN  the menu items of in the left menu have the attributes; ', async () => {
            const expectedAttributes = [];
            expectedAttributes.push({attribute:'Type', value:'a'});
            expectedAttributes.push({attribute:'Value', value:'b'});
            expectedAttributes.push({attribute:'Type', value:'c'});
            expectedAttributes.push({attribute:'Value', value:'d'});
            expectedAttributes.push({attribute:'Type', value:'e'});

            const menuItems = await menuLeft.menuItem.getAllMenuItems();

            for(let i = 0; i < menuItems.length; i++) {
                const expectedValue = await menuItems[i].$('.menu-item-content').getAttribute(expectedAttributes[i].attribute);
                expect(expectedValue).toMatch(expectedAttributes[i].value);
            }
    });
})
