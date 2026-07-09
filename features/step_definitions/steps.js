const { expect } = require('@playwright/test');
const playwright = require('@playwright/test');
const { Given, When, Then } = require('@cucumber/cucumber');
const { POManager } = require("../../pageobjects/POManager");


Given('User from {string} to login with valid {string} and {string} to the required e-commerce website for ordering product {string}',
    //Given('User to login with valid {string} and {string} to the required e-commerce website for ordering a product',
    { timeout: 100 * 1500 }, async function (fullCountryName, userName, password, prodName) {
           this.userName = userName;
           this.prodName = prodName;
           this.fullCountryName=fullCountryName;
        // { timeout: 100 * 1500 }, async function (userName, password) {

        //Calling action functions through POManager
        this.pomanager = new POManager(this.page, prodName, fullCountryName);

        //Login Page
        const login = this.pomanager.getLoginPage();
        await login.gotoPage();
        await login.validLogin(userName, password);
        await expect(this.page).toHaveTitle("Let's Shop");
    });


When('user logs in and places order with card detail including {string} and {string} for the product',
    { timeout: 100 * 1500 }, async function (countryVal, couponText) {
        // Write code here that turns the phrase above into concrete actions
        //Dashboard Page
        const dashboard = this.pomanager.getDashboardPage();
        await dashboard.searchProducts();
        await dashboard.navigateToCart();

        expect(await this.page.getByText(this.prodName).isVisible()).toBeTruthy();

        //Checkout Page
        const checkout = this.pomanager.getCheckoutPage();
        await checkout.createCheckout(countryVal, couponText, this.userName);
    });

Then('User should be confirmed the order after payment is successful with the {string}', async function (msg) {
    // Write code here that turns the phrase above into concrete actions
    //Confirm Page
    const confirm = this.pomanager.getConfirmationPage();
    this.orderNumber = await confirm.confirmOrder(msg);
});

When('Order checked on the orders page', async function () {
    // Write code here that turns the phrase above into concrete actions
    //Orders Page
    const orders = this.pomanager.getOrdersPage();
    this.orderIdFinal = await orders.checkOrders(this.orderNumber);
});

Then('Order should be visible on the Order-Details page', async function () {
    // Write code here that turns the phrase above into concrete actions
    //Order Details Page
    const orderDetails = this.pomanager.getOrderdetailsPage();
    await orderDetails.confirmOrderDetails(this.orderIdFinal);
});


////------------------------------------------------------//////////

Given('Login with invalid {string} and {string} to the required e-commerce website',{timeout:100*1500}, async function (user, passw) {
    // Write code here that turns the phrase above into concrete actions
    await this.page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const userName = this.page.locator('input#username');
    await expect(this.page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy");

    await userName.fill(user);
    await this.page.locator('#password').fill(passw);
    await this.page.locator('#signInBtn').click();

});

Then('User is not able to login and error message is displayed', async function () {
    // Write code here that turns the phrase above into concrete actions

    await this.page.locator('[style*="block"]').textContent().then(t => console.log(t));
    await expect(this.page.locator("[style*='block']")).toContainText("Incorrect username");
});