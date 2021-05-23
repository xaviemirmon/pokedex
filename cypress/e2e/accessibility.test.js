/// <reference types="Cypress" />

describe("Accessibility tests", () => {
  it("Has no detectable accessibility violations on load", () => {
    cy.visit("/").get("main").injectAxe()
    cy.checkA11y()
  })
  it("Navigates to bulbasaur and checks for accessibility violations", () => {
    cy.visit("/bulbasaur").get("main").injectAxe()
    cy.checkA11y()
  })
  it("Focuses on the footer link and asserts its attributes", () => {
    cy.visit("/").get("main").injectAxe()
    cy.findAllByText("Gatsby").focus()

    cy.focused()
      .should("have.text", "Gatsby")
      .should("have.attr", "href", "https://www.gatsbyjs.com")
      .should("not.have.css", "outline-width", "0px")
  })
})
