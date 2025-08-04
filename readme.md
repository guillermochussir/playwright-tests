# Playwright Tests

Automated end-to-end testing with [Playwright](https://playwright.dev/).

## Overview

This repository contains Playwright test scripts for web applications. It aims to provide reliable, maintainable, and scalable automated tests.

## Features

- Cross-browser testing (Chromium, Firefox, WebKit)
- Headless and headed modes
- Parallel test execution
- Easy configuration and reporting

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

```bash
git clone https://github.com/guillermochussir/playwright-tests.git
cd playwright-tests
npm install
```

### Running Tests

```bash
npx playwright test
```

### Running a Specific Test

```bash
npx playwright test path/to/test.spec.js
```

### Only run smoke tests

```bash
npx playwright test --grep '@smoke'
```

### Only run regression

```bash
npx playwright test --grep '@regression'
```

### Only run specific functional area

```bash
npx playwright test --grep '@login'
```

### Only run specific functional area + filter by sub-suite

```bash
npx playwright test --grep '(?=.*@login)(?=.*@smoke)'
```

### Generating a Test Report

```bash
npx playwright show-report
```

## 🚀 GitHub Actions and Allure Test Reports 

This repo automatically builds and publishes Allure dashboards for Playwright smoke and regression suites.

| Trigger                 | Test Suite  | Report URL                                                              |
|-------------------------|-------------|-------------------------------------------------------------------------|
| On every push           | Smoke       | https://guillermochussir.github.io/playwright-tests/                    |
| Nightly (cron schedule) | Regression  | https://guillermochussir.github.io/playwright-tests/                    |

### How It Works

1. **Smoke tests** run on every `push` and upload `allure-report-smoke`.  
2. **Regression tests** run on a nightly schedule and upload `allure-report-regression`.  
3. It downloads the chosen artifact and deploys it to the `gh-pages` branch.

## Folder Structure

```
playwright-tests/
├── tests/           # Test specs
├── playwright.config.js
├── package.json
└── README.md
```

## Resources

- [Playwright Documentation](https://playwright.dev/docs/intro)
- [GitHub Issues](https://github.com/guillermochussir/playwright-tests/issues)

## License

MIT
