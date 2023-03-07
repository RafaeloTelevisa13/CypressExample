describe('Location demo',() => {
    let username = "standard_user";
    let password = "secret_sauce";
    beforeEach( () => {
        cy.visit('https://www.saucedemo.com/')
    })
    it('should have tittle Swag Labs', () => {
        cy.title().should('eq','Swag Labs')
    })
    it('verify URL', () => {
        cy.url().should('eq','https://www.saucedemo.com/')
    })
    it('should use https', () => {
        cy.location('protocol').should('contains', 'https')
    })
    it('should have host name', () => {
        cy.location('hostname').should('eq', 'www.saucedemo.com')
    })
    it('should redirect to/inventory', () => {
        cy.get('[data-test="username"]')
        .type(username)
        cy.get('[data-test="password"]')
        .type(password)
        cy.get('[data-test="login-button"]')
        .click();

        cy.location('pathname').should('eq','/inventory.html')
    })
})