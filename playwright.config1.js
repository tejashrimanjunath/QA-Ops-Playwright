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
    testDir: 'tests',
    retries: 1,
    //workers: 3,
    timeout: 15_000,
    expect: {
      timeout: 5_000
    },
    reporter: 'html',
    projects: [
      {
        name: "edge",
        //Single test level parameters 
        use: {
          browserName: 'chromium',
          channel: 'msedge',
          headless: false,
          /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
          screenshot: 'on',//'only-on-failure',
          trace: 'on',//'retain-on-failure',//'on' 'off' 'retain-on-failure'
          viewport: { width: 1920, height: 1080 },//Display settings
          ignoreHTTPSErrors:true,
          permissions:['geolocation'],
          video:'on',//'retain-on-failure'

        }
      },
      {
        name: "chrome",
        use: {
          browserName: 'chromium',
          headless: false,
          /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
          screenshot: 'only-on-failure',//'on' 'off','only-on-failure'
          trace: 'retain-on-failure',//'on' 'off' 'retain-on-failure'
          ...devices['Desktop Chrome'], //To run the app for mobile devices
          ignoreHTTPSErrors:true, //To pass through the SSL certs error
          permissions:['geolocation'],//to give permissions to pass the location popup
          video:'retain-on-failure' //Same as traces
        },
      }
    ]
  }
);