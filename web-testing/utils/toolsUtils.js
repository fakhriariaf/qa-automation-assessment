import fs from 'fs';

export class ToolsUtils {

  static async takeScreenshot(page, name) {
    await page.screenshot({
      path: `web-testing/screenshots/${name}.png`,
      fullPage: true
    });
  }

  static recordOrder(orderInfo) {

    const content = `
============================
ORDER CONFIRMATION
============================
${orderInfo}
DATE: ${new Date().toISOString()}
============================

`;

    fs.appendFileSync('web-testing/screenshots/order-record.txt', content);
  }
}
