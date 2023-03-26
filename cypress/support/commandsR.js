const loginDates = require('.././fixtures/fixtures-demo/sauceCredentials.json');

Cypress.Commands.add('typeLogin', (username, password) => {
    cy.get('[data-test="username"]').type(username)
    cy.get('[data-test="password"]').type(password)
    cy.get('[data-test="login-button"]').click();

})

Cypress.Commands.add('logout', () => {
    cy.get('#react-burger-menu-btn').click()
    cy.get('#logout_sidebar_link').click()
})
Cypress.Commands.add('scrollDownUp', () => {
    cy.scrollTo('bottom', { duration: 2000 }) //Desplácese hasta la parte inferior de la ventana
    cy.scrollTo('top', { duration: 2000 })
})
Cypress.Commands.add('addOneProduct', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get(':nth-child(1) > .inventory_item_description > .pricebar > .inventory_item_price').should('have.text', '$29.99')
})
Cypress.Commands.add('completeInputs', () => {
    cy.get('[data-test="firstName"]').type(loginDates.nameUser);
    cy.get('[data-test="lastName"]').type(loginDates.lastName);
    cy.get('[data-test="postalCode"]').type(loginDates.CP);
})
Cypress.Commands.add('validatePrice', () => {

    cy.get('.summary_subtotal_label').then(function ($elem) {

        const priceProduct = parseFloat(($elem.text().split('$')[1]))
        cy.get('.summary_tax_label').then(function ($elem) {
            const tax = parseFloat(($elem.text().split('$')[1]))
            cy.get('.summary_total_label').then(function ($elem) {
                const total = parseFloat(($elem.text().split('$')[1]))
                let add = (priceProduct, tax) => parseFloat(priceProduct) + parseFloat(tax);
                expect(add(priceProduct, tax)).to.eq(total)
                cy.wait(2000)
            })
        })
    })

})
Cypress.Commands.add('addAllProducts', () => {

    cy.get('.pricebar').each(($ele, index, array) => {
        cy.log('$ele', $ele[index]);
        cy.wrap($ele).find("button").click()
    })
})
