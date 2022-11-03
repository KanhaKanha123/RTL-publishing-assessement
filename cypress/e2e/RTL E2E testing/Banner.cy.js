/// <reference types="cypress" />

describe('Banner section below header on home page RTL-app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('Banner contains image', () => {
    cy.get("[data-testid='banner-wrapper-div'] img").should('have.length', 1)
  })

  it('Banner have correct label text', () => {
    cy.get("[data-testid='banner-label']").should('have.text', 'best gelezen')
  })

  it('Banner have correct title text', () => {
    cy.get("[data-testid='banner-title']").should('have.text', 'De uitschieters van 2018')
  })

  it('Banner have correct description', () => {
    cy.get("[data-testid='banner-description']").should('have.text', 'Waar hadden we het dit jaar allemaal over? Je leest het in dit overzicht met de best gelezen artikelen.')
  })
})