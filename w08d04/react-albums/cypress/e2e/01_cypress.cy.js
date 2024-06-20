describe('tests for Cypress', () => {

  it('can tell if true is true', () => {
    expect(true).to.equal(true);
  });

  it('can visit the homepage of the app', () => {
    cy.visit('http://localhost:8765/')
  });

});
