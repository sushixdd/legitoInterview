import { firstName, lastName } from "../../testdata/addContact/selectors";
import {
  editButton,
  recordTable,
  editModalFirstName,
  editModalLastName,
  submitButton,
} from "../../testdata/editUser/selectors";

import {
  editedFirstName,
  editedLastName,
} from "../../testdata/editUser/testData";

export class EditContact {
  openEditModal = () => {
    editButton().should("exist").click();
  };

  editRecord = (recordId) => {
    cy.intercept("PUT", `/contacts/${recordId}`).as("putContact");
    editModalFirstName().clear().invoke("val", editedFirstName);
    editModalLastName().clear().invoke("val", editedLastName);
    submitButton().should("exist").click();
    cy.wait("@putContact");
  };

  openRecord = (recordId) => {
    recordTable().contains(recordId).click({ force: true });
    editButton().click();
  };

  assertRecordEdited = () => {
    firstName().should("contain", editedFirstName);
    lastName().should("contain", editedLastName);
  };
}
