# API Automation Testing – JSONPlaceholder

## Overview

This project demonstrates API automation testing using Playwright and JavaScript against the public REST API JSONPlaceholder.

Base URL:
https://jsonplaceholder.typicode.com

The automation covers positive, negative, and edge case scenarios using Page Object Model (POM) architecture.

Test execution results and response bodies are automatically stored for evidence.

---

## Tools & Technologies

- Playwright (API Testing)
- JavaScript (ES Module)
- Node.js
- VS Code

---

## Test Objectives

- Validate REST API endpoints
- Verify HTTP status codes
- Validate response payloads
- Handle negative scenarios
- Capture execution evidence
- Store API responses automatically

---

## Implemented Test Scenarios

| ID | Scenario | Endpoint | Expected Result |
|----|----------|----------|----------------|
| API01 | Get all posts | GET /posts | 200 OK |
| API02 | Get single post | GET /posts/1 | 200 OK |
| API03 | Create new post | POST /posts | 201 Created |
| API04 | Get comments | GET /posts/1/comments | 200 OK |
| API05 | Invalid endpoint | GET /postsss | 404 Not Found |
| API06 | Invalid ID | GET /posts/abc | 404 Not Found |
| API07 | Empty payload | POST /posts | 201 Created (mock behavior) |
| API08 | Large ID | GET /posts/99999 | 404 Not Found |
| API09 | Header validation | GET /posts | application/json |
| API10 | Response time | GET /posts | < 2 seconds |

---

## Project Structure

api-testing/
│
├── pageObject/
│ └── postApi.js
│
├── tests/
│ └── postApi.spec.js
│
├── utils/
│ └── apiResults.js
│
├── results/
│ ├── api-results.txt
│ ├── API01.json
│ ├── API02.json
│ └── ...
│
└── documentation.md



---

## Automation Architecture

This project uses Page Object Model for API:

- postApi.js → API request abstraction
- postApi.spec.js → Test scenarios
- apiResults.js → Result logging and JSON storage

Each test automatically:

- Logs execution status
- Saves response JSON per scenario
- Adds timestamp to execution log

---

## Execution Guide

Install dependencies:

```bash
npm install


Run API tests:
npx playwright test api-testing/tests/postApi.spec.js


View HTML report:
npx playwright show-report


======================================================================================

##Test Evidence
After execution, the following files are generated automatically:
> api-testing/results/api-results.txt
    → Contains:
    → Test name
    → Status code
    → Timestamp


##API Response Files
> api-testing/results/API01.json
> api-testing/results/API02.json
> ...
> api-testing/results/API10.json
Each file stores the actual API response for its scenario.


##Notes on JSONPlaceholder
- JSONPlaceholder is a public fake REST API used for testing and prototyping.
- POST requests return mocked responses and do not persist data. This behavior is expected and documented.

##AI Assistance
- ChatGPT was used only to assist with debugging and understanding error messages during development.
- All test scenarios, automation logic, Page Object Model structure, and validations were independently designed and implemented.


##Conclusion
- This API automation framework validates multiple REST operations including:
- Data retrieval
- Resource creation
- Error handling
- Header validation
- Performance checks
- The framework is scalable and can be extended for additional endpoints or regression suites.

##Author:
Fakhri Aria Fadhlillah