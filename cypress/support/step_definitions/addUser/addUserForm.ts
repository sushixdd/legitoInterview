import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";
import { AddUser } from "../../pages/addUser";

const addUser = new AddUser();

Given("I am on add user page", () => {
  addUser.visit();
});
Then("I should see signup form according to design", () => {
  addUser.assertForm();
});
