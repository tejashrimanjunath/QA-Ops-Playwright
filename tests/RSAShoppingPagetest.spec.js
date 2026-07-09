// Here RSA = Rahul Shetty Academy

import { test, expect } from "@playwright/test";

test("RSA HomePage Test", async ({ page }) => {

    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");

    //Signin page and home page
    const userName = page.locator('#userEmail');
    const password = page.locator('#userPassword');
    const signInBtn = page.locator('#login');
    const prodTitles = page.locator('.card-body b');

    //Shopping bag elements
    const product = page.locator('.card-body');
    const prodName = 'ZARA COAT 3';
    const cart = page.locator('[routerlink*="cart"]');
    const checkoutBtn = page.locator("text=Checkout");

    //checkout page
    const checkoutCountry = page.locator("[placeholder*='Country']");
    const countryDropdown = page.locator("[class*='ta-results']");
    const cardDropdowns = page.locator("[class = 'input ddl']");
    const cardDet = page.locator('input[type="text"]');

    const couponBtn = page.locator("[type='submit']");
    const couponApplied = page.locator("div[class='field small'] p");

    const checkoutUsername = page.locator(".user__name [type='text']");
    const placeOrder = page.locator(".action__submit");

    //confirmation Page
    const confirmMsg = page.locator('.hero-primary');
    const orderId = page.locator('.em-spacer-1 .ng-star-inserted');

    //Orders Page
    const orderLink = page.locator("li [routerlink*='myorders']");
    const orderIdinTable = page.locator('tr.ng-star-inserted');

    //Order Details Page
    const orderNumDetails = page.locator(".col-text");

    const emailId = 'teju.118@gmail.com';
    await userName.fill(emailId);
    await password.fill('teja123');
    await signInBtn.click();

    //await page.title().then(t => console.log(t));

    await expect(page).toHaveTitle("Let's Shop");

    //await  prodTitles.first().textContent().then(t=>console.log(t));

    //await expect(prodTitles.first()).toContainText('ADIDAS ORIGINAL');

    //wait until the page loads for the product list to not be empty. 
    // But, this may not work all the time check playwright documentation 
    //await page.waitForLoadState("networkidle");

    //alternate to the above is waitFor(), but this also does not work for a list, hence we need to fetch
    //the first or last element from the list and then use waitFor()
    await prodTitles.last().waitFor();

    //await prodTitles.allTextContents().then(t=>console.log(t));

    //get all items in home page
    const count = await product.count();
    //console.log(count);

    for (var i = 0; i < count; ++i) {
        //Match the required product with the home page products 
        if (await product.nth(i).locator('b').textContent() === prodName) {
            //Add to cart
            await product.nth(i).locator("text= Add To Cart").click();
            break;

        }
    }

    //Click on the cart
    await cart.click();

    //wait for the cart page to load and use the list of elements in the cart as checkpoint
    await page.locator('div li').first().waitFor();

    //Match the product name to the cart product name
    //expect (await page.locator("h3:has-text('ZARA COAT 3')").isVisible()).toBeTruthy();
    //***Note the below. the above line has the string directly passed. Below we pass the variable.
    expect(await page.locator(`h3:has-text("${prodName}")`).isVisible()).toBeTruthy();

    //checkout
    await checkoutBtn.click();

    await page.locator('.field').first().waitFor();

    //Fill the card details on Checkout page
    await cardDet.first().clear();
    await cardDet.first().fill("1234 5678 9101 1234");
    await cardDet.nth(1).fill("123");
    await cardDet.nth(2).fill("Tejashri M");

    await cardDet.nth(3).fill("rahulshettyacademy");
    await couponBtn.click();
    //await couponApplied.waitFor();
    const couponText = "* Coupon Applied";
    expect(await couponApplied.textContent()).toContain(couponText);

    await cardDropdowns.first().selectOption("12");
    await cardDropdowns.last().selectOption("30");

    /*
    page.pause() is a powerful debugging tool. When encountered in a test, 
    it pauses the test execution and opens the Playwright Inspector, allowing developers 
    to interact with the browser, inspect elements, and step through the test execution.
    */
    //await page.pause();

    //fill the dynamic dropdown for country notice the use of pressSequentially and the delay introduced which is used to handle flakiness.
    const countryVal = "ind"
    await checkoutCountry.pressSequentially(countryVal, { delay: 150 });

    await countryDropdown.locator('button').first().waitFor();
    const dropdownOptionsCount = await countryDropdown.locator('button').count();
    //console.log(dropdownOptionsCount);

    for (let i = 0; i < dropdownOptionsCount; i++) {
        let text = await countryDropdown.locator('button').nth(i).textContent();
        if (text.trim() === "India") {
            await countryDropdown.locator('button').nth(i).click();
            break;
        }
    }

    //Validate the checkout email with login userif
    await expect(checkoutUsername.first()).toHaveText(emailId);


    //Click on Place order
    await placeOrder.click();

    //Confirmation page validations
    //validate the confirm message.
    const msg = ' Thankyou for the order. ';
    await expect(confirmMsg).toHaveText(msg);

    const orderNumber = await orderId.textContent();
    //console.log(orderNumber);

    //Orders Page data check with the order number.

    const orderNumberTrimmed = orderNumber.split(' ');

    //console.log(orderNumberTrimmed);

    let orderIdFinal=0;
    for (i = 0; i < orderNumberTrimmed.length; i++) {
        if (orderNumberTrimmed[i].length > 3) {
            orderIdFinal = orderNumberTrimmed[i];
            break;
        }
    }

    //console.log(orderIdFinal);
    await orderLink.click();

    //Need to use waitFor() as count can return zero also and is not auto waited for
    await orderIdinTable.first().waitFor();
    const ordersCount = await orderIdinTable.count();
    //console.log(ordersCount)
    for (i = 0; i < ordersCount; ++i) {

        //await orderIdinTable.nth(i).locator("th").textContent().then(t=> console.log(t));
        expect(await orderIdinTable.nth(i).locator("th")).toHaveText(orderIdFinal);
        
        await orderIdinTable.nth(i).locator("button").first().click(); //td button[class='btn btn-primary']
        
        //await page.pause();
        break;
    }
    //Need NOT use waitFor() as textContent() is  auto waited for under Playwright
    const orderDetails = await orderNumDetails.textContent();
    await expect(orderDetails.includes(orderIdFinal)).toBeTruthy();

});

test.skip("Orders Page", async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");

    //Signin page and home page
    const userName = page.locator('#userEmail');
    const password = page.locator('#userPassword');
    const signInBtn = page.locator('#login');
    const prodTitles = page.locator('.card-body b');

    //Login to the page
    const emailId = 'teju.118@gmail.com';
    await userName.fill(emailId);
    await password.fill('teja123');
    await signInBtn.click();
});