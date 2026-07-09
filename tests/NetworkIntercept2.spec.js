//Lecture 69, security testing scenrio on orders page. Testing 403 status for users trying to access others' orders. Refer line 39-42
//check playwright.dev/docs/api/class-route

import { test, expect, request } from "@playwright/test"
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

test("Security Test Request Intercept", async ({page}) => {
    //Login and reach the order page
    await page.addInitScript(value => {
        
        window.localStorage.setItem('token', value);
    
    }, response.token);

    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");

    const prodTitles = page.locator('.card-body b');
    await prodTitles.first().waitFor();

    await expect(page).toHaveTitle("Let's Shop");

    //Orders Page
    const orderLink = page.locator("li [routerlink*='myorders']");
    await orderLink.click();

    //Before clicking on the view button intercept "REQUEST" 

    await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=*",
        route=>route.continue({url:"https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=621661f884b053f6765465b6"})
    );

    //Then click on view
    await page.locator("button:has-text('View')").first().click();
   // await page.pause();

   await expect(page.locator('p').last()).toContainText("not authorize to view");

});