describe('Fixtures demo', () => {

    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
        
    })

    it('Test correct', () => {
        cy.typeLogin('standard_user', 'secret_sauce')
        cy.logout();
    })

    it('Test incorrect', () => {
        cy.typeLogin('lol', 'secret_sauce')
    })


})