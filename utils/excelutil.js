const Exceljs = require("exceljs");

var rowid = 0;
var colid = 0;

async function writeExcel(searchval, filepath, sheetName, colindex, replacedtext) {


    const workbook = new Exceljs.Workbook();
    await workbook.xlsx.readFile(filepath);

    const worksheet = workbook.getWorksheet(sheetName);

    await readExcel(worksheet, searchval);

    const cell = await worksheet.getCell(rowid, colid + colindex);
    cell.value = replacedtext;
    await workbook.xlsx.writeFile(filepath);

}

function readExcel(worksheet, searchval) {

    try{

         worksheet.eachRow((row, rowNumber) => {
        row.eachCell((cell, colNumber) => {

            if (cell.value == searchval) {

                colid = colNumber;
                rowid = rowNumber;
            }

        })

    })
    }
    catch(error){
    console.error("An error occurred:", error.message);
    }
    

   
};

writeExcel("Banana", ".//download.xlsx", "Sheet1", 2, 59);