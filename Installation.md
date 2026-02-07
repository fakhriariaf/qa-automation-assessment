📘 QA Automation Assessment – installation
### Author: Fakhri Aria Fadhlillah


QA-AUTOMATION-ASSESSMENT
│
├── api-testing/        # API Automation (Playwright)
├── web-testing/        # Web Automation (Playwright)
├── mobile-testing/     # Mobile Automation (WDIO + Appium)
│
├── diagrams/           # Flow diagrams (PNG)
├── README.md           # Part4


⚙️ Prerequisites

Install first:
- Node.js (v18+)
- Git
- VS Code

Check:
- node -v
- npm -v



### For Mobile Testing

**Install In terminal Cmd or powershell :
ex : C:\Users\fakhr>      ---- instal here----

- npm install -g appium
- npm install -g @appium/doctor


**Install:
- Android Studio
- Android Emulator (Pixel 5 API 30+)
- Java JDK 17+

**Verify:
- adb devices
- java -version

🚀 Installation
### Clone Project

- git clone <repo-url>
- cd QA-AUTOMATION-ASSESSMENT

▶ Run Web Testing
cd qa-automation-assessment
npm install
npx playwright install
npx playwright test > all test with Api Testing too or npx playwright test web-testing/tests/e2eTest.spec.js --headed

**Screenshots saved in:
- web-testing/screenshots

▶ Run API Testing
cd qa-automation-assessment
npm install
npx playwright install
npx playwright test > all test with Web Testing too or npx playwright test api-testing/tests/postApi.spec.js --headed

**Screenshots saved in:
api-testing/results


▶ Run Mobile Testing > *Note download apk android.wdio.native.app.v2.0.0.apk in https://github.com/webdriverio/native-demo-app/releases and then copy paste file apk after download to folder mobile-testing
Step 1 Start Android Emulator first.
Then: 
    cd mobile-testing
    npm install
    npm run wdio

**Screenshots + video saved in:
mobile-testing/screenshots


🧪 Test Coverage
## Web
- Product selection
- Cart validation
- Checkout
- Order confirmation

## API
- POST
- GET
- PUT
- DELETE
- Positive & negative validation

## Mobile
- Login (invalid twice → valid)
- Forms interaction
- Swipe gestures
- Screenshot & video recording


🤖 AI Usage
## ChatGPT was used only for:
- Debugging errors
- Understanding framework behavior
All test scenarios and logic were written manually.



🧩 Frameworks
| Platform | Tool                 |
| -------- | -------------------- |
| Web      | Playwright           |
| API      | Playwright API       |
| Mobile   | WebdriverIO + Appium |
