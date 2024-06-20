describe('tests for the checkboxes', () => {

  it('can uncheck the Explicit checkbox', () => {
    cy.visit('/');

    cy.get('.filters__form-group') // 5 elements
      .first()
      .find('input')
      .uncheck()
      .should('not.be.checked');
  });

});