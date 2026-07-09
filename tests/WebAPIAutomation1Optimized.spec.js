//Optimized code for WebAPIAutomation1.spec.js, with API calls to login and placing order using API's and no ui code. Use only when order creation need not be validated fully.

import { test, expect, request } from "@playwright/test"
//Importing class.
const APIUtils = require('../utils/APIUtils');

const loginPayload = { userEmail: "teju.118@gmail.com", userPassword: "teja123" };
const orderPayload = { orders: [{ country: "cuba", productOrderedId: "6960eac0c941646b7a8b3e68" }] }

let response;

test.beforeAll(async () => {

    const apiContext = await request.newContext();
    const apiUtils = new APIUtils(apiContext, loginPayload);
    response = await apiUtils.createOrder(orderPayload);

});



test("RSA HomePage Test", async ({ page }) => {

    await page.addInitScript(value => {

        //const apiutils = new APIUtils(apiContext.loginPayload);
        //token = apiutils.getToken();
        //orderId = apiutils.createOrder(orderPayload);

        window.localStorage.setItem('token', value);
    }, response.token);

    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");

    const prodTitles = page.locator('.card-body b');

    //Orders Page
    const orderLink = page.locator("li [routerlink*='myorders']");
    const orderIdinTable = page.locator('tr.ng-star-inserted');

    //Order Details Page
    const orderNumDetails = page.locator(".col-text");

    //await page.title().then(t => console.log(t));

    await expect(page).toHaveTitle("Let's Shop");

    //await page.pause();

    await orderLink.click();

    //Need to use waitFor() as count can return zero also and is not auto waited for
    await orderIdinTable.first().waitFor();
    const ordersCount = await orderIdinTable.count();
    //console.log(ordersCount)
    for (let i = 0; i < ordersCount; ++i) {

        //await orderIdinTable.nth(i).locator("th").textContent().then(t=> console.log(t));
        expect(await orderIdinTable.nth(i).locator("th")).toHaveText(response.orderId); //orderIdFinal

        await orderIdinTable.nth(i).locator("button").first().click(); //td button[class='btn btn-primary']

        //await page.pause();
        break;
    }
    //Need NOT use waitFor() as textContent() is  auto waited for under Playwright
    const orderDetails = await orderNumDetails.textContent();
    await expect(orderDetails.includes(response.orderId)).toBeTruthy(); //orderIdFinal

});