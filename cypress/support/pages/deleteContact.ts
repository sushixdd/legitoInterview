import {
  deleteButton,
  recordTable,
  hiddenRecord,
} from "../../testdata/deleteUser/selectors";

export class DeleteContact {
  interceptDelete = (recordId) => {
    cy.intercept("DELETE", `/contacts/${recordId}`).as("deleteRecord");
  };

  waitDelete = () => {
    cy.wait("@deleteRecord");
  };

  openRecord = (recordId) => {
    recordTable().contains(recordId).click({ force: true });
    deleteButton().click();
  };

  assertRecordDeleted = (recordId) => {
    hiddenRecord().contains(recordId).should("not.exist");
  };
}
