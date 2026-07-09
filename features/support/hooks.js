const { Before, BeforeAll, After, AfterAll, AfterStep, Status } = require('@cucumber/cucumber');
const { POManager } = require("../../pageobjects/POManager");
const playwright = require('@playwright/test');

// Synchronous
Before(async function () {

    //Browser context setting for chrome
    const browser = await playwright.chromium.launch({
        headless: false,
    });
    const context = await browser.newContext();
    this.page = await context.newPage();
});

// Synchronous
After('@foo', function () {
    // perform some runtime check to decide whether to skip the proceeding scenario
    console.log("After all scenario's execute, should run only for @foo");
});

AfterStep(async function ({ result }) {
    // This hook will be executed after all steps, and take a screenshot on step failure
    if (result.status === Status.FAILED) {
        await this.page.screenshot({ path: 'CucumberScreenFailure.png' });
    }
});

