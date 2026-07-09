//Session 79. Excel utilities handler in Playwright

import { test, expect } from '@playwright/test'

//exceljs libraray exposes a class which is Exceljs
const Exceljs = require('exceljs')
//Create row and col properties in output object
let output = { row: -1, col: 1 }


async function writeExcel(searchVal, replacedText, colChangeVal, filePath) {

    //access workbook constructor 
    const workbook = new Exceljs.Workbook();

    //use anonymous function as in then(){} or use await for all lines and wrap it all in async function
    //read the file needed
    await workbook.xlsx.readFile(filePath)//.then(() =>{

    //get the required sheet
    const worksheet = workbook.getWorksheet('Sheet1');

    //call readexcel function
    await readExcel(worksheet, searchVal);

    //Get the data from the cell which has Kivi
    const cell = await worksheet.getCell(output.row, output.col + 2);
    //Replace the value
    cell.value = replacedText;
    //confirm
    console.log("Cell value replaced");
    //save the file.
    await workbook.xlsx.writeFile(filePath);
}

async function readExcel(worksheet, searchVal) {

    //read each row
    worksheet.eachRow((row, rowNumber) => {

        //read each cell
        row.eachCell((cell, colNumber) => {

            //Print all values
            //console.log(cell.value);

            //Print the col and row of the required value
            if (cell.value == searchVal) {
                console.log(rowNumber, colNumber);

                //get the row and col into output object
                output.row = rowNumber;
                output.col = colNumber;
            }

        })

    })

};

//call the function
//writeExcel("Kivi", 300,2, ".\\exceldownloadtest.xlsx");

test('UploadDownloadExcel', async ({ page }) => {

    const textVal = 'Apple';
    const updatedValue = '500';

    await page.goto("https://rahulshettyacademy.com/upload-download-test/index.html");

    //wait for download event to complete. Listener to wait for event before downloading.
    const downloadEventPromise = page.waitForEvent('download');
    
    //Click on download button to download data in the form of excel .xlsx format
    await page.getByRole('button', { name: 'Download' }).click();

    //Wait for the event to complete after clicking based on the listener
    //await page.waitForEvent('download');
    const download = await downloadEventPromise;

    await download.saveAs('C:\\Users\\Tejashri\\Downloads\\' + download.suggestedFilename());

    //await page.pause();

    //Call writeExcel function
    await writeExcel(textVal,updatedValue,2, "C:\\Users\\Tejashri\\Downloads\\download.xlsx");

    //Click on Choose File button for uploading
    //await page.locator("#fileinput").click();

    //Windows popup handler for uploading
    await page.locator("#fileinput").setInputFiles("C:\\Users\\Tejashri\\Downloads\\download.xlsx");

    //Success message on uploading.
    await page.locator(".Toastify__toast").isVisible();

    const textLocator = await page.getByText(textVal);
    const desiredRow = await page.getByRole('row').filter({has:textLocator});
    await expect(desiredRow.locator("#cell-4-undefined")).toContainText(updatedValue);

});