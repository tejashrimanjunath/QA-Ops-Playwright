const { Before, BeforeAll, After, AfterAll, AfterStep, Status } = require('@cucumber/cucumber');
const playwright = require('@playwright/test');

let browser;

BeforeAll(async function () {
    browser = await playwright.chromium.launch({
        headless: true,
    });
});

Before(async function () {
    const context = await browser.newContext();
    this.page = await context.newPage();
    this.context = context;
});

After(async function () {
    if (this.context) {
        await this.context.close();
        this.context = null;
    }
});

After({ tags: '@foo' }, function () {
    console.log("This hook runs only after scenarios tagged with @foo");
});

AfterStep(async function ({ result }) {
    if (result.status === Status.FAILED && this.page) {
        const scenarioName = this.pickle?.name?.replace(/[^a-zA-Z0-9-_]/g, '_') || 'CucumberScreenFailure';
        const screenshotPath = `${scenarioName}_${Date.now()}.png`;
        await this.page.screenshot({ path: screenshotPath });
    }
});

AfterAll(async function () {
    if (browser) {
        await browser.close();
        browser = null;
    }
});

