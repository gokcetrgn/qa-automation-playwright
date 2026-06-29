# Playwright Hybrid Automation Framework

This is an end-to-end test automation framework built with **Playwright** and **TypeScript**.

It includes UI testing, API testing, visual regression testing, and CI/CD integration using **GitHub Actions** and **Jenkins**..

---

## 📌 Project Features

- UI Automation Testing with Playwright
- API Testing (create and delete user via API)
- Hybrid Testing (API + UI together)
- Visual Regression Testing (screenshot comparison)
- Test data generation using Faker
- Page Object Model (POM) structure
- Custom fixtures for reusable test logic
- Smoke and Regression test tagging
- Parallel test execution
- Cross-browser testing (Chromium, Firefox, WebKit)
- GitHub Actions CI/CD integration
- Jenkins Pipeline integration
- HTML test reports and artifacts support

---


---

## 🚀 Technologies Used

- Playwright
- TypeScript
- Node.js
- Faker.js
- GitHub Actions
- Jenkins

---

## ▶️ How to Run Tests

### Install dependencies
```bash
npm install
```
## 🔁 CI/CD
This project uses GitHub Actions and Jenkins for continuous integration.

### 🚀 GitHub Actions

On every push:

Tests run automatically
Browsers are installed
Test results are generated
Reports are uploaded as artifacts

### 🛠️ Jenkins Pipeline

Jenkins is used to execute Playwright tests in a CI environment.

Pipeline stages include:

1. Checkout repository
2. Install dependencies (`npm install`)
3. Install Playwright browsers
4. Execute Playwright tests
5. Generate HTML reports
6. Archive test artifacts

Supports:

- Automated test execution
- Scheduled builds
- Trigger-based builds
- Smoke test execution
- Regression test execution
- Playwright HTML report publishing



## 🧪 What I Learned From This Project

- Building a Playwright automation framework from scratch
- Designing a Page Object Model architecture
- Integrating API and UI testing
- Dynamic test data generation with Faker
- Visual regression testing
- Creating reusable fixtures
- Running tests in parallel
- Cross-browser testing strategies
- CI/CD with GitHub Actions
- CI/CD pipeline implementation using Jenkins

## 📷 Testing Types Included
- Functional UI Tests
- API Tests
- Hybrid API + UI Tests
- Visual Regression Tests
- Smoke Tests
- Regression Tests
- Negative Test Scenarios

## 📌 Notes
- Test data is generated dynamically for most scenarios.
- Static test data is stored in the `/data` folder.
- Visual snapshots are stored for screenshot comparison.
- HTML reports are generated after each execution.

## 👨‍💻 Author
Gökçenaz TORGAN 
