//Create a network interceptor for create orders page, session 66 and 67 (67 is very important session) . Code here is from 31-49

import { test, expect, request } from "@playwright/test"
//Importing class hence {}
const APIUtils = require('../utils/APIUtils');

const loginPayload = { userEmail: "teju.118@gmail.com", userPassword: "teja123" };
const orderPayload = { orders: [{ country: "cuba", productOrderedId: "6960eac0c941646b7a8b3e68" }] }
const fakeOrderPayload = { data: [], message: "No Orders" };
let response;

test.beforeAll(async () => {

    const apiContext = await request.newContext();
    const apiUtils = new APIUtils(apiContext, loginPayload);
    response = await apiUtils.createOrder(orderPayload);

});



test("RSA HomePage Test", async ({ page }) => {

    await page.addInitScript(value => {

        window.localStorage.setItem('token', value);
    }, response.token);

    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");

    //To convert JS string to JSON string 
    let body = JSON.stringify(fakeOrderPayload);
    //Route to the endpoint
    await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*",
        async route => {
            //intercept the response - API response->{Playwright's fake response}-> browser->render data on front end
            //API response
            const routeresponse = await page.request.fetch(route.request());
            //browser->render data on front end
            await route.fulfill(
                {
                    routeresponse,
                    //{Playwright's fake response}
                    body, //body of the response
                }
            );
        }
    );

    await expect(page).toHaveTitle("Let's Shop");

    const prodTitles = page.locator('.card-body b');
    await prodTitles.first().waitFor();


    //Orders Page
    const orderLink = page.locator("li [routerlink*='myorders']");
    await orderLink.click();

    //wait for response to be returned from api asthe fake response and api response times have variance.
    await page.waitForResponse("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*");

    //check the fake response has the right message displayed.
    await page.locator(".mt-4").textContent().then(t => (console.log(t)));


    // //Orders Page

    // const orderIdinTable = page.locator('tr.ng-star-inserted');

    // //Order Details Page
    // const orderNumDetails = page.locator(".col-text");

    // //await page.title().then(t => console.log(t));

    // await orderLink.click();

    // //Need to use waitFor() as count can return zero also and is not auto waited for
    // await orderIdinTable.first().waitFor();
    // const ordersCount = await orderIdinTable.count();
    // //console.log(ordersCount)
    // for (let i = 0; i < ordersCount; ++i) {

    //     //await orderIdinTable.nth(i).locator("th").textContent().then(t=> console.log(t));
    //     expect(await orderIdinTable.nth(i).locator("th")).toHaveText(response.orderId); //orderIdFinal

    //     await orderIdinTable.nth(i).locator("button").first().click(); //td button[class='btn btn-primary']

    //     //await page.pause();
    //     break;
    // }
    // //Need NOT use waitFor() as textContent() is  auto waited for under Playwright
    // const orderDetails = await orderNumDetails.textContent();
    // await expect(orderDetails.includes(response.orderId)).toBeTruthy(); //orderIdFinal

});