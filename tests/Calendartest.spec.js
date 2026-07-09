const { test, expect } = require('@playwright/test');
const { validateHeaderValue } = require('node:http');
const { builtinModules } = require('node:module');

test("Test Calendar Selection", async ({ page }) => {

    const mon = '6';
    const day = '19';
    const year = '2027';

    const expectedList = [year];

    await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers");

    await page.locator(".react-date-picker__calendar-button__icon").click();
    await page.locator(".react-calendar__navigation__label").click();
    await page.locator(".react-calendar__navigation__label").click();
    await page.getByText(year).click();
    await page.locator('.react-calendar__year-view__months__month').nth(parseInt(mon) - 1).click(); //or Number(mon)
    //await page.locator('.react-calendar__month-view__days__day').nth(parseInt(day)).click();
    //await page.locator('abbr:has-text("'+day+'")').click();
    await page.locator("//abbr[text()='" + day + "']").click();


    ///assertion
    const inputList = await page.locator('.react-date-picker__inputGroup input');

    for (let i = 1; i < expectedList.length; ++i) {

        const val = await inputList.nth(i).inputValue();
        //const val1= await inputList.nth(i).getAttribute("value");
        expect(val).toEqual(expectedList[i]);
        // expect(val1).toEqual(expectedList[i]);

    }





}

);