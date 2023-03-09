describe('Send deliver', () => {
    const loginDates = require('../../fixtures/fixtures-demo/sauceCredentials.json');
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
        cy.typeLogin(loginDates.standarUser, loginDates.systemPassword)
    })


    it('Complete inputs', () => {
        cy.addProduct();
        cy.get('[data-test="firstName"]').type(loginDates.nameUser);
        cy.get('[data-test="lastName"]').type(loginDates.lastName);
        cy.get('[data-test="postalCode"]').type(loginDates.CP);
        cy.get('[data-test="continue"]').click()
        cy.scrollDownUp()

        cy.get('.summary_subtotal_label').then(function ($elem) {

            const priceProduct = parseFloat(($elem.text().split('$')[1]))
            cy.get('.summary_tax_label').then(function ($elem) {
                const tax = parseFloat(($elem.text().split('$')[1]))
                cy.log('tax', tax)
                cy.get('.summary_total_label').then(function ($elem) {
                    const total = parseFloat(($elem.text().split('$')[1]))
                    let add = (priceProduct, tax) => parseFloat(priceProduct) + parseFloat(tax);
                    expect(add(priceProduct, tax)).to.eq(total)
                })
            })
        })
    });
})