import * as selector from "../../testdata/addContact/selectors";
import {
  placeholder,
  buttonString,
  errorMessageList,
  mockDataFormFail,
} from "../../testdata/addContact/testData";
import { generateName } from "../utils/generateName";

export class AddContact {
  getToForm = () => {
    cy.login(Cypress.env("generalUser"), Cypress.env("password"));
    cy.intercept("GET", "/addContact").as("addContact");
    cy.visit(Cypress.env("baseUrl") + "/addContact");
    cy.wait("@addContact");
  };

  interceptSubmit = () => {
    cy.intercept("POST", "/contacts").as("postContacts");
  };

  waitFail = () => {
    cy.wait("@postContacts").its("response.statusCode").should("eq", 400);
  };
  waitPass = () => {
    cy.wait("@postContacts");
  };

  assertForm = () => {
    selector
      .firstName()
      .should("have.attr", "placeholder", placeholder.firstName);
    selector
      .lastName()
      .should("have.attr", "placeholder", placeholder.lastName);
    selector
      .dateOfBirth()
      .should("have.attr", "placeholder", placeholder.dateOfBirth);
    selector.email().should("have.attr", "placeholder", placeholder.email);
    selector.phone().should("have.attr", "placeholder", placeholder.phone);
    selector
      .streetAddress1()
      .should("have.attr", "placeholder", placeholder.address1);
    selector
      .streedAddress2()
      .should("have.attr", "placeholder", placeholder.address2);
    selector.city().should("have.attr", "placeholder", placeholder.city);
    selector
      .stateOrProvince()
      .should("have.attr", "placeholder", placeholder.stateOrProvince);
    selector
      .postalCode()
      .should("have.attr", "placeholder", placeholder.postalCode);
    selector.country().should("have.attr", "placeholder", placeholder.country);

    selector.cancelButton().should("contain", buttonString.cancel);
    selector.submitButton().should("contain", buttonString.submit);
  };

  // I'm not going to bother with checking errors one by one in this case (normally I would)
  // instead I will just assert the result string when either everything is empty or everything (fields having some validation conditions) is wrong

  sendFormEmpty = () => {
    // reload to assure input is empty
    cy.reload();
    this.interceptSubmit();
    selector.submitButton().should("be.visible").click();
    this.waitFail();
  };

  sendFormWrong = () => {
    cy.reload();
    this.interceptSubmit();

    // fill our form to trigger all conditional validation
    selector.firstName().invoke("val", mockDataFormFail.firstName);
    selector.lastName().invoke("val", mockDataFormFail.lastName);
    selector.dateOfBirth().invoke("val", mockDataFormFail.dateOfBirth);
    selector.email().invoke("val", mockDataFormFail.email);
    selector.phone().invoke("val", mockDataFormFail.phone);
    selector.postalCode().invoke("val", mockDataFormFail.postalCode);

    selector.submitButton().should("be.visible").click();
    this.waitFail();

    selector.error().should("contain", errorMessageList.allFail);
  };

  sendFormSuccess = () => {
    let firstName = generateName();
    let lastName = generateName();
    const stringRecord = firstName + " " + lastName;

    cy.reload();
    this.interceptSubmit();
    selector.firstName().invoke("val", firstName);
    selector.lastName().invoke("val", lastName);

    selector.submitButton().should("be.visible").click();

    this.waitPass();

    return stringRecord;
  };
}
