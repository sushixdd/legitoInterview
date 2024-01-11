declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Custom command to select DOM element by data-cy attribute.
       * @example cy.dataCy('greeting')
       */
    }
  }
}
// had an issue of jumping to next command before cy.type() was finished, this should mitigate the issue
// if the issue persists, I'll swap from cy.type() to filling fields using cy.invoke()
Cypress.Keyboard.defaults({
  keystrokeDelay: 0,
});
