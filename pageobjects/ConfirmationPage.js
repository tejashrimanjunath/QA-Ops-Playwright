const { expect } = require ('@playwright/test');
class ConfirmationPage {

    constructor(page) {

        this.confirmMsg = page.getByText("Thankyou for the order.");
        this.orderId = page.locator('.em-spacer-1 .ng-star-inserted');
    }

    async confirmOrder(msg){

            await expect(this.confirmMsg).toHaveText(msg);
        
            const orderNumber = await this.orderId.textContent();

            return orderNumber;

    }

}

module.exports={ConfirmationPage};