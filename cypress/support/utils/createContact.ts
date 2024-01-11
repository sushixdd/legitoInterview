export const createContact = () => {
  let authToken: string;
  let recordId: any;

  return new Cypress.Promise((resolve, reject) => {
    cy.getCookie("token").then((token) => {
      if (!token || !token.value) {
        reject(new Error("Token not found."));
      }

      authToken = token.value;
      cy.createRecord(authToken).then((id) => {
        cy.wrap(id).as("recordId");
      });
      resolve();
    });
  });
};
