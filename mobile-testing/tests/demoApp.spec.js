import LoginPage from '../pageObject/LoginPage.js';
import FormsPage from '../pageObject/FormsPage.js';
import SwipePage from '../pageObject/SwipePage.js';
import MediaUtils from '../utils/MediaUtils.js';

describe('WDIO Native Demo App', () => {

    beforeEach(async function () {

        this.testName = this.currentTest.title.replace(/\s+/g, '_');

        await MediaUtils.startRecording();
    });

    afterEach(async function () {

        await MediaUtils.stopRecording(this.testName);
        await MediaUtils.takeScreenshot(this.testName);
    });

    it('TC01 - Invalid Login Twice then Valid Login', async () => {
        await LoginPage.loginInvalidThenValid();
    });

    it('TC02 - Forms Interaction Test', async () => {

        await FormsPage.openForms();
        await FormsPage.inputText('Automation Test Fakhri');
        await FormsPage.toggleSwitch();
        await FormsPage.openDropdown();

        await FormsPage.verifyDropdownVisible();
        await FormsPage.selectRandomDropdown();

        await FormsPage.clickActive();
        await FormsPage.verifyPopup();
        await FormsPage.closePopup();
    });

    it('TC03 - Swipe Gesture Test', async () => {

        await SwipePage.openSwipe();

        for (let i = 0; i < 2; i++) {
            await SwipePage.swipeRightToLeft();
        }

        for (let i = 0; i < 2; i++) {
            await SwipePage.swipeLeftToRight();
        }

        await SwipePage.scrollDown();
        await SwipePage.scrollUp();

    });

});
