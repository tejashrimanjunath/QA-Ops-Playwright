// @ts-check
import { defineConfig, devices } from '@playwright/test';
import { fail } from 'node:assert';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */


export default defineConfig(
  {
    //Global config level parameters
    testDir: './tests',
    workers:3,
    retries: 1,
    timeout: 15_000,
    expect: {
      timeout: 5_000
    },
    reporter:
      [
        ['html'],
        ['line'],
        ['allure-playwright', {
          resultsDir: "allure-results",
        },
        ],
      ],
    //Single test level parameters 
    use: {
      browserName: 'chromium',
      channel: 'msedge',
      viewport: { width: 1920, height: 1080 },
      headless: false,
      /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
      screenshot: 'only-on-failure',
      trace: 'retain-on-failure'//'on' 'off' 'retain-on-failure'

    },
  }
);