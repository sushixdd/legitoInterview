import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { createContact } from "../../utils/createContact";
import { DeleteContact } from "../../pages/deleteContact";

const deleteContact = new DeleteContact();

let recordId: any; // it's a crime i know
Given("I am on contact list logged as user with at least one record", () => {
  cy.login(Cypress.env("generalUser"), Cypress.env("password"));
  createContact();
  cy.visit(`${Cypress.env("baseUrl")}/contactList`);
  cy.get("@recordId").then((id) => {
    recordId = id;
  });
});

When("I open and delete contact", () => {
  deleteContact.interceptDelete(recordId);
  deleteContact.openRecord(recordId);
  deleteContact.waitDelete();
});
Then("contact is deleted", () => {
  deleteContact.assertRecordDeleted(recordId);
});
