describe('it can display results from an API call', () => {

  it('can display and filter the return from an API call', () => {
    // cypress please intercept any outgoing GET requests and return our fake data instead
    cy.intercept('GET', '**/search*', { fixture: 'itunes' })
      .as('fetch-data');

    // visit the homepage
    cy.visit('/');

    // find the input field and type 'Daft Punk'
    cy.get('.radius')
      .type('Daft Punk')
      .should('have.value', 'Daft Punk');

    // wait for the results to load
    cy.wait('@fetch-data');

    // look for a particular album
    cy.get('.album')
      .contains('Random Access Memories')

    // uncheck the explicit checkbox
    cy.get('#Explicit')
      .uncheck();

    // make sure the explicit album no longer display
    cy.get('.album')
      .should('not.contain', 'Daft Club');
  });

});