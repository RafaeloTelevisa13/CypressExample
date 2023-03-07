it('Validate credentials',() => {
    const credentials = require('../../fixtures/fixtures-demo/sauceCredentials.json');

    cy.get('[data-test="username"]').type(credentials.standarUser)

    cy.get('[data-test="password"]').type(credentials.systemPassword)

    cy.get('[data-test="login-button"]').click();

    cy.get('.title').should('contain.text', 'Products')
})
it('Incorrect username',() => {
    const credentials = require('../../fixtures/fixtures-demo/sauceCredentials.json');

    cy.get('[data-test="username"]').type(credentials.dumyUser)

    cy.get('[data-test="password"]').type(credentials.systemPassword)

    cy.get('[data-test="login-button"]').click();

    cy.get('[data-test="error"]').should('contain.text', 'Epic sadface: Username and password do not match any user in this service')

})
it('Incorrect passsword',() => {
    const credentials = require('../../fixtures/fixtures-demo/sauceCredentials.json');

    cy.get('[data-test="username"]').type(credentials.standarUser)

    cy.get('[data-test="password"]').type(credentials.dummyPassword)

    cy.get('[data-test="login-button"]').click();

    cy.get('[data-test="error"]').should('contain.text', 'Epic sadface: Username and password do not match any user in this service')
})
it('User locked',() => {
    const credentials = require('../../fixtures/fixtures-demo/sauceCredentials.json');

    cy.get('[data-test="username"]').type(credentials.userLocked)

    cy.get('[data-test="password"]').type(credentials.systemPassword)

    cy.get('[data-test="login-button"]').click();

    cy.get('[data-test="error"]').should('contain.text', 'Epic sadface: Sorry, this user has been locked out.')
})