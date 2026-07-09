//Creating an extention to test

const base = require('@playwright/test');

//creating a fixture inside the extended base test called testDataSet and calling it as customtest
exports.customtest = base.test.extend({
    //FIXTURE: JS Object , hence remove the double inverted commas on the left
    testDataSet: {
        userName: "teju.118@gmail.com",
        password: "teja123",
        prodName: "ZARA COAT 3",
    },
    //multiple data sets can be defined
    
});
