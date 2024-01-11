import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";
import { AddContact } from "../../pages/addContact";

const addContact = new AddContact();

Given("I am on add addContact form page as valid user", () => {
  addContact.getToForm();
});
Then("I should see addContact form according to design", () => {
  addContact.assertForm();
});
