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

## Folder Structure

```
playwright-tests/
├── tests/           # Test specs
├── playwright.config.ts
├── package.json
└── README.md
```

## Resources

- [Playwright Documentation](https://playwright.dev/docs/intro)
- [GitHub Issues](https://github.com/guillermochussir/playwright-tests/issues)

## License

MIT
