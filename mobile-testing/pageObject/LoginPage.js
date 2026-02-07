class LoginPage {

    get loginTab() { return $('~Login'); }
    get email() { return $('~input-email'); }
    get password() { return $('~input-password'); }
    get loginBtn() { return $('~button-LOGIN'); }

    get successTitle() { return $('id:com.wdiodemoapp:id/alert_title'); }
    get successMessage() { return $('id:android:id/message'); }
    get okBtn() { return $('id:android:id/button1'); }

    async login(email, pass) {
        await this.loginTab.click();
        await this.email.setValue(email);
        await this.password.setValue(pass);
        await this.loginBtn.click();
    }

    async clearInput() {
        await this.email.clearValue();
        await this.password.clearValue();
    }

    async verifyLoginSuccess() {
        await expect(this.successTitle).toHaveText('Success');
        await expect(this.successMessage).toHaveText('You are logged in!');
        await this.okBtn.click();
    }

    async loginInvalidThenValid() {

        for (let i = 0; i < 2; i++) {

            await this.login('wrong@test.com', 'wrong');

            try {
                await this.okBtn.waitForDisplayed({ timeout: 3000 });
                await this.okBtn.click();
            } catch {}

            await this.clearInput();
        }

        await this.login(
            'fakhri.dargawireja2@gmail.com',
            'Test1234'
        );

        await this.successTitle.waitForDisplayed({ timeout: 5000 });
        await this.verifyLoginSuccess();
    }
}

export default new LoginPage();
