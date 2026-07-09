//How to abort a network call? Session 71 , taking part of UIBasicstest for login. Refer line 13&14 (Commented, if uncommented then comment 18&19 for better view). 
// This is NOT network abort, we can also network abort(500 codes). Talk to developer and find out in real time.

//Also check how to get the logs of request and response from Line 18 & 19

const {test, expect,request,response} = require("@playwright/test");
test("Browser Context Playwright Test", async ({ browser }) => //or ()=>//async function() is the same

{
    //open Chrome - not with any plugins/cokies

    const context = await browser.newContext();//creates a new browser context, which is an isolated environment for testing. It allows you to run tests in parallel without interference.
    //open a new page
    const page = await context.newPage(); //creates a new page within the browser context, which is where you will perform your test actions.
    
    //Netork Call Abort Code. Applicable on any link with .css and fulfill(),abort(),continue() and request() are 4 network intercepting methods. Note.
    //await page.route('**/*.{jpg,jpeg,png}',route=>route.abort());

    //To print api request logs
    await page.on('request',request=>console.log(request.url()));
    await page.on('response',response=>console.log(response.url(), response.status()));

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

    await cardTitles.first().waitFor();

    await cardTitles.allTextContents().then(t => console.log(t));

}
);
