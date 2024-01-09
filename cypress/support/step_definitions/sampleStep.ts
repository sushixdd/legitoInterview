import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I visit landing page", () => {
  cy.visitBaseUrl();
});
When("I am on page", () => {
  cy.url().should("eq", `${Cypress.env("baseUrl")}/`);
});
Then("page is successfully loaded", () => {
  // just a simpel assertion
  cy.get("h1").should("contain", "Contact List App");
});
