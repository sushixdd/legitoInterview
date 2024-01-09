describe("sample test for non-bdd test", () => {
  beforeEach(() => {
    cy.visitBaseUrl();
  });
  it("assert url", () => {
    cy.url().should("eq", `${Cypress.env("baseUrl")}/`);
  });
  it("assert page is loaded", () => {
    cy.get("h1").should("contain", "Contact List App");
  });
});
