
describe('LoginWithDiferentsAccounts', () => {

    beforeEach(() => {
        cy.visit('/');

    })

    it('Validate credentials', () => {
        const credentials = require('../../fixtures/fixtures-demo/sauceCredentials.json');

        cy.typeLogin(credentials.standarUser, credentials.systemPassword)

        cy.get('.title').should('contain.text', 'Products')
    })
    it('Incorrect username', () => {
        const credentials = require('../../fixtures/fixtures-demo/sauceCredentials.json');

        cy.typeLogin(credentials.dumyUser, credentials.systemPassword)

        cy.get('[data-test="error"]').should('contain.text', 'Epic sadface: Username and password do not match any user in this service')

    })
    it('Incorrect passsword', () => {
        const credentials = require('../../fixtures/fixtures-demo/sauceCredentials.json');

        cy.typeLogin(credentials.standarUser, credentials.standarUser)

        cy.get('[data-test="error"]').should('contain.text', 'Epic sadface: Username and password do not match any user in this service')
    })
    it('User locked', () => {
        const credentials = require('../../fixtures/fixtures-demo/sauceCredentials.json');

        cy.typeLogin(credentials.userLocked, credentials.systemPassword)

        cy.get('[data-test="error"]').should('contain.text', 'Epic sadface: Sorry, this user has been locked out.')
    })

})