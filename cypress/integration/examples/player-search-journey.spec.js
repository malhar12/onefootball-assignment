/// <reference types="cypress" />

context('Player Search Journey', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('should show the details of the Player, if the player is active', () => {
        cy.get('.player-input-box')
            .type('fabio').should('have.value', 'fabio');
        cy.get('.submit-button')
            .click();
        cy.get('.search-form').should('have.descendants', '.player-details');
    });

    it('should show that the player is not active message, if the player is not active', () => {
        cy.get('.player-input-box')
            .type('giorgio').should('have.value', 'giorgio');
        cy.get('.submit-button')
            .click();
        cy.get('.search-form').should('have.descendants', '.error-message');
    });

    it('should invalid player id message, if the player id is invalid', () => {
        cy.get('.player-input-box')
            .type('abcd#').should('have.value', 'abcd#');
        cy.get('.submit-button')
            .click();
        cy.get('.search-form').should('have.descendants', '.error-message');
    });
})