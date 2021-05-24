/// <reference types="Cypress" />

describe("Navigation tests", () => {
  it("Has search bar", () => {
    cy.visit("/").get('input:first').should('have.attr', 'placeholder', 'Enter search text...')
  })
  it("Adds text to search bar (no results)", () => {
    cy.visit("/").get('input').type('Hello, World')
    cy.get('[data-testid="SearchList"] span').should('include.text', 'Hello, World').should('include.text', 'Oops')
  })
  it("Adds text to search bar (Pikachu)", () => {
    cy.visit("/").get('input').type('Pika')
    cy.get('[data-testid="SearchList"] div').eq(1).get('a span').should('include.text', 'Pikachu').should('include.text', '025')
  })
})
