// selectors for Add User page

export const SubmitButton = () => {
  return cy.get("#submit");
};
export const CancelButton = () => {
  return cy.get("#cancel");
};
export const Error = () => {
  return cy.get("#error");
};

export const FirstName = () => {
  return cy.get("#firstName");
};
export const LastName = () => {
  return cy.get("#lastName");
};
export const Email = () => {
  return cy.get("#email");
};
export const Password = () => {
  return cy.get("#password");
};
export const interceptUsers = () => {
  return cy.intercept("POST", "/users").as("postUsers");
};
