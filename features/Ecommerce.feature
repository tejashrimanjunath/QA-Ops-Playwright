Feature: E-commerce Website Validation
    @bar
    Scenario: Order placement Check
        Given User from "India" to login with valid "teju.118@gmail.com" and "teja123" to the required e-commerce website for ordering product "ZARA COAT 3"
        When user logs in and places order with card detail including "ind" and "* Coupon Applied" for the product
        Then User should be confirmed the order after payment is successful with the " Thankyou for the order. "
        When Order checked on the orders page
        Then Order should be visible on the Order-Details page