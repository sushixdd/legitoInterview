Feature: Add a New Contact
  Scenario: Assertions of addContact form
    Given I am on add addContact form page as valid user
    Then I should see addContact form according to design

  Scenario: Add a New Contact - fail path - empty
    Given I am on add addContact form page as valid user
    When form is sent with invalid mandatory input
    Then correct error message for state addNewContact-empty is displayed
  
  Scenario: Add a New Contact - fail path - incorrect non-mandatory
    Given I am on add addContact form page as valid user
    When form is sent with invalid non-mandatory input
    Then correct error message for state addNewContact-incorrect is displayed
  
  Scenario: Add a New contact - happy path
    Given I am on add addContact form page as valid user
    When addContact form is sent with valid input
    Then record for this contact is created in the table