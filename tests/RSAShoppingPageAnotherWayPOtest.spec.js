// RSA = Rahul Shetty Academy
//Data Driver Framework

//2. POM pattern defined in the pageobjects folder 
import { test, expect } from "@playwright/test";
import { customtest} from '../utils/test-base';
import { builtinModules } from "node:module";

// const { LoginPage } = require("../pageobjects/LoginPage");
// const { DashboardPage } = require("../pageobjects/DashboardPage");
// const { CheckoutPage } = require("../pageobjects/CheckoutPage");
// const { ConfirmationPage } = require("../pageobjects/ConfirmationPage");
// const { OrdersPage } = require("../pageobjects/OrdersPage");
// const { OrderdetailsPage } = require("../pageobjects/OrderdetailsPage");

//3. POManager for common class object creation
const { POManager } = require("../pageobjects/POManager");

//4 & 5
const testdataObject = JSON.parse(JSON.stringify(require('../utils/JsonTestdataUtil.json')));

//test running mode. Since there is interdependency , used serial. If independent use mode : "parallel"
test.describe.configure({mode:"serial"});

//Using the for loop to parameterize the tests for various product names.
for (const data of testdataObject) {
    test(`@web RSA HomePage Test ${data.prodName}`, async ({ page }) => {

        const userName = data.userName;
        const password = data.password;
        const prodName = data.prodName;
        const fullCountryName = data.fullCountryName;
        const couponText = data.couponText;
        const countryVal = data.countryVal;
        const msg = data.msg;


        //Calling action functions through POManager
        const pomanager = new POManager(page, prodName,fullCountryName);

        //Login Page
        //const login = new LoginPage(page);
        const login = pomanager.getLoginPage();
        await login.gotoPage();
        await login.validLogin(userName, password);
        await expect(page).toHaveTitle("Let's Shop");

        //Dashboard Page
        //const dashboard = new DashboardPage(page, prodName);
        const dashboard = pomanager.getDashboardPage();
        await dashboard.searchProducts();
        await dashboard.navigateToCart();

        expect(await page.getByText(prodName).isVisible()).toBeTruthy();


        //Checkout Page
        //const checkout = new CheckoutPage(page, fullCountryName);
        const checkout = pomanager.getCheckoutPage();
        await checkout.createCheckout(countryVal, couponText, userName);


        //Confirm Page
        //const confirm = new ConfirmationPage(page);
        const confirm = pomanager.getConfirmationPage();
        const orderNumber = await confirm.confirmOrder(msg);


        //Orders Page
        //const orders = new OrdersPage(page);
        const orders = pomanager.getOrdersPage();
        const orderIdFinal = await orders.checkOrders(orderNumber);

        //Order Details Page
        //const orderDetails = new OrderdetailsPage(page);
        const orderDetails = pomanager.getOrderdetailsPage();
        await orderDetails.confirmOrderDetails(orderIdFinal);


    });
}

//Using customtest extension and testDataSet fixture to run the test 
customtest.skip("Running the custom test for login", async ({ page, testDataSet }) => {

    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");

    //Signin page and home page
    const userName = page.locator('#userEmail');
    const password = page.locator('#userPassword');
    const signInBtn = page.locator('#login');
    const prodTitles = page.locator('.card-body b');

    //Login to the page
    const email = testDataSet.userName;
    await userName.fill(email);
    await password.fill(testDataSet.password);
    await signInBtn.click();

    //Assertion:Check title
    await expect(page).toHaveTitle("Let's Shop");

    //Wait for dashboard page to load
    await prodTitles.last().waitFor();
});