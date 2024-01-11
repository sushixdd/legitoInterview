// seeing that many exports I kinda want to implement a better solution, but don't really feel like refactoring again

export const addNewContactButton = () => {
  return cy.get("#add-contact");
};

export const visitContactPage = () => {};

export const firstName = () => {
  return cy.get("#firstName");
};

export const lastName = () => {
  return cy.get("#lastName");
};

export const dateOfBirth = () => {
  return cy.get("#birthdate");
};

export const email = () => {
  return cy.get("#email");
};

export const phone = () => {
  return cy.get("#phone");
};

export const streetAddress1 = () => {
  return cy.get("#street1");
};

export const streedAddress2 = () => {
  return cy.get("#street2");
};

export const city = () => {
  return cy.get("#city");
};

export const stateOrProvince = () => {
  return cy.get("#stateProvince");
};

export const postalCode = () => {
  return cy.get("#postalCode");
};

export const country = () => {
  return cy.get("#country");
};

export const submitButton = () => {
  return cy.get("#submit");
};

export const cancelButton = () => {
  return cy.get("#cancel");
};

export const error = () => {
  return cy.get("#error");
};
