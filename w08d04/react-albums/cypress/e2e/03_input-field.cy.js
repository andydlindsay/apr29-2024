describe('testing the input field', () => {

  beforeEach(() => {
    cy.visit('/');

    cy.get('.radius')
      .as('input-field');
  });

  it('can type into an input field', () => {
    cy.get('@input-field')
      .type('Carrie Underwood', { delay: 150 })
      .should('have.value', 'Carrie Underwood');
  });

  it('can use the backspace key to remove characters', () => {
    cy.get('@input-field')
      .type('Beee{backspace}ge{backspace}{backspace} Gees', { delay: 150 })
      .should('have.value', 'Bee Gees');
  });

});