import fs from 'fs';

class MediaUtils {

    static async startRecording() {
        await driver.startRecordingScreen();
    }

    static async stopRecording(testName) {

        const video = await driver.stopRecordingScreen();

        fs.writeFileSync(
            `./screenshots/${testName}.mp4`,
            video,
            'base64'
        );
    }

    static async takeScreenshot(testName) {
        await browser.saveScreenshot(
            `./screenshots/${testName}.png`
        );
    }
}

export default MediaUtils;
