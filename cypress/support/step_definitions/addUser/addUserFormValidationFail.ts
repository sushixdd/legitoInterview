import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";
import { AddUser } from "../../pages/addUser";

const addUser = new AddUser();

Given("form is sent with invalid input", () => {
  addUser.visit();
  addUser.sendFormFail();
});
Then(
  "correct error message is displayed signup form validation - fail paths",
  () => {
    addUser.sendFormFail();
    addUser.sendFormFirstNameEmpty();
    addUser.sendFormLastNameEmpty();
    addUser.sendFormEmailEmpty();
    addUser.sendFormEmailUsed();
    addUser.sendFormPasswordEmpty();
    addUser.sendFormPasswordShort();
  }
);
