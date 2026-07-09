//destructuring assignment in curly braces {test} to unpack the test specific utilities so you can use them directly in your test files.
import { test, expect } from '@playwright/test';
import { randomFillSync } from 'node:crypto';
//OR const {test} = require('@plawright/test');
//importing expect from the playwright.config.js file to use it in our test files. 
// Expect is a built-in assertion library that allows you to write assertions in your tests.
//const {expect} = require ('@playwright/test');

//Two ways of opening the browser and navigating to the URL in Playwright: 
// 1)

test.describe.configure("mode:serial");

test("Browser Context Playwright Test", async ({ browser }) => //or ()=>//async function() is the same

{
    //open chrome - not with any plugins/cokies

    const context = await browser.newContext();//creates a new browser context, which is an isolated environment for testing. It allows you to run tests in parallel without interference.
    //open a new page
    const page = await context.newPage(); //creates a new page within the browser context, which is where you will perform your test actions.
    //navigate to the url
    const details = await page.goto("https://rahulshettyacademy.com/loginpagePractise/"); //navigates to the specified URL, in this case, Google's homepage.
    const userName = page.locator('input#username');
    const cardTitles = page.locator(".card-body a");
    await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy"); //assertion to check if the page title is correct.

    await userName.fill('rahulshettyacadem');
    await page.locator('#password').fill('Learning@830$3mK2');
    await page.locator('#signInBtn').click();

    await page.locator('[style*="block"]').textContent().then(t => console.log(t));

    await expect(page.locator("[style*='block']")).toContainText("Incorrect username");

    await userName.fill("");
    await userName.fill('rahulshettyacademy');
    await page.locator('#signInBtn').click();

    // await cardTitles.nth(0).textContent().then(t=>console.log(t));

    // await cardTitles.first().textContent().then(t=>console.log(t));

    // await cardTitles.last().textContent().then(t=>console.log(t));

    await cardTitles.allTextContents().then(t => console.log(t));

}
);

//2)
test("Page Playwright Test", async ({ page }) => //or ()=>//async function() is the same

{
    //open chrome - not with any plugins/cokies
    //open a new page
    //navigate to the url
    await page.goto("https://www.google.com");
    //navigates to the specified URL, in this case, Google's homepage..

    //get title
    const pageTitle = await page.title();
    console.log(pageTitle);

    //assertion
    await expect(page).toHaveTitle("Google")

}
);

test/*.only*/("My own Hello World Test", async () => { //.only runs only this test and ignores the rest.

    console.log("Hello World");

});


test("UI Controls", async ({ page }) => //or ()=>//async function() is the same

{
    //navigates to the specified URL
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

    //Cred's
    const userName = page.locator('input#username');
    const signIn = page.locator('#signInBtn');
    const passwd = page.locator('#password');
    //await userName.fill('rahulshettyacadem');
    //await page.locator('#password').fill('Learning@830$3mK2');
    //await page.locator('#signInBtn').click();

    const dropdown = page.locator('select.form-control');
    const radioBtn = page.locator('.radiotextsty');
    const checkBox = page.locator('#terms');
    const okbtnonWebPage = page.locator('#okayBtn');
    const docLink = page.locator('a[href*="documents-request"]');

    //Dropdown select option
    await dropdown.selectOption("consult");

    //select last dropdown as "User"
    await radioBtn.last().click();

    //Web Page Popup handling
    await okbtnonWebPage.click();

    //Assert that the radio button is selected
    await expect(radioBtn.last()).toBeChecked();

    //Another way of checking the selection of the radio button
    await radioBtn.last().isChecked().then(t => console.log(t));
    //Assertion.Notice where await is used. await is always used where actions are specified.
    expect(await radioBtn.last().isChecked()).toBeTruthy();

    //Checkbox selection
    await checkBox.check(); //or click()

    //assertion to check the selection
    await expect(checkBox).toBeChecked();
    //Assertion. Notice where await is used.
    expect(await checkBox.isChecked()).toBeTruthy();

    //Checkbox uncheck
    await checkBox.uncheck();

    //assertion of uncheck. Notice where await is used.
    expect(await checkBox.isChecked()).toBeFalsy();

    //Playwright Inspector to debug. Not always needed. Use after the required step.
    //await page.pause();

    //Check the Blinking link on the webpages.
    await expect(docLink).toHaveAttribute('class', 'blinkingText');
}
);



test("Child Window", async ({ browser }) => //or ()=>//async function() is the same

{
    const context = await browser.newContext();//creates a new browser context, which is an isolated environment for testing. It allows you to run tests in parallel without interference.
    //open a new page
    const page = await context.newPage();
    //navigates to the specified URL
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

    const userName = page.locator('input#username');
    const docLink = page.locator('a[href*="documents-request"]');

    //click on the blinking link and goto child window
    //docLink.click();
    //Promise to run asynchronously the operations on the child window.Refer oneNote to know what are the promise types 

    const [newPage] = await Promise.all(
        [
            context.waitForEvent('page'),
            docLink.click()
        ]
    )

    const secondPageLinkText = newPage.locator('p.red');
    await expect(secondPageLinkText).toContainText("Please email us");

    //get the domain name / username from the text content

    const text = await secondPageLinkText.textContent();
    //console.log(text);

    //Split by @ and then by ' ' to get the domain name used
    const textArr = text.split('@')[1];
    const domain = textArr.split(' ')[0];

    //console.log(domain);

    await userName.fill(domain);

    //page.pause();
    await userName.inputValue().then(t => console.log(t + " is the username entered"));

    expect(await userName.inputValue()).toContain('rahulshettyacademy')


}
);

test("Additional Functions for Browser Navigations", async ({ page }) => {

    //move from one page to another (back and forth)
    await page.goto("https://rahulshettyacademy.com/automationPractice/");
    //await page.goto("https:google.com")
    //await page.goForward();
    //await page.goBack();

    //await page.pause();

    await page.getByText("Element Displayed Example").waitFor();

    //Hidden elements check
    await expect (page.getByText("Element Displayed Example")).toBeVisible();
    //await expect (page.locator("legend(has-text:'Element Displayed Example')")).toBeVisible();
    await page.locator("#hide-textbox").click();
    await expect(page.locator("#displayed-text")).toBeHidden();

    //Java popup check. Use JS event listener 
    await page.on('dialog',dialog=>dialog.accept());
    await page.locator("#confirmbtn").click();

    //Mouse hover
    await page.locator("#mousehover").hover();
    console.log("Reached here");

    //Frames
    const framepage = await page.frameLocator("#courses-iframe");
    //check the call for visible element in the locator
    await framepage.locator("li a[href='lifetime-access']:visible").click();
    const subscribers = await framepage.locator(".text h2").textContent();
    console.log(subscribers.split(" ")[1]);

});


test("Screenshots and Visual Compares", async ({ page }) => {

    //move from one page to another (back and forth)
    await page.goto("https://rahulshettyacademy.com/automationPractice/");

    //Hidden elements check
    await expect (page.getByText("Element Displayed Example")).toBeVisible();
    //Take screenshot before element is hidden
    await page.locator("#displayed-text").screenshot({path: 'Visibletextbox.png'});
    await page.locator("#hide-textbox").click();
    //Take page's screenshot after element hidden
    await page.screenshot({path:'Hidetextbox.png'});
    await expect(page.locator("#displayed-text")).toBeHidden();
    await page.locator("#show-textbox").click();
    await page.getByText("Element Displayed Example").waitFor();
    await expect(await page.screenshot()).toMatchSnapshot('Visibletextbox.png');


});