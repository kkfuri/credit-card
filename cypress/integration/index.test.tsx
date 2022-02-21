/// <reference types="cypress" />

describe('The Home Page', () => {
  it('successfully loads', () => {
    cy.visit('/')

    cy.get('input[name="cardnumber"]').type("1234932832831931")
    cy.get('[data-testid="cc-number"]').should('have.text', "1234 **** **** 1931").and('have.class', 'focus')

    cy.get('input[name="ccname"]').type("Luke Skywalker Longname")
    cy.get('[data-testid="cc-name"]').should('have.text', 'LUKE SKYWALKER LO...').parent().should('have.class', 'focus')

    cy.get('select[name="ccmonth"]').select(5)
    cy.get('[data-testid="cc-expiry"]').should('have.text', '05/YYYY').parent().should('have.class', 'focus')

    cy.get('select[name="ccyear"]').select(5)
    cy.get('[data-testid="cc-expiry"]').should('have.text', '05/2026').parent().should('have.class', 'focus')

    cy.get('input[name="cvc"]').type('1233')
    cy.get('[data-testid="cc-card"]').should('have.class', 'flipped')
    cy.get('[data-testid="cvv"]').should('have.text', '1233')

    cy.get('button[type="submit"]').click()

    cy.on('window:alert', (text) => {
      expect(text).to.contains('Credit card added!');
    });

    cy.get('input[name="cardnumber"]').should('not.have.value')
    cy.get('input[name="ccname"]').should('not.have.value')
    cy.get('select[name="ccmonth"]').should('not.have.value')
    cy.get('select[name="ccyear"]').should('not.have.value')
    cy.get('input[name="cvc"]').should('not.have.value')
  })
})