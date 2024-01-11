// test kinda scuffed, i'm tired and it's after deadline anyways

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { createContact } from "../../utils/createContact";
import { EditContact } from "../../pages/editContact";

const editContact = new EditContact();

let recordId: any; // it's a crime i know

Given(
  "I am on contact list logged as user with at least one record - edit",
  () => {
    cy.login(Cypress.env("generalUser"), Cypress.env("password"));
    createContact();
    cy.visit(`${Cypress.env("baseUrl")}/contactList`);
    cy.get("@recordId").then((id) => {
      recordId = id;
    });
  }
);

When("I open and edit contact", () => {
  cy.get("@recordId").then((id) => {
    recordId = id;
  });

  editContact.openRecord(recordId);
  editContact.openEditModal();
  editContact.editRecord(recordId);
});
Then("contact is edited accordingly", () => {
  editContact.assertRecordEdited();
});
