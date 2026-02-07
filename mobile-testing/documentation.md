# 📱 Mobile Automation Testing Documentation  
**Project:** WDIO Native Demo App Automation  
**Author:** Fakhri Aria Fadhlillah  

---

## 1. Overview

This project contains automated mobile tests for the WebdriverIO Native Demo Android App using:

- WebdriverIO
- Appium (UiAutomator2)
- Android Emulator
- JavaScript
- Page Object Model (POM)

The automation validates core mobile functionalities including:

- Login flow
- Forms interaction
- Gesture actions (scroll & swipe)

Each test automatically captures:

- Screenshots
- Screen recordings (MP4)

to provide execution evidence.

---

## 2. Project Structure
mobile-testing/
│
├── pageObject/
│ ├── LoginPage.js
│ ├── FormsPage.js
│ └── SwipePage.js
│
├── tests/
│ └── demoApp.spec.js
│
├── utils/
│ └── MediaUtils.js
│
├── screenshots/
│ ├── TC01_.png / mp4
│ ├── TC02_.png / mp4
│ └── TC03_*.png / mp4
│
├── android.wdio.native.app.v2.0.0.apk
├── wdio.conf.js
├── package.json
└── documentation.md


---

## 3. Environment Setup

### Required Tools

- Node.js
- Android Studio
- Android Emulator (Pixel 5 / API 30+)
- Appium
- Java JDK 17
- WebdriverIO

---

### Install Dependencies

From mobile-testing folder:

```bash
npm install

##Start Emulator
1. Verify device:
    adb devices

2. Start Appium Server
    appium

## 4. Run Automation
Inside mobile-testing:
1. npm run wdio


## 5. Test Scenarios

---

### TC01 – Invalid Login Twice then Valid Login

**Steps:**

1. Open Login tab  
2. Perform invalid login twice  
3. Retry using valid credentials  
4. Verify success popup  
5. Capture screenshot and screen recording  

**Expected Result:**

- Login success popup appears  
- Message: "You are logged in!"

---

### TC02 – Forms Interaction Test

**Steps:**

1. Navigate to Forms screen  
2. Input text  
3. Toggle switch  
4. Open dropdown  
5. Select random option  
6. Click Active button  
7. Verify popup content  
8. Capture screenshot and recording  

**Expected Result:**

- Form interactions work correctly  
- Popup message displayed  

---

### TC03 – Swipe Gesture Test

**Steps:**

1. Navigate to Swipe screen  
2. Scroll Down  
3. Scroll Up  
4. Swipe Left → Right (2x)  
5. Swipe Right → Left (2x)  
6. Capture screenshots per action  
7. Save video recording  

**Expected Result:**

- Cards move correctly  
- Gestures detected properly  

---

## 6. Locator Strategy

The following locator strategies are used:

- Accessibility ID (`~Login`)
- Android UiSelector (`resource-id`)
- XPath (fallback)

Priority is given to Accessibility ID and Resource ID for better stability and performance.

---

## 7. Media Evidence

Media handling is centralized inside:


Each test automatically:

- Starts screen recording  
- Takes screenshots during execution  
- Saves MP4 recording after completion  

Output folder: mobile-testing\screenshots


---

## 8. AI Assistance

ChatGPT was used only to assist with debugging and understanding error messages during development.

All test scenarios, automation logic, Page Object Model structure, and validations were independently designed and implemented.

---

## 9. Conclusion

This mobile automation framework validates:

- Authentication flow  
- Form interactions  
- Mobile gestures  
- UI feedback  

The framework follows Page Object Model architecture and utility abstraction, making it scalable for future regression or feature expansion.




