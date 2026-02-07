class FormsPage {

    get formsTab() { return $('~Forms'); }
    get input() { return $('~text-input'); }
    get switchBtn() { return $('~switch'); }
    get dropdown() { return $('android=new UiSelector().resourceId("dropdown-chevron")'); }
    get activeBtn() { return $('~button-Active'); }

    get dropdownList() { return $('id:com.wdiodemoapp:id/select_dialog_listview'); }

    get popupTitle() { return $('id:com.wdiodemoapp:id/alert_title'); }
    get popupMessage() { return $('id:android:id/message'); }
    get okBtn() { return $('id:android:id/button1'); }

    async openForms() {
        await this.formsTab.click();
    }

    async inputText(text) {
        await this.input.setValue(text);
    }

    async toggleSwitch() {
        await this.switchBtn.click();
    }

    async openDropdown() {
        await this.dropdown.waitForDisplayed({ timeout: 10000 });
        await this.dropdown.click();
    }

    async selectRandomDropdown() {

        const options = [
            'webdriver.io is awesome',
            'Appium is awesome',
            'This app is awesome'
        ];

        const pick = options[Math.floor(Math.random() * options.length)];
        await $(`android=new UiSelector().text("${pick}")`).click();
    }

    async clickActive() {
        await this.activeBtn.click();
    }

    async verifyDropdownVisible() {
        await expect(this.dropdownList).toBeDisplayed();
    }

    async verifyPopup() {
        await expect(this.popupTitle).toHaveText('This button is');
        await expect(this.popupMessage).toHaveText('This button is active');
    }

    async closePopup() {
        await this.okBtn.click();
    }
}

export default new FormsPage();
