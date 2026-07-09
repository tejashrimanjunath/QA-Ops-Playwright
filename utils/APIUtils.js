
module.exports = class APIUtils 

{

    constructor(apiContext,loginPayload) {

        this.apiContext = apiContext;
        this.loginPayload = loginPayload;
    }

    async getToken() {
        /*//--->>*/
        const loginPostResponse = await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
            { data: this.loginPayload });

       // await expect(loginPostResponse.ok()).toBeTruthy();

        const loginResponseJson = await loginPostResponse.json();

        const token = loginResponseJson.token;
        console.log(token);
        return token;

    }

    /*//-->>*/
    async createOrder(orderPayload) {
        let response = {};
        response.token=await this.getToken();

        const orderResponse = await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",
            {
                data: orderPayload,
                headers: {
 /*//--->>*/        'Authorization': await this.getToken(), //or response.token
                    'Content-Type': 'application/json'
                }
            });


        const orderResponseJson = await orderResponse.json();
        console.log(orderResponseJson);
        const orderId = orderResponseJson.orders[0];
        console.log(orderId);
        response.orderId=orderId;
        return response;

    }

}

//OR for making class importable use-
// module.exports={APIUtils};
//And in the importing class const {'APIUtils'} = require('./utils/APIUtils');