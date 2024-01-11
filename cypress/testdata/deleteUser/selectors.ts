export const deleteButton = () => {
  return cy.get("#delete");
};
export const recordTable = () => {
  return cy.get('td[hidden="true"]');
};
export const hiddenRecord = () => {
  return cy.get('td[hidden="true"]');
};
