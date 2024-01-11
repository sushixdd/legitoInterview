Feature: delete contact
  Scenario: user deletes contact
    Given I am on contact list logged as user with at least one record
    When I open and delete contact
    Then contact is deleted