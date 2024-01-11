import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { AddContact } from "../../pages/addContact";
import { errorMessageList } from "../../../testdata/addContact/testData";
import { error } from "../../../testdata/addContact/selectors";

const addContact = new AddContact();

When("form is sent with invalid mandatory input", () => {
  addContact.sendFormEmpty();
});
Then("correct error message for state addNewContact-empty is displayed", () => {
  error().should("contain", errorMessageList.allEmpty);
});
