Feature: Test if scaffolding works
  Scenario: Visit site
    Given I visit landing page
    When I am on page
    Then page is successfully loaded