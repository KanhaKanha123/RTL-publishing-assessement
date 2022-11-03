/// <reference types="cypress" />

describe('Verticle cart list RTL-app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('Should have count 18', () => {
    cy.get("[data-testid='verticleArticles-wrapper'] .article-horizontal-layout").should('have.length', 18)
  })
})