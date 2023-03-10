describe('Send deliver', () => {
    const loginDates = require('../../fixtures/fixtures-demo/sauceCredentials.json');
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
        cy.typeLogin(loginDates.standarUser, loginDates.systemPassword)
    })


    it('Complete inputs', () => {
        cy.addOneProduct();
        cy.get('.shopping_cart_link').click();
        cy.get('[data-test="checkout"]').click();
        cy.get('[data-test="firstName"]').type(loginDates.nameUser);
        cy.get('[data-test="lastName"]').type(loginDates.lastName);
        cy.get('[data-test="postalCode"]').type(loginDates.CP);
        cy.get('[data-test="continue"]').click()
        cy.scrollDownUp()
        cy.validatePrice()
        cy.addAllProducts()
        cy.get('.shopping_cart_link').click();
        cy.get('[data-test="checkout"]').click();
        cy.get('[data-test="firstName"]').type(loginDates.nameUser);
        cy.get('[data-test="lastName"]').type(loginDates.lastName);
        cy.get('[data-test="postalCode"]').type(loginDates.CP);
        cy.get('[data-test="continue"]').click()
        cy.scrollDownUp()
        cy.validatePrice()
    });
})