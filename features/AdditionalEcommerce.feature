Feature: E-commerce Website Validation
    @foo
    Scenario: Practice Page Login Check
        Given Login with invalid "teju.118@gmail.com" and "teja123" to the required e-commerce website
        Then User is not able to login and error message is displayed