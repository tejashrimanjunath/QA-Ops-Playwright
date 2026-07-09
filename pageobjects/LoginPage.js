class LoginPage {


    constructor(page) {

        //Signin page and home page
        this.page=page;
        this.userName = page.getByPlaceholder("email@example.com");
        this.password = page.getByPlaceholder("enter your passsword");
        this.signInBtn = page.getByRole("button", { name: "Login" });
    }


    async validLogin(userName,pass) {

        await this.userName.fill(userName);
        await this.password.fill(pass);
        await this.signInBtn.click();
    }

    gotoPage(){

        this.page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    }


}

module.exports={LoginPage};