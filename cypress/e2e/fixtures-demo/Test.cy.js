describe('Fixtures demo', () => {

    it.only('User correct', () => {
        cy.visit('https://www.saucedemo.com/');        
        cy.get('[data-test="username"]').type('locked_out_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="error"]').should('contain.text', 'Epic sadface: Sorry, this user has been locked ou')
    })
    it('User incorrect', () => {
        cy.visit('https://www.saucedemo.com/');        
        cy.get('[data-test="username"]').type('Anna')
    })
});

