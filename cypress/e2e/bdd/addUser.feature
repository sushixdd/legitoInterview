Feature: Signup form
  Scenario: Assertions of signup form
    Given I am on add user page
    Then I should see signup form according to design
  
  Scenario: Assertion of signup form validation - fail paths
    Given form is sent with invalid input
    Then correct error message is displayed signup form validation - fail paths
  
  Scenario: Assertion of signup form validation - happy paths
    Given form is sent with valid input
    Then form is successfully sent - signup form