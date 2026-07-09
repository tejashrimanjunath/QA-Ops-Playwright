const { expect } = require ('@playwright/test');

class CheckoutPage {

    constructor(page, fullCountryName) {

        this.page = page;
        this.checkoutBtn = page.getByRole("button", { name: "Checkout" });
        this.waitforLoad = page.locator('.field');
        this.checkoutCountry = page.getByPlaceholder("Select Country");

        this.countryDropdown = page.locator("[class*='ta-results']");
        this.cardDropdowns = page.locator("[class = 'input ddl']");
        this.cardDet = page.locator('input[type="text"]');

        this.couponBtn = page.locator("[type='submit']");
        this.couponApplied = page.locator("div[class='field small'] p");

        this.checkoutUsername = page.locator(".user__name [type='text']");
        this.placeOrder = page.getByText("PLACE ORDER");
        //this.couponText = couponText;
        //this.countryVal=countryVal;
        this.fullcountry = page.getByRole("button", { name: fullCountryName }).nth(1);

    }

    async createCheckout(countryVal,couponText,userName) {

        await this.checkoutBtn.click();

        await this.waitforLoad.first().waitFor();

        //Fill the card details on Checkout page
        await this.cardDet.first().clear();
        await this.cardDet.first().fill("1234 5678 9101 1234");
        await this.cardDet.nth(1).fill("123");
        await this.cardDet.nth(2).fill("Tejashri M");

        await this.cardDet.nth(3).fill("rahulshettyacademy");
        await this.couponBtn.click();

        expect(await this.couponApplied.textContent()).toContain(couponText);

        await this.cardDropdowns.first().selectOption("12");
        await this.cardDropdowns.last().selectOption("30");

        //await this.page.pause();

        //fill the dynamic dropdown for country notice the use of pressSequentially and the delay introduced which is used to handle flakiness.
        await this.checkoutCountry.pressSequentially(countryVal, { delay: 150 });

        await this.countryDropdown.locator('button').first().waitFor();

        await this.fullcountry.click();

        //Validate the checkout email with login userid
        await expect(this.checkoutUsername.first()).toHaveText(userName);

        //Click on Place order
        await this.placeOrder.click();

    }
}

module.exports = { CheckoutPage };