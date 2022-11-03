/// <reference types="cypress" />

describe('Verticle Layout single cart RTL-app', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/');

  })

  it('Should have correct label', () => {
    cy.get("[data-testid='article-verticle-layout-wrapper']:nth-child(1) [data-testid='verticleLayout-label-title']").should('have.text', 'De uitschieters van 2018');
  })

  it('Should have image', () => {
    cy.get("[data-testid='article-verticle-layout-wrapper']:nth-child(1) img").should('have.length', 1);
  })

  it('Should have correct date', () => {
    cy.get("[data-testid='article-verticle-layout-wrapper']:nth-child(1) [data-testid='verticleLayout-label-date']").should('have.text', '19 juni 2018');
  })

  it('Should have correct title', () => {
    cy.get("[data-testid='article-verticle-layout-wrapper']:nth-child(1) [data-testid='verticleLayout-layoutBoldTitle']").should('have.text', 'Trijntje Oosterhuis onherkenbaar veel afgevallen');
  })

  it('Should have correct lead text', () => {
    cy.get("[data-testid='article-verticle-layout-wrapper']:nth-child(1) [data-testid='verticleLayout-lead']").should('have.text', 'Onze geliefde souldiva Trijntj...');
  })
})