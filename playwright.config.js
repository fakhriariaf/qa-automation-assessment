import { defineConfig } from '@playwright/test';

export default defineConfig({

  testDir: '.',

  testMatch: [
    'web-testing/tests/**/*.js',
    'api-testing/tests/**/*.js'
  ],

  use: {
    headless: false,
    screenshot: 'on',
    trace: 'on'
  }
});
