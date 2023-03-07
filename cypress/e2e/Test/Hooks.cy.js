// lolo
// 1. before() -> UNA VEZ, al principio
// 2. beforeEach() -> Antes de cada test
// 3. Test execution
// 4. afterEach() -> Después de cada test
// 5. beforeEach()
// 6. Test Execution
// 7. afterEach()
// 8. after() -> UNA VEZ, al final

describe('Demo de hooks', () => {

    before(() => {
        cy.log('before')
    })
    beforeEach(() => {
        cy.log('beforeEach')
    })
    it('Should be test #1', () => {
        cy.log('test #1')
    })
    it('Should be test #2', () => {
        cy.log('test #2')
    })
    it('Should be test #3', () => {
        cy.log('test #3')
    })
    afterEach( () =>{
        cy.log('afterEach')
    })
    after( () =>{
        cy.log('after')
    })
})