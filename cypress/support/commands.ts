Cypress.Commands.add("visitBaseUrl", () => {
  // not a fan of this intercept, but could not find a better one
  cy.intercept("GET", "/js/login.js").as("getLogin");
  cy.visit(Cypress.env("baseUrl"));
  cy.wait("@getLogin");
});
