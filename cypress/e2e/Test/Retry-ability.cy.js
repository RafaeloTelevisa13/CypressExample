
describe('Sesion de Retry-ability', () => {

    beforeEach(() => {
        cy.visit('http://192.168.100.185:8888')
        cy.get('.new-todo')
            .type('todo-A{enter}')
            .type('todo-B{enter}')
    })

    it('should create two items', () => {
        cy.get('.todo-list li')
            .should('have.length', 2)
    })
    it('should content text joined', () => {
        cy.get('.todo-list li')
            .should('have.length', 2)
            .and($li => {
                expect($li.get(0).textContent, 'firts-item').to.equal('todo-A')
                expect($li.get(1).textContent, 'second-item').to.equal('todo-B')
            })
    })

})