describe('Intercept demo', () => {

    it('Initial validation', () => {
        cy.visit('http://192.168.100.185:8888');
        // cy.get('.todo-list li')
        // .should('have.length', 2)
        // .and('contain','')
    })
    it('Mocked API Response', () => {
        cy.intercept('GET', '/todoItem', {
            fixture: 'fixtures-demo/interceptFixture.json'
        }).as('todoItem-Fixture')

        cy.visit('http://192.168.100.185:8888');
    })

    it('Mocked a ready todo item', () => {
        const stubExample = {
            "title": "Mock API Response",
            "completed": true,
            "id" : 1
        }

        cy.intercept('GET', '/todoItem', {
            body:stubExample
        })
        cy.visit('http://192.168.100.185:8888');
    })
})