import * as selector from "../../testdata/addUser/selectors";
import {
  errorMessageList,
  shortPassword,
  usedEmail,
  placeholderStrings,
  buttonString,
} from "../../testdata/addUser/testData";
import { generateRandomEmail } from "../utils/generateRandomEmail";

// not sure how to properly test error messages
// ideal test should try all combinations, but i'm not 100% sure how to do that while keeping the test at least relatively short, pretty and simple
//

export class AddUser {
  waitFail = () => {
    // expect error due to fields empty when sending form
    cy.wait("@postUsers").its("response.statusCode").should("eq", 400);
  };
  waitPass = () => {
    cy.wait("@postUsers");
  };

  fillFormWithValidValues = () => {
    selector.FirstName().invoke("val", "firstNameTest");
    selector.LastName().invoke("val", "lastNameTest");
    selector.Email().invoke("val", usedEmail);
    selector.Password().invoke("val", "password");
  };

  visit() {
    cy.intercept("GET", "/addUser").as("getAddUser");
    cy.visit(`${Cypress.env("baseUrl")}/addUser`);
    cy.wait("@getAddUser");
  }
  assertForm() {
    // reset state of website to make sure input is clean
    this.visit();

    selector
      .FirstName()
      .should("have.attr", "placeholder", placeholderStrings.firstName);
    selector
      .LastName()
      .should("have.attr", "placeholder", placeholderStrings.lastName);
    selector
      .Email()
      .should("have.attr", "placeholder", placeholderStrings.email);
    selector
      .Password()
      .should("have.attr", "placeholder", placeholderStrings.passowrd);

    selector.SubmitButton().should("contain", buttonString.submit);
    selector.CancelButton().should("contain", buttonString.cancel);
  }
  sendFormFail() {
    selector.interceptUsers();
    selector.SubmitButton().click();
    this.waitFail();
    selector.Error().should("contain", errorMessageList.allEmpty);
  }
  sendPass() {
    selector.interceptUsers();
    selector.SubmitButton().click();
    this.waitPass();
  }
  sendFormFirstNameEmpty() {
    this.visit();
    selector.interceptUsers();
    this.fillFormWithValidValues();
    selector.FirstName().clear();
    selector.SubmitButton().click();
    selector.Error().should("contain", errorMessageList.firstNameEmpty);
  }
  sendFormLastNameEmpty() {
    this.visit();
    selector.interceptUsers();
    this.fillFormWithValidValues();
    selector.LastName().clear();
    selector.SubmitButton().click();
    selector.Error().should("contain", errorMessageList.lastNameEmpty);
  }
  sendFormEmailEmpty() {
    this.visit();
    selector.interceptUsers();
    this.fillFormWithValidValues();
    selector.Email().clear();
    selector.SubmitButton().click();
    selector.Error().should("contain", errorMessageList.emailEmpty);
  }
  sendFormEmailUsed() {
    this.visit();
    selector.interceptUsers();
    this.fillFormWithValidValues();
    selector.Email().invoke("val", usedEmail);
    selector.SubmitButton().click();
    selector.Error().should("contain", errorMessageList.emailUsed);
  }
  sendFormPasswordEmpty() {
    this.visit();
    selector.interceptUsers();
    this.fillFormWithValidValues();
    selector.Password().clear();
    selector.SubmitButton().click();
    selector.Error().should("contain", errorMessageList.passwordEmpty);
  }
  sendFormPasswordShort() {
    this.visit();
    selector.interceptUsers();
    this.fillFormWithValidValues();
    selector.Password().clear().invoke("val", shortPassword);
    selector.SubmitButton().click();
    selector
      .Error()
      .should("be.visible")
      .and("contain", errorMessageList.passwordShort);
  }
  inputUnusedEmail() {
    const randomEmail = generateRandomEmail(Cypress.env("randomUsername"));

    cy.writeFile(
      "cypress/fixtures/generatedEmailsList.txt",
      randomEmail + "\n",
      {
        flag: "a+",
      }
    );
    selector.Email().clear().invoke("val", randomEmail);
  }
}
