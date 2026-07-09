
class DashboardPage {

    constructor(page, prodName) {

        this.product = page.locator('.card-body');
        this.prodTitles = page.locator('.card-body b');
        this.addToCart = page.locator(".card-body").filter({ hasText: prodName }).getByRole("button", { name: 'Add to Cart' });
        this.cartButton = page.getByRole("listitem").getByRole("button", { name: "Cart" });
        this.listofItems = page.locator('div li');
        
    }

    async searchProducts() {

        await this.prodTitles.last().waitFor();
        const count = await this.product.count();
        await this.addToCart.click();
    }

    async navigateToCart() {

        await this.cartButton.click();
        await this.listofItems.first().waitFor();


    }
}

module.exports = { DashboardPage };