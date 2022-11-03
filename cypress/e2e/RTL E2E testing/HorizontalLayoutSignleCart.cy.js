/// <reference types="cypress" />

describe('Horizontal Layout single cart RTL-app', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/');

  })

  it('Should have correct label', () => {
    cy.get(".verticle-articles .zoom:nth-child(1) .article-horizontal-layout .right-content-div [data-testid='horizontalLayout-label-title']").should('have.text', 'De uitschieters van 2018');
  })

  it('Should have image', () => {
    cy.get(".verticle-articles .zoom:nth-child(1) .article-horizontal-layout img").should('have.length', 1);
  })

  it('Should have correct date', () => {
    cy.get(".verticle-articles .zoom:nth-child(1) .article-horizontal-layout .right-content-div [data-testid='horizontalLayout-label-date']").should('have.text', '13 april 2018');
  })

  it('Should have correct title', () => {
    cy.get(".verticle-articles .zoom:nth-child(1) .article-horizontal-layout .right-content-div [data-testid='horizontalLayout-layoutBoldTitle']").should('have.text', 'Temptation Tim heeft een schokkende nieuwe tattoo');
  })

  it('Should have correct lead text', () => {
    cy.get(".verticle-articles .zoom:nth-child(1) .article-horizontal-layout .right-content-div [data-testid='horizontalLayout-lead']").should('have.text', 'Tim Wauters, beter bekend als Timtation, heeft een nieuwe tattoo laten zetten in de studio van Pommeline en Fabrizio. ');
  })
})