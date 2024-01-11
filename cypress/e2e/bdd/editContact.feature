Feature: edit contact
  Scenario: user edits contact
    Given I am on contact list logged as user with at least one record - edit
    When I open and edit contact
    Then contact is edited accordingly