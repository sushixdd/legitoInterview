export const editButton = () => {
  return cy.get("#edit-contact");
};
export const recordTable = () => {
  return cy.get('td[hidden="true"]');
};
export const hiddenRecord = () => {
  return cy.get('td[hidden="true"]');
};
export const editModalFirstName = () => {
  return cy.get("input#firstName");
};
export const editModalLastName = () => {
  return cy.get("input#lastName");
};
export const submitButton = () => {
  return cy.get("#submit");
};
