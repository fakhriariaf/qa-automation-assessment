import fs from 'fs';
import { test, expect } from '@playwright/test';
import { DashboardPage } from '../pageObject/dashboardPage.js';
import { ProductPage } from '../pageObject/productPage.js';
import { CheckoutPage } from '../pageObject/checkoutPage.js';
import { ToolsUtils } from '../utils/toolsUtils.js';

test('End to End Checkout Flow', async ({ page }) => {

  const dashboard = new DashboardPage(page);
  const product = new ProductPage(page);
  const checkout = new CheckoutPage(page);

  await dashboard.goto();
  await dashboard.selectProduct();

  await product.addToCart();
  await product.goToCart();

  await expect(page.getByText('Samsung galaxy s6')).toBeVisible();

  await checkout.checkout();

  const orderInfo = await checkout.getOrderInfo();

  ToolsUtils.recordOrder(orderInfo);
  await ToolsUtils.takeScreenshot(page, 'order-success');
});

test.afterEach(async ({}, testInfo) => {

  const fs = await import('fs');
  const path = await import('path');

  const sourceDir = path.dirname(testInfo.outputPath());

  const targetDir = 'web-testing/screenshots';

  if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir, { recursive: true });

  const safeName = testInfo.title.replace(/[^a-z0-9]/gi, '_');

  const files = fs.readdirSync(sourceDir);

  for (const file of files) {

    if (file.endsWith('.webm')) {
      fs.copyFileSync(
        path.join(sourceDir, file),
        `${targetDir}/${safeName}.webm`
      );
    }

    if (file.endsWith('.zip')) {
      fs.copyFileSync(
        path.join(sourceDir, file),
        `${targetDir}/${safeName}.zip`
      );
    }
  }
});




