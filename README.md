# Playwright Enterprise Test Platform

A production-style quality engineering platform built with Playwright and
TypeScript for scalable UI, API, accessibility, visual, and end-to-end testing.

## Overview

PlaywrightFramework is a robust end-to-end testing solution that leverages the power of Playwright to automate web application testing across multiple browsers.

## Features

- **Cross-browser Testing**: Support for Chromium, Firefox, and WebKit
- **TypeScript Support**: Fully typed codebase for better development experience
- **Flexible Architecture**: Modular and extensible framework design
- **Multiple Browser Support**: Test across different browsers with a single codebase
- **Page Object Model**: Organized test structure with reusable page objects
- **Comprehensive Assertions**: Built-in assertions and validation helpers

## Tech Stack

- **Playwright**: Modern browser automation framework
- **TypeScript**: Static typing and improved code quality
- **Node.js**: Runtime environment

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Kumaresh8/PlaywrightFramework.git

# Navigate to the project directory
cd PlaywrightFramework

# Install dependencies
npm install
```

### Configuration

Create a `.env` file in the root directory with your configuration:

```
BASE_URL=https://your-app-url.com
BROWSER=chromium
HEADLESS=true
```

## Running Tests

```bash
# Run all tests
npm test

# Run tests in specific browser
npm test -- --project=chromium

# Run tests in headed mode
npm test -- --headed

# Run tests with specific tag
npm test -- --grep @regression
```

## Project Structure

```
PlaywrightFramework/
├── tests/                 # Test files
├── pages/                 # Page object models
├── utils/                 # Utility functions
├── config/                # Configuration files
├── playwright.config.ts   # Playwright configuration
└── package.json          # Dependencies
```

## Contributing

Contributions are welcome! Please feel free to submit pull requests or open issues for bugs and feature requests.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For questions or support, please reach out to the repository maintainer.
