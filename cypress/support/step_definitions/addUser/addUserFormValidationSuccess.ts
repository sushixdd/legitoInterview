import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";
import { AddUser } from "../../pages/addUser";
import * as selector from "../../../testdata/addUser/selectors";

const addUser = new AddUser();

Given("form is sent with valid input", () => {
  addUser.visit();
  addUser.fillFormWithValidValues();
  addUser.inputUnusedEmail();
  selector.Password().invoke("val", Cypress.env("password"));
  selector.interceptUsers();
  selector.SubmitButton().click();
  addUser.waitPass();
});
Then("form is successfully sent - signup form", () => {
  cy.url().should("eq", Cypress.env("baseUrl") + "/contactList");
});
