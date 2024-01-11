// I'm not sure if I'm even going to use commands. I made heavy use of commands in my secondary project.
// In this project, I chose to try pages because I have little to no experience with this way yet

Cypress.Commands.add("login", (username: string, pw: string) => {
  cy.request({
    method: "POST",
    url: "https://thinking-tester-contact-list.herokuapp.com/users/login",
    headers: {
      "Content-Type": "application/json",
    },
    body: {
      email: username,
      password: pw,
    },
  }).then((resp) => {
    expect(resp.status).to.eq(200);
    const token = resp.body.token;

    expect(token).to.exist;

    cy.setCookie("token", token);
  });
});

Cypress.Commands.add("createRecord", (authToken: string) => {
  cy.request({
    method: "POST",
    url: "https://thinking-tester-contact-list.herokuapp.com/contacts",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + authToken,
    },
    body: {
      firstName: "John",
      lastName: "Doe",
    },
  }).then((resp) => {
    return resp.body._id;
  });
});
