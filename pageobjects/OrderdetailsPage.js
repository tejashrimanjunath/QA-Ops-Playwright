const { expect } = require ('@playwright/test');

class OrderdetailsPage{

    constructor(page){
        this.orderNumDetails = page.locator(".col-text");
    }

    async confirmOrderDetails(orderIdFinal){

            const orderDetails = await this.orderNumDetails.textContent();
            await expect(orderDetails.includes(orderIdFinal)).toBeTruthy();
    }
}
module.exports={OrderdetailsPage};