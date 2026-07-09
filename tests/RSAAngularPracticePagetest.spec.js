//Practie code for all getBy locators

import {test,expect} from "@playwright/test";
import { link } from "node:fs";

test("Playwright Special Locators",async({page})=>{
   /*
   getByPlaceholder (and other "getBy" locators like getByRole, getByText) are Playwright's 
   text-based locators. These locators are generally more robust and less prone to breaking 
   when underlying HTML structure or specific attributes (like id or class) change, 
   as they rely on user-facing attributes like placeholder text, visible text, or ARIA roles.
   */

   await page.goto("https://rahulshettyacademy.com/angularpractice/");

   //getByLabel()
   await page.getByLabel("Check me out if you Love IceCreams!").click();
   await page.getByLabel("Employed").check();
   await page.getByLabel("Gender").selectOption("Female");

    //get by Placeholder
    await page.getByPlaceholder("Password").clear();
    await page.getByPlaceholder("Password").fill("teja123");

    //get by Role
    //When using getByRole, the name option refers to the accessible name of the element. 
    // This is the name that assistive technologies (like screen readers) would use for the element, 
    // making tests more user-centric and robust. NOT the name attribute value or the text content of the button
    await page.getByRole("button",{name:"Submit"}).click();
    
    //get by text
     expect(await page.getByText("Success!").isVisible()).toBeTruthy();

    //get by Role
    await page.getByRole("link",{name:"Shop"}).click();

     //Method chaining
     await page.locator("app-card").filter({hasText:"Nokia Edge"}).getByRole("button").click();

}
);