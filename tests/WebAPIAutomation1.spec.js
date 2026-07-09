//Token api response captured in local storage of application tab 

import { test, expect, request } from "@playwright/test"

const loginPayload = { userEmail: "teju.118@gmail.com", userPassword: "teja123" };
const orderPayload = { orders: [{ country: "cuba", productOrderedId: "6960eac0c941646b7a8b3e68" }] }
let token;
let orderId;


test.beforeAll(async () => {

    const apiContext = await request.newContext();

    const loginPostResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
        { data: loginPayload });

    await expect(loginPostResponse.ok()).toBeTruthy();

    const loginResponseJson = await loginPostResponse.json();

    token = loginResponseJson.token;
    await console.log(token)

    //create new order
    const orderResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",
        {
            data: orderPayload,
            headers: {
                'Authorization': token,
                'Content-Type': 'application/json'
            }
        })


    const orderResponseJson = await orderResponse.json();
    console.log(orderResponseJson);
    orderId = orderResponseJson.orders[0];
    console.log(orderId);

});



test("RSA HomePage API Token Test", async ({ page }) => {

    await page.addInitScript(value => {

        window.localStorage.setItem('token', value);
    }, token);

    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");

    const prodTitles = page.locator('.card-body b');
    await prodTitles.first().waitFor();

    //Orders Page
    const orderLink = page.locator("li [routerlink*='myorders']");
    const orderIdinTable = page.locator('tr.ng-star-inserted');

    //Order Details Page
    const orderNumDetails = page.locator(".col-text");

    //await page.title().then(t => console.log(t));

    await expect(page).toHaveTitle("Let's Shop");

    await orderLink.click();

    //Need to use waitFor() as count can return zero also and is not auto waited for
    await orderIdinTable.first().waitFor();
    const ordersCount = await orderIdinTable.count();
    //console.log(ordersCount)
    for (let i = 0; i < ordersCount; ++i) {

        //await orderIdinTable.nth(i).locator("th").textContent().then(t=> console.log(t));
        expect(await orderIdinTable.nth(i).locator("th")).toHaveText(orderId); //orderIdFinal

        await orderIdinTable.nth(i).locator("button").first().click(); //td button[class='btn btn-primary']

        //await page.pause();
        break;
    }
    //Need NOT use waitFor() as textContent() is  auto waited for under Playwright
    const orderDetails = await orderNumDetails.textContent();
    await expect(orderDetails.includes(orderId)).toBeTruthy(); //orderIdFinal

});