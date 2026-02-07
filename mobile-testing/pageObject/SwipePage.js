class SwipePage {

    get swipeTab() { return $('~Swipe'); }

    async openSwipe() {
        await this.swipeTab.click();
    }

    async getScreen() {
        return await driver.getWindowRect();
    }

    async swipe(startX, startY, endX, endY) {

        await driver.performActions([{
            type: 'pointer',
            id: 'finger',
            parameters: { pointerType: 'touch' },
            actions: [
                { type: 'pointerMove', duration: 0, x: startX, y: startY },
                { type: 'pointerDown', button: 0 },
                { type: 'pointerMove', duration: 800, x: endX, y: endY },
                { type: 'pointerUp', button: 0 }
            ]
        }]);

        await driver.releaseActions();
    }

    async scrollDown() {
        const { width, height } = await this.getScreen();
        await this.swipe(width/2, height*0.25, width/2, height*0.75);
    }

    async scrollUp() {
        const { width, height } = await this.getScreen();
        await this.swipe(width/2, height*0.75, width/2, height*0.25);
    }

    async swipeLeftToRight() {
        const { width, height } = await this.getScreen();
        await this.swipe(width*0.2, height/2, width*0.8, height/2);
    }

    async swipeRightToLeft() {
        const { width, height } = await this.getScreen();
        await this.swipe(width*0.8, height/2, width*0.2, height/2);
    }
}

export default new SwipePage();
