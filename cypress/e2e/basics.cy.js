/// <reference types="Cypress" />

describe('tasks page', () => {
  it('should render the main image', () => {
    cy.visit('http://localhost:5173/');
    cy.get('.main-header').get('img');
  });

  it('displays page title', () => {
    cy.visit('http://localhost:5173/');
    cy.get('h1').contains('React Tasks');
  });
});
