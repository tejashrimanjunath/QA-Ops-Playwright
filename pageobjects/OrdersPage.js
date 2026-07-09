const { expect } = require ('@playwright/test');
class OrdersPage{

    constructor(page){

    this.orderLink = page.locator("li [routerlink*='myorders']");
    this.orderIdinTable = page.locator('tr.ng-star-inserted');
    }

   async checkOrders(orderNumber){
        
    //Orders Page data check with the order number.

    const orderNumberTrimmed = orderNumber.split(' ');
    //console.log(orderNumberTrimmed +"Order ID Trimmed");

    //console.log(orderNumberTrimmed);

    let orderIdFinal = 0;
    for (let i = 0; i < orderNumberTrimmed.length; i++) {
        if (orderNumberTrimmed[i].length > 3) {
            orderIdFinal = orderNumberTrimmed[i];
            break;
        }
    }

    //console.log(orderIdFinal);
    await this.orderLink.click();

    //Need to use waitFor() as count can return zero also and is not auto waited for
    await this.orderIdinTable.first().waitFor();
    const ordersCount = await this.orderIdinTable.count();
    //console.log(ordersCount)
    for (let i = 0; i < ordersCount; ++i) {

        //await orderIdinTable.nth(i).locator("th").textContent().then(t=> console.log(t));
        expect(await this.orderIdinTable.nth(i).locator("th")).toHaveText(orderIdFinal);

        await this.orderIdinTable.nth(i).locator("button").first().click(); //td button[class='btn btn-primary']

        //await page.pause();
        break;
    }

    return orderIdFinal;
    }

}

module.exports = {OrdersPage};