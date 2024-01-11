import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { AddContact } from "../../pages/addContact";

const addContact = new AddContact();

let recordName: string;

When("addContact form is sent with valid input", () => {
  recordName = addContact.sendFormSuccess();
});
Then("record for this contact is created in the table", () => {
  cy.get(".contactTableBodyRow").should("contain", recordName);
});
