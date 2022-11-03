/// <reference types="cypress" />

describe('Header on home page RTL-app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('header exist in header component', () => {
    cy.get(".header").should('have.length', 1)
  })

  it('displays right text on header', () => {
    cy.get("[data-testid='header-anchor']").should('have.text', 'RTL News')
  })

  it('displays right button text on right side of header', () => {
    cy.get("[data-testid='header-login']").should('have.text', 'Login')
  })
})
