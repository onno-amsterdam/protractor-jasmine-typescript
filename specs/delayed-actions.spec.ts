import { browser } from "protractor";
import { waitForAlert, waitForElementInDOM, waitForElementNotInDOM } from "../helpers/ec.helpers";
import { HomePage } from "../page-objects/homepage/homepage.po"

describe('[DELAYED ACTIONS] in the Menu Right container', async () => {
    const menuRight = new HomePage().menuRight;
    const areaCenter = new HomePage().areaCenter;

    beforeEach(async () => {
        await browser.get(browser.baseUrl);
        await menuRight.delayedActions.dropdownButton.click();
    });

    afterAll(async () => {
        try { 
            await browser.switchTo().alert().dismiss() }
        catch {}
    });
    
    it('WHEN I select the remove element option; ' +  
        'THEN the element in the Area Center container is removed', async () => {
        // select the option
        await menuRight.delayedActions.removeElementOption.click();

        // wait for the element to be removed
        const isRemoved = await waitForElementNotInDOM(areaCenter.delayedActions.removedElement);

        // assert it's not present
        expect(isRemoved).toBe(true);
    });
    
    it('WHEN I select the add element option; ' + 
        'THEN the element is added to the Area Center container', async () => {
        // select the option
        await menuRight.delayedActions.addElementOption.click();

        // wait for the element to be removed
        const isAdded = await waitForElementInDOM(areaCenter.delayedActions.addedElement);

        // assert it's not present
        expect(isAdded).toBe(true);
    });
    
    it('WHEN I select the Show Alert option; ' + 
        'THEN I see the browser shows an alert', async () => {
        // select the option
        await menuRight.delayedActions.showAlertOption.click();

        // wait for the element to be removed
        const isShown = await waitForAlert();

        // assert it's not present
        expect(isShown).toBe(true);
    });
});