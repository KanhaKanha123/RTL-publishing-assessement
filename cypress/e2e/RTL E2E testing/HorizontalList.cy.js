/// <reference types="cypress" />

describe('Horizontal three cart list RTL-app', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    it('Should have count three', () => {
        cy.get("[data-testid='horizontalArticles-wrapper'] .article-verticle-layout").should('have.length', 3)
    })
})