# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: UIBasicstest.spec.js >> Additional Functions for Browser Navigations
- Location: tests\UIBasicstest.spec.js:187:6

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('Element Displayed Example')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByText('Element Displayed Example')

```

```yaml
- navigation:
  - link "About":
    - /url: https://about.google/?fg=1&utm_source=google-IN&utm_medium=referral&utm_campaign=hp-header
  - link "Store":
    - /url: https://store.google.com/IN?utm_source=hp_header&utm_medium=google_ooo&utm_campaign=GS100042&hl=en-IN
  - link "Gmail":
    - /url: https://mail.google.com/mail/&ogbl
  - link "Search for Images":
    - /url: https://www.google.com/imghp?hl=en&ogbl
    - text: Images
  - button "Google apps"
  - link "Sign in":
    - /url: https://accounts.google.com/ServiceLogin?hl=en&passive=true&continue=https://www.google.com/&ec=futura_exp_og_so_72776762_e
- img "Google"
- search:
  - button "Add files and tools"
  - combobox "Search"
  - button "Search by voice"
  - button "Search by image"
  - link "AI Mode"
  - button "Google Search"
  - button "I'm Feeling Lucky"
- text: "Google offered in:"
- link "हिन्दी":
  - /url: https://www.google.com/setprefs?sig=0_o_4kn08JoZUwgidrxmn0xquikbk%3D&hl=hi&source=homepage&sa=X&ved=0ahUKEwid94Kqxb2VAxWgamwGHao9EOcQ2ZgBCCY
- link "বাংলা":
  - /url: https://www.google.com/setprefs?sig=0_o_4kn08JoZUwgidrxmn0xquikbk%3D&hl=bn&source=homepage&sa=X&ved=0ahUKEwid94Kqxb2VAxWgamwGHao9EOcQ2ZgBCCc
- link "తెలుగు":
  - /url: https://www.google.com/setprefs?sig=0_o_4kn08JoZUwgidrxmn0xquikbk%3D&hl=te&source=homepage&sa=X&ved=0ahUKEwid94Kqxb2VAxWgamwGHao9EOcQ2ZgBCCg
- link "मराठी":
  - /url: https://www.google.com/setprefs?sig=0_o_4kn08JoZUwgidrxmn0xquikbk%3D&hl=mr&source=homepage&sa=X&ved=0ahUKEwid94Kqxb2VAxWgamwGHao9EOcQ2ZgBCCk
- link "தமிழ்":
  - /url: https://www.google.com/setprefs?sig=0_o_4kn08JoZUwgidrxmn0xquikbk%3D&hl=ta&source=homepage&sa=X&ved=0ahUKEwid94Kqxb2VAxWgamwGHao9EOcQ2ZgBCCo
- link "ગુજરાતી":
  - /url: https://www.google.com/setprefs?sig=0_o_4kn08JoZUwgidrxmn0xquikbk%3D&hl=gu&source=homepage&sa=X&ved=0ahUKEwid94Kqxb2VAxWgamwGHao9EOcQ2ZgBCCs
- link "ಕನ್ನಡ":
  - /url: https://www.google.com/setprefs?sig=0_o_4kn08JoZUwgidrxmn0xquikbk%3D&hl=kn&source=homepage&sa=X&ved=0ahUKEwid94Kqxb2VAxWgamwGHao9EOcQ2ZgBCCw
- link "മലയാളം":
  - /url: https://www.google.com/setprefs?sig=0_o_4kn08JoZUwgidrxmn0xquikbk%3D&hl=ml&source=homepage&sa=X&ved=0ahUKEwid94Kqxb2VAxWgamwGHao9EOcQ2ZgBCC0
- link "ਪੰਜਾਬੀ":
  - /url: https://www.google.com/setprefs?sig=0_o_4kn08JoZUwgidrxmn0xquikbk%3D&hl=pa&source=homepage&sa=X&ved=0ahUKEwid94Kqxb2VAxWgamwGHao9EOcQ2ZgBCC4
- contentinfo:
  - text: India
  - link "Advertising":
    - /url: https://www.google.com/intl/en_in/ads/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1
  - link "Business":
    - /url: https://www.google.com/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1
  - link "How Search works":
    - /url: https://google.com/search/howsearchworks/?fg=1
  - link "Privacy":
    - /url: https://policies.google.com/privacy?hl=en-IN&fg=1
  - link "Terms":
    - /url: https://policies.google.com/terms?hl=en-IN&fg=1
  - button "Settings"
```

# Test source

```ts
  98  |     //Dropdown select option
  99  |     await dropdown.selectOption("consult");
  100 | 
  101 |     //select last dropdown as "User"
  102 |     await radioBtn.last().click();
  103 | 
  104 |     //Web Page Popup handling
  105 |     await okbtnonWebPage.click();
  106 | 
  107 |     //Assert that the radio button is selected
  108 |     await expect(radioBtn.last()).toBeChecked();
  109 | 
  110 |     //Another way of checking the selection of the radio button
  111 |     await radioBtn.last().isChecked().then(t => console.log(t));
  112 |     //Assertion.Notice where await is used. await is always used where actions are specified.
  113 |     expect(await radioBtn.last().isChecked()).toBeTruthy();
  114 | 
  115 |     //Checkbox selection
  116 |     await checkBox.check(); //or click()
  117 | 
  118 |     //assertion to check the selection
  119 |     await expect(checkBox).toBeChecked();
  120 |     //Assertion. Notice where await is used.
  121 |     expect(await checkBox.isChecked()).toBeTruthy();
  122 | 
  123 |     //Checkbox uncheck
  124 |     await checkBox.uncheck();
  125 | 
  126 |     //assertion of uncheck. Notice where await is used.
  127 |     expect(await checkBox.isChecked()).toBeFalsy();
  128 | 
  129 |     //Playwright Inspector to debug. Not always needed. Use after the required step.
  130 |     //await page.pause();
  131 | 
  132 |     //Check the Blinking link on the webpages.
  133 |     await expect(docLink).toHaveAttribute('class', 'blinkingText');
  134 | }
  135 | );
  136 | 
  137 | 
  138 | 
  139 | test("Child Window", async ({ browser }) => //or ()=>//async function() is the same
  140 | 
  141 | {
  142 |     const context = await browser.newContext();//creates a new browser context, which is an isolated environment for testing. It allows you to run tests in parallel without interference.
  143 |     //open a new page
  144 |     const page = await context.newPage();
  145 |     //navigates to the specified URL
  146 |     await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  147 | 
  148 |     const userName = page.locator('input#username');
  149 |     const docLink = page.locator('a[href*="documents-request"]');
  150 | 
  151 |     //click on the blinking link and goto child window
  152 |     //docLink.click();
  153 |     //Promise to run asynchronously the operations on the child window.Refer oneNote to know what are the promise types 
  154 | 
  155 |     const [newPage] = await Promise.all(
  156 |         [
  157 |             context.waitForEvent('page'),
  158 |             docLink.click()
  159 |         ]
  160 |     )
  161 | 
  162 |     const secondPageLinkText = newPage.locator('p.red');
  163 |     await expect(secondPageLinkText).toContainText("Please email us");
  164 | 
  165 |     //get the domain name / username from the text content
  166 | 
  167 |     const text = await secondPageLinkText.textContent();
  168 |     //console.log(text);
  169 | 
  170 |     //Split by @ and then by ' ' to get the domain name used
  171 |     const textArr = text.split('@')[1];
  172 |     const domain = textArr.split(' ')[0];
  173 | 
  174 |     //console.log(domain);
  175 | 
  176 |     await userName.fill(domain);
  177 | 
  178 |     //page.pause();
  179 |     await userName.inputValue().then(t => console.log(t + " is the username entered"));
  180 | 
  181 |     expect(await userName.inputValue()).toContain('rahulshettyacademy')
  182 | 
  183 | 
  184 | }
  185 | );
  186 | 
  187 | test.only("Additional Functions for Browser Navigations", async ({ page }) => {
  188 | 
  189 |     //move from one page to another (back and forth)
  190 |     await page.goto("https://rahulshettyacademy.com/automationPractice/");
  191 |     await page.goto("https:google.com")
  192 |     await page.goForward();
  193 |     await page.goBack();
  194 | 
  195 |     //await page.pause();
  196 | 
  197 |     //Hidden elements check
> 198 |     await expect (page.getByText("Element Displayed Example")).toBeVisible();
      |                                                                ^ Error: expect(locator).toBeVisible() failed
  199 |     //await expect (page.locator("legend(has-text:'Element Displayed Example')")).toBeVisible();
  200 |     await page.locator("#hide-textbox").click();
  201 |     await expect(page.locator("#displayed-text")).toBeHidden();
  202 | 
  203 |     //Java popup check. Use JS event listener 
  204 |     await page.on('dialog',dialog=>dialog.accept());
  205 |     await page.locator("#confirmbtn").click();
  206 | 
  207 |     //Mouse hover
  208 |     await page.locator("#mousehover").hover();
  209 | 
  210 |     //Frames
  211 |     const framepage = await page.frameLocator("#courses-iframe");
  212 |     //check the call for visible element in the locator
  213 |     await framepage.locator("li a[href='lifetime-access']:visible").click();
  214 |     const subscribers = await framepage.locator(".text h2").textContent();
  215 |     console.log(subscribers.split(" ")[1]);
  216 | 
  217 | });
  218 | 
  219 | 
  220 | test("Screenshots and Visual Compares", async ({ page }) => {
  221 | 
  222 |     //move from one page to another (back and forth)
  223 |     await page.goto("https://rahulshettyacademy.com/automationPractice/");
  224 | 
  225 |     //Hidden elements check
  226 |     await expect (page.getByText("Element Displayed Example")).toBeVisible();
  227 |     //Take screenshot before element is hidden
  228 |     await page.locator("#displayed-text").screenshot({path: 'Visibletextbox.png'});
  229 |     await page.locator("#hide-textbox").click();
  230 |     //Take page's screenshot after element hidden
  231 |     await page.screenshot({path:'Hidetextbox.png'});
  232 |     await expect(page.locator("#displayed-text")).toBeHidden();
  233 | 
  234 |     await expect(await page.screenshot()).toMatchSnapshot('Hidetextbox.png');
  235 | 
  236 | 
  237 | });
  238 | 
```