import * as selector from "../../testdata/addUser/selectors";
import {
  errorMessageList,
  shortPassword,
  usedEmail,
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
    cy.get("#firstName").invoke("val", "firstNameTest");
    cy.get("#lastName").invoke("val", "lastNameTest");
    cy.get("#email").invoke("val", usedEmail);
    cy.get("#password").invoke("val", "password");
  };

  visit() {
    cy.intercept("GET", "/addUser").as("getAddUser");
    cy.visit(`${Cypress.env("baseUrl")}/addUser`);
    cy.wait("@getAddUser");
  }
  assertForm() {
    // reset state of website to make sure input is clean
    this.visit();
    const assertVisibility = (el: string) => {
      cy.get(el).should("be.visible");
    };
    const assertPlaceholder = (el: string, placeholder: string) => {
      cy.get(el).should("have.attr", "placeholder", placeholder);
    };
    const buttonAssertion = (el: string, attr: string, val: string) => {
      cy.get(el).should("have.attr", attr, val);
    };

    assertVisibility("#firstName");
    assertVisibility("#lastName");
    assertVisibility("#email");
    assertVisibility("#password");

    assertPlaceholder("#firstName", "First Name");
    assertPlaceholder("#lastName", "Last Name");
    assertPlaceholder("#email", "Email");
    assertPlaceholder("#password", "Password");

    buttonAssertion("#submit", "type", "submit");
    buttonAssertion("#submit", "form", "add-user");
    selector.SubmitButton().should("contain", "Submit");

    buttonAssertion("#cancel", "onclick", "location.href='/login'");
    selector.CancelButton().should("contain", "Cancel");
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
