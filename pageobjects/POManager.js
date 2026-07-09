const { LoginPage } = require("../pageobjects/LoginPage");
const { DashboardPage } = require("../pageobjects/DashboardPage");
const { CheckoutPage } = require("../pageobjects/CheckoutPage");
const { ConfirmationPage } = require("../pageobjects/ConfirmationPage");
const { OrdersPage } = require("../pageobjects/OrdersPage");
const { OrderdetailsPage } = require("../pageobjects/OrderdetailsPage");

class POManager{

    constructor(page,prodName,fullCountryName){

        this.page = page;
        this.prodName = prodName;
        this.fullCountryName = fullCountryName;
        this.login = new LoginPage(this.page);
        this.dashboard = new DashboardPage(this.page, this.prodName);
        this.checkout = new CheckoutPage(this.page, this.fullCountryName);
        this.confirm = new ConfirmationPage(this.page);
        this.orders = new OrdersPage(this.page);
        this.orderDetails = new OrderdetailsPage(this.page);

    }

    getLoginPage(){
        return this.login;
    }

    getDashboardPage(){

        return this.dashboard;
    }

    getCheckoutPage(){

        return this.checkout
    }

    getConfirmationPage(){
        
        return this.confirm;
    }

    getOrdersPage(){
        
        return this.orders;
    }

    getOrderdetailsPage(){

        return this.orderDetails;
    }
    
}

module.exports={POManager}